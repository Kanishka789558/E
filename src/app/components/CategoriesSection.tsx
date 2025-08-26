





"use client";
import React from "react";
import Image from "next/image";
import styles from "./CategoriesSection.module.css";

const categories = [
  { icon: "/icons/phone.png", title: "Phones" },
  { icon: "/icons/laptop.png", title: "Laptops" },
  { icon: "/icons/watch.png", title: "Watches" },
  { icon: "/icons/camera.png", title: "Cameras" },
  { icon: "/icons/shoes.png", title: "Shoes" },
  { icon: "/icons/game.png", title: "Gaming" },
];

const CategoriesSection: React.FC = () => {
  return (
    // <section className={styles.categories}>
    //   {/* Left Header */}
    //   <div className={styles.left}>
    //     <div className={styles.tagRow}>
    //       <div className={styles.tagBox}></div>
    //       <span className={styles.tag}>Categories</span>
    //     </div>
    //     {/* <h2 className={styles.title}>Browse by Categories</h2> */}
    //   </div>

    //   {/* Arrows */}
    //   <div className={styles.arrows}>
    //     <button>&lt;</button>
    //     <button>&gt;</button>
    //   </div>

    //   {/* Categories Grid */}
    //   <div className={styles.grid}>
    //     {categories.map((cat, index) => (
    //       <div key={index} className={styles.card}>
    //         <Image
    //           src={cat.icon}
    //           alt={cat.title}
    //           width={56}
    //           height={56}
    //           className={styles.icon}
    //         />
    //         <p className={styles.title}>{cat.title}</p>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Divider Line */}
    //   <div className={styles.line}></div>
    // </section>
<section className={styles.categories}>
  {/* Header Row with left + arrows */}
  {/* <div className={styles.headerRow}>
    <div className={styles.left}>
      <div className={styles.tagRow}>
        <div className={styles.tagBox}></div>
        <span className={styles.tag}>Categories</span>
      </div>
      
    </div>
    <div/>

    {/* Arrows now aligned to right */}
     {/* <div className={styles.arrows}>
      <button>&lt;</button>
      <button>&gt;</button> */}
    {/* </div>
  </div>  */}
    <div className={styles.headerRow}> 
  {/* Left side */}
  <div className={styles.left}>
    <div className={styles.tagRow}>
      <div className={styles.tagBox}></div>
      <span className={styles.tag}>Categories</span>
    </div>
    <h2 className={styles.heading}>Browse By Category</h2>
  </div>

  {/* Right side - arrows */}
  <div className={styles.arrows}>
    <button className={styles.arrowBtn}>&lt;</button>
    <button className={styles.arrowBtn}>&gt;</button>
  </div>
</div>


  
  <div className={styles.grid}>
    {categories.map((cat, index) => (
      <div key={index} className={styles.card}>
        <Image
          src={cat.icon}
          alt={cat.title}
          width={56}
          height={56}
          className={styles.icon}
        />
        <p className={styles.title}>{cat.title}</p>
      </div>
    ))}






  </div> 

  {/* Divider Line */}
  <div className={styles.line}></div>
  
</section>

  );
};

export default CategoriesSection;
