export type ServiceId = "full-home" | "kitchens" | "bathrooms" | "laundries";

export type Service = {
  id: ServiceId;
  title: string;
  shortTitle: string;
  navLabel: string;
  path: string;
  eyebrow: string;
  headline: string;
  summary: string;
  image: string;
  scope: string[];
};

export const services: Service[] = [
  {
    id: "full-home",
    title: "Full home renovations",
    shortTitle: "Full home",
    navLabel: "Full Home Renovations",
    path: "/renovations/full-home",
    eyebrow: "Complete homes",
    headline: "One team across the whole house.",
    summary:
      "A coordinated transformation across multiple rooms, layouts and finishes — so the house works as one.",
    image: "/images/living-02.jpg",
    scope: [
      "Layout changes and open-plan living",
      "Kitchens, bathrooms and laundries together",
      "Flooring, plastering, painting and joinery",
      "Structural work where the project requires it",
      "One point of contact through the build",
    ],
  },
  {
    id: "kitchens",
    title: "Kitchen renovations",
    shortTitle: "Kitchens",
    navLabel: "Kitchen Renovations",
    path: "/renovations/kitchens",
    eyebrow: "Kitchens",
    headline: "Kitchens made for real life.",
    summary: "Better flow, smarter storage and a kitchen designed around everyday life.",
    image: "/images/kitchen-04.jpg",
    scope: [
      "Layout and workflow",
      "Cabinetry and storage",
      "Benchtops and splashbacks",
      "Flooring and lighting",
      "Related plumbing and electrical",
    ],
  },
  {
    id: "bathrooms",
    title: "Bathroom renovations",
    shortTitle: "Bathrooms",
    navLabel: "Bathroom Renovations",
    path: "/renovations/bathrooms",
    eyebrow: "Bathrooms & ensuites",
    headline: "Start and end the day better.",
    summary:
      "Functional, carefully finished bathrooms built around comfort and longevity — including certified waterproofing.",
    image: "/images/bath-01.jpg",
    scope: [
      "Demolition and preparation",
      "Certified waterproofing",
      "Certified plumbing",
      "Tiling, vanities and cabinetry",
      "Fixtures, lighting and electrical",
    ],
  },
  {
    id: "laundries",
    title: "Laundry renovations",
    shortTitle: "Laundries",
    navLabel: "Laundry Renovations",
    path: "/renovations/laundries",
    eyebrow: "Laundries",
    headline: "The hardest-working room, done properly.",
    summary:
      "Practical storage and considered layouts for one of the home’s hardest-working spaces.",
    image: "/images/laundry-27.jpg",
    scope: [
      "Storage and workflow",
      "Cabinetry and benchtops",
      "Durable finishes",
      "Lighting and ventilation",
      "Visual consistency with the kitchen",
    ],
  },
];

export const supportingWork = [
  "Cabinetry",
  "Stone tops",
  "Flooring",
  "Certified waterproofing",
  "Decking & pergolas",
  "Plastering",
  "Carpentry",
  "Painting",
  "Certified plumbing",
  "Certified electrical",
] as const;
