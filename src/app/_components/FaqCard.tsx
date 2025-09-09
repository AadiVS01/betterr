// src/app/_components/FaqCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import styles from './FaqCard.module.css';

interface FaqCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  layout?: 'vertical' | 'horizontal'; // Add layout prop
}

export default function FaqCard({
  title,
  href,
  imageSrc,
  imageAlt,
  description,
  layout = 'vertical', // Default to vertical
}: FaqCardProps) {
  // Combine base and layout-specific class names
  const cardClassName = `${styles.faqCard} ${styles[layout]}`;

  return (
    <Link href={href} className={cardClassName}>
      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{title}</h4>
        {description && <p className={styles.cardDescription}>{description}</p>}
        <div className={styles.cardArrowContainer}>
          <div className={styles.cardArrow}>
            {/* SVG Arrow */}
            <svg /* ... */ ></svg>
          </div>
        </div>
      </div>
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={200}
        height={200}
        className={styles.cardImage}
      />
    </Link>
  );
}