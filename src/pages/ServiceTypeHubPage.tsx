import { Link } from "react-router-dom";
import { FinalCta } from "../components/sections/FinalCta";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import {
  areaPath,
  areasForService,
  type AreaService,
} from "../data/serviceAreas";
import { Seo } from "../lib/seo";

const copy: Record<
  AreaService,
  {
    path: string;
    title: string;
    seoTitle: string;
    headline: string;
    body: string;
    servicePath: string;
    image: string;
  }
> = {
  bathroom: {
    path: "/bathroom-renovations",
    title: "Bathroom renovations",
    seoTitle: "Bathroom Renovations Melbourne",
    headline: "Bathroom renovations across Melbourne.",
    body: "From Ascot Vale to Templestowe and beyond — certified waterproofing, plumbing and finishes by one Epping-based team.",
    servicePath: "/renovations/bathrooms",
    image: "/images/bath-01.jpg",
  },
  home: {
    path: "/house-renovations",
    title: "House renovations",
    seoTitle: "House Renovations Melbourne",
    headline: "House renovations without the move.",
    body: "Full-home renovations across Melbourne suburbs — kitchens, bathrooms, living and finishes coordinated as one project.",
    servicePath: "/renovations/full-home",
    image: "/images/living-02.jpg",
  },
  kitchen: {
    path: "/kitchen-renovations",
    title: "Kitchen renovations",
    seoTitle: "Kitchen Renovations Melbourne",
    headline: "Kitchen renovations across Melbourne.",
    body: "Layout, cabinetry, storage and finishes for kitchens that work for real life — planned from our Epping yard.",
    servicePath: "/renovations/kitchens",
    image: "/images/kitchen-04.jpg",
  },
};

type Props = {
  service: AreaService;
};

export function ServiceTypeHubPage({ service }: Props) {
  const meta = copy[service];
  const areas = areasForService(service);

  return (
    <>
      <Seo title={meta.seoTitle} description={meta.body} path={meta.path} image={meta.image} />
      <section className="bg-paper pt-36 pb-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="folio text-sage">{meta.title}</p>
            <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.8rem,7vw,5.8rem)]">{meta.headline}</h1>
            <p className="mt-6 max-w-xl text-mute">{meta.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={meta.servicePath}>About this service</Button>
              <Button to="/plan-your-renovation" variant="line">
                Get a free quote
              </Button>
            </div>
          </div>
          <div className="frame aspect-[4/3] lg:col-span-5">
            <img src={meta.image} alt={meta.title} className="frame-fill" />
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-24">
        <Container>
          <p className="folio text-sage">Service locations</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Find your suburb</h2>
          <ul className="mt-12 columns-1 gap-x-12 sm:columns-2 lg:columns-3">
            {areas.map((area) => (
              <li key={area.slug} className="break-inside-avoid border-b border-stone py-3">
                <Link to={areaPath(service, area.slug)} className="text-[1.05rem] no-underline hover:text-clay">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link to="/service-areas" className="folio no-underline hover:text-clay">
              View all service areas →
            </Link>
          </p>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
