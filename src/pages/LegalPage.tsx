import { Container } from "../components/ui/Container";
import { site } from "../data/site";
import { Seo } from "../lib/seo";

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy" : "Terms";

  return (
    <>
      <Seo title={title} description={`${title} for Touch Home Renovations.`} path={`/${kind}`} />
      <section className="bg-paper pt-36 pb-24">
        <Container className="max-w-3xl">
          <h1 className="display text-[clamp(3rem,7vw,5rem)]">{title}</h1>
          <p className="mt-8 text-mute">
            This page is a placeholder for {title.toLowerCase()} copy to be confirmed with {site.name} before a live
            launch. Contact {site.email} for any request about personal information collected through a future live form.
          </p>
        </Container>
      </section>
    </>
  );
}
