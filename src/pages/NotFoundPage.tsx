import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Seo } from "../lib/seo";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="That page doesn’t exist on the Touch Home Renovations site." path="/404" />
      <section className="bg-paper pt-36 pb-24">
        <Container>
          <p className="folio text-sage">404</p>
          <h1 className="display mt-4 text-[clamp(3rem,8vw,6rem)]">This page isn’t here.</h1>
          <p className="mt-6 max-w-md text-mute">Try projects, renovations, or start a brief.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/">Home</Button>
            <Button to="/projects" variant="line">
              Projects
            </Button>
            <Button to="/plan-your-renovation" variant="line">
              Plan your renovation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
