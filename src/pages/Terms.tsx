import LegalPage from "./LegalPage";
import { contactInfo } from "../data/content";

export default function Terms() {
    return (
        <LegalPage title="Terms and Conditions" updated="22 October 2026">
            <p>
                By using the Curated Corners website or booking our services, you
                agree to these Terms.
            </p>

            <h2>1. Our Services</h2>
            <p>
                We offer soft styling of existing spaces: balconies, rooms, reading
                corners, Airbnb and rental properties, cafés and small commercial
                spaces. Services include virtual styling plans, on-site styling,
                sourcing of décor and furniture, and refresh plans.
            </p>
            <p>
                We do not carry out civil, electrical, plumbing, carpentry or
                structural work. If a project needs such work, we may recommend a
                third-party professional, who you engage directly.
            </p>

            <h2>2. Quotes and Fees</h2>
            <ul>
                <li>
                    Prices shown on the website are starting prices. Your final fee is
                    confirmed in a written quote on WhatsApp or email before work
                    begins.
                </li>
                <li>
                    Our styling fee covers design and styling only. The cost of
                    furniture, décor, plants and other products is separate and paid
                    by you.
                </li>
                <li>
                    Travel outside our service area may be charged at actuals, agreed
                    in advance.
                </li>
            </ul>

            <h2>3. Payments and Advances</h2>
            <ul>
                <li>
                    On-site projects: 50% of the styling fee is due on booking, and
                    the balance on completion, before or on the day of the final
                    reveal.
                </li>
                <li>Virtual plans: 100% of the fee is due before we start.</li>
                <li>
                    If we buy products for you, the full product amount is paid to us
                    in advance. We share bills for all purchases, and a sourcing fee
                    applies, as stated in your quote.
                </li>
                <li>
                    We do not start work or buy products until the relevant payment is
                    received.
                </li>
            </ul>

            <h2>4. Products and Sourcing</h2>
            <ul>
                <li>
                    You may buy products yourself from our shopping list, or ask us to
                    buy them for you.
                </li>
                <li>
                    Products bought from local markets, artisans or online stores are
                    subject to that seller’s quality, availability and return policy.
                    Handmade and vintage items can vary in colour, size and finish.
                </li>
                <li>
                    Once a product is bought for you, it belongs to you. Returns or
                    exchanges depend on the seller and are not guaranteed by us.
                </li>
            </ul>

            <h2>5. Scheduling, Cancellations and Refunds</h2>
            <ul>
                <li>
                    You may reschedule an on-site visit once, free of charge, with at
                    least 48 hours’ notice.
                </li>
                <li>
                    If you cancel more than 7 days before the styling date, we refund
                    50% of the advance. If you cancel within 7 days, the advance is
                    non-refundable, as time and planning have already been committed.
                </li>
                <li>
                    Money paid for products already bought is not refundable, but the
                    products are handed over to you.
                </li>
                <li>
                    Virtual plan fees are non-refundable once we have shared the first
                    draft of your mood board or plan.
                </li>
                <li>
                    If we have to cancel, we will offer a new date or a full refund of
                    amounts paid for work not yet done.
                </li>
            </ul>

            <h2>6. Revisions</h2>
            <p>
                Each plan includes the number of revisions stated in your quote (for
                example, one revision for a Corner Plan and two for a Room Plan).
                Further revisions or a change of style after approval may be charged
                extra.
            </p>

            <h2>7. Your Responsibilities</h2>
            <ul>
                <li>
                    Give us safe access to the space at the agreed time, and confirm
                    you have the owner’s or society’s permission to style it.
                </li>
                <li>
                    Tell us in advance about any restrictions: rental agreements,
                    society rules, no drilling, weight limits on balconies, pets or
                    allergies.
                </li>
                <li>
                    Remove or secure valuables and fragile personal items before we
                    arrive.
                </li>
                <li>
                    Care for plants and products after handover. Plants are living and
                    their health after handover is not guaranteed.
                </li>
            </ul>

            <h2>8. Photos and Portfolio Use</h2>
            <p>
                We photograph and film spaces before and after styling. Unless you
                tell us otherwise in writing before the project, you allow us to use
                these photos and videos on our website, Instagram and marketing. We
                never show your face, name, address or personal belongings that
                identify you without your permission. You may withdraw this
                permission at any time for future posts.
            </p>

            <h2>9. AI Studio Previews</h2>
            <p>
                Our AI Studio creates styled previews from photos you upload, using
                third-party AI services. Previews are for inspiration only. They are
                not exact designs, may contain errors, and the real result will
                differ based on the space, budget and products available. Do not
                upload photos of people or anything you do not have the right to
                share.
            </p>

            <h2>10. Limitation of Liability</h2>
            <ul>
                <li>
                    We take reasonable care during every project. We are not liable
                    for damage caused by pre-existing defects in the space, products
                    supplied by third parties, or misuse after handover.
                </li>
                <li>
                    We do not guarantee specific business results such as higher
                    Airbnb ratings, bookings or footfall, though that is what we work
                    towards.
                </li>
                <li>
                    Our total liability for any claim is limited to the styling fee
                    you paid for that project.
                </li>
            </ul>

            <h2>11. Intellectual Property</h2>
            <p>
                Our logo, website content, mood boards, design plans and photos
                belong to Curated Corners. Plans we deliver are for your personal use
                in the space they were made for, and may not be resold or published
                as your own work.
            </p>

            <h2>12. Changes to These Terms</h2>
            <p>
                We may update these Terms from time to time. The version on this
                page, with its last updated date, applies to bookings made after
                that date.
            </p>

            <h2>13. Governing Law and Disputes</h2>
            <p>
                These Terms are governed by the laws of India. We will first try to
                resolve any concern with you directly and in good faith. Any dispute
                that cannot be resolved will be subject to the competent courts in
                India.
            </p>

            <h2>14. Contact</h2>
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