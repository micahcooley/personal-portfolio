import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './performance.module.css';

const performances = [
    { id: 1, title: 'Performance Title 1', role: 'Role / Position', venue: 'Theater Name', year: '2026', description: 'Detailed description of this performance, your involvement, the production process, and any notable achievements or experiences.' },
    { id: 2, title: 'Performance Title 2', role: 'Role / Position', venue: 'Theater Name', year: '2026', description: 'Detailed description of this performance, your involvement, the production process, and any notable achievements or experiences.' },
    { id: 3, title: 'Performance Title 3', role: 'Role / Position', venue: 'Theater Name', year: '2025', description: 'Detailed description of this performance, your involvement, the production process, and any notable achievements or experiences.' },
    { id: 4, title: 'Performance Title 4', role: 'Role / Position', venue: 'Theater Name', year: '2025', description: 'Detailed description of this performance, your involvement, the production process, and any notable achievements or experiences.' },
    { id: 5, title: 'Performance Title 5', role: 'Role / Position', venue: 'Theater Name', year: '2024', description: 'Detailed description of this performance, your involvement, the production process, and any notable achievements or experiences.' },
    { id: 6, title: 'Performance Title 6', role: 'Role / Position', venue: 'Theater Name', year: '2024', description: 'Detailed description of this performance, your involvement, the production process, and any notable achievements or experiences.' },
];

export const metadata = {
    title: 'Performance | Micah',
    description: 'Explore my theatrical performances and stage work.',
};

export default function PerformancePage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <span className={styles.label}>My Work</span>
                        <h1 className={styles.title}>Performance</h1>
                        <p className={styles.subtitle}>
                            A collection of my theatrical performances and stage work, showcasing my journey as a performer.
                        </p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className="container">
                        {/* Hot Topic Monologue Section */}
                        <article className={styles.monologueCard}>
                            <h2 className={styles.monologueTitle}>Hot Topic Monologue</h2>
                            <div className={styles.monologueContent}>
                                <p>To get to know me you must know these 3 things first.</p>
                                <p>
                                    I love crushing smarties into a fine powder before eating them, especially when I've
                                    pulverized them to the point where they are no longer crunchy at all and are more like
                                    a colorful sugar dust that you could blow off your hand. It also feels good when I eat
                                    them and it coats my mouth in such a satisfying way.
                                </p>
                                <p>
                                    I also love the feeling when I've been troubleshooting a tedious tech issue mostly
                                    because the dopamine rush I get when I finally fix it makes me feel like a god for
                                    fixing this annoying tech issue, but a catch with this is that a very short issue that
                                    I was able to fix in two seconds makes that feeling decrease significantly. I need the
                                    struggle to feel the reward.
                                </p>
                                <p>
                                    But I absolutely cannot stand when a dish is missing a specific layer of flavor like
                                    salt, spice, or acid because I will be focused on that little detail for the entire
                                    meal trying to force myself not to think about it. It's like bass in music. You don't
                                    notice it's missing until it's missing. This is why I step in a lot of times to do
                                    the finishing touches on dinner to make sure the flavor profile is complete.
                                </p>
                                <p>
                                    I also cant stand when people complain about stupid things. For example when my sister
                                    complains about a spider in her shower and starts full out crying about it until someone
                                    goes in there too remove it. I especially hate it because the solution to these types of
                                    situations are usually very easy or simply, not everyone else's problem and back to the
                                    spider example you can just remove it with a piece of toilet paper or just ignore it.
                                    It's not going to go out of its way to hurt you. If anything it should be scared of you
                                    because your a giant compared to it.
                                </p>
                                <p>
                                    So if you see me eating pulverized smarties while debugging a tech issue and critiquing
                                    the lack of salt in the family dinner, then just let me be because that's just who I am.
                                </p>
                            </div>
                        </article>

                        <div className={styles.grid}>
                            {performances.map((perf, index) => (
                                <article key={perf.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className={styles.imageWrapper}>
                                        <div className={`image-placeholder ${styles.imagePlaceholder}`}>
                                            <svg className="image-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                                <circle cx="8.5" cy="8.5" r="1.5" />
                                                <path d="M21 15l-5-5L5 21" />
                                            </svg>
                                            <span className={styles.placeholderLabel}>Performance Photo</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardHeader}>
                                            <h2 className={styles.cardTitle}>{perf.title}</h2>
                                            <span className={styles.year}>{perf.year}</span>
                                        </div>
                                        <p className={styles.role}>{perf.role}</p>
                                        <p className={styles.venue}>{perf.venue}</p>
                                        <p className={styles.description}>{perf.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
