import { useState } from "react";
import type { Testimonial } from "../../data/testimonials";
import { Picture } from "../ui/Picture";

type Props = {
  items: Testimonial[];
};

export function TestimonialFeature({ items }: Props) {
  const [index, setIndex] = useState(0);
  const current = items[index];
  if (!current) return null;

  const go = (next: number) => {
    setIndex((next + items.length) % items.length);
  };

  return (
    <div className="grid items-stretch gap-10 lg:grid-cols-12">
      <blockquote className="flex flex-col justify-between lg:col-span-6">
        <p className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.2] text-balance">
          “{current.quote}”
        </p>
        <footer className="mt-10">
          <cite className="not-italic">
            <span className="block font-medium">{current.name}</span>
            <span className="folio mt-2 block text-sage">
              Google · {current.project}
              {current.suburb ? ` · ${current.suburb}` : ""}
            </span>
          </cite>
          <div className="mt-8 flex items-center gap-4">
            <button type="button" className="folio min-h-11" onClick={() => go(index - 1)}>
              Previous
            </button>
            <span className="folio text-sage">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button type="button" className="folio min-h-11" onClick={() => go(index + 1)}>
              Next
            </button>
          </div>
        </footer>
      </blockquote>
      <Picture
        src={current.image}
        alt={`Finished work related to ${current.project}`}
        className="aspect-[4/5] h-full lg:col-span-6 lg:aspect-auto lg:min-h-[36rem]"
      />
    </div>
  );
}
