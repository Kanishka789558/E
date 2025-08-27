"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */
// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const [results, setResults] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (query) fetchData(query);
//   }, [query]);

//   const fetchData = async (search: string) => {
//     setLoading(true);
//     const { data, error } = await supabase
//       .from("productdetail")
//       .select("*")
//       .or(`title.ilike.%${search}%,description.ilike.%${search}%`);
//     if (!error && data) setResults(data);
//     setLoading(false);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Search Results for `{query}`</h1>

//       {loading ? (
//         <p className="text-center mt-10">Loading...</p>
//       ) : results.length === 0 ? (
//         <p className="text-center mt-10">No results found</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {results.map((item) => (
//             <div
//               key={item.id}
//               className="border rounded-lg shadow-md p-4 hover:shadow-lg transition bg-white"
//             >
//               {item.images?.[0] && (
//                 <img
//                   src={item.images[0]}
//                   alt={item.title}
//                   className="w-full h-40 object-cover rounded"
//                 />
//               )}
//               <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
//               <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
//               <p className="text-red-500 font-bold mt-2">₹{item.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



// app/search/page.tsx


// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import Link from "next/link";
// import styles from "./Search.module.css";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   images: string[];
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!query) return;
//       const { data, error } = await supabase
//         .from("products")
//         .select("id, title, description, images")
//         .ilike("title", `%${query}%`);

//       if (!error && data) {
//         setProducts(data);
//       }
//     };
//     fetchProducts();
//   }, [query]);

//   return (
//     <div className={styles.container}>
//       <h2>Search Results for `{query}`</h2>

//       {products.length === 0 ? (
//         <p>No results found</p>
//       ) : (
//         <div className={styles.grid}>
//           {products.map((product) => (
//             <Link href={`/productdetail/${product.id}`} key={product.id} className={styles.card}>
//               <img src={product.images?.[0]} alt={product.title} />
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import Link from "next/link";
// import styles from "./Search.module.css";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   images: string[];
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!query.trim()) return;
//       setLoading(true);

//       const { data, error } = await supabase
//         .from("products")
//         .select("id, title, description, images")
//         .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

//       if (error) {
//         console.error("Supabase error:", error.message);
//         setError("Failed to fetch products");
//       } else if (data) {
//         setProducts(data);
//       }

//       setLoading(false);
//     };

//     fetchProducts();
//   }, [query]);

//   return (
//     <div className={styles.container}>
//       <h2>Search Results for `{query}`</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : products.length === 0 ? (
//         <p>No results found</p>
//       ) : (
//         <div className={styles.grid}>
//           {products.map((product) => (
//             <Link
//               href={`/productdetail/${product.id}`}
//               key={product.id}
//               className={styles.card}
//             >
//               <img
//                 src={product.images?.[0] || "/placeholder.jpg"}
//                 alt={product.title}
//               />
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import Link from "next/link";
// import styles from "./Search.module.css";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!query.trim()) {
//         console.log("⚠️ Empty search query");
//         return;
//       }

//       setLoading(true);
//       console.log("🔍 Fetching products for:", query);

//       const { data, error } = await supabase
//         .from("products") // <-- Check table name
//         .select("id, name, description, image")
//         .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

//       if (error) {
//         console.error("❌ Supabase error:", error.message);
//         setError("Failed to fetch products");
//       } else {
//         console.log("✅ Data fetched:", data);
//         setProducts(data || []);
//       }

//       setLoading(false);
//     };

//     fetchProducts();
//   }, [query]);
//     useEffect(() => {
//     const fetchProducts = async () => {
//     if (!query.trim()) {
//       console.log("⚠️ Empty search query");
//       return;
//     }

//     setLoading(true);
//     console.log("🔍 Fetching products for:", query);
//      const searchQuery = query.toLowerCase(); 

//     const { data, error } = await supabase
//       .from("products") // <-- Table name sahi hai
//       .select("id, name, description, image")
//       .or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`); // <-- title → name

//     if (error) {
//       console.error("❌ Supabase error:", error.message);
//       setError("Failed to fetch products");
//     } else {
//       console.log("✅ Data fetched:", data);
//       setProducts((data || []) as Product[]);
//     }

//      setLoading(false);
//     };

//     fetchProducts();
//     }, [query]);


//   return (
//     <div className={styles.container}>
//       <h2>Search Results for `{query}`</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : products.length === 0 ? (
//         <p>No results found</p>
//       ) : (
//         <div className={styles.grid}>
//           {products.map((product) => (
//             <Link
//               href={`/productdetail/${product.id}`}
//               key={product.id}
//               className={styles.card}
//             >
//               <img
//                 src={product.image || "/placeholder.jpg"}
//                 alt={product.name}
//               />
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import Link from "next/link";
// import styles from "./Search.module.css";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!query.trim()) {
//         setProducts([]);
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       const searchQuery = query.toLowerCase(); // case-insensitive

//       const { data, error } = await supabase
//         .from("products")
//         .select("id, name, description, image")
//         .or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);

//       if (error) {
//         setError("Failed to fetch products");
//       } else {
//         setProducts((data || []) as Product[]);
//       }

//       setLoading(false);
//     };

//     fetchProducts();
//   }, [query]);

//   return (
//     <div className={styles.container}>
//       <h2>Search Results for `{query}`</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : products.length === 0 ? (
//         <p>No results found</p>
//       ) : (
//         <div className={styles.grid}>
//           {products.map((product) => (
//             <Link href={`/productdetail/${product.id}`} key={product.id} className={styles.card}>
//               <img src={product.image || "/placeholder.jpg"} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/app/libr/supabaseClient";
import Link from "next/link";
import styles from "./Search.module.css";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      if (!query.trim()) {
        setProducts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      const searchQuery = query.toLowerCase(); // case-insensitive

      const { data, error } = await supabase
        .from("products")
        .select("id, name, description, image")
        .or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);

      if (error) {
        setError("Failed to fetch products");
      } else {
        setProducts((data || []) as Product[]);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [query]);

  return (
    <div className={styles.container}>
      <h2>Search Results for `{query}`</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : products.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <Link href={`/productdetail/${product.id}`} key={product.id} className={styles.card}>
              <img src={product.image || "/placeholder.jpg"} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading search results...</p>}>
      <SearchContent />
    </Suspense>
  );
}