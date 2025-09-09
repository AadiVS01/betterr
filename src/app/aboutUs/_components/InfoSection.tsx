import styles from './page.module.css';
import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoContent}>
        <h2 className={styles.infoTitle}>The status quo is broken</h2>
        <p className={styles.infoText}>
          The traditional processes around homeownership are opaque and
          stressful. Fees aren’t transparent and some are simply outrageous in
          size. Traditional mortgage lending is rife with unnecessary fees and
          slow, painful processes. It’s a system set up to benefit insiders —
          not you. Better.com CEO,{' '}
          <a href="/content/vishal-garg-better-ceo">Vishal Garg</a>, set out to
          change that.
        </p>
        <a href="/content/the-house-that-got-away-why-i-started-better-mortgage" className={styles.infoButton}>
          Read Vishal’s story
        </a>
      </div>
      <div className={styles.infoMedia}>
        <button>
          <Image
            alt="Vishal Garg"
            src={'https://media.better.com/better-com/about-us/vishal-garg.webp'}
            layout="fill"
            objectFit="cover"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.playIcon}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        </button>
      </div>
    </section>
  );
}