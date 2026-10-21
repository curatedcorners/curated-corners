import { contactInfo } from "../data/content";
import { WhatsAppIcon } from "./Icons";
import styles from "./FloatingButton.module.css";

export default function FloatingButton() {
    return (
        <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fab}
            aria-label="Chat with us on WhatsApp"
        >
            <WhatsAppIcon size={28} />
        </a>
    );
}