import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './dramaturgy.module.css';

export const metadata = {
    title: 'Dramaturgy | Micah',
    description: 'Dramaturgical research, script analysis, and production support work.',
};

export default function DramaturgyPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <span className={styles.label}>Research & Analysis</span>
                        <h1 className={styles.title}>Dramaturgy</h1>
                        <p className={styles.subtitle}>
                            Dramaturgical research, script analysis, and production support work.
                        </p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className="container">
                        <div className={styles.emptyState}>
                            <p>Content coming soon.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
