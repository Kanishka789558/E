"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */


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
  // const placeOrder = async () => {
  // if (!uid) return alert("Please log in!");
  // if (cartItems.length === 0) {
  //   alert("Cart is empty!");
  //   return;
  // }

  // setLoading(true);

  // try {
  //   // Har product ke liye ek order row insert karo
  //   const { data, error } = await supabase.from("orderss").insert(
  //     cartItems.map(item => ({
  //       user_id: uid,
  //       product_id: item.id,  // product id from cart
  //       status: "pending",
  //     }))
  //   );

  //   console.log("Insert result:", { data, error });

  //   if (error) throw error;

  //   // Cart clear karo
  //   await supabase.from("carts").delete().eq("user_id", uid);

  //   alert("Order placed successfully!");
  //   router.push("/myorder");
  // } catch (err: any) {
  //   console.error("Order error:", err.message || err);
  //   alert("Something went wrong!");
  // } finally {
  //   setLoading(false);
  // }
  // };
  const placeOrder = async () => {
  if (!uid) return alert("Please log in!");
  if (cartItems.length === 0) return alert("Cart is empty!");

  setLoading(true);

  try {
    // Stripe checkout session banao
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    });

    const data = await res.json();
    if (data.url) {
      // Stripe checkout page pe redirect karo
      window.location.href = data.url;
    } else {
      alert("Something went wrong!");
    }
  } catch (err) {
    console.error("Error creating checkout:", err);
    alert("Failed to start checkout");
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
