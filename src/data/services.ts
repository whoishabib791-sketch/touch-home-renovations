export type ServiceId = "full-home" | "kitchens" | "bathrooms" | "laundries" | "decking";

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
      "As your family grows, so can your home — without the disruption of moving. Full home renovations across Melbourne, from layout changes to kitchens, bathrooms and finishes under one team.",
    image: "/images/living-02.jpg",
    scope: [
      "Complete house renovations",
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
    summary:
      "Better flow, smarter storage and kitchens designed around everyday life — from cosmetic updates through to custom cabinetry and premium appliances.",
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
      "Trusted bathroom renovation specialists for affordable, luxury and custom solutions — with certified waterproofing, plumbing and finishes that last.",
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
      "Practical storage, smart layouts and durable finishes for one of the home’s hardest-working spaces — tailored to family homes and compact apartments.",
    image: "/images/laundry-27.jpg",
    scope: [
      "Storage and workflow",
      "Cabinetry and benchtops",
      "Durable finishes",
      "Lighting and ventilation",
      "Visual consistency with the kitchen",
    ],
  },
  {
    id: "decking",
    title: "Decking & outdoor",
    shortTitle: "Decking",
    navLabel: "Decking",
    path: "/renovations/decking",
    eyebrow: "Outdoor living",
    headline: "Outdoor space worth using.",
    summary:
      "Decking renovations that restore safety and finish — from board replacement and sealing through to timber or composite upgrades, pergolas and outdoor living.",
    image: "/images/deck-02.jpg",
    scope: [
      "Board replacement and structural repairs",
      "Sanding, staining and sealing",
      "Timber and composite options",
      "Railings, lighting and seating upgrades",
      "Decking & pergolas",
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
  "Property cleaning",
] as const;
