import { useLocation } from "react-router-dom";
import { site } from "../../data/site";
import { Button } from "../ui/Button";

export function MobileCta() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/plan-your-renovation")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone bg-paper/95 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <Button href={site.phoneHref} variant="line" className="w-full">
          Call
        </Button>
        <Button to="/plan-your-renovation" className="w-full px-3">
          Plan
        </Button>
      </div>
    </div>
  );
}
