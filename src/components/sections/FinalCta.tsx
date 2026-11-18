import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function FinalCta() {
  return (
    <section className="bg-olive text-paper py-24 md:py-36">
      <Container>
        <p className="folio text-stone">Next step</p>
        <h2 className="display mt-6 max-w-[12ch] text-[clamp(3rem,8vw,7rem)]">
          Thinking about changing your home?
        </h2>
        <p className="mt-7 max-w-xl text-[1.1rem] text-stone">
          Tell us what you’re planning and we’ll help you take the next step — without the runaround.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/plan-your-renovation" variant="invert">
            Plan your renovation
          </Button>
          <Button href={site.phoneHref} variant="ghost">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
