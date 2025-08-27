"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { useState } from "react";
import styles from "./Category.module.css";

const allProducts = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    images: ["/products/north-coat.jpg", "/products/north-coat-2.jpg"],
    rating: 5,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    images: ["/products/gucci-duffle-bag.jpg", "/products/gucci-duffle-bag-2.jpg"],
    rating: 4.5,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    images: ["/products/cpu.jpg", "/products/cpu-2.jpg"],
    rating: 4.5,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    oldPrice: 0,
    images: ["/products/bookself.jpg", "/products/bookself-2.jpg"],
    rating: 5,
  },
  // Add more products as needed
];

export default function CategoryPage() {
  const { category } = useParams();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className={styles.monthSection}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <div className={styles.tagBox}></div>
          <span className={styles.tagText}>{category}</span>
        </div>
        <h2 className={styles.headerTitle}>Products</h2>
      </div>

      <div className={styles.productsGrid}>
        {allProducts.slice(0, visibleCount).map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImageBox}>
              <Image
                src={product.images[0]}
                alt={product.name}
                width={190}
                height={180}
              />
              <div className={styles.iconGroup}>
                <div className={styles.iconCircle}><Heart size={16} /></div>
                <div className={styles.iconCircle}><Eye size={16} /></div>
              </div>
            </div>
            <div className={styles.productDetails}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>${product.price}</span>
                {product.oldPrice > 0 && (
                  <span className={styles.oldPrice}>${product.oldPrice}</span>
                )}
              </div>
              <div className={styles.ratingRow}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.reviewCount}>(65)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allProducts.length && (
        <div className={styles.loadMoreWrapper}>
          <button onClick={handleLoadMore} className={styles.loadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
