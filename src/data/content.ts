import type { Service, ProcessStep, Project, Testimonial } from "../types";

import portfolio1 from "../assets/1.jpeg";
import portfolio2 from "../assets/2.jpeg";
import portfolio3 from "../assets/3.jpeg";
import portfolio4 from "../assets/4.jpeg";

export const contactInfo = {
    phone: "+91 93074 98290",
    phoneHref: "tel:+919307498290",
    whatsappHref:
        "https://api.whatsapp.com/send?phone=919307498290&text=Hi%20Curated%20Corners%2C%20I%27d%20like%20to%20know%20more%20about%20your%20styling%20services.",
    instagram: "@curated___corners",
    instagramHref: "https://instagram.com/curated___corners",
    email: "curated.corners11@gmail.com",
};

export const services: Service[] = [
    {
        id: "01",
        title: "Balcony Styling",
        description:
            "We transform unused balconies into cozy, functional retreats made for slow mornings and golden evenings.",
    },
    {
        id: "02",
        title: "Airbnb Styling",
        description:
            "We craft memorable guest experiences through thoughtful design that earns five-star reviews and rebookings.",
    },
    {
        id: "03",
        title: "Room Refresh",
        description:
            "Affordable makeovers for bedrooms, living rooms and reading corners — a renewed feeling without the renovation.",
    },
    {
        id: "04",
        title: "Virtual Consultation",
        description:
            "Receive personalized styling plans, mood boards and curated shopping lists delivered entirely online.",
    },
    {
        id: "05",
        title: "Café & Hospitality Styling",
        description:
            "We design cafés, lounges and hospitality corners with inviting, photogenic interiors that keep guests lingering.",
    },
];

export const projects: Project[] = [
    {
        id: "balcony-lounge",
        title: "Balcony Lounge Transformation",
        description:
            "A bare balcony transformed into an evening lounge with wicker seating, lanterns and layered greenery.",
        before: portfolio1,
        after: portfolio2,
    },
    {
        id: "window-ledge",
        title: "Window Ledge Makeover",
        description:
            "An overlooked window ledge reimagined as a planted, softly lit nook with a view.",
        before: portfolio2,
        after: portfolio3,
    },
    {
        id: "balcony-corner",
        title: "Balcony Corner Transformation",
        description:
            "A sunlit balcony corner refreshed with rattan seating, macramé planters and warm string lights.",
        before: portfolio3,
        after: portfolio4,
    },
    {
        id: "bedroom",
        title: "Bedroom Transformation",
        description:
            "A bedroom refreshed into a warm, organized retreat.",
        before: portfolio4,
        after: portfolio1,
    },
];

export const processSteps: ProcessStep[] = [
    {
        id: "01",
        title: "Consultation",
        description:
            "We listen to your vision, lifestyle and goals for the space.",
    },
    {
        id: "02",
        title: "Space Assessment",
        description:
            "We study light, flow and dimensions to find hidden potential.",
    },
    {
        id: "03",
        title: "Design & Mood Board",
        description:
            "We present a curated concept, palette and styling direction.",
    },
    {
        id: "04",
        title: "Styling & Transformation",
        description:
            "We source, arrange and layer every detail with care.",
    },
    {
        id: "05",
        title: "Final Reveal",
        description:
            "We unveil a space that feels calm, beautiful and unmistakably yours.",
    },
];

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        quote:
            "Our balcony went from a storage ledge to our favourite room in the home. We use it every single evening now.",
        name: "Priya & Arjun",
        role: "Homeowners",
    },
    {
        id: "t2",
        quote:
            "Our Airbnb bookings jumped after the restyle. Guests constantly mention how warm and beautiful the space feels.",
        name: "Meera S.",
        role: "Airbnb Host",
    },
    {
        id: "t3",
        quote:
            "They understood exactly what we wanted before we could put it into words. Every corner now tells a story.",
        name: "Rohan Deshpande",
        role: "Renter",
    },
];