import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { AreaSwitcher } from "../components/areas/AreaSwitcher";
import { FinalCta } from "../components/sections/FinalCta";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { projects } from "../data/projects";
import {
  areaHubPath,
  areaServiceCopy,
  areaServiceVisual,
  getNearbyAreas,
  getServiceArea,
  type AreaService,
} from "../data/serviceAreas";
import { site } from "../data/site";
import { JsonLd, Seo } from "../lib/seo";

function kindFromPath(pathname: string): AreaService | undefined {
  if (pathname.includes("bathroom")) return "bathroom";
  if (pathname.includes("kitchen")) return "kitchen";
  if (pathname.includes("home-renovations") || pathname.includes("house-renovations")) return "home";
  return undefined;
}

export function ServiceAreaPage() {
  const { suburb } = useParams();
  const { pathname } = useLocation();
  const area = suburb ? getServiceArea(suburb) : undefined;
  const kind = kindFromPath(pathname);

  if (!area || !kind) return <Navigate to="/service-areas" replace />;

  const copy = areaServiceCopy[kind];
  const visual = areaServiceVisual[kind];
  const title = `${copy.title} in ${area.name}`;
  const path =
    kind === "bathroom"
      ? `/bathroom-renovations/${area.slug}`
      : kind === "kitchen"
        ? `/kitchen-renovations/${area.slug}`
        : `/home-renovations/${area.slug}`;
  const nearby = getNearbyAreas(area.slug);
  const project = projects.find((item) => item.suburb === area.name);

  return (
    <>
      <Seo
        title={title}
        description={`Touch Home Renovations services homeowners in ${area.name} for ${copy.label.toLowerCase()}. Based in Epping, working across Melbourne.`}
        path={path}
        image={visual.image}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.origin}/` },
            { "@type": "ListItem", position: 2, name: "Service areas", item: `${site.origin}/service-areas` },
            { "@type": "ListItem", position: 3, name: area.name, item: `${site.origin}${areaHubPath(area.slug)}` },
            { "@type": "ListItem", position: 4, name: title, item: `${site.origin}${path}` },
          ],
        }}
      />

      <section className="bg-paper pt-[4.6rem]">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="folio text-sage">
              <Link to="/service-areas" className="no-underline hover:text-ink">
                Service areas
              </Link>
              {" / "}
              <Link to={areaHubPath(area.slug)} className="no-underline hover:text-ink">
                {area.name}
              </Link>
            </p>
            <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.6rem,6.5vw,5.2rem)]">{title}</h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mute">{area.intro}</p>
            <p className="mt-4 text-mute">
              {area.isBase
                ? `Planned from the yard at ${site.address.line}.`
                : `Not a local shopfront in ${area.name} — the team travels from Epping.`}
            </p>
            <div className="mt-8">
              <AreaSwitcher slug={area.slug} current={kind} />
            </div>
          </div>
          <div className={`frame w-full min-w-0 lg:col-span-6 ${visual.frame}`}>
            <img src={visual.image} alt={visual.alt} className="frame-fill" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="folio text-sage">{copy.short} in {area.name}</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Same team. Same process.</h2>
            <p className="mt-5 max-w-xl text-mute">
              Discover, design, plan, build, handover — whether this is a single wet area or a wider home renovation.
              Selections and site work are run from Epping, not a pop-up office.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={copy.path}>Read about {copy.short.toLowerCase()}</Button>
              <Button to="/plan-your-renovation" variant="line">
                Plan this renovation
              </Button>
            </div>
          </div>
          {project ? (
            <aside className="lg:col-span-5">
              <div className="frame aspect-[3/2]">
                <img src={project.heroImage} alt={project.title} className="frame-fill" />
              </div>
              <p className="folio mt-5 text-sage">Work we can name</p>
              <p className="mt-2 font-serif text-2xl">{project.title}</p>
              <Link to={`/projects/${project.slug}`} className="folio mt-4 inline-block no-underline hover:text-clay">
                View the project
              </Link>
            </aside>
          ) : (
            <aside className="border border-stone bg-paper p-6 lg:col-span-5">
              <p className="folio text-sage">Coverage</p>
              <p className="mt-4 text-[1.15rem]">
                Yes — we service homeowners in {area.name}. We don’t invent extra local claims beyond that.
              </p>
            </aside>
          )}
        </Container>
      </section>

      {nearby.length ? (
        <section className="bg-paper py-20">
          <Container>
            <p className="folio text-sage">{area.region}</p>
            <h2 className="display mt-3 text-[clamp(2rem,4vw,3.2rem)]">Other suburbs on this run.</h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {nearby.map((item) => (
                <li key={item.slug} className="border-t border-stone pt-4">
                  <Link
                    to={areaHubPath(item.slug)}
                    className="font-serif text-[1.8rem] leading-none no-underline hover:text-clay"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <FinalCta />
    </>
  );
}
