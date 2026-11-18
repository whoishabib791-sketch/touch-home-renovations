import { FinalCta } from "../components/sections/FinalCta";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Picture } from "../components/ui/Picture";
import { site } from "../data/site";
import { Seo } from "../lib/seo";

const gallery = [
  "/images/showroom-31.jpg",
  "/images/showroom-32.jpg",
  "/images/showroom-33.jpg",
  "/images/showroom-34.jpg",
  "/images/showroom-35.jpg",
  "/images/showroom-36.jpg",
  "/images/showroom-39.jpg",
  "/images/showroom-40.jpg",
];

export function ShowroomPage() {
  return (
    <>
      <Seo
        title="Showroom"
        description="Visit the Touch Home Renovations premises in Epping to talk through kitchens, bathrooms and full-home renovations with the team."
        path="/showroom"
      />
      <section className="bg-paper pt-36 pb-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="folio text-sage">Epping premises</p>
            <h1 className="display mt-4 max-w-[12ch] text-[clamp(3rem,8vw,6.5rem)]">See the work up close.</h1>
            <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-mute">
              Our yard and showroom at {site.address.line} is where selections, samples and project conversations happen —
              not a retail storefront, the working home of Touch Home Renovations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.phoneHref}>Call {site.phone}</Button>
              <Button to="/plan-your-renovation" variant="line">
                Book a visit
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-stone bg-white p-8">
              <p className="folio text-sage">Visit</p>
              <p className="mt-4 font-serif text-3xl leading-none">{site.address.street}</p>
              <p className="mt-3 text-mute">
                {site.address.suburb} {site.address.state} {site.address.postcode}
              </p>
              <a href={site.mapsUrl} className="folio mt-6 inline-block text-clay no-underline hover:opacity-80">
                Open in Maps →
              </a>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-24">
        <Container>
          <p className="folio text-sage">On site</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.6rem)]">Materials, finishes and the yard.</h2>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {gallery.map((src, index) => (
              <Picture
                key={src}
                src={src}
                alt={`Touch Home Renovations showroom and premises in Epping, photo ${index + 1}`}
                className="aspect-[4/5]"
              />
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
