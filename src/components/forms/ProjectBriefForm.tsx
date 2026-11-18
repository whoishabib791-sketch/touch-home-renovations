import { useState } from "react";
import {
  budgets,
  contacts,
  emptyBrief,
  improvements,
  rooms,
  stages,
  timings,
  type BriefState,
} from "../../data/brief";
import { site } from "../../data/site";
import { Button } from "../ui/Button";

const steps = [
  "What are you renovating?",
  "Where is your property?",
  "What are you hoping to improve?",
  "Your project stage",
  "Approximate budget",
  "When would you like to start?",
  "Show us the space",
  "Contact details",
];

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function Choice({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-16 border px-5 py-4 text-left text-[1.05rem] transition-colors ${
        selected ? "border-olive bg-olive text-paper" : "border-stone bg-white hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}

export function ProjectBriefForm() {
  const [step, setStep] = useState(0);
  const [brief, setBrief] = useState<BriefState>(emptyBrief);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = <K extends keyof BriefState>(key: K, value: BriefState[K]) => {
    setBrief((current) => ({ ...current, [key]: value }));
    setError("");
  };

  const validate = () => {
    if (step === 0 && brief.rooms.length === 0) return "Choose at least one space.";
    if (step === 1 && !brief.suburb.trim()) return "Add your suburb.";
    if (step === 2 && brief.improvements.length === 0) return "Choose what you want to improve.";
    if (step === 3 && !brief.stage) return "Choose your project stage.";
    if (step === 4 && !brief.budget) return "Choose a budget range, or not sure yet.";
    if (step === 5 && !brief.timing) return "Choose a timing.";
    if (step === 7 && (!brief.name.trim() || !brief.phone.trim())) return "Name and phone are required.";
    return "";
  };

  const next = () => {
    const message = validate();
    if (message) {
      setError(message);
      return;
    }
    if (step === steps.length - 1) {
      setDone(true);
      return;
    }
    setStep((value) => value + 1);
  };

  if (done) {
    return (
      <div className="border border-stone bg-white px-6 py-16 text-center md:px-12">
        <p className="folio text-sage">Brief received</p>
        <h2 className="display mt-4 text-[clamp(2.4rem,6vw,4.4rem)]">We’ll take it from here.</h2>
        <p className="mx-auto mt-6 max-w-md text-mute">
          Thanks {brief.name}. This demo keeps the brief in the browser. On a live site it would go to the THR team.
        </p>
        <p className="mt-8 text-[1.1rem]">{brief.rooms.join(", ")}</p>
        <p className="text-mute">
          {brief.suburb}
          {brief.postcode ? ` ${brief.postcode}` : ""} · {brief.budget} · {brief.timing}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={site.phoneHref} variant="line">
            Or call {site.phone}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-stone bg-white">
      <div className="flex items-center justify-between border-b border-stone px-5 py-4 md:px-8">
        <p className="folio text-sage">
          Step {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </p>
        <p className="hidden text-sm text-mute sm:block">Frontend prototype — nothing is sent to a server.</p>
      </div>
      <div className="px-5 py-10 md:px-10 md:py-14">
        <h2 className="display text-[clamp(2rem,5vw,3.6rem)]">{steps[step]}</h2>

        {step === 0 ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {rooms.map((item) => (
              <Choice key={item} selected={brief.rooms.includes(item)} onClick={() => set("rooms", toggle(brief.rooms, item))}>
                {item}
              </Choice>
            ))}
          </div>
        ) : null}

        {step === 1 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <label>
              <span className="folio text-sage">Suburb</span>
              <input
                className="mt-2 min-h-12 w-full border-b border-stone bg-transparent"
                value={brief.suburb}
                onChange={(event) => set("suburb", event.target.value)}
                autoComplete="address-level2"
              />
            </label>
            <label>
              <span className="folio text-sage">Postcode</span>
              <input
                className="mt-2 min-h-12 w-full border-b border-stone bg-transparent"
                value={brief.postcode}
                onChange={(event) => set("postcode", event.target.value)}
                inputMode="numeric"
                autoComplete="postal-code"
              />
            </label>
            <p className="text-sm text-mute sm:col-span-2">
              Based in Epping, servicing homeowners across Melbourne. We won’t reject a suburb in this demo.
            </p>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {improvements.map((item) => (
              <Choice
                key={item}
                selected={brief.improvements.includes(item)}
                onClick={() => set("improvements", toggle(brief.improvements, item))}
              >
                {item}
              </Choice>
            ))}
          </div>
        ) : null}

        {step === 3 ? (
          <div className="mt-10 grid gap-3">
            {stages.map((item) => (
              <Choice key={item} selected={brief.stage === item} onClick={() => set("stage", item)}>
                {item}
              </Choice>
            ))}
          </div>
        ) : null}

        {step === 4 ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {budgets.map((item) => (
              <Choice key={item} selected={brief.budget === item} onClick={() => set("budget", item)}>
                {item}
              </Choice>
            ))}
            <p className="text-sm text-mute sm:col-span-2">
              Budget ranges are placeholders and should be confirmed with THR before a live launch.
            </p>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="mt-10 grid gap-3">
            {timings.map((item) => (
              <Choice key={item} selected={brief.timing === item} onClick={() => set("timing", item)}>
                {item}
              </Choice>
            ))}
          </div>
        ) : null}

        {step === 6 ? (
          <div className="mt-10">
            <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center border border-dashed border-stone bg-paper px-6 text-center">
              <span className="folio text-sage">Photos, plans, inspiration</span>
              <span className="mt-3 max-w-md text-mute">
                Files stay on this device. Nothing is uploaded in the demo.
              </span>
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                className="sr-only"
                onChange={(event) => {
                  const files = Array.from(event.target.files ?? []).map((file) => ({
                    name: file.name,
                    size: file.size,
                  }));
                  set("files", files);
                }}
              />
            </label>
            {brief.files.length ? (
              <ul className="mt-4 space-y-2 text-sm text-mute">
                {brief.files.map((file) => (
                  <li key={file.name}>
                    {file.name} · {Math.round(file.size / 1024)}kb
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {step === 7 ? (
          <div className="mt-10 grid gap-6">
            <label>
              <span className="folio text-sage">Name</span>
              <input
                className="mt-2 min-h-12 w-full border-b border-stone bg-transparent"
                value={brief.name}
                onChange={(event) => set("name", event.target.value)}
                autoComplete="name"
              />
            </label>
            <label>
              <span className="folio text-sage">Phone</span>
              <input
                className="mt-2 min-h-12 w-full border-b border-stone bg-transparent"
                value={brief.phone}
                onChange={(event) => set("phone", event.target.value)}
                autoComplete="tel"
              />
            </label>
            <label>
              <span className="folio text-sage">Email</span>
              <input
                className="mt-2 min-h-12 w-full border-b border-stone bg-transparent"
                type="email"
                value={brief.email}
                onChange={(event) => set("email", event.target.value)}
                autoComplete="email"
              />
            </label>
            <fieldset>
              <legend className="folio text-sage">Preferred contact</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {contacts.map((item) => (
                  <Choice key={item} selected={brief.contactMethod === item} onClick={() => set("contactMethod", item)}>
                    {item}
                  </Choice>
                ))}
              </div>
            </fieldset>
            <label>
              <span className="folio text-sage">Optional message</span>
              <textarea
                className="mt-2 min-h-28 w-full border-b border-stone bg-transparent"
                value={brief.message}
                onChange={(event) => set("message", event.target.value)}
              />
            </label>
          </div>
        ) : null}

        {error ? (
          <p className="mt-8 text-clay" role="alert">
            {error}
          </p>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-3">
          {step > 0 ? (
            <Button type="button" variant="line" onClick={() => setStep((value) => value - 1)}>
              Back
            </Button>
          ) : null}
          <Button type="button" onClick={next}>
            {step === steps.length - 1 ? "Request my renovation consultation" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
}
