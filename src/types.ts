export interface Service {
    id: string;
    title: string;
    description: string;
}

export interface ProcessStep {
    id: string;
    title: string;
    description: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    before: string;
    after: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    role: string;
}