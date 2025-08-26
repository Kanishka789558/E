/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./OrderDetails.module.css";

interface Product {
  product_id: string;
  name: string;
  price: number;
  description: string;
}

export default function OrderDetails() {
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [orderInfo, setOrderInfo] = useState<any | null>(null);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!params?.orderId) return;

      // 1. Get order details
      const { data: orderData, error: orderError } = await supabase
        .from("orderss")
        .select("*")
        .eq("id", params.orderId)
        .single();

      if (orderError) {
        console.error(orderError);
        return;
      }
      setOrderInfo(orderData);

      // 2. Fetch all products linked to this order
      // Assuming you have an order_items table linking orders and products
      const { data: orderItems, error: orderItemsError } = await supabase
        .from("order_items")
        .select("product_id")
        .eq("order_id", params.orderId);

      if (orderItemsError) {
        console.error(orderItemsError);
        return;
      }

      // 3. Get product details for each product_id
      if (orderItems && orderItems.length > 0) {
        const productIds = orderItems.map((item) => item.product_id);

        const { data: productData, error: productError } = await supabase
          .from("products")
          .select("*")
          .in("product_id", productIds);

        if (productError) {
          console.error(productError);
          return;
        }

        setOrderProducts(productData || []);
      }
    };

    fetchOrderDetails();
  }, [params?.orderId]);

  const handleAddToCart = async (product: Product) => {
    const { error } = await supabase.from("carts").insert({
      product_id: product.product_id,
      quantity: 1, // Default quantity
    });

    if (error) {
      console.error(error);
      alert("Failed to add product to cart.");
    } else {
      alert(`${product.name} added to cart again.`);
    }
  };

  if (!orderInfo) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Order #{orderInfo.id}</h2>
      <p>Status: {orderInfo.status}</p>
      <hr />
      <h3>Products</h3>
      {orderProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className={styles.productsGrid}>
          {orderProducts.map((p) => (
            <div key={p.product_id} className={styles.card}>
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <p>{p.description}</p>
              <button
                className={styles.button}
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart Again
              </button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => router.push("/orders")} className={styles.backBtn}>
        Back to Orders
      </button>
    </div>
  );
}
