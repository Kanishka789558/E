
// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";

// export default function AuthCallback() {
//   const router = useRouter();

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data }) => {
//       if (data.session) {
//         router.replace("/"); // login success → home/dashboard
//       } else {
//         router.replace("/login"); // failed → login
//       }
//     });
//   }, [router]);

//   return <p style={{ padding: 24 }}>Finishing sign-in...</p>;
// }



"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/libr/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push("/"); // redirect to home/dashboard
      } else {
        router.push("/login");
      }
    };
    handleSession();
  }, [router]);

  return <p>Loading...</p>;
}
