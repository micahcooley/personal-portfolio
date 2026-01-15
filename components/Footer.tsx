import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.top}>
                    <Link href="/" className={styles.logo}>Micah</Link>

                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/performance" className={styles.navLink}>Performance</Link>
                        <Link href="/dramaturgy" className={styles.navLink}>Dramaturgy</Link>
                        <Link href="/stage-notes" className={styles.navLink}>Stage Notes</Link>
                        <Link href="/about" className={styles.navLink}>About</Link>
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>© {currentYear} Micah</p>
                    <a href="mailto:micahman0803@gmail.com" className={styles.email}>
                        micahman0803@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
