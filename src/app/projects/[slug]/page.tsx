import Image from "next/image";
import type { Metadata } from "next";
import projects from "@/data/projects.json";

interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage?: string;
  tags?: string[];
  links?: { demo?: string; repo?: string };
}

const allProjects = projects as Project[];

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = allProjects.find((p) => p.slug === params.slug);
  return {
    title: project ? `${project.title} — Project` : "Project",
    description: project?.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-6 sm:px-8 py-12">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">The project you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 sm:px-8 py-12">
      {project.coverImage ? (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      ) : (
        <div className="w-full h-48 rounded-lg border border-border bg-muted" />
      )}

      <h1 className="mt-6 text-3xl font-bold tracking-tight">{project.title}</h1>
      <p className="mt-3 text-muted-foreground">{project.description}</p>

      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {project.links && (project.links.demo || project.links.repo) ? (
        <div className="mt-6 flex gap-3">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Live Demo
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Repository
            </a>
          ) : null}
        </div>
      ) : null}
    </main>
  );
}
