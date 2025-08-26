"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";

// import styles from "./ManageAccount.module.css";

// export default function ManageAccount() {
//   return (
//     <section className={styles.container}>
//       <h2 className={styles.title}>Manage My Account</h2>

//       {/* Personal Info */}
//       <div className={styles.section}>
//         <h3 className={styles.subtitle}>Personal Information</h3>
//         <div className={styles.formRow}>
//           <div className={styles.inputGroup}>
//             <label>First Name</label>
//             <input type="text" placeholder="John" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Last Name</label>
//             <input type="text" placeholder="Doe" />
//           </div>
//         </div>

//         <div className={styles.formRow}>
//           <div className={styles.inputGroup}>
//             <label>Email</label>
//             <input type="email" placeholder="john@example.com" />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Address</label>
//             <input type="text" placeholder="123 Main Street" />
//           </div>
//         </div>
//       </div>

//       {/* Password Change */}
//       <div className={styles.section}>
//         <h3 className={styles.subtitle}>Password Changes</h3>
//         <div className={styles.inputGroup}>
//           <label>Current Password</label>
//           <input type="password" placeholder="********" />
//         </div>
//         <div className={styles.inputGroup}>
//           <label>New Password</label>
//           <input type="password" placeholder="********" />
//         </div>
//         <div className={styles.inputGroup}>
//           <label>Confirm New Password</label>
//           <input type="password" placeholder="********" />
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className={styles.actions}>
//         <button className={styles.cancelBtn}>Cancel</button>
//         <button className={styles.saveBtn}>Save Changes</button>
//       </div>
//     </section>
//   );
// }









// "use client";

// import styles from "./manageaccount.module.css";

// export default function ManageAccount() {
//   return (
//     <div className={styles.pageWrapper}>
//       {/* Breadcrumb (Top Left) */}
//       <div className={styles.breadcrumb}>
//         <span>Home</span>
//         <span className={styles.separator}>/</span>
//         <span>My Account</span>
//       </div>

//       {/* Welcome Message (Top Right) */}
//       <div className={styles.welcome}>
//         Welcome! <span className={styles.username}>Md Rimel</span>
//       </div>

//       <div className={styles.layout}>
//         {/* Sidebar (Left Content) */}
//         <aside className={styles.sidebar}>
//           <h3>Manage My Account</h3>
//           <ul>
//             <li className={styles.active}>My Profile</li>
//             <li>Address Book</li>
//             <li>My Payment Options</li>
//           </ul>

//           <h3>My Orders</h3>
//           <ul>
//             <li>My Returns</li>
//             <li>My Cancellations</li>
//           </ul>

//           <h3>My Wishlist</h3>
//         </aside>

//         {/* Main Section (Already Done) */}
//         <section className={styles.container}>
//           <h2 className={styles.title}>Manage My Account</h2>

//           {/* Personal Info */}
//           <div className={styles.section}>
//             <h3 className={styles.subtitle}>Personal Information</h3>
//             <div className={styles.formRow}>
//               <div className={styles.inputGroup}>
//                 <label>First Name</label>
//                 <input type="text" placeholder="John" />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Last Name</label>
//                 <input type="text" placeholder="Doe" />
//               </div>
//             </div>

//             <div className={styles.formRow}>
//               <div className={styles.inputGroup}>
//                 <label>Email</label>
//                 <input type="email" placeholder="john@example.com" />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Address</label>
//                 <input type="text" placeholder="123 Main Street" />
//               </div>
//             </div>
//           </div>

//           {/* Password Change */}
//           <div className={styles.section}>
//             <h3 className={styles.subtitle}>Password Changes</h3>
//             <div className={styles.inputGroup}>
//               <label>Current Password</label>
//               <input type="password" placeholder="********" />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>New Password</label>
//               <input type="password" placeholder="********" />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Confirm New Password</label>
//               <input type="password" placeholder="********" />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className={styles.actions}>
//             <button className={styles.cancelBtn}>Cancel</button>
//             <button className={styles.saveBtn}>Save Changes</button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }














import { useEffect, useState } from "react";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@/app/libr/supabaseClient";

import styles from "./ManageAccount.module.css";

export default function ManageAccount() {
  // const supabase = createClientComponentClient();
  const [profile, setProfile] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch user profile on mount
  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!error && data) {
        setProfile(data);
      }
      setLoading(false);
    };
    getProfile();
  }, []);

  // Update profile
  const handleSave = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase.from("profiles").upsert({
      user_id: user.id,
      first_name: profile.first_name,
      last_name: profile.last_name,
      email: profile.email,
      address: profile.address,
      updated_at: new Date(),
    });

    if (!error) alert("Profile updated successfully!");
    else alert("Error updating profile");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span>Home</span>
        <span className={styles.separator}>/</span>
        <span>My Account</span>
      </div>

      {/* Welcome */}
      <div className={styles.welcome}>
        Welcome! <span className={styles.username}>{profile.first_name}</span>
      </div>

      <div className={styles.layout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h3>Manage My Account</h3>
          <ul>
            <li className={styles.active}>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h3>My Orders</h3>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <h3>My Wishlist</h3>
        </aside>

        {/* Main Section */}
        <section className={styles.container}>
          <h2 className={styles.title}>Edit Your Profile</h2>

          {/* Personal Info */}
          <div className={styles.section}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input
                  type="text"
                  value={profile.first_name}
                  onChange={(e) =>
                    setProfile({ ...profile, first_name: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input
                  type="text"
                  value={profile.last_name}
                  onChange={(e) =>
                    setProfile({ ...profile, last_name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Address</label>
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) =>
                    setProfile({ ...profile, address: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          
          
          {/* Password Change */}
           <div className={styles.section}>
             <h3 className={styles.subtitle}>Password Changes</h3>
             <div className={styles.inputGroup}>
               <label>Current Password</label>
               <input type="password" placeholder="********" />
             </div>
             <div className={styles.inputGroup}>
               <label>New Password</label>
               <input type="password" placeholder="********" />
             </div>
             <div className={styles.inputGroup}>
               <label>Confirm New Password</label>
               <input type="password" placeholder="********" />
             </div>
           </div>

           {/* Buttons */}
           <div className={styles.actions}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button onClick={handleSave} className={styles.saveBtn}>
              Save Changes
            </button>
            </div>
         
        </section>
      </div>
    </div>
  );
}
