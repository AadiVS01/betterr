import React from 'react';
import styles from './page.module.css';

interface TimelineItemProps {
  year: string;
  descriptions: React.ReactNode[];
  alignment: 'left' | 'right';
}

export default function TimelineItem({ year, descriptions, alignment }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineYear}>
        <h3>{year}</h3>
      </div>
      {descriptions.map((desc, index) => (
        <div key={index} className={`${styles.timelineCard} ${styles[alignment]}`}>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
}