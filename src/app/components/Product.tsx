"use client";
import Image from "next/image";
import styles from "./Product.module.css";

export default function Product() {
  const products = [
    {
      id: 1,
      name: "Breed Dry Dog Food",
      price: "$100",
      image: "/dog-food.png",
      rating: 3,
      reviews: 35,
    },
    {
      id: 2,
      name: "Canon EOS DSLR Camera",
      price: "$360",
      image: "/camera.png",
      rating: 4,
      reviews: 95,
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "$999",
      image: "/laptop.png",
      rating: 5,
      reviews: 210,
    },
    {
      id: 4,
      name: "Soccer Cleats",
      price: "$50",
      image: "/shoes.png",
      rating: 4,
      reviews: 72,
    },
  ];

  return (
    <div className={styles.productSection}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        {/* Left side */}
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <div className={styles.tagBox}></div>
            <span className={styles.tag}>Our Product</span>
          </div>
          <h2 className={styles.heading}>Explore Our Product</h2>
        </div>

        {/* Right side - arrows */}
        <div className={styles.arrows}>
          <button className={styles.arrowBtn}>&lt;</button>
          <button className={styles.arrowBtn}>&gt;</button>
        </div>
      </div>

      {/* Products Row */}
      <div className={styles.productsRow}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Product Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                width={190}
                height={180}
              />
              <div className={styles.actions}>
                <button className={styles.iconBtn}>♡</button>
                <button className={styles.iconBtn}>👁</button>
              </div>
            </div>

            {/* Product Info */}
            <div className={styles.details}>
              <h3 className={styles.name}>{product.name}</h3>
              <div className={styles.priceRating}>
                <p className={styles.price}>{product.price}</p>
                <div className={styles.rating}>
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                  <span className={styles.reviews}>({product.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.productsRow}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Product Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                width={190}
                height={180}
              />
              <div className={styles.actions}>
                <button className={styles.iconBtn}>♡</button>
                <button className={styles.iconBtn}>👁</button>
              </div>
            </div>

            {/* Product Info */}
            <div className={styles.details}>
              <h3 className={styles.name}>{product.name}</h3>
              <div className={styles.priceRating}>
                <p className={styles.price}>{product.price}</p>
                <div className={styles.rating}>
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                  <span className={styles.reviews}>({product.reviews})</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
              <button className={styles.button}>
                 View All Products
              </button>
      </div>
    </div>
  
  );
}





