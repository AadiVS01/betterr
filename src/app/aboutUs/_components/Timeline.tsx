import styles from './page.module.css';
import TimelineItem from './TimelineItem';

export default function Timeline() {
  const timelineData = [
    {
      year: '2014',
      descriptions: [
        'After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.',
      ],
      alignment: 'left',
    },
    {
      year: '2015',
      descriptions: [
        'Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).',
      ],
      alignment: 'right',
    },
    {
      year: '2016',
      descriptions: [
        'Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.',
      ],
      alignment: 'left',
    },
    {
      year: '2017',
      descriptions: ['Better expands into the real estate market with Better Real Estate.'],
      alignment: 'right',
    },
    {
      year: '2018',
      descriptions: ['Better Mortgage partners with Ally Bank to build Ally powered by Better.'],
      alignment: 'left',
    },
    {
      year: '2019',
      descriptions: [
        'Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.',
      ],
      alignment: 'right',
    },
    {
      year: '2022',
      descriptions: [
        'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.',
      ],
      alignment: 'left',
    },
    {
      year: '2023',
      descriptions: [
        <>
          Better Mortgage launches One Day Mortgage¹: The first offering to
          customers to go from application to{' '}
          <a href="/with/one-day-mortgage-terms">
            full mortgage Commitment Letter within 24 hours
          </a>{' '}
          vs. typical industry process of 30+ days.
        </>,
        'Better Mortgage launches the fully digital 3-day HELOC².',
        'Better Mortgage launches One Day Verified Approval Letter.',
      ],
      alignment: 'right',
    },
    {
        year: 'Today',
        descriptions: [
            <>
            You become part of the story by joining tens of thousands of happy
            Better Mortgage borrowers.
            <a href="/start" className={styles.getStartedButton}>
                Get started
            </a>
            </>
        ],
        alignment: 'left',
    }
  ];

  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.timelineTitle}>Company timeline</h2>
      <div className={styles.timelineContainer}>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            descriptions={item.descriptions}
            alignment={item.alignment as 'left' | 'right'}
          />
        ))}
      </div>
    </section>
  );
}