import { site } from "../../data/site";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="bg-paper pt-[4.6rem]">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-16">
        <div className="lg:col-span-5">
          <p className="folio text-sage">Epping · Melbourne</p>
          <h1 className="display mt-5 text-[clamp(2.8rem,7vw,5.8rem)]">
            Welcome to
            <br />
            Touch Home Renovations
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mute">{site.welcome}</p>
          <p className="mt-4 font-serif text-[1.35rem] text-ink">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/plan-your-renovation">Get your free quote</Button>
            <Button to="/projects" variant="line">
              Explore our work
            </Button>
          </div>
        </div>
        <div className="frame aspect-[3/2] w-full lg:col-span-7">
          <img
            src="/images/kitchen-04.jpg"
            alt="A finished Touch Home Renovations kitchen with white cabinetry, stone benches and gold hardware"
            width={1000}
            height={666}
            fetchPriority="high"
            className="frame-fill"
          />
        </div>
      </div>
    </section>
  );
}
