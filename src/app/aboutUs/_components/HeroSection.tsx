import styles from './page.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroSubtitle}>Our mission</h1>
        <h2 className={styles.heroTitle}>
          We’re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </h2>
      </div>
    </section>
  );
}