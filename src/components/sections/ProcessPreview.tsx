import { processSteps } from "../../data/process";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { TextLink } from "../ui/TextLink";

export function ProcessPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Process"
            title="A better renovation starts with a better process."
            body="Five stages. One team. You always know what happens next."
          />
          <TextLink to="/process">How we work</TextLink>
        </div>
        <ol className="mt-16 grid gap-10 md:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.id} className="border-t border-stone pt-5">
              <p className="folio text-sage">{step.number}</p>
              <h3 className="mt-4 font-serif text-[1.8rem] leading-none">{step.title}</h3>
              <p className="mt-4 text-[0.98rem] text-mute">{step.whatHappens}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
