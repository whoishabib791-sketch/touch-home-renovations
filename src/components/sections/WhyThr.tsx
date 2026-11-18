import { team } from "../../data/team";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { TextLink } from "../ui/TextLink";

const points = [
  {
    title: "From humble beginnings",
    body: "We started from humble beginnings, working from a van many years ago — to where we are now: managing, supervising and completing high quality renovations for our numerous satisfied clients.",
  },
  {
    title: "Experienced & qualified",
    body: "Experienced staff and skilled, qualified tradies combined means work of the highest quality. We simply have the magic touch.",
  },
  {
    title: "Generations of knowledge",
    body: "Skills and workmanship passed on from generation to generation — from small projects to the latest modern and contemporary designs of today.",
  },
  {
    title: "One accountable team",
    body: "Kitchen, bathroom and full-home transformations coordinated by one renovation team from the Epping yard.",
  },
];

export function WhyThr() {
  return (
    <section className="bg-olive text-paper py-24 md:py-32">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            invert
            eyebrow="Why Touch Home Renovations"
            title="You dream it, we build it."
            body="Our team specialises in high-quality transformations that enhance comfort, style and property value — kitchens, bathrooms and complete home renovations."
          />
          <p className="mt-8">
            <TextLink to="/about" className="text-stone hover:text-paper">
              Read more about the company →
            </TextLink>
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-10 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point.title} className="border-t border-white/15 pt-5">
                <h3 className="font-serif text-[1.7rem] leading-tight">{point.title}</h3>
                <p className="mt-3 text-stone">{point.body}</p>
              </div>
            ))}
          </div>
          <p className="folio mt-12 text-stone">
            {team.map((member) => `${member.name}, ${member.role}`).join(" · ")}
          </p>
        </div>
      </Container>
    </section>
  );
}
