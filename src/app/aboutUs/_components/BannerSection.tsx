import styles from './page.module.css';

export default function BannerSection() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>How we’re changing things</h2>
        <p className={styles.bannerText}>
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers’.
        </p>
        <p className={styles.bannerText}>
          That’s why Better.com is redefining the homeownership process from the
          ground up. We’re using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>
    </section>
  );
}