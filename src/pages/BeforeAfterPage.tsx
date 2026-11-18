import { BeforeAfterSlider } from "../components/before-after/BeforeAfterSlider";
import { FinalCta } from "../components/sections/FinalCta";
import { Container } from "../components/ui/Container";
import { Seo } from "../lib/seo";

const pairs = [
  {
    id: "bath-1",
    label: "Bathroom",
    before: "/images/ba-bath-1-before.jpg",
    after: "/images/ba-bath-1-after.jpg",
  },
  {
    id: "bath-2",
    label: "Ensuite",
    before: "/images/ba-bath-2-before.jpg",
    after: "/images/ba-bath-2-after.jpg",
  },
  {
    id: "bath-4",
    label: "Family bathroom",
    before: "/images/ba-bath-4-before.jpg",
    after: "/images/ba-bath-4-after.jpg",
  },
  {
    id: "bath-5",
    label: "Bathroom remodel",
    before: "/images/ba-bath-5-before.jpg",
    after: "/images/ba-bath-5-after.jpg",
  },
  {
    id: "bath-7",
    label: "Wet area",
    before: "/images/ba-bath-7-before.jpg",
    after: "/images/ba-bath-7-after.jpg",
  },
  {
    id: "bath-8",
    label: "Bathroom finish",
    before: "/images/ba-bath-8-before.jpg",
    after: "/images/ba-bath-8-after.jpg",
  },
  {
    id: "bath-9",
    label: "Bathroom detail",
    before: "/images/ba-bath-9-before.jpg",
    after: "/images/ba-bath-9-after.jpg",
  },
  {
    id: "kitchen-a",
    label: "Kitchen",
    before: "/images/ba-kitchen-a-before.webp",
    after: "/images/ba-kitchen-a-after.webp",
  },
  {
    id: "kitchen-b",
    label: "Kitchen layout",
    before: "/images/ba-kitchen-b-before.webp",
    after: "/images/ba-kitchen-b-after.webp",
  },
  {
    id: "laundry-a",
    label: "Laundry",
    before: "/images/ba-laundry-a-before.webp",
    after: "/images/ba-laundry-a-after.webp",
  },
  {
    id: "laundry-b",
    label: "Compact laundry",
    before: "/images/ba-laundry-b-before.webp",
    after: "/images/ba-laundry-b-after.webp",
  },
  {
    id: "home-1",
    label: "Whole home",
    before: "/images/ba-home-1-before.jpg",
    after: "/images/ba-home-1-after.jpg",
  },
];

export function BeforeAfterPage() {
  return (
    <>
      <Seo
        title="Before and After"
        description="Real before and after renovations from Touch Home Renovations — bathrooms, kitchens, laundries and full homes across Melbourne."
        path="/before-and-after"
      />
      <section className="bg-paper pt-36 pb-16">
        <Container>
          <p className="folio text-sage">Proof</p>
          <h1 className="display mt-4 max-w-[14ch] text-[clamp(3rem,8vw,6.5rem)]">Before and after.</h1>
          <p className="mt-6 max-w-2xl text-mute">
            Real Touch Home Renovations projects. Drag each slider to move between the existing room and the finished
            result.
          </p>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-16 md:gap-20">
          {pairs.map((pair) => (
            <article key={pair.id}>
              <p className="folio text-sage">{pair.label}</p>
              <h2 className="display mt-3 text-[clamp(1.8rem,4vw,2.8rem)]">{pair.label} transformation</h2>
              <div className="mt-8">
                <BeforeAfterSlider beforeSrc={pair.before} afterSrc={pair.after} label={`${pair.label} before and after`} />
              </div>
            </article>
          ))}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
