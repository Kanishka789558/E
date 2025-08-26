"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./MyReviews.module.css";

interface Review {
  id: number;
  product: string;
  rating: number;
  review: string;
}

export default function MyReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);

        // Example: "reviews" table ke columns: id, product, rating, review
        const { data, error } = await supabase
          .from("reviews")
          .select("id, product, rating, review");

        if (error) throw error;

        setReviews(data || []);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return (
    <section className={styles.container}>
      <h2>My Reviews</h2>

      {loading ? (
        <p>Loading...</p>
      ) : reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((r) => (
            <li key={r.id}>
              <strong>{r.product}</strong> - {r.rating}⭐ <br />
              {r.review}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
