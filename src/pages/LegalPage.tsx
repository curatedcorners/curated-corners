import type { ReactNode } from "react";
import styles from "./LegalPage.module.css";

interface Props {
    title: string;
    updated: string;
    children: ReactNode;
}

export default function LegalPage({ title, updated, children }: Props) {
    return (
        <section className={styles.page}>
            <div className={`container ${styles.inner}`}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.updated}>Last updated: {updated}</p>
                <div className={styles.content}>{children}</div>
            </div>
        </section>
    );
}