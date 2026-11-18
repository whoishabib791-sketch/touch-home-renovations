export type AreaService = "bathroom" | "home" | "kitchen";

export type ServiceArea = {
  slug: string;
  name: string;
  region: string;
  services: AreaService[];
  isBase?: boolean;
  badge?: "yard" | "completed";
  intro: string;
};

export type Region = {
  id: string;
  bearing: string;
  line: string;
  image: string;
  compass: string;
};

export const regions: Region[] = [
  {
    id: "North",
    bearing: "N",
    line: "The northern run from the yard.",
    image: "/images/kitchen-04.jpg",
    compass: "col-start-2 row-start-1",
  },
  {
    id: "North-west",
    bearing: "NW",
    line: "Keilor and the north-west.",
    image: "/images/living-09.jpg",
    compass: "col-start-1 row-start-2",
  },
  {
    id: "North-east",
    bearing: "NE",
    line: "Heidelberg through Eltham.",
    image: "/images/living-04.jpg",
    compass: "col-start-3 row-start-2",
  },
  {
    id: "Inner west",
    bearing: "IW",
    line: "Ascot Vale and nearby.",
    image: "/images/bath-01.jpg",
    compass: "col-start-1 row-start-3",
  },
  {
    id: "East",
    bearing: "E",
    line: "Templestowe, Doncaster, Balwyn.",
    image: "/images/kitchen-05.jpg",
    compass: "col-start-3 row-start-3",
  },
  {
    id: "West",
    bearing: "W",
    line: "Including completed work in Point Cook.",
    image: "/images/living-02.jpg",
    compass: "col-start-1 row-start-4",
  },
  {
    id: "Inner north",
    bearing: "IN",
    line: "Older streets toward the city.",
    image: "/images/kitchen-03.jpg",
    compass: "col-start-2 row-start-4",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "epping",
    name: "Epping",
    region: "North",
    services: ["bathroom", "home", "kitchen"],
    isBase: true,
    badge: "yard",
    intro:
      "THR is based in Epping and works with homeowners across the suburb and surrounding north. From the Epping premises we plan kitchens, bathrooms and complete home renovations.",
  },
  {
    slug: "lalor",
    name: "Lalor",
    region: "North",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "Lalor homeowners come to THR for bathroom, kitchen and full-home work that needs one team coordinating the trades.",
  },
  {
    slug: "south-morang",
    name: "South Morang",
    region: "North",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "We service homeowners in South Morang with bathroom, kitchen and complete home renovations managed from nearby Epping.",
  },
  {
    slug: "mernda",
    name: "Mernda",
    region: "North",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "For Mernda homes — from newer estates to established houses — THR plans and builds kitchens, bathrooms and wider renovations.",
  },
  {
    slug: "preston",
    name: "Preston",
    region: "Inner north",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "We service homeowners in Preston for kitchen, bathroom and house renovations, including older homes that need careful coordination.",
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    region: "Inner north",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "THR works with Brunswick homeowners on bathroom and home renovations, including tighter footprints and older houses.",
  },
  {
    slug: "pascoe-vale",
    name: "Pascoe Vale",
    region: "Inner north",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "We service homeowners in Pascoe Vale for bathroom renovations and related home work, from layout changes to complete wet-area rebuilds.",
  },
  {
    slug: "heidelberg",
    name: "Heidelberg",
    region: "North-east",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "THR services homeowners in Heidelberg for house and kitchen renovations, with bathrooms handled as part of the same team.",
  },
  {
    slug: "heidelberg-west",
    name: "Heidelberg West",
    region: "North-east",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "We service homeowners in Heidelberg West for kitchen renovations and related home work.",
  },
  {
    slug: "eltham",
    name: "Eltham",
    region: "North-east",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "THR services Eltham homeowners for bathroom and house renovations planned and built by one team.",
  },
  {
    slug: "ivanhoe",
    name: "Ivanhoe",
    region: "North-east",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "We service homeowners in Ivanhoe for bathroom renovations and coordinated home work.",
  },
  {
    slug: "templestowe",
    name: "Templestowe",
    region: "East",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "THR services Templestowe homeowners for bathroom renovations, including full wet-area rebuilds.",
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    region: "East",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "We service homeowners in Doncaster for house renovations and related kitchen and bathroom work.",
  },
  {
    slug: "balwyn",
    name: "Balwyn",
    region: "East",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "THR services Balwyn homeowners for house renovations coordinated from design through construction.",
  },
  {
    slug: "keilor",
    name: "Keilor",
    region: "North-west",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "We service homeowners in Keilor for bathroom and house renovations.",
  },
  {
    slug: "ascot-vale",
    name: "Ascot Vale",
    region: "Inner west",
    services: ["bathroom", "home", "kitchen"],
    intro:
      "THR services Ascot Vale homeowners for bathroom and house renovations.",
  },
  {
    slug: "point-cook",
    name: "Point Cook",
    region: "West",
    services: ["bathroom", "home", "kitchen"],
    badge: "completed",
    intro:
      "THR has completed whole-home renovation work in Point Cook and continues to service homeowners in the area.",
  },
];

export const featuredAreaSlugs = [
  "epping",
  "south-morang",
  "mernda",
  "lalor",
  "preston",
  "brunswick",
  "heidelberg",
  "templestowe",
] as const;

const legacySlugMap: Record<string, string> = {
  southmorang: "south-morang",
};

export function normaliseAreaSlug(slug: string) {
  return legacySlugMap[slug] ?? slug;
}

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === normaliseAreaSlug(slug));
}

export function getFeaturedAreas() {
  return featuredAreaSlugs
    .map((slug) => getServiceArea(slug))
    .filter((area): area is ServiceArea => Boolean(area));
}

export function areaPath(service: AreaService, slug: string) {
  if (service === "bathroom") return `/bathroom-renovations/${slug}`;
  if (service === "kitchen") return `/kitchen-renovations/${slug}`;
  return `/home-renovations/${slug}`;
}

export function areaHubPath(slug: string) {
  return `/service-areas/${slug}`;
}

export function regionSlug(region: string) {
  return region.toLowerCase().replace(/\s+/g, "-");
}

export function getRegion(id: string) {
  return regions.find((region) => region.id === id);
}

export function getNearbyAreas(slug: string, limit = 4) {
  const area = getServiceArea(slug);
  if (!area) return [];
  return serviceAreas.filter((item) => item.region === area.region && item.slug !== slug).slice(0, limit);
}

export function filterAreas(query: string, region?: string) {
  const needle = query.trim().toLowerCase();
  return serviceAreas.filter((area) => {
    const regionOk = !region || region === "all" || area.region === region;
    const queryOk = !needle || area.name.toLowerCase().includes(needle) || area.region.toLowerCase().includes(needle);
    return regionOk && queryOk;
  });
}

export const areaServiceVisual: Record<AreaService, { image: string; alt: string; frame: string }> = {
  bathroom: {
    image: "/images/ba-bath-1-after.jpg",
    alt: "A finished Touch Home Renovations bathroom",
    frame: "aspect-[4/3]",
  },
  kitchen: {
    image: "/images/kitchen-04.jpg",
    alt: "A finished Touch Home Renovations kitchen",
    frame: "aspect-[4/3]",
  },
  home: {
    image: "/images/living-04.jpg",
    alt: "A renovated Melbourne living space",
    frame: "aspect-[3/2]",
  },
};

export const areaServiceCopy: Record<
  AreaService,
  { title: string; path: string; label: string; short: string }
> = {
  bathroom: {
    title: "Bathroom renovations",
    path: "/renovations/bathrooms",
    label: "Bathroom renovations",
    short: "Bathrooms",
  },
  kitchen: {
    title: "Kitchen renovations",
    path: "/renovations/kitchens",
    label: "Kitchen renovations",
    short: "Kitchens",
  },
  home: {
    title: "Home renovations",
    path: "/renovations/full-home",
    label: "Full home renovations",
    short: "Full home",
  },
};

export const areaServices: AreaService[] = ["bathroom", "kitchen", "home"];
