import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SuburbRow } from "../components/areas/SuburbRow";
import { YardCompass } from "../components/areas/YardCompass";
import { FinalCta } from "../components/sections/FinalCta";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { filterAreas, regions, regionSlug, serviceAreas } from "../data/serviceAreas";
import { site } from "../data/site";
import { Seo } from "../lib/seo";

export function ServiceAreasPage() {
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [query, setQuery] = useState("");
  const region = regions.find((item) => `#${regionSlug(item.id)}` === hash)?.id ?? "all";

  const visible = useMemo(() => filterAreas(query, region), [query, region]);
  const activeRegion = regions.find((item) => item.id === region);
  const searching = Boolean(query.trim());

  const chooseRegion = (next: string) => {
    const value = next === region ? "all" : next;
    navigate(value === "all" ? "/service-areas" : `/service-areas#${regionSlug(value)}`, { replace: true });
  };

  return (
    <>
      <Seo
        title="Service Areas"
        description="Touch Home Renovations works from Epping across Melbourne — kitchens, bathrooms and full-home renovations. Find your suburb."
        path="/service-areas"
      />

      <section className="bg-paper pt-[4.6rem]">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="folio text-sage">Service areas</p>
            <h1 className="display mt-5 max-w-[11ch] text-[clamp(2.6rem,7vw,5.4rem)]">We come from Epping.</h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mute">
              One yard on O’Herns Road. The same team travels to kitchens, bathrooms and whole-home jobs across
              Melbourne. We don’t invent a local office in every suburb.
            </p>
            <label className="mt-10 block max-w-md">
              <span className="folio text-sage">Find your suburb</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Preston, Mernda, Point Cook…"
                autoComplete="address-level2"
                className="mt-3 min-h-14 w-full min-w-0 border-b border-ink bg-transparent text-[1.2rem] outline-none placeholder:text-stone"
              />
            </label>
          </div>
          <div className="frame aspect-[4/3] w-full min-w-0 lg:col-span-6">
            <img
              src="/images/showroom-32.jpg"
              alt="Touch Home Renovations premises in Epping"
              width={1200}
              height={900}
              className="frame-fill"
            />
            <div className="absolute inset-x-0 bottom-0 bg-olive/88 p-5 text-paper">
              <p className="folio text-stone">The yard</p>
              <p className="mt-2 font-serif text-[1.35rem] leading-tight sm:text-2xl">{site.address.street}, {site.address.suburb}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="directory" className="scroll-mt-24 bg-white py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          {searching ? null : (
            <div className="lg:sticky lg:top-28 lg:col-span-6">
              <p className="folio text-sage">Corridors</p>
              <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">Pick a bearing from the yard.</h2>
              <p className="mt-4 max-w-sm text-mute">
                {activeRegion
                  ? activeRegion.line
                  : "North toward Mernda, in toward Brunswick, east to Balwyn, west as far as Point Cook."}
              </p>
              <div className="mt-8">
                <YardCompass active={region === "all" ? undefined : region} onSelect={chooseRegion} />
              </div>
            </div>
          )}

          <div className={searching ? "lg:col-span-12" : "lg:col-span-6"}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="folio text-sage">{activeRegion ? activeRegion.id : "Melbourne"}</p>
                <h2 className="display mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)]">
                  {searching
                    ? `Matching “${query.trim()}”`
                    : activeRegion
                      ? `${visible.length} suburb${visible.length === 1 ? "" : "s"} this way`
                      : `${serviceAreas.length} suburbs we list`}
                </h2>
              </div>
              {region !== "all" || searching ? (
                <button
                  type="button"
                  className="folio text-mute"
                  onClick={() => {
                    setQuery("");
                    chooseRegion("all");
                  }}
                >
                  Clear
                </button>
              ) : null}
            </div>

            {visible.length ? (
              <div className="mt-2">
                {visible.map((area) => (
                  <SuburbRow key={area.slug} area={area} />
                ))}
              </div>
            ) : (
              <div className="py-12">
                <p className="font-serif text-3xl">That suburb isn’t on this list.</p>
                <p className="mt-4 max-w-md text-mute">
                  If you’re in Melbourne, start a brief with your address. We’ll tell you whether we can take the job —
                  no invented coverage.
                </p>
                <div className="mt-8">
                  <Button to="/plan-your-renovation">Start a brief</Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <h2 className="display text-[clamp(2rem,4vw,3.4rem)] lg:col-span-5">One yard. Not a franchise.</h2>
          <div className="max-w-xl text-mute lg:col-span-7">
            <p>
              Touch Home Renovations is based in Epping. The listed suburbs are places we service from that yard — not
              separate showrooms. If your street isn’t named here, say so on the brief.
            </p>
            <p className="mt-4">
              Point Cook is the one suburb on this list with a completed whole-home project we can point to by name.
            </p>
            <div className="mt-8">
              <Button href={site.mapsUrl} variant="line">
                Get directions to Epping
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
