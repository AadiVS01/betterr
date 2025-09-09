'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { PurchaseIcon, RefinanceIcon, HelocIcon, CheckIcon, RatesIcon, OffersIcon, DashboardIcon} from './icons'

export default function StartPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { id: 'purchase', icon: <PurchaseIcon />, text: 'Buying a home' },
    { id: 'refinance', icon: <RefinanceIcon />, text: 'Refinancing my mortgage' },
    { id: 'heloc', icon: <HelocIcon />, text: 'Get cash from my home' },
  ];

  return (
    <section id='start' data-header-color="#ffffffff" data-header-text-color="#313131">
    <div  className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Hi, I&apos;m Betsy!</span>
          <br />
          What can I help you with?
        </h1>

        <div className={styles.optionsGrid} role="radiogroup">
          {options.map((option) => (
            <button
              key={option.id}
              role="radio"
              aria-checked={selectedOption === option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`${styles.optionButton} ${selectedOption === option.id ? styles.active : ''}`}
            >
              <div className={styles.iconWrapper}>{option.icon}</div>
              <span className={styles.buttonText}>{option.text}</span>
              <span className={styles.checkIconWrapper}>
                <CheckIcon />
              </span>
            </button>
          ))}
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <p className={styles.statValue}>$100B</p>
            <p className={styles.statLabel}>home loans funded entirely online</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>400K</p>
            <p className={styles.statLabel}>Customers who chose a Better Mortgage</p>
          </div>
        </div>

        <div className={styles.unlocksSection}>
          <p className={styles.unlocksTitle}>After a few questions, you&apos;ll unlock:</p>
          <div className={styles.unlocksList}>
            <div className={styles.unlockItem}>
              <RatesIcon />
              <p>Custom mortgage rates</p>
            </div>
            <div className={styles.unlockItem}>
              <OffersIcon />
              <p>Exclusive offers</p>
            </div>
            <div className={styles.unlockItem}>
              <DashboardIcon />
              <p>A personalized dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}