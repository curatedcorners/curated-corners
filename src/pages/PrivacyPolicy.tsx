import LegalPage from "./LegalPage";
import { contactInfo } from "../data/content";

export default function PrivacyPolicy() {
    return (
        <LegalPage title="Privacy Policy" updated="22 October 2026">
            <p>
                We collect only the information needed to respond to your enquiries and
                deliver your styling project. We never sell your personal information.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
                <li>
                    <strong>Contact details:</strong> your name, phone number, email
                    address and city, when you message us on WhatsApp, email us or
                    book a service.
                </li>
                <li>
                    <strong>Project information:</strong> the location of the space,
                    photos and videos of it, budget, style preferences and any
                    restrictions you share with us.
                </li>
                <li>
                    <strong>AI Studio uploads:</strong> photos you upload to create
                    styled previews.
                </li>
                <li>
                    <strong>Payment records:</strong> details of payments made to us,
                    such as UPI transaction references. We do not store your card or
                    bank login details.
                </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
                <li>To respond to your enquiries and prepare quotes.</li>
                <li>
                    To plan and deliver your styling project, including sourcing and
                    buying products for you.
                </li>
                <li>To process payments and keep records of them.</li>
                <li>To generate AI Studio previews from your photos.</li>
                <li>
                    To show before-and-after photos of our work, as described in our
                    Terms.
                </li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>3. AI Studio and Third-Party Services</h2>
            <p>
                Our AI Studio sends the photos you upload to third-party AI services
                to create styled previews. Please do not upload photos of people, or
                anything you do not have the right to share. We also use tools such
                as WhatsApp, email, Instagram and payment apps to run our business,
                and these have their own privacy policies.
            </p>

            <h2>4. Sharing Your Information</h2>
            <p>We share your information only when needed:</p>
            <ul>
                <li>
                    With sellers, artisans or delivery partners, when we buy or
                    arrange products for you.
                </li>
                <li>
                    With third-party professionals, if you ask us to put you in touch.
                </li>
                <li>
                    With the service providers above, to run our website and AI
                    Studio.
                </li>
                <li>When required by law or a valid government request.</li>
            </ul>

            <h2>5. Photos and Portfolio</h2>
            <p>
                We may use before-and-after photos and videos of your space on our
                website and Instagram, as set out in our Terms. We never show your
                face, name, address or personal belongings that identify you without
                your permission. You may withdraw this permission for future posts at
                any time by contacting us.
            </p>

            <h2>6. How Long We Keep Your Information</h2>
            <p>
                We keep your information only as long as needed to deliver your
                project, maintain payment and tax records, and meet legal
                requirements. After that, we delete it.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under Indian data protection law, you may:</p>
            <ul>
                <li>Ask what personal information we hold about you.</li>
                <li>Ask us to correct inaccurate information.</li>
                <li>
                    Ask us to delete your information, unless we must keep it for
                    legal or accounting reasons.
                </li>
                <li>Withdraw your consent for future use of your information.</li>
                <li>Raise a grievance about how your data is handled.</li>
            </ul>
            <p>
                We take reasonable steps to keep your information secure, and we will
                respond to your requests within a reasonable time.
            </p>

            <h2>8. Contact Us</h2>
            <p>
                Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                {" · "}
                WhatsApp:{" "}
                <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer">
                    {contactInfo.phone}
                </a>
            </p>
        </LegalPage>
    );
}