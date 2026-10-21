import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.inner}`}>
                <p className="eyebrow">About Us</p>
                <h2 className={styles.title}>Thoughtfully Curated. Beautifully Designed.</h2>
                <p className={styles.text}>
                    At Curated Corners, we believe every space has the potential to tell a
                    story. We specialize in transforming overlooked corners into inviting
                    retreats that reflect personality, purpose, and style. From Airbnb
                    properties to personal spaces, we create environments that leave
                    lasting impressions.
                </p>
            </div>
        </section>
    );
}