import { Link } from "react-router-dom";

type Props = {
  invert?: boolean;
  compact?: boolean;
};

export function Wordmark({ invert, compact }: Props) {
  return (
    <Link to="/" className={`no-underline ${invert ? "text-paper" : "text-ink"}`} aria-label="Touch Home Renovations home">
      <span className={`block font-serif leading-none ${compact ? "text-[1.55rem]" : "text-[1.8rem]"}`}>Touch</span>
      <span className="folio mt-1 block opacity-80">Home Renovations</span>
    </Link>
  );
}
