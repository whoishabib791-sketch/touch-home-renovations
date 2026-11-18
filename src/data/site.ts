export const site = {
  name: "Touch Home Renovations",
  shortName: "THR",
  phone: "0402 644 873",
  phoneHref: "tel:0402644873",
  email: "info@thrgroup.com.au",
  emailHref: "mailto:info@thrgroup.com.au",
  address: {
    street: "147 O’Herns Road",
    suburb: "Epping",
    state: "VIC",
    postcode: "3076",
    country: "Australia",
    line: "147 O’Herns Road, Epping VIC 3076",
  },
  mapsUrl: "https://maps.app.goo.gl/Xg4g9v5ZNVhZCbqT6",
  social: {
    facebook: "https://www.facebook.com/thrmelbourne",
    instagram: "https://www.instagram.com/touchhomerenovations/",
  },
  experienceYears: "15+",
  origin: "https://thrgroup.com.au",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  {
    label: "Renovations",
    to: "/renovations/full-home",
    children: [
      { label: "Full Home Renovations", to: "/renovations/full-home" },
      { label: "Kitchen Renovations", to: "/renovations/kitchens" },
      { label: "Bathroom Renovations", to: "/renovations/bathrooms" },
      { label: "Laundry Renovations", to: "/renovations/laundries" },
    ],
  },
  { label: "Projects", to: "/projects" },
  { label: "Our Process", to: "/process" },
  { label: "About", to: "/about" },
  { label: "Service Areas", to: "/service-areas" },
] as const;

export const primaryCta = {
  label: "Plan your renovation",
  to: "/plan-your-renovation",
} as const;
