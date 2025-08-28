/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion:  "2025-08-27.basil", });
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const rawBody = await req.text(); // IMPORTANT: raw body
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err.message);
    return new NextResponse("Bad signature", { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderGroupId = session.metadata?.orderGroupId as string | undefined;
      const userId = session.metadata?.userId as string | undefined;

      if (orderGroupId) {
        await supabaseAdmin
          .from("orderss")
          .update({ status: "paid", session_id: session.id, payment_status: "paid" })
          .eq("order_group_id", orderGroupId);
      }
      if (userId) {
        await supabaseAdmin.from("carts").delete().eq("user_id", userId);
      }
    }
    return NextResponse.json({ received: true });
  } catch (e) {
    console.error(e);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }
}
