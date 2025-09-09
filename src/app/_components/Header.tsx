'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-header-color]');
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (scrollY >= section.offsetTop - 1) {
          const headerBgColor = section.getAttribute('data-header-color');
          const headerTextColor = section.getAttribute('data-header-text-color');
          if (headerBgColor) {
            document.documentElement.style.setProperty('--header-bg', headerBgColor);
          }
          if (headerTextColor) {
            document.documentElement.style.setProperty('--header-text-color', headerTextColor);
          }
          break;
        }
      }
    };

    const initialSection = document.getElementById('hero-section');
    if (initialSection) {
      const initialBgColor = initialSection.getAttribute('data-header-color');
      const initialTextColor = initialSection.getAttribute('data-header-text-color');
      if (initialBgColor) {
        document.documentElement.style.setProperty('--header-bg', initialBgColor);
      }
      if (initialTextColor) {
        document.documentElement.style.setProperty('--header-text-color', initialTextColor);
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logoLink}>
            {/* SVG for Better Logo */}
          </Link>
          <ul className={styles.desktopNav}>
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Buy</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><Link href="/preapproval/nxt-purchase" className={styles.dropdownLink}>Apply now</Link></li>
                  <li><Link href="/mortgage-rates" className={styles.dropdownLink}>Purchase rates</Link></li>
                  <li><Link href="/how-much-house-can-i-afford" className={styles.dropdownLink}>Affordability calculator</Link></li>
                  <li><Link href="/MortgageCalculator" className={styles.dropdownLink}>Mortgage calculator</Link></li>
                  <li><Link href="/rent-vs-buy-calculator" className={styles.dropdownLink}>Rent vs buy calculator</Link></li>
                  <li><Link href="/find-an-agent" className={styles.dropdownLink}>Find an agent</Link></li>
                  <li><Link href="/va-loan" className={styles.dropdownLink}>VA loans</Link></li>
                  <li><Link href="/content" className={styles.dropdownLink}>Learning center</Link></li>
                </ul>
              </div>
            </li>
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Refinance</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><Link href="/preapproval/nxt-refinance" className={styles.dropdownLink}>Apply Now</Link></li>
                  <li><Link href="/refinance-rates" className={styles.dropdownLink}>Refinance rates</Link></li>
                  <li><Link href="/content/refinance-calculator" className={styles.dropdownLink}>Cash-out refinance calculator</Link></li>
                  <li><Link href="/content" className={styles.dropdownLink}>Learning Center</Link></li>
                </ul>
              </div>
            </li>
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>HELOC</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><Link href="/preapproval/nxt-heloc" className={styles.dropdownLink}>Apply Now</Link></li>
                  <li><Link href="/heloc-calculator" className={styles.dropdownLink}>Calculate your Cash 💵</Link></li>
                  <li><Link href="/heloc-vs-cashout-refi-calculator" className={styles.dropdownLink}>HELOC vs. Cash-out Refinance</Link></li>
                  <li><Link href="/content" className={styles.dropdownLink}>Learning Center</Link></li>
                </ul>
              </div>
            </li>
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Rates</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><Link href="/mortgage-rates" className={styles.dropdownLink}>Purchase mortgage rates</Link></li>
                  <li><Link href="/refinance-rates" className={styles.dropdownLink}>Refinance rates</Link></li>
                  <li><Link href="/cash-out-refinance-rates" className={styles.dropdownLink}>Refinance cash-out rates</Link></li>
                  <li><Link href="/b/heloc-rates" className={styles.dropdownLink}>HELOC rates</Link></li>
                  <li><Link href="/va-loan-rates" className={styles.dropdownLink}>Purchase VA rates</Link></li>
                </ul>
              </div>
            </li>
            <li className={styles.dropdownContainer}>
              <button className={styles.navLink}>Better+</button>
              <div className={styles.dropdownMenu}>
                <ul className={styles.dropdownList}>
                  <li><a href="https://www.bettercover.com/" className={styles.dropdownLink}>Get Insurance</a></li>
                  <li><Link href="/title" className={styles.dropdownLink}>Title and Closing</Link></li>
                  <li><Link href="/b/attorney-match" className={styles.dropdownLink}>Better Attorney Match</Link></li>
                  <li><Link href="/content" className={styles.dropdownLink}>Learning Center</Link></li>
                  <li><Link href="/b/better-real-estate-partner-agents" className={styles.dropdownLink}>Better Agent Match</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <button className={styles.hamburgerButton} onClick={toggleSidebar}>
          <Menu />
        </button>
        <ul className={styles.navActions}>
          <li className={styles.navItem}>
            <Link href="/account/sign-in" className={styles.navLink}>Sign in</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/preapproval/98713ead-73f8-4a29-ae42-8f7529de0dfc" className={styles.continueButton}>Continue</Link>
          </li>
        </ul>
      </nav>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.sidebarLogo}>
            {/* SVG for Better Logo */}
          </Link>
          <button className={styles.closeButton} onClick={toggleSidebar}>
            <X />
          </button>
        </div>
        <ul className={styles.mobileNavLinks}>
          <details className={styles.mobileDropdown}>
            <summary className={styles.mobileLink}>
              Buy
              <ChevronDown className={styles.mobileArrow} />
            </summary>
            <ul className={styles.mobileDropdownList}>
              <li><Link href="/preapproval/nxt-purchase" className={styles.mobileDropdownLink}>Apply now</Link></li>
              <li><Link href="/mortgage-rates" className={styles.mobileDropdownLink}>Purchase rates</Link></li>
              <li><Link href="/how-much-house-can-i-afford" className={styles.mobileDropdownLink}>Affordability calculator</Link></li>
              <li><Link href="/MortgageCalculator" className={styles.mobileDropdownLink}>Mortgage calculator</Link></li>
              <li><Link href="/rent-vs-buy-calculator" className={styles.mobileDropdownLink}>Rent vs buy calculator</Link></li>
              <li><Link href="/find-an-agent" className={styles.mobileDropdownLink}>Find an agent</Link></li>
              <li><Link href="/va-loan" className={styles.mobileDropdownLink}>VA loans</Link></li>
              <li><Link href="/content" className={styles.mobileDropdownLink}>Learning center</Link></li>
            </ul>
          </details>
          <details className={styles.mobileDropdown}>
            <summary className={styles.mobileLink}>
              Refinance
              <ChevronDown className={styles.mobileArrow} />
            </summary>
            <ul className={styles.mobileDropdownList}>
              <li><Link href="/preapproval/nxt-refinance" className={styles.mobileDropdownLink}>Apply Now</Link></li>
              <li><Link href="/refinance-rates" className={styles.mobileDropdownLink}>Refinance rates</Link></li>
              <li><Link href="/content/refinance-calculator" className={styles.mobileDropdownLink}>Cash-out refinance calculator</Link></li>
              <li><Link href="/content" className={styles.mobileDropdownLink}>Learning Center</Link></li>
            </ul>
          </details>
        </ul>
        <div className={styles.sidebarActions}>
          <Link href="/account/sign-in" className={styles.sidebarSignIn}>Sign in</Link>
          <Link href="/preapproval/98713ead-73f8-4a29-ae42-8f7529de0dfc" className={styles.sidebarContinue}>Continue</Link>
        </div>
      </div>
      <div className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.sidebarOverlayVisible : ''}`} onClick={toggleSidebar}></div>
    </header>
  );
}