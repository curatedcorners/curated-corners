import { projects } from "../data/content";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <p className="eyebrow">Our Work</p>
                <h2 className="section-title">Portfolio</h2>

                <div className={styles.grid}>
                    {projects.map((p) => (
                        <article key={p.id} className={styles.card}>
                            <img
                                src={p.image}
                                alt={`${p.title} — before and after`}
                                className={styles.image}
                            />
                            <div className={styles.body}>
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}