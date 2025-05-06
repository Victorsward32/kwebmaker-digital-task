"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { logo } from "@/utils/ImageConstants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image 
            src= {logo.ssl_logo} 
            alt="SSA Logo" 
            className={styles.logo} 
            width={60} 
            height={40} 
          />
          
          <button 
            className={styles.menuToggle} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.hamburger}></span>
          </button>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#about">About Us</a></li>
            <li><a href="#matches">Matches</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#coaches">Coaches</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
          <button className={styles.contactBtn}>Contact Us</button>
        </nav>
      </div>
    </header>
  );
}