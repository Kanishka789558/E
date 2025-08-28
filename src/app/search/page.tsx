"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/app/libr/supabaseClient";
import Link from "next/link";
import styles from "./Search.module.css";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      if (!query.trim()) {
        setProducts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      const searchQuery = query.toLowerCase(); // case-insensitive

      const { data, error } = await supabase
        .from("products")
        .select("id, name, description, image")
        .or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);

      if (error) {
        setError("Failed to fetch products");
      } else {
        setProducts((data || []) as Product[]);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [query]);

  return (
    <div className={styles.container}>
      <h2>Search Results for `{query}`</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : products.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <Link href={`/productdetail/${product.id}`} key={product.id} className={styles.card}>
              <img src={product.image || "/placeholder.jpg"} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading search results...</p>}>
      <SearchContent />
    </Suspense>
  );
}