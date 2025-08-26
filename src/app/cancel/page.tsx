// "use client";

// import { useRouter } from "next/navigation";

// export default function MyCancellations() {
//   const router = useRouter();

//   const handleCancel = () => {
//     router.push("/"); // redirect to homepage
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>My Cancellations</h2>
//       <p>You have no active cancellations.</p>
//       <button onClick={handleCancel}>Go to Homepage</button>
//     </div>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import styles from "./Cancel.module.css";

export default function MyCancellations() {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Cancellations</h2>
      <p className={styles.cancelText}>You have no active cancellations.</p>
      <button className={styles.cancelButton} onClick={handleCancel}>
        Go to Homepage
      </button>
    </div>
  );
}
