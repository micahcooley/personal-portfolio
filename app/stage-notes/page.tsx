import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './stage-notes.module.css';

const notes = [
    {
        id: 1,
        title: 'Note Title 1',
        date: 'January 2026',
        excerpt: 'A brief preview of the content of this stage note...',
        content: 'Full detailed content of this stage note. This is where you can share your thoughts, reflections, and insights about a particular theatrical topic, production experience, or artistic discovery. Include your personal perspective and any lessons learned that might resonate with fellow theater practitioners and enthusiasts.',
        tags: ['Reflection', 'Production']
    },
    {
        id: 2,
        title: 'Note Title 2',
        date: 'December 2025',
        excerpt: 'A brief preview of the content of this stage note...',
        content: 'Full detailed content of this stage note. This is where you can share your thoughts, reflections, and insights about a particular theatrical topic, production experience, or artistic discovery. Include your personal perspective and any lessons learned that might resonate with fellow theater practitioners and enthusiasts.',
        tags: ['Process', 'Collaboration']
    },
    {
        id: 3,
        title: 'Note Title 3',
        date: 'November 2025',
        excerpt: 'A brief preview of the content of this stage note...',
        content: 'Full detailed content of this stage note. This is where you can share your thoughts, reflections, and insights about a particular theatrical topic, production experience, or artistic discovery. Include your personal perspective and any lessons learned that might resonate with fellow theater practitioners and enthusiasts.',
        tags: ['Dramaturgy', 'Research']
    },
];

export const metadata = {
    title: 'Stage Notes | Micah',
    description: 'Personal reflections, insights, and writings on theater and performance.',
};

export default function StageNotesPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className="container">
                        <span className={styles.label}>Thoughts & Reflections</span>
                        <h1 className={styles.title}>Stage Notes</h1>
                        <p className={styles.subtitle}>
                            Personal reflections, insights, and writings on theater, performance, and the creative process.
                        </p>
                    </div>
                </section>

                <section className={styles.content}>
                    <div className="container">
                        <div className={styles.grid}>
                            {notes.map((note, index) => (
                                <article key={note.id} className={styles.card} style={{ animationDelay: `${index * 0.15}s` }}>
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
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardMeta}>
                                            <span className={styles.date}>{note.date}</span>
                                            <div className={styles.tags}>
                                                {note.tags.map((tag, i) => (
                                                    <span key={i} className={styles.tag}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <h2 className={styles.cardTitle}>{note.title}</h2>
                                        <p className={styles.cardContent}>{note.content}</p>
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
