import type { Metadata } from "next";
import projects from "@/data/projects.json";
import { Gallery } from "@/components/gallery";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage?: string;
  images?: string[];
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
      <main className="mx-auto max-w-6xl px-6 sm:px-8 py-12">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">The project you are looking for does not exist.</p>
      </main>
    );
  }

  // Build an images array for the gallery (fallback to coverImage if provided)
  const images = project.images && project.images.length > 0
    ? project.images
    : project.coverImage
    ? [project.coverImage]
    : [];

  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-8 py-12">
      <div className="mb-4">
        <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">← Back to projects</Link>
      </div>

      <div className="rounded-xl border border-border bg-card p-3 sm:p-4">
        <Gallery images={images} alt={project.title} />
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight">{project.title}</h1>
      <p className="mt-3 text-base text-muted-foreground">{project.description}</p>

      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
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
