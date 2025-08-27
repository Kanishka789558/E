"use client";

// // import Image from "next/image";
// // import { Heart, Eye } from "lucide-react";
// // import styles from "./Month.module.css";

// // export default function Month() {
// //   return (
// //     <section className={styles.mathSection}>
// //       {/* Header Row */}
// //       <div className={styles.headerRow}>
// //         <div className={styles.left}>
// //           <div className={styles.tagRow}>
// //             <div className={styles.tagBox}></div>
// //             <span className={styles.tag}>This Month</span>
// //           </div>
// //           <h2 className={styles.heading}>Best Selling Products</h2>
// //         </div>
// //         <button className={styles.viewBtn}>View All Products</button>
// //       </div>

// //       {/* Products Row */}
// //       <div className={styles.productsRow}>
// //         {/* Product 1 */}
// //         <div className={styles.card}>
// //           {/* Action Buttons */}
// //           <div className={styles.actionBtns}>
// //             <button className={styles.actionBtn}>
// //               <Heart size={16} strokeWidth={1.5} />
// //             </button>
// //             <button className={styles.actionBtn}>
// //               <Eye size={16} strokeWidth={1.5} />
// //             </button>
// //           </div>

// //           <div className={styles.imageBox}>
// //             <Image
// //               src="/products/north-coat.jpg"
// //               alt="The north coat"
// //               fill
// //               className={styles.productImage}
// //             />
// //           </div>

// //           <div className={styles.infoBox}>
// //             <h3 className={styles.productTitle}>The north coat</h3>
// //             <div className={styles.priceRow}>
// //               <span className={styles.newPrice}>$260</span>
// //               <span className={styles.oldPrice}>$360</span>
// //             </div>
// //             <div className={styles.ratingRow}>
// //               <div className={styles.stars}>
// //                 <span></span><span></span><span></span><span></span><span></span>
// //               </div>
// //               <span className={styles.reviews}>(65)</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Product 2 */}
// //         <div className={styles.card}>
// //           <div className={styles.actionBtns}>
// //             <button className={styles.actionBtn}>
// //               <Heart size={16} strokeWidth={1.5} />
// //             </button>
// //             <button className={styles.actionBtn}>
// //               <Eye size={16} strokeWidth={1.5} />
// //             </button>
// //           </div>

// //           <div className={styles.imageBox}>
// //             <Image
// //               src="/products/gucci-duffle-bag.jpg"
// //               alt="Gucci duffle bag"
// //               fill
// //               className={styles.productImage}
// //             />
// //           </div>

// //           <div className={styles.infoBox}>
// //             <h3 className={styles.productTitle}>Gucci duffle bag</h3>
// //             <div className={styles.priceRow}>
// //               <span className={styles.newPrice}>$960</span>
// //               <span className={styles.oldPrice}>$1160</span>
// //             </div>
// //             <div className={styles.ratingRow}>
// //               <div className={styles.stars}>
// //                 <span></span><span></span><span></span><span></span><span></span>
// //               </div>
// //               <span className={styles.reviews}>(65)</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Product 3 */}
// //         <div className={styles.card}>
// //           <div className={styles.actionBtns}>
// //             <button className={styles.actionBtn}>
// //               <Heart size={16} strokeWidth={1.5} />
// //             </button>
// //             <button className={styles.actionBtn}>
// //               <Eye size={16} strokeWidth={1.5} />
// //             </button>
// //           </div>

// //           <div className={styles.imageBox}>
// //             <Image
// //               src="/products/cpu.jpg"
// //               alt="RGB liquid CPU Cooler"
// //               fill
// //               className={styles.productImage}
// //             />
// //           </div>

// //           <div className={styles.infoBox}>
// //             <h3 className={styles.productTitle}>RGB liquid CPU Cooler</h3>
// //             <div className={styles.priceRow}>
// //               <span className={styles.newPrice}>$160</span>
// //               <span className={styles.oldPrice}>$170</span>
// //             </div>
// //             <div className={styles.ratingRow}>
// //               <div className={styles.stars}>
// //                 <span></span><span></span><span></span><span></span><span></span>
// //               </div>
// //               <span className={styles.reviews}>(65)</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Product 4 */}
// //         <div className={styles.card}>
// //           <div className={styles.actionBtns}>
// //             <button className={styles.actionBtn}>
// //               <Heart size={16} strokeWidth={1.5} />
// //             </button>
// //             <button className={styles.actionBtn}>
// //               <Eye size={16} strokeWidth={1.5} />
// //             </button>
// //           </div>

// //           <div className={styles.imageBox}>
// //             <Image
// //               src="/products/bookself.jpg"
// //               alt="Small BookSelf"
// //               fill
// //               className={styles.productImage}
// //             />
// //           </div>

// //           <div className={styles.infoBox}>
// //             <h3 className={styles.productTitle}>Small BookSelf</h3>
// //             <div className={styles.priceRow}>
// //               <span className={styles.newPrice}>$360</span>
// //             </div>
// //             <div className={styles.ratingRow}>
// //               <div className={styles.stars}>
// //                 <span></span><span></span><span></span><span></span><span></span>
// //               </div>
// //               <span className={styles.reviews}>(65)</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }







// "use client";

// import Image from "next/image";
// import { Heart, Eye } from "lucide-react";
// import styles from "./Month.module.css";

// export default function Month() {
//   const products = [
//     { id: 1, title: "The north coat", img: "/products/north-coat.jpg", newPrice: "$260", oldPrice: "$360" },
//     { id: 2, title: "Gucci duffle bag", img: "/products/gucci-duffle-bag.jpg", newPrice: "$960", oldPrice: "$1160" },
//     { id: 3, title: "RGB liquid CPU Cooler", img: "/products/cpu.jpg", newPrice: "$160", oldPrice: "$170" },
//     { id: 4, title: "Small BookSelf", img: "/products/bookself.jpg", newPrice: "$360" },
//   ];

//   return (
//     <section className={styles.mathSection}>
//       {/* Header Row */}
//       <div className={styles.headerRow}>
//         <div className={styles.left}>
//           <div className={styles.tagRow}>
//             <div className={styles.tagBox}></div>
//             <span className={styles.tag}>This Month</span>
//           </div>
//           <h2 className={styles.heading}>Best Selling Products</h2>
//         </div>
//         <button className={styles.viewBtn}>View All</button>
//       </div>

//       {/* Products Row */}
//       <div className={styles.productsRow}>
//         {products.map((p) => (
//           <div key={p.id} className={styles.card}>
//             {/* Action Buttons */}
//             <div className={styles.actionBtns}>
//               <button className={styles.actionBtn}><Heart size={16} strokeWidth={1.5} /></button>
//               <button className={styles.actionBtn}><Eye size={16} strokeWidth={1.5} /></button>
//             </div>

//             <div className={styles.imageBox}>
//               <Image src={p.img} alt={p.title} fill className={styles.productImage} />
//             </div>

//             <div className={styles.infoBox}>
//               <h3 className={styles.productTitle}>{p.title}</h3>
//               <div className={styles.priceRow}>
//                 <span className={styles.newPrice}>{p.newPrice}</span>
//                 {p.oldPrice && <span className={styles.oldPrice}>{p.oldPrice}</span>}
//               </div>
//               <div className={styles.ratingRow}>
//                 <div className={styles.stars}><span></span><span></span><span></span><span></span><span></span></div>
//                 <span className={styles.reviews}>(65)</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// "use client";
// import Image from "next/image";
// import { Heart, Eye } from "lucide-react";
// import styles from "./Month.module.css";

// export default function Month() {
//   const products = [
//     { id: 1, name: "The north coat", price: 260, oldPrice: 360, image: "/coat.png", rating: 5 },
//     { id: 2, name: "Gucci duffle bag", price: 960, oldPrice: 1160, image: "/bag.png", rating: 5 },
//     { id: 3, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, image: "/cooler.png", rating: 5 },
//     { id: 4, name: "Small BookSelf", price: 360, oldPrice: 0, image: "/bookshelf.png", rating: 5 },
//   ];

//   return (
//     <section className={styles.monthSection}>
//       {/* Header Row */}
//       <div className={styles.headerRow}>
//         <span className={styles.tag}>This Month</span>
//         <h2 className={styles.title}>Best Selling Products</h2>
//         <button className={styles.viewAll}>View All</button>
//       </div>

//       {/* Products Grid */}
//       <div className={styles.productsGrid}>
//         {products.map((product) => (
//           <div className={styles.productCard} key={product.id}>
//             <div className={styles.imageWrapper}>
//               <Image src={product.image} alt={product.name} width={200} height={200} />
//               <div className={styles.icons}>
//                 <Heart size={18} />
//                 <Eye size={18} />
//               </div>
//             </div>
//             <h3 className={styles.productName}>{product.name}</h3>
//             <div className={styles.priceRow}>
//               <span className={styles.price}>${product.price}</span>
//               {product.oldPrice > 0 && <span className={styles.oldPrice}>${product.oldPrice}</span>}
//             </div>
//             <div className={styles.rating}>★★★★★ (65)</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import styles from "./Month.module.css";

export default function Month() {
  const products = [
    { id: 1, name: "The north coat", price: 260, oldPrice: 360, image: "/products/north-coat.jpg", rating: 5 },
    { id: 2, name: "Gucci duffle bag", price: 960, oldPrice: 1160, image: "/products/gucci-duffle-bag.jpg", rating: 4.5 },
    { id: 3, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, image: "/products/cpu.jpg", rating: 4.5 },
    { id: 4, name: "Small BookSelf", price: 360, oldPrice: 0, image: "/products/bookself.jpg", rating: 5 },
  ];

  return (
    <section className={styles.monthSection}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <div className={styles.tagBox}></div>
          <span className={styles.tagText}>This Month</span>
        </div>
        <h2 className={styles.headerTitle}>Best Selling Products</h2>
        <button className={styles.viewAll}>View All Products</button>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImageBox}>
              <Image src={product.image} alt={product.name} width={190} height={180} />
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
    </section>
  );
}
