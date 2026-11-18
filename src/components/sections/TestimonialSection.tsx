import { testimonials } from "../../data/testimonials";
import { TestimonialFeature } from "../reviews/TestimonialFeature";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { TextLink } from "../ui/TextLink";

export function TestimonialSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="Reviews" title="What homeowners actually said." />
          <TextLink to="/reviews">Read more reviews</TextLink>
        </div>
        <TestimonialFeature items={testimonials.slice(0, 5)} />
      </Container>
    </section>
  );
}
