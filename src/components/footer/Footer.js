"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { logo } from "@/utils/ImageConstants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
      <div className={styles.logoSection}>
            <Image 
              src={logo.ssl_logo2}
              alt="SSA Logo" 
              width={100} 
              height={60} 
              style={styles.logo}
            />
          </div>
        <div className={styles.container}> 
          <div className={styles.linksSection}>
            <nav className={styles.footerNav}>
              <div className={styles.navColumn}>
                <Link href="/about" className={styles.navLink}>About Us</Link>
                <Link href="/programs" className={styles.navLink}>Programs</Link>
              </div>
              <div className={styles.navColumn}>
                <Link href="/coaches" className={styles.navLink}>Coaches</Link>
                <Link href="/amenities" className={styles.navLink}>Amenities</Link>
              </div>
              <div className={styles.navColumn}>
                <Link href="/news" className={styles.navLink}>News</Link>
                <Link href="/blogs" className={styles.navLink}>Blogs</Link>
              </div>
              <div className={styles.navColumn}>
                <Link href="/matches" className={styles.navLink}>Matches</Link>
                <Link href="/events" className={styles.navLink}>Events</Link>
                <Link href="/faqs" className={styles.navLink}>FAQs</Link>
              </div>
            </nav>
          </div>
          <hr className={styles.divider} />
           <div className={styles.bottomContainer}>
          <div className={styles.infoSection}>
            <h3 className={styles.infoTitle}>Signature Slam Academy</h3>
            <address className={styles.address}>
              30 Wills Hill Road, Lovedale, NSW
            </address>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <FaPhone className={styles.icon} /> 
                <a href="tel:+919645289752">+91 9645289752</a>
              </p>
              <p className={styles.contactItem}>
                <FaEnvelope className={styles.icon} /> 
                <a href="mailto:info@ssagroup.com">info@ssagroup.com</a>
              </p>
            </div>
          </div>
          
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Connect with us</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className={styles.socialIcon} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" className={styles.socialIcon} aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
          
        </div>
        
        
        
       
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.tagLine}>
          <p className={styles.copyright}>
            <Link href="" className={styles.termsLink}>Terms And Condition</Link>
            <span className={styles.copyrightText}>© 2023 All Rights Reserved www.signatureslam.academy.com</span>
            <Link href="" className={styles.privacyLink}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}