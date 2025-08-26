// components/LogoutButton.tsx
"use client";

import { supabase } from "@/app/libr/supabaseClient";

export default function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Use window.location.href instead of useRouter
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "0.75rem 1.5rem",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "0.5rem",
        cursor: "pointer",
        marginTop: "1rem",
      }}
    >
      Logout
    </button>
  );
}
