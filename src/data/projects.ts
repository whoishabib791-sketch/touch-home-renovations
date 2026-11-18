import type { Testimonial } from "./testimonials";
import { testimonials } from "./testimonials";

export type ProjectCategory = "bathrooms" | "kitchens" | "full-home" | "laundry" | "outdoor";

export type Project = {
  id: string;
  slug: string;
  title: string;
  suburb?: string;
  category: ProjectCategory;
  services: string[];
  heroImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  testimonialId?: string;
  overview?: string;
  brief?: string;
  approach?: string;
  result?: string;
};

export const projects: Project[] = [
  {
    id: "point-cook-residence",
    slug: "point-cook-residence",
    title: "Point Cook residence",
    suburb: "Point Cook",
    category: "full-home",
    services: ["Whole home"],
    heroImage: "/images/living-02.jpg",
    gallery: ["/images/living-02.jpg", "/images/living-04.jpg", "/images/home-18.jpg", "/images/floor-16.jpg"],
    testimonialId: "onari",
    overview: "A complete home renovation in Point Cook, coordinated by one team through to handover.",
    result: "The homeowners noted the work finished ahead of time.",
  },
  {
    id: "ensuite-and-main-bathroom",
    slug: "ensuite-and-main-bathroom",
    title: "Ensuite and main bathroom",
    category: "bathrooms",
    services: ["Bathroom", "Ensuite"],
    heroImage: "/images/bath-01.jpg",
    gallery: ["/images/bath-01.jpg", "/images/bath-05.jpg", "/images/bath-03.jpg", "/images/bath-06.jpg"],
    beforeImage: "/images/ba-bath-1-before.jpg",
    afterImage: "/images/ba-bath-1-after.jpg",
    testimonialId: "k-martinez",
    overview:
      "Two bathrooms completed together — ensuite and main — with Raz and Sez coordinating the work on site.",
  },
  {
    id: "kitchen-wet-areas-and-floors",
    slug: "kitchen-wet-areas-and-floors",
    title: "Kitchen, wet areas and floors",
    category: "full-home",
    services: ["Kitchen", "Bathrooms", "Laundry", "Flooring", "Robes"],
    heroImage: "/images/kitchen-04.jpg",
    gallery: [
      "/images/kitchen-04.jpg",
      "/images/kitchen-17.jpg",
      "/images/laundry-27.jpg",
      "/images/floor-02.jpg",
      "/images/kitchen-05.jpg",
    ],
    beforeImage: "/images/ba-kitchen-a-before.webp",
    afterImage: "/images/ba-kitchen-a-after.webp",
    testimonialId: "shahidah",
    overview:
      "Kitchen, bathrooms, laundry, flooring and robes completed in a single coordinated program while the homeowner was away.",
    result: "Works completed in under five weeks, with daily updates from Sezer and Raz.",
  },
  {
    id: "family-bathroom",
    slug: "family-bathroom",
    title: "Enlarged family bathroom",
    category: "bathrooms",
    services: ["Bathroom"],
    heroImage: "/images/bath-05.jpg",
    gallery: ["/images/bath-05.jpg", "/images/bath-06.jpg", "/images/bath-01.jpg"],
    beforeImage: "/images/ba-bath-4-before.jpg",
    afterImage: "/images/ba-bath-4-after.jpg",
    testimonialId: "cem",
    overview: "A bathroom remodel that removed the wall between the toilet and bathroom to enlarge the room.",
  },
  {
    id: "pantry-and-office",
    slug: "pantry-and-office",
    title: "Walk-in pantry and home office",
    category: "full-home",
    services: ["Pantry", "Home office", "Doors"],
    heroImage: "/images/home-17.jpg",
    gallery: ["/images/home-17.jpg", "/images/home-12.jpg", "/images/home-13.jpg"],
    testimonialId: "skye",
    overview:
      "A walk-in pantry and home office, with doors replaced throughout, completed while the homeowner continued working from home.",
  },
  {
    id: "kitchen-transformation",
    slug: "kitchen-transformation",
    title: "Kitchen transformation",
    category: "kitchens",
    services: ["Kitchen"],
    heroImage: "/images/kitchen-17.jpg",
    gallery: ["/images/kitchen-17.jpg", "/images/kitchen-04.jpg", "/images/kitchen-05.jpg", "/images/kitchen-03.jpg"],
    beforeImage: "/images/ba-kitchen-b-before.webp",
    afterImage: "/images/ba-kitchen-b-after.webp",
  },
  {
    id: "open-kitchen",
    slug: "open-kitchen",
    title: "Open kitchen",
    category: "kitchens",
    services: ["Kitchen"],
    heroImage: "/images/kitchen-05.jpg",
    gallery: ["/images/kitchen-05.jpg", "/images/kitchen-18.jpg", "/images/kitchen-03.jpg", "/images/kitchen-04.jpg"],
  },
  {
    id: "bathroom-finish",
    slug: "bathroom-finish",
    title: "Bathroom finish",
    category: "bathrooms",
    services: ["Bathroom"],
    heroImage: "/images/bath-01.jpg",
    gallery: ["/images/bath-01.jpg", "/images/bath-03.jpg", "/images/bath-06.jpg"],
    beforeImage: "/images/ba-bath-9-before.jpg",
    afterImage: "/images/ba-bath-9-after.jpg",
    testimonialId: "josie",
  },
  {
    id: "ensuite-refresh",
    slug: "ensuite-refresh",
    title: "Ensuite",
    category: "bathrooms",
    services: ["Ensuite"],
    heroImage: "/images/bath-03.jpg",
    gallery: ["/images/bath-03.jpg", "/images/bath-05.jpg", "/images/ba-bath-2-after.jpg"],
    beforeImage: "/images/ba-bath-2-before.jpg",
    afterImage: "/images/ba-bath-2-after.jpg",
    testimonialId: "vanessa",
  },
  {
    id: "working-laundry",
    slug: "working-laundry",
    title: "Working laundry",
    category: "laundry",
    services: ["Laundry"],
    heroImage: "/images/laundry-27.jpg",
    gallery: ["/images/laundry-27.jpg", "/images/laundry-09.jpg", "/images/laundry-06.jpg", "/images/laundry-08.jpg"],
    beforeImage: "/images/ba-laundry-a-before.webp",
    afterImage: "/images/ba-laundry-a-after.webp",
  },
  {
    id: "compact-laundry",
    slug: "compact-laundry",
    title: "Compact laundry",
    category: "laundry",
    services: ["Laundry"],
    heroImage: "/images/laundry-05.jpg",
    gallery: ["/images/laundry-05.jpg", "/images/laundry-08.jpg", "/images/ba-laundry-b-after.webp"],
    beforeImage: "/images/ba-laundry-b-before.webp",
    afterImage: "/images/ba-laundry-b-after.webp",
  },
  {
    id: "living-and-floors",
    slug: "living-and-floors",
    title: "Living and floors",
    category: "full-home",
    services: ["Living", "Flooring"],
    heroImage: "/images/living-09.jpg",
    gallery: ["/images/living-09.jpg", "/images/floor-16.jpg", "/images/home-18.jpg", "/images/living-04.jpg"],
    beforeImage: "/images/ba-home-1-before.jpg",
    afterImage: "/images/ba-home-1-after.jpg",
  },
  {
    id: "deck-and-outdoor",
    slug: "deck-and-outdoor",
    title: "Deck",
    category: "outdoor",
    services: ["Decking"],
    heroImage: "/images/deck-02.jpg",
    gallery: ["/images/deck-02.jpg"],
  },
];

export const featuredProjectSlugs = [
  "point-cook-residence",
  "kitchen-wet-areas-and-floors",
  "ensuite-and-main-bathroom",
  "kitchen-transformation",
  "working-laundry",
  "pantry-and-office",
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return featuredProjectSlugs
    .map((slug) => getProject(slug))
    .filter((project): project is Project => Boolean(project));
}

export function getProjectsByCategory(category?: ProjectCategory) {
  if (!category) return projects;
  return projects.filter((project) => project.category === category);
}

export function getRelatedProjects(slug: string, limit = 2) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);
  return projects.filter((project) => project.slug !== slug && project.category === current.category).slice(0, limit);
}

export function getProjectTestimonial(project: Project): Testimonial | undefined {
  if (!project.testimonialId) return undefined;
  return testimonials.find((item) => item.id === project.testimonialId);
}

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "kitchens", label: "Kitchens" },
  { id: "full-home", label: "Full home" },
  { id: "laundry", label: "Laundry" },
  { id: "outdoor", label: "Outdoor" },
];
