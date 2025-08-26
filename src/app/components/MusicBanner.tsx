import Image from "next/image";
import styles from "./MusicBanner.module.css";

export default function MusicBanner() {
  return (
    <section className={styles.banner}>
      {/* Blurred Ellipse */}
      <div className={styles.ellipse}></div>

      {/* Left Content */}
      <div className={styles.leftContent}>
        <span className={styles.category}>Categories</span>
        <h2 className={styles.heading}>Enhance Your Music Experience</h2>

        {/* Timer */}
        <div className={styles.timer}>
          <div className={styles.timerBox}>
            <span className={styles.timeValue}>23</span>
            <span className={styles.timeLabel}>Hours</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.timeValue}>05</span>
            <span className={styles.timeLabel}>Days</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.timeValue}>59</span>
            <span className={styles.timeLabel}>Minutes</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.timeValue}>35</span>
            <span className={styles.timeLabel}>Seconds</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className={styles.ctaBtn}>View All Products</button>
      </div>

      {/* Right Content (Image) */}
      <div className={styles.imageBox}>
        <Image
          src="/JBL_BOOMBOX_2_HERO_020_x1.png"
          alt="JBL Boombox"
          fill
          className={styles.productImage}
        />
      </div>
    </section>
  );
}
