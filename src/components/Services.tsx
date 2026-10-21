import { services } from "../data/content";
import styles from "./Services.module.css";

export default function Services() {
    return (
        <section id="services">
            <div className="container">
                <p className="eyebrow">What We Do</p>
                <h2 className="section-title">Our Services</h2>

                <div className={styles.grid}>
                    {services.map((s) => (
                        <article key={s.id} className={styles.card}>
                            <span className={styles.number}>{s.id}</span>
                            <h3 className={styles.title}>{s.title}</h3>
                            <p className={styles.desc}>{s.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}