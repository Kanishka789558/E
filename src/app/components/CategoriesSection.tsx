"use client";





// "use client";
// import React from "react";
// import Image from "next/image";
// import styles from "./CategoriesSection.module.css";

// const categories = [
//   { icon: "/icons/phone.svg", title: "Phones" },
//   { icon: "/icons/laptop.svg", title: "Laptops" },
//   { icon: "/icons/watch.png", title: "Watches" },
//   { icon: "/icons/camera.png", title: "Cameras" },
//   { icon: "/icons/shoes.png", title: "Shoes" },
//   { icon: "/icons/game.png", title: "Gaming" },
// ];

// const CategoriesSection: React.FC = () => {
//   return (
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
{/* <section className={styles.categories}> */}
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
//     <div className={styles.headerRow}> 
//   {/* Left side */}
//   <div className={styles.left}>
//     <div className={styles.tagRow}>
//       <div className={styles.tagBox}></div>
//       <span className={styles.tag}>Categories</span>
//     </div>
//     <h2 className={styles.heading}>Browse By Category</h2>
//   </div>

//   {/* Right side - arrows */}
//   <div className={styles.arrows}>
//     <button className={styles.arrowBtn}>&lt;</button>
//     <button className={styles.arrowBtn}>&gt;</button>
//   </div>
// </div>


  
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

//   );
// };

// export default CategoriesSection;





// import React from "react";
// import Image from "next/image";
// import styles from "./CategoriesSection.module.css";

// const categories = [
//   { icon: "/icons/phone.svg", title: "Phones" },
//   { icon: "/icons/laptop.svg", title: "Computers" },
//   { icon: "/icons/watch.png", title: "SmartWatch" },
//   { icon: "/icons/camera.png", title: "Camera" },
//   { icon: "/icons/headphones.png", title: "HeadPhones" },
//   { icon: "/icons/game.png", title: "Gaming" },
// ];

// const CategoriesSection: React.FC = () => {
//   return (
//     <section className={styles.categories}>
//       {/* Header Row */}
//       <div className={styles.headerRow}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Categories</span>
//           </div>
//           <h2 className={styles.heading}>Browse By Category</h2>
//         </div>

//         {/* Arrows */}
//         <div className={styles.arrows}>
//           <button className={styles.arrowBtn}>&lt;</button>
//           <button className={styles.arrowBtn}>&gt;</button>
//         </div>
//       </div>

//       {/* Categories Grid */}
//       <div className={styles.grid}>
//         {categories.map((cat, index) => (
//           <div key={index} className={styles.card}>
//             <Image
//               src={cat.icon}
//               alt={cat.title}
//               width={56}
//               height={56}
//               className={styles.icon}
//             />
//             <p className={styles.title}>{cat.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Divider Line */}
//       <div className={styles.line}></div>
//     </section>
//   );
// };

// export default CategoriesSection;






// import React, { useRef, useCallback } from "react";
// import Image from "next/image";
// import styles from "./CategoriesSection.module.css";

// const categories = [
//   { icon: "/icons/phone.svg",      title: "Phones" },
//   { icon: "/icons/laptop.svg",     title: "Computers" },
//   { icon: "/icons/watch.png",      title: "SmartWatch" },
//   { icon: "/icons/camera.png",     title: "Camera" },
//   { icon: "/icons/headphones.png", title: "HeadPhones" },
//   { icon: "/icons/game.png",       title: "Gaming" },
// ];

// const CategoriesSection: React.FC = () => {
//   const railRef = useRef<HTMLDivElement>(null);

//   const scrollByCards = useCallback((dir: "left" | "right") => {
//     const rail = railRef.current;
//     if (!rail) return;

//     // width of one card (+ gap) -> smooth, figma-like step
//     const firstCard = rail.querySelector(`.${styles.card}`) as HTMLElement | null;
//     const gap = 30; // keep in sync with CSS gap
//     const step = firstCard ? firstCard.offsetWidth + gap : 200;

//     rail.scrollBy({
//       left: dir === "left" ? -step * 3 : step * 3, // slide ~3 cards
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <section className={styles.categories}>
//       {/* Header */}
//       <div className={styles.headerRow}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox} />
//             <span className={styles.tag}>Categories</span>
//           </div>
//           <h2 className={styles.heading}>Browse By Category</h2>
//         </div>

//         {/* Arrows */}
//         <div className={styles.arrows}>
//           <button
//             aria-label="Previous"
//             className={styles.arrowBtn}
//             onClick={() => scrollByCards("left")}
//           >
//             ‹
//           </button>
//           <button
//             aria-label="Next"
//             className={styles.arrowBtn}
//             onClick={() => scrollByCards("right")}
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       {/* Rail (horizontal) */}
//       <div className={styles.rail} ref={railRef}>
//         <div className={styles.grid}>
//           {categories.map((cat) => (
//             <div key={cat.title} className={styles.card}>
//               <Image
//                 src={cat.icon}
//                 alt={cat.title}
//                 width={56}
//                 height={56}
//                 className={styles.icon}
//                 unoptimized
//               />
//               <p className={styles.title}>{cat.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={styles.line} />
//     </section>
//   );
// };

// export default CategoriesSection;







// import React, { useRef ,useEffect,useState} from "react";
// import Image from "next/image";
// import styles from "./CategoriesSection.module.css";
// import { supabase } from "@/app/libr/supabaseClient";
// import { getImageSrc } from "@/utils/getImageSrc";

// const categories = [
//   { icon: "/icons/phone.png", title: "Phones" },
//   { icon: "/icons/laptop.png", title: "Laptops" },
//   { icon: "/icons/watch.png", title: "Watches" },
//   { icon: "/icons/camera.png", title: "Cameras" },
//   { icon: "/icons/shoes.png", title: "Shoes" },
//   { icon: "/icons/game.png", title: "Gaming" },
// ];

// type Category = {
//   id: number;
//   title: string;
//   icon: string;
// };


// const CategoriesSection: React.FC = () => {
  
//   const [categories, setCategories] = useState<Category[]>([]);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const { data, error } = await supabase.from("categories").select("*");
//       if (error) {
//         console.error("Error fetching categories:", error);
//       } else {
//         setCategories(data);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -300 : 300,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className={styles.categories}>
//       {/* Header */}
//       <div className={styles.headerRow}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Categories</span>
//           </div>
//           <h2 className={styles.heading}>Browse By Category</h2>
//         </div>

//         <div className={styles.arrows}>
//           <button className={styles.arrowBtn} onClick={() => scroll("left")}>&lt;</button>
//           <button className={styles.arrowBtn} onClick={() => scroll("right")}>&gt;</button>
//         </div>
//       </div>

//       {/* Scrollable Categories */}
//       <div className={styles.scrollWrapper} ref={scrollRef}>
//         {categories.map((cat, index) => (
//           <div key={index} className={styles.card}>
//             <Image
//               src={cat.icon}
//               alt={cat.title}
//               width={56}
//               height={56}
//               className={styles.icon}
//               unoptimized
//             />
//             <p className={styles.title}>{cat.title}</p>
//           </div>
//         ))}
//       </div>

//       <div className={styles.line}></div>
//     </section>
//   );
// };

// export default CategoriesSection;



// import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import styles from "./CategoriesSection.module.css";
// import { supabase } from "@/app/libr/supabaseClient";
// import { getImageSrc } from "@/app/utils/getImageSrc";

// type Category = {
//   id: number;
//   title: string;
//   icon: string; // sirf filename aayega database se
// };

// const CategoriesSection: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const { data, error } = await supabase.from("categories").select("*");
//       if (error) {
//         console.error("Error fetching categories:", error);
//       } else {
//         setCategories(data);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -300 : 300,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className={styles.categories}>
//       {/* Header */}
//       <div className={styles.headerRow}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Categories</span>
//           </div>
//           <h2 className={styles.heading}>Browse By Category</h2>
//         </div>

//         <div className={styles.arrows}>
//           <button className={styles.arrowBtn} onClick={() => scroll("left")}>&lt;</button>
//           <button className={styles.arrowBtn} onClick={() => scroll("right")}>&gt;</button>
//         </div>
//       </div>

//       {/* Scrollable Categories */}
//       <div className={styles.scrollWrapper} ref={scrollRef}>
//         {categories.map((cat) => (
//           <div key={cat.id} className={styles.card}>
//             <Image
//               src={getImageSrc(cat.icon)} // yahan function use ho raha hai
//               alt={cat.title}
//               width={56}
//               height={56}
//               className={styles.icon}
//               unoptimized
//             />
//             <p className={styles.title}>{cat.title}</p>
//           </div>
//         ))}
//       </div>

//       <div className={styles.line}></div>
//     </section>
//   );
// };

// export default CategoriesSection;






import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CategoriesSection.module.css";
import { supabase } from "@/app/libr/supabaseClient";
import { getImageSrc } from "@/app/utils/getImageSrc";

type Category = {
  id: number;
  title: string;
  icon: string; // sirf filename aayega database se
};

const CategoriesSection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        // yahan hum icons ka path public/icons ke sath add kar rahe hain
        const updatedData = data.map((cat: Category) => ({
          ...cat,
          icon: `icons/${cat.icon}`, // icons folder ke path ke sath filename
        }));
        setCategories(updatedData);
      }
    };

    fetchCategories();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.categories}>
      {/* Header */}
      <div className={styles.headerRow}>
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <div className={styles.tagBox}></div>
            <span className={styles.tag}>Categories</span>
          </div>
          <h2 className={styles.heading}>Browse By Category</h2>
        </div>

        <div className={styles.arrows}>
          <button className={styles.arrowBtn} onClick={() => scroll("left")}>&lt;</button>
          <button className={styles.arrowBtn} onClick={() => scroll("right")}>&gt;</button>
        </div>
      </div>

      {/* Scrollable Categories */}
      <div className={styles.scrollWrapper} ref={scrollRef}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.card}>
            <Image
              src={getImageSrc(cat.icon)} // ab icons/{filename} jayega
              alt={cat.title}
              width={56}
              height={56}
              className={styles.icon}
              unoptimized
            />
            <p className={styles.title}>{cat.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.line}></div>
    </section>
  );
};

export default CategoriesSection;
