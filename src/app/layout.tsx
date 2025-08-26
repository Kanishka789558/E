/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */




// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import Home from "@/app/components/Home";
// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();

//   return (
//     <html lang="en">
//       <body>
//           <Header />  
//          {pathname === "/" ? <Home /> : children} 
          
          
//           <Footer />  
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/app/libr/supabaseClient";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Home from "@/app/components/Home";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  // Supabase user session fetch and listen
  useEffect(() => {
    // Initial user fetch
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));

    // Listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Pass user to Header so it can show login/account buttons */}
        <Header  />

        {/* Home page on "/" else render children */}
        {pathname === "/" ? <Home /> : children}

        <Footer />
      </body>
    </html>
  );
}
