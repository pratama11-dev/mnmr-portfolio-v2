import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
}

export function ProjectCard({ slug, title, description }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group">
      <Card className="transition-colors hover:border-foreground/30">
        <CardHeader>
          <CardTitle className="text-base group-hover:underline underline-offset-4">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
