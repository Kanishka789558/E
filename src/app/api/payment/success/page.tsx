// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import { useEffect ,Suspense} from "react";
// import { supabase } from "@/app/libr/supabaseClient";


// export const dynamic = "force-dynamic"; 
// export default function SuccessPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const sessionId = searchParams.get("session_id");

//   useEffect(() => {
//     const saveOrder = async () => {
//       // Get current user
//       const { data: { user } } = await supabase.auth.getUser();
//       console.log("User:", user, "Error:", );
//       if (!user) return;

//       // Cart items fetch karo
//       const { data: cart } = await supabase
//         .from("carts")
//         .select("product_id, quantity")
//         .eq("user_id", user.id);
//         console.log("Cart Data:", cart);

//       if (cart?.length) {
//         // Orders table me insert karo
//         await supabase.from("orderss").insert(
//           cart.map(item => ({
//             user_id: user.id,
//             product_id: item.product_id,
//             status: "pending",
//           }))
//         );

//         // Cart clear karo
//         await supabase.from("carts").delete().eq("user_id", user.id);
//       }

//       // My orders page pe redirect
//       router.push("/myorder");
//     };

//     if (sessionId) saveOrder();
//   }, [sessionId, router]);

//   return <h2>Payment successful! Saving your order...</h2>;
// }



"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";
import { supabase } from "@/app/libr/supabaseClient";

export const dynamic = "force-dynamic";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const saveOrder = async () => {
      // Current user fetch karo
      const { data: { user } } = await supabase.auth.getUser();
      console.log("User:", user);

      if (!user) return;

      // Cart items fetch karo
      const { data: cart } = await supabase
        .from("carts")
        .select("product_id, quantity")
        .eq("user_id", user.id);
      console.log("Cart Data:", cart);

      if (cart?.length) {
        // Orders table me insert karo
        await supabase.from("orderss").insert(
          cart.map(item => ({
            user_id: user.id,
            product_id: item.product_id,
            status: "pending",
          }))
        );

        // Cart clear karo
        await supabase.from("carts").delete().eq("user_id", user.id);
      }

      // My orders page pe redirect karo
      router.push("/myorder");
    };

    if (sessionId) saveOrder();
  }, [sessionId, router]);

  return <h2>Payment successful! Saving your order...</h2>;
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <SuccessContent />
    </Suspense>
  );
}
