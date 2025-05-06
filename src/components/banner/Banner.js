"use client";

import styles from "@/components/banner/Banner.module.css";
import Image from "next/image";

export default function Banner({ subtitle, heading, highlight, cta, backgroundImage }) {
    return (
        <section className={styles.banner}>
            <div className={styles.overlay}>
                <div className={styles.textContainer}>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <h1 className={styles.heading}>
                        {heading} <br />
                        <span className={styles.highlight}>{highlight}</span>
                    </h1>
                    <div className={styles.cta}>
                        {cta.map((item, index) => (
                            <span key={index}>
                                <span className={styles.txt}>{item}</span>
                                {index < cta.length - 1 && (
                                    <span className={styles.dot}>•</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <img
    src={backgroundImage}
    alt="Background"
    className={styles.backgroundImage}
/>
        </section>
    );
}
