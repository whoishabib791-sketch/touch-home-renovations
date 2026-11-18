import { useMemo, useState } from "react";
import { TestimonialFeature } from "../components/reviews/TestimonialFeature";
import { FinalCta } from "../components/sections/FinalCta";
import { Container } from "../components/ui/Container";
import { site } from "../data/site";
import { testimonials, type TestimonialCategory } from "../data/testimonials";
import { Seo } from "../lib/seo";

const filters: { id: "all" | TestimonialCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bathroom", label: "Bathroom" },
  { id: "full-home", label: "Full home" },
];

export function ReviewsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const items = useMemo(
    () => (filter === "all" ? testimonials : testimonials.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <>
      <Seo
        title="Reviews"
        description="Google reviews from homeowners who renovated kitchens, bathrooms and complete homes with Touch Home Renovations."
        path="/reviews"
      />
      <section className="bg-paper pt-36 pb-24">
        <Container>
          <p className="folio text-sage">Reviews</p>
          <h1 className="display mt-4 text-[clamp(3rem,8vw,6.5rem)]">From the people who lived through it.</h1>
          <p className="mt-6 max-w-xl text-mute">
            Real Google reviews from homeowners across Melbourne. Touch Home Renovations is rated Excellent based on{" "}
            {site.googleReviews} Google reviews.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`folio min-h-11 px-4 ${
                  filter === item.id ? "bg-olive text-paper" : "ring-1 ring-stone"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-16">
            <TestimonialFeature items={items} />
          </div>
          <p className="mt-12 text-sm text-mute">
            Read more on{" "}
            <a href="https://www.google.com/search?q=Touch+Home+Renovations+Epping+reviews">Google</a>.
          </p>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
