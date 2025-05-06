"use client";
import React from "react";
import styles from "./KeyFeatures.module.css";
import Image from "next/image";
import { logo } from "@/utils/ImageConstants";

export default function KeyFeatures() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.heading}>key Features</h2>
                <div className={styles.featuresGrid}>
                    <ul className={styles.featureList}>
                        <li>First venue in the world</li>
                        <li>
                            First venue in the world to have 60 multi surface courts (20 clay
                            & 30 hard + 10 natural grass) at one location alongside a stadium
                        </li>
                        <li>
                            First facility in the world to have capabilities to hold WTA &
                            ATP events on any three court surface at one location
                        </li>
                        <li>
                            First tennis academy in the world to have capabilities to stage
                            WTA & ATP events too
                        </li>
                        <li>
                            First venue in the world with tennis academy, Equestrian Centre,
                            18 holes golf course, Exhibition Centre, Aboriginal Art & Culture
                            Museum, Stadium; 5 Star Hunter Valley resort and airport all in
                            500 meters radius
                        </li>
                        <li>First one stop tennis academy in Asia Pacific</li>
                    </ul>
                    <ul className={styles.featureList}>
                        <li>First venue in the world</li>
                        <li>
                            First venue in the world to have 60 multi surface courts (20 clay
                            & 30 hard + 10 natural grass) at one location alongside a stadium
                        </li>
                        <li>
                            First facility in the world to have capabilities to hold WTA &
                            ATP events on any three court surface at one location
                        </li>
                        <li>
                            First tennis academy in the world to have capabilities to stage
                            WTA & ATP events too
                        </li>
                        <li>
                            First venue in the world with tennis academy, Equestrian Centre,
                            18 holes golf course, Exhibition Centre, Aboriginal Art & Culture
                            Museum, Stadium; 5 Star Hunter Valley resort and airport all in
                            500 meters radius
                        </li>
                        <li>First one stop tennis academy in Asia Pacific</li>
                    </ul>
                </div>

                <div className={styles.excellenceSection}>
                    <div className={styles.excellenceHeader}>
                        <h3 className={styles.subHeading}>A Glimpse of Excellence</h3>
                        <a href="#">View All →</a>
                    </div>
                    <div className={styles.imageGrid}>
                        <Image
                            src={logo.Banner}
                            alt="Tennis Glimpse 1"
                            width={500}
                            height={500}
                            className={styles.image}
                        />
                        <Image
                            src={logo.Banner}
                            alt="Tennis Glimpse 2"
                            width={500}
                            height={500}
                            className={styles.image}
                        />
                    </div>
                </div>
                {/* Programs Section */}
                <div className={styles.programsSection}>
                    <div className={styles.programsHeader}>
                        <h2 className={styles.programsTitle}>Programs</h2>
                        <a href="#" className={styles.readMore}>Read More →</a>
                    </div>
                    <p className={styles.programsDescription}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className={styles.programCards}>
                        <div className={styles.card}>
                            <Image
                                src={logo.Banner}
                                alt="Academy"
                                width={400}
                                height={300}
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay}>
                                <h3>Academy</h3>
                                <p>Live and train with us</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={logo.Banner}
                                alt="Camps"
                                width={400}
                                height={300}
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay}>
                                <h3>Camps</h3>
                                <p>Train like a pro with us</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src={logo.Banner}
                                alt="Performance"
                                width={400}
                                height={300}
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay}>
                                <h3>Performance</h3>
                                <p>Elevate your game with us</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SSA Connectivity Section */}
                <div className={styles.connectivitySection}>
                    <div className={styles.connectivityContent}>
                        <div className={styles.leftPanel}>
                            <p className={styles.launching}>LAUNCHING</p>
                            <h2 className={styles.connectTitle}>Signature Slam Academy<br />Hunter Valley</h2>

                            <h3 className={styles.ssaLabel}>SSA Connectivity</h3>
                            <ul className={styles.locationList}>
                                <li><span>🏌️‍♂️</span> Hunter Valley Golf And Country Club <span>220m</span></li>
                                <li><span>🏨</span> Rydges Resort Hunter Valley <span>550m</span></li>
                                <li><span>✈️</span> Cessnock Airport <span>1.7km</span></li>
                                <li><span>🏙️</span> Cessnock CBD <span>7km</span></li>
                                <li><span>🏫</span> Nulkaba Public School <span>4.8km</span></li>
                                <li><span>🏥</span> Cessnock Hospital <span>7.3km</span></li>
                                <li><span>🍔</span> Mcdonalds, KFC, Oporto <span>7km</span></li>
                            </ul>
                        </div>

                        <div className={styles.rightPanel}>
                            <Image
                                src={logo.Banner}
                                alt="Hunter Valley Campus"
                                width={800}
                                height={400}
                                className={styles.connectImage}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
