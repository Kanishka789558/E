


"use client";

import Image from "next/image";
import styles from "./About.module.css";
import Link from "next/link";
import { Store, DollarSign, ShoppingBag, Wallet } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

export default function About() {
  const teamMembers = [
    { name: "Tom Cruise", role: "Founder & Chairman", img: "/images/tom.png" },
    { name: "Emma Watson", role: "Managing Director", img: "/images/emma.png" },
    { name: "Will Smith", role: "Product Designer", img: "/images/will.png" },
  ];

  const statsData = [
    { id: 1, value: "10.5k", label: "Sellers active our site", icon: <Store size={40} />, highlight: false },
    { id: 2, value: "33k", label: "Monthly Product Sale", icon: <DollarSign size={40} />, highlight: true },
    { id: 3, value: "45.5k", label: "Customer active in our site", icon: <ShoppingBag size={40} />, highlight: false },
    { id: 4, value: "25k", label: "Annual gross sale in our site", icon: <Wallet size={40} />, highlight: false },
  ];

  return (
    <>
      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link> <span>/</span> <span>About</span>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Our Story</h2>
            <p className={styles.paragraph}>
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by wide
              range of tailored marketing, data and service solutions, Exclusive
              has 10,500 sellers and 300 brands and serves 3 million customers
              across the region.
            </p>
            <p className={styles.paragraph}>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image src="/about-img.jpg" alt="Shopping Women" width={500} height={500} className={styles.aboutImage} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsWrapper}>
          {statsData.map((item) => (
            <div
              key={item.id}
              className={`${styles.statsCard} ${item.highlight ? styles.highlight : ""}`}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={`${styles.value} ${item.highlight ? styles.valueHighlight : ""}`}>
                {item.value}
              </h3>
              <p className={`${styles.label} ${item.highlight ? styles.labelHighlight : ""}`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <div className={styles.imageBox}>
              <Image src={member.img} alt={member.name} width={300} height={400} className={styles.profileImg} />
            </div>

            <div className={styles.info}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <div className={styles.socials}>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className={styles.services}>
      {/* Box 1 */}
      <div className={styles.serviceBox}>
        <div className={styles.iconCircle}>
          <FaTruck size={32} color="#fff" />
        </div>
        <h3 className={styles.title}>FREE AND FAST DELIVERY</h3>
        <p className={styles.text}>Free delivery for all orders over $140</p>
      </div>

      {/* Box 2 */}
      <div className={styles.serviceBox}>
        <div className={styles.iconCircle}>
          <FaHeadset size={32} color="#fff" />
        </div>
        <h3 className={styles.title}>24/7 CUSTOMER SERVICE</h3>
        <p className={styles.text}>Friendly 24/7 customer support</p>
      </div>

      {/* Box 3 */}
      <div className={styles.serviceBox}>
        <div className={styles.iconCircle}>
          <FaShieldAlt size={32} color="#fff" />
        </div>
        <h3 className={styles.title}>MONEY BACK GUARANTEE</h3>
        <p className={styles.text}>We return money within 30 days</p>
      </div>
      </div>
      </section>
    </>
  );
}
