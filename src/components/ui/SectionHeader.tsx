type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  invert?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, body, invert, className = "" }: Props) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className={`folio mb-5 ${invert ? "text-stone" : "text-sage"}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`display text-[clamp(2.4rem,6vw,5.4rem)] ${invert ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-6 max-w-xl text-[1.05rem] leading-relaxed ${invert ? "text-stone" : "text-mute"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
