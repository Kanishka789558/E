"use client";

// import styles from "./today.module.css";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Today() {
//   // Countdown timer logic
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--; seconds = 59;
//         } else if (hours > 0) {
//           hours--; minutes = 59; seconds = 59;
//         } else if (days > 0) {
//           days--; hours = 23; minutes = 59; seconds = 59;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       img: "/gamepad.png",
//       discount: "-40%",
//       name: "HAVIT HV-G92 Gamepad",
//       oldPrice: "$160",
//       newPrice: "$120",
//       rating: 88,
//     },
//     {
//       id: 2,
//       img: "/keyboard.png",
//       discount: "-35%",
//       name: "AK-900 Wired Keyboard",
//       oldPrice: "$960",
//       newPrice: "$640",
//       rating: 75,
//     },
//     {
//       id: 3,
//       img: "/monitor.png",
//       discount: "-30%",
//       name: "IPS LCD Gaming Monitor",
//       oldPrice: "$400",
//       newPrice: "$370",
//       rating: 99,
//     },
//     {
//       id: 4,
//       img: "/chair.png",
//       discount: "-25%",
//       name: "S-Series Comfort Chair",
//       oldPrice: "$400",
//       newPrice: "$375",
//       rating: 99,
//     },
//   ];

//   return (
//     <section className={styles.todayWrapper}>
      {/* Header */}
      {/* <div className={styles.header}>
        <span className={styles.tag}>Today’s</span>
        <h2 className={styles.title}>Flash Sales</h2>

        {/* Countdown */}
        {/* <div className={styles.countdown}>
          <div>
            <p>{timeLeft.days.toString().padStart(2, "0")}</p>
            <span>Days</span>
          </div>
          <div>
            <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
            <span>Hours</span>
          </div>
          <div>
            <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
            <span>Minutes</span>
          </div>
          <div>
            <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
            <span>Seconds</span>
          </div>
        </div>

        {/* Arrows */}
        {/* <div className={styles.arrows}>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div> */}  
        // <div className={styles.header}>
        //     <div className={styles.left}>
        //         <div className={styles.tagBox}></div>
        //         <span className={styles.tag}>Today’s</span>
        //         <h2 className={styles.title}>Flash Sales</h2>
        //     <div/>
            

        //     <div className={styles.countdown}>
        //     {/* countdown blocks */}
        //     </div>

        //     <div className={styles.arrows}>
        //         <button>&lt;</button>
        //         <button>&gt;</button>
        //     </div>
        // </div>


      {/* Products */}
//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             <div className={styles.discount}>{p.discount}</div>
//             <Image src={p.img} alt={p.name} width={200} height={180} />
//             <h3>{p.name}</h3>
//             <div className={styles.price}>
//               <span className={styles.newPrice}>{p.newPrice}</span>
//               <span className={styles.oldPrice}>{p.oldPrice}</span>
//             </div>
//             <p className={styles.rating}>⭐ {p.rating}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }









// import styles from "./today.module.css";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Today() {
//   // Countdown timer logic
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       img: "/gamepad.png",
//       discount: "-40%",
//       name: "HAVIT HV-G92 Gamepad",
//       oldPrice: "$160",
//       newPrice: "$120",
//       rating: 88,
//     },
//     {
//       id: 2,
//       img: "/keyboard.png",
//       discount: "-35%",
//       name: "AK-900 Wired Keyboard",
//       oldPrice: "$960",
//       newPrice: "$640",
//       rating: 75,
//     },
//     {
//       id: 3,
//       img: "/monitor.png",
//       discount: "-30%",
//       name: "IPS LCD Gaming Monitor",
//       oldPrice: "$400",
//       newPrice: "$370",
//       rating: 99,
//     },
//     {
//       id: 4,
//       img: "/chair.png",
//       discount: "-25%",
//       name: "S-Series Comfort Chair",
//       oldPrice: "$400",
//       newPrice: "$375",
//       rating: 99,
//     },
//   ];

//   return (
//     <section className={styles.todayWrapper}>
//       {/* Header */}
//       <div className={styles.header}>
//         {/* <div className={styles.left}>
//            <div className={styles.tagBox}></div> 
//           <span className={styles.tag}>Today’s</span>
//           <h2 className={styles.title}>Flash Sales</h2>
//         </div> */}
//         <div className={styles.left}>
//             <div className={styles.tagRow}>
//                 <div className={styles.tagBox}></div>
//                 <span className={styles.tag}>Today’s</span>
//             </div>
//             <h2 className={styles.title}>Flash Sales</h2>
//         </div>


//         {/* Countdown */}
//         <div className={styles.countdown}>
//           <div>
//             <p>{timeLeft.days.toString().padStart(2, "0")}</p>
//             <span>Days</span>
//           </div>
//           <div>
//             <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
//             <span>Hours</span>
//           </div>
//           <div>
//             <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
//             <span>Minutes</span>
//           </div>
//           <div>
//             <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
//             <span>Seconds</span>
//           </div>
//         </div>

//         {/* Arrows */}
//         <div className={styles.arrows}>
//           <button>&lt;</button>
//           <button>&gt;</button>
//         </div>
//       </div>

//       {/* Products */}
//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             <div className={styles.discount}>{p.discount}</div>
//             <Image src={p.img} alt={p.name} width={200} height={180} />
//             <h3>{p.name}</h3>
//             <div className={styles.price}>
//               <span className={styles.newPrice}>{p.newPrice}</span>
//               <span className={styles.oldPrice}>{p.oldPrice}</span>
//             </div>
//             <p className={styles.rating}>⭐ {p.rating}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// import styles from "./today.module.css";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Today() {
//   // Countdown timer logic
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       img: "/gamepad.png",
//       discount: "-40%",
//       name: "HAVIT HV-G92 Gamepad",
//       oldPrice: "$160",
//       newPrice: "$120",
//       rating: 88,
//     },
//     {
//       id: 2,
//       img: "/keyboard.png",
//       discount: "-35%",
//       name: "AK-900 Wired Keyboard",
//       oldPrice: "$960",
//       newPrice: "$640",
//       rating: 75,
//     },
//     {
//       id: 3,
//       img: "/monitor.png",
//       discount: "-30%",
//       name: "IPS LCD Gaming Monitor",
//       oldPrice: "$400",
//       newPrice: "$370",
//       rating: 99,
//     },
//     {
//       id: 4,
//       img: "/chair.png",
//       discount: "-25%",
//       name: "S-Series Comfort Chair",
//       oldPrice: "$400",
//       newPrice: "$375",
//       rating: 99,
//     },
//   ];

//   return (
//     <section className={styles.todayWrapper}>
//       {/* Header */}
//       <div className={styles.header}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Today’s</span>
//           </div>
//           <h2 className={styles.title}>Flash Sales</h2>
//         </div>

//         {/* Countdown */}
//         <div className={styles.countdown}>
//           <div>
//             <p>{timeLeft.days.toString().padStart(2, "0")}</p>
//             <span>Days</span>
//           </div>
//           <div className={styles.colon}>
//             <span></span>
//             <span></span>
//           </div>
//           <div>
//             <p>{timeLeft.hours.toString().padStart(2, "0")}</p>
//             <span>Hours</span>
//           </div>
//           <div className={styles.colon}>
//             <span></span>
//             <span></span>
//           </div>
//           <div>
//             <p>{timeLeft.minutes.toString().padStart(2, "0")}</p>
//             <span>Minutes</span>
//           </div>
//           <div className={styles.colon}>
//             <span></span>
//             <span></span>
//           </div>

//           <div>
//             <p>{timeLeft.seconds.toString().padStart(2, "0")}</p>
//             <span>Seconds</span>
//           </div>
//         </div>

//         {/* Arrows */}
//         <div className={styles.arrows}>
//           <button>&lt;</button>
//           <button>&gt;</button>
//         </div>
//       </div>

//       {/* Products */}
//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             <div className={styles.discount}>{p.discount}</div>

//             {/* Action buttons */}
//             <div className={styles.actions}>
//               <button className={styles.actionBtn}>
//                 {/* Heart icon */}
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M4.318 6.318a4.5 4.5 0 016.364 0L12 
//                        7.636l1.318-1.318a4.5 4.5 0 116.364 
//                        6.364L12 21.364l-7.682-7.682a4.5 
//                        4.5 0 010-6.364z"
//                   />
//                 </svg>
//               </button>

//               <button className={styles.actionBtn}>
//                 {/* Eye icon */}
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M15 12a3 3 0 11-6 0 3 3 0 
//                        016 0zM2.458 12C3.732 7.943 
//                        7.523 5 12 5c4.477 0 8.268 
//                        2.943 9.542 7-1.274 4.057-5.065 
//                        7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <Image src={p.img} alt={p.name} width={200} height={180} />
//             <h3>{p.name}</h3>
//             <div className={styles.price}>
//               <span className={styles.newPrice}>{p.newPrice}</span>
              
//               <span className={styles.oldPrice}>{p.oldPrice}</span>
//             </div>
//             {/* <p className={styles.rating}>⭐ {p.rating}</p> */}
//             {/* <div className={styles.rating}>
//               {"★".repeat(p.rating)}
//               {"☆".repeat(5 - p.rating)}
//             </div> */}
//             <div className={styles.rating}>
//               {"★".repeat(Math.min(5, Math.max(0, Math.round(p.rating / 20))))}
//               {"☆".repeat(5 - Math.min(5, Math.max(0, Math.round(p.rating / 20))))}
//             </div>

//           </div>
//         ))}
//       </div>
//       <div className={styles.buttonContainer}>
//         <button className={styles.button}>
//            View All Products
//         </button>
//        </div>
//        <div className={styles.line}></div>;
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";
// import { useEffect, useState, useMemo } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./today.module.css";

// type DBProduct = {
//   id: number;           // bigint in DB → number in JS
//   name: string;
//   price: number;
//   image: string | null;
//   description: string | null;
// };

// export default function Today() {
//   // countdown (unchanged)
//   const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) { minutes--; seconds = 59; }
//         else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
//         else if (days > 0)   { days--; hours = 23; minutes = 59; seconds = 59; }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // dynamic data
//   const [uid, setUid] = useState<string | null>(null);
//   const [products, setProducts] = useState<DBProduct[]>([]);
//   const [wishIds, setWishIds] = useState<Set<number>>(new Set()); // product_ids currently in wishlist
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       // who is logged in?
//       const { data: { user } } = await supabase.auth.getUser();
//       const userId = user?.id ?? null;
//       setUid(userId);

//       // fetch products for the section (limit/ordering as you like)
//       const { data: prods, error: pErr } = await supabase
//         .from("products")
//         .select("id,name,price,image,description")
//         .order("id", { ascending: true })
//         .limit(8);

//       if (!pErr) setProducts((prods ?? []) as DBProduct[]);

//       // if logged in, fetch user's wishlist to prefill hearts
//       if (userId) {
//         const { data: wl, error: wErr } = await supabase
//           .from("wishlist")
//           .select("product_id")
//           .eq("user_id", userId);

//         if (!wErr) setWishIds(new Set((wl ?? []).map((r) => Number(r.product_id))));
//       }

//       setLoading(false);
//     };
//     load();
//   }, []);

//   // toggle wishlist for a product
//   const toggleWish = async (productId: number) => {
//     if (!uid) return alert("Please log in to use wishlist.");

//     if (wishIds.has(productId)) {
//       // remove
//       const { error } = await supabase
//         .from("wishlist")
//         .delete()
//         .eq("user_id", uid)
//         .eq("product_id", productId);

//       if (!error) {
//         setWishIds((prev) => {
//           const next = new Set(prev);
//           next.delete(productId);
//           return next;
//         });
//       }
//     } else {
//       // add
//       const { error } = await supabase
//         .from("wishlist")
//         .insert([{ user_id: uid, product_id: productId }]);
//       if (!error) {
//         setWishIds((prev) => new Set(prev).add(productId));
//       }
//     }
//   };

//   // fake rating for display (you can store rating later in DB)
//   const stars = useMemo(() => (p: DBProduct) => "★★★★☆", []);

//   if (loading) return <section className={styles.todayWrapper}>Loading…</section>;

//   return (
//     <section className={styles.todayWrapper}>
//       {/* header + countdown (unchanged UI) */}
//       <div className={styles.header}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Today’s</span>
//           </div>
//           <h2 className={styles.title}>Flash Sales</h2>
//         </div>
//         <div className={styles.countdown}>
//           <div><p>{String(timeLeft.days).padStart(2, "0")}</p><span>Days</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.hours).padStart(2, "0")}</p><span>Hours</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.minutes).padStart(2, "0")}</p><span>Minutes</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.seconds).padStart(2, "0")}</p><span>Seconds</span></div>
//         </div>
//         <div className={styles.arrows}><button>&lt;</button><button>&gt;</button></div>
//       </div>

//       {/* cards from DB */}
//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             {/* discount badge if you want; else remove */}
//             {/* <div className={styles.discount}>-20%</div> */}

//             <div className={styles.actions}>
//               <button
//                 className={styles.actionBtn}
//                 aria-label="Toggle wishlist"
//                 onClick={() => toggleWish(p.id)}
//                 title={wishIds.has(p.id) ? "Remove from wishlist" : "Add to wishlist"}
//               >
//                 {/* filled/outline heart */}
//                 {wishIds.has(p.id) ? (
//                   <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
//                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 
//                     3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 
//                     13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 
//                     6.86-8.55 11.54L12 21.35z"/>
//                   </svg>
//                 ) : (
//                   <svg viewBox="0 0 24 24" width="22" height="22">
//                     <path fill="none" stroke="currentColor" strokeWidth="1.5"
//                       d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 
//                       116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
//                   </svg>
//                 )}
//               </button>

//               <button className={styles.actionBtn} aria-label="Quick view">
//                 <svg viewBox="0 0 24 24" width="22" height="22">
//                   <path fill="none" stroke="currentColor" strokeWidth="1.5"
//                     d="M15 12a3 3 0 11-6 0 3 3 0 
//                     016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 
//                     8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 
//                     0-8.268-2.943-9.542-7z"/>
//                 </svg>
//               </button>
//             </div>

//             <Image
//               src={`/${p.image ?? "placeholder.png"}`}
//               alt={p.name}
//               width={200}
//               height={180}
//             />
//             <h3>{p.name}</h3>
//             <div className={styles.price}>
//               <span className={styles.newPrice}>${Number(p.price).toFixed(2)}</span>
//             </div>
//             <div className={styles.rating}>{stars(p)}</div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.buttonContainer}>
//         <button className={styles.button}>View All Products</button>
//       </div>
//       <div className={styles.line}></div>
//     </section>
//   );
// }













// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./today.module.css";

// type DBProduct = {
//   id: number;
//   name: string;
//   price: number;
//   image: string | null;
// };

// export default function Today() {
//   // countdown (UI unchanged)
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const [uid, setUid] = useState<string | null>(null);
//   const [products, setProducts] = useState<DBProduct[]>([]);
//   const [wishIds, setWishIds] = useState<Set<number>>(new Set());

//   useEffect(() => {
//     const load = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       const userId = user?.id ?? null;
//       setUid(userId);

//       const { data: prods } = await supabase
//         .from("products")
//         .select("id,name,price,image")
//         .order("id", { ascending: true })
//         .limit(4);
//       setProducts((prods ?? []) as DBProduct[]);

//       if (userId) {
//         const { data: wl } = await supabase
//           .from("wishlist")
//           .select("product_id")
//           .eq("user_id", userId);
//         setWishIds(new Set((wl ?? []).map((r) => Number(r.product_id))));
//       }
//     };
//     load();
//   }, []);

//   const toggleWish = async (productId: number) => {
//     if (!uid) return alert("Please log in!");
//     if (wishIds.has(productId)) {
//       await supabase
//         .from("wishlist")
//         .delete()
//         .eq("user_id", uid)
//         .eq("product_id", productId);
//       setWishIds((prev) => {
//         const next = new Set(prev);
//         next.delete(productId);
//         return next;
//       });
//     } else {
//       await supabase.from("wishlist").insert([{ user_id: uid, product_id: productId }]);
//       setWishIds((prev) => new Set(prev).add(productId));
//     }
//   };

//   return (
//     <section className={styles.todayWrapper}>
//       {/* Header + countdown (same as before) */}
//       <div className={styles.header}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Today’s</span>
//           </div>
//           <h2 className={styles.title}>Flash Sales</h2>
//         </div>
//         <div className={styles.countdown}>
//           <div><p>{String(timeLeft.days).padStart(2, "0")}</p><span>Days</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.hours).padStart(2, "0")}</p><span>Hours</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.minutes).padStart(2, "0")}</p><span>Minutes</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.seconds).padStart(2, "0")}</p><span>Seconds</span></div>
//         </div>
//         <div className={styles.arrows}><button>&lt;</button><button>&gt;</button></div>
//       </div>

//       {/* Product cards (same design as old) */}
//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             <div className={styles.actions}>
//               <button
//                 className={styles.actionBtn}
//                 onClick={() => toggleWish(p.id)}
//               >
//                 {wishIds.has(p.id) ? "❤️" : "🤍"}
//               </button>
//               <button className={styles.actionBtn}>👁</button>
//             </div>
//             <Image
//               src={`/${p.image ?? "placeholder.png"}`}
//               alt={p.name}
//               width={200}
//               height={180}
//             />
//             <h3>{p.name}</h3>
//             <div className={styles.price}>
//               <span className={styles.newPrice}>${p.price.toFixed(2)}</span>
//             </div>
//             <div className={styles.rating}>★★★★☆</div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.buttonContainer}>
//         <button className={styles.button}>View All Products</button>
//       </div>
//       <div className={styles.line}></div>
//     </section>
//   );
// }




// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./today.module.css";
// import { useRouter } from "next/navigation";
// import router from "next/router";

// type DBProduct = {
//   id: number;
//   name: string;
//   price: number;
//   image: string | null;
// };

// export default function Today() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 3,
//     hours: 23,
//     minutes: 19,
//     seconds: 56,
//   });

//   const [uid, setUid] = useState<string | null>(null);
//   const [products, setProducts] = useState<DBProduct[]>([]);
//   const [wishIds, setWishIds] = useState<Set<number>>(new Set());

//   // Countdown logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes, seconds } = prev;
//         if (seconds > 0) seconds--;
//         else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }
//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Load products and wishlist
//   useEffect(() => {
//     const load = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       const userId = user?.id ?? null;
//       setUid(userId);

//       // Fetch products
//       const { data: prods } = await supabase
//         .from("products")
//         .select("id,name,price,image")
//         .order("id", { ascending: true })
//         .limit(4);
//       setProducts((prods ?? []) as DBProduct[]);

//       // Fetch wishlist for logged-in user
//       if (userId) {
//         const { data: wl } = await supabase
//           .from("wishlist")
//           .select("product_id")
//           .eq("user_id", userId);
//         setWishIds(new Set((wl ?? []).map((r) => Number(r.product_id))));
//       }
//     };
//     load();
//   }, []);

//   // Toggle wishlist
//   const toggleWish = async (productId: number) => {
//     if (!uid) return alert("Please log in!");

//     if (wishIds.has(productId)) {
//       // Remove from wishlist
//       await supabase
//         .from("wishlist")
//         .delete()
//         .eq("user_id", uid)
//         .eq("product_id", productId);

//       setWishIds((prev) => {
//         const next = new Set(prev);
//         next.delete(productId);
//         return next;
//       });
//     } else {
//       // Add to wishlist
//       await supabase
//         .from("wishlist")
//         .insert([{ user_id: uid, product_id: productId }]);

//       setWishIds((prev) => new Set(prev).add(productId));
//     }
//   };

//   return (
//     <><section className={styles.todayWrapper}>
//       {/* Header + Countdown */}
//       <div className={styles.header}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>Today’s</span>
//           </div>
//           <h2 className={styles.title}>Flash Sales</h2>
//         </div>
//         <div className={styles.countdown}>
//           <div><p>{String(timeLeft.days).padStart(2, "0")}</p><span>Days</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.hours).padStart(2, "0")}</p><span>Hours</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.minutes).padStart(2, "0")}</p><span>Minutes</span></div>
//           <div className={styles.colon}><span></span><span></span></div>
//           <div><p>{String(timeLeft.seconds).padStart(2, "0")}</p><span>Seconds</span></div>
//         </div>
//         <div className={styles.arrows}><button>&lt;</button><button>&gt;</button></div>
//       </div>

//       {/* Product Cards */}

//       <div className={styles.products}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             <div className={styles.actions}>
//               <button
//                 className={styles.actionBtn}
//                 onClick={() => toggleWish(p.id)}
//               >
//                 {wishIds.has(p.id) ? "❤️" : "🤍"}
//               </button>

//               <button
//                 className={styles.actionBtn}
                
//               >
//               👁
//             </button>
//           </div>
//           ,
//           <Image
//             src={`/${p.image ?? "placeholder.png"}`}
//             alt={p.name}
//             width={200}
//             height={180} />
//           ,
//           <h3>{p.name}</h3>
//           ,
//           <div className={styles.price}>
//             <span className={styles.newPrice}>${p.price.toFixed(2)}</span>
//           </div>
//           ,
//           <div className={styles.rating}>★★★★☆</div>))}
//       </div>
//       ))}
//     </div><div className={styles.buttonContainer}>
//         <button className={styles.button}>View All Products</button>
//       </div><div className={styles.line}></div></>
//     </section>
//   );
// }



//important for client-side routing

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./Today.module.css";
import { useRouter } from "next/navigation"; // App Router hook


type DBProduct = {
  id: number;
  name: string;
  price: number;
  image: string | null;
};

export default function Today() {
  const router = useRouter(); // initialize router
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const [uid, setUid] = useState<string | null>(null);
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [wishIds, setWishIds] = useState<Set<number>>(new Set());

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load products and wishlist
  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      const userId = user?.id ?? null;
      setUid(userId);

      const { data: prods } = await supabase
        .from("products")
        .select("id,name,price,image")
        .order("id", { ascending: true })
        .limit(4);
      setProducts((prods ?? []) as DBProduct[]);

      if (userId) {
        const { data: wl } = await supabase
          .from("wishlist")
          .select("product_id")
          .eq("user_id", userId);
        setWishIds(new Set((wl ?? []).map((r) => Number(r.product_id))));
      }
    };
    load();
  }, []);

  // Toggle wishlist
  const toggleWish = async (productId: number) => {
    if (!uid) return alert("Please log in!");

    if (wishIds.has(productId)) {
      await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", uid)
        .eq("product_id", productId);

      setWishIds((prev) => {
        const next = new Set(prev);
        next.delete(productId);
        return next;
      });
    } else {
      await supabase
        .from("wishlist")
        .insert([{ user_id: uid, product_id: productId }]);

      setWishIds((prev) => new Set(prev).add(productId));
    }
  };

  // Navigate to ProductDetail
  const goToDetail = (id: number) => {
    router.push(`/productdetail/${id}`); // pass product id in URL
  };

  return (
    <section className={styles.todayWrapper}>
      {/* Header + Countdown */}
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <div className={styles.tagBox}></div>
            <span className={styles.tag}>Today’s</span>
          </div>
          <h2 className={styles.title}>Flash Sales</h2>
        </div>
        <div className={styles.countdown}>
          <div><p>{String(timeLeft.days).padStart(2, "0")}</p><span>Days</span></div>
          <div className={styles.colon}><span></span><span></span></div>
          <div><p>{String(timeLeft.hours).padStart(2, "0")}</p><span>Hours</span></div>
          <div className={styles.colon}><span></span><span></span></div>
          <div><p>{String(timeLeft.minutes).padStart(2, "0")}</p><span>Minutes</span></div>
          <div className={styles.colon}><span></span><span></span></div>
          <div><p>{String(timeLeft.seconds).padStart(2, "0")}</p><span>Seconds</span></div>
        </div>
        <div className={styles.arrows}><button>&lt;</button><button>&gt;</button></div>
      </div>

      {/* Product Cards */}
      <div className={styles.products}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.actions}>
              <button
                className={styles.actionBtn}
                onClick={() => toggleWish(p.id)}
              >
                {wishIds.has(p.id) ? "❤️" : "🤍"}
              </button>

              <button
                className={styles.actionBtn}
                onClick={() => goToDetail(p.id)} // 👈 added navigation
              >
                👁
              </button>
            </div>
            <Image
              src={`/${p.image ?? "placeholder.png"}`}
              alt={p.name}
              width={200}
              height={180}
            />
            <h3>{p.name}</h3>
            <div className={styles.price}>
              <span className={styles.newPrice}>${p.price.toFixed(2)}</span>
            </div>
            <div className={styles.rating}>★★★★☆</div>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>View All Products</button>
      </div>
      <div className={styles.line}></div>
    </section>
  );
}


