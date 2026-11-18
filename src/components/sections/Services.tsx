import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { Container } from "../ui/Container";
import { Picture } from "../ui/Picture";
import { SectionHeader } from "../ui/SectionHeader";

export function Services() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="Our services"
          title="One team. Every space."
          body="Touch Home Renovations specialise in home renovations across Melbourne — taking your ideas and combining them with expertise to deliver a renovation suited to your lifestyle and budget."
        />
        <div className="mt-16 flex flex-col">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="group grid items-center gap-8 border-t border-stone py-10 no-underline last:border-b md:grid-cols-12 md:py-14"
            >
              <div className="md:col-span-5">
                <p className="folio text-sage">{service.eyebrow}</p>
                <h3 className="display mt-3 text-[clamp(2rem,4vw,3.4rem)]">{service.title}</h3>
                <p className="mt-4 max-w-md text-mute">{service.summary}</p>
                <p className="folio mt-6 text-clay">View {service.shortTitle.toLowerCase()}</p>
              </div>
              <Picture
                src={service.image}
                alt={service.title}
                className="aspect-[16/10] md:col-span-7"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
