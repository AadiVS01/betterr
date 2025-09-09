import Image from 'next/image';
import Link from 'next/link';
import styles from './FaqCard.module.css';

// FIX 1: Define and export the specific layout types.
export type FaqCardLayout = 'vertical' | 'horizontal-wide' | 'horizontal-wide-reversed';

interface FaqCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  // FIX 2: Use the exported type here.
  layout?: FaqCardLayout;
}

export default function FaqCard({
  title,
  href,
  imageSrc,
  imageAlt,
  description,
  layout = 'vertical',
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
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5"></rect>
                <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.cardImage}
        />
      </div>
    </Link>
  );
}