/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @next/next/no-img-element */

// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);

//   // Fetch orders from Supabase
//   useEffect(() => {
//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orders")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) {
//         console.error(error);
//       } else {
//         setOrders(data);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Add to cart
//   const addToCart = async (productId: number) => {
//     const { data, error } = await supabase.from("cart").insert([
//       {
//         product_id: productId,
//         quantity: 1,
//         user_id: "123", // Replace with logged in user id
//       },
//     ]);

//     if (error) {
//       console.error(error);
//     } else {
//       alert("Item added to cart!");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul>
//           {orders.map((order) => (
//             <li key={order.id} style={{ margin: "10px 0" }}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button onClick={() => addToCart(order.product_id)}>
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orders")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) console.error(error);
//       else setOrders(data);
//     };
//     fetchOrders();
//   }, []);

//   const addToCart = async (productId: number) => {
//     const { error } = await supabase.from("cart").insert([
//       { product_id: productId, quantity: 1, user_id: "123" }, // replace with real user_id
//     ]);

//     if (error) console.error(error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);

//   // Get current logged-in user
//   useEffect(() => {
//     const fetchUser = async () => {
//       const {
//         data: { user },
//         error,
//       } = await supabase.auth.getUser();

//       if (error) console.error(error);
//       else if (user) setUserId(user.id);
//     };
//     fetchUser();
//   }, []);

//   // Fetch orders for the logged-in user
//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orders")
//         .select("*")
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false });

//       if (error) console.error(error);
//       else setOrders(data);
//     };

//     fetchOrders();
//   }, [userId]);

//   // Add item to cart
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");

//     const { error } = await supabase.from("cart").insert([
//       { product_id: productId, quantity: 1, user_id: userId },
//     ]);

//     if (error) console.error(error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);

//   // Get current logged-in user
//   useEffect(() => {
//     const fetchUser = async () => {
//       const {
//         data: { user },
//         error,
//       } = await supabase.auth.getUser();

//       if (error) console.error(error);
//       else if (user) setUserId(user.id);
//     };
//     fetchUser();
//   }, []);

//   // Fetch orders for the logged-in user from "orderss" table
//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false });

//       if (error) console.error(error);
//       else setOrders(data);
//     };

//     fetchOrders();
//   }, [userId]);

//   // Add item to cart in "carts" table
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");

//     const { error } = await supabase.from("carts").insert([
//       { product_id: productId, quantity: 1, user_id: userId },
//     ]);

//     if (error) console.error(error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);

//   // Get current logged-in user session
//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data: sessionData, error } = await supabase.auth.getSession();

//       if (error) {
//         console.error(error);
//         return;
//       }

//       if (sessionData.session?.user) {
//         setUserId(sessionData.session.user.id);
//       } else {
//         console.log("No user logged in");
//       }
//     };

//     fetchUser();

//     // Optional: listen to auth changes
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (session?.user) setUserId(session.user.id);
//         else setUserId(null);
//       }
//     );

//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, []);

//   // Fetch orders for the logged-in user from "orderss" table
//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false });

//       if (error) console.error(error);
//       else setOrders(data);
//     };

//     fetchOrders();
//   }, [userId]);

//   // Add item to cart in "carts" table
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");

//     const { error } = await supabase.from("carts").insert([
//       { product_id: productId, quantity: 1, user_id: userId },
//     ]);

//     if (error) console.error(error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);

//   // Get current logged-in user session
//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data: sessionData, error } = await supabase.auth.getSession();

//       if (error) {
//         console.error(error);
//         return;
//       }

//       if (sessionData.session?.user) {
//         setUserId(sessionData.session.user.id);
//       } else {
//         console.log("No user logged in");
//       }
//     };

//     fetchUser();

//     // Optional: listen to auth changes
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (session?.user) setUserId(session.user.id);
//         else setUserId(null);
//       }
//     );

//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, []);

//   // Fetch orders for the logged-in user from "orderss" table
//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false });

//       if (error) console.error(error);
//       else setOrders(data);
//     };

//     fetchOrders();
//   }, [userId]);

//   // Add item to cart in "carts" table
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");

//     const { error } = await supabase.from("carts").insert([
//       { product_id: productId, quantity: 1, user_id: userId },
//     ]);

//     if (error) console.error(error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>
//       {orders.length === 0 ? (
//         <><p>No orders placed yet.</p><ul className={styles.orderList}>
//                   {orders.map((order) => (
//                       <li key={order.id} className={styles.orderItem}>
//                           <strong>Order ID:</strong> {order.id} <br />
//                           <strong>Status:</strong> {order.status} <br />
//                           <button
//                               className={styles.button}
//                               onClick={() => addToCart(order.product_id)}
//                           >
//                               Add Again to Cart
//                           </button>
//                       </li>
//                   ))}
//               </ul></>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
       
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);
//   const router = useRouter();

//   // Get current logged-in user session and redirect if not logged in
//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: sessionData, error } = await supabase.auth.getSession();

//       if (error) {
//         console.error(error);
//         return;
//       }

//       if (sessionData.session?.user) {
//         setUserId(sessionData.session.user.id);
//       } else {
//         router.push("/login"); // redirect to login if no session
//       }
//     };

//     checkAuth();

//     // Listen to auth state changes
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (session?.user) setUserId(session.user.id);
//         else router.push("/login");
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, [router]);

//   // Fetch orders for the logged-in user from "orderss" table
//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false });

//       if (error) console.error(error);
//       else setOrders(data);
//     };

//     fetchOrders();
//   }, [userId]);

//   // Add item to cart in "carts" table
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");

//     const { error } = await supabase.from("carts").insert([
//       { product_id: productId, quantity: 1, user_id: userId },
//     ]);

//     if (error) console.error(error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);
//   const router = useRouter();

//   // Get current logged-in user session
//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: sessionData, error } = await supabase.auth.getSession();
//       if (error) {
//         console.error(error);
//         return;
//       }
//       if (sessionData.session?.user) {
//         // Supabase user id is usually UUID string
//         setUserId(sessionData.session.user.id);
//       } else {
//         router.push("/login");
//       }
//     };

//     checkAuth();

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (session?.user) setUserId(session.user.id);
//         else router.push("/login");
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, [router]);

//   // Fetch orders
//   useEffect(() => {
//     if (!userId) return;
//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_id", userId)
//         .order("created_at", { ascending: false });

//       if (error) console.error(error);
//       else setOrders(data || []);
//     };
//     fetchOrders();
//   }, [userId]);

//   // Add to cart
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");
//     const { error } = await supabase.from("carts").insert([
//       { product_id: productId, quantity: 1, user_id: userId },
//     ]);
//     if (error) console.error(error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//        <h2 className={styles.heading}>My Orders</h2>
//        {orders.length === 0 ? (
//         <><p>No orders placed yet.</p><ul className={styles.orderList}>
//                   {orders.map((order) => (
//                       <li key={order.id} className={styles.orderItem}>
//                           <strong>Order ID:</strong> {order.id} <br />
//                           <strong>Status:</strong> {order.status} <br />
//                           <button
//                               className={styles.button}
//                               onClick={() => router.push(`/myorders/${order.id}`)}
//                           >
//                               View Details
//                           </button>
//                           <button
//                               className={styles.button}
//                               onClick={() => addToCart(order.product_id)}
//                           >
//                               Add Again to Cart
//                           </button>
//                       </li>
//                   ))}
//               </ul></>
//       ) : (  
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => router.push(`/myorders/${order.id}`)}
//               >
//                 View Details
//               </button>
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// interface Order {
//   id: number;
//   user_id: string;
//   product_id: number;
//   status: string;
// }

// export default function MyOrder() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);
//   const router = useRouter();

//   // Get current logged-in user
//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: sessionData } = await supabase.auth.getSession();
//       const user = sessionData.session?.user;
//       if (user) {
//         setUserId(user.id);
//       } else {
//         router.push("/login");
//       }
//     };
//     checkAuth();
//   }, [router]);

//   // Fetch orders for logged-in user
//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_id", userId)
//         .order("id", { ascending: false }); // latest first

//       if (error) console.error("Error fetching orders:", error);
//       else setOrders(data || []);
//     };

//     fetchOrders();
//   }, [userId]);

//   // Add product to cart
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");
//     const { error } = await supabase.from("carts").insert([
//       { product_id: productId, quantity: 1, user_id: userId },
//     ]);
//     if (error) console.error("Add to cart error:", error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>

//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => router.push(`/myorders/${order.id}`)}
//               >
//                 View Details
//               </button>
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// interface Order {
//   id: number;
//   user_uuid: string;
//   product_id: number;
//   status: string;
// }

// export default function MyOrder() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);
//   const router = useRouter();

//   // Get current logged-in user
//   useEffect(() => {
//     const checkAuth = async () => {
//       const { data: sessionData } = await supabase.auth.getSession();
//       const user = sessionData.session?.user;
//       if (user) {
//         setUserId(user.id); // UUID
//       } else {
//         router.push("/login");
//       }
//     };
//     checkAuth();
//   }, [router]);

//   // Fetch orders for logged-in user
//   useEffect(() => {
//     if (!userId) return;

//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_uuid", userId)  // ✅ match uuid
//         .order("id", { ascending: false });

//       if (error) console.error("Error fetching orders:", error);
//       else setOrders(data || []);
//     };

//     fetchOrders();
//   }, [userId]);

//   // Add product to cart
//   const addToCart = async (productId: number) => {
//     if (!userId) return alert("User not logged in!");
//     const { error } = await supabase.from("carts").insert([
//       { product_id: productId, quantity: 1, user_uuid: userId }, // ✅ uuid
//     ]);
//     if (error) console.error("Add to cart error:", error);
//     else alert("Item added to cart!");
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>

//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button
//                 className={styles.button}
//                 onClick={() => router.push(`/myorders/${order.id}`)}
//               >
//                 View Details
//               </button>
//               <button
//                 className={styles.button}
//                 onClick={() => addToCart(order.product_id)}
//               >
//                 Add Again to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }




// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// export default function MyOrder() {
//   const [orders, setOrders] = useState<any[]>([]);
//   const [userId, setUserId] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const init = async () => {
//       const { data } = await supabase.auth.getSession();
//       const uid = data.session?.user?.id ?? null;
//       setUserId(uid);
//       if (!uid) router.push("/login");
//     };
//     init();
//   }, [router]);

//   useEffect(() => {
//     if (!userId) return;
//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select("*")
//         .eq("user_id", userId)
//         .order("id", { ascending: false });
//       if (!error) setOrders(data ?? []);
//     };
//     fetchOrders();
//   }, [userId]);

//   // const addToCart = async (productId: number) => {
//   //   if (!userId) return alert("User not logged in!");
//   //   const { error } = await supabase.from("carts").insert([{ product_id: productId, quantity: 1, user_id: userId }]);
//   //   if (!error) alert("Item added to cart!");
//   // };
//   // addToCart remains same but check for product existence
// const addToCart = async (productId: number | null) => {
//   if (!userId) return alert("User not logged in!");
//   if (!productId) return alert("This order has no product to re-add.");
//   const { error } = await supabase.from("carts").insert([{ product_id: productId, quantity: 1, user_id: userId }]);
//   if (error) console.error(error);
//   else alert("Item added to cart!");
// };


//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>My Orders</h2>
//       {!orders.length ? <p>No orders placed yet.</p> : (
//         <ul className={styles.orderList}>
//           {orders.map((order) => (
//             <li key={order.id} className={styles.orderItem}>
//               <strong>Order ID:</strong> {order.id} <br />
//               <strong>Status:</strong> {order.status} <br />
//               <button className={styles.button} onClick={() => router.push(`/myorders/${order.id}`)}>View Details</button>
//               <button className={styles.button} onClick={() => addToCart(order.product_id)}>Add Again to Cart</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }















// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// interface Order {
//   id: number;
//   status: string;
//   total_amount: number;
//   product_id: number;
//   product: Product;
// }

// export default function MyOrder() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const {
//         data,
//         error
//       } = await supabase
//         .from("orderss")
//         .select(
//           `
//           id,
//           status,
          
//           product_id,
//           products:product_id ( id, name, price, image )
//         `
//         )
//         .order("id", { ascending: false });

//       if (error) {
//         console.error("Error fetching orders:", error.message);
//       } else {
//         // setOrders(data || []);
//         setOrders((data as unknown as Order[]) || []);
//       }
//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p>Loading your orders...</p>;

//   return (
//     <section className={styles.ordersSection}>
//       <h2>My Orders</h2>

//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <div className={styles.ordersGrid}>
//           {orders.map((order) => (
//             <div key={order.id} className={styles.orderCard}>
//               <img
//                 src={order.product?.image || "/placeholder.png"}
//                 alt={order.product?.name || "Product"}
//                 className={styles.productImage}
//               />
//               <div className={styles.orderInfo}>
//                 <h3>{order.product?.name}</h3>
//                 <p>Status: {order.status}</p>
//                 <p>Amount: ₹{order.total_amount}</p>
//                 <p>Price: ₹{order.product?.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }







// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// interface Order {
//   products: any;
//   id: number;
//   status: string;
//   product_id: number;
//   product: Product;
// }

// export default function MyOrder() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select(
//           `
//           id,
//           status,
//           product_id,
//           products:id( id, name, price, image )
//         `
//         )
//         .order("id", { ascending: false });
        


//       if (error) {
//         console.error("Error fetching orders:", error.message);
//       } else {
//         setOrders((data as unknown as Order[]) || []);
//       }
//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p>Loading your orders...</p>;

//   return (
//     <section className={styles.ordersSection}>
//       <h2>My Orders</h2>

//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <div className={styles.ordersGrid}>
//           {orders.map((order) => (
//             <div key={order.id} className={styles.orderCard}>
//               <img
//                 src={order.product?.image || "/placeholder.png"}
//                 alt={order.product?.name || "Product"}
//                 className={styles.productImage}
//               />
//               <div className={styles.orderInfo}>
//                 <h3>{order.product?.name}</h3>
//                 <p>Status: {order.status}</p>
//                 <p>Price: ₹{order.product?.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }



// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";
// import styles from "./MyOrder.module.css";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// interface Order {
//   id: number;
//   status: string;
//   product_id: number;
//   products: Product; // products table ka data yaha aayega
// }

// export default function MyOrder() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const { data, error } = await supabase
//         .from("orderss")
//         .select(
//           `
//           id,
//           status,
//           product_id,
//           products ( id, name, price, image )
//         `
//         )
//         .order("id", { ascending: false });

//       if (error) {
//         console.error("Error fetching orders:", error.message);
//       } else {
//         setOrders((data as unknown as Order[]) || []);
//       }
//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p>Loading your orders...</p>;

//   return (
//     <section className={styles.ordersSection}>
//       <h2>My Orders</h2>

//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <div className={styles.ordersGrid}>
//           {orders.map((order) => (
//             <div key={order.id} className={styles.orderCard}>
//               <img
//                 src={order.products?.image || "/placeholder.png"}
//                 alt={order.products?.name || "Product"}
//                 className={styles.productImage}
//               />
//               <div className={styles.orderInfo}>
//                 <h3>{order.products?.name}</h3>
//                 <p>Status: {order.status}</p>
//                 <p>Price: ₹{order.products?.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./MyOrder.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Order {
  id: number;
  status: string;
  product_id: number;
  products: Product;
}

export default function MyOrder() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orderss")
        .select(
          `
          id,
          status,
          product_id,
          products ( id, name, price, image )
        `
        )
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error.message);
      } else {
        setOrders((data as unknown as Order[]) || []);
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading your orders...</p>;

  return (
    <section className={styles.ordersSection}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className={styles.ordersGrid}>
          {orders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <img
                src={order.products?.image || "/placeholder.png"}
                alt={order.products?.name || "Product"}
                className={styles.productImage}
              />
              <div className={styles.cardContent}>
                <h3>{order.products?.name}</h3>
                <p className={styles.price}>₹{order.products?.price}</p>
                <span
                  className={`${styles.status} ${
                    order.status === "Delivered"
                      ? styles.delivered
                      : styles.pending
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
