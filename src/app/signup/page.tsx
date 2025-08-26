/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

// import { useState } from "react";
// import styles from "./signup.module.css";
// import Login from "./Login";


// export default function SignUp() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
    
//     <main className={styles.signupPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.signupImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Create an account</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form}>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email or Phone Number" />
//             <input type="password" placeholder="Password" />

//             <button type="submit" className={styles.createBtn}>
//               Create Account
//             </button>

//             <button type="button" className={styles.googleBtn}>
//               <img src="/google-icon.svg" alt="Google" />
//               Sign up with Google
//             </button>
//           </form>

//           <p className={styles.loginLink}>
//             Already have an account?{" "}
//             <button
//               type="button"
//               className={styles.loginAnchor}
//               onClick={() => setShowLogin(true)}
//             >
//               Log In
//             </button>
//           </p>

//           {/* Conditionally render Login */}
//           {showLogin && <Login />}
//         </div>
//       </div>
//     </main>
//     </>
//   );
// }

"use client";

// import { useState } from "react";
// import styles from "./signup.module.css";
// import login from "@/app/login";
// import 


// export default function SignUp() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
    
//     <main className={styles.signupPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.signupImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Create an account</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form}>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email or Phone Number" />
//             <input type="password" placeholder="Password" />

//             <button type="submit" className={styles.createBtn}>
//               Create Account
//             </button>

//             <button type="button" className={styles.googleBtn}>
//               <img src="/google-icon.svg" alt="Google" />
//               Sign up with Google
//             </button>
//           </form>

//           <p className={styles.loginLink}>
//             Already have an account?{" "}
//             <button
//               type="button"
//               className={styles.loginAnchor}
//               onClick={() => setShowLogin(true)}
//             >
//               Log In
//             </button>
//           </p>

//           {/* Conditionally render Login */}
//           {showLogin && <login />}
//         </div>
//       </div>
//     </main>
//     </>
//   );
// }












// "use client";


// import Link from "next/link";
// import styles from "./signup.module.css";

// export default function SignUp() {
//   return (
//     <main className={styles.signupPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.signupImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Create an account</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form}>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email or Phone Number" />
//             <input type="password" placeholder="Password" />

//             <button type="submit" className={styles.createBtn}>
//               Create Account
//             </button>

//             <button type="button" className={styles.googleBtn}>
//               <img src="/google-icon.svg" alt="Google" />
//               Sign up with Google
//             </button>
//           </form>

//           <p className={styles.loginLink}>
//             Already have an account?{" "}
//             <Link href="/login" className={styles.loginAnchor}>
//               Log In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import styles from "./signup.module.css";
// import { supabase } from "@/app/libr/supabaseClient";

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState<string | null>(null);
//   const [err, setErr] = useState<string | null>(null);

//   const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

//   async function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setErr(null);
//     setMsg(null);
//     setLoading(true);

//     try {
//       if (isEmail(emailOrPhone)) {
//         // Email/password sign up
//         const { error } = await supabase.auth.signUp({
//           email: emailOrPhone,
//           password,
//           options: {
//             data: { full_name: name }, // stored in user_metadata
//             emailRedirectTo: `${location.origin}/auth/callback`,
//           },
//         });
//         if (error) throw error;

//         // With "Confirm email" ON, user must verify email
//         setMsg("Check your email to confirm your account.");
//       } else {
//         // (Optional) Phone OTP path — only works if Phone provider is enabled
//         // const { error } = await supabase.auth.signInWithOtp({ phone: emailOrPhone });
//         // if (error) throw error;
//         // setMsg("OTP sent to your phone.");
//         throw new Error("Please enter a valid email address (phone OTP not enabled).");
//       }
//     } catch (e: any) {
//       setErr(e.message ?? "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function onGoogle() {
//     setErr(null);
//     setMsg(null);
//     setLoading(true);
//     try {
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: "google",
//         options: { redirectTo: `${location.origin}/auth/callback` },
//       });
//       if (error) throw error;
//       // Redirects to Google → back to /auth/callback
//     } catch (e: any) {
//       setErr(e.message ?? "Google sign-in failed");
//       setLoading(false);
//     }
//   }

//   return (
//     <main className={styles.signupPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.signupImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Create an account</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form} onSubmit={onSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email or Phone Number"
//               value={emailOrPhone}
//               onChange={(e) => setEmailOrPhone(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               minLength={6}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <button type="submit" className={styles.createBtn} disabled={loading}>
//               {loading ? "Creating..." : "Create Account"}
//             </button>

//             <button
//               type="button"
//               className={styles.googleBtn}
//               onClick={onGoogle}
//               disabled={loading}
//             >
//               <img src="/google-icon.svg" alt="Google" />
//               Sign up with Google
//             </button>

//             {/* Feedback */}
//             {msg && (
//               <p aria-live="polite" style={{ marginTop: 12, color: "#16a34a" }}>
//                 {msg}
//               </p>
//             )}
//             {err && (
//               <p aria-live="assertive" style={{ marginTop: 12, color: "#dc2626" }}>
//                 {err}
//               </p>
//             )}
//           </form>

//           <p className={styles.loginLink}>
//             Already have an account?{" "}
//             <Link href="/login" className={styles.loginAnchor}>
//               Log In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }










// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import styles from "./signup.module.css";
// import { supabase } from "@/app/libr/supabaseClient";

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState<string | null>(null);
//   const [err, setErr] = useState<string | null>(null);
//   const [otpSent, setOtpSent] = useState(false);

//   // Email format check
//   const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

//   // Email/password signup OR phone signup
//   async function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setErr(null);
//     setMsg(null);
//     setLoading(true);

//     try {
//       if (isEmail(emailOrPhone)) {
//         // Email signup
//         const { error } = await supabase.auth.signUp({
//           email: emailOrPhone,
//           password,
//           options: {
//             data: { full_name: name },
//             emailRedirectTo: `${location.origin}/auth/callback`,
//           },
//         });
//         if (error) throw error;
//         setMsg("Check your email to confirm your account.");
//       } else {
//         // Phone signup via OTP
//         const { error } = await supabase.auth.signInWithOtp({
//           phone: emailOrPhone,
//         });
//         if (error) throw error;
//         setOtpSent(true);
//         setMsg("OTP sent to your phone.");
//       }
//     } catch (e: any) {
//       setErr(e.message ?? "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // OTP verify
//   async function onVerifyOtp() {
//     setErr(null);
//     setMsg(null);
//     setLoading(true);

//     try {
//       const { error } = await supabase.auth.verifyOtp({
//         phone: emailOrPhone,
//         token: otp,
//         type: "sms",
//       });
//       if (error) throw error;
//       setMsg("Phone verified! Account created successfully.");
//     } catch (e: any) {
//       setErr(e.message ?? "OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Google signup/login
//   async function onGoogle() {
//     setErr(null);
//     setMsg(null);
//     setLoading(true);

//     try {
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: "google",
//         options: { redirectTo: `${location.origin}/auth/callback` },
//       });
//       if (error) throw error;
//     } catch (e: any) {
//       setErr(e.message ?? "Google sign-in failed");
//       setLoading(false);
//     }
//   }

//   return (
//     <main className={styles.signupPage}>
//       {/* Left image */}
//       <div className={styles.imageSection}>
//         <img
//           src="/signup-image.jpg"
//           alt="Shopping cart and phone"
//           className={styles.signupImage}
//         />
//       </div>

//       {/* Right form */}
//       <div className={styles.formSection}>
//         <div className={styles.formContainer}>
//           <h1>Create an account</h1>
//           <p>Enter your details below</p>

//           <form className={styles.form} onSubmit={onSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Email or Phone Number"
//               value={emailOrPhone}
//               onChange={(e) => setEmailOrPhone(e.target.value)}
//               required
//             />
//             {/* 🔑 Password input will always show */}
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               minLength={6}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             {!otpSent ? (
//               <button
//                 type="submit"
//                 className={styles.createBtn}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Create Account"}
//               </button>
//             ) : (
//               <>
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={onVerifyOtp}
//                   className={styles.createBtn}
//                   disabled={loading}
//                 >
//                   {loading ? "Verifying..." : "Verify OTP"}
//                 </button>
//               </>
//             )}

//             <button
//               type="button"
//               className={styles.googleBtn}
//               onClick={onGoogle}
//               disabled={loading}
//             >
//               <img src="/google-icon.svg" alt="Google" />
//               Sign up with Google
//             </button>

//             {/* Feedback */}
//             {msg && (
//               <p aria-live="polite" style={{ marginTop: 12, color: "#16a34a" }}>
//                 {msg}
//               </p>
//             )}
//             {err && (
//               <p
//                 aria-live="assertive"
//                 style={{ marginTop: 12, color: "#dc2626" }}
//               >
//                 {err}
//               </p>
//             )}
//           </form>

//           <p className={styles.loginLink}>
//             Already have an account?{" "}
//             <Link href="/login" className={styles.loginAnchor}>
//               Log In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./signup.module.css";
import { supabase } from "@/app/libr/supabaseClient";

export default function SignUp() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [otpSent, setOtpSent] = useState(false);

  const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setMsg(null);
    setLoading(true);
    try {
      if (isEmail(emailOrPhone)) {
        const { error } = await supabase.auth.signUp({
          email: emailOrPhone,
          password,
          options: {
            data: { full_name: name },
            emailRedirectTo: `${location.origin}/auth/callback`,
          },
        });
        if (error) throw error;
        setMsg("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.signInWithOtp({
          phone: emailOrPhone,
        });
        if (error) throw error;
        setOtpSent(true);
        setMsg("OTP sent to your phone.");
      }
    } catch (e: any) {
      setErr(e.message ?? "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  async function onVerifyOtp() {
    setErr(null);
    setMsg(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        phone: emailOrPhone,
        token: otp,
        type: "sms",
      });
      if (error) throw error;
      setMsg("Phone verified! Account created successfully.");
    } catch (e: any) {
      setErr(e.message ?? "OTP verification failed");
    } finally {
      setLoading(false);
    }
  }

  async function onGoogle() {
    setErr(null);
    setMsg(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${location.origin}/auth/callback`, // must match Supabase allowed URL
        },
      });
      if (error) throw error;
      // Supabase handles redirect automatically
    } catch (e: any) {
      setErr(e.message ?? "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.signupPage}>
      <div className={styles.imageSection}>
        <img
          src="/signup-image.jpg"
          alt="Shopping cart and phone"
          className={styles.signupImage}
        />
      </div>

      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>

          <form className={styles.form} onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {!otpSent ? (
              <button
                type="submit"
                className={styles.createBtn}
                disabled={loading}
              >
                {loading ? "Processing..." : "Create Account"}
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={onVerifyOtp}
                  className={styles.createBtn}
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </>
            )}

            <button
              type="button"
              className={styles.googleBtn}
              onClick={onGoogle}
              disabled={loading}
            >
              <img src="/google-icon.svg" alt="Google" />
              Sign up with Google
            </button>

            {msg && (
              <p aria-live="polite" style={{ marginTop: 12, color: "#16a34a" }}>
                {msg}
              </p>
            )}
            {err && (
              <p
                aria-live="assertive"
                style={{ marginTop: 12, color: "#dc2626" }}
              >
                {err}
              </p>
            )}
          </form>

          <p className={styles.loginLink}>
            Already have an account?{" "}
            <Link href="/login" className={styles.loginAnchor}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
