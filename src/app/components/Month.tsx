"use client";

import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import styles from "./Month.module.css";

export default function Month() {
  return (
    <section className={styles.mathSection}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        <div className={styles.left}>
          <div className={styles.tagRow}>
            <div className={styles.tagBox}></div>
            <span className={styles.tag}>This Month</span>
          </div>
          <h2 className={styles.heading}>Best Selling Products</h2>
        </div>
        <button className={styles.viewBtn}>View All Products</button>
      </div>

      {/* Products Row */}
      <div className={styles.productsRow}>
        {/* Product 1 */}
        <div className={styles.card}>
          {/* Action Buttons */}
          <div className={styles.actionBtns}>
            <button className={styles.actionBtn}>
              <Heart size={16} strokeWidth={1.5} />
            </button>
            <button className={styles.actionBtn}>
              <Eye size={16} strokeWidth={1.5} />
            </button>
          </div>

          <div className={styles.imageBox}>
            <Image
              src="/products/north-coat.jpg"
              alt="The north coat"
              fill
              className={styles.productImage}
            />
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.productTitle}>The north coat</h3>
            <div className={styles.priceRow}>
              <span className={styles.newPrice}>$260</span>
              <span className={styles.oldPrice}>$360</span>
            </div>
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <span className={styles.reviews}>(65)</span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className={styles.card}>
          <div className={styles.actionBtns}>
            <button className={styles.actionBtn}>
              <Heart size={16} strokeWidth={1.5} />
            </button>
            <button className={styles.actionBtn}>
              <Eye size={16} strokeWidth={1.5} />
            </button>
          </div>

          <div className={styles.imageBox}>
            <Image
              src="/products/gucci-duffle-bag.jpg"
              alt="Gucci duffle bag"
              fill
              className={styles.productImage}
            />
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.productTitle}>Gucci duffle bag</h3>
            <div className={styles.priceRow}>
              <span className={styles.newPrice}>$960</span>
              <span className={styles.oldPrice}>$1160</span>
            </div>
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <span className={styles.reviews}>(65)</span>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className={styles.card}>
          <div className={styles.actionBtns}>
            <button className={styles.actionBtn}>
              <Heart size={16} strokeWidth={1.5} />
            </button>
            <button className={styles.actionBtn}>
              <Eye size={16} strokeWidth={1.5} />
            </button>
          </div>

          <div className={styles.imageBox}>
            <Image
              src="/products/cpu.jpg"
              alt="RGB liquid CPU Cooler"
              fill
              className={styles.productImage}
            />
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.productTitle}>RGB liquid CPU Cooler</h3>
            <div className={styles.priceRow}>
              <span className={styles.newPrice}>$160</span>
              <span className={styles.oldPrice}>$170</span>
            </div>
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <span className={styles.reviews}>(65)</span>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className={styles.card}>
          <div className={styles.actionBtns}>
            <button className={styles.actionBtn}>
              <Heart size={16} strokeWidth={1.5} />
            </button>
            <button className={styles.actionBtn}>
              <Eye size={16} strokeWidth={1.5} />
            </button>
          </div>

          <div className={styles.imageBox}>
            <Image
              src="/products/bookself.jpg"
              alt="Small BookSelf"
              fill
              className={styles.productImage}
            />
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.productTitle}>Small BookSelf</h3>
            <div className={styles.priceRow}>
              <span className={styles.newPrice}>$360</span>
            </div>
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <span className={styles.reviews}>(65)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
