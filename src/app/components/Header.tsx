"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @next/next/no-img-element */


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { FaUserCircle } from "react-icons/fa";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./Header.module.css";
// import AccountDetail from "./AccountDetail";
// import Wishlist from "./Wishlist";
// import { ChevronDown, HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
// import { useRouter } from "next/navigation";

// interface SupabaseUser {
//   id: string;
//   email?: string;
//   [key: string]: any;
// }

// export default function Header() {
//   const [user, setUser] = useState<SupabaseUser | null>(null);
//   const [langOpen, setLangOpen] = useState(false);
//   const [showAccount, setShowAccount] = useState(false);
//   const [showWishlist, setShowWishlist] = useState(false);
//   const [query, setQuery] = useState(""); // search query
  
  

//   // Fetch user on mount and listen for auth changes
//   useEffect(() => {
//     const getUser = async () => {
//       const {
//         data: { user },
//         error,
//       } = await supabase.auth.getUser();
//       if (error) {
//         console.warn("No active session:", error.message);
//         setUser(null);
//       } else {
//         setUser(user as SupabaseUser | null);
//       }
//     };

//     getUser();

//     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//       if (session?.user) {
//         setUser(session.user as SupabaseUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     setShowAccount(false);
//     setUser(null);
//   };

//   Handle search
//   const handleSearch = async () => {
//     if (!query.trim()) return;
//     const { data, error } = await supabase
//       .from("productdetail")
//       .select("*")
//       .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

//     if (error) {
//       console.error("Search error:", error.message);
//       return;
//     }
    





  

//   return (
//     <>
//       <header className={styles.header}>
//         {/* Top promo bar */}
//         <div className={styles.promoBar}>
//           <div className={styles.container}>
//             <p className={styles.promoText}>
//               Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
//               <Link href="#" className={styles.shopNow}>
//                 ShopNow
//               </Link>
//             </p>

//             {/* Language dropdown */}
//             <div
//               className={styles.lang}
//               onMouseEnter={() => setLangOpen(true)}
//               onMouseLeave={() => setLangOpen(false)}
//             >
//               <button
//                 className={styles.langBtn}
//                 aria-haspopup="listbox"
//                 aria-expanded={langOpen}
//                 onClick={() => setLangOpen((v) => !v)}
//               >
//                 English
//                 <ChevronDown />
//               </button>
//               {langOpen && (
//                 <ul className={styles.langList} role="listbox">
//                   <li role="option">English</li>
//                   <li role="option">हिन्दी</li>
//                   <li role="option">Français</li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main nav */}
//         <div className={styles.mainNavWrapper}>
//           <nav className={`${styles.container} ${styles.mainNav}`}>
//             <Link href="/" className={styles.brand}>
//               Exclusive
//             </Link>

//             <ul className={styles.links}>
//               <li>
//                 <Link href="/" className={`${styles.link} ${styles.active}`}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className={styles.link}>
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className={styles.link}>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 {!user && (
//                   <Link href="/signup" className={styles.link}>
//                     SignUp
//                   </Link>
//                 )}
//               </li>
//             </ul>

//             <div className={styles.actions}>
//               {/* Search */}
//               <div className={styles.search}>
//                 <input
//                   aria-label="Search"
//                   placeholder="What are you looking for?"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                 />
                
                  
//                 <button aria-label="Search" onClick={handleSearch}> <SearchIcon /> </button>
               
//               </div>

//               {/* Wishlist */}
//               <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
//                 <HeartIcon />
//               </Link>
//               <Link href="/card" className={styles.iconBtn} aria-label="Cart">
//                 <ShoppingCartIcon />
//               </Link>

//               {/* Account */}
//               <div
//                 className={styles.accountWrapper}
//                 onClick={() => setShowAccount((prev) => !prev)}
//               >
//                 <FaUserCircle size={20} />
//               </div>

//               {showAccount && (
//                 <div className={styles.accountDropdown}>
//                   {user ? (
//                     <>
//                       <AccountDetail onClose={() => setShowAccount(false)} />
//                       <button className={styles.logoutBtn} onClick={handleLogout}>
//                         Logout
//                       </button>
//                     </>
//                   ) : (
//                     <Link href="/login" onClick={() => setShowAccount(false)}>
//                       Login / Sign Up
//                     </Link>
//                   )}
//                 </div>
//               )}
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* Show search results */}
//       {results.length > 0 && (
//         <div className={styles.searchResults}>
//           {results.map((item) => (
//             <div key={item.id} className={styles.searchResultItem}>
//               <h4>{item.title}</h4>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Divider */}
//       {/* <hr
//         style={{
//           width: "100%",
//           maxWidth: "1440px",
//           border: "1px solid #ccc",
//           margin: "40px auto 0",
//         }} */}
      
//     </>
//   );
// }





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



// Header.tsx

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./Header.module.css";
import AccountDetail from "./AccountDetail";
import { ChevronDown, HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface SupabaseUser {
  id: string;
  email?: string;
  [key: string]: any;
}

export default function Header() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      setUser(error ? null : user as SupabaseUser);
    };

    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user as SupabaseUser || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowAccount(false);
    setUser(null);
  };

  // 🔹 Search redirect
  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.promoBar}>
          <div className={styles.container}>
            <p className={styles.promoText}>
              Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
              <Link href="#" className={styles.shopNow}>ShopNow</Link>
            </p>

            <div
              className={styles.lang}
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                className={styles.langBtn}
                onClick={() => setLangOpen(v => !v)}
              >
                English
                <ChevronDown />
              </button>
              {langOpen && (
                <ul className={styles.langList}>
                  <li>English</li>
                  <li>हिन्दी</li>
                  <li>Français</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className={styles.mainNavWrapper}>
          <nav className={`${styles.container} ${styles.mainNav}`}>
            <Link href="/" className={styles.brand}>Exclusive</Link>
            <ul className={styles.links}>
              <li><Link href="/" className={`${styles.link} ${styles.active}`}>Home</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
              <li><Link href="/about" className={styles.link}>About</Link></li>
              <li>{!user && <Link href="/signup" className={styles.link}>SignUp</Link>}</li>
            </ul>

            <div className={styles.actions}>
              {/* Search Box */}
              <div className={styles.search}>
                <input
                  placeholder="What are you looking for?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}><SearchIcon /></button>
              </div>

              <Link href="/wishlist" className={styles.iconBtn}><HeartIcon /></Link>
              <Link href="/card" className={styles.iconBtn}><ShoppingCartIcon /></Link>

              {/* Account */}
              <div onClick={() => setShowAccount(p => !p)} className={styles.accountWrapper}>
                <FaUserCircle size={20} />
              </div>
              {showAccount && (
                <div className={styles.accountDropdown}>
                  {user ? (
                    <>
                      <AccountDetail onClose={() => setShowAccount(false)} />
                      <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                    </>
                  ) : (
                    <Link href="/login" onClick={() => setShowAccount(false)}>Login / Sign Up</Link>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
