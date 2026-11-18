import type { Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (!projects.length) {
    return <p className="text-mute">No projects in this category yet.</p>;
  }

  return (
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
