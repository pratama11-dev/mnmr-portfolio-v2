import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ProjectCardProps {
  slug?: string;
  title?: string;
  description?: string;
  image?: string | null;
  tags?: string[];
  variant?: "default" | "listing";
}

export function ProjectCard({ slug, title, description, image, tags, variant = "default" }: ProjectCardProps) {
  const showTags = variant === "default" && tags && tags.length > 0;
  const coverAspect = variant === "listing" ? "md:aspect-[3/2] aspect-video" : "aspect-video";

  return (
    <Link href={`/projects/${slug}`} className="group block">
      <Card className="transition-all hover:border-foreground/30 overflow-hidden rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-accent/10">
        {/* Cover */}
        <div className={`relative w-full ${coverAspect}`}>
          {image ? (
            <Image
              src={image}
              alt={title ?? ""}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </div>

        {/* Body */}
        <CardHeader>
          <CardTitle className="text-base">
            <span className="group-hover:underline underline-offset-4">{title ?? ""}</span>
          </CardTitle>
          <CardDescription className="mt-1">
            {description ?? ""}
          </CardDescription>
          {showTags ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags?.slice(0, 4).map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}
          <div className="mt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            View details →
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
