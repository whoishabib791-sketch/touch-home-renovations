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
    line: "Keilor, Craigieburn and the north-west.",
    image: "/images/living-09.jpg",
    compass: "col-start-1 row-start-2",
  },
  {
    id: "North-east",
    bearing: "NE",
    line: "Heidelberg through Eltham and Greensborough.",
    image: "/images/living-04.jpg",
    compass: "col-start-3 row-start-2",
  },
  {
    id: "Inner west",
    bearing: "IW",
    line: "Ascot Vale, Essendon and nearby.",
    image: "/images/bath-01.jpg",
    compass: "col-start-1 row-start-3",
  },
  {
    id: "East",
    bearing: "E",
    line: "Templestowe, Doncaster, Balwyn and Kew.",
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
    line: "Preston, Brunswick and older streets toward the city.",
    image: "/images/kitchen-03.jpg",
    compass: "col-start-2 row-start-4",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: "bundoora",
    name: "Bundoora",
    region: "North",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Bundoora for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "epping",
    name: "Epping",
    region: "North",
    services: ["bathroom", "kitchen", "home"],
    isBase: true,
    badge: "yard",
    intro: "THR is based in Epping and works with homeowners across the suburb and surrounding north. From the Epping premises we plan kitchens, bathrooms and complete home renovations.",
  },
  {
    slug: "lalor",
    name: "Lalor",
    region: "North",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Lalor for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "mernda",
    name: "Mernda",
    region: "North",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Mernda for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "mill-park",
    name: "Mill Park",
    region: "North",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Mill Park for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "reservoir",
    name: "Reservoir",
    region: "North",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Reservoir for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "south-morang",
    name: "South Morang",
    region: "North",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in South Morang for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "thomastown",
    name: "Thomastown",
    region: "North",
    services: ["home"],
    intro: "Touch Home Renovations services homeowners in Thomastown for full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "broadmeadows",
    name: "Broadmeadows",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Broadmeadows for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "campbellfield",
    name: "Campbellfield",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Campbellfield for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "craigieburn",
    name: "Craigieburn",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Craigieburn for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "fawkner",
    name: "Fawkner",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Fawkner for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "glenroy",
    name: "Glenroy",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Glenroy for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "greenvale",
    name: "Greenvale",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Greenvale for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "hillside",
    name: "Hillside",
    region: "North-west",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Hillside for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "keilor",
    name: "Keilor",
    region: "North-west",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Keilor for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "meadow-heights",
    name: "Meadow Heights",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Meadow Heights for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "roxburgh-park",
    name: "Roxburgh Park",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Roxburgh Park for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "somerton",
    name: "Somerton",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Somerton for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "tullamarine",
    name: "Tullamarine",
    region: "North-west",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Tullamarine for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "eaglemont",
    name: "Eaglemont",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Eaglemont for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "eltham",
    name: "Eltham",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Eltham for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "greensborough",
    name: "Greensborough",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Greensborough for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "heidelberg",
    name: "Heidelberg",
    region: "North-east",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Heidelberg for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "heidelberg-west",
    name: "Heidelberg West",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Heidelberg West for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "ivanhoe",
    name: "Ivanhoe",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Ivanhoe for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "ivanhoe-east",
    name: "Ivanhoe East",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Ivanhoe East for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "lower-plenty",
    name: "Lower Plenty",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Lower Plenty for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "macleod",
    name: "Macleod",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Macleod for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "montmorency",
    name: "Montmorency",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Montmorency for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "viewbank",
    name: "Viewbank",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Viewbank for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "yallambie",
    name: "Yallambie",
    region: "North-east",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Yallambie for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    region: "Inner north",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Brunswick for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "coburg",
    name: "Coburg",
    region: "Inner north",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Coburg for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "fairfield",
    name: "Fairfield",
    region: "Inner north",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Fairfield for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "northcote",
    name: "Northcote",
    region: "Inner north",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Northcote for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "pascoe-vale",
    name: "Pascoe Vale",
    region: "Inner north",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Pascoe Vale for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "preston",
    name: "Preston",
    region: "Inner north",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Preston for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "thornbury",
    name: "Thornbury",
    region: "Inner north",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Thornbury for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "ascot-vale",
    name: "Ascot Vale",
    region: "Inner west",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Ascot Vale for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "essendon",
    name: "Essendon",
    region: "Inner west",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Essendon for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "balwyn",
    name: "Balwyn",
    region: "East",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Balwyn for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "balwyn-north",
    name: "Balwyn North",
    region: "East",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Balwyn North for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "box-hill",
    name: "Box Hill",
    region: "East",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Box Hill for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "bulleen",
    name: "Bulleen",
    region: "East",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Bulleen for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    region: "East",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Doncaster for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "kew",
    name: "Kew",
    region: "East",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Kew for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "templestowe",
    name: "Templestowe",
    region: "East",
    services: ["bathroom", "kitchen", "home"],
    intro: "Touch Home Renovations services homeowners in Templestowe for bathroom, kitchen and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "point-cook",
    name: "Point Cook",
    region: "West",
    services: ["bathroom", "kitchen", "home"],
    badge: "completed",
    intro: "THR has completed whole-home renovation work in Point Cook and continues to service homeowners in the area.",
  },
  {
    slug: "st-albans",
    name: "St Albans",
    region: "West",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in St Albans for bathroom and full-home renovations, managed from our Epping yard.",
  },
  {
    slug: "sunshine",
    name: "Sunshine",
    region: "West",
    services: ["bathroom", "home"],
    intro: "Touch Home Renovations services homeowners in Sunshine for bathroom and full-home renovations, managed from our Epping yard.",
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
  "eltham",
  "keilor",
  "ascot-vale",
  "doncaster",
] as const;

const legacySlugMap: Record<string, string> = {
  southmorang: "south-morang",
  meadow: "meadow-heights",
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
  return `/house-renovations/${slug}`;
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

export function areasForService(service: AreaService) {
  return serviceAreas.filter((area) => area.services.includes(service));
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
