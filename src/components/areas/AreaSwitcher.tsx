import { NavLink } from "react-router-dom";
import { areaHubPath, areaPath, areaServiceCopy, areaServices, type AreaService } from "../../data/serviceAreas";

type Props = {
  slug: string;
  current?: AreaService | "overview";
};

export function AreaSwitcher({ slug, current = "overview" }: Props) {
  const items = [
    { id: "overview" as const, label: "Overview", to: areaHubPath(slug) },
    ...areaServices.map((service) => ({
      id: service,
      label: areaServiceCopy[service].short,
      to: areaPath(service, slug),
    })),
  ];

  return (
    <nav aria-label="Work in this suburb" className="flex flex-wrap gap-2">
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          aria-current={current === item.id ? "page" : undefined}
          className={`folio inline-flex min-h-10 items-center px-3.5 no-underline ${
            current === item.id ? "bg-olive text-paper" : "ring-1 ring-stone hover:bg-olive hover:text-paper hover:ring-olive"
          }`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
