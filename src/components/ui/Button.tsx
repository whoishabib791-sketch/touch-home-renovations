import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "solid" | "ghost" | "invert" | "line";

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const styles: Record<Variant, string> = {
  solid:
    "bg-olive text-paper hover:bg-ink",
  ghost:
    "bg-transparent text-paper ring-1 ring-white/40 hover:bg-white/10",
  invert:
    "bg-paper text-olive hover:bg-white",
  line:
    "bg-transparent text-ink ring-1 ring-ink/20 hover:ring-ink",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition-colors disabled:opacity-50";

export function Button({
  to,
  href,
  children,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
  disabled,
}: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
