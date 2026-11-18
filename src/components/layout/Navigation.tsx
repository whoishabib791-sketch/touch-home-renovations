import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav, primaryCta, site } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Wordmark } from "./Wordmark";

export function Navigation() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [renovationsOpen, setRenovationsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setRenovationsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-ink transition-colors duration-300 ${
        open ? "border-stone bg-paper" : scrolled ? "border-stone/70 bg-paper/92 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <Container className="flex h-[4.6rem] items-center justify-between gap-6">
        <Wordmark compact />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  className="folio flex items-center gap-2 bg-transparent"
                  aria-expanded={renovationsOpen}
                  onClick={() => setRenovationsOpen((value) => !value)}
                  onMouseEnter={() => setRenovationsOpen(true)}
                >
                  {item.label}
                  <span aria-hidden className="text-[0.65rem]">
                    ▾
                  </span>
                </button>
                {renovationsOpen ? (
                  <div
                    className="absolute top-full left-0 z-20 mt-4 min-w-[16rem] border border-stone bg-paper p-4 text-ink shadow-[0_18px_40px_rgba(32,33,31,0.08)]"
                    onMouseLeave={() => setRenovationsOpen(false)}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block px-2 py-2.5 text-[0.95rem] no-underline hover:text-clay"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className="folio no-underline opacity-90 hover:opacity-100">
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={site.phoneHref} className="folio no-underline opacity-80 hover:opacity-100">
            {site.phone}
          </a>
          <Button to={primaryCta.to}>
            {primaryCta.label}
          </Button>
        </div>
        <button
          type="button"
          className="folio lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="fixed inset-0 top-[4.6rem] z-40 overflow-y-auto bg-paper text-ink lg:hidden">
          <Container className="flex min-h-[calc(100svh-4.6rem)] flex-col justify-between py-10">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-stone py-4">
                  {"children" in item && item.children ? (
                    <>
                      <p className="folio text-sage">{item.label}</p>
                      <div className="mt-3 flex flex-col">
                        {item.children.map((child) => (
                          <Link key={child.to} to={child.to} className="display py-2 text-[2.1rem] no-underline">
                            {child.label.replace(" Renovations", "")}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to={item.to} className="display text-[2.4rem] no-underline">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-3">
              <Button to={primaryCta.to}>Plan your renovation</Button>
              <Button href={site.phoneHref} variant="line">
                Call {site.phone}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
