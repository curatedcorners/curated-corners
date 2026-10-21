import { Link } from "react-router-dom";
import { contactInfo } from "../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.top}`}>
                <div>
                    <p className={styles.logo}>Curated Corners</p>
                    <p className={styles.tagline}>
                        Beautifully Styled Spaces, Thoughtfully Designed.
                    </p>
                </div>

                <div className={styles.cols}>
                    <div>
                        <h4>Explore</h4>
                        <Link to="/#services">Services</Link>
                        <Link to="/#portfolio">Portfolio</Link>
                        <Link to="/#contact">Contact</Link>
                    </div>
                    <div>
                        <h4>Connect</h4>
                        <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                        <a href={contactInfo.instagramHref} target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <p>© {new Date().getFullYear()} Curated Corners Studio</p>
                <div className={styles.legal}>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}