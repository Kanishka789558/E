/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import { createClient } from "@supabase/supabase-js";

// export const runtime = "nodejs"; // needed for webhooks later too

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  
//   apiVersion: "2025-08-27.basil",
// });

// // Admin client — server only
// const supabaseAdmin = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

// export async function POST(req: NextRequest) {
//   try {
//     const { userId } = await req.json();
//     if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

//     // 1) Pull the user's cart from DB (server-side trusted)
//     const { data: cart, error } = await supabaseAdmin
//       .from("carts")
//       .select(`
//         quantity,
//         product:products!carts_product_id_fkey (
//           id, name, price
//         )
//       `)
//       .eq("user_id", userId);

//     if (error) throw error;
//     if (!cart || cart.length === 0) {
//       return NextResponse.json({ error: "Cart empty" }, { status: 400 });
//     }

//     // 2) Create pending order rows (same as your old placeOrder)
//     //    We'll tag them with an order_group_id to update later.
//     const orderGroupId = crypto.randomUUID();

//     const { error: insertErr } = await supabaseAdmin.from("orderss").insert(
//       cart.map((row: any) => ({
//         user_id: userId,
//         product_id: row.product.id,
//         status: "pending",
//         order_group_id: orderGroupId,      // <-- add this column in step 3
//       }))
//     );
//     if (insertErr) throw insertErr;

//     // 3) Build Stripe line items from trusted DB prices
//     const line_items = cart.map((row: any) => ({
//       price_data: {
//         currency: "inr",
//         product_data: { name: row.product.name },
//         unit_amount: Math.round(Number(row.product.price || 0) * 100), // rupees -> paise
//       },
//       quantity: Number(row.quantity || 1),
//     }));

//     // 4) Create Checkout Session
//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",
//       payment_method_types: ["card", "upi"], // enable UPI + cards
//       line_items,
//       success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&og=${orderGroupId}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
//       metadata: {
//         userId,
//         orderGroupId,
//       },
//     });

//     return NextResponse.json({ id: session.id });
//   } catch (e: any) {
//     console.error(e);
//     return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
//   }
// }


// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-08-27.basil",
// });

// export async function POST(req: Request) {
//   try {
//     const { cartItems } = await req.json();

//     // Stripe checkout session banao
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"], // cards + UPI enable
//       mode: "payment",
//       line_items: cartItems.map((item: any) => ({
//         price_data: {
//           currency: "inr",
//           product_data: { name: item.name },
//           unit_amount: item.price * 100, // price in paisa
//         },
//         quantity: item.quantity,
//       })),
//       success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,

//       cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
//     });

//     return NextResponse.json({ url: session.url });
    
//   } catch (err: any) {
//     console.error("Stripe error:", err.message);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Valid Stripe API version lagao
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { cartItems } = await req.json();

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      throw new Error("NEXT_PUBLIC_SITE_URL environment variable not set");
    }

    // ✅ Checkout session create karo
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // cards enable
      mode: "payment",
      line_items: cartItems.map((item: any) => ({
        price_data: {
          currency: "inr",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // paisa me price
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
