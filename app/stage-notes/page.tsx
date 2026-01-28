import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './stage-notes.module.css';

const rasas = [
    {
        name: 'Shringara',
        meaning: 'Love and Beauty',
        description: 'This is the feeling of romance and attraction. Think of that warm flutter you get when you see someone you care about or when you experience something truly beautiful.'
    },
    {
        name: 'Hasya',
        meaning: 'Joy and Laughter',
        description: 'Pure happiness and humor. Its that lightness you feel when you laugh with friends or find genuine delight in a moment.'
    },
    {
        name: 'Karuna',
        meaning: 'Compassion and Sorrow',
        description: 'The deep feeling of empathy when you witness pain or loss. It connects us to others through our shared experiences of grief and care.'
    },
    {
        name: 'Raudra',
        meaning: 'Anger and Rage',
        description: 'That fiery intensity when something feels unjust or when passion overtakes calm. Its powerful and demands to be expressed.'
    },
    {
        name: 'Veera',
        meaning: 'Courage and Heroism',
        description: 'The bold energy that pushes you forward despite fear. Its confidence and determination rolled into one.'
    },
    {
        name: 'Bhayanaka',
        meaning: 'Fear and Terror',
        description: 'That gripping sensation when danger feels close. Your heart races, your senses sharpen, and everything feels urgent.'
    },
    {
        name: 'Bibhatsa',
        meaning: 'Disgust and Aversion',
        description: 'The strong reaction to something deeply unpleasant. Its your instinct pulling you away from what feels wrong or offensive.'
    },
    {
        name: 'Adbhuta',
        meaning: 'Wonder and Amazement',
        description: 'That breathless moment when you encounter something extraordinary. Pure awe that makes the world feel magical.'
    },
    {
        name: 'Shanta',
        meaning: 'Peace and Serenity',
        description: 'Complete stillness and calm. Its the quiet contentment that comes when everything feels balanced and right.'
    }
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
                        {/* Rasaboxes Section */}
                        <div className={styles.rasaboxesSection}>
                            <h2 className={styles.rasaboxesHeadline}>Understanding Rasaboxes</h2>

                            <div className={styles.rasaboxesIntro}>
                                <p>
                                    Rasaboxes is a training technique used by actors to explore and embody different emotional states.
                                    The idea comes from ancient Indian theater theory where emotions are mapped out into specific categories called rasas.
                                    In practice you literally step into boxes drawn on the floor, each box representing a different emotion.
                                    When you enter a box you commit fully to that feeling in your body and voice.
                                    Its a physical way to understand emotions rather than just thinking about them.
                                    The technique helps actors access genuine feelings quickly and teaches you how emotions live in your body not just your head.
                                </p>
                            </div>

                            <h3 className={styles.rasasTitle}>The Nine Rasas</h3>

                            <div className={styles.rasasGrid}>
                                {rasas.map((rasa, index) => (
                                    <div
                                        key={rasa.name}
                                        className={styles.rasaCard}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <h4 className={styles.rasaName}>{rasa.name}</h4>
                                        <span className={styles.rasaMeaning}>{rasa.meaning}</span>
                                        <p className={styles.rasaDescription}>{rasa.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

