import { Link } from "react-router-dom";
import { areaHubPath, type ServiceArea } from "../../data/serviceAreas";
import { ServicePills } from "./ServicePills";

const badges = {
  yard: "The yard",
  completed: "Completed work",
} as const;

export function SuburbRow({ area }: { area: ServiceArea }) {
  return (
    <article className="border-t border-stone py-7">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h3 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none">
          <Link to={areaHubPath(area.slug)} className="no-underline hover:text-clay">
            {area.name}
          </Link>
        </h3>
        {area.badge ? <p className="folio text-clay">{badges[area.badge]}</p> : null}
      </div>
      <p className="mt-2 text-mute">
        {area.region}
        {area.isBase ? " · 147 O’Herns Road" : " · from Epping"}
      </p>
      <div className="mt-4">
        <ServicePills slug={area.slug} />
      </div>
    </article>
  );
}
