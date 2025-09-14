import Link from "next/link";
import projects from "@/data/projects.json";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types";

const allProjects = projects as Project[];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 sm:px-8 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="mt-2 text-muted-foreground">
            A collection of selected work. Click a project to view details.
          </p>
        </div>
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Back home</Link>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((p) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.summary ?? p.description ?? ""}
            image={p.images?.[0] ?? p.coverImage ?? null}
            tags={p.meta?.tech || p.tags}
            variant="listing"
          />
        ))}
      </div>
    </main>
  );
}
