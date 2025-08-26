/* eslint-disable @next/next/no-img-element */
// "use client";

// import { supabase } from "@/app/libr/supabaseClient";
// import { useRouter } from "next/navigation";

// export default function LogoutPage() {
//   const router = useRouter();

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login"); // redirect after logout
//   };

//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Logout</h1>
//       <button
//         onClick={handleLogout}
//         style={{
//           padding: "0.75rem 1.5rem",
//           backgroundColor: "#000",
//           color: "#fff",
//           borderRadius: "0.5rem",
//           cursor: "pointer",
//           marginTop: "1rem",
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// components/LogoutButton.tsx
// "use client";

// import { supabase } from "@/app/libr/supabaseClient";

// export default function LogoutButton() {
//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     // After logout, you can use window.location to redirect instead of useRouter
//     window.location.href = "/login";
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       style={{
//         padding: "0.75rem 1.5rem",
//         backgroundColor: "#000",
//         color: "#fff",
//         borderRadius: "0.5rem",
//         cursor: "pointer",
//         marginTop: "1rem",
//       }}
//     >
//       Logout
//     </button>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Email/Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      router.push("/"); // Redirect after login
    }
  };

  // Google OAuth Login
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
    if (error) setError(error.message);
  };

  return (
    <main className={styles.loginPage}>
      {/* Left image */}
      <div className={styles.imageSection}>
        <img
          src="/signup-image.jpg"
          alt="Shopping cart and phone"
          className={styles.loginImage}
        />
      </div>

      {/* Right form */}
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={handleLogin} className={styles.form}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className={styles.formActions}>
              <button
                type="submit"
                disabled={loading}
                className={styles.loginBtn}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
              <Link href="/forgot-password" className={styles.forgotLink}>
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Google login button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={styles.googleBtn}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
}
