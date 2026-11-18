import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ to, children, className = "" }: Props) {
  return (
    <Link
      to={to}
      className={`folio inline-flex items-center gap-3 text-ink no-underline after:block after:h-px after:w-8 after:bg-current after:transition-[width] hover:after:w-14 ${className}`}
    >
      {children}
    </Link>
  );
}
