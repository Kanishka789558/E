"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-async-client-component */

 


// import { useEffect, useState } from "react";
// import { Product } from "../lib/data";
// import { supabase } from "../libr/supabaseClient";
// import { getImageSrc } from "../utils/getImageSrc";

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






// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import { getImageSrc } from "@/app/utils/getImageSrc";

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

// interface ProductDetailPageProps {
//   params: { id: string }; // Updated to remove Promise
// }

// export default function ProductDetailPage({ params }: ProductDetailPageProps) {
//   const [productId, setProductId] = useState<number | null>(null);
//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   useEffect(() => {
//     // Directly use params without async
//     setProductId(Number(params.id));
//   }, [params]);

//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select(
//           "id, title, price, description, images, colours, sizes, stock, reviews_count"
//         )
//         .eq("id", productId)
//         .single();

//       if (!error && data) {
//         setProduct(data);
//         if (data.images?.length > 0) {
//           setMainImage(getImageSrc(data.images[0]));
//         }
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Left Thumbnails */}
//       <div className="flex md:flex-col gap-3">
//         {product.images?.map((img, idx) => (
//           <div
//             key={idx}
//             className={`border rounded-xl p-1 cursor-pointer transition ${
//               mainImage === getImageSrc(img)
//                 ? "border-blue-500"
//                 : "border-gray-200"
//             }`}
//             onClick={() => setMainImage(getImageSrc(img))}
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
//         <Image
//           src={mainImage}
//           alt={product.title}
//           width={400}
//           height={400}
//           className="rounded-lg"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col gap-4">
//         <h2 className="text-2xl font-semibold">{product.title}</h2>

//         <div className="flex items-center gap-3 text-sm">
//           <span className="text-gray-500">({product.reviews_count} Reviews)</span>
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

//         {/* Colors */}
//         <div className="flex items-center gap-2">
//           <span className="font-medium">Colours:</span>
//           <div className="flex gap-2">
//             {product.colours?.map((color, idx) => (
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
//             {product.sizes?.map((size, idx) => (
//               <div
//                 key={idx}
//                 className={`px-3 py-1 border rounded-lg cursor-pointer ${
//                   selectedSize === size
//                     ? "bg-blue-500 text-white"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quantity & Buy Button */}
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





// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { supabase } from "@/app/libr/supabaseClient";
// import { getImageSrc } from "@/app/utils/getImageSrc";

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

// type ProductDetailPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default function ProductDetailPage({ params }: ProductDetailPageProps) {
//   const [productId, setProductId] = useState<number | null>(null);
//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   // set productId from params
//   useEffect(() => {
//     if (params?.id) {
//       setProductId(Number(params.id));
//     }
//   }, [params]);

//   // fetch product
//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("productdetail")
//         .select(
//           "id, title, price, description, images, colours, sizes, stock, reviews_count"
//         )
//         .eq("id", productId)
//         .single();

//       if (!error && data) {
//         setProduct(data);
//         if (data.images?.length > 0) {
//           setMainImage(getImageSrc(data.images[0]));
//         }
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Thumbnails */}
//       <div className="flex md:flex-col gap-3">
//         {product.images?.map((img, idx) => (
//           <div
//             key={idx}
//             className={`border rounded-xl p-1 cursor-pointer transition ${
//               mainImage === getImageSrc(img)
//                 ? "border-blue-500"
//                 : "border-gray-200"
//             }`}
//             onClick={() => setMainImage(getImageSrc(img))}
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
//         <Image
//           src={mainImage}
//           alt={product.title}
//           width={400}
//           height={400}
//           className="rounded-lg"
//         />
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

//         {/* Colors */}
//         <div className="flex items-center gap-2">
//           <span className="font-medium">Colours:</span>
//           <div className="flex gap-2">
//             {product.colours?.map((color, idx) => (
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
//             {product.sizes?.map((size, idx) => (
//               <div
//                 key={idx}
//                 className={`px-3 py-1 border rounded-lg cursor-pointer ${
//                   selectedSize === size
//                     ? "bg-blue-500 text-white"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Buy */}
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





import Image from "next/image";
import { supabase } from "@/app/libr/supabaseClient";
import { getImageSrc } from "@/app/utils/getImageSrc";
import { Key } from "react";


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

type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

// export default async function ProductDetailPage({ params }: ProductDetailProps) {
//   const productId = Number(params.id);
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = Number(params.id);  

  const { data: product, error } = await supabase
    .from("productdetail")
    .select(
      "id, title, price, description, images, colours, sizes, stock, reviews_count"
    )
    .eq("id", productId)
    .single();

  if (error || !product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  const mainImage = product.images?.length > 0 ? getImageSrc(product.images[0]) : "";

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Thumbnails */}
      <div className="flex md:flex-col gap-3">
        {product.images?.map((img: string | undefined, idx: Key | null | undefined) => (
          <div
            key={idx}
            className="border rounded-xl p-1 cursor-pointer transition"
          >
            <Image
              src={getImageSrc(img)}
              alt={product.title}
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex justify-center items-center border rounded-xl p-4">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg"
          />
        ) : (
          <span>No Image</span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{product.title}</h2>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">
            ({product.reviews_count} Reviews)
          </span>
          <div className="w-px h-4 bg-gray-300"></div>
          <span
            className={`${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="text-2xl font-bold">${product.price}</div>
        <p className="text-gray-600">{product.description}</p>

        {/* Colours */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Colours:</span>
          <div className="flex gap-2">
            {product.colours?.map((color:string, idx:number) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <span className="font-medium">Size:</span>
          <div className="flex gap-2 mt-2">
            {product.sizes?.map((size:string, idx:number) => (
              <div
                key={idx}
                className="px-3 py-1 border rounded-lg"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Buy Section */}
        <div className="flex gap-4 items-center mt-4">
          <div className="flex items-center border rounded-lg">
            <button className="px-3 py-1">-</button>
            <span className="px-3">1</span>
            <button className="px-3 py-1">+</button>
          </div>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
