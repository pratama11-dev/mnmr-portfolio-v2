import {
  ArrowRight,
  Database,
  Github,
  Linkedin,
  Mail,
  Network,
  ShieldCheck,
  Terminal,
} from "lucide-react";
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

const allProjects = projects?.sort((a, b) => new Date(b?.meta?.startDate ?? "").getTime() - new Date(a?.meta?.startDate ?? "").getTime()) as Project[];
const certifications = certs as Certification[];
const education = educationData as Education[];
const experiences = experienceData as Experience[];

const operatingFocus = [
  {
    title: "Multi-tenant architecture",
    description:
      "Shared SSO, isolated tenant application data, encrypted credentials, JWT/JWKS auth, audit logging, and HTTP-only sessions.",
    icon: ShieldCheck,
  },
  {
    title: "Operations-first UI",
    description:
      "Inline Excel-like editing, batch submission, fewer modal loops, and workflows shaped around high-volume operational data entry.",
    icon: Network,
  },
  {
    title: "Controlled delivery",
    description:
      "Bun executables, Docker health checks, obfuscated frontend builds, Nginx static delivery, and isolated file upload pipelines.",
    icon: Terminal,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-18">
      <section className="relative left-1/2 -mx-[50vw] w-screen overflow-hidden border-y border-border py-14 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--grid-line)_1px,transparent_1px),linear-gradient(180deg,var(--grid-line)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(90deg,transparent,black_10%,black_86%,transparent),linear-gradient(180deg,transparent,black_12%,black_92%,transparent)] [mask-composite:intersect]" />
        <div className="absolute right-[10vw] top-8 -z-10 hidden h-72 w-72 rounded-full bg-[color:var(--signal)]/12 blur-3xl sm:block" />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div >
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <Database className="size-3.5" />
              Makir Innovation & Operations
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl/tight font-black tracking-tight sm:text-6xl/tight">
              M.I.N.O.
            </h1>
            <p className="mt-4 max-w-2xl text-xl/8 font-semibold text-foreground/85 sm:text-2xl/9">
              All-in-one ERP for project-based businesses, from quotation to cash.
            </p>
            <p className="mt-5 max-w-3xl text-base/7 text-muted-foreground sm:text-lg/8">
              We build systems that connect CRM, sales, procurement, and finance into a single workflow. Recent work focuses on quotation-to-invoice pipelines, project profit tracking, installation scheduling, and real-time financial reporting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com/TapZe" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/adithya-nuz-pratama-putra" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="size-5" />
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <aside className="border border-border bg-card/90 p-5 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Working style
            </p>
            <ul className="mt-5 space-y-4 text-sm/6 text-muted-foreground">
              <li className="border-l-2 border-[color:var(--signal)] pl-3">
                Own technical direction end to end, from schema design and stack
                selection to production deployment.
              </li>
              <li className="border-l-2 border-border pl-3">
                Prefer unified TypeScript systems with reusable scaffolding and
                clear module boundaries.
              </li>
              <li className="border-l-2 border-border pl-3">
                Design for operations teams that need batch entry, traceability,
                and fewer repetitive handoffs.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {operatingFocus.map(({ title, description, icon: Icon }) => (
          <article key={title} className="border border-border bg-card p-5">
            <div className="flex size-10 items-center justify-center border border-border bg-background text-[color:var(--signal)]">
              <Icon className="size-5" />
            </div>
            <h2 className="mt-5 text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm/6 text-muted-foreground">{description}</p>
          </article>
        ))}
      </section>

      <div className="mx-auto max-w-4xl">
        <section id="about" className="mt-20 sm:mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">About</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">
            Business systems, built end to end
          </h2>
          <Summary paragraphs={about?.summary} />
        </section>

        {/* <section id="experience" className="mt-16 sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Experience</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Recent Work</h2>
          <WorkExperienceList items={experiences} />
        </section>

        <section id="skills" className="mt-16 sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Skills</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Stack from CV</h2>
          <p className="mt-3 text-muted-foreground">
            Tools grouped by where they show up in production systems.
          </p>
          <SkillsGrid skills={skills} />
        </section> */}

        <section id="projects" className="mt-16 sm:mt-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Projects</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Selected Systems</h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/projects">See all</Link>
            </Button>
          </div>
          <p className="mt-3 text-muted-foreground">
            Operations-heavy platforms across freight forwarding, production
            floors, sales teams, and digital publishing workflows.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {allProjects.slice(0, 4).map((p) => (
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

        {/* <section id="education" className="mt-16 sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Education</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Training</h2>
          <EducationList items={education} />
        </section>

        <section id="certifications" className="mt-16 sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Certifications</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Proof Points</h2>
          <p className="mt-3 text-muted-foreground">Recent certification highlights from CV.</p>
          <CertificationsList items={certifications?.sort((a, b) => new Date(b?.issueDate ?? "").getTime() - new Date(a?.issueDate ?? "").getTime()).slice(0, 3)} />
        </section> */}

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base/7 font-semibold text-primary">
                Masalah yang sering terjadi
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Bisnis jalan, tapi datanya berantakan
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Banyak bisnis berbasis proyek masih mengandalkan spreadsheet,
                chat WhatsApp, dan catatan manual — sampai akhirnya data hilang,
                proses lambat, dan profit sulit dipantau.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {/* Masalah */}
              <div className="rounded-2xl border border-border bg-muted/30 p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Sebelum ada sistem terpusat
                </h3>
                <ul className="mt-6 space-y-4 text-base text-muted-foreground">
                  <li>• Data customer & prospek tersebar di banyak file dan chat</li>
                  <li>• Follow up prospek sering terlewat, tidak ada pengingat</li>
                  <li>• Quotation dan RAB dibuat manual, rawan salah hitung</li>
                  <li>• Sales Order dan Purchase Order tidak saling terhubung</li>
                  <li>• Invoice dan termin sulit dilacak, sering telat tagih</li>
                  <li>• Progress proyek dan jadwal pemasangan hanya di kepala tim</li>
                  <li>• Profit per proyek baru diketahui setelah proyek selesai</li>
                  <li>• Laporan keuangan disusun ulang manual tiap bulan</li>
                </ul>
              </div>

              {/* Solusi */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Setelah menggunakan Makir
                </h3>
                <ul className="mt-6 space-y-4 text-base text-muted-foreground">
                  <li>• Semua data customer tersimpan rapi dalam satu database CRM</li>
                  <li>• Follow up prospek terjadwal dan tidak ada yang terlewat</li>
                  <li>• Quotation & RAB dibuat cepat, konsisten, dan akurat</li>
                  <li>• Sales Order dan Purchase Order terhubung otomatis</li>
                  <li>• Invoice & termin termonitor, jatuh tempo tidak terlewat</li>
                  <li>• Progress proyek dan jadwal pemasangan terlihat real-time</li>
                  <li>• Profit per proyek bisa dipantau sejak proyek berjalan</li>
                  <li>• Laporan keuangan tersusun otomatis dari data transaksi</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 border-y border-border py-10 sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Contact</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">
            Build something operationally useful
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reach out at{" "}
            <a href="mailto:adithyanuzpratamaputra@gmail.com" className="underline underline-offset-4 hover:text-foreground">adithyanuzpratamaputra@gmail.com</a>
            {" "}or connect through LinkedIn.
          </p>
        </section>
      </div>
    </main>
  );
}
