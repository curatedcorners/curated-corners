import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
    { label: "About", to: "/#about" },
    { label: "Services", to: "/#services" },
    { label: "Portfolio", to: "/#portfolio" },
    { label: "Process", to: "/#process" },
    { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link to="/" className={styles.logo}>
                    Curated Corners
                </Link>

                <nav className={styles.nav} aria-label="Main">
                    {links.map((l) => (
                        <Link key={l.to} to={l.to}>
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <Link to="/#contact" className={`btn ${styles.book}`}>
                    Book
                </Link>
            </div>
        </header>
    );
}