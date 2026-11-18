import { team } from "../../data/team";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

const points = [
  {
    title: "One accountable team",
    body: "One renovation team coordinating the people and work required across the project.",
  },
  {
    title: "Design + build thinking",
    body: "Interior design, site management and construction knowledge brought together.",
  },
  {
    title: "Clear communication",
    body: "A defined process so homeowners understand what happens next.",
  },
  {
    title: "Experienced hands",
    body: "Years of renovation and trade experience across bathrooms, kitchens and complete homes.",
  },
];

export function WhyThr() {
  return (
    <section className="bg-olive text-paper py-24 md:py-32">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            invert
            eyebrow="Why THR"
            title="Renovation without the runaround."
            body="The fear is rarely the tiles. It’s the builder, the budget, the delays, and whether anyone is actually in charge."
          />
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
