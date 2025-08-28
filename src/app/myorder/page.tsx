"use client";
 

/* eslint-disable @next/next/no-img-element */






import { useEffect, useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./MyOrder.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Order {
  id: number;
  status: string;
  product_id: number;
  products: Product;
}

export default function MyOrder() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orderss")
        .select(
          `
          id,
          status,
          product_id,
          products ( id, name, price, image )
        `
        )
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error.message);
      } else {
        setOrders((data as unknown as Order[]) || []);
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading your orders...</p>;

  return (
    <section className={styles.ordersSection}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className={styles.ordersGrid}>
          {orders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <img
                src={order.products?.image || "/placeholder.png"}
                alt={order.products?.name || "Product"}
                className={styles.productImage}
              />
              <div className={styles.cardContent}>
                <h3>{order.products?.name}</h3>
                <p className={styles.price}>₹{order.products?.price}</p>
                <span
                  className={`${styles.status} ${
                    order.status === "Delivered"
                      ? styles.delivered
                      : styles.pending
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
