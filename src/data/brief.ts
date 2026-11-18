export const rooms = [
  "Kitchen",
  "Bathroom",
  "Kitchen + Bathroom",
  "Laundry",
  "Multiple Rooms",
  "Whole Home",
  "Other",
] as const;

export const improvements = [
  "Layout",
  "Storage",
  "Style",
  "Accessibility",
  "More living space",
  "Preparing to sell",
  "Complete transformation",
  "Other",
] as const;

export const stages = ["Just exploring", "Planning", "Plans ready", "Ready to renovate"] as const;

export const budgets = [
  "Under $25k",
  "$25k–$50k",
  "$50k–$100k",
  "$100k–$200k",
  "$200k+",
  "Not sure yet",
] as const;

export const timings = ["ASAP", "1–3 months", "3–6 months", "6–12 months", "Just planning"] as const;

export const contacts = ["Phone", "Email", "Either"] as const;

export type BriefState = {
  rooms: string[];
  suburb: string;
  postcode: string;
  improvements: string[];
  stage: string;
  budget: string;
  timing: string;
  files: { name: string; size: number }[];
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
  message: string;
};

export const emptyBrief: BriefState = {
  rooms: [],
  suburb: "",
  postcode: "",
  improvements: [],
  stage: "",
  budget: "",
  timing: "",
  files: [],
  name: "",
  phone: "",
  email: "",
  contactMethod: "",
  message: "",
};
