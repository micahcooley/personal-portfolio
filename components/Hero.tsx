'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Interactive cursor follower
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const hero = heroRef.current;
        if (hero) {
            hero.addEventListener('mousemove', handleMouseMove);
            return () => hero.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Text scramble effect on hover
    const handleNameHover = (e: React.MouseEvent<HTMLHeadingElement>) => {
        const target = e.currentTarget;
        const originalText = 'Micah';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let iteration = 0;

        const interval = setInterval(() => {
            target.innerText = originalText
                .split('')
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * 26)];
                })
                .join('');

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2;
        }, 40);
    };

    return (
        <section ref={heroRef} className={styles.hero}>
            {/* Interactive cursor spotlight */}
            <div
                className={styles.spotlight}
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                }}
            />

            <div className={`container ${styles.heroContent}`}>
                <div ref={textRef} className={styles.heroText}>
                    <h1
                        className={styles.name}
                        onMouseEnter={handleNameHover}
                    >
                        Micah
                    </h1>
                    <div className={styles.titleWrapper}>
                        <span className={styles.titleLine}></span>
                        <h2 className={styles.title}>Theater Artist & Dramaturg</h2>
                        <span className={styles.titleLine}></span>
                    </div>
                    <p className={styles.description}>
                        Bringing stories to life through performance, research, and the art of storytelling on stage.
                    </p>
                    <div className={styles.cta}>
                        <Link href="/performance" className="btn btn-primary">
                            View My Work
                        </Link>
                        <Link href="/about" className="btn btn-secondary">
                            About Me
                        </Link>
                    </div>
                </div>

                <div className={styles.heroVisual}>
                    <div className={styles.imageFrame}>
                        <div className={`image-placeholder ${styles.profilePlaceholder}`}>
                            <svg className="image-placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg>
                            <span className={styles.placeholderText}>Profile Photo</span>
                        </div>

                        {/* Interactive corner accents */}
                        <div className={styles.cornerTL}></div>
                        <div className={styles.cornerBR}></div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className={styles.floatingShape1}></div>
                    <div className={styles.floatingShape2}></div>
                </div>
            </div>

            {/* Interactive marquee at bottom */}
            <div className={styles.marqueeContainer}>
                <div className={styles.marquee}>
                    <span>Performance</span>
                    <span className={styles.dot}>·</span>
                    <span>Dramaturgy</span>
                    <span className={styles.dot}>·</span>
                    <span>Storytelling</span>
                    <span className={styles.dot}>·</span>
                    <span>Stage Notes</span>
                    <span className={styles.dot}>·</span>
                    <span>Performance</span>
                    <span className={styles.dot}>·</span>
                    <span>Dramaturgy</span>
                    <span className={styles.dot}>·</span>
                    <span>Storytelling</span>
                    <span className={styles.dot}>·</span>
                    <span>Stage Notes</span>
                    <span className={styles.dot}>·</span>
                </div>
            </div>
        </section>
    );
}
