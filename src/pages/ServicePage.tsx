import { Navigate, useParams } from "react-router-dom";
import { BeforeAfterSlider } from "../components/before-after/BeforeAfterSlider";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { FinalCta } from "../components/sections/FinalCta";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { getProjectsByCategory, type ProjectCategory } from "../data/projects";
import { processSteps } from "../data/process";
import { services, type ServiceId } from "../data/services";
import { testimonials } from "../data/testimonials";
import { JsonLd, Seo } from "../lib/seo";

const extras: Record<
  ServiceId,
  {
    hero: string;
    intro: string;
    pointsTitle: string;
    points: string[];
    note?: string;
    faqs: { q: string; a: string }[];
    before?: string;
    after?: string;
    category: ProjectCategory;
    seoTitle: string;
    seoDescription: string;
  }
> = {
  "full-home": {
    hero: "Complete home renovations, Melbourne.",
    intro:
      "When more than one room needs to change, the risk is coordination. THR plans the house as a whole — layout, wet areas, finishes and the people on site — so the work holds together.",
    pointsTitle: "What THR can coordinate",
    points: [
      "Layout changes and open-plan living",
      "Kitchens, bathrooms and laundries in one program",
      "Flooring, plaster, paint and joinery",
      "Structural and open-plan work where the project requires it",
      "One conversation instead of a list of separate trades",
    ],
    note:
      "Renovating can be a better fit than moving when the street, school or bones of the house are right — and the rooms no longer work.",
    faqs: [
      { q: "Do you renovate multiple rooms at once?", a: "Yes. Full-home work is a core part of what the team coordinates." },
      { q: "Do you coordinate trades?", a: "Yes. Site management and trade coordination sit with THR." },
      { q: "Can we remain in the home?", a: "It depends on the scope. This is discussed during discover so living arrangements are clear before work starts." },
    ],
    before: "/images/ba-home-1-before.jpg",
    after: "/images/ba-home-1-after.jpg",
    category: "full-home",
    seoTitle: "Full Home Renovations Melbourne",
    seoDescription:
      "Complete home renovations across Melbourne. One team coordinating layout, kitchens, bathrooms and finishes from Epping.",
  },
  kitchens: {
    hero: "Kitchens made for real life.",
    intro:
      "A kitchen has to work before it has to impress. THR plans layout, storage, cabinetry and finishes around how the household actually cooks and gathers.",
    pointsTitle: "What can be transformed",
    points: ["Layout and flow", "Cabinetry and storage", "Benchtops and splashbacks", "Flooring", "Lighting and related services"],
    faqs: [
      { q: "Do you help with selections?", a: "Yes. Dee works on interior direction, and the team helps homeowners lock selections before the build." },
      { q: "Can a kitchen be part of a larger renovation?", a: "Yes. Many projects combine the kitchen with bathrooms, laundry or living." },
    ],
    before: "/images/ba-kitchen-a-before.webp",
    after: "/images/ba-kitchen-a-after.webp",
    category: "kitchens",
    seoTitle: "Kitchen Renovations Melbourne",
    seoDescription: "Kitchen renovations in Melbourne — layout, cabinetry, storage and finishes by Touch Home Renovations.",
  },
  bathrooms: {
    hero: "Start and end the day better.",
    intro:
      "Bathroom work fails when waterproofing and sequencing are treated as afterthoughts. THR builds bathrooms around comfort, longevity and certified wet-area work.",
    pointsTitle: "Bathroom scope",
    points: [
      "Demolition and preparation",
      "Certified waterproofing",
      "Certified plumbing",
      "Tiling, vanity and cabinetry",
      "Fixtures, lighting and electrical",
    ],
    faqs: [
      { q: "Do you handle waterproofing?", a: "Yes. Waterproofing is listed as certified work on THR’s current services." },
      { q: "Do you renovate ensuites as well as family bathrooms?", a: "Yes. Ensuite and main bathroom projects are a regular part of the work." },
    ],
    before: "/images/ba-bath-1-before.jpg",
    after: "/images/ba-bath-1-after.jpg",
    category: "bathrooms",
    seoTitle: "Bathroom Renovations Melbourne",
    seoDescription:
      "Bathroom and ensuite renovations in Melbourne, including certified waterproofing, plumbing and tiling.",
  },
  laundries: {
    hero: "A laundry that keeps up.",
    intro:
      "Laundries are easy to treat as leftover space. Done properly they store more, wear harder and sit visually with the kitchen.",
    pointsTitle: "What we focus on",
    points: ["Storage and workflow", "Durable finishes", "Space efficiency", "Lighting and ventilation", "Consistency with the rest of the home"],
    faqs: [
      { q: "Can a laundry be renovated with the kitchen?", a: "Yes. Matching cabinetry and finishes across kitchen and laundry is a common request." },
    ],
    before: "/images/ba-laundry-a-before.webp",
    after: "/images/ba-laundry-a-after.webp",
    category: "laundry",
    seoTitle: "Laundry Renovations Melbourne",
    seoDescription: "Laundry renovations in Melbourne focused on storage, workflow and durable finishes.",
  },
};

export function ServicePage() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);
  if (!service) return <Navigate to="/" replace />;
  const extra = extras[service.id];
  const projects = getProjectsByCategory(extra.category);
  const quotes = testimonials.filter((item) =>
    service.id === "kitchens"
      ? item.category === "kitchen" || item.category === "full-home"
      : service.id === "laundries"
        ? item.category === "laundry" || item.category === "full-home"
        : service.id === "full-home"
          ? item.category === "full-home"
          : item.category === "bathroom",
  );
  const quote = quotes[0];

  return (
    <>
      <Seo title={extra.seoTitle} description={extra.seoDescription} path={service.path} image={service.image} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: extra.seoTitle,
          provider: { "@type": "HomeAndConstructionBusiness", name: "Touch Home Renovations" },
          areaServed: "Melbourne",
          description: extra.seoDescription,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: extra.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <section className="frame isolate min-h-[70svh] bg-olive text-paper">
        <img src={service.image} alt={service.title} className="frame-fill" />
        <div className="absolute inset-0 bg-olive/55" />
        <Container className="relative z-10 flex min-h-[70svh] flex-col justify-end pb-16 pt-36">
          <p className="folio text-stone">{service.eyebrow}</p>
          <h1 className="display mt-5 max-w-[16ch] text-[clamp(3rem,8vw,6.8rem)]">{extra.hero}</h1>
        </Container>
      </section>
      <section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <p className="text-[1.2rem] leading-relaxed lg:col-span-7">{extra.intro}</p>
          <p className="text-mute lg:col-span-5">{service.summary}</p>
        </Container>
      </section>
      <section className="bg-white py-24">
        <Container>
          <SectionHeader eyebrow="Projects" title="Real transformations" />
          <div className="mt-14">
            <ProjectGrid projects={projects} />
          </div>
        </Container>
      </section>
      <section className="bg-paper py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] lg:col-span-5">{extra.pointsTitle}</h2>
          <ul className="lg:col-span-7">
            {extra.points.map((point) => (
              <li key={point} className="border-t border-stone py-4 text-[1.15rem] last:border-b">
                {point}
              </li>
            ))}
          </ul>
          {extra.note ? <p className="text-mute lg:col-span-12 lg:max-w-3xl">{extra.note}</p> : null}
        </Container>
      </section>
      {extra.before && extra.after ? (
        <section className="bg-white py-24">
          <Container>
            <SectionHeader eyebrow="Proof" title="Before / after" />
            <div className="mt-12">
              <BeforeAfterSlider beforeSrc={extra.before} afterSrc={extra.after} />
            </div>
          </Container>
        </section>
      ) : null}
      <section className="bg-paper py-24">
        <Container>
          <SectionHeader eyebrow="Process" title="How the work is run" />
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.id}>
                <p className="folio text-sage">{step.number}</p>
                <p className="mt-3 font-serif text-2xl">{step.title}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      {quote ? (
        <section className="bg-white py-24">
          <Container className="max-w-4xl">
            <p className="folio text-sage">Homeowner</p>
            <blockquote className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.25]">
              “{quote.quote}”
            </blockquote>
            <p className="mt-6">{quote.name}</p>
          </Container>
        </section>
      ) : null}
      <section className="bg-paper py-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Questions" title="FAQs" />
          <dl className="mt-12">
            {extra.faqs.map((faq) => (
              <div key={faq.q} className="border-t border-stone py-6 last:border-b">
                <dt className="font-medium">{faq.q}</dt>
                <dd className="mt-2 text-mute">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
