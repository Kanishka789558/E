/* eslint-disable @typescript-eslint/no-unused-vars */




import Image from "next/image";

import { getImageSrc } from "@/app/utils/getImageSrc";
import { Key } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./productdetail.module.css";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  colours: string[];
  sizes: string[];
  stock: number;
  reviews_count: number;
}


export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  const productId = Number(id);


  const { data: product, error } = await supabase
    .from("productdetail")
    .select(`
      id,
      title,
      price,
      description,
      images,
      colours,
      sizes,
      stock,
      reviews_count,
      products ( id, name, price, image )
   `)
    .eq("id", productId)
    .single();

  if (!product || error) return <div>Error loading product</div>;

  // Main image and all imagesnpm
  const initialMainImage = getImageSrc(
    product.products?.[0]?.image || product.images?.[0]
  );

  const allImages = [
    ...(product.products?.map((p) => getImageSrc(p.image)) || []),
    ...(product.images?.map((img: string) => getImageSrc(img)) || []),
  ];

  return (
    <div className={styles.container}>
      {/* Left Thumbnails */}
      <div className={styles.leftColumn}>
        {allImages.map((img, idx) => (
          <div key={idx} className={styles.smallBox}>
            <Image src={img} alt={product.title} width={80} height={80} />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className={styles.mainImage}>
        <Image src={initialMainImage} alt={product.title} width={400} height={400} />
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        <h2 className={styles.productTitle}>{product.title}</h2>

        <div className={styles.ratingRow}>
          <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
          <div className={styles.divider}></div>
          <span className={styles.stock}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className={styles.price}>₹{product.price}</div>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.underline}></div>

        {/* Colours */}
        <div className={styles.colorRow}>
          <span>Colours:</span>
          {product.colours?.map((color: string, idx: number) => (
            <div
              key={idx}
              style={{ backgroundColor: color }}
              className={styles.colorCircle}
            ></div>
          ))}
        </div>

        {/* Sizes */}
        <div className={styles.sizeRow}>
          <span className={styles.sizeLabel}>Size:</span>
          <div className={styles.sizeOptions}>
            {product.sizes?.map((size: string, idx: number) => (
              <div key={idx} className={styles.sizeBox}>
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actionRow}>
          <div className={styles.qtyBox}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className={styles.buyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}