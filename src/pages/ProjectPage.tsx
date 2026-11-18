import { Link, Navigate, useParams } from "react-router-dom";
import { BeforeAfterSlider } from "../components/before-after/BeforeAfterSlider";
import { ProjectCard } from "../components/projects/ProjectCard";
import { FinalCta } from "../components/sections/FinalCta";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Picture } from "../components/ui/Picture";
import { getProject, getProjectTestimonial, getRelatedProjects } from "../data/projects";
import { Seo } from "../lib/seo";

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  if (!project) return <Navigate to="/projects" replace />;

  const testimonial = getProjectTestimonial(project);
  const related = getRelatedProjects(project.slug);

  return (
    <>
      <Seo
        title={project.title}
        description={project.overview ?? `${project.title} by Touch Home Renovations.`}
        path={`/projects/${project.slug}`}
        image={project.heroImage}
        type="article"
      />
      <section className="bg-paper pt-36 pb-16">
        <Container>
          <p className="folio text-sage">
            <Link to="/projects" className="no-underline">
              Projects
            </Link>
            {" / "}
            {project.services.join(" · ")}
            {project.suburb ? ` · ${project.suburb}` : ""}
          </p>
          <h1 className="display mt-5 text-[clamp(3rem,8vw,6.5rem)]">{project.title}</h1>
          <Picture
            src={project.heroImage}
            alt={project.title}
            className="mt-10 aspect-[16/10]"
            priority
          />
        </Container>
      </section>

      {project.overview || project.brief || project.approach || project.result ? (
        <section className="bg-white py-20">
          <Container className="grid gap-12 md:grid-cols-2">
            {project.overview ? (
              <div>
                <p className="folio text-sage">Project overview</p>
                <p className="mt-4 text-[1.15rem]">{project.overview}</p>
              </div>
            ) : null}
            <div className="space-y-8">
              {project.brief ? (
                <div>
                  <p className="folio text-sage">The brief</p>
                  <p className="mt-3 text-mute">{project.brief}</p>
                </div>
              ) : null}
              {project.approach ? (
                <div>
                  <p className="folio text-sage">The approach</p>
                  <p className="mt-3 text-mute">{project.approach}</p>
                </div>
              ) : null}
              {project.result ? (
                <div>
                  <p className="folio text-sage">The result</p>
                  <p className="mt-3 text-mute">{project.result}</p>
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}

      {project.beforeImage && project.afterImage ? (
        <section className="bg-paper py-20">
          <Container>
            <p className="folio mb-6 text-sage">Before / after</p>
            <BeforeAfterSlider beforeSrc={project.beforeImage} afterSrc={project.afterImage} />
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-20">
        <Container>
          <p className="folio mb-8 text-sage">Gallery</p>
          <div className="grid gap-4 md:grid-cols-2">
            {project.gallery.map((src) => (
              <Picture key={src} src={src} alt={`${project.title} detail`} className="aspect-[4/3]" />
            ))}
          </div>
        </Container>
      </section>

      {testimonial ? (
        <section className="bg-paper py-20">
          <Container className="max-w-4xl">
            <p className="folio text-sage">Homeowner</p>
            <blockquote className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.3rem)] leading-[1.25]">
              “{testimonial.quote}”
            </blockquote>
            <p className="mt-6">{testimonial.name}</p>
            <p className="folio mt-1 text-sage">Google</p>
          </Container>
        </section>
      ) : null}

      {related.length ? (
        <section className="bg-white py-20">
          <Container>
            <p className="folio mb-10 text-sage">Related work</p>
            <div className="grid gap-10 md:grid-cols-2">
              {related.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
            <div className="mt-12">
              <Button to="/plan-your-renovation">Planning something similar?</Button>
            </div>
          </Container>
        </section>
      ) : null}
      <FinalCta />
    </>
  );
}
