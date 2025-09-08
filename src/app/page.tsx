'use client';

import { useState } from 'react';
import Button from './_components/ui/Button';
import FaqCard from './_components/FaqCard';
import styles from './page.module.css';

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
      <section id="why-better-section" data-header-color="#f1f1f1" data-header-text-color="#313131" className={styles.whyBetterSection}>
        <div className={styles.whyBetterContent}>
          <h2 className={styles.whyBetterTitle}>Find out why we’re better.</h2>
          <div className={styles.whyBetterText}>
            <Button variant="secondary" asLink="/b/our-stories">See all our stories</Button>
            <div className={styles.reviews}>
              {/* SVG for reviews */}
              <span><strong>Excellent</strong></span>
              <span><strong>4.4</strong> out of 5</span>
            </div>
          </div>
        </div>
        <div className={styles.whyBetterTestimonials}>
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
          <div className={styles.videoWrapper}>
            {/* Image and play button for video testimonial */}
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* FAQ Section */}
      <section id="faq-section" data-header-color="#f1f1f1" data-header-text-color="#313131" className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Got questions?<br />We've got answers</h2>
          <div className={styles.faqButtons}>
            <Button
              variant={activeFaq === 'Our products' ? 'active' : 'tertiary'}
              onClick={() => setActiveFaq('Our products')}
            >
              Our productsm
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
          <FaqCard
            title="How AI Mortgage Lending is Transforming the Home Loan Process"
            href="/content/ai-mortgage-lending"
            imageSrc="https://media.better.com/better-com/homepage/learning-center/ai-mortgage.webp"
            imageAlt="Woman on cellphone, seeing how AI is making the mortgage process easier and faster"
          />
          <FaqCard
            title="One Day Mortgage"
            href="/b/one-day-mortgage"
            imageSrc="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
            imageAlt="One day mortgage"
            description="Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.1"
          />
          {/* ... Other FaqCard components ... */}
        </div>
      </section>
    </>
  );
}