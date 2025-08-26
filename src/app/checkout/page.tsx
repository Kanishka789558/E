"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import Checkout from "../components/Checkout";

export default function CheckoutPage() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
  }, []);

  if (!userId) return <div>Loading…</div>;
  return <Checkout />;
}


