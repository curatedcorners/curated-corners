import { testimonials } from "../data/content";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Loved by Those We Style For</h2>

                <div className={styles.grid}>
                    {testimonials.map((t) => (
                        <figure key={t.id} className={styles.card}>
                            <div className={styles.stars} aria-label="5 out of 5 stars">
                                ★★★★★
                            </div>
                            <blockquote className={styles.quote}>"{t.quote}"</blockquote>
                            <figcaption>
                                <strong className={styles.name}>{t.name}</strong>
                                <span className={styles.role}>{t.role}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}