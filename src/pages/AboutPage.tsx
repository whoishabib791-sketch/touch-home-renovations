import { FinalCta } from "../components/sections/FinalCta";
import { Container } from "../components/ui/Container";
import { Picture } from "../components/ui/Picture";
import { team } from "../data/team";
import { Seo } from "../lib/seo";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="The people behind Touch Home Renovations — from working out of a van to a multidisciplinary Melbourne renovation team."
        path="/about"
      />
      <section className="bg-paper pt-36 pb-20">
        <Container>
          <p className="folio text-sage">About</p>
          <h1 className="display mt-4 max-w-[14ch] text-[clamp(3rem,8vw,6.8rem)]">
            The people behind the renovation.
          </h1>
        </Container>
      </section>
      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[1.2rem] leading-relaxed">
              We started from humble beginnings, working from a van, and grew into a team that manages, supervises and
              completes renovations for homeowners across Melbourne.
            </p>
            <p className="mt-6 text-mute">
              Raz, Sez and Dee formed Touch Home Renovations by combining trade, site and interior design. The work is
              primarily renovations — bathrooms, kitchens, laundries and complete homes — rather than a general building
              company trying to be everything.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <p className="folio text-sage">In short</p>
            <ul className="mt-4 space-y-3 text-[1.05rem]">
              <li>15+ years in the building industry</li>
              <li>Trade knowledge on the tools</li>
              <li>Interior design in-house</li>
              <li>Site management through the build</li>
            </ul>
          </aside>
        </Container>
      </section>
      <section className="bg-paper py-24">
        <Container>
          <h2 className="display text-[clamp(2.2rem,5vw,4.2rem)]">The team</h2>
          <ul className="mt-14 grid gap-12 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.id}>
                <div className="grid aspect-[4/5] place-items-center bg-olive text-paper">
                  <span className="font-serif text-6xl">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-[2rem] leading-none">{member.name}</h3>
                <p className="folio mt-2 text-sage">{member.role}</p>
                {"phone" in member && member.phone ? (
                  <a href={`tel:${member.phone.replace(/\s+/g, "")}`} className="mt-3 inline-block no-underline hover:text-clay">
                    {member.phone}
                  </a>
                ) : null}
                <ul className="mt-5 space-y-2 text-mute">
                  {member.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-[2.6rem]">Our approach</h2>
            <p className="mt-5 text-mute">
              We start by listening closely to understand requirements and aspirations. Our approach is research and
              investigation rather than assumption. From those raw ingredients, ideas are developed and individually
              tailored. From initial consultation through to finishing touches, the process is peaceful and harmonious.
            </p>
          </div>
          <div>
            <h2 className="display text-[2.6rem]">Our aim</h2>
            <p className="mt-5 text-mute">
              With extensive experience at trade and professional level, we are committed to ensuring each stage of the
              development is appropriately met. Anyone undertaking a building project soon realises it is one of the
              largest capital investments of their life.
            </p>
          </div>
          <div>
            <h2 className="display text-[2.6rem]">Construction</h2>
            <p className="mt-5 text-mute">
              With our experience and commitment to high quality, you can be assured your project will be completed on
              time and to the highest standards.
            </p>
          </div>
          <div>
            <h2 className="display text-[2.6rem]">Our mission</h2>
            <p className="mt-5 text-mute">
              As a team, we share one goal — to apply exacting standards in our individual areas of work to deliver the
              very best in workmanship, quality, attention to detail and personal service.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-paper py-16">
        <Container className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Picture src="/images/kitchen-17.jpg" alt="Kitchen renovation" className="aspect-[4/5]" />
          <Picture src="/images/bath-01.jpg" alt="Bathroom renovation" className="aspect-[4/5]" />
          <Picture src="/images/living-02.jpg" alt="Living renovation" className="aspect-[4/5]" />
          <Picture src="/images/showroom-32.jpg" alt="Epping premises" className="aspect-[4/5]" />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
