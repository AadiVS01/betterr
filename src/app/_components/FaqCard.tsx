import React from 'react';
import styles from './FaqCard.module.css';

interface FaqCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
}

export default function FaqCard({ title, href, imageSrc, imageAlt, description }: FaqCardProps) {
  return (
    <a className={styles.card} href={href}>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>{title}</h4>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.readMore}>
          {/* SVG for arrow icon */}
        </div>
      </div>
      <img
        alt={imageAlt}
        width={200}
        height={200}
        src={imageSrc}
        className={styles.image}
      />
    </a>
  );
}