'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Dramaturgy.module.css';

const projects = [
    { id: 1, title: 'Project Title 1', production: 'Production Name', description: 'Brief description of dramaturgical work and research contributions.' },
    { id: 2, title: 'Project Title 2', production: 'Production Name', description: 'Brief description of dramaturgical work and research contributions.' },
    { id: 3, title: 'Project Title 3', production: 'Production Name', description: 'Brief description of dramaturgical work and research contributions.' },
    { id: 4, title: 'Project Title 4', production: 'Production Name', description: 'Brief description of dramaturgical work and research contributions.' },
];

export default function Dramaturgy() {
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
        <section id="dramaturgy" ref={sectionRef} className={styles.section}>
            <div className="container">
                <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <span className="section-label">Research & Analysis</span>
                    <h2 className="section-title">Dramaturgy</h2>
                    <p className="section-subtitle">
                        Dramaturgical research, script analysis, and production support work
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.imageSection}>
                                    <div className={`image-placeholder ${styles.imagePlaceholder}`}>
                                        <svg className="image-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                            <line x1="8" y1="6" x2="16" y2="6" />
                                            <line x1="8" y1="10" x2="14" y2="10" />
                                        </svg>
                                        <span className={styles.placeholderLabel}>Production Image</span>
                                    </div>
                                </div>
                                <div className={styles.textSection}>
                                    <span className={styles.production}>{project.production}</span>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                    <button className={styles.readMore}>
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
