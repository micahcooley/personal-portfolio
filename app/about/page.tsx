import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export const metadata = {
    title: 'About Me | Micah',
    description: 'Learn more about Micah - theater artist, musician, developer, and home cook.',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <span className={styles.label}>Get to Know Me</span>
                        <h1 className={styles.title}>About Me</h1>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className="container">
                        <div className={styles.grid}>
                            <div className={styles.imageColumn}>
                                <div className={styles.imageFrame}>
                                    <div className={`image-placeholder ${styles.imagePlaceholder}`}>
                                        <svg className="image-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <circle cx="12" cy="8" r="4" />
                                            <path d="M20 21a8 8 0 10-16 0" />
                                        </svg>
                                        <span className={styles.placeholderLabel}>About Photo</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.textColumn}>
                                <h2 className={styles.name}>Hello, I'm Micah</h2>

                                <div className={styles.intro}>
                                    <p>
                                        I'm a creative at heart with passions that span the stage, the studio, the kitchen, and the screen. While theater remains a core part of who I am as an artist and dramaturg, my curiosity has always pushed me to explore new ways of creating and connecting with others.
                                    </p>
                                </div>

                                {/* Passion Sections */}
                                <div className={styles.passions}>

                                    {/* Music */}
                                    <div className={styles.passionSection}>
                                        <div className={styles.passionHeader}>
                                            <div className={styles.passionIconWrapper}>
                                                <svg className={styles.passionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 18V5l12-2v13" />
                                                    <circle cx="6" cy="18" r="3" />
                                                    <circle cx="18" cy="16" r="3" />
                                                </svg>
                                            </div>
                                            <h3 className={styles.passionTitle}>Music</h3>
                                        </div>
                                        <p className={styles.passionText}>
                                            Music has always been a part of my life. Whether I'm producing tracks on my computer, laying down bass lines, or finding melodies on the piano and keys, making music is where I find flow and escape. There's something about building a song from nothing that never gets old.
                                        </p>
                                    </div>

                                    {/* Cooking */}
                                    <div className={styles.passionSection}>
                                        <div className={styles.passionHeader}>
                                            <div className={styles.passionIconWrapper}>
                                                <svg className={styles.passionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 2L12 6" />
                                                    <path d="M12 22L12 18" />
                                                    <path d="M4.93 4.93l2.83 2.83" />
                                                    <path d="M16.24 16.24l2.83 2.83" />
                                                    <path d="M2 12h4" />
                                                    <path d="M18 12h4" />
                                                    <path d="M4.93 19.07l2.83-2.83" />
                                                    <path d="M16.24 7.76l2.83-2.83" />
                                                    <circle cx="12" cy="12" r="4" />
                                                </svg>
                                            </div>
                                            <h3 className={styles.passionTitle}>Cooking</h3>
                                        </div>
                                        <p className={styles.passionText}>
                                            I love cooking, especially making homemade pasta from scratch. There's a meditative quality to kneading dough by hand, rolling it out, and turning simple ingredients into something like a rich carbonara or a perfectly sauced dish. For me, cooking is another form of creative expression.
                                        </p>
                                    </div>

                                    {/* App Development */}
                                    <div className={styles.passionSection}>
                                        <div className={styles.passionHeader}>
                                            <div className={styles.passionIconWrapper}>
                                                <svg className={styles.passionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="16 18 22 12 16 6" />
                                                    <polyline points="8 6 2 12 8 18" />
                                                    <line x1="12" y1="2" x2="12" y2="22" />
                                                </svg>
                                            </div>
                                            <h3 className={styles.passionTitle}>App Development</h3>
                                        </div>
                                        <p className={styles.passionText}>
                                            I founded <a href="https://sylorlabs.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Sylor Labs</a> to combine my love for music and technology. Through my company, I'm developing two major projects: <strong>Zenith</strong>, a professional digital audio workstation designed to compete with industry standards at an accessible $100 price point, and <strong>Drey</strong>, a completely free web-based DAW for beginners.
                                        </p>
                                        <p className={styles.passionText}>
                                            My goal with Sylor Labs is to create a natural ecosystem where newcomers can start with Drey without barriers, and eventually graduate to the advanced power of Zenith—making professional music production accessible to everyone.
                                        </p>
                                    </div>

                                </div>

                                {/* Contact */}
                                <div className={styles.contact}>
                                    <h3 className={styles.contactTitle}>Get in Touch</h3>
                                    <p className={styles.contactText}>
                                        Contact me at{' '}
                                        <a href="mailto:micahman0803@gmail.com" className={styles.email}>
                                            micahman0803@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
