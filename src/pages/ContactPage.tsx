import { useState } from "react";
import { site } from "../data/site";
import { Seo } from "../lib/seo";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Seo
        title="Contact"
        description="Call, email or visit Touch Home Renovations in Epping. Plan a kitchen, bathroom or full-home renovation."
        path="/contact"
      />
      <section className="bg-paper pt-36 pb-24">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="folio text-sage">Contact</p>
            <h1 className="display mt-4 text-[clamp(3rem,8vw,6rem)]">Talk to the team.</h1>
            <p className="mt-6 max-w-md text-mute">
              Based in Epping, servicing homes across Melbourne. For a considered brief, use the renovation planner.
            </p>
            <dl className="mt-12 space-y-6">
              <div>
                <dt className="folio text-sage">Phone</dt>
                <dd className="mt-2 text-[1.3rem]">
                  <a href={site.phoneHref} className="no-underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="folio text-sage">Email</dt>
                <dd className="mt-2 text-[1.3rem]">
                  <a href={site.emailHref} className="no-underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="folio text-sage">Address</dt>
                <dd className="mt-2 text-[1.3rem]">
                  <a href={site.mapsUrl} className="no-underline">
                    {site.address.line}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/plan-your-renovation">Plan your renovation</Button>
              <Button href={site.mapsUrl} variant="line">
                Get directions
              </Button>
            </div>
            <div className="mt-8 flex gap-5">
              <a href={site.social.instagram} className="folio no-underline">
                Instagram
              </a>
              <a href={site.social.facebook} className="folio no-underline">
                Facebook
              </a>
            </div>
          </div>
          <form
            className="border border-stone bg-white p-6 lg:col-span-6 lg:p-10"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <p className="folio text-sage">Short message</p>
            {sent ? (
              <p className="mt-6 text-[1.15rem]">Message kept on this device. On a live site it would go to the team.</p>
            ) : (
              <p className="mt-3 text-mute">Prefer to write a line first? This stays on your device in the demo.</p>
            )}
            {sent ? null : (
            <>
            <label className="mt-8 block">
              <span className="folio text-sage">Name</span>
              <input className="mt-2 min-h-12 w-full border-b border-stone bg-transparent px-0" name="name" required />
            </label>
            <label className="mt-6 block">
              <span className="folio text-sage">Phone</span>
              <input className="mt-2 min-h-12 w-full border-b border-stone bg-transparent px-0" name="phone" required />
            </label>
            <label className="mt-6 block">
              <span className="folio text-sage">Email</span>
              <input className="mt-2 min-h-12 w-full border-b border-stone bg-transparent px-0" type="email" name="email" />
            </label>
            <label className="mt-6 block">
              <span className="folio text-sage">Message</span>
              <textarea className="mt-2 min-h-28 w-full border-b border-stone bg-transparent px-0" name="message" />
            </label>
            <Button type="submit" className="mt-8">
              Send message
            </Button>
            </>
            )}
          </form>
        </Container>
      </section>
    </>
  );
}
