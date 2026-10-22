import styles from "./Hero.module.css";
import heroImage from "../assets/home_page.jpeg";

export default function Hero() {
    return (
        <section id="top" className={styles.hero}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.text}>
                    <p className="eyebrow">Space Styling &amp; Transformation</p>
                    <h1 className={styles.title}>
                        Transforming Ordinary Spaces into Beautiful Experiences
                    </h1>
                    <p className={styles.lead}>
                        Whether it's a balcony sanctuary, a cozy reading nook, or an Airbnb
                        that guests never forget, we create thoughtfully designed spaces
                        that inspire comfort, beauty, and connection.
                    </p>

                    <div className={styles.actions}>
                        <a href="#contact" className={styles.primary}>
                            Book a Free Consultation
                        </a>
                        <a href="#portfolio" className={styles.secondary}>
                            View Portfolio
                        </a>
                    </div>
                </div>

                <div className={styles.imageWrap}>
                    <img
                        src={heroImage}
                        alt="Styled balcony with string lights at sunset"
                    />
                </div>
            </div>
        </section>
    );
}