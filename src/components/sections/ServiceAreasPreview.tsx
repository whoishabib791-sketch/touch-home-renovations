import { Link } from "react-router-dom";
import { areaHubPath, getFeaturedAreas } from "../../data/serviceAreas";
import { site } from "../../data/site";
import { Container } from "../ui/Container";
import { TextLink } from "../ui/TextLink";

export function ServiceAreasPreview() {
  const areas = getFeaturedAreas();

  return (
    <section className="bg-white py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="folio text-sage">From the yard</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,6vw,5rem)]">We come from Epping.</h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mute">
            Based at {site.address.line}. The team travels across the north, inner north and surrounding suburbs —
            not a franchise in every postcode.
          </p>
          <div className="mt-8">
            <TextLink to="/service-areas">Find your suburb</TextLink>
          </div>
        </div>
        <ul className="lg:col-span-7">
          {areas.map((area) => (
            <li key={area.slug} className="flex items-baseline justify-between gap-6 border-t border-stone py-5 last:border-b">
              <Link
                to={areaHubPath(area.slug)}
                className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] leading-none no-underline hover:text-clay"
              >
                {area.name}
              </Link>
              <span className="folio shrink-0 text-sage">
                {area.badge === "yard" ? "The yard" : area.region}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
