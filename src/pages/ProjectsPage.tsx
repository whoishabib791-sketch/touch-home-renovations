import { useMemo, useState } from "react";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { Container } from "../components/ui/Container";
import { getProjectsByCategory, projectFilters, type ProjectCategory } from "../data/projects";
import { Seo } from "../lib/seo";

export function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const projects = useMemo(
    () => (filter === "all" ? getProjectsByCategory() : getProjectsByCategory(filter)),
    [filter],
  );

  return (
    <>
      <Seo
        title="Our Work"
        description="Real Melbourne homes, thoughtfully transformed by Touch Home Renovations."
        path="/projects"
      />
      <section className="bg-paper pt-36 pb-24">
        <Container>
          <p className="folio text-sage">Projects</p>
          <h1 className="display mt-4 text-[clamp(3rem,8vw,6.5rem)]">Our work</h1>
          <p className="mt-6 max-w-xl text-mute">Real Melbourne homes, thoughtfully transformed.</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {projectFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`folio min-h-11 px-4 ${
                  filter === item.id ? "bg-olive text-paper" : "bg-transparent ring-1 ring-stone"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-16">
            <ProjectGrid projects={projects} />
          </div>
        </Container>
      </section>
    </>
  );
}
