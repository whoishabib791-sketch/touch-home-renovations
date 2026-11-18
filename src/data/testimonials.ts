export type TestimonialCategory = "bathroom" | "kitchen" | "full-home" | "laundry";

export type Testimonial = {
  id: string;
  name: string;
  source: "Google";
  category: TestimonialCategory;
  project: string;
  suburb?: string;
  quote: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "k-martinez",
    name: "K Martinez",
    source: "Google",
    category: "bathroom",
    project: "Ensuite and main bathroom",
    quote:
      "I recently had my ensuite and main bathroom renovated by Touch Home Renovation (THR) and I’m extremely happy with the results. The quality of work is excellent, and every detail was finished to a high standard. Raz and Sez were fantastic to work with — very responsive, easy to communicate with, and always kept me updated on the progress. They really listened to what I wanted and made sure the design and functionality matched my vision. The project was completed on time and the whole process was smooth and stress-free. Highly recommend THR to anyone looking for a trustworthy and skilled team for their home renovations!",
    image: "/images/bath-01.jpg",
  },
  {
    id: "shahidah",
    name: "Shahidah Bte Shahjihan",
    source: "Google",
    category: "full-home",
    project: "Kitchen, bathrooms, laundry, flooring and robes",
    quote:
      "I engaged THR in December last year to work on my kitchen, bathrooms, laundry, flooring and robes. Sezer and Raz worked closely and diligently on home, completing the works in under 5 weeks. Everyday without fail Sezer or Raz would update me on the progress. The quality of materials and workmanship were not compromised. Their experience and network of local suppliers meant I was able to meet my desired aesthetics within budget and on time. I work in the construction industry and I can say with confidence that they are one of the easiest reno-contractors to work with.",
    image: "/images/kitchen-04.jpg",
  },
  {
    id: "onari",
    name: "Onari Ogaji",
    source: "Google",
    category: "full-home",
    project: "Whole-home renovation",
    suburb: "Point Cook",
    quote:
      "Just concluded whole home renovation in Point Cook. Touch Home did a great job, best of all completed ahead of time, which really stood out for me. Kudos, I highly recommend them.",
    image: "/images/living-02.jpg",
  },
  {
    id: "skye",
    name: "Skye Borg",
    source: "Google",
    category: "full-home",
    project: "Walk-in pantry, home office and doors",
    quote:
      "Highly recommend Touch Home Renovations! We will be using their services again for the next reno. We recently had a walk-in pantry and home office created and all doors replaced. It has turned out amazing, everything I wanted! They were quick to come and quote, open to all my ideas and honest if it wasn’t going to work. They respected that I was working from home and were happy to work with me on timing. The level of work is amazing — neat and tidy throughout, with respectful quality trades.",
    image: "/images/home-17.jpg",
  },
  {
    id: "cem",
    name: "Cem Duman",
    source: "Google",
    category: "bathroom",
    project: "Bathroom remodel",
    quote:
      "Got my bathroom remodeled, removed the wall between the toilet and bathroom to enlarge my bathroom. I am so happy with the end result. Raz did an amazing job to save me money — he was on the tools with Sez. Can’t thank them enough. Next year will be getting my kitchen remodeled with Touch Home Renovation.",
    image: "/images/bath-05.jpg",
  },
  {
    id: "josie",
    name: "Josie O’Connell",
    source: "Google",
    category: "bathroom",
    project: "Bathroom renovation",
    quote:
      "We love our bathroom. Exceptional work, professional attitude in all aspects and caring for the finest detail. Always ready to listen and incredibly organised. Fantastic. Highly recommend.",
    image: "/images/bath-03.jpg",
  },
  {
    id: "sharon",
    name: "Sharon Daliling",
    source: "Google",
    category: "full-home",
    project: "Home renovation",
    quote:
      "I engaged THR earlier this year for my home renovation and couldn’t be happier. The team was professional and always easy to communicate with. They kept everything on track, made the process smooth, and delivered a beautiful result that exceeded my expectations.",
    image: "/images/living-04.jpg",
  },
  {
    id: "vanessa",
    name: "Vanessa Agurin",
    source: "Google",
    category: "bathroom",
    project: "Bathroom and toilet",
    quote:
      "I had my bathroom and toilet renovated earlier this year, and the team was fantastic — efficient, approachable, and easy to work with. I’m really pleased with the results.",
    image: "/images/bath-03.jpg",
  },
  {
    id: "kirti",
    name: "Kirti Naidu",
    source: "Google",
    category: "bathroom",
    project: "Bathroom renovation",
    quote: "Had bathroom renovation and it was beautifully done. Outstanding job. Highly recommend.",
    image: "/images/bath-05.jpg",
  },
  {
    id: "unknown-full-home",
    name: "Google reviewer",
    source: "Google",
    category: "full-home",
    project: "Full house renovation",
    quote:
      "I can’t thank you enough Raz and Sez and the team. We just finished our full house renovation. They handled absolutely everything with no stress to us, finished the project before the deadline with no hidden fees along the way, and always communicating with us. I strongly prefer Touch Home Renovations to anyone thinking of remodelling their home.",
    image: "/images/home-18.jpg",
  },
];
