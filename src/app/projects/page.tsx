import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 sm:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-3 text-muted-foreground">A collection of selected work. Click a project to view details.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
            <Card className="transition-colors hover:border-foreground/30">
              <CardHeader>
                <CardTitle className="text-base group-hover:underline underline-offset-4">
                  {p.title}
                </CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
