import styles from './_components/page.module.css';
import HeroSection from './_components/HeroSection';
import InfoSection from './_components/InfoSection';
import BannerSection from './_components/BannerSection';
import PartnersSection from './_components/PartnerSection';
import Timeline from './_components/Timeline';
import RelatedPosts from './_components/RelatedPosts';

export default function AboutUsPage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <InfoSection />
      <BannerSection />
      <PartnersSection />
      <Timeline />
      <RelatedPosts />
    </main>
  );
}