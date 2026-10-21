import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/content";
import { InstagramIcon, WhatsAppIcon, PhoneIcon, MailIcon } from "./Icons";
import styles from "./Contact.module.css";
import { supabase } from "../lib/supabase";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        // spam trap: bots tick the hidden box, so pretend success and do nothing
        if (data.get("botcheck")) {
            setStatus("success");
            return;
        }

        setStatus("sending");

        const { error } = await supabase.functions.invoke("notify-inquiry", {
            body: {
                name: String(data.get("name") ?? "").trim(),
                email: String(data.get("email") ?? "").trim(),
                phone: String(data.get("phone") ?? "").trim(),
                message: String(data.get("message") ?? "").trim(),
            },
        });

        if (error) {
            setStatus("error");
        } else {
            setStatus("success");
            form.reset();
        }
    };

    return (
        <section id="contact">
            <div className={`container ${styles.grid}`}>
                <div>
                    <p className="eyebrow">Get in Touch</p>
                    <h2 className={styles.title}>Let's Create Your Perfect Corner</h2>
                    <p className={styles.intro}>
                        Tell us about your space and we'll be in touch to plan a free
                        consultation. We work with a limited number of clients each month to
                        give every space our full attention.
                    </p>

                    <ul className={styles.list}>
                        <li>
                            <span className={styles.icon}><PhoneIcon /></span>
                            <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                        </li>
                        <li>
                            <span className={styles.icon}><WhatsAppIcon /></span>
                            <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer">
                                WhatsApp Us
                            </a>
                        </li>
                        <li>
                            <span className={styles.icon}><InstagramIcon /></span>
                            <a href={contactInfo.instagramHref} target="_blank" rel="noopener noreferrer">
                                {contactInfo.instagram}
                            </a>
                        </li>
                        <li>
                            <span className={styles.icon}><MailIcon /></span>
                            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                        </li>
                    </ul>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* spam trap: real users never see or tick this */}
                    <input type="checkbox" name="botcheck" className={styles.hidden} tabIndex={-1} autoComplete="off" />

                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@email.com" required />

                    <label htmlFor="phone">Contact Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 93074 98290" />

                    <label htmlFor="message">Tell us about your space</label>
                    <textarea id="message" name="message" rows={4} placeholder="Balcony, Airbnb, reading nook..." required />

                    <button type="submit" className={`btn ${styles.submit}`} disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send Inquiry"}
                    </button>

                    <p className={styles.note}>
                        By sending this, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
                    </p>

                    {status === "success" && (
                        <p className={styles.success} role="status">
                            Thank you! Your inquiry has been sent. We'll be in touch soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className={styles.error} role="alert">
                            Something went wrong. Please try again or message us on WhatsApp.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}