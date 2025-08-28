'use client'


import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        {/* Column 1: Exclusive & Subscribe */}
        <div className={styles.column}>
          <h2 className={styles.title}>Exclusive</h2>
          <p className={styles.subHeading}>Subscribe</p>
          <p className={styles.text}>Get 10% off your first order</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" />
            <button aria-label="Subscribe">&gt;</button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Support</h3>
          <p className={styles.text}>
            111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.
          </p>
          <p className={styles.text}>exclusive@gmail.com</p>
          <p className={styles.text}>+88015-88888-9999</p>
        </div>

        {/* Column 3: Account */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Account</h3>
          <ul className={styles.list}>
            <li><Link href="#">My Account</Link></li>
            <li><Link href="#">Login / Register</Link></li>
            <li><Link href="#">Cart</Link></li>
            <li><Link href="#">Wishlist</Link></li>
            <li><Link href="#">Shop</Link></li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Link</h3>
          <ul className={styles.list}>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms Of Use</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Column 5: Download App */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Download App</h3>
          <p className={styles.textSmall}>Save $3 with App New User Only</p>
          <div className={styles.qrWrapper}>
            <Image src="/qrcode.png" alt="QR code" width={80} height={80} />
            <div className={styles.storeButtons}>
              <div className={styles.storeButton}>
                <Image src="/googleplay.png" alt="Google Play" width={104} height={30} />
              </div>
              <div className={styles.storeButton}>
                <Image src="/googleplay.png" alt="App Store" width={104} height={30} />
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}



// import styles from "./Footer.tsx";

// <footer className={styles.footer}>
//   <div className={styles.innerContainer}>
//     <div className={styles.column}>
//       <h3 className={styles.logo}>Exclusive</h3>
//       <p>Subscribe</p>
//       <p>Get 10% off your first order</p>
//       <div className={styles.emailBox}>
//         <input type="email" placeholder="Enter your email" />
//         <button>Subscribe</button>
//       </div>
//     </div>

//     <div className={styles.column}>
//       <h4>Support</h4>
//       <p>111 Bijoy sarani, Dhaka</p>
//       <p>exclusive@gmail.com</p>
//       <p>+88015-88888-9999</p>
//     </div>

//     <div className={styles.column}>
//       <h4>Account</h4>
//       <p>My Account</p>
//       <p>Login / Register</p>
//       <p>Cart</p>
//       <p>Wishlist</p>
//       <p>Shop</p>
//     </div>

//     <div className={styles.column}>
//       <h4>Quick Link</h4>
//       <p>Privacy Policy</p>
//       <p>Terms of Use</p>
//       <p>FAQ</p>
//       <p>Contact</p>
//     </div>
//   </div>

//   <div className={styles.copy}>
//     <p>© Copyright Rimel 2022. All rights reserved</p>
//   </div>
// </footer>
