// 'use client';

// export default function Footer(){
//   return (
//     <footer className="bg-black text-white mt-24">
//       <div className="container-xxl grid md:grid-cols-5 gap-10 py-16">
//         <div>
//           <h3 className="text-2xl font-semibold">Exclusive</h3>
//           <p className="mt-4 text-sm">Subscribe</p>
//           <p className="text-sm text-gray-300 mb-4">Get 10% off your first order</p>
//           <div className="flex bg-white rounded-md overflow-hidden max-w-xs">
//             <input placeholder="Enter your email" className="px-3 py-2 flex-1 text-black outline-none"/>
//             <button className="px-4 text-black">→</button>
//           </div>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-4">Support</h4>
//           <ul className="space-y-3 text-sm text-gray-300">
//             <li>111 Bijoy sarani, Dhaka</li>
//             <li>exclusive@gmail.com</li>
//             <li>+88015-88888-9999</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-4">Account</h4>
//           <ul className="space-y-3 text-sm text-gray-300">
//             <li>My Account</li>
//             <li>Login / Register</li>
//             <li>Cart</li>
//             <li>Wishlist</li>
//             <li>Shop</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-4">Quick Link</h4>
//           <ul className="space-y-3 text-sm text-gray-300">
//             <li>Privacy Policy</li>
//             <li>Terms Of Use</li>
//             <li>FAQ</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold mb-4">Download App</h4>
//           <p className="text-xs text-gray-400 mb-3">Save $3 with App New User Only</p>
//           <div className="flex gap-3 mb-5">
//             <div className="bg-white w-24 h-24"/>
//             <div className="space-y-3">
//               <div className="w-40 h-12 bg-white rounded"/>
//               <div className="w-40 h-12 bg-white rounded"/>
//             </div>
//           </div>
//           <div className="flex gap-4 text-gray-300 text-sm">
//             <span>FB</span><span>TW</span><span>IG</span><span>YT</span>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-white/10 py-4 text-center text-gray-400 text-sm">© Copyright 2025 Exclusive</div>
//     </footer>
//   );
// }



// 'use client';
// export default function Footer(){
//   return (
//     <footer className="bg-black text-white mt-24">
//       <div className="container-xxl grid md:grid-cols-5 gap-10 py-16">
//         <div>
//           <h3 className="text-2xl font-semibold">Exclusive</h3>
//           <p className="mt-4 text-sm">Subscribe</p>
//           <p className="text-sm text-gray-300 mb-4">Get 10% off your first order</p>
//           <div className="flex bg-white rounded-md overflow-hidden max-w-xs">
//             <input placeholder="Enter your email" className="px-3 py-2 flex-1 text-black outline-none" />
//             <button className="px-4 text-black">→</button>
//           </div>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Support</h4>
//           <ul className="space-y-3 text-sm text-gray-300">
//             <li>111 Bijoy sarani, Dhaka</li>
//             <li>exclusive@gmail.com</li>
//             <li>+88015-88888-9999</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Account</h4>
//           <ul className="space-y-3 text-sm text-gray-300">
//             <li>My Account</li>
//             <li>Login / Register</li>
//             <li>Cart</li>
//             <li>Wishlist</li>
//             <li>Shop</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Quick Link</h4>
//           <ul className="space-y-3 text-sm text-gray-300">
//             <li>Privacy Policy</li>
//             <li>Terms Of Use</li>
//             <li>FAQ</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Download App</h4>
//           <p className="text-xs text-gray-400 mb-3">Save $3 with App New User Only</p>
//           <div className="flex gap-3 mb-5">
//             <div className="bg-white w-24 h-24" />
//             <div className="space-y-3">
//               <div className="w-40 h-12 bg-white rounded" />
//               <div className="w-40 h-12 bg-white rounded" />
//             </div>
//           </div>
//           <div className="flex gap-4 text-gray-300 text-sm">
//             <span>FB</span><span>TW</span><span>IG</span><span>YT</span>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-white/10 py-4 text-center text-gray-400 text-sm">© Copyright 2025 Exclusive</div>
//     </footer>
//   );
// }

"use client";

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

