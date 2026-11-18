import { Link, Navigate, useParams } from "react-router-dom";
import { AreaSwitcher } from "../components/areas/AreaSwitcher";
import { FinalCta } from "../components/sections/FinalCta";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { getNearbyAreas, getRegion, getServiceArea } from "../data/serviceAreas";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { JsonLd, Seo } from "../lib/seo";

export function ServiceSuburbPage() {
  const { suburb } = useParams();
  const area = suburb ? getServiceArea(suburb) : undefined;

  if (!area) return <Navigate to="/service-areas" replace />;

  const region = getRegion(area.region);
  const nearby = getNearbyAreas(area.slug);
  const project = projects.find((item) => item.suburb === area.name);
  const image = area.isBase
    ? "/images/showroom-32.jpg"
    : project
      ? "/images/kitchen-05.jpg"
      : (region?.image ?? "/images/kitchen-04.jpg");

  return (
    <>
      <Seo
        title={`Renovations in ${area.name}`}
        description={`Touch Home Renovations services ${area.name} from Epping — bathrooms, kitchens and full-home renovations.`}
        path={`/service-areas/${area.slug}`}
        image={image}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.origin}/` },
            { "@type": "ListItem", position: 2, name: "Service areas", item: `${site.origin}/service-areas` },
            { "@type": "ListItem", position: 3, name: area.name, item: `${site.origin}/service-areas/${area.slug}` },
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
              {area.region}
            </p>
            <h1 className="display mt-5 text-[clamp(2.8rem,7vw,5.8rem)]">{area.name}.</h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mute">{area.intro}</p>
            <p className="mt-4 text-mute">
              {area.isBase
                ? `The yard is here — ${site.address.line}.`
                : `We are not based in ${area.name}. The team travels from Epping.`}
            </p>
            <div className="mt-8">
              <AreaSwitcher slug={area.slug} current="overview" />
            </div>
          </div>
          <div className="frame aspect-[4/3] w-full min-w-0 lg:col-span-6">
            <img src={image} alt={area.isBase ? "The Epping premises" : `Renovation work in the ${area.region.toLowerCase()} of Melbourne`} className="frame-fill" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="folio text-sage">What we take on</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Bathrooms, kitchens, the whole house.</h2>
            <p className="mt-5 max-w-md text-mute">
              Same process from Epping whether the job is a wet area or a wider renovation. Use the tabs above for the
              room you’re planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/plan-your-renovation">Plan a renovation in {area.name}</Button>
              <Button href={site.phoneHref} variant="line">
                Call {site.phone}
              </Button>
            </div>
          </div>
          {project ? (
            <aside className="border border-stone bg-paper p-6 lg:col-span-6 lg:p-8">
              <p className="folio text-sage">Work we can name</p>
              <p className="mt-4 font-serif text-[2rem] leading-none">{project.title}</p>
              <p className="mt-4 text-mute">{project.overview}</p>
              <div className="frame mt-6 aspect-[3/2]">
                <img src={project.heroImage} alt={project.title} className="frame-fill" />
              </div>
              <Link to={`/projects/${project.slug}`} className="folio mt-6 inline-block no-underline hover:text-clay">
                View the project
              </Link>
            </aside>
          ) : area.isBase ? (
            <aside className="border border-stone bg-paper p-6 lg:col-span-6 lg:p-8">
              <p className="folio text-sage">Visit</p>
              <p className="mt-4 font-serif text-[2rem] leading-none">Come and talk through the rooms.</p>
              <p className="mt-4 text-mute">
                The office and sample space are here. Look at finishes, then start a brief if the job is a fit.
              </p>
              <div className="mt-6">
                <Button href={site.mapsUrl} variant="line">
                  Get directions
                </Button>
              </div>
            </aside>
          ) : (
            <aside className="border border-stone bg-paper p-6 lg:col-span-6 lg:p-8">
              <p className="folio text-sage">Coverage</p>
              <p className="mt-4 font-serif text-[2rem] leading-none">Serviced from the yard.</p>
              <p className="mt-4 text-mute">
                We list {area.name} because we take work here. We don’t invent a completed project or a local office
                for this suburb.
              </p>
            </aside>
          )}
        </Container>
      </section>

      {nearby.length ? (
        <section className="bg-paper py-20">
          <Container>
            <p className="folio text-sage">{area.region}</p>
            <h2 className="display mt-3 text-[clamp(2rem,4vw,3.2rem)]">Nearby on the same run.</h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {nearby.map((item) => (
                <li key={item.slug} className="border-t border-stone pt-4">
                  <Link
                    to={`/service-areas/${item.slug}`}
                    className="font-serif text-[1.8rem] leading-none no-underline hover:text-clay"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-3 text-sm text-mute">From Epping</p>
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
