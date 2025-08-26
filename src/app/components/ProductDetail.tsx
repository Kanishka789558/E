
// "use client";

// import Image from "next/image";
// import styles from "./productdetail.module.css";

// export default function ProductDetail() {
//   return (
//     <div className={styles.container}>
//       {/* Left Side - Small Images */}
//       <div className={styles.leftColumn}>
//         <div className={styles.smallBox}></div>
//         <div className={styles.smallBox2}></div>
//         <div className={styles.smallBox}></div>
//         <div className={styles.smallBox}></div>
//       </div>

//       {/* Center - Main Image */}
//       <div className={styles.mainImage}></div>

//       {/* Right Side - Product Info */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>Havic HV G-92 Gamepad</h2>

//         {/* Rating */}
//         <div className={styles.ratingRow}>
//           <div className={styles.stars}>
//             <div className={styles.star}></div>
//             <div className={styles.star}></div>
//             <div className={styles.star}></div>
//             <div className={styles.star}></div>
//             <div className={styles.starGray}></div>
//           </div>
//           <span className={styles.reviews}>(150 Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>In Stock</span>
//         </div>

//         {/* Price */}
//         <div className={styles.price}>$192.00</div>

//         {/* Description */}
//         <p className={styles.description}>
//           PlayStation 5 Controller Skin High quality vinyl with air channel
//           adhesive for easy bubble free install & mess free removal Pressure
//           sensitive.
//         </p>

//         <div className={styles.underline}></div>

//         {/* Colors */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           <div className={styles.colorCircle}></div>
//           <div className={styles.colorCircleRed}></div>
//         </div>

//         {/* Sizes */}
//         <div className={styles.sizeRow}>
//           <span className={styles.sizeLabel}>Size:</span>
//           <div className={styles.sizeOptions}>
//             <div className={styles.sizeBox}>XS</div>
//             <div className={styles.sizeBox}>S</div>
//             <div className={styles.sizeBoxActive}>M</div>
//             <div className={styles.sizeBox}>L</div>
//             <div className={styles.sizeBox}>XL</div>
//           </div>
//         </div>

//         {/* Quantity + Buttons */}
//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button>-</button>
//             <span>2</span>
//             <button>+</button>
//           </div>

//           <button className={styles.buyNow}>Buy Now</button>

//           <div className={styles.heart}></div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@supabase/supabase-js";
// import styles from "./productdetail.module.css";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   colours: string[];
//   sizes: string[];
//   stock: number;
//   reviews_count: number;
// }

// export default function ProductDetail({ productId }: { productId: number }) {
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("products")
//         .select("id, title, price, description, images, colours, sizes, stock, reviews_count")
//         .eq("id", productId)
//         .single();
//       if (!error) setProduct(data);
//     };
//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className={styles.container}>
//       {/* Left Side - Small Images */}
//       <div className={styles.leftColumn}>
//         {product.images.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={`/${img}`} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Center - Main Image */}
//       <div className={styles.mainImage}>
//         <Image
//           src={`/${product.images[0]}`}
//           alt={product.title}
//           width={400}
//           height={400}
//         />
//       </div>

//       {/* Right Side - Product Info */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>

//         {/* Rating */}
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
//         </div>

//         {/* Price */}
//         <div className={styles.price}>${product.price}</div>

//         {/* Description */}
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colors */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours.map((color, idx) => (
//             <div key={idx} style={{ backgroundColor: color }} className={styles.colorCircle}></div>
//           ))}
//         </div>

//         {/* Sizes */}
//         <div className={styles.sizeRow}>
//           <span className={styles.sizeLabel}>Size:</span>
//           <div className={styles.sizeOptions}>
//             {product.sizes.map((size, idx) => (
//               <div key={idx} className={styles.sizeBox}>{size}</div>
//             ))}
//           </div>
//         </div>

//         {/* Quantity + Buttons */}
//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button>-</button>
//             <span>1</span>
//             <button>+</button>
//           </div>

//           <button className={styles.buyNow}>Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { createClient } from "@supabase/supabase-js";
// import styles from "./productdetail.module.css";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   colours: string[];
//   sizes: string[];
//   stock: number;
//   reviews_count: number;
// }

// export default function ProductDetail({ productId }: { productId: number }) {
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail") // CHANGED TABLE NAME HERE
//         .select(
//           "id, title, price, description, images, colours, sizes, stock, reviews_count"
//         )
//         .eq("id", productId)
//         .single();

//       if (!error) setProduct(data);
//     };
//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className={styles.container}>
//       {/* Left Side - Small Images */}
//       <div className={styles.leftColumn}>
//         {product.images.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={`/${img}`} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Center - Main Image */}
//       <div className={styles.mainImage}>
//         <Image
//           src={`/${product.images[0]}`}
//           alt={product.title}
//           width={400}
//           height={400}
//         />
//       </div>

//       {/* Right Side - Product Info */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>

//         {/* Rating */}
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>

//         {/* Price */}
//         <div className={styles.price}>${product.price}</div>

//         {/* Description */}
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colors */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours.map((color, idx) => (
//             <div
//               key={idx}
//               style={{ backgroundColor: color }}
//               className={styles.colorCircle}
//             ></div>
//           ))}
//         </div>

//         {/* Sizes */}
//         <div className={styles.sizeRow}>
//           <span className={styles.sizeLabel}>Size:</span>
//           <div className={styles.sizeOptions}>
//             {product.sizes.map((size, idx) => (
//               <div key={idx} className={styles.sizeBox}>
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quantity + Buttons */}
//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button>-</button>
//             <span>1</span>
//             <button>+</button>
//           </div>

//           <button className={styles.buyNow}>Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }




// 


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import { getImageSrc } from "@/app/utils/getImageSrc";
// import styles from "./productdetail.module.css";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   colours: string[];
//   sizes: string[];
//   stock: number;
//   reviews_count: number;
// }

// export default function ProductDetailPage({ params }: { params: { id: string } }) {
//   const productId = Number(params.id);
//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>(""); // main image state
//   const [selectedSize, setSelectedSize] = useState<string | null>(null); // size selection

//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select("id, title, price, description, images, colours, sizes, stock, reviews_count")
//         .eq("id", productId)
//         .single();

//       if (error) {
//         console.error("Supabase Error:", error.message);
//       } else {
//         setProduct(data);
//         if (data.images?.length > 0) {
//           setMainImage(getImageSrc(data.images[0])); // Default main image
//         }
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className={styles.container}>
//       {/* Left side thumbnails */}
//       <div className={styles.leftColumn}>
//         {product.images?.map((img, idx) => (
//           <div
//             key={idx}
//             className={`${styles.smallBox} ${mainImage === getImageSrc(img) ? styles.activeThumb : ""}`}
//             onClick={() => setMainImage(getImageSrc(img))} // click to change main image
//           >
//             <Image src={getImageSrc(img)} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={mainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column Details */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>
//         <div className={styles.price}>${product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colours */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color, idx) => (
//             <div key={idx} style={{ backgroundColor: color }} className={styles.colorCircle}></div>
//           ))}
//         </div>

//         {/* Sizes with click */}
//         <div className={styles.sizeRow}>
//           <span className={styles.sizeLabel}>Size:</span>
//           <div className={styles.sizeOptions}>
//             {product.sizes?.map((size, idx) => (
//               <div
//                 key={idx}
//                 className={`${styles.sizeBox} ${selectedSize === size ? styles.activeSize : ""}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quantity & Buy Button */}
//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button>-</button>
//             <span>1</span>
//             <button>+</button>
//           </div>
//           <button className={styles.buyNow}>Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }






// "use client";

// import { useEffect, useState, use } from "react"; // <-- use() yahan import kiya
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import { getImageSrc } from "@/app/utils/getImageSrc";
// import styles from "./productdetail.module.css";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   colours: string[];
//   sizes: string[];
//   stock: number;
//   reviews_count: number;
// }

// export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params); // <-- Promise unwrap with use()
//   const productId = Number(id);

//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select("id, title, price, description, images, colours, sizes, stock, reviews_count,products:products!fk_product (id, name, price, image)")

//         .eq("id", productId)
//         .single();

//       if (error) {
//         console.error("Supabase Error:", error.message);
//       } else {
//         setProduct(data);
//         if (data.images?.length > 0) {
//           setMainImage(getImageSrc(data.images[0]));
//         }
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftColumn}>
//         {product.images?.map((img, idx) => (
//           <div
//             key={idx}
//             className={`${styles.smallBox} ${mainImage === getImageSrc(img) ? styles.activeThumb : ""}`}
//             onClick={() => setMainImage(getImageSrc(img))}
//           >
//             <Image src={getImageSrc(img)} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       <div className={styles.mainImage}>
//         <Image src={mainImage} alt={product.title} width={400} height={400} />
//       </div>

//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>
//         <div className={styles.price}>${product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color, idx) => (
//             <div key={idx} style={{ backgroundColor: color }} className={styles.colorCircle}></div>
//           ))}
//         </div>

//         <div className={styles.sizeRow}>
//           <span className={styles.sizeLabel}>Size:</span>
//           <div className={styles.sizeOptions}>
//             {product.sizes?.map((size, idx) => (
//               <div
//                 key={idx}
//                 className={`${styles.sizeBox} ${selectedSize === size ? styles.activeSize : ""}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button>-</button>
//             <span>1</span>
//             <button>+</button>
//           </div>
//           <button className={styles.buyNow}>Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useState } from "react"; // <-- use() hata diya
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import { getImageSrc } from "@/app/utils/getImageSrc";
// import styles from "./productdetail.module.css";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   colours: string[];
//   sizes: string[];
//   stock: number;
//   reviews_count: number;
// }

// export default function ProductDetailPage({ params }: { params: { id: string } }) {
//   const { id } = params; // <-- Ab simple object hai, Promise nahi
//   const productId = Number(id);

//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select(
//           "id, title, price, description, images, colours, sizes, stock, reviews_count, products:products!fk_product (id, name, price, image)"
//         )
//         .eq("id", productId)
//         .single();

//       if (error) {
//         console.error("Supabase Error:", error.message);
//       } else {
//         setProduct(data);
//         if (data.images?.length > 0) {
//           setMainImage(getImageSrc(data.images[0]));
//         }
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftColumn}>
//         {product.images?.map((img, idx) => (
//           <div
//             key={idx}
//             className={`${styles.smallBox} ${mainImage === getImageSrc(img) ? styles.activeThumb : ""}`}
//             onClick={() => setMainImage(getImageSrc(img))}
//           >
//             <Image src={getImageSrc(img)} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       <div className={styles.mainImage}>
//         <Image src={mainImage} alt={product.title} width={400} height={400} />
//       </div>

//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
//         </div>
//         <div className={styles.price}>${product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color, idx) => (
//             <div key={idx} style={{ backgroundColor: color }} className={styles.colorCircle}></div>
//           ))}
//         </div>

//         <div className={styles.sizeRow}>
//           <span className={styles.sizeLabel}>Size:</span>
//           <div className={styles.sizeOptions}>
//             {product.sizes?.map((size, idx) => (
//               <div
//                 key={idx}
//                 className={`${styles.sizeBox} ${selectedSize === size ? styles.activeSize : ""}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button>-</button>
//             <span>1</span>
//             <button>+</button>
//           </div>
//           <button className={styles.buyNow}>Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/app/libr/supabaseClient";
import { getImageSrc } from "@/app/utils/getImageSrc";
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

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [productId, setProductId] = useState<number | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // ✅ Promise unwrap here safely
  useEffect(() => {
    params.then(({ id }) => setProductId(Number(id)));
  }, [params]);

  // ✅ Fetch product when productId is ready
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("productdetail")
        .select(
          "id, title, price, description, images, colours, sizes, stock, reviews_count, products:products!fk_product (id, name, price, image)"
        )
        .eq("id", productId)
        .single();

      if (error) {
        console.error("Supabase Error:", error.message);
      } else {
        setProduct(data);
        if (data.images?.length > 0) {
          setMainImage(getImageSrc(data.images[0]));
        }
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        {product.images?.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.smallBox} ${mainImage === getImageSrc(img) ? styles.activeThumb : ""}`}
            onClick={() => setMainImage(getImageSrc(img))}
          >
            <Image src={getImageSrc(img)} alt={product.title} width={80} height={80} />
          </div>
        ))}
      </div>

      <div className={styles.mainImage}>
        <Image src={mainImage} alt={product.title} width={400} height={400} />
      </div>

      <div className={styles.rightColumn}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.ratingRow}>
          <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
          <div className={styles.divider}></div>
          <span className={styles.stock}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
        </div>
        <div className={styles.price}>${product.price}</div>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.underline}></div>

        <div className={styles.colorRow}>
          <span>Colours:</span>
          {product.colours?.map((color, idx) => (
            <div key={idx} style={{ backgroundColor: color }} className={styles.colorCircle}></div>
          ))}
        </div>

        <div className={styles.sizeRow}>
          <span className={styles.sizeLabel}>Size:</span>
          <div className={styles.sizeOptions}>
            {product.sizes?.map((size, idx) => (
              <div
                key={idx}
                className={`${styles.sizeBox} ${selectedSize === size ? styles.activeSize : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

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
