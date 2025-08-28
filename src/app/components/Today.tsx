"use client";
/* eslint-disable react/jsx-no-undef */




import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "./Today.module.css";

type DBProduct = {
  id: number;
  name: string;
  price: number;
  image: string | null;
};

export default function Today() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });
  const [uid, setUid] = useState<string | null>(null);
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [wishIds, setWishIds] = useState<Set<number>>(new Set());
  const [offset, setOffset] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const limit = 4; // products per page

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Load Products on First Render
  useEffect(() => {
    loadProducts(0);
  }, []);

  const loadProducts = async (skip: number) => {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id ?? null;
    setUid(userId);

    const { data: prods } = await supabase
      .from("products")
      .select("id,name,price,image")
      .order("id", { ascending: true })
      .range(skip, skip + limit - 1);

    if (prods && prods.length > 0) setProducts((prev) => [...prev, ...prods]);

    if (userId) {
      const { data: wl } = await supabase.from("wishlist").select("product_id").eq("user_id", userId);
      setWishIds(new Set((wl ?? []).map((r) => Number(r.product_id))));
    }
  };

  // Wishlist toggle
  const toggleWish = async (productId: number) => {
    if (!uid) return alert("Please log in!");

    if (wishIds.has(productId)) {
      await supabase.from("wishlist").delete().eq("user_id", uid).eq("product_id", productId);
      setWishIds((prev) => {
        const next = new Set(prev);
        next.delete(productId);
        return next;
      });
    } else {
      await supabase.from("wishlist").insert([{ user_id: uid, product_id: productId }]);
      setWishIds((prev) => new Set(prev).add(productId));
    }
  };

  // Navigate to Product Detail
  const goToDetail = (id: number) => router.push(`/productdetail/${id}`);

  // Scroll
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  // Load More
  const loadMore = () => {
    const nextOffset = offset + limit;
    setOffset(nextOffset);
    loadProducts(nextOffset);
  };

  return (
    <section className={styles.todayWrapper}>
      {/* Header Section */}
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
          <div className={styles.colon}></div>
          <div><p>{String(timeLeft.hours).padStart(2, "0")}</p><span>Hours</span></div>
          <div className={styles.colon}></div>
          <div><p>{String(timeLeft.minutes).padStart(2, "0")}</p><span>Minutes</span></div>
          <div className={styles.colon}></div>
          <div><p>{String(timeLeft.seconds).padStart(2, "0")}</p><span>Seconds</span></div>
        </div>

        <div className={styles.arrows}>
          <button onClick={scrollLeft}>{"<"}</button>
          <button onClick={scrollRight}>{">"}</button>
        </div>
      </div>

      {/* Products Section */}
      <div className={styles.products} ref={scrollRef}>
        {products.map((p, index) => (
          <div key={`${p.id}-${index}`} className={styles.card}>
            <div className={styles.actions}>
              <button className={styles.actionBtn} onClick={() => toggleWish(p.id)}>
                {wishIds.has(p.id) ? "❤️" : "🤍"}
              </button>
              <button className={styles.actionBtn} onClick={() => goToDetail(p.id)}>👁</button>
            </div>
            <div className={styles.imageBox}> <Image src={`/${p.image ?? "placeholder.png"}`} alt={p.name} width={200} height={180} /></div>
           
            <h3>{p.name}</h3>
            <div className={styles.price}>${p.price.toFixed(2)}</div>
            <div className={styles.rating}>★★★★☆</div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={loadMore}>View All Products</button>
      </div>
      <div className={styles.line}></div>
    </section>
  );
}
