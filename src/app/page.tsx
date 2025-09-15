import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import about from "@/data/about.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import { ProjectCard } from "@/components/project-card";
import { SkillsGrid } from "@/components/skills-grid";
import { CertificationsList } from "@/components/certifications-list";
import { Summary } from "@/components/summary";
import { EducationList } from "@/components/education-list";
import { WorkExperienceList } from "@/components/work-experience-list";
import certs from "@/data/certifications.json";
import type { Project, Certification, Education, Experience } from "@/types";

const allProjects = projects as Project[];
const certifications = certs as Certification[];
const education = educationData as Education[];
const experiences = experienceData as Experience[];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      {/* Hero */}
      <section className="text-center sm:text-left">
        <p className="text-sm text-muted-foreground">Portfolio</p>
        <h1 className="mt-2 text-4xl/tight sm:text-5xl/tight font-bold tracking-tight">
          <span className="opacity-80">Hi, I’m</span>{" "}
          <span className="underline decoration-border decoration-2 underline-offset-4">Muhammad Nabil Muyassar Rahman</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Full-Stack Developer — Central Jakarta, Indonesia</p>
        <p className="mt-4 text-base/7 sm:text-lg/8 text-muted-foreground">
          I build high‑performance, scalable web apps with Next.js, NestJS, Express, Laravel, and Flask — using TypeScript, JavaScript, Python, PHP, and Java. I manage AWS and Proxmox infrastructure and work across SQL/NoSQL databases to deliver robust, business‑aligned systems. Notable impact includes workflow optimizations for Pulau Intan Lestari modules and the Radar Banjarmasin Digital Website, significantly improving UX and engagement.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center sm:justify-start gap-4 text-muted-foreground">
          <a href="https://github.com/TapZe" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="size-5" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-nabil-muyassar-rahman" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="size-5" />
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="size-5" />
          </a>
        </div>
      </section>

      {/* Sections */}
      <section id="about" className="mt-20 sm:mt-28">
        <h2 className="text-2xl font-semibold">About</h2>
        <Summary paragraphs={about?.summary} />
      </section>

      <section id="projects" className="mt-16 sm:mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">See all</Link>
          </Button>
        </div>
        <p className="mt-3 text-muted-foreground">A few things I’ve worked on recently.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {allProjects.slice(0, 2).map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              description={p.summary ?? p.description ?? ""}
              image={p.images?.[0] ?? p.coverImage ?? null}
              variant="listing"
            />
          ))}
        </div>
      </section>

      <section id="skills" className="mt-16 sm:mt-20">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="mt-3 text-muted-foreground">A snapshot of my core technologies.</p>
        <SkillsGrid skills={skills} />
      </section>

      <section id="experience" className="mt-16 sm:mt-20">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <WorkExperienceList items={experiences} />
      </section>

      <section id="education" className="mt-16 sm:mt-20">
        <h2 className="text-2xl font-semibold">Education</h2>
        <EducationList items={education} />
      </section>

      <section id="certifications" className="mt-16 sm:mt-20">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <p className="mt-3 text-muted-foreground">Highlights of certifications.</p>
        <CertificationsList items={certifications} />
      </section>

      <section id="contact" className="mt-16 sm:mt-20">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-muted-foreground">
          Interested in working together? Reach out:{" "}
          <a href="mailto:nabil.muyassar.work@gmail.com" className="underline underline-offset-4 hover:text-foreground">nabil.muyassar.work@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
