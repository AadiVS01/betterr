'use client';

import React, { useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections with a header color data attribute
      const sections = document.querySelectorAll('section[data-header-color]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const headerColor = section.getAttribute('data-header-color');

        // Check if the user is currently in this section
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          if (headerColor) {
            // Set the CSS variable on the document's root element
            document.documentElement.style.setProperty('--header-bg', headerColor);
          }
        }
      });
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <a href="/" className={styles.logoLink}>
            {/* SVG for Better Logo */}
          </a>
          <ul className={styles.desktopNav}>
            {/* Buy Dropdown Menu */}
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Buy</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><a href="/preapproval/nxt-purchase" className={styles.dropdownLink}>Apply now</a></li>
                  <li><a href="/mortgage-rates" className={styles.dropdownLink}>Purchase rates</a></li>
                  <li><a href="/how-much-house-can-i-afford" className={styles.dropdownLink}>Affordability calculator</a></li>
                  <li><a href="/b/calculators/mortgage-calculator" className={styles.dropdownLink}>Mortgage calculator</a></li>
                  <li><a href="/rent-vs-buy-calculator" className={styles.dropdownLink}>Rent vs buy calculator</a></li>
                  <li><a href="/find-an-agent" className={styles.dropdownLink}>Find an agent</a></li>
                  <li><a href="/va-loan" className={styles.dropdownLink}>VA loans</a></li>
                  <li><a href="/content" className={styles.dropdownLink}>Learning center</a></li>
                </ul>
              </div>
            </li>
            {/* Refinance Dropdown Menu */}
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Refinance</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><a href="/preapproval/nxt-refinance" className={styles.dropdownLink}>Apply Now</a></li>
                  <li><a href="/refinance-rates" className={styles.dropdownLink}>Refinance rates</a></li>
                  <li><a href="/content/refinance-calculator" className={styles.dropdownLink}>Cash-out refinance calculator</a></li>
                  <li><a href="/content" className={styles.dropdownLink}>Learning Center</a></li>
                </ul>
              </div>
            </li>
            {/* HELOC Dropdown Menu */}
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>HELOC</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><a href="/preapproval/nxt-heloc" className={styles.dropdownLink}>Apply Now</a></li>
                  <li><a href="/heloc-calculator" className={styles.dropdownLink}>Calculate your Cash 💵</a></li>
                  <li><a href="/heloc-vs-cashout-refi-calculator" className={styles.dropdownLink}>HELOC vs. Cash-out Refinance</a></li>
                  <li><a href="/content" className={styles.dropdownLink}>Learning Center</a></li>
                </ul>
              </div>
            </li>
            {/* Rates Dropdown Menu */}
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Rates</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><a href="/mortgage-rates" className={styles.dropdownLink}>Purchase mortgage rates</a></li>
                  <li><a href="/refinance-rates" className={styles.dropdownLink}>Refinance rates</a></li>
                  <li><a href="/cash-out-refinance-rates" className={styles.dropdownLink}>Refinance cash-out rates</a></li>
                  <li><a href="/b/heloc-rates" className={styles.dropdownLink}>HELOC rates</a></li>
                  <li><a href="/va-loan-rates" className={styles.dropdownLink}>Purchase VA rates</a></li>
                </ul>
              </div>
            </li>
            {/* Better+ Dropdown Menu */}
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Better+</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><a href="https://www.bettercover.com/" className={styles.dropdownLink}>Get Insurance</a></li>
                  <li><a href="/title" className={styles.dropdownLink}>Title and Closing</a></li>
                  <li><a href="/b/attorney-match" className={styles.dropdownLink}>Better Attorney Match</a></li>
                  <li><a href="/content" className={styles.dropdownLink}>Learning Center</a></li>
                  <li><a href="/b/better-real-estate-partner-agents" className={styles.dropdownLink}>Better Agent Match</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <ul className={styles.navActions}>
          <li className={styles.navItem}>
            <a href="/account/sign-in" className={styles.navLink}>Sign in</a>
          </li>
          <li className={styles.navItem}>
            <a href="/preapproval/98713ead-73f8-4a29-ae42-8f7529de0dfc" className={styles.continueButton}>Continue</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}