"use client";

import { logo } from '@/utils/ImageConstants';
import styles from '@/components/team/Team.module.css';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Craig Tiley',
    title: 'CEO Tennis Australia & Australian Open',
    image: logo.Banner,
  },
  {
    name: 'Stephen Farrow',
    title: 'Director - Tournament, Players & International Relations',
    image: logo.Banner,
  },
  {
    name: 'Cameron Pearson',
    title: 'Head Major Events - Tennis Australia',
    image: logo.Banner,
  },
];

const facilities = [
  {
    title: "Tennis",
    feature: "9 Clay Courts • 4 Hard Courts",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: logo.Banner,
  },
  {
    title: "Accommodation",
    feature: "5 Star Hotel",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: logo.Banner,
  },
  {
    title: "Fitness & Gym",
    feature: "State-of-the-art Equipment",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: logo.Banner,
  },
  {
    title: "Recovery & Ice Bath",
    feature: "Dedicated Recovery Zone",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: logo.Banner,
  },
];

export default function Team() {
  return (
    <section className={styles.teamSection}>
      {/* Team Header */}
      <div className={styles.header}>
        <h2>
          Meet our professionals<span className={styles.dot}>•</span>
        </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <a href="#" className={styles.viewAll}>View All ⟶</a>
      </div>

      {/* Team Cards */}
      <div className={styles.cardGrid}>
        {teamMembers.map((member, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
              />
            </div>
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>

      {/* Facilities Section */}
      <div className={styles.facilitiesWrapper}>
        <div className={styles.header}>
          <h2>
            Facilities<span className={styles.dot}>•</span>
          </h2>
          <p className={styles.subText}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className={styles.facilitiesGrid}>
          {facilities.map((item, idx) => (
            <div className={styles.facilityCard} key={idx}>
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className={styles.facilityImage}
              />
              <h3>{item.title}</h3>
              <p className={styles.featureText}>{item.feature}</p>
              <p className={styles.descText}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
