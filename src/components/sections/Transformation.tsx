import { useState } from "react";
import { BeforeAfterSlider } from "../before-after/BeforeAfterSlider";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";

const pairs = [
  {
    id: "bathroom",
    label: "Bathroom",
    before: "/images/ba-bath-1-before.jpg",
    after: "/images/ba-bath-1-after.jpg",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    before: "/images/ba-kitchen-a-before.webp",
    after: "/images/ba-kitchen-a-after.webp",
  },
  {
    id: "home",
    label: "Whole home",
    before: "/images/ba-home-1-before.jpg",
    after: "/images/ba-home-1-after.jpg",
  },
];

export function Transformation() {
  const [active, setActive] = useState(pairs[0]);

  return (
    <section className="relative isolate overflow-hidden bg-paper py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="Transformations"
          title="See what’s possible."
          body="Drag the line to move between the existing room and the finished renovation. These are real THR projects."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {pairs.map((pair) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => setActive(pair)}
              className={`folio min-h-11 px-4 ${
                active.id === pair.id ? "bg-olive text-paper" : "bg-transparent text-ink ring-1 ring-stone"
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <BeforeAfterSlider
            key={active.id}
            beforeSrc={active.before}
            afterSrc={active.after}
            label={`${active.label} before and after`}
          />
        </div>
      </Container>
    </section>
  );
}
