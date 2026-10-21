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
                            <div className={styles.images}>
                                <figure>
                                    <figcaption>Before</figcaption>
                                    <img src={p.before} alt={`${p.title} — before`} loading="lazy" />
                                </figure>
                                <figure>
                                    <figcaption>After</figcaption>
                                    <img src={p.after} alt={`${p.title} — after`} loading="lazy" />
                                </figure>
                            </div>
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