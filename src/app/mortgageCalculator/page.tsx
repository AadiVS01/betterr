'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AlignCenter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'; // npm install lucide-react
import { Swiper, SwiperSlide } from 'swiper/react'; // npm install swiper
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './page.module.css';

// --- Utility Functions ---
const formatNumber = (num: number | string): string => {
    const numericValue = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(numericValue)) return '0';
    return new Intl.NumberFormat('en-US').format(numericValue);
};

const parseFormattedNumber = (str: string): number => {
    const sanitized = str.replace(/[^0-9.]/g, '');
    const num = parseFloat(sanitized);
    return isNaN(num) ? 0 : num;
};


// --- Data for Static Sections ---
const stepsData = [
    {
      number: 1,
      title: 'Share a few details',
      description: 'Tell us about your income, credit, and home goals—it takes as little as 3 minutes and won’t affect your credit score.',
    },
    {
      number: 2,
      title: 'See your homebuying budget',
      description: 'In minutes, we’ll show you exactly how much you can get pre-approved for—so you know your price range before you shop.',
    },
    {
      number: 3,
      title: 'Get your pre-approval letter',
      description: 'Download your letter instantly and start touring homes with confidence (and a stronger offer in hand).',
    },
  ];

const expertOpinions = [
    {
        quote: "Should I wait for a better market?",
        description: "If you’re buying a home, focus on what works for your budget and lifestyle right now instead of waiting for the ‘perfect’ market. There are programs that can make things more affordable, and if rates drop later, you can always refinance.",
        name: "River Robertson",
        role: "Loan Consultant",
        nmlsId: "1698258",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fea37b90b89334a2ab1714e2159c75418%2Fe94ec6ef07b742ce9fcd987420e494e7"
    },
    {
        quote: "Is it true rates will drop?",
        description: "We’ve been hearing that for 3+ years, and many buyers have missed out on their dream home waiting for that ‘magic moment.’ Nobody has a crystal ball—if the home and payment fit your budget, it’s the right time.",
        name: "David Schultz",
        role: "Loan Consultant",
        nmlsId: "1952787",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fea37b90b89334a2ab1714e2159c75418%2Fe84f32b50c564f6b8d2fe9fb9aa01d6a"
    },
    {
        quote: "How should buyers handle scary market headlines?",
        description: "Often, the media headlines are inaccurate and sensationalized. Connect with a licensed loan officer who can help you sort through the noise and give you personalized advice based on your unique situation.",
        name: "Libby Owens",
        role: "Senior Loan Consultant",
        nmlsId: "2089666",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fea37b90b89334a2ab1714e2159c75418%2F5a3a349acdc640158bed98c296d8dfa5"
    }
]
const seoAccordionData = [
    { id: 'findPayments', title: 'How to find your payments with a mortgage calculator', content: 'Start with the total purchase price of the property you\'re considering. This number drives every other calculation. Your down payment size, property taxes, homeowners insurance, and potential PMI must also be added to each payment.'},
    { id: 'whatToDo', title: 'What you can do with this home payment calculator', content: 'This tool is a lab to test scenarios. See how different down payments and interest rates affect short-term and long-term costs before committing to a loan.'},
    { id: 'whatIncluded', title: 'What does a mortgage payment include?', content: 'Your payment covers principal (the loan balance) and interest (the cost of borrowing). Most lenders also use an escrow account to collect property taxes and homeowners insurance with your payment.'},
    { id: 'formula', title: 'Mortgage payment formula', content: 'The formula is M = P[r(1+r)^n]/[(1+r)^n-1], where P is the principal, r is the monthly interest rate, and n is the number of payments. Our calculator handles this automatically.'},
    { id: 'lowerPayments', title: 'How to lower monthly mortgage payments', content: 'Strategies include making a larger down payment to reduce the loan amount and eliminate PMI, extending your loan term (e.g., from 15 to 30 years), or shopping for different loan programs like FHA or VA.'}
];

// --- Main Page Component ---
export default function Home() {
  // State for calculator inputs
  const [homePrice, setHomePrice] = useState<number>(300000);
  const [downPayment, setDownPayment] = useState<number>(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number | string>(6.5);
  const [zipCode, setZipCode] = useState('10007');
  
  // State for additional costs
  const [propertyTaxes, setPropertyTaxes] = useState<number>(0);
  const [homeInsurance, setHomeInsurance] = useState<number>(0);
  const [hoaFees, setHoaFees] = useState<number>(0);

  // State for Utilities accordion
  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);
  const [includeUtilities, setIncludeUtilities] = useState(true);
  const [waterSewer, setWaterSewer] = useState<number>(0);
  const [gas, setGas] = useState<number>(0);
  const [internet, setInternet] = useState<number>(0);

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  // State for calculated values
  const [principalAndInterest, setPrincipalAndInterest] = useState(0);
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0);

  const utilitiesTotal = waterSewer + gas + internet;
   const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  }; 
  // --- Main Calculation Logic ---
  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = parseFloat(String(interestRate)) / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    let pAndI = 0;
    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      pAndI =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
    
    setPrincipalAndInterest(pAndI);

    let otherCosts = propertyTaxes + homeInsurance + hoaFees;
    if (includeUtilities) {
      otherCosts += utilitiesTotal;
    }
    setTotalMonthlyPayment(pAndI + otherCosts);
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTaxes, homeInsurance, hoaFees, utilitiesTotal, includeUtilities]);
  
  // --- Input Handlers ---
  const handleHomePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHomePrice = parseFormattedNumber(e.target.value);
    setHomePrice(newHomePrice);
    const newDownPayment = Math.round(newHomePrice * (downPaymentPercent / 100));
    setDownPayment(newDownPayment);
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFormattedNumber(e.target.value);
    setDownPayment(newAmount);
    if (homePrice > 0) {
      const newPercent = parseFloat(((newAmount / homePrice) * 100).toFixed(1));
      setDownPaymentPercent(isNaN(newPercent) ? 0 : newPercent);
    } else {
      setDownPaymentPercent(0);
    }
  };

  const handleDownPaymentPercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPercent = parseFormattedNumber(e.target.value);
    setDownPaymentPercent(newPercent);
    const newAmount = Math.round(homePrice * (newPercent / 100));
    setDownPayment(newAmount);
  };

   const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
          setInterestRate(value);
      }
  };
  
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 5) {
        setZipCode(value);
    }
  };

  const barData = [
    { value: principalAndInterest, color: '#015C3B' },
    { value: propertyTaxes, color: '#4A90E2' },
    { value: homeInsurance, color: '#7ED321' },
    { value: hoaFees, color: '#F5A623' },
    { value: includeUtilities ? utilitiesTotal : 0, color: '#D0021B' },
  ];

  return (
    <main>
      {/* Mortgage Calculator Section */}
     <section id='calculatorSection' data-header-color="#ffffffff" data-header-text-color="#313131" className={styles.calculatorSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Estimate your monthly mortgage payments</h1>
          
          <div className={styles.formContainer}>
            <div className={styles.formGrid}>
              <div className={`${styles.formItem} ${styles.colSpan2}`}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="homePrice">Home price</label>
                  <span>$</span>
                  <input id="homePrice" type="text" value={formatNumber(homePrice)} onChange={handleHomePriceChange} />
                </div>
              </div>
              <div className={`${styles.formItem} ${styles.colSpan3} ${styles.downPaymentGroup}`}>
                <div className={styles.downPaymentDollars}>
                  <div className={styles.inputWrapper}>
                    <label htmlFor="downPayment">Down payment</label>
                    <span >$</span>
                    <input id="downPayment" type="text" value={formatNumber(downPayment)} onChange={handleDownPaymentChange} />
                  </div>
                </div>
                <div className={styles.downPaymentPercent}>
                  <div className={styles.inputWrapper}>
                    <input id="downPaymentPercent" type="text" value={downPaymentPercent} onChange={handleDownPaymentPercentChange} />
                    <span className={styles.alignRight}>%</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.formItem} ${styles.colSpan2}`}>
                <div className={styles.selectWrapper}>
                  <label htmlFor="loanTerm">Length of loan</label>
                  <select id="loanTerm" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}>
                    <option value="30">30 years</option>
                    <option value="20">20 years</option>
                    <option value="15">15 years</option>
                  </select>
                </div>
              </div>
              <div className={`${styles.formItem} ${styles.colSpan2}`}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="interestRate">Interest rate</label>
                  <input id="interestRate" type="text" value={interestRate} onChange={handleInterestRateChange} />
                    <span className={styles.alignRight}>%</span>
                </div>
              </div>
              <div className={`${styles.formItem} ${styles.colSpan1}`}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="zipCode">ZIP code</label>
                  <input id="zipCode" type="text" maxLength={5} value={zipCode} onChange={handleZipChange} />
                </div>
              </div>
              <div className={`${styles.formItem} ${styles.colSpanFull}`}>
                <input type="range" min="50000" max="3000000" step="1000" value={homePrice} onChange={handleHomePriceChange} className={styles.rangeSlider} />
              </div>
            </div>
            
            <div className={styles.summarySide}>
              <p className={styles.summaryLabel}>Monthly payment</p>
              <div className={styles.summaryAmount}>${formatNumber(Math.round(totalMonthlyPayment))}/mo</div>
              <a href="/preapproval/nxt-purchase" className={styles.ctaButton}>Get pre-approved</a>
            </div>
          </div>

          <div className={styles.breakdownContainer}>
            <div className={styles.breakdownLeft}>
              <h4 className={styles.breakdownTitle}>Monthly payment breakdown</h4>
              <p className={styles.breakdownTotal}>${formatNumber(Math.round(totalMonthlyPayment))}/mo</p>
              <div className={styles.breakdownBar}>
                {barData.map((item, index) =>
                  item.value > 0 && (
                    <div
                      key={index}
                      className={styles.barSegment}
                      style={{ width: `${(item.value / totalMonthlyPayment) * 100}%`, backgroundColor: item.color }}
                    >
                      {((item.value / totalMonthlyPayment) * 100) > 10 && `${Math.round((item.value / totalMonthlyPayment) * 100)}%`}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.breakdownRight}>
              <div className={styles.breakdownRow}>
                <div className={styles.breakdownLabel}><span className={styles.colorPill} style={{ backgroundColor: '#015C3B' }}></span>Principal & interest</div>
                <div className={styles.breakdownValue}>${formatNumber(Math.round(principalAndInterest))}</div>
              </div>
              <div className={styles.breakdownRow}>
                <div className={styles.breakdownLabel}><span className={styles.colorPill} style={{ backgroundColor: '#4A90E2' }}></span>Property taxes</div>
                <div className={styles.breakdownInput}><span>$</span><input type="text" value={propertyTaxes} onChange={(e) => setPropertyTaxes(parseFormattedNumber(e.target.value))} /></div>
              </div>
              <div className={styles.breakdownRow}>
                <div className={styles.breakdownLabel}><span className={styles.colorPill} style={{ backgroundColor: '#7ED321' }}></span>Homeowners insurance</div>
                <div className={styles.breakdownInput}><span>$</span><input type="text" value={homeInsurance} onChange={(e) => setHomeInsurance(parseFormattedNumber(e.target.value))} /></div>
              </div>
              <div className={styles.breakdownRow}>
                <div className={styles.breakdownLabel}><span className={styles.colorPill} style={{ backgroundColor: '#F5A623' }}></span>HOA fees</div>
                <div className={styles.breakdownInput}><span>$</span><input type="text" value={hoaFees} onChange={(e) => setHoaFees(parseFormattedNumber(e.target.value))} /></div>
              </div>

              <div className={styles.accordionItem}>
                <button className={styles.accordionHeader} onClick={() => setIsUtilitiesOpen(!isUtilitiesOpen)}>
                  <div className={styles.breakdownLabel}><span className={styles.colorPill} style={{ backgroundColor: '#D0021B' }}></span>Utilities</div>
                  <div className={styles.breakdownValue}>${formatNumber(utilitiesTotal)}/mo <ChevronDown className={`${styles.accordionIcon} ${isUtilitiesOpen ? styles.accordionIconOpen : ''}`} /></div>
                </button>
                <div className={`${styles.accordionContent} ${isUtilitiesOpen ? styles.accordionContentOpen : ''}`}>
                  <div className={styles.accordionInnerContent}>
                    <div className={styles.breakdownRow}>
                      <div className={styles.breakdownLabel}>Water/Sewer</div>
                      <div className={styles.breakdownInput}><span>$</span><input type="text" value={waterSewer} onChange={(e) => setWaterSewer(parseFormattedNumber(e.target.value))} /></div>
                    </div>
                    <div className={styles.breakdownRow}>
                      <div className={styles.breakdownLabel}>Gas</div>
                      <div className={styles.breakdownInput}><span>$</span><input type="text" value={gas} onChange={(e) => setGas(parseFormattedNumber(e.target.value))} /></div>
                    </div>
                    <div className={styles.breakdownRow}>
                      <div className={styles.breakdownLabel}>Internet</div>
                      <div className={styles.breakdownInput}><span>$</span><input type="text" value={internet} onChange={(e) => setInternet(parseFormattedNumber(e.target.value))} /></div>
                    </div>
                    <div className={styles.checkboxRow}>
                      <input type="checkbox" id="include-utilities" checked={includeUtilities} onChange={(e) => setIncludeUtilities(e.target.checked)} />
                      <label htmlFor="include-utilities">Include utilities in payment</label>
                    </div>
                  </div>
                </div>
              </div>

              <button className={styles.copyButton}>Copy estimate link</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <h2 className={styles.stepsSectionTitle}>Simple steps to get pre-approved</h2>
        <div className={styles.stepsGrid}>
          {stepsData.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Experts Opinions Section */}
      <section className={styles.expertsSection}>
          <div className={styles.container}>
              <div className={styles.expertsHeader}>
                  <h2 className={styles.expertsTitle}>Expert opinions</h2>
                  <div className={styles.swiperNav}>
                      <button className="experts-swiper-button-prev"><ChevronLeft /></button>
                      <button className="experts-swiper-button-next"><ChevronRight /></button>
                  </div>
              </div>
              <Swiper
                  modules={[Navigation]}
                  navigation={{
                      nextEl: '.experts-swiper-button-next',
                      prevEl: '.experts-swiper-button-prev',
                  }}
                  spaceBetween={24}
                  slidesPerView={1}
                  breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                  }}
              >
                  {expertOpinions.map((expert, index) => (
                      <SwiperSlide key={index} className={styles.expertCard}>
                          <div>
                              <h3 className={styles.expertQuote}>{expert.quote}</h3>
                              <p className={styles.expertDescription}>{expert.description}</p>
                          </div>
                          <div className={styles.expertInfo}>
                              <Image src={expert.image} alt={expert.name} width={50} height={50} className={styles.expertImage} />
                              <div>
                                  <h5 className={styles.expertName}>{expert.name}</h5>
                                  <p className={styles.expertRole}>{expert.role}</p>
                                  <p className={styles.expertRole}>NMLS #{expert.nmlsId}</p>
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
      </section>
      <section className={styles.seoSection}>
        <div className={styles.container}>
            <div className={styles.seoHeader}>
                <h2>Mortgage Calculator with PMI & Taxes</h2>
                <p>A mortgage calculator for home loans can show your true monthly housing costs before you commit to a home loan. These tools are invaluable for comparing loan scenarios — and Better makes it easy by doing the heavy lifting for you.</p>
            </div>
            <div className={styles.accordionContainer}>
                {seoAccordionData.map((item) => (
                    <div key={item.id} className={styles.accordionItem}>
                        <button className={styles.accordionHeader} onClick={() => toggleAccordion(item.id)}>
                            <span>{item.title}</span>
                            <ChevronDown className={`${styles.accordionIcon} ${openAccordion === item.id ? styles.accordionIconOpen : ''}`} />
                        </button>
                        <div className={`${styles.accordionContent} ${openAccordion === item.id ? styles.accordionContentOpen : ''}`}>
                            <div className={styles.accordionInnerContent}>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
}


