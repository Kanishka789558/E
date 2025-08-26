/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Image from "next/image";
// import styles from "./checkout.module.css";

// export default function Checkout() {
//   return (
//     <section className={styles.checkoutSection}>
//       {/* Billing Details */}
//       <div className={styles.billing}>
//         <h2>Billing Details</h2>
//         <form className={styles.form}>
//           <input type="text" placeholder="First Name*" required />
//           <input type="text" placeholder="Company Name" />
//           <input type="text" placeholder="Street Address*" required />
//           <input type="text" placeholder="Apartment, floor, etc. (optional)" />
//           <input type="text" placeholder="Town/City*" required />
//           <input type="tel" placeholder="Phone Number*" required />
//           <input type="email" placeholder="Email Address*" required />

//           <label className={styles.checkbox}>
//             <input type="checkbox" /> Save this information for faster
//             check-out next time
//           </label>
//         </form>
//       </div>

//       {/* Order Summary */}
//       <div className={styles.orderSummary}>
//         {/* Products */}
//         <div className={styles.productRow}>
//           <Image
//             src="/gamepad.png"
//             alt="Gamepad"
//             width={54}
//             height={54}
//             className={styles.productImg}
//           />
//           <div className={styles.productInfo}>
//             <span>LCD Monitor</span>
//             <span>$650</span>
//           </div>
//         </div>

//         <div className={styles.productRow}>
//           <Image
//             src="/monitor.png"
//             alt="Monitor"
//             width={54}
//             height={54}
//             className={styles.productImg}
//           />
//           <div className={styles.productInfo}>
//             <span>H1 Gamepad</span>
//             <span>$1100</span>
//           </div>
//         </div>

//         {/* Totals */}
//         <div className={styles.totals}>
//           <div className={styles.totalRow}>
//             <span>Subtotal:</span>
//             <span>$1750</span>
//           </div>
//           <hr />
//           <div className={styles.totalRow}>
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <hr />
//           <div className={styles.totalRow}>
//             <span>Total:</span>
//             <span>$1750</span>
//           </div>
//         </div>

//         {/* Payment Options */}
//         <div className={styles.payment}>
//           <div className={styles.radioRow}>
//             <input type="radio" name="payment" />
//             <label>Bank</label>
//           </div>
//           <div className={styles.paymentLogos}>
//             <Image src="/bkash.png" alt="Bkash" width={42} height={28} />
//             <Image src="/visa.png" alt="Visa" width={42} height={28} />
//             <Image src="/mastercard.png" alt="Mastercard" width={42} height={28} />
//             <Image src="/nagad.png" alt="Nagad" width={42} height={28} />
//           </div>
//           <div className={styles.radioRow}>
//             <input type="radio" name="payment" defaultChecked />
//             <label>Cash on delivery</label>
//           </div>
//         </div>

//         {/* Coupon */}
//         <div className={styles.coupon}>
//           <input type="text" placeholder="Coupon Code" />
//           <button className={styles.couponBtn}>Apply Coupon</button>
//         </div>

//         {/* Place Order */}
//         <button className={styles.placeOrderBtn}>Place Order</button>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import styles from "./checkout.module.css";
// import { supabase } from "@/app/libr/supabaseClient";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export default function Checkout({ userId }: { userId: string }) {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [subtotal, setSubtotal] = useState(0);

//   // Fetch cart items dynamically from database
//   useEffect(() => {
//     const fetchCart = async () => {
//       const { data, error } = await supabase
//         .from("carts") // your cart table
//         .select(`
//           id,
//           quantity,
//           product:product_id (
//             id,
//             name,
//             price,
//             image
//           )
//         `)
//         .eq("user_id", userId);

//       if (error) {
//         console.log("Error fetching cart:", error.message);
//       } else if (data) {
//         const items = data.map((item: any) => ({
//           id: item.product.id,
//           name: item.product.name,
//           price: item.product.price,
//           image: item.product.image,
//           quantity: item.quantity,
//         }));
//         setCartItems(items);

//         const total = items.reduce(
//           (sum: number, item: Product) => sum + item.price * item.quantity,
//           0
//         );
//         setSubtotal(total);
//       }
//     };

//     fetchCart();
//   }, [userId]);

//   return (
//     <section className={styles.checkoutSection}>
//       {/* Billing Details */}
//       <div className={styles.billing}>
//         <h2>Billing Details</h2>
//         <form className={styles.form}>
//           <input type="text" placeholder="First Name*" required />
//           <input type="text" placeholder="Company Name" />
//           <input type="text" placeholder="Street Address*" required />
//           <input type="text" placeholder="Apartment, floor, etc. (optional)" />
//           <input type="text" placeholder="Town/City*" required />
//           <input type="tel" placeholder="Phone Number*" required />
//           <input type="email" placeholder="Email Address*" required />

//           <label className={styles.checkbox}>
//             <input type="checkbox" /> Save this information for faster check-out
//             next time
//           </label>
//         </form>
//       </div>

//       {/* Order Summary */}
//       <div className={styles.orderSummary}>
//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.productRow}>
//             <Image
//               src={`/${item.image}`}
//               alt={item.name}
//               width={54}
//               height={54}
//               className={styles.productImg}
//             />
//             <div className={styles.productInfo}>
//               <span>{item.name} x {item.quantity}</span>
//               <span>${item.price * item.quantity}</span>
//             </div>
//           </div>
//         ))}

//         {/* Totals */}
//         <div className={styles.totals}>
//           <div className={styles.totalRow}>
//             <span>Subtotal:</span>
//             <span>${subtotal}</span>
//           </div>
//           <hr />
//           <div className={styles.totalRow}>
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <hr />
//           <div className={styles.totalRow}>
//             <span>Total:</span>
//             <span>${subtotal}</span>
//           </div>
//         </div>

//         {/* Payment Options */}
//         <div className={styles.payment}>
//           <div className={styles.radioRow}>
//             <input type="radio" name="payment" />
//             <label>Bank</label>
//           </div>
//           <div className={styles.paymentLogos}>
//             <Image src="/bkash.png" alt="Bkash" width={42} height={28} />
//             <Image src="/visa.png" alt="Visa" width={42} height={28} />
//             <Image src="/mastercard.png" alt="Mastercard" width={42} height={28} />
//             <Image src="/nagad.png" alt="Nagad" width={42} height={28} />
//           </div>
//           <div className={styles.radioRow}>
//             <input type="radio" name="payment" defaultChecked />
//             <label>Cash on delivery</label>
//           </div>
//         </div>

//         {/* Coupon */}
//         <div className={styles.coupon}>
//           <input type="text" placeholder="Coupon Code" />
//           <button className={styles.couponBtn}>Apply Coupon</button>
//         </div>

//         {/* Place Order */}
//         <button className={styles.placeOrderBtn}>Place Order</button>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import styles from "./checkout.module.css";
// import { supabase } from "@/app/libr/supabaseClient";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export default function Checkout({ userId }: { userId: string }) {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [subtotal, setSubtotal] = useState(0);

//   useEffect(() => {
//     const fetchCart = async () => {
//       const { data, error } = await supabase
//         .from("carts")
//         .select(`
//           id,
//           quantity,
//           product:product_id (
//             id,
//             name,
//             price,
//             image
//           )
//         `)
//         .eq("user_id", userId);

//       if (error) {
//         console.error("Error fetching cart:", error.message);
//         return;
//       }

//       if (data) {
//         const items = data.map((item: any) => ({
//           id: item.product.id,
//           name: item.product.name,
//           price: item.product.price,
//           image: item.product.image,
//           quantity: item.quantity,
//         }));
//         setCartItems(items);

//         const total = items.reduce(
//           (sum: number, item: Product) => sum + item.price * item.quantity,
//           0
//         );
//         setSubtotal(total);
//       }
//     };

//     fetchCart();
//   }, [userId]);

//   return (
//     <section className={styles.checkoutSection}>
//       {/* Billing Details */}
//       <div className={styles.billing}>
//         <h2>Billing Details</h2>
//         <form className={styles.form}>
//           <input type="text" placeholder="First Name*" required />
//           <input type="text" placeholder="Company Name" />
//           <input type="text" placeholder="Street Address*" required />
//           <input type="text" placeholder="Apartment, floor, etc. (optional)" />
//           <input type="text" placeholder="Town/City*" required />
//           <input type="tel" placeholder="Phone Number*" required />
//           <input type="email" placeholder="Email Address*" required />

//           <label className={styles.checkbox}>
//             <input type="checkbox" /> Save this information for faster check-out
//             next time
//           </label>
//         </form>
//       </div>

//       {/* Order Summary */}
//       <div className={styles.orderSummary}>
//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.productRow}>
//             <Image
//               src={`/${item.image}`}
//               alt={item.name}
//               width={54}
//               height={54}
//               className={styles.productImg}
//             />
//             <div className={styles.productInfo}>
//               <span>
//                 {item.name} x {item.quantity}
//               </span>
//               <span>${item.price * item.quantity}</span>
//             </div>
//           </div>
//         ))}

//         {/* Totals */}
//         <div className={styles.totals}>
//           <div className={styles.totalRow}>
//             <span>Subtotal:</span>
//             <span>${subtotal}</span>
//           </div>
//           <hr />
//           <div className={styles.totalRow}>
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <hr />
//           <div className={styles.totalRow}>
//             <span>Total:</span>
//             <span>${subtotal}</span>
//           </div>
//         </div>

//         {/* Payment Options */}
//         <div className={styles.payment}>
//           <div className={styles.radioRow}>
//             <input type="radio" name="payment" />
//             <label>Bank</label>
//           </div>
//           <div className={styles.paymentLogos}>
//             <Image src="/bkash.png" alt="Bkash" width={42} height={28} />
//             <Image src="/visa.png" alt="Visa" width={42} height={28} />
//             <Image src="/mastercard.png" alt="Mastercard" width={42} height={28} />
//             <Image src="/nagad.png" alt="Nagad" width={42} height={28} />
//           </div>
//           <div className={styles.radioRow}>
//             <input type="radio" name="payment" defaultChecked />
//             <label>Cash on delivery</label>
//           </div>
//         </div>

//         {/* Coupon */}
//         <div className={styles.coupon}>
//           <input type="text" placeholder="Coupon Code" />
//           <button className={styles.couponBtn}>Apply Coupon</button>
//         </div>

//         {/* Place Order */}
//         <button className={styles.placeOrderBtn}>Place Order</button>
//       </div>
//     </section>
//   );
// }










// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./checkout.module.css";

// interface ProductRow {
//   id: number;
//   name: string;
//   price: number;
//   image: string | null;
//   quantity: number;
// }

// export default function Checkout() {
//   const [userId, setUserId] = useState<string | null>(null);
//   const [cartItems, setCartItems] = useState<ProductRow[]>([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const run = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       const uid = user?.id ?? null;
//       setUserId(uid);

//       if (!uid) { setLoading(false); return; }

//       const { data, error } = await supabase
//         .from("carts")
//         .select(`
//           id,
//           quantity,
//           product:product_id (
//             id,
//             name,
//             price,
//             image
//           )
//         `)
//         .eq("user_id", uid);

//       if (error) {
//         console.error("Error fetching cart:", error.message);
//         setLoading(false);
//         return;
//       }

//       const items = (data ?? []).map((row: any) => ({
//         id: row.product?.id,
//         name: row.product?.name,
//         price: Number(row.product?.price ?? 0),
//         image: row.product?.image ?? null,
//         quantity: row.quantity
//       }));
//       setCartItems(items);
//       setSubtotal(items.reduce((s, it) => s + it.price * it.quantity, 0));
//       setLoading(false);
//     };
//     run();
//   }, []);

//   if (loading) return <section className={styles.checkoutSection}>Loading…</section>;
//   if (!userId) return <section className={styles.checkoutSection}>Please log in.</section>;

//   return (
//     <section className={styles.checkoutSection}>
//       {/* Billing (as-is) ... */}
//       {/* Order Summary */}
//       <div className={styles.orderSummary}>
//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.productRow}>
//             <Image
//               src={`/${item.image ?? "placeholder.png"}`}
//               alt={item.name}
//               width={54}
//               height={54}
//             />
//             <div className={styles.productInfo}>
//               <span>{item.name} x {item.quantity}</span>
//               <span>${item.price * item.quantity}</span>
//             </div>
//           </div>
//         ))}
//         <div className={styles.totals}>
//           <div className={styles.totalRow}><span>Subtotal:</span><span>${subtotal}</span></div>
//           <hr />
//           <div className={styles.totalRow}><span>Shipping:</span><span>Free</span></div>
//           <hr />
//           <div className={styles.totalRow}><span>Total:</span><span>${subtotal}</span></div>
//         </div>
//         <button className={styles.placeOrderBtn}>Place Order</button>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./checkout.module.css";

// interface ProductRow {
//   id: number;
//   name: string;
//   price: number;
//   image: string | null;
//   quantity: number;
// }

// export default function Checkout() {
//   const [userId, setUserId] = useState<string | null>(null);
//   const [cartItems, setCartItems] = useState<ProductRow[]>([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [placing, setPlacing] = useState(false);

//   useEffect(() => {
//     const run = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       const uid = user?.id ?? null;
//       setUserId(uid);

//       if (!uid) { setLoading(false); return; }

//       const { data, error } = await supabase
//         .from("carts")
//         .select(`
//           id,
//           quantity,
//           product:product_id (
//             id,
//             name,
//             price,
//             image
//           )
//         `)
//         .eq("user_id", uid);

//       if (error) {
//         console.error("Error fetching cart:", error.message);
//         setLoading(false);
//         return;
//       }

//       const items = (data ?? []).map((row: any) => ({
//         id: row.product?.id,
//         name: row.product?.name,
//         price: Number(row.product?.price ?? 0),
//         image: row.product?.image ?? null,
//         quantity: row.quantity
//       }));
//       setCartItems(items);
//       setSubtotal(items.reduce((s, it) => s + it.price * it.quantity, 0));
//       setLoading(false);
//     };
//     run();
//   }, []);

//   const handlePlaceOrder = async () => {
//     if (!userId) return alert("Please log in first!");
//     if (!cartItems.length) return alert("Your cart is empty.");

//     setPlacing(true);

//     try {
//       // Insert each product as a separate order row
//       const { error } = await supabase.from("orderss").insert(
//         cartItems.map((item) => ({
//           user_id: userId,
//           product_id: item.id,
//           status: "pending",
//           total_amount: item.price * item.quantity
//         }))
//       );

//       if (error) {
//         console.error("Error placing order:", error);
//         alert("Could not place order. Try again.");
//         setPlacing(false);
//         return;
//       }

//       // Optional: clear cart after placing order
//       await supabase.from("carts").delete().eq("user_id", userId);

//       alert("Order placed successfully!");
//       setCartItems([]);
//       setSubtotal(0);
//     } catch (err) {
//       console.error("Unexpected error:", err);
//       alert("Something went wrong.");
//     } finally {
//       setPlacing(false);
//     }
//   };

//   if (loading) return <section className={styles.checkoutSection}>Loading…</section>;
//   if (!userId) return <section className={styles.checkoutSection}>Please log in.</section>;

//   return (
//     <section className={styles.checkoutSection}>
//       <div className={styles.orderSummary}>
//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.productRow}>
//             <Image
//               src={`/${item.image ?? "placeholder.png"}`}
//               alt={item.name}
//               width={54}
//               height={54}
//             />
//             <div className={styles.productInfo}>
//               <span>{item.name} x {item.quantity}</span>
//               <span>${item.price * item.quantity}</span>
//             </div>
//           </div>
//         ))}
//         <div className={styles.totals}>
//           <div className={styles.totalRow}><span>Subtotal:</span><span>${subtotal}</span></div>
//           <hr />
//           <div className={styles.totalRow}><span>Shipping:</span><span>Free</span></div>
//           <hr />
//           <div className={styles.totalRow}><span>Total:</span><span>${subtotal}</span></div>
//         </div>
//         <button
//           className={styles.placeOrderBtn}
//           onClick={handlePlaceOrder}
//           disabled={placing}
//         >
//           {placing ? "Placing..." : "Place Order"}
//         </button>
//       </div>
//     </section>
//   );
// }








"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./Checkout.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Checkout() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState<string | null>(null);

  // 🔹 Fetch cart from Supabase
  useEffect(() => {
    const fetchCart = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setUid(user.id);

      const { data, error } = await supabase
        .from("carts")
        .select(`
          id,
          quantity,
          product:products!carts_product_id_fkey (
            id,
            name,
            price,
            image
          )
        `)
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching cart:", error.message);
        return;
      }

      if (data) {
        const items = data.map((item: any) => ({
          id: item.product.id,
          name: item.product.name,
          price: Number(item.product.price ?? 0),
          image: item.product.image,
          quantity: Number(item.quantity ?? 1),
        }));
        setCartItems(items);

        const total = items.reduce(
          (sum: number, item: Product) => sum + item.price * item.quantity,
          0
        );
        setSubtotal(total);
      }
    };

    fetchCart();
  }, []);

  // // 🔹 Place Order
  // const placeOrder = async () => {
  //   if (!uid) return alert("Please log in!");
  //   if (cartItems.length === 0) {
  //     alert("Cart is empty!");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const { error } = await supabase.from("orderss").insert([
  //       {
  //         user_id: uid,
          
  //         product_id: item.id, 
  //         status: "pending",
  //       },
  //     ]);

  //     if (error) throw error;

  //     await supabase.from("carts").delete().eq("user_id", uid);

  //     alert("Order placed successfully!");
  //     router.push("/myorder");
  //   } catch (err: any) {
  //     console.error(err);
  //     alert("Something went wrong!");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
      // 🔹 Place Order
  const placeOrder = async () => {
  if (!uid) return alert("Please log in!");
  if (cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }

  setLoading(true);

  try {
    // Har product ke liye ek order row insert karo
    const { data, error } = await supabase.from("orderss").insert(
      cartItems.map(item => ({
        user_id: uid,
        product_id: item.id,  // product id from cart
        status: "pending",
      }))
    );

    console.log("Insert result:", { data, error });

    if (error) throw error;

    // Cart clear karo
    await supabase.from("carts").delete().eq("user_id", uid);

    alert("Order placed successfully!");
    router.push("/myorder");
  } catch (err: any) {
    console.error("Order error:", err.message || err);
    alert("Something went wrong!");
  } finally {
    setLoading(false);
  }
  };


  return (
    <section className={styles.checkoutSection}>
      {/* 🔹 Billing Details */}
      <div className={styles.billing}>
        <h2>Billing Details</h2>
        <form className={styles.form}>
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Street Address*" required />
          <input type="text" placeholder="Apartment, floor, etc. (optional)" />
          <input type="text" placeholder="Town/City*" required />
          <input type="tel" placeholder="Phone Number*" required />
          <input type="email" placeholder="Email Address*" required />

          <label className={styles.checkbox}>
            <input type="checkbox" /> Save this information for faster check-out
            next time
          </label>
        </form>
      </div>

      {/* 🔹 Order Summary */}
      <div className={styles.orderSummary}>
        {/* {cartItems.map((item) => (
          <div key={ item.id} className={styles.productRow}>
            <Image
              src={`/${item.image ?? "placeholder.png"}`}
              alt={item.name}
              width={54}
              height={54}
              className={styles.productImg}
            />
            <div className={styles.productInfo}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))} */}
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className={styles.productRow}>
            <Image
              src={`/${item.image ?? "placeholder.png"}`}
              alt={item.name}
              width={54}
              height={54}
              className={styles.productImg}
            />
            <div className={styles.productInfo}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}


        {/* Totals */}
        <div className={styles.totals}>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className={styles.payment}>
          <div className={styles.radioRow}>
            <input type="radio" name="payment" />
            <label>Bank</label>
          </div>
          <div className={styles.paymentLogos}>
            <Image src="/bkash.png" alt="Bkash" width={42} height={28} />
            <Image src="/visa.png" alt="Visa" width={42} height={28} />
            <Image src="/mastercard.png" alt="Mastercard" width={42} height={28} />
            <Image src="/nagad.png" alt="Nagad" width={42} height={28} />
          </div>
          <div className={styles.radioRow}>
            <input type="radio" name="payment" defaultChecked />
            <label>Cash on delivery</label>
          </div>
        </div>

        {/* Coupon */}
        <div className={styles.coupon}>
          <input type="text" placeholder="Coupon Code" />
          <button className={styles.couponBtn}>Apply Coupon</button>
        </div>

        {/* Place Order */}
        <button
          className={styles.placeOrderBtn}
          onClick={placeOrder}
          disabled={loading || cartItems.length === 0}
        >
          {loading ? "Placing order..." : "Place Order"}
          
             
          
        </button>
      </div>
    </section>
  );
}
