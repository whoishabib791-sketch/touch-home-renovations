import { getFeaturedProjects } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { TextLink } from "../ui/TextLink";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="Real homes. Real transformations."
            body="A curated set of finished rooms — not a dump of every photo on the phone."
          />
          <TextLink to="/projects">View all projects</TextLink>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.id} className={index === 0 ? "md:col-span-2" : undefined}>
              <ProjectCard project={project} large={index === 0} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
