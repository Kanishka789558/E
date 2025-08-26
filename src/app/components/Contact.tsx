"use client";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <><div className={styles.breadcrumb}>
          <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
      </div><section className={styles.contactSection}>
              {/* Left side - Contact Info */}
              <div className={styles.infoBox}>
                  <h2 className={styles.heading}>Contact Us</h2>

                  {/* Call Us */}
                  <div className={styles.infoItem}>
                      <div className={styles.iconWrapper}>
                          <FaPhoneAlt className={styles.icon} />
                      </div>
                      <div>
                          <h3 className={styles.title}>Call To Us</h3>
                          <p className={styles.text}>We are available 24/7, 7 days a week.</p>
                          <p className={styles.text}>Phone: +8801611112222</p>
                      </div>
                  </div>

                  <hr className={styles.divider} />

                  {/* Email Us */}
                  <div className={styles.infoItem}>
                      <div className={styles.iconWrapper}>
                          <FaEnvelope className={styles.icon} />
                      </div>
                      <div>
                          <h3 className={styles.title}>Write To Us</h3>
                          <p className={styles.text}>
                              Fill out our form and we will contact you within 24 hours.
                          </p>
                          <p className={styles.text}>Emails: customer@exclusive.com</p>
                          <p className={styles.text}>Emails: support@exclusive.com</p>
                      </div>
                  </div>
              </div>

              {/* Right side - Form */}
              <form className={styles.form}>
                  <div className={styles.inputRow}>
                      <input type="text" placeholder="Your Name *" className={styles.input} />
                      <input type="email" placeholder="Your Email *" className={styles.input} />
                      <input type="text" placeholder="Your Phone *" className={styles.input} />
                  </div>
                  <textarea
                      placeholder="Your Message"
                      className={styles.textarea}
                      rows={6}
                  ></textarea>
                  <button type="submit" className={styles.button}>
                      Send Message
                  </button>
              </form>
          </section></>
  );
}
