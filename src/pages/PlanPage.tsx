import { ProjectBriefForm } from "../components/forms/ProjectBriefForm";
import { Container } from "../components/ui/Container";
import { site } from "../data/site";
import { Seo } from "../lib/seo";

export function PlanPage() {
  return (
    <>
      <Seo
        title="Plan Your Renovation"
        description="Tell Touch Home Renovations what you’re planning — space, suburb, timing and contact — so the first conversation is useful."
        path="/plan-your-renovation"
      />
      <section className="bg-paper pt-36 pb-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="folio text-sage">Plan your renovation</p>
            <h1 className="display mt-4 text-[clamp(2.8rem,6vw,4.8rem)]">Tell us about the home.</h1>
            <p className="mt-6 text-mute">
              Eight short steps. You’ll finish with a brief the team can actually use — not a blank message box.
            </p>
            <p className="mt-8">
              <a href={site.phoneHref} className="folio no-underline">
                Prefer to call? {site.phone}
              </a>
            </p>
          </div>
          <div className="lg:col-span-8">
            <ProjectBriefForm />
          </div>
        </Container>
      </section>
    </>
  );
}
