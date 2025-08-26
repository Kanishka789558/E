
// "use client";
// import React from "react";
// import "./Hero.css";
// import Image from "next/image";

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
//     <div className="hero">
//       {/* Left Category Menu */}
//       <div className="hero-categories">
//         <ul>
//           {categories.map((cat, index) => (
//             <li key={index}>
//               {cat} <span className="arrow">›</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Banner */}
//       <div className="hero-banner">
//         <Image
//           src="/hero-banner.jpg" // stored in /public
//           alt="iPhone 14 Banner"
//           width={900}
//           height={400}
//           priority
//           className="banner-img"
//         />

//         {/* Text Overlay */}
//         <div className="banner-text">
//           <Image
//             src="/apple-logo.png" // stored in /public
//             alt="Apple Logo"
//             width={20}
//             height={20}
//             className="apple-logo"
//           />
//           <p className="series">iPhone 14 Series</p>
//           <h2>Up to 10% off Voucher</h2>
//           <button className="shop-now">
//             Shop Now <span>→</span>
//           </button>
//         </div>

//         {/* Slider Dots */}
//         <div className="banner-dots">
//           <span></span><span></span><span></span><span></span>
//         </div>
//       </div>
//     </div>
//   );
// }



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
//       <div className="hero-categories">
//         <ul>
//           {categories.map((cat, index) => (
//             <li key={index}>
//               {cat} <span className={styles.arrow}>›</span>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Banner Section */}
//       <div className={styles.hero-banner}>
//         {/* Background Image */}
//         <Image
//           src="/hero-banner.jpg"
//           alt="iPhone Banner"
//           width={892}
//           height={344}
//           priority
//           className={styles.banner-img}
//         />

//         {/* Apple Logo */}
//         <Image
//           src="/apple-logo.png"
//           alt="Apple Logo"
//           width={40}
//           height={49}
//           className={styles.apple-logo}
//         />

//         {/* Overlay Text */}
//         <div className={styles.banner-text}>
//           <p className={styles.series}>iPhone 14 Series</p>
//           <h2>Up to 10% off Voucher</h2>
//           <button className={styles.shop-now}>
//             Shop Now <span>→</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// import Image from "next/image";
//  import styles from "./Heros.module.css";

// export default function Hero() {
//   return (
//     <div className="hero-container">
//       {/* Left Category List */}
//       <ul className="category-list">
//         <li>Woman&apos;s Fashion ›</li>
//         <li>Men&apos;s Fashion ›</li>
//         <li>Electronics ›</li>
//         <li>Home &amp; Lifestyle ›</li>
//         <li>Medicine ›</li>
//         <li>Sports &amp; Outdoor ›</li>
//         <li>Baby&apos;s &amp; Toys ›</li>
//         <li>Groceries &amp; Pets ›</li>
//         <li>Health &amp; Beauty ›</li>
//       </ul>

//       {/* Right Hero Section */}
//       <div className="hero-banner">
//         {/* Apple logo */}
//         <Image
//           src="/apple-logo.png"
//           alt="Apple Logo"
//           width={40}
//           height={49}
//           className="apple-logo"
//         />

//         {/* iPhone image */}
//         <Image
//           src="/hero.JPG"
//           alt="iPhone"
//           width={496}
//           height={352}
//           className="iphone-img"
//         />

//         {/* Caption */}
//         <p className="hero-caption">iPhone 14 Series</p>
//       </div>
//     </div>
//   );
// }













"use client";
import React from "react";
import Image from "next/image";
import styles from "./Heros.module.css";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* Left Category Menu */}
      <div>
        <ul className={styles.categoryList}>
          {categories.map((cat, index) => (
            <li key={index}>
              {cat} <span className={styles.arrow}>›</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Banner Section */}
      <div className={styles.heroBanner}>
        {/* Background Image */}
        <Image
          src="/hero-banner.jpg"
          alt="iPhone Banner"
          width= {496}
          height= {352}
          priority
          className={styles.bannerImg}
        />

        
        {/* Apple Logo + Series (Frame 563) */}
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


        {/* Overlay Text */}
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
