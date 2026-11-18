import { site } from "../../data/site";
import { Container } from "../ui/Container";

const items = [
  { label: "Google reviews", value: `${site.googleReviews}+ verified reviews` },
  { label: "Experience", value: `${site.experienceYears} years in renovation` },
  { label: "Based", value: "Epping, servicing Melbourne" },
  { label: "Capability", value: "Home, kitchen, bathroom, laundry & decking" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-stone bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4 lg:py-12">
        {items.map((item) => (
          <div key={item.label}>
            <p className="folio text-sage">{item.label}</p>
            <p className="mt-2 text-[1.02rem] leading-snug">{item.value}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
