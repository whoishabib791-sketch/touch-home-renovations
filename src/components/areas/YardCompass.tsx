import { Link } from "react-router-dom";
import { areaHubPath, regions } from "../../data/serviceAreas";
import { site } from "../../data/site";

type Props = {
  active?: string;
  onSelect: (region: string) => void;
};

export function YardCompass({ active, onSelect }: Props) {
  return (
    <div className="border border-stone bg-white">
      <Link to={areaHubPath("epping")} className="block bg-olive px-5 py-6 text-paper no-underline">
        <p className="folio text-stone">The yard</p>
        <p className="mt-2 font-serif text-3xl leading-none">Epping</p>
        <p className="mt-3 text-sm text-stone">{site.address.line}</p>
      </Link>
      <div className="grid sm:grid-cols-2" role="group" aria-label="Melbourne corridors from Epping">
        {regions.map((region) => (
          <button
            key={region.id}
            type="button"
            aria-pressed={active === region.id}
            onClick={() => onSelect(region.id)}
            className={`min-h-[5.5rem] border-t border-stone px-5 py-4 text-left sm:odd:border-r ${
              active === region.id ? "bg-olive text-paper" : "bg-white hover:bg-paper"
            }`}
          >
            <span className="folio opacity-70">{region.bearing}</span>
            <span className="mt-2 block font-serif text-[1.7rem] leading-none">{region.id}</span>
          </button>
        ))}
        <button
          type="button"
          aria-pressed={!active}
          onClick={() => onSelect("all")}
          className={`min-h-[5.5rem] border-t border-stone px-5 py-4 text-left sm:odd:border-r ${
            !active ? "bg-olive text-paper" : "bg-white hover:bg-paper"
          }`}
        >
          <span className="folio opacity-70">All</span>
          <span className="mt-2 block font-serif text-[1.7rem] leading-none">Melbourne</span>
        </button>
      </div>
    </div>
  );
}
