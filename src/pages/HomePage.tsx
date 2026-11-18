import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { FinalCta } from "../components/sections/FinalCta";
import { Hero } from "../components/sections/Hero";
import { Location } from "../components/sections/Location";
import { ProcessPreview } from "../components/sections/ProcessPreview";
import { ServiceAreasPreview } from "../components/sections/ServiceAreasPreview";
import { Services } from "../components/sections/Services";
import { TeamStory } from "../components/sections/TeamStory";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { Transformation } from "../components/sections/Transformation";
import { TrustStrip } from "../components/sections/TrustStrip";
import { WhyThr } from "../components/sections/WhyThr";
import { JsonLd, localBusinessJsonLd, Seo } from "../lib/seo";

export function HomePage() {
  return (
    <>
      <Seo
        title="Home Renovations Melbourne | Bathrooms, Kitchens & Full Home Makeovers"
        description="Touch Home Renovations — quality designer homes, kitchens and bathrooms across Melbourne. Based in Epping. Free quote. 15+ years experience."
        path="/"
      />
      <JsonLd data={localBusinessJsonLd()} />
      <Hero />
      <TrustStrip />
      <Transformation />
      <Services />
      <FeaturedProjects />
      <WhyThr />
      <ProcessPreview />
      <TeamStory />
      <TestimonialSection />
      <Location />
      <ServiceAreasPreview />
      <FinalCta />
    </>
  );
}
