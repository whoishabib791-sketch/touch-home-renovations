import { Container } from "../ui/Container";

const items = [
  { label: "Google reviews", value: "Homeowners across Melbourne" },
  { label: "Experience", value: "15+ years in renovation" },
  { label: "Based", value: "Epping, servicing Melbourne" },
  { label: "Capability", value: "Full-home, kitchen, bathroom, laundry" },
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
