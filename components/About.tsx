'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './About.module.css';

export default function About() {
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
        <section id="about" ref={sectionRef} className={styles.section}>
            <div className="container">
                <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <span className="section-label">Get to Know Me</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
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
                        <h3 className={styles.name}>Hello, I'm Micah</h3>
                        <p className={styles.bio}>
                            I am a theater artist and dramaturg passionate about bringing stories to life on stage.
                            With a background in performance and theatrical research, I bring both creative energy
                            and analytical depth to every project.
                        </p>
                        <p className={styles.bio}>
                            My work spans performance, dramaturgy, and stage management, allowing me to contribute
                            to productions from multiple perspectives. I believe in the transformative power of
                            theater to connect, challenge, and inspire audiences.
                        </p>

                        <div className={styles.highlights}>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightNumber}>—</span>
                                <span className={styles.highlightText}>Years of Experience</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightNumber}>—</span>
                                <span className={styles.highlightText}>Productions</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.highlightNumber}>—</span>
                                <span className={styles.highlightText}>Theaters Worked With</span>
                            </div>
                        </div>

                        <div className={styles.contact}>
                            <h4 className={styles.contactTitle}>Get in Touch</h4>
                            <a href="mailto:your@email.com" className={styles.email}>
                                your@email.com
                            </a>
                            <div className={styles.socials}>
                                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
