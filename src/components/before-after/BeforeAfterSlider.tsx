import { useId, useRef, useState } from "react";
import { Draggable, gsap, useGSAP } from "../../lib/gsap";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  label?: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "The room before renovation",
  afterAlt = "The finished renovation",
  label = "Drag to compare before and after",
  className = "",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(50);
  const valueRef = useRef(50);
  const labelId = useId();

  const apply = (percent: number) => {
    const next = gsap.utils.clamp(0, 100, percent);
    valueRef.current = next;
    setValue(next);
    const track = trackRef.current;
    if (!track || !beforeRef.current || !handleRef.current) return;
    gsap.set(beforeRef.current, { clipPath: `inset(0 ${100 - next}% 0 0)` });
    gsap.set(handleRef.current, { x: (next / 100) * track.offsetWidth });
  };

  useGSAP(
    () => {
      const track = trackRef.current;
      const handle = handleRef.current;
      if (!track || !handle) return;

      apply(50);

      const [drag] = Draggable.create(handle, {
        type: "x",
        bounds: track,
        inertia: true,
        edgeResistance: 0.85,
        zIndexBoost: false,
        onDrag() {
          apply((this.x / track.offsetWidth) * 100);
        },
        onThrowUpdate() {
          apply((this.x / track.offsetWidth) * 100);
        },
      });

      const onResize = () => apply(valueRef.current);
      window.addEventListener("resize", onResize);

      return () => {
        drag.kill();
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: rootRef },
  );

  const onTrackPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("[data-handle]")) return;
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    apply(((event.clientX - rect.left) / rect.width) * 100);
  };

  return (
    <div ref={rootRef} className={`relative isolate ${className}`}>
      <p id={labelId} className="sr-only">
        {label}
      </p>
      <div
        ref={trackRef}
        className="frame aspect-[4/3] cursor-ew-resize select-none sm:aspect-[3/2]"
        onPointerDown={onTrackPointer}
      >
        <img src={afterSrc} alt={afterAlt} className="frame-fill" draggable={false} />
        <div ref={beforeRef} className="absolute inset-0 overflow-hidden">
          <img src={beforeSrc} alt={beforeAlt} className="frame-fill" draggable={false} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-5 z-20 flex justify-between px-5">
          <span className="folio bg-paper/90 px-3 py-1.5 text-ink">Before</span>
          <span className="folio bg-olive/90 px-3 py-1.5 text-paper">After</span>
        </div>
        <div
          ref={handleRef}
          data-handle
          className="absolute top-0 left-0 z-30 h-full w-px cursor-grab touch-none active:cursor-grabbing"
          style={{ touchAction: "none" }}
        >
          <span className="absolute inset-y-0 left-0 w-px bg-paper" />
          <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-olive shadow-[0_8px_24px_rgba(32,33,31,0.18)]">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
              <path d="M5 1L1 6l4 5M13 1l4 5-4 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        aria-labelledby={labelId}
        className="sr-only"
        onChange={(event) => apply(Number(event.target.value))}
      />
    </div>
  );
}
