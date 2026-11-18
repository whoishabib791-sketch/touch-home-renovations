import { Link } from "react-router-dom";
import { areaHubPath, getFeaturedAreas } from "../../data/serviceAreas";
import { services } from "../../data/services";
import { site } from "../../data/site";
import { Container } from "../ui/Container";
import { Wordmark } from "./Wordmark";

const company = [
  { label: "Projects", to: "/projects" },
  { label: "Before & After", to: "/before-and-after" },
  { label: "Showroom", to: "/showroom" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const areas = getFeaturedAreas();

  return (
    <footer className="border-t border-stone bg-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Wordmark />
          <p className="mt-6 max-w-xs text-[0.95rem] text-mute">
            Touch Home Renovations, based in Epping, VIC, provides high-quality home renovations including kitchen,
            bathroom and full home remodels across Melbourne.
          </p>
        </div>
        <div>
          <p className="folio text-sage">Renovations</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={service.path} className="no-underline hover:text-clay">
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="folio text-sage">Company</p>
          <ul className="mt-4 space-y-2">
            {company.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="no-underline hover:text-clay">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="folio text-sage">Service areas</p>
          <ul className="mt-4 space-y-2">
            {areas.slice(0, 6).map((area) => (
              <li key={area.slug}>
                <Link to={areaHubPath(area.slug)} className="no-underline hover:text-clay">
                  {area.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className="no-underline hover:text-clay">
                View all
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="folio text-sage">Contact</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={site.phoneHref} className="no-underline hover:text-clay">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="no-underline hover:text-clay">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} className="no-underline hover:text-clay">
                {site.address.line}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-5">
            <a href={site.social.instagram} className="folio no-underline hover:text-clay">
              Instagram
            </a>
            <a href={site.social.facebook} className="folio no-underline hover:text-clay">
              Facebook
            </a>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-stone py-6 text-[0.85rem] text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Touch Home Renovations. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="no-underline hover:text-ink">
            Privacy
          </Link>
          <Link to="/terms" className="no-underline hover:text-ink">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
