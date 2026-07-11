import type { Metadata } from "next";
import projects from "@/data/projects.json";
import { Gallery } from "@/components/gallery";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ProjectMeta } from "@/components/project-meta";
import { ProjectSection } from "@/components/project-section";
import type { Project, ProjectSectionData } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const allProjects = projects as Project[];

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = allProjects.find(
    async (p) => p?.slug === (await params?.slug));
  return {
    title: project ? `${project?.title} — Project` : "Project",
    description: project?.summary || project?.description,
  };
}

function normalizeLinks(links: Project["links"]) {
  if (!links) return [] as { label: string; href: string }[];
  if (Array.isArray(links)) return links;
  const out: { label: string; href: string }[] = [];
  if (links.demo) out.push({ label: "Live Demo", href: links.demo });
  if (links.repo) out.push({ label: "Repository", href: links.repo });
  return out;
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = allProjects.find(
    async (p) => p.slug === (await params).slug
  );

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-6 sm:px-8 py-12">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">The project you are looking for does not exist.</p>
      </main>
    );
  }

  // Images for the gallery
  const images = project.images && project.images.length > 0
    ? project.images
    : project.coverImage
    ? [project.coverImage]
    : [];

  // Meta block (merges legacy tags as tech)
  const metaItems = {
    role: project.meta?.role,
    company: project.meta?.company,
    period: project.meta?.period,
    team: project.meta?.team,
    location: project.meta?.location,
    tech: project.meta?.tech || project.tags,
    tools: project.meta?.tools,
    links: normalizeLinks(project.links),
  } as const;

  const summary = project.summary || project.description;
  const sections: ProjectSectionData[] = project.sections || [];

  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-8 py-12">
      <div className="mb-4">
        <Link href="/projects" className="hover:no-underline">
          <Button variant="ghost" size="sm" className="inline-flex items-center cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Button>
        </Link>
      </div>

      {/* Top media card */}
      <div className="rounded-xl border border-border bg-card p-3 sm:p-4">
        <Gallery images={images} alt={project.title} />
      </div>

      <header className="mt-6">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        {summary ? (
          <p className="mt-3 text-base text-muted-foreground">{summary}</p>
        ) : null}
        {/* Legacy tags under header if present and not already in meta */}
        {!project.meta?.tech && project.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
          </div>
        ) : null}
      </header>

      {/* Content + Meta grid */}
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          {sections.length ? (
            sections.map((s, idx) => (
              <ProjectSection key={idx} title={s.title} paragraphs={s.paragraphs} bullets={s.bullets} />
            ))
          ) : (
            // Fallback if no structured sections yet
            <ProjectSection title="Overview" paragraphs={[summary || ""]} />
          )}
        </div>
        <aside className="md:col-span-1 space-y-4">
          <ProjectMeta items={metaItems} />
          {/* Quick CTA buttons from links */}
          {normalizeLinks(project.links).length ? (
            <div className="flex flex-wrap gap-2">
              {normalizeLinks(project.links).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
