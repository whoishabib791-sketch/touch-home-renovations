import { FinalCta } from "../components/sections/FinalCta";
import { Container } from "../components/ui/Container";
import { processSteps } from "../data/process";
import { JsonLd, Seo } from "../lib/seo";

const faqs = [
  {
    q: "How long does a renovation take?",
    a: "It depends on scope. A single bathroom is a different program to a multi-room home. Timing is discussed once the work is defined — we do not publish fixed completion dates here.",
  },
  {
    q: "Can we remain in the home?",
    a: "Sometimes. It depends on the rooms being worked and how the household needs to live during the job. This is covered in discover.",
  },
  {
    q: "Do you coordinate trades?",
    a: "Yes. Site management and trade coordination are part of how THR runs a project.",
  },
  {
    q: "Do you help with selections?",
    a: "Yes. Interior design sits in the team, and selections are worked through before construction.",
  },
  {
    q: "Do you renovate multiple rooms?",
    a: "Yes. Full-home work — kitchens, bathrooms, laundry, flooring and living — is a regular part of the business.",
  },
  {
    q: "Do you service my suburb?",
    a: "THR is based in Epping and works across Melbourne. Check service areas, or tell us your suburb when you plan a renovation.",
  },
];

export function ProcessPage() {
  return (
    <>
      <Seo
        title="Our Process"
        description="How Touch Home Renovations runs a kitchen, bathroom or full-home renovation — from first conversation to handover."
        path="/process"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
      <section className="bg-paper pt-36 pb-20">
        <Container>
          <p className="folio text-sage">Process</p>
          <h1 className="display mt-4 max-w-[14ch] text-[clamp(3rem,8vw,6.5rem)]">
            A better renovation starts with a better process.
          </h1>
        </Container>
      </section>
      <section className="bg-white">
        {processSteps.map((step, index) => (
          <article key={step.id} className="border-t border-stone">
            <Container className="grid gap-10 py-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="folio text-sage">{step.number}</p>
                <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4rem)]">{step.title}</h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
                <div>
                  <p className="folio text-sage">What happens</p>
                  <p className="mt-3">{step.whatHappens}</p>
                </div>
                <div>
                  <p className="folio text-sage">What you need</p>
                  <p className="mt-3 text-mute">{step.youNeed}</p>
                </div>
                <div>
                  <p className="folio text-sage">What THR handles</p>
                  <p className="mt-3 text-mute">{step.weHandle}</p>
                </div>
                <div>
                  <p className="folio text-sage">What happens next</p>
                  <p className="mt-3 text-mute">{step.next}</p>
                </div>
              </div>
              {index === 0 ? (
                <p className="text-sm text-mute lg:col-span-12">
                  Process steps reflect how THR currently describes consultation, design, construction and handover. Exact
                  sequencing is confirmed with the business before a live launch.
                </p>
              ) : null}
            </Container>
          </article>
        ))}
      </section>
      <section className="bg-paper py-24">
        <Container className="max-w-3xl">
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)]">Questions homeowners ask</h2>
          <dl className="mt-12">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-t border-stone py-6 last:border-b">
                <dt className="font-medium">{faq.q}</dt>
                <dd className="mt-2 text-mute">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
