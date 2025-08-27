
/* eslint-disable @next/next/no-async-client-component */

/* eslint-disable @typescript-eslint/no-unused-vars */


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

// export default function ProductDetailPage({ params }: { params: { productId: string } }) {
//   const productId = parseInt(params.productId); // get dynamic productId from URL
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail") // your table
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







// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./productdetail.module.css";
// import { use } from "react";

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


// export default function ProductDetailPage() {
// //   const productId = Number(params.id); // safer conversion
// //   const [product, setProduct] = useState<Product | null>(null);
   
//    // ✅ unwrap with React.use()
   
//    const id = params?.id; //
//   const [product, setProduct] = useState<Product | null>(null);
  
  




//   useEffect(() => {
//     if (!id) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select("id, title, price, description, images, colours, sizes, stock, reviews_count,products ( id, name, price, image )")
//         .eq("id", id)
//         .single();

//       if (error) {
//         console.error("Supabase Error:", error.message);
//       } else {
//         setProduct(data);
//       }
//     };

//     fetchProduct();
//     }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftColumn}>
//         {product.images?.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={`/${img}`} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       <div className={styles.mainImage}>
//         <Image src={`/${product.images[0]}`} alt={product.title} width={400} height={400} />
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
//               <div key={idx} className={styles.sizeBox}>{size}</div>
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

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./productdetail.module.css";
// import React from "react"; 

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
//   products?: {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//   }[];
// }

// export default function ProductDetailPage({ params }: { params: { id: string } }) {
//   const params = React.use(props.params);  
//   const productId = Number(params.id);

//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string>("");
//   const [quantity, setQuantity] = useState<number>(1);

//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select(`
//           id, 
//           title, 
//           price, 
//           description, 
//           images, 
//           colours, 
//           sizes, 
//           stock, 
//           reviews_count, 
//           products ( id, name, price, image )
//         `)
//         .eq("id", productId)
//         .single();

//       if (error) {
//         console.error("Supabase Error:", error.message);
//       } else {
//         setProduct(data);
//         if (data?.products?.[0]?.image) {
//           setMainImage(data.products[0].image);
//         } else if (data?.images?.[0]) {
//           setMainImage(data.images[0]);
//         }
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   const allImages = [
//     ...(product.products?.map((p) => p.image) || []),
//     ...(product.images || []),
//   ];

//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleBuyNow = () => {
//     if (!selectedSize) {
//       alert("Please select a size before buying!");
//       return;
//     }
//     alert(`Buying ${quantity} item(s) of size ${selectedSize}`);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div
//             key={idx}
//             className={`${styles.smallBox} ${mainImage === img ? styles.activeThumb : ""}`}
//             onClick={() => setMainImage(img)}
//           >
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={mainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
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

//         {/* Sizes */}
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

//         {/* Actions */}
//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button onClick={decreaseQty}>-</button>
//             <span>{quantity}</span>
//             <button onClick={increaseQty}>+</button>
//           </div>
//           <button className={styles.buyNow} onClick={handleBuyNow}>
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import React from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
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
//   products?: {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//   }[];
// }

// // ✅ Use props, then unwrap params with React.use()
// export default function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
//   const params = React.use(props.params);
//   const productId = Number(params.id);

//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string>("");
//   const [quantity, setQuantity] = useState<number>(1);

//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select(`
//           id, 
//           title, 
//           price, 
//           description, 
//           images, 
//           colours, 
//           sizes, 
//           stock, 
//           reviews_count, 
//           products ( id, name, price, image )
//         `)
//         .eq("id", productId)
//         .single();

//       if (error) {
//         console.error("Supabase Error:", error.message);
//       } else {
//         setProduct(data);
//         if (data?.products?.[0]?.image) {
//           setMainImage(data.products[0].image);
//         } else if (data?.images?.[0]) {
//           setMainImage(data.images[0]);
//         }
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div>Loading...</div>;

//   const allImages = [
//     ...(product.products?.map((p) => p.image) || []),
//     ...(product.images || []),
//   ];

//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleBuyNow = () => {
//     if (!selectedSize) {
//       alert("Please select a size before buying!");
//       return;
//     }
//     alert(`Buying ${quantity} item(s) of size ${selectedSize}`);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div
//             key={idx}
//             className={`${styles.smallBox} ${mainImage === img ? styles.activeThumb : ""}`}
//             onClick={() => setMainImage(img)}
//           >
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={mainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
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

//         {/* Sizes */}
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

//         {/* Actions */}
//         <div className={styles.actionRow}>
//           <div className={styles.qtyBox}>
//             <button onClick={decreaseQty}>-</button>
//             <span>{quantity}</span>
//             <button onClick={increaseQty}>+</button>
//           </div>
//           <button className={styles.buyNow} onClick={handleBuyNow}>
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
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
//   products?: { id: number; name: string; price: number; image: string }[];
// }

// export default async function ProductDetailPage({ params }: { params: { id: string } }) {
//   const productId = Number(params.id);

  
//     const { data: product, error } = await supabase
    
//     .from<Product>("productdetail") 
//     .select(`
//       id, 
//       title, 
//       price, 
//       description, 
//       images, 
//       colours, 
//       sizes, 
//       stock, 
//       reviews_count, 
//       products ( id, name, price, image )
//     `)
//     .eq("id", productId)
//     .single();
//   if (error || !product) {
//     return <div>Error loading product</div>;
//   }

//   // choose initial main image
//   const initialMainImage =
//     product.products?.[0]?.image || product.images?.[0] || "";

//   const allImages = [
//     ...(product.products?.map((p) => p.image) || []),
//     ...(product.images || []),
//   ];

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div
//             key={idx}
//             className={styles.smallBox}
//           >
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={initialMainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
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
//           {product.colours?.map((color:String , idx:number) => (
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
//             {product.sizes?.map((size:String , idx:number) => (
//               <div key={idx} className={styles.sizeBox}>
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Actions (static in server component – no JS interactivity) */}
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



// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
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
//   products?: { id: number; name: string; price: number; image: string }[];
// }

// interface ProductDetailPageProps {
//   params: { id: string };
// }

// export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
//   const productId = Number(params.id); // dynamic id from URL

//   const { data: product, error } = await supabase
//     .from("productdetail")
//     .select(`
//       id,
//       title,
//       price,
//       description,
//       images,
//       colours,
//       sizes,
//       stock,
//       reviews_count,
//       products ( id, name, price, image )
//     `)
//     .eq("id", productId)
//     .single();

//   if (error || !product) {
//     return <div>Error loading product</div>;
//   }

//   // choose initial main image
//   const initialMainImage =
//     product.products?.[0]?.image || product.images?.[0] || "";

//   const allImages = [
//     ...(product.products?.map((p) => p.image) || []),
//     ...(product.images || []),
//   ];

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={initialMainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>
//         <div className={styles.price}>₹{product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colours */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color: string, idx: number) => (
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
//             {product.sizes?.map((size: string, idx: number) => (
//               <div key={idx} className={styles.sizeBox}>
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Actions */}
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





// No 'use client' here
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./productdetail.module.css";

// export default async function ProductDetailPage({ params }: { params: { id: string } }) {
//   const productId = Number(params.id);
//   const { data: product, error } = await supabase
//     .from("productdetail")
//     .select(`
//       id,
//       title,
//       price,
//       description,
//       images,
//       colours,
//       sizes,
//       stock,
//       reviews_count,
//       products ( id, name, price, image )
//     `)
//     .eq("id", productId)
//     .single();

//   if (!product || error) return <div>Error loading product</div>;

//   // rest of your UI code

//   if (error || !product) {
//     return <div>Error loading product</div>;
//   }

//   // choose initial main image
//   const initialMainImage =
//     product.products?.[0]?.image || product.images?.[0] || "";

//   const allImages = [
//     ...(product.products?.map((p) => p.image) || []),
//     ...(product.images || []),
//   ];

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={initialMainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>
//         <div className={styles.price}>₹{product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colours */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color: string, idx: number) => (
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
//             {product.sizes?.map((size: string, idx: number) => (
//               <div key={idx} className={styles.sizeBox}>
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Actions */}
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






// import Image from "next/image"; 
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./productdetail.module.css";

// // helper function
// export const getImageSrc = (image?: string): string => {
//   if (!image) return "/placeholder.png"; // fallback image
//   return `/${image}`;
// };

// export default async function ProductDetailPage({ params }: { params: { id: string } }) {
//   const productId = Number(params.id);
//   const { data: product, error } = await supabase
//     .from("productdetail")
//     .select(`
//       id,
//       title,
//       price,
//       description,
//       images,
//       colours,
//       sizes,
//       stock,
//       reviews_count,
//       products ( id, name, price, image )
//     `)
//     .eq("id", productId)
//     .single();

//   if (!product || error) return <div>Error loading product</div>;

//   // choose initial main image
//   const initialMainImage = getImageSrc(
//     product.products?.[0]?.image || product.images?.[0]
//   );

//   const allImages = [
//     ...(product.products?.map((p) => getImageSrc(p.image)) || []),
//     ...(product.images?.map((img: string) => getImageSrc(img)) || []),
//   ];

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={initialMainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>
//         <div className={styles.price}>₹{product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colours */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color: string, idx: number) => (
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
//             {product.sizes?.map((size: string, idx: number) => (
//               <div key={idx} className={styles.sizeBox}>
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Actions */}
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
// }{ params }: { params: { id: string } }



// import { PageProps } from "next";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./productdetail.module.css";
// import { getImageSrc } from "@/app/utils/getImageSrc";

// export default async function ProductDetailPage({ params }: PageProps<{ id: string }>) {
//   const productId = Number(params.id);
//   const { data: product, error } = await supabase
//     .from("productdetail")
//     .select(`      
//       id,
//       title,
//       price,
//       description,
//       images,
//       colours,
//       sizes,
//       stock,
//       reviews_count,
//       products ( id, name, price, image )
//     `)
//     .eq("id", productId)
//     .single();

//   if (!product || error) return <div>Error loading product</div>;

//   const initialMainImage = getImageSrc(
//     product.products?.[0]?.image || product.images?.[0]
//   );

//   const allImages = [
//     ...(product.products?.map((p) => getImageSrc(p.image)) || []),
//     ...(product.images?.map((img: string) => getImageSrc(img)) || []),
//   ];

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={initialMainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>
//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>
//         <div className={styles.price}>₹{product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colours */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color: string, idx: number) => (
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
//             {product.sizes?.map((size: string, idx: number) => (
//               <div key={idx} className={styles.sizeBox}>
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




//  



// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./productdetail.module.css";
// import { getImageSrc } from "@/app/utils/getImageSrc";

// type PageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function ProductDetailPage({ params }: PageProps) {
//   const productId = Number(params.id);

//   const { data: product, error } = await supabase
//     .from("productdetail")
//     .select(`
//       id,
//       title,
//       price,
//       description,
//       images,
//       colours,
//       sizes,
//       stock,
//       reviews_count,
//       products ( id, name, price, image )
//     `)
//     .eq("id", productId)
//     .single();

//   if (!product || error) return <div>Error loading product</div>;

//   // Main image and all imagesnpm
//   const initialMainImage = getImageSrc(
//     product.products?.[0]?.image || product.images?.[0]
//   );

//   const allImages = [
//     ...(product.products?.map((p) => getImageSrc(p.image)) || []),
//     ...(product.images?.map((img: string) => getImageSrc(img)) || []),
//   ];

//   return (
//     <div className={styles.container}>
//       {/* Left Thumbnails */}
//       <div className={styles.leftColumn}>
//         {allImages.map((img, idx) => (
//           <div key={idx} className={styles.smallBox}>
//             <Image src={img} alt={product.title} width={80} height={80} />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className={styles.mainImage}>
//         <Image src={initialMainImage} alt={product.title} width={400} height={400} />
//       </div>

//       {/* Right Column */}
//       <div className={styles.rightColumn}>
//         <h2 className={styles.productTitle}>{product.title}</h2>

//         <div className={styles.ratingRow}>
//           <span className={styles.reviews}>({product.reviews_count} Reviews)</span>
//           <div className={styles.divider}></div>
//           <span className={styles.stock}>
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>

//         <div className={styles.price}>₹{product.price}</div>
//         <p className={styles.description}>{product.description}</p>

//         <div className={styles.underline}></div>

//         {/* Colours */}
//         <div className={styles.colorRow}>
//           <span>Colours:</span>
//           {product.colours?.map((color: string, idx: number) => (
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
//             {product.sizes?.map((size: string, idx: number) => (
//               <div key={idx} className={styles.sizeBox}>
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Actions */}
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

// type ProductDetailPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function ProductDetailPage({ params }: ProductDetailProps) {
//   const productId = Number(params.id);
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ await karna zaroori hai
  const productId = Number(id);


//   const { data: product, error } = await supabase
//     .from("productdetail")
//     .select(
//       "id, title, price, description, images, colours, sizes, stock, reviews_count"
//     )
//     .eq("id", productId)
//     .single();

//   if (error || !product) {
//     return <div className="text-center mt-10">Product not found.</div>;
//   }

//   const mainImage = product.images?.length > 0 ? getImageSrc(product.images[0]) : "";

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Left Thumbnails */}
//       <div className="flex md:flex-col gap-3">
//         {product.images?.map((img: string | undefined, idx: Key | null | undefined) => (
//           <div
//             key={idx}
//             className="border rounded-xl p-1 cursor-pointer transition"
//           >
//             <Image
//               src={getImageSrc(img)}
//               alt={product.title}
//               width={80}
//               height={80}
//               className="rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className="flex justify-center items-center border rounded-xl p-4">
//         {mainImage ? (
//           <Image
//             src={mainImage}
//             alt={product.title}
//             width={400}
//             height={400}
//             className="rounded-lg"
//           />
//         ) : (
//           <span>No Image</span>
//         )}
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col gap-4">
//         <h2 className="text-2xl font-semibold">{product.title}</h2>

//         <div className="flex items-center gap-3 text-sm">
//           <span className="text-gray-500">
//             ({product.reviews_count} Reviews)
//           </span>
//           <div className="w-px h-4 bg-gray-300"></div>
//           <span
//             className={`${
//               product.stock > 0 ? "text-green-600" : "text-red-500"
//             }`}
//           >
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </span>
//         </div>

//         <div className="text-2xl font-bold">${product.price}</div>
//         <p className="text-gray-600">{product.description}</p>

//         {/* Colours */}
//         <div className="flex items-center gap-2">
//           <span className="font-medium">Colours:</span>
//           <div className="flex gap-2">
//             {product.colours?.map((color:string, idx:number) => (
//               <div
//                 key={idx}
//                 className="w-6 h-6 rounded-full border border-gray-300"
//                 style={{ backgroundColor: color }}
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* Sizes */}
//         <div>
//           <span className="font-medium">Size:</span>
//           <div className="flex gap-2 mt-2">
//             {product.sizes?.map((size:string, idx:number) => (
//               <div
//                 key={idx}
//                 className="px-3 py-1 border rounded-lg"
//               >
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Buy Section */}
//         <div className="flex gap-4 items-center mt-4">
//           <div className="flex items-center border rounded-lg">
//             <button className="px-3 py-1">-</button>
//             <span className="px-3">1</span>
//             <button className="px-3 py-1">+</button>
//           </div>
//           <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
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