import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.missionStatement}>
          <h1 className={styles.title}>To be the first venue in the world to have 
          <span className={styles.highlight}>60 multi surface courts</span></h1>
          <p className={styles.title}>
            at one location and establish first one stop tennis academy
            in the Asia Pacific producing grand slam champions.
          </p>
        </div>
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.leftColumn}>
          <img 
            src="https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/05/Exterior-Emulsions-Home-page-banner-1336-x-650.webp" 
            alt="Aerial view of tennis facility" 
            className={styles.leftImage} 
          />
        </div>
        
        <div className={styles.rightColumn}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.sectionText}>
            To be the first venue in the world to have 60 multi surface courts at
            one location and establish first one stop tennis academy in the Asia
            Pacific producing grand slam champions.
          </p>
          <div className={styles.readMore}>
            Read More <span className={styles.arrow}>→</span>
          </div>
          
          <div className={styles.rightImage}>
            <img 
              src="https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/05/Exterior-Emulsions-Home-page-banner-1336-x-650.webp"  
              alt="Tennis facility grounds" 
              className={styles.smallImage} 
            />
          </div>
        </div>
      </div>
      
      <div className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>
            " We have created an environment ideal for building craft. Our goal is to be recognized as the best tennis performance centre in the world. "
          </p>
          <div className={styles.divider}></div>
          <div className={styles.authorInfo}>
            <p className={styles.authorName}>John Doe</p>
            <p className={styles.authorTitle}>Chairman</p>
          </div>
        </div>
      </div>
    </div>
  );
}