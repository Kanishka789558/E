

// "use client";
// import React from "react";
// import Image from "next/image";
// import styles from "./Heros.module.css";

// const categories = [
//   "Woman's Fashion",
//   "Men's Fashion",
//   "Electronics",
//   "Home & Lifestyle",
//   "Medicine",
//   "Sports & Outdoor",
//   "Baby's & Toys",
//   "Groceries & Pets",
//   "Health & Beauty",
// ];

// export default function Hero() {
//   return (
//     <div className={styles.hero}>
//       {/* Left Category Menu */}
//       <div>
//         <ul className={styles.categoryList}>
//           {categories.map((cat, index) => (
//             <li key={index}>
//               {cat} <span className={styles.arrow}>›</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Banner Section */}
//       <div className={styles.heroBanner}>
//         {/* Background Image */}
//         <Image
//           src="/hero-banner.jpg"
//           alt="iPhone Banner"
//           width= {496}
//           height= {352}
//           priority
//           className={styles.bannerImg}
//         />

        
//         {/* Apple Logo + Series (Frame 563) */}
//         <div className={styles.appleSeriesWrapper}>
//           <Image
//             src="/apple-logo.png"
//             alt="Apple Logo"
//             width={40}
//             height={49}
//             className={styles.appleLogo}
//           />
//           <p className={styles.series}>iPhone 14 Series</p>
//         </div>


//         {/* Overlay Text */}
//         <div className={styles.bannerText}>
          
//           <h2>Up to 10% off Voucher</h2>
//           <button className={styles.shopNow}>
//             Shop Now <span>→</span>
//           </button>

//         </div>
//         <div className={styles.carouselDots}>
//           <span className={`${styles.dot} ${styles.active}`}></span>
//           <span className={styles.dot}></span>
//           <span className={styles.dot}></span>
//           <span className={styles.dot}></span>
//           <span className={styles.dot}></span>
//         </div>

//       </div>
//     </div>
//   );
// }




// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import styles from "./Heros.module.css";

// const categories = [
//   "Woman's Fashion",
//   "Men's Fashion",
//   "Electronics",
//   "Home & Lifestyle",
//   "Medicine",
//   "Sports & Outdoor",
//   "Baby's & Toys",
//   "Groceries & Pets",
//   "Health & Beauty",
// ];

// export default function Hero() {
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);
//   const router = useRouter();

//   const handleArrowClick = (index: number) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   const handleCategorySelect = (category: string) => {
//     router.push(`/category/${encodeURIComponent(category)}`);
//   };

//   return (
//     <div className={styles.hero}>
//       {/* Left Category Menu */}
//       <div>
//         <ul className={styles.categoryList}>
//           {categories.map((cat, index) => (
//             <li key={index} className={styles.categoryItem}>
//               <div className={styles.catRow}>
//                 {cat}
//                 <span
//                   className={styles.arrow}
//                   onClick={() => handleArrowClick(index)}
//                 >
//                   ›
//                 </span>
//               </div>

//               {/* Dropdown */}
//               {openDropdown === index && (
//                 <div className={styles.dropdown}>
//                   <p onClick={() => handleCategorySelect(cat)}>
//                     View {cat} Products
//                   </p>
                  
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Banner Section */}
//       <div className={styles.heroBanner}>
//         <Image
//           src="/hero-banner.jpg"
//           alt="iPhone Banner"
//           width={496}
//           height={352}
//           priority
//           className={styles.bannerImg}
//         />

//         <div className={styles.appleSeriesWrapper}>
//           <Image
//             src="/apple-logo.png"
//             alt="Apple Logo"
//             width={40}
//             height={49}
//             className={styles.appleLogo}
//           />
//           <p className={styles.series}>iPhone 14 Series</p>
//         </div>

//         <div className={styles.bannerText}>
//           <h2>Up to 10% off Voucher</h2>
//           <button className={styles.shopNow}>
//             Shop Now <span>→</span>
//           </button>
//         </div>

//         <div className={styles.carouselDots}>
//           <span className={`${styles.dot} ${styles.active}`}></span>
//           <span className={styles.dot}></span>
//           <span className={styles.dot}></span>
//           <span className={styles.dot}></span>
//           <span className={styles.dot}></span>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Heros.module.css";

const categories = [
  {
    name: "Woman's Fashion",
    subcategories: ["Dresses", "Shoes", "Bags"],
  },
  {
    name: "Men's Fashion",
    subcategories: ["Shirts", "Jeans", "Shoes"],
  },
  {
    name: "Electronics",
    subcategories: ["Mobiles", "Laptops", "Accessories"],
  },
  {
    name: "Home & Lifestyle",
    subcategories: ["Furniture", "Decor", "Appliances"],
  },
  { name: "Medicine", subcategories: ["Vitamins", "OTC", "Prescriptions"] },
  {
    name: "Sports & Outdoor",
    subcategories: ["Fitness", "Cycling", "Camping"],
  },
  {
    name: "Baby's & Toys",
    subcategories: ["Toys", "Clothing", "Accessories"],
  },
  {
    name: "Groceries & Pets",
    subcategories: ["Groceries", "Pet Food", "Pet Care"],
  },
  {
    name: "Health & Beauty",
    subcategories: ["Skincare", "Makeup", "Wellness"],
  },
];

export default function Hero() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const router = useRouter();

  const handleArrowClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleCategorySelect = (subcategory: string) => {
    router.push(`/category/${encodeURIComponent(subcategory)}`);
  };

  return (
    <div className={styles.hero}>
      {/* Left Category Menu */}
      <div>
        <ul className={styles.categoryList}>
          {categories.map((cat, index) => (
            <li key={index} className={styles.categoryItem}>
              <div className={styles.catRow}>
                {cat.name}
                <span
                  className={styles.arrow}
                  onClick={() => handleArrowClick(index)}
                >
                  ›
                </span>
              </div>

              {/* Dropdown */}
              {openDropdown === index && (
                <div className={styles.dropdown}>
                  {cat.subcategories.map((sub, subIndex) => (
                    <p
                      key={subIndex}
                      onClick={() => handleCategorySelect(sub)}
                      className={styles.dropdownItem}
                    >
                      {sub}
                    </p>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Banner Section */}
      <div className={styles.heroBanner}>
        <Image
          src="/hero-banner.jpg"
          alt="iPhone Banner"
          width={496}
          height={352}
          priority
          className={styles.bannerImg}
        />

        <div className={styles.appleSeriesWrapper}>
          <Image
            src="/apple-logo.png"
            alt="Apple Logo"
            width={40}
            height={49}
            className={styles.appleLogo}
          />
          <p className={styles.series}>iPhone 14 Series</p>
        </div>

        <div className={styles.bannerText}>
          <h2>Up to 10% off Voucher</h2>
          <button className={styles.shopNow}>
            Shop Now <span>→</span>
          </button>
        </div>

        <div className={styles.carouselDots}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
}
