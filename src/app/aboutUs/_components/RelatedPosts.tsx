import styles from './page.module.css';

const PostCard = ({ title, text, link }: { title: string, text: string, link: string }) => (
  <div className={styles.postCard}>
    <h3 className={styles.postCardTitle}>{title}</h3>
    <p className={styles.postCardText}>{text}</p>
    <a href={link} className={styles.postCardLink}>
      Read now
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </a>
  </div>
);

export default function RelatedPosts() {
    const posts = [
        { title: "The LGBTQ+ homeownership story in numbers", text: "The fight against LGBTQ+ housing discrimination has turned a corner. Learn your rights with the Better.com infographic on LGBTQ+ homeownership.", link: "/content/lgbt-housing-infographic" },
        { title: "Vishal Garg, Founder and CEO of Better", text: "Better.com CEO Vishal Garg has been interested in tech and lending for years. Here’s how he zeroed in on mortgages and made it easier for people to buy a home.", link: "/content/vishal-garg-better-ceo" },
        { title: "The Year of the Home: 2020 in Review", text: "In the socially distanced world of 2020, Better helped 88,100+ new clients navigate their homeownership journey with ease, confidence, and a ton of savings.", link: "/content/year-of-the-home-2020-review" },
        { title: "What is Better Mortgage?", text: "We launched Better Mortgage because the mortgage industry is broken. That's why we're making homebuying smarter, faster, and better from beginning to end.", link: "/content/what-is-better-mortgage" },
        { title: "Why I Started Better Mortgage", text: "Most founders have a story they pitch when asked about what their company does — something that ties their overall vision to an existing problem. But mine is pretty straightforward. In fact, you might have your own version of it, too.", link: "/content/the-house-that-got-away-why-i-started-better-mortgage" },
        { title: "Finding Home: Dan and Louise", text: "They didn’t think homeownership was in the cards. Now they’re living a life of leisure in Florida.", link: "/content/getting-home-the-gallaghers-testimonal" },
        { title: "Finding Home: Taisha", text: "A doctor and single parent, forced to downsize after divorce, navigates debt and damaged credit to provide a safe home for her family.", link: "/content/getting-home-taisha-johnson-testimonial" },
        { title: "How AI Mortgage Lending is Transforming the Home Loan Process", text: "Explore AI mortgage lending, its challenges, risk management, and how AI is transforming the industry with automation, fraud detection, and AI-powered brokers.", link: "/content/ai-mortgage-lending" },
        { title: "Self-employed? Here’s how to get a mortgage", text: "Here’s what our underwriters take into consideration when reviewing applications from self-employed borrowers.", link: "/content/self-employed-heres-how-to-get-a-mortgage" },
    ];
    
  return (
    <section className={styles.relatedPostsSection}>
      <div className={styles.relatedPostsContainer}>
        <div className={styles.relatedPostsHeader}>
          <h2 className={styles.relatedPostsTitle}>Related posts</h2>
        </div>
        <div className={styles.relatedPostsGrid}>
          {posts.map(post => <PostCard key={post.title} {...post} />)}
        </div>
      </div>
    </section>
  );
}