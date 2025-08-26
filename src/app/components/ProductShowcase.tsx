import Image from "next/image";
import styles from "./ProductShowcase.module.css";

export default function ProductShowcase() {
  return (
    <section className={styles.container}>
      {/* Left: PlayStation */}
      <div className={styles.leftBox}>
        <div className={styles.ps5Wrapper}>
          <Image
            src="/ps5.png"
            alt="PlayStation 5"
            width={511}
            height={511}
            className={styles.ps5Image}
          />
        </div>
        <div className={styles.textOverlay}>
          <h3 className={styles.title}>PlayStation 5</h3>
          <p className={styles.description}>
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className={styles.shopBtn}>Shop Now</button>
        </div>
      </div>

      {/* Right: Women’s Collections + Grid */}
      <div className={styles.rightBox}>
        {/* Top Banner */}
        <div className={styles.womenBox}>
          <Image
            src="/woman-hat.png"
            alt="Women's Collection"
            width={432}
            height={286}
            className={styles.womenImage}
          />
          <div className={styles.textOverlay}>
            <h3 className={styles.title}>Women’s Collections</h3>
            <p className={styles.description}>
              Featured woman collections that give you another vibe.
            </p>
            <button className={styles.shopBtn}>Shop Now</button>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className={styles.grid}>
          {/* Speakers */}
          <div className={styles.gridBox}>
            <div className={styles.blurCircle}></div>
            <Image
              src="/echo.png"
              alt="Amazon Echo Speaker"
              width={190}
              height={221}
              className={styles.productImage}
            />
            <div className={styles.textOverlay}>
              <h3 className={styles.title}>Speakers</h3>
              <p className={styles.description}>Amazon wireless speakers</p>
              <button className={styles.shopBtn}>Shop Now</button>
            </div>
          </div>

          {/* Perfume */}
          <div className={styles.gridBox}>
            <div className={styles.blurCircle}></div>
            <Image
              src="/perfume.png"
              alt="Gucci Perfume"
              width={201}
              height={203}
              className={styles.productImage}
            />
            <div className={styles.textOverlay}>
              <h3 className={styles.title}>Perfume</h3>
              <p className={styles.description}>GUCCI INTENSE OUD EDP</p>
              <button className={styles.shopBtn}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
