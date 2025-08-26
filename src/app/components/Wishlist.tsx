/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import styles from "./Wishlist.module.css";
// import Link from "next/link";
// import Image from "next/image";

// export default function Wishlist() {
//   const wishlistItems = [
//     {
//       id: 1,
//       title: "Gucci duffle bag",
//       price: 960,
//       oldPrice: 1160,
//       discount: "-35%",
//       image: "/bag.png",
//     },
//     {
//       id: 2,
//       title: "RGB liquid CPU Cooler",
//       price: 1960,
//       oldPrice: 2200,
//       discount: "",
//       image: "/cooler.png",
//     },
//     {
//       id: 3,
//       title: "GP11 Shooter USB Gamepad",
//       price: 550,
//       oldPrice: "",
//       discount: "",
//       image: "/gamepad.png",
//     },
//     {
//       id: 4,
//       title: "Quilted Satin Jacket",
//       price: 750,
//       oldPrice: "",
//       discount: "",
//       image: "/jacket.png",
//     },
//   ];

//   const justForYou = [
//     {
//       id: 5,
//       title: "ASUS FHD Gaming Laptop",
//       price: 960,
//       oldPrice: 1160,
//       discount: "-25%",
//       image: "/laptop.png",
//       rating:4,
//     },
//     {
//       id: 6,
//       title: "IPS LCD Gaming Monitor",
//       price: 1160,
//       oldPrice: 1300,
//       discount: "",
//       image: "/monitor.png",
//       rating:4,
//     },
//     {
//       id: 7,
//       title: "HAVIT HV-G92 Gamepad",
//       price: 560,
//       oldPrice: "",
//       discount: "NEW",
//       image: "/red-gamepad.png",
//       rating:4,
//     },
//     {
//       id: 8,
//       title: "AK-900 Wired Keyboard",
//       price: 200,
//       oldPrice: "",
//       discount: "",
//       image: "/keyboard.png",
//       rating:4,
//     },
//   ];

//   return (
//     <main className={styles.wishlistPage}>
//       {/* Wishlist Header */}
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn}>Move All To Bag</button>
//       </div>

//       {/* Wishlist Items */}
//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             {item.discount && (
//               <span className={styles.discount}>{item.discount}</span>
//             )}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.title}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${item.price}</span>
//               {item.oldPrice && (
//                 <span className={styles.oldPrice}>${item.oldPrice}</span>
//               )}
//             </div>
//             <button className={styles.addToCart}>Add To Cart</button>
//           </div>
//         ))}
//       </div>

//       {/* Just For You Section */}
//       <div className={styles.justForYouHeader}>
//         <h2>Just For You</h2>
//         <Link href="#" className={styles.seeAll}>
//           See All
//         </Link>
//       </div>

//       <div className={styles.cardGrid}>
//         {justForYou.map((item) => (
//           <div key={item.id} className={styles.card}>
//             {item.discount && (
//               <span className={styles.discount}>{item.discount}</span>
//             )}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.title}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${item.price}</span>
//               {item.oldPrice && (
//                 <span className={styles.oldPrice}>${item.oldPrice}</span>
//               )}
//             </div>
//             <button className={styles.addToCart}>Add To Cart</button>
//             {/* ✅ Rating */}
//             <div className={styles.rating}>
//               {"★".repeat(wishlistItems.rating)}
//               {"☆".repeat(5 - wishlistItems.rating)}
//               <span className={styles.reviews}>({wishlistItems.reviews})</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }




// "use client";

// import styles from "./Wishlist.module.css";
// import Link from "next/link";
// import Image from "next/image";

// export default function Wishlist() {
//   const wishlistItems = [
//     {
//       id: 1,
//       title: "Gucci duffle bag",
//       price: 960,
//       oldPrice: 1160,
//       discount: "-35%",
//       image: "/bag.png",
//     },
//     {
//       id: 2,
//       title: "RGB liquid CPU Cooler",
//       price: 1960,
//       oldPrice: 2200,
//       discount: "",
//       image: "/cooler.png",
//     },
//     {
//       id: 3,
//       title: "GP11 Shooter USB Gamepad",
//       price: 550,
//       oldPrice: "",
//       discount: "",
//       image: "/gamepad.png",
//     },
//     {
//       id: 4,
//       title: "Quilted Satin Jacket",
//       price: 750,
//       oldPrice: "",
//       discount: "",
//       image: "/jacket.png",
//     },
//   ];

//   const justForYou = [
//     {
//       id: 5,
//       title: "ASUS FHD Gaming Laptop",
//       price: 960,
//       oldPrice: 1160,
//       discount: "-25%",
//       image: "/laptop.png",
//       rating: 4,
//     },
//     {
//       id: 6,
//       title: "IPS LCD Gaming Monitor",
//       price: 1160,
//       oldPrice: 1300,
//       discount: "",
//       image: "/monitor.png",
//       rating: 4,
//     },
//     {
//       id: 7,
//       title: "HAVIT HV-G92 Gamepad",
//       price: 560,
//       oldPrice: "",
//       discount: "NEW",
//       image: "/red-gamepad.png",
//       rating: 4,
//     },
//     {
//       id: 8,
//       title: "AK-900 Wired Keyboard",
//       price: 200,
//       oldPrice: "",
//       discount: "",
//       image: "/keyboard.png",
//       rating: 4,
//     },
//   ];

//   return (
//     <main className={styles.wishlistPage}>
//       {/* Wishlist Header */}
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn}>Move All To Bag</button>
//       </div>

//       {/* Wishlist Items */}
//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             {item.discount && (
//               <span className={styles.discount}>{item.discount}</span>
//             )}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.title}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${item.price}</span>
//               {item.oldPrice && (
//                 <span className={styles.oldPrice}>${item.oldPrice}</span>
//               )}
//             </div>
//             <button className={styles.addToCart}>Add To Cart</button>
//           </div>
//         ))}
//       </div>

//       {/* Just For You Section */}
//       <div className={styles.justForYouHeader}>
//         <h2>Just For You</h2>
//         <Link href="#" className={styles.seeAll}>
//           See All
//         </Link>
//       </div>

//       <div className={styles.cardGrid}>
//         {justForYou.map((item) => (
//           <div key={item.id} className={styles.card}>
//             {item.discount && (
//               <span className={styles.discount}>{item.discount}</span>
//             )}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.title}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${item.price}</span>
//               {item.oldPrice && (
//                 <span className={styles.oldPrice}>${item.oldPrice}</span>
//               )}
//             </div>
//             <button className={styles.addToCart}>Add To Cart</button>

//             {/* ✅ Fixed Rating */}
//             <div className={styles.rating}>
//               {"★".repeat(item.rating)}
//               {"☆".repeat(5 - item.rating)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }













// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Wishlist.module.css";
// import Image from "next/image";

// export default function Wishlist({ user }) {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // 🔹 Fetch wishlist from Supabase
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       const { data, error } = await supabase
//         .from("wishlist")
//         .select("id, product_id, product(name, price, description)")
//         .eq("user_id", user.id);

//       if (error) console.error(error);
//       else setWishlistItems(data);
//     };
//     fetchWishlist();
//   }, [user]);

//   // 🔹 Add single item to cart
//   const addToCart = async (productId) => {
//     const { error } = await supabase.from("carts").insert([
//       {
//         user_id: user.id,
//         user_uuid: user.uuid,
//         product_id: productId,
//         quantity: 1,
//       },
//     ]);
//     if (error) console.error(error);
//     else alert("Added to cart!");
//   };

//   // 🔹 Move all to bag
//   const moveAllToBag = async () => {
//     const rows = wishlistItems.map((item) => ({
//       user_id: user.id,
//       user_uuid: user.uuid,
//       product_id: item.product_id,
//       quantity: 1,
//     }));

//     const { error } = await supabase.from("carts").insert(rows);
//     if (error) console.error(error);
//     else alert("All items moved to cart!");
//   };

//   // 🔹 Delete from wishlist
//   const deleteWishlistItem = async (wishlistId: any) => {
//     const { error } = await supabase
//       .from("wishlist")
//       .delete()
//       .eq("id", wishlistId);

//     if (error) console.error(error);
//     else setWishlistItems(wishlistItems.filter((i) => i.id !== wishlistId));
//   };

//   return (
//     <main className={styles.wishlistPage}>
//       {/* Header */}
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn} onClick={moveAllToBag}>
//           Move All To Bag
//         </button>
//       </div>

//       {/* Wishlist Items */}
//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <Image
//               src="/placeholder.png"
//               alt={item.product.name}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.product.name}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${item.product.price}</span>
//             </div>
//             <button
//               className={styles.addToCart}
//               onClick={() => addToCart(item.product_id)}
//             >
//               Add To Cart
//             </button>
//             <button
//               className={styles.deleteBtn}
//               onClick={() => deleteWishlistItem(item.id)}
//             >
//               ❌
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }













// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Wishlist.module.css";

// export default function Wishlist({ user }: { user: { id: string } }) {
//   const [wishlistItems, setWishlistItems] = useState<any[]>([]);

//   useEffect(() => {
//     const run = async () => {
//       const { data, error } = await supabase
//         .from("wishlist")
//         .select(`
//           id,
//           product_id,
//           product:product_id ( id, name, price, description )
//         `)
//         .eq("user_id", user.id);
//       if (!error) setWishlistItems(data ?? []);
//     };
//     run();
//   }, [user.id]);

//   const addToCart = async (productId: number) => {
//     const { error } = await supabase.from("carts").insert([
//       { user_id: user.id, product_id: productId, quantity: 1 },
//     ]);
//     if (!error) alert("Added to cart!");
//   };

//   const moveAllToBag = async () => {
//     if (!wishlistItems.length) return;
//     const rows = wishlistItems.map((w) => ({
//       user_id: user.id, product_id: w.product_id, quantity: 1,
//     }));
//     const { error } = await supabase.from("carts").insert(rows);
//     if (!error) alert("All items moved to cart!");
//   };

//   const deleteWishlistItem = async (wishlistId: number) => {
//     const { error } = await supabase.from("wishlist").delete().eq("id", wishlistId);
//     if (!error) setWishlistItems((prev) => prev.filter((i) => i.id !== wishlistId));
//   };

//   return (
//     <main className={styles.wishlistPage}>
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn} onClick={moveAllToBag}>Move All To Bag</button>
//       </div>

//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <Image src="/placeholder.png" alt={item.product?.name ?? "Product"} width={200} height={200} className={styles.productImg}/>
//             <h3 className={styles.title}>{item.product?.name}</h3>
//             <div className={styles.priceRow}><span className={styles.price}>${item.product?.price}</span></div>
//             <button className={styles.addToCart} onClick={() => addToCart(item.product_id)}>Add To Cart</button>
//             <button className={styles.deleteBtn} onClick={() => deleteWishlistItem(item.id)}>❌</button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Wishlist.module.css";

// export default function Wishlist() {
//   const [uid, setUid] = useState<string | null>(null);
//   const [wishlistItems, setWishlistItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const load = async (userId: string) => {
//     const { data, error } = await supabase
//       .from("wishlist")
//       .select(`
//         id,
//         product_id,
//         product:product_id ( id, name, price, image, description )
//       `)
//       .eq("user_id", userId);
//     if (!error) setWishlistItems(data ?? []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data: { user } }) => {
//       const id = user?.id ?? null;
//       setUid(id);
//       if (id) load(id);
//       else setLoading(false);
//     });
//   }, []);

//   const addToCart = async (productId: number) => {
//     if (!uid) return alert("Please log in!");
//     const { error } = await supabase.from("carts").insert([{ user_id: uid, product_id: productId, quantity: 1 }]);
//     if (!error) alert("Added to cart!");
//   };

//   const moveAllToBag = async () => {
//     if (!uid || !wishlistItems.length) return;
//     const rows = wishlistItems.map((w) => ({ user_id: uid, product_id: w.product_id, quantity: 1 }));
//     const { error } = await supabase.from("carts").insert(rows);
//     if (!error) alert("All items moved to cart!");
//   };

//   const deleteWishlistItem = async (wishlistId: number) => {
//     const { error } = await supabase.from("wishlist").delete().eq("id", wishlistId);
//     if (!error) setWishlistItems((prev) => prev.filter((i) => i.id !== wishlistId));
//   };

//   if (loading) return <main className={styles.wishlistPage}>Loading…</main>;
//   if (!uid) return <main className={styles.wishlistPage}>Please log in.</main>;

//   return (
//     <main className={styles.wishlistPage}>
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn} onClick={moveAllToBag}>Move All To Bag</button>
//       </div>

//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <Image
//               src={`/${item.product?.image ?? "placeholder.png"}`}
//               alt={item.product?.name ?? "Product"}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.product?.name}</h3>
//             <div className={styles.priceRow}><span className={styles.price}>${Number(item.product?.price ?? 0).toFixed(2)}</span></div>
//             <button className={styles.addToCart} onClick={() => addToCart(item.product_id)}>Add To Cart</button>
//             <button className={styles.deleteBtn} onClick={() => deleteWishlistItem(item.id)}>❌</button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Wishlist.module.css";

// export default function Wishlist() {
//   const [uid, setUid] = useState<string | null>(null);
//   const [wishlistItems, setWishlistItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const load = async (userId: string) => {
//     const { data, error } = await supabase
//       .from("wishlist")
//       .select(`
//         id,
//         product_id,
//         product:product_id ( id, name, price, image )
//       `)
//       .eq("user_id", userId);

//     if (!error) setWishlistItems(data ?? []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data: { user } }) => {
//       const id = user?.id ?? null;
//       setUid(id);
//       if (id) load(id);
//       else setLoading(false);
//     });
//   }, []);

//   const addToCart = async (productId: number) => {
//     if (!uid) return alert("Please log in!");
//     const { error } = await supabase
//       .from("carts")
//       .insert([{ user_id: uid, product_id: productId, quantity: 1 }]);
//     if (!error) alert("Added to cart!");
//   };

//   const moveAllToBag = async () => {
//     if (!uid || !wishlistItems.length) return;
//     const rows = wishlistItems.map((w) => ({
//       user_id: uid,
//       product_id: w.product_id,
//       quantity: 1,
//     }));
//     const { error } = await supabase.from("carts").insert(rows);
//     if (!error) alert("All items moved to cart!");
//   };

//   if (loading) return <main className={styles.wishlistPage}>Loading…</main>;
//   if (!uid) return <main className={styles.wishlistPage}>Please log in.</main>;

//   return (
//     <main className={styles.wishlistPage}>
//       {/* Header row same as old UI */}
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn} onClick={moveAllToBag}>
//           Move All To Bag
//         </button>
//       </div>

//       {/* Wishlist Cards */}
//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <Image
//               src={`/${item.product?.image ?? "placeholder.png"}`}
//               alt={item.product?.name ?? "Product"}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.product?.name}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>
//                 ${Number(item.product?.price ?? 0).toFixed(2)}
//               </span>
//             </div>
//             <button
//               className={styles.addToCart}
//               onClick={() => addToCart(item.product_id)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Just For You Section (same UI, static for now) */}
//       <div className={styles.justForYouHeader}>
//         <h2>Just For You</h2>
//         <Link href="#" className={styles.seeAll}>
//           See All
//         </Link>
//       </div>
//     </main>
//   );
// }






// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Wishlist.module.css";

// export default function Wishlist() {
//   const [uid, setUid] = useState<string | null>(null);
//   const [wishlistItems, setWishlistItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const load = async (userId: string) => {
//     const { data, error } = await supabase
//       .from("wishlist")
//       .select(`
//         id,
//         product_id,
//         product:product_id ( id, name, price, image )
//       `)
//       .eq("user_id", userId);

//     if (!error) setWishlistItems(data ?? []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data: { user } }) => {
//       const id = user?.id ?? null;
//       setUid(id);
//       if (id) load(id);
//       else setLoading(false);
//     });
//   }, []);

//   const addToCart = async (productId: number) => {
//     if (!uid) return alert("Please log in!");
//     const { error } = await supabase
//       .from("carts")
//       .insert([{ user_id: uid, product_id: productId, quantity: 1 }]);
//     if (!error) alert("Added to cart!");
//   };

//   const moveAllToBag = async () => {
//     if (!uid || !wishlistItems.length) return;
//     const rows = wishlistItems.map((w) => ({
//       user_id: uid,
//       product_id: w.product_id,
//       quantity: 1,
//     }));
//     const { error } = await supabase.from("carts").insert(rows);
//     if (!error) alert("All items moved to cart!");
//   };

//   if (loading) return <main className={styles.wishlistPage}>Loading…</main>;
//   if (!uid) return <main className={styles.wishlistPage}>Please log in.</main>;

//   return (
//     <main className={styles.wishlistPage}>
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn} onClick={moveAllToBag}>
//           Move All To Bag
//         </button>
//       </div>

//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <Image
//               src={`/${item.product?.image ?? "placeholder.png"}`}
//               alt={item.product?.name ?? "Product"}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.product?.name}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>
//                 ${Number(item.product?.price ?? 0).toFixed(2)}
//               </span>
//             </div>
//             <button
//               className={styles.addToCart}
//               onClick={() => addToCart(item.product_id)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Wishlist.module.css";

// export default function Wishlist() {
//   const [uid, setUid] = useState<string | null>(null);
//   const [wishlistItems, setWishlistItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const load = async (userId: string) => {
//     const { data, error } = await supabase
//       .from("wishlist")
//       .select(`
//         id,
//         product_id,
//         product:product_id ( id, name, price, image )
//       `)
//       .eq("user_id", userId);

//     if (!error) setWishlistItems(data ?? []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     supabase.auth.getUser().then(({ data: { user } }) => {
//       const id = user?.id ?? null;
//       setUid(id);
//       if (id) load(id);
//       else setLoading(false);
//     });
//   }, []);

//   const addToCart = async (productId: number) => {
//     if (!uid) return alert("Please log in!");
//     const { error } = await supabase
//       .from("carts")
//       .insert([{ user_id: uid, product_id: productId, quantity: 1 }]);
//     if (!error) alert("Added to cart!");
//   };

//   const moveAllToBag = async () => {
//     if (!uid || !wishlistItems.length) return;
//     const rows = wishlistItems.map((w) => ({
//       user_id: uid,
//       product_id: w.product_id,
//       quantity: 1,
//     }));
//     const { error } = await supabase.from("carts").insert(rows);
//     if (!error) alert("All items moved to cart!");
//   };

//   if (loading) return <main className={styles.wishlistPage}>Loading…</main>;
//   if (!uid) return <main className={styles.wishlistPage}>Please log in.</main>;

//   return (
//     <main className={styles.wishlistPage}>
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn} onClick={moveAllToBag}>
//           Move All To Bag
//         </button>
//       </div>

//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <Image
//               src={`/${item.product?.image ?? "placeholder.png"}`}
//               alt={item.product?.name ?? "Product"}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.product?.name}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>
//                 ${Number(item.product?.price ?? 0).toFixed(2)}
//               </span>
//             </div>
//             <button
//               className={styles.addToCart}
//               onClick={() => addToCart(item.product_id)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }






















// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Wishlist.module.css";

// export default function Wishlist() {
//   const [uid, setUid] = useState<string | null>(null);
//   const [wishlistItems, setWishlistItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   // const load = async (userId: string) => {
//   //   const { data, error } = await supabase
//   //     .from("wishlist")
//   //     .select(`
//   //       id,
//   //       product_id,
//   //       product:product_id ( id, name, price, image )
//   //     `)
//   //     .eq("user_id", userId);

//   //   if (error) console.error("Wishlist fetch error:", error);
//   //   setWishlistItems(data ?? []);
//   //   setLoading(false);
//   // };
//   const load = async (userId: string) => {
//   const { data, error } = await supabase
//     .from("wishlist")
//     .select(`
//       id,
//       product_id,
//       product:product_id ( id, name, price, image )
//     `)
//     .eq("user_id", userId);

//   if (error) {
//     console.error("Wishlist fetch error details:", JSON.stringify(error, null, 2));
//   } else {
//     console.log("Wishlist data:", data);
//   }
//   setWishlistItems(data ?? []);
//   setLoading(false);
//   };


//   useEffect(() => {
//     supabase.auth.getUser().then(({ data: { user } }) => {
//       if (user) {
//         console.log(user.id);
//         setUid(user.id);
//         load(user.id);
//       } else {
//         setLoading(false);
//       }
//     });
//   }, []);

//   const addToCart = async (productId: number) => {
//     if (!uid) return alert("Please log in!");
//     const { error } = await supabase
//       .from("carts")
//       .insert([{ user_id: uid, product_id: productId, quantity: 1 }]);
//     if (error) console.error(error);
//     else alert("Added to cart!");
//   };

//   const moveAllToBag = async () => {
//     if (!uid || !wishlistItems.length) return;
//     const rows = wishlistItems.map((w) => ({
//       user_id: uid,
//       product_id: w.product_id,
//       quantity: 1,
//     }));
//     const { error } = await supabase.from("carts").insert(rows);
//     if (error) console.error(error);
//     else alert("All items moved to cart!");
//   };

//   if (loading) return <main className={styles.wishlistPage}>Loading…</main>;
//   if (!uid) return <main className={styles.wishlistPage}>Please log in.</main>;

//   return (
//     <main className={styles.wishlistPage}>
//       <div className={styles.headerRow}>
//         <h2>Wishlist ({wishlistItems.length})</h2>
//         <button className={styles.moveAllBtn} onClick={moveAllToBag}>
//           Move All To Bag
//         </button>
//       </div>

//       <div className={styles.cardGrid}>
//         {wishlistItems.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <Image
//               src={`/${item.product?.image ?? "placeholder.png"}`}
//               alt={item.product?.name ?? "Product"}
//               width={200}
//               height={200}
//               className={styles.productImg}
//             />
//             <h3 className={styles.title}>{item.product?.name}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>
//                 ${Number(item.product?.price ?? 0).toFixed(2)}
//               </span>
//             </div>
//             <button
//               className={styles.addToCart}
//               onClick={() => addToCart(item.product_id)}
//             >
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./Wishlist.module.css";

export default function Wishlist() {
  const [uid, setUid] = useState<string | null>(null);
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async (userId: string) => {
    const { data, error } = await supabase
      .from("wishlist")
      .select(`
        id,
        product_id,
        products (
          id,
          name,
          price,
          image
        )
      `)
      .eq("user_id", userId);

    if (error) {
      console.error("Wishlist fetch error:", error);
    } else {
      setWishlistItems(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      const id = user?.id ?? null;
      setUid(id);
      if (id) load(id);
      else setLoading(false);
    });
  }, []);

  const addToCart = async (productId: number) => {
    if (!uid) return alert("Please log in!");
    const { error } = await supabase
      .from("carts")
      .insert([{ user_id: uid, product_id: productId, quantity: 1 }]);
    if (error) {
      console.error("Add to cart error:", error);
    } else {
      alert("Added to cart!");
    }
  };

  const moveAllToBag = async () => {
    if (!uid || !wishlistItems.length) return;
    const rows = wishlistItems.map((w) => ({
      user_id: uid,
      product_id: w.product_id,
      quantity: 1,
    }));
    const { error } = await supabase.from("carts").insert(rows);
    if (error) {
      console.error("Move all to cart error:", error);
    } else {
      alert("All items moved to cart!");
    }
  };

  if (loading) return <main className={styles.wishlistPage}>Loading…</main>;
  if (!uid) return <main className={styles.wishlistPage}>Please log in.</main>;

  return (
    <main className={styles.wishlistPage}>
      <div className={styles.headerRow}>
        <h2>Wishlist ({wishlistItems.length})</h2>
        <button className={styles.moveAllBtn} onClick={moveAllToBag}>
          Move All To Bag
        </button>
      </div>

      <div className={styles.cardGrid}>
        {wishlistItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              src={`/${item.products?.image ?? "placeholder.png"}`}
              alt={item.products?.name ?? "Product"}
              width={200}
              height={200}
              className={styles.productImg}
            />
            <h3 className={styles.title}>{item.products?.name}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>
                ${Number(item.products?.price ?? 0).toFixed(2)}
              </span>
            </div>
            <button
              className={styles.addToCart}
              onClick={() => addToCart(item.product_id)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
