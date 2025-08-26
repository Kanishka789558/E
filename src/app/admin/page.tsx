/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/app/libr/supabaseClient";

// export default function AdminPanel() {
//   const [orders, setOrders] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const { data, error } = await supabase.from("orders").select("*");
//       if (error) console.error(error);
//       else setOrders(data);
//     };
//     fetchOrders();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin - Orders List</h2>
//       <table border={1} cellPadding={10}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>User</th>
//             <th>Product</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.user_id}</td>
//               <td>{order.product_id}</td>
//               <td>{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/libr/supabaseClient";
import styles from "./Admin.module.css";

export default function AdminPanel() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase.from("orderss").select("*");
      if (error) console.error(error);
      else setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Admin - Orders List</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user_id}</td>
              <td>{order.product_id}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}