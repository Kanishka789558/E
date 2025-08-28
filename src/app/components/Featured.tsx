"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import Image from "next/image";
// import styles from "./Featured.module.css";
// import ProductShowcase from "./ProductShowcase";
// import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";


// export default function Featured() {
//   const features = [
//     {
//       icon: <FaTruck className={styles.icon} />,
//       title: "FREE AND FAST DELIVERY",
//       subtitle: "Free delivery for all orders over $140",
//     },
//     {
//       icon: <FaHeadset className={styles.icon} />,
//       title: "24/7 CUSTOMER SERVICE",
//       subtitle: "Friendly 24/7 customer support",
//     },
//     {
//       icon: <FaShieldAlt className={styles.icon} />,
//       title: "MONEY BACK GUARANTEE",
//       subtitle: "We return money within 30 days",
//     },
//   ];

//   return (
//     <div className={styles.productSection}>
//       {/* Header Row */}
//       <div className={styles.headerRow}>
//         {/* Left side */}
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Featured</span>
//           </div>
//           <h2 className={styles.heading}>New Arrival</h2>
//           <div>
//             <ProductShowcase/>   
//           </div>
          
            
          
//         </div>
//         <section className={styles.container}>
//           {features.map((f, i) => (
//             <div key={i} className={styles.card}>
//             <div className={styles.iconWrapper}>{f.icon}</div>
//               <div className={styles.textWrapper}>
//               <h3>{f.title}</h3>
//               <p>{f.subtitle}</p>
//             </div>
//             </div>
//           ))}
//         </section>
//       </div>
      

//     </div>
//   );
// }





import Image from "next/image";
import styles from "./Featured.module.css";
import ProductShowcase from "./ProductShowcase";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

export default function Featured() {
  const features = [
    {
      icon: <FaTruck className={styles.icon} />,
      title: "FREE AND FAST DELIVERY",
      subtitle: "Free delivery for all orders over $140",
    },
    {
      icon: <FaHeadset className={styles.icon} />,
      title: "24/7 CUSTOMER SERVICE",
      subtitle: "Friendly 24/7 customer support",
    },
    {
      icon: <FaShieldAlt className={styles.icon} />,
      title: "MONEY BACK GUARANTEE",
      subtitle: "We return money within 30 days",
    },
  ];

  return (
    <div className={styles.productSection}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <div className={styles.tagBox}></div>
            <span className={styles.tag}>Featured</span>
          </div>
          <h2 className={styles.heading}>New Arrival</h2>
        </div>
      </div>

      {/* New Arrival Products */}
      <div className={styles.productShowcaseWrapper}>
       <ProductShowcase />
      </div>

      {/* Features Section - Now below products */}
      <section className={styles.container}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>{f.icon}</div>
            <div className={styles.textWrapper}>
              <h3>{f.title}</h3>
              <p>{f.subtitle}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
