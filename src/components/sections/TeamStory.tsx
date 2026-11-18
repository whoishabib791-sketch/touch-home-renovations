import { team } from "../../data/team";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { TextLink } from "../ui/TextLink";

export function TeamStory() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container className="grid items-start gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="The team"
            title="Built from the ground up."
            body="We started from humble beginnings, working from a van, and grew into a team that manages, supervises and completes renovations across Melbourne."
          />
          <p className="mt-6 max-w-xl text-mute">
            Raz, Sez and Dee brought trade, site and design skills together as Touch Home Renovations. Homeowners
            still deal with the same people who run the job.
          </p>
          <div className="mt-8">
            <TextLink to="/about">Meet the team</TextLink>
          </div>
        </div>
        <ul className="lg:col-span-6">
          {team.map((member) => (
            <li key={member.id} className="flex items-center gap-5 border-t border-stone py-6 last:border-b">
              <span className="grid size-16 shrink-0 place-items-center bg-olive font-serif text-2xl text-paper">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div>
                <p className="font-serif text-[1.6rem] leading-none">{member.name}</p>
                <p className="folio mt-2 text-sage">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
