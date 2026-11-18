import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Picture } from "../ui/Picture";
import { SectionHeader } from "../ui/SectionHeader";

export function Location() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Epping"
            title="Come and talk renovation."
            body="Visit the Epping premises to look at finishes and talk through the rooms you want to change."
          />
          <p className="mt-6 text-[1.15rem]">{site.address.line}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.mapsUrl} variant="line">
              Get directions
            </Button>
            <Button href={site.phoneHref} variant="line">
              Call
            </Button>
            <Button to="/plan-your-renovation">Plan a consultation</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-7">
          <Picture src="/images/showroom-32.jpg" alt="Touch Home Renovations Epping premises" className="aspect-[4/5]" />
          <Picture src="/images/showroom-39.jpg" alt="Samples and finishes at the Epping premises" className="mt-10 aspect-[4/5]" />
        </div>
      </Container>
    </section>
  );
}
