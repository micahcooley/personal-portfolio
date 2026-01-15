'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const dramaLinks = [
    { href: '/performance', label: 'Performance' },
    { href: '/dramaturgy', label: 'Dramaturgy' },
    { href: '/stage-notes', label: 'Stage Notes' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDramaOpen, setIsDramaOpen] = useState(false);
    const pathname = usePathname();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
        setIsDramaOpen(false);
    };

    const handleDramaMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsDramaOpen(true);
    };

    const handleDramaMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDramaOpen(false);
        }, 150);
    };

    const isDramaActive = pathname === '/performance' || pathname === '/dramaturgy' || pathname === '/stage-notes';

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.headerContainer}`}>
                <Link href="/" className={styles.logo} onClick={handleNavClick}>
                    Micah
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        {/* Drama Dropdown - contains Performance, Dramaturgy, Stage Notes */}
                        <li
                            className={styles.dropdownContainer}
                            onMouseEnter={handleDramaMouseEnter}
                            onMouseLeave={handleDramaMouseLeave}
                        >
                            <button
                                className={`${styles.navLink} ${styles.dropdownTrigger} ${isDramaActive ? styles.active : ''}`}
                                onClick={() => setIsDramaOpen(!isDramaOpen)}
                            >
                                Drama
                                <svg
                                    className={`${styles.dropdownIcon} ${isDramaOpen ? styles.open : ''}`}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            <div className={`${styles.dropdown} ${isDramaOpen ? styles.dropdownOpen : ''}`}>
                                {dramaLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`${styles.dropdownLink} ${pathname === link.href ? styles.active : ''}`}
                                        onClick={handleNavClick}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
                                onClick={handleNavClick}
                            >
                                About Me
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.headerRight}>
                    <ThemeToggle />
                    <button
                        className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.menuActive : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
