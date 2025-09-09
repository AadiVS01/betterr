'use client';

import { useState } from 'react';
import Button from './_components/ui/Button';
import FaqCard from './_components/FaqCard';
import styles from './page.module.css';


  // Data for the FAQ cards
  const faqCardData = [
    {
      title: 'How AI Mortgage Lending is Transforming the Home Loan Process',
      href: '/content/ai-mortgage-lending',
      imageSrc: '',
      imageAlt: 'Woman on cellphone, seeing how AI is making the mortgage process easier and faster',
      layout: 'vertical',
    },
    {
      title: 'One Day Mortgage',
      href: '/b/one-day-mortgage',
      imageSrc: '',
        imageAlt: 'One day mortgage',
      description:
        'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders...',
      layout: 'horizontal-wide',
    },
    {
      title: 'Better HELOC',
      href: '/b/heloc',
      imageSrc:'',
      imageAlt: 'Couple on a laptop',
      description:
        'Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit...',
      layout: 'horizontal-wide-reversed',
    },
    {
      title: 'Insurance',
      href: 'https://www.bettercover.com',
      imageSrc: '',
      imageAlt: 'Insurance',
      layout: 'vertical',
    },
  ];
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState<string>('Paul');
  const [activeFaq, setActiveFaq] = useState<string>('Our products');

  return (
    <>
      {/* Hero Section */}
      <section id="hero-section" data-header-color="#164633" data-header-text-color="#fff" className={styles.heroSection}>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The first<br />
            <span className={styles.heroHighlight}>AI-powered</span> Mortgage
          </h1>
          <p className={styles.heroText}>
            Our tech unlocks lower rates, higher chances of approval,<br />
            and a lightning‑fast process from approval&nbsp;to&nbsp;closing. Over $100 billion funded.
          </p>
          <div className={styles.heroActions}>
            <a href="/start">
              <Button variant="primary">Start my pre-approval</Button>
            </a>
            <div className={styles.heroInfo}>
              {/* SVG for info icon */}
              <span>3 min</span>
              <span>| No hard credit check</span>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              alt="Better Mortgage"
              decoding="async"
              src="https://media.better.com/better-com/homepage/ai-powered-fico.webp"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* Why We're Better Section */}
      <section id="why-better-section" data-header-color="#ffffffff" data-header-text-color="#313131" className={styles.whyBetterSection}>
        <div className={styles.whyBetterContent}>
          <h2 className={styles.whyBetterTitle}>Find out why we’re better.</h2>
          <div className={styles.whyBetterText}>
            <Button variant="secondary" asLink="/b/our-stories">See all our stories</Button>
            <div className={styles.reviews}>
              {/* SVG for reviews */}
              <br /><br />
              <span><strong>   Excellent</strong></span>
              
              <span><strong>4.4</strong> out of 5</span>
            </div>
          </div>
        </div>
        <div className={styles.whyBetterTestimonials}>
          <div className={styles.videoWrapper}>
            <img src="D:\Project\assignmentt\betterr\public\f21.jpg" alt="" />
            {/* Image and play button for video testimonial */}
          </div>
          <div className={styles.testimonialButtons}>
            <Button
              variant={activeTestimonial === 'Paul' ? 'active' : 'tertiary'}
              onClick={() => setActiveTestimonial('Paul')}
            >
              Paul
            </Button>
            <Button
              variant={activeTestimonial === 'Amanda' ? 'active' : 'tertiary'}
              onClick={() => setActiveTestimonial('Amanda')}
            >
              Amanda
            </Button>
            <Button
              variant={activeTestimonial === 'Tiara' ? 'active' : 'tertiary'}
              onClick={() => setActiveTestimonial('Tiara')}
            >
              Tiara
            </Button>
          </div>
          
        </div>
        
      </section>

     

      {/* FAQ Section */}
      
      <section
  id="faq-section"
  data-header-color="#ffffffff"
  data-header-text-color="#313131"
  className={styles.faqSection}
>
  <div className={styles.faqHeader}>
    <h2 className={styles.faqTitle}>
      Got questions?
      <br />
      We&apos;ve got answers
    </h2>
    <div className={styles.faqButtons}>
      <Button
        variant={activeFaq === 'Our products' ? 'active' : 'tertiary'}
        onClick={() => setActiveFaq('Our products')}
      >
        Our products
      </Button>
      <Button
        variant={activeFaq === 'Calculators' ? 'active' : 'tertiary'}
        onClick={() => setActiveFaq('Calculators')}
      >
        Calculators
      </Button>
      <Button
        variant={activeFaq === 'Guides & FAQs' ? 'active' : 'tertiary'}
        onClick={() => setActiveFaq('Guides & FAQs')}
      >
        Guides & FAQs
      </Button>
    </div>
  </div>
  <div className={styles.faqCards}>
    {faqCardData.map((card, index) => (
      <FaqCard
        key={index}
        title={card.title}
        href={card.href}
        imageSrc={card.imageSrc}
        imageAlt={card.imageAlt}
        description={card.description}
        layout={card.layout as any} // Cast as 'any' to match prop type if needed
      />
    ))}
  </div>
</section>
    </>
  );
}