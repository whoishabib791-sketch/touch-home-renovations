import { Link } from "react-router-dom";
import { areaPath, areaServiceCopy, areaServices, type AreaService } from "../../data/serviceAreas";

type Props = {
  slug: string;
  current?: AreaService;
};

export function ServicePills({ slug, current }: Props) {
  return (
    <ul className="flex flex-wrap gap-2">
      {areaServices.map((service) => {
        const active = current === service;
        return (
          <li key={service}>
            <Link
              to={areaPath(service, slug)}
              aria-current={active ? "page" : undefined}
              className={`folio inline-flex min-h-10 items-center px-3.5 no-underline ${
                active ? "bg-olive text-paper" : "text-ink ring-1 ring-stone hover:bg-olive hover:text-paper hover:ring-olive"
              }`}
            >
              {areaServiceCopy[service].short}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
