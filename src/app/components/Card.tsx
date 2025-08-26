 "use client";




// import Image from "next/image";
// import styles from "./card.module.css";

// export default function Card() {
//   return (
//     <section className={styles.cartContainer}>
//       {/* Header */}
//       <div className={styles.cartHeader}>
//         <span>Product</span>
//         <span>Price</span>
//         <span>Quantity</span>
//         <span>Subtotal</span>
//       </div>

//       {/* Cart Item 1 */}
//       <div className={styles.cartItem}>
//         <button className={styles.removeBtn}>✕</button>
//         <Image
//           src="/monitor.png"
//           alt="LCD Monitor"
//           width={54}
//           height={54}
//           className={styles.productImg}
//         />
//         <span className={styles.productName}>LCD Monitor</span>
//         <span className={styles.productPrice}>$650</span>
//         <div className={styles.quantityBox}>
//           <input type="number" defaultValue={1} min={1} />
//         </div>
//         <span className={styles.productSubtotal}>$650</span>
//       </div>

//       {/* Cart Item 2 */}
//       <div className={styles.cartItem}>
//         <button className={styles.removeBtn}>✕</button>
//         <Image
//           src="/gamepad.png"
//           alt="HI Gamepad"
//           width={54}
//           height={54}
//           className={styles.productImg}
//         />
//         <span className={styles.productName}>HI Gamepad</span>
//         <span className={styles.productPrice}>$550</span>
//         <div className={styles.quantityBox}>
//           <input type="number" defaultValue={2} min={1} />
//         </div>
//         <span className={styles.productSubtotal}>$1100</span>
//       </div>

//       {/* Action Buttons */}
//       <div className={styles.actionBtns}>
//         <button className={styles.secondaryBtn}>Return To Shop</button>
//         <button className={styles.secondaryBtn}>Update Cart</button>
//       </div>

//       {/* Coupon + Cart Total */}
//       <div className={styles.bottomSection}>
//         {/* Coupon */}
//         <div className={styles.couponWrapper}>
//           <input type="text" placeholder="Coupon Code" />
//           <button className={styles.applyBtn}>Apply Coupon</button>
//         </div>

//         {/* Cart Total */}
//         <div className={styles.cartTotal}>
//           <h3>Cart Total</h3>
//           <div className={styles.totalRow}>
//             <span>Subtotal:</span>
//             <span>$1750</span>
//           </div>
//           <div className={styles.totalRow}>
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className={styles.totalRow}>
//             <span>Total:</span>
//             <span>$1750</span>
//           </div>
//           <button className={styles.checkoutBtn}>Proceed to checkout</button>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import styles from "./card.module.css";

// export default function Card() {
//   const router = useRouter();

//   return (
//     <section className={styles.cartContainer}>
//       {/* Header */}
//       <div className={styles.cartHeader}>
//         <span>Product</span>
//         <span>Price</span>
//         <span>Quantity</span>
//         <span>Subtotal</span>
//       </div>

//       {/* Cart Item 1 */}
//       <div className={styles.cartItem}>
//         <button className={styles.removeBtn}>✕</button>
//         <Image
//           src="/monitor.png"
//           alt="LCD Monitor"
//           width={54}
//           height={54}
//           className={styles.productImg}
//         />
//         <span className={styles.productName}>LCD Monitor</span>
//         <span className={styles.productPrice}>$650</span>
//         <div className={styles.quantityBox}>
//           <input type="number" defaultValue={1} min={1} />
//         </div>
//         <span className={styles.productSubtotal}>$650</span>
//       </div>

//       {/* Cart Item 2 */}
//       <div className={styles.cartItem}>
//         <button className={styles.removeBtn}>✕</button>
//         <Image
//           src="/gamepad.png"
//           alt="HI Gamepad"
//           width={54}
//           height={54}
//           className={styles.productImg}
//         />
//         <span className={styles.productName}>HI Gamepad</span>
//         <span className={styles.productPrice}>$550</span>
//         <div className={styles.quantityBox}>
//           <input type="number" defaultValue={2} min={1} />
//         </div>
//         <span className={styles.productSubtotal}>$1100</span>
//       </div>

//       {/* Action Buttons */}
//       <div className={styles.actionBtns}>
//         <button className={styles.secondaryBtn}>Return To Shop</button>
//         <button className={styles.secondaryBtn}>Update Cart</button>
//       </div>

//       {/* Coupon + Cart Total */}
//       <div className={styles.bottomSection}>
//         {/* Coupon */}
//         <div className={styles.couponWrapper}>
//           <input type="text" placeholder="Coupon Code" />
//           <button className={styles.applyBtn}>Apply Coupon</button>
//         </div>

//         {/* Cart Total */}
//         <div className={styles.cartTotal}>
//           <h3>Cart Total</h3>
//           <div className={styles.totalRow}>
//             <span>Subtotal:</span>
//             <span>$1750</span>
//           </div>
//           <div className={styles.totalRow}>
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className={styles.totalRow}>
//             <span>Total:</span>
//             <span>$1750</span>
//           </div>
//           <button
//             className={styles.checkoutBtn}
//             onClick={() => router.push("/checkout")}
//           >
//             Proceed to checkout
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import styles from "./card.module.css";

// export default function Card() {
//   const router = useRouter();

//   return (
//     <main className={styles.pageWrapper}>
//       <section className={styles.cartContainer}>
//         {/* Header */}
//         <div className={styles.cartHeader}>
//           <span>Product</span>
//           <span>Price</span>
//           <span>Quantity</span>
//           <span>Subtotal</span>
//         </div>

//         {/* Cart Item 1 */}
//         <div className={styles.cartItem}>
//           <button className={styles.removeBtn}>✕</button>
//           <Image src="/monitor.png" alt="LCD Monitor" width={54} height={54} className={styles.productImg} />
//           <span className={styles.productName}>LCD Monitor</span>
//           <span className={styles.productPrice}>$650</span>
//           <div className={styles.quantityBox}>
//             <input type="number" defaultValue={1} min={1} />
//           </div>
//           <span className={styles.productSubtotal}>$650</span>
//         </div>

//         {/* Cart Item 2 */}
//         <div className={styles.cartItem}>
//           <button className={styles.removeBtn}>✕</button>
//           <Image src="/gamepad.png" alt="HI Gamepad" width={54} height={54} className={styles.productImg} />
//           <span className={styles.productName}>HI Gamepad</span>
//           <span className={styles.productPrice}>$550</span>
//           <div className={styles.quantityBox}>
//             <input type="number" defaultValue={2} min={1} />
//           </div>
//           <span className={styles.productSubtotal}>$1100</span>
//         </div>

//         {/* Action Buttons */}
//         <div className={styles.actionBtns}>
//           <button className={styles.secondaryBtn}>Return To Shop</button>
//           <button className={styles.secondaryBtn}>Update Cart</button>
//         </div>

//         {/* Coupon + Cart Total */}
//         <div className={styles.bottomSection}>
//           {/* Coupon */}
//           <div className={styles.couponWrapper}>
//             <input type="text" placeholder="Coupon Code" />
//             <button className={styles.applyBtn}>Apply Coupon</button>
//           </div>

//           {/* Cart Total */}
//           <div className={styles.cartTotal}>
//             <h3>Cart Total</h3>
//             <div className={styles.totalRow}>
//               <span>Subtotal:</span>
//               <span>$1750</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total:</span>
//               <span>$1750</span>
//             </div>
//             <button className={styles.checkoutBtn} onClick={() => router.push("/checkout")}>
//               Proceed to checkout
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }































// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import Image from "next/image";
// import styles from "./card.module.css";
// import { useRouter } from "next/navigation";

// export default function Card({ user }) {
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);

//   // 🔹 Fetch cart items with product details
//   useEffect(() => {
//     const fetchCart = async () => {
//       const { data, error } = await supabase
//         .from("carts")
//         .select("id, quantity, product(name, price, description)")
//         .eq("user_id", user.id);

//       if (error) console.error(error);
//       else setCartItems(data);
//     };
//     fetchCart();
//   }, [user]);

//   // 🔹 Remove item
//   const removeFromCart = async (cartId) => {
//     const { error } = await supabase.from("carts").delete().eq("id", cartId);
//     if (error) console.error(error);
//     else setCartItems(cartItems.filter((i) => i.id !== cartId));
//   };

//   // 🔹 Update quantity
//   const updateQuantity = async (cartId, newQty) => {
//     const { error } = await supabase
//       .from("carts")
//       .update({ quantity: newQty })
//       .eq("id", cartId);

//     if (error) console.error(error);
//     else {
//       setCartItems(
//         cartItems.map((i) =>
//           i.id === cartId ? { ...i, quantity: newQty } : i
//         )
//       );
//     }
//   };

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   );

//   return (
//     <main className={styles.pageWrapper}>
//       <section className={styles.cartContainer}>
//         <div className={styles.cartHeader}>
//           <span>Product</span>
//           <span>Price</span>
//           <span>Quantity</span>
//           <span>Subtotal</span>
//         </div>

//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.cartItem}>
//             <button
//               className={styles.removeBtn}
//               onClick={() => removeFromCart(item.id)}
//             >
//               ✕
//             </button>
//             <Image
//               src="/placeholder.png"
//               alt={item.product.name}
//               width={54}
//               height={54}
//               className={styles.productImg}
//             />
//             <span className={styles.productName}>{item.product.name}</span>
//             <span className={styles.productPrice}>${item.product.price}</span>
//             <div className={styles.quantityBox}>
//               <input
//                 type="number"
//                 value={item.quantity}
//                 min={1}
//                 onChange={(e) =>
//                   updateQuantity(item.id, parseInt(e.target.value))
//                 }
//               />
//             </div>
//             <span className={styles.productSubtotal}>
//               ${item.product.price * item.quantity}
//             </span>
//           </div>
//         ))}

//         {/* Bottom Section */}
//         <div className={styles.bottomSection}>
//           <div className={styles.cartTotal}>
//             <h3>Cart Total</h3>
//             <div className={styles.totalRow}>
//               <span>Subtotal:</span>
//               <span>${subtotal}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total:</span>
//               <span>${subtotal}</span>
//             </div>
//             <button
//               className={styles.checkoutBtn}
//               onClick={() => router.push("/checkout")}
//             >
//               Proceed to checkout
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./card.module.css";

// export default function Cart() {
//   const router = useRouter();
//   const [userId, setUserId] = useState<string | null>(null);
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const init = async () => {
//       const { data } = await supabase.auth.getUser();
//       const uid = data.user?.id ?? null;
//       setUserId(uid);
//       if (!uid) { setLoading(false); return; }

//       // FK present -> nested select ok:
//       const { data: rows, error } = await supabase
//         .from("carts")
//         .select(`
//           id,
//           quantity,
//           product:product_id (
//             id,
//             name,
//             price,
//             image,
//             description
//           )
//         `)
//         .eq("user_id", uid);

//       if (error) console.error(error);
//       setCartItems(rows ?? []);
//       setLoading(false);
//     };
//     init();
//   }, []);

//   const removeFromCart = async (cartId: number) => {
//     const { error } = await supabase.from("carts").delete().eq("id", cartId);
//     if (!error) setCartItems((prev) => prev.filter((i) => i.id !== cartId));
//   };

//   const updateQuantity = async (cartId: number, qty: number) => {
//     const { error } = await supabase.from("carts").update({ quantity: qty }).eq("id", cartId);
//     if (!error) setCartItems((prev) => prev.map((i) => i.id === cartId ? { ...i, quantity: qty } : i));
//   };

//   const subtotal = cartItems.reduce((sum, i) => sum + (i.product?.price ?? 0) * i.quantity, 0);

//   if (loading) return <div className={styles.pageWrapper}>Loading…</div>;
//   if (!userId) return <div className={styles.pageWrapper}>Please log in.</div>;

//   return (
//     <main className={styles.pageWrapper}>
//       <section className={styles.cartContainer}>
//         <div className={styles.cartHeader}>
//           <span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span>
//         </div>

//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.cartItem}>
//             <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
//             <Image src="/placeholder.png" alt={item.product?.name ?? "Product"} width={54} height={54} className={styles.productImg}/>
//             <span className={styles.productName}>{item.product?.name}</span>
//             <span className={styles.productPrice}>${item.product?.price}</span>
//             <div className={styles.quantityBox}>
//               <input type="number" min={1} value={item.quantity}
//                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value || "1", 10))}/>
//             </div>
//             <span className={styles.productSubtotal}>${(item.product?.price ?? 0) * item.quantity}</span>
//           </div>
//         ))}

//         <div className={styles.bottomSection}>
//           <div className={styles.cartTotal}>
//             <h3>Cart Total</h3>
//             <div className={styles.totalRow}><span>Subtotal:</span><span>${subtotal}</span></div>
//             <div className={styles.totalRow}><span>Shipping:</span><span>Free</span></div>
//             <div className={styles.totalRow}><span>Total:</span><span>${subtotal}</span></div>
//             <button className={styles.checkoutBtn} onClick={() => router.push("/checkout")}>
//               Proceed to checkout
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


// import { useEffect, useState } from "react";
// import styles from "./Cart.module.css";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image?: string | null;
// }

// interface CartItem {
//   id: string;
//   product: Product;
//   quantity: number;
// }

// export default function Cart() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     // fetch cart items from supabase
//     const fetchCart = async () => {
//       // TODO: replace with your supabase query
//       // example: const { data } = await supabase.from("carts").select("id, quantity, product(id, name, price, image)");
//       setCartItems([]); 
//     };
//     fetchCart();
//   }, []);

//   const updateQuantity = (id: string, quantity: number) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//     // TODO: also update in supabase
//   };

//   const subtotal = cartItems.reduce(
//     (sum, i) =>
//       sum +
//       Number(i.product?.price ?? 0) * Number(i.quantity ?? 1),
//     0
//   );

//   return (
//     <div className={styles.cartPage}>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <table className={styles.cartTable}>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td>
//                   {item.product?.image && (
//                     <img
//                       src={item.product.image}
//                       alt={item.product.name}
//                       width={60}
//                     />
//                   )}
//                 </td>
//                 <td>{item.product?.name}</td>
//                 <td className={styles.productPrice}>
//                   ${Number(item.product?.price ?? 0).toFixed(2)}
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     min={1}
//                     value={item.quantity}
//                     onChange={(e) => {
//                       const val = Math.max(
//                         1,
//                         parseInt(e.target.value || "1", 10)
//                       );
//                       updateQuantity(item.id, val);
//                     }}
//                   />
//                 </td>
//                 <td className={styles.productSubtotal}>
//                   $
//                   {(
//                     Number(item.product?.price ?? 0) *
//                     Number(item.quantity ?? 1)
//                   ).toFixed(2)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <div className={styles.totalRow}>
//         <span>Subtotal:</span>
//         <span>${subtotal.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// }



// import { supabase } from "@/app/libr/supabaseClient";
// import { useEffect, useState } from "react";
// import styles from "./Card.module.css";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image?: string | null;
// }

// interface CartItem {
//   id: number;
//   quantity: number;
//   products: Product;   // relation se milega
// }

// export default function Cart() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     const {
  //       data,
  //       error,
  //     } = await supabase
  //       .from("carts")
  //       .select(
  //         `
  //         id,
  //         quantity,
  //         products (
  //           id,
  //           name,
  //           price,
  //           image
  //         )
  //       `
  //       );

  //     if (error) {
  //       console.error("Cart fetch error:", error);
  //     } else {
  //       setCartItems(data ?? []);
  //     }
  //   };

  //   fetchCart();
  // }, []);
  // useEffect(() => {
  // const fetchCart = async () => {
  //   const { data, error } = await supabase
  //     .from("carts")
  //     .select(`
  //       id,
  //       quantity,
  //       products:product_id (
  //         id,
  //         name,
  //         price,
  //         image
  //       )
  //     `);

  //   if (error) {
  //     console.error("Cart fetch error:", error);
  //   } else {
  //     setCartItems(data ?? [] );
  //   }
  // };

  // fetchCart();
  // }, []);
//    useEffect(() => {
//   const fetchCart = async () => {
//     const { data, error } = await supabase
//       .from("carts")
//       .select(`
//         id,
//         quantity,
//         products!carts_product_id_fkey (
        
//           id,
//           name,
//           price,
//           image
//         )
//       `);

//     if (error) {
//       console.error("Cart fetch error:", error);
//       console.error("Cart fetch error:", JSON.stringify(error, null, 2));

//     } else {
//       // array से पहला element लो
//       const normalized = (data ?? []).map((item) => ({
//         ...item,
//         products: item.products?.[0] || null,
//       }));
//       setCartItems(normalized);
//     }
//   };

//   fetchCart();
//   }, []);


//   const updateQuantity = async (id: number, quantity: number) => {
//     // update supabase
//     const { error } = await supabase
//       .from("carts")
//       .update({ quantity })
//       .eq("id", id);

//     if (error) console.error("Update cart error:", error);
//     else {
//       // update local state
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.id === id ? { ...item, quantity } : item
//         )
//       );
//     }
//   };

//   const subtotal = cartItems.reduce(
//     (sum, i) => sum + (i.products?.price ?? 0) * (i.quantity ?? 1),
//     0
//   );

//   return (
//     <div className={styles.cartPage}>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <table className={styles.cartTable}>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td>
//                   {item.products?.image && (
//                     <img
//                       src={item.products.image}
//                       alt={item.products.name}
//                       width={60}
//                     />
//                   )}
//                 </td>
//                 <td>{item.products?.name}</td>
//                 <td className={styles.productPrice}>
//                   ${Number(item.products?.price ?? 0).toFixed(2)}
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     min={1}
//                     value={item.quantity}
//                     onChange={(e) => {
//                       const val = Math.max(
//                         1,
//                         parseInt(e.target.value || "1", 10)
//                       );
//                       updateQuantity(item.id, val);
//                     }}
//                   />
//                 </td>
//                 <td className={styles.productSubtotal}>
//                   $
//                   {(
//                     Number(item.products?.price ?? 0) *
//                     Number(item.quantity ?? 1)
//                   ).toFixed(2)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <div className={styles.totalRow}>
//         <span>Subtotal:</span>
//         <span>${subtotal.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { supabase } from "@/app/libr/supabaseClient";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import styles from "./Card.module.css";
// import { getImageSrc } from "@/utils/getImageSrc";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image?: string | null;
// }

// interface CartItem {
//   id: number;
//   quantity: number;
//   products: Product | null;
// }

// export default function Cart() {
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const fetchCart = async () => {
//       const { data, error } = await supabase
//         .from("carts")
//         .select(
//           `
//           id,
//           quantity,
//           products!carts_product_id_fkey (
//             id,
//             name,
//             price,
//             image
//           )
//         `
//         );

//       if (error) {
//         console.error("Cart fetch error:", error);
//       } else {
//         // products relation sometimes returns array
//         const normalized = (data ?? []).map((item) => ({
//           ...item,
//           products: Array.isArray(item.products)
//             ? item.products[0] || null
//             : item.products,
//         }));
//         setCartItems(normalized);
//       }
//     };
//     fetchCart();
//   }, []);

//   const updateQuantity = async (id: number, quantity: number) => {
//     const { error } = await supabase
//       .from("carts")
//       .update({ quantity })
//       .eq("id", id);

//     if (error) {
//       console.error("Update cart error:", error);
//     } else {
//       setCartItems((prev) =>
//         prev.map((item) =>
//           item.id === id ? { ...item, quantity } : item
//         )
//       );
//     }
//   };

//   const subtotal = cartItems.reduce(
//     (sum, i) => sum + (i.products?.price ?? 0) * (i.quantity ?? 1),
//     0
//   );

//   return (
//     <section className={styles.cartContainer}>
//       {/* Header */}
//       <div className={styles.cartHeader}>
//         <span>Product</span>
//         <span>Price</span>
//         <span>Quantity</span>
//         <span>Subtotal</span>
//       </div>

//       {/* Items */}
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className={styles.cartItem}>
//             <button className={styles.removeBtn}>✕</button>
//             {item.products?.image && (
//               <Image
//                 src={item.products.image}
//                 alt={item.products.name}
//                 width={54}
//                 height={54}
//                 className={styles.productImg}
//               />
//             )}
//             <span className={styles.productName}>
//               {item.products?.name}
//             </span>
//             <span className={styles.productPrice}>
//               ${Number(item.products?.price ?? 0).toFixed(2)}
//             </span>
//             <div className={styles.quantityBox}>
//               <input
//                 type="number"
//                 min={1}
//                 value={item.quantity}
//                 onChange={(e) =>
//                   updateQuantity(
//                     item.id,
//                     Math.max(1, parseInt(e.target.value || "1", 10))
//                   )
//                 }
//               />
//             </div>
//             <span className={styles.productSubtotal}>
//               $
//               {(
//                 (item.products?.price ?? 0) * (item.quantity ?? 1)
//               ).toFixed(2)}
//             </span>
//           </div>
//         ))
//       )}

//       {/* Action Buttons */}
//       <div className={styles.actionBtns}>
//         <button
//           className={styles.secondaryBtn}
//           onClick={() => router.push("/shop")}
//         >
//           Return To Shop
//         </button>
//         <button
//           className={styles.secondaryBtn}
//           onClick={() => router.refresh()}
//         >
//           Update Cart
//         </button>
//       </div>

//       {/* Bottom Section */}
//       <div className={styles.bottomSection}>
//         <div className={styles.couponWrapper}>
//           <input type="text" placeholder="Coupon Code" />
//           <button className={styles.applyBtn}>Apply Coupon</button>
//         </div>

//         <div className={styles.cartTotal}>
//           <h3>Cart Total</h3>
//           <div className={styles.totalRow}>
//             <span>Subtotal:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className={styles.totalRow}>
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className={styles.totalRow}>
//             <span>Total:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <button
//             className={styles.checkoutBtn}
//             onClick={() => router.push("/checkout")}
//           >
//             Proceed to checkout
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import { supabase } from "@/app/libr/supabaseClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Card.module.css";
import { getImageSrc } from "@/app/utils/getImageSrc"

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string | null; // सिर्फ filename होगा जैसे shirt.png
}

interface CartItem {
  id: number;
  quantity: number;
  products: Product | null;
}

export default function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const { data, error } = await supabase
        .from("carts")
        .select(
          `
          id,
          quantity,
          products!carts_product_id_fkey (
            id,
            name,
            price,
            image
          )
        `
        );

      if (error) {
        console.error("Cart fetch error:", error);
      } else {
        // products relation sometimes returns array
        const normalized = (data ?? []).map((item) => ({
          ...item,
          products: Array.isArray(item.products)
            ? item.products[0] || null
            : item.products,
        }));
        setCartItems(normalized);
      }
    };
    fetchCart();
  }, []);

  const updateQuantity = async (id: number, quantity: number) => {
    const { error } = await supabase
      .from("carts")
      .update({ quantity })
      .eq("id", id);

    if (error) {
      console.error("Update cart error:", error);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce(
    (sum, i) => sum + (i.products?.price ?? 0) * (i.quantity ?? 1),
    0
  );

  return (
    <section className={styles.cartContainer}>
      {/* Header */}
      <div className={styles.cartHeader}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Items */}
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <button className={styles.removeBtn}>✕</button>
            {item.products?.image && (
              <Image
                src={getImageSrc(item.products.image)} // यहाँ helper use हुआ
                alt={item.products.name}
                width={54}
                height={54}
                className={styles.productImg}
              />
            )}
            <span className={styles.productName}>
              {item.products?.name}
            </span>
            <span className={styles.productPrice}>
              ${Number(item.products?.price ?? 0).toFixed(2)}
            </span>
            <div className={styles.quantityBox}>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(
                    item.id,
                    Math.max(1, parseInt(e.target.value || "1", 10))
                  )
                }
              />
            </div>
            <span className={styles.productSubtotal}>
              $
              {(
                (item.products?.price ?? 0) * (item.quantity ?? 1)
              ).toFixed(2)}
            </span>
          </div>
        ))
      )}

      {/* Action Buttons */}
      <div className={styles.actionBtns}>
        <button
          className={styles.secondaryBtn}
          onClick={() => router.push("/shop")}
        >
          Return To Shop
        </button>
        <button
          className={styles.secondaryBtn}
          onClick={() => router.refresh()}
        >
          Update Cart
        </button>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.couponWrapper}>
          <input type="text" placeholder="Coupon Code" />
          <button className={styles.applyBtn}>Apply Coupon</button>
        </div>

        <div className={styles.cartTotal}>
          <h3>Cart Total</h3>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            className={styles.checkoutBtn}
            onClick={() => router.push("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
}
