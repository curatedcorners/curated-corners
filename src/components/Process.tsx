import { processSteps } from "../data/content";
import styles from "./Process.module.css";

export default function Process() {
    return (
        <section id="process">
            <div className="container">
                <p className="eyebrow">How It Works</p>
                <h2 className="section-title">Our Process</h2>

                <ol className={styles.steps}>
                    {processSteps.map((step) => (
                        <li key={step.id} className={styles.step}>
                            <span className={styles.number}>{step.id}</span>
                            <h3 className={styles.title}>{step.title}</h3>
                            <p className={styles.desc}>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}