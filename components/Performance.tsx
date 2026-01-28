'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Performance.module.css';

const performances = [
    { id: 1, title: 'Performance Title 1', role: 'Role / Position', venue: 'Theater Name', year: '2024' },
    { id: 2, title: 'Performance Title 2', role: 'Role / Position', venue: 'Theater Name', year: '2024' },
    { id: 3, title: 'Performance Title 3', role: 'Role / Position', venue: 'Theater Name', year: '2023' },
    { id: 4, title: 'Performance Title 4', role: 'Role / Position', venue: 'Theater Name', year: '2023' },
    { id: 5, title: 'Performance Title 5', role: 'Role / Position', venue: 'Theater Name', year: '2022' },
    { id: 6, title: 'Performance Title 6', role: 'Role / Position', venue: 'Theater Name', year: '2022' },
];

export default function Performance() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="performance" ref={sectionRef} className={styles.section}>
            <div className="container">
                <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">Performance</h2>
                    <p className="section-subtitle">
                        A collection of my theatrical performances and stage work
                    </p>
                </div>

                <div className={styles.grid}>
                    {performances.map((perf, index) => (
                        <div
                            key={perf.id}
                            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
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
                                <h3 className={styles.title}>{perf.title}</h3>
                                <p className={styles.role}>{perf.role}</p>
                                <div className={styles.meta}>
                                    <span className={styles.venue}>{perf.venue}</span>
                                    <span className={styles.year}>{perf.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Monologue Section */}
                <div className={`${styles.monologueSection} ${isVisible ? styles.visible : ''}`}>
                    <h3 className={styles.monologueTitle}>Hot Topic Monologue</h3>
                    <div className={styles.monologueContent}>
                        <p>
                            To get to know me you must know these 4 things first.
                        </p>
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
                            goes in there too remove it. I especially hate it because the solution to these types
                            of situations are usually very easy or simply, not everyone else's problem and back to
                            the spider example you can just remove it with a piece of toilet paper or just ignore it.
                            It's not going to go out of its way to hurt you. If anything it should be scared of you
                            because your a giant compared to it.
                        </p>
                        <p>
                            So if you see me eating pulverized smarties while debugging a tech issue, critiquing
                            the lack of salt in the family dinner, or ignoring someone crying about a spider, then
                            just let me be because that's just who I am.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
