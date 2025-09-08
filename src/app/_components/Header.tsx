'use client';

import React, { useState, useEffect } from 'react';
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
          <a href="/" className={styles.logoLink}>
            {/* SVG for Better Logo */}
          </a>
          <ul className={styles.desktopNav}>
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
        <button className={styles.hamburgerButton} onClick={toggleSidebar}>
          <Menu />
        </button>
        <ul className={styles.navActions}>
          <li className={styles.navItem}>
            <a href="/account/sign-in" className={styles.navLink}>Sign in</a>
          </li>
          <li className={styles.navItem}>
            <a href="/preapproval/98713ead-73f8-4a29-ae42-8f7529de0dfc" className={styles.continueButton}>Continue</a>
          </li>
        </ul>
      </nav>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <a href="/" className={styles.sidebarLogo}>
            {/* SVG for Better Logo */}
          </a>
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
              <li><a href="/preapproval/nxt-purchase" className={styles.mobileDropdownLink}>Apply now</a></li>
              <li><a href="/mortgage-rates" className={styles.mobileDropdownLink}>Purchase rates</a></li>
              <li><a href="/how-much-house-can-i-afford" className={styles.mobileDropdownLink}>Affordability calculator</a></li>
              <li><a href="/b/calculators/mortgage-calculator" className={styles.mobileDropdownLink}>Mortgage calculator</a></li>
              <li><a href="/rent-vs-buy-calculator" className={styles.mobileDropdownLink}>Rent vs buy calculator</a></li>
              <li><a href="/find-an-agent" className={styles.mobileDropdownLink}>Find an agent</a></li>
              <li><a href="/va-loan" className={styles.mobileDropdownLink}>VA loans</a></li>
              <li><a href="/content" className={styles.mobileDropdownLink}>Learning center</a></li>
            </ul>
          </details>
          <details className={styles.mobileDropdown}>
            <summary className={styles.mobileLink}>
              Refinance
              <ChevronDown className={styles.mobileArrow} />
            </summary>
            <ul className={styles.mobileDropdownList}>
              <li><a href="/preapproval/nxt-refinance" className={styles.mobileDropdownLink}>Apply Now</a></li>
              <li><a href="/refinance-rates" className={styles.mobileDropdownLink}>Refinance rates</a></li>
              <li><a href="/content/refinance-calculator" className={styles.mobileDropdownLink}>Cash-out refinance calculator</a></li>
              <li><a href="/content" className={styles.mobileDropdownLink}>Learning Center</a></li>
            </ul>
          </details>
        </ul>
        <div className={styles.sidebarActions}>
          <a href="/account/sign-in" className={styles.sidebarSignIn}>Sign in</a>
          <a href="/preapproval/98713ead-73f8-4a29-ae42-8f7529de0dfc" className={styles.sidebarContinue}>Continue</a>
        </div>
      </div>
      <div className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.sidebarOverlayVisible : ''}`} onClick={toggleSidebar}></div>
    </header>
  );
}