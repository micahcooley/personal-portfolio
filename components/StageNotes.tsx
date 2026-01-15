'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './StageNotes.module.css';

const notes = [
    { id: 1, title: 'Note Title 1', date: 'January 2024', excerpt: 'A brief insight or reflection on a theatrical topic, production process, or artistic discovery...' },
    { id: 2, title: 'Note Title 2', date: 'December 2023', excerpt: 'A brief insight or reflection on a theatrical topic, production process, or artistic discovery...' },
    { id: 3, title: 'Note Title 3', date: 'November 2023', excerpt: 'A brief insight or reflection on a theatrical topic, production process, or artistic discovery...' },
];

export default function StageNotes() {
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
        <section id="stage-notes" ref={sectionRef} className={styles.section}>
            <div className="container">
                <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <span className="section-label">Thoughts & Reflections</span>
                    <h2 className="section-title">Stage Notes</h2>
                    <p className="section-subtitle">
                        Personal reflections, insights, and writings on theater and performance
                    </p>
                </div>

                <div className={styles.grid}>
                    {notes.map((note, index) => (
                        <article
                            key={note.id}
                            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.imageWrapper}>
                                <div className={`image-placeholder ${styles.imagePlaceholder}`}>
                                    <svg className="image-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14,2 14,8 20,8" />
                                        <line x1="8" y1="13" x2="16" y2="13" />
                                        <line x1="8" y1="17" x2="14" y2="17" />
                                    </svg>
                                    <span className={styles.placeholderLabel}>Cover Image</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{note.date}</span>
                                <h3 className={styles.title}>{note.title}</h3>
                                <p className={styles.excerpt}>{note.excerpt}</p>
                                <button className={styles.readMore}>
                                    Read Article
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
