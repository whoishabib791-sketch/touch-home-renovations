import { Link } from "react-router-dom";
import type { Project } from "../../data/projects";
import { Picture } from "../ui/Picture";

type Props = {
  project: Project;
  large?: boolean;
};

const categoryLabel: Record<Project["category"], string> = {
  bathrooms: "Bathroom",
  kitchens: "Kitchen",
  "full-home": "Full home",
  laundry: "Laundry",
  outdoor: "Outdoor",
};

export function ProjectCard({ project, large }: Props) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block no-underline">
      <Picture
        src={project.heroImage}
        alt={`${project.title}${project.suburb ? ` in ${project.suburb}` : ""}`}
        className={large ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/5]"}
      />
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="folio text-sage">{categoryLabel[project.category]}</p>
          <h3 className="mt-2 font-serif text-[1.7rem] leading-none md:text-[2rem]">{project.title}</h3>
          <p className="mt-2 text-mute">
            {project.suburb ? `${project.suburb} · ` : ""}
            {project.services.join(" + ")}
          </p>
        </div>
        <span className="folio hidden shrink-0 text-clay sm:inline">View</span>
      </div>
    </Link>
  );
}
