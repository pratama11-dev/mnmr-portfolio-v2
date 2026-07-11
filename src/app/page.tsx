"use client";
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
import about from "@/data/about.json";
import { ProjectCard } from "@/components/project-card";
import { Summary } from "@/components/summary";
import type { Project } from "@/types";
import { X, Check, TrendingDown, TrendingUp } from "lucide-react";

const allProjects = projects?.sort((a, b) => new Date(b?.meta?.startDate ?? "").getTime() - new Date(a?.meta?.startDate ?? "").getTime()) as Project[];

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
      <section className="description panel light relative left-1/2 -mx-[50vw] w-screen overflow-hidden border-y border-border py-14 sm:py-20">
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

      <section className="panel mt-12 grid gap-4 md:grid-cols-3">
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
        <section id="about" className="panel mt-20 sm:mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">About</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">
            Business systems, built end to end
          </h2>
          <Summary paragraphs={about?.summary} />
        </section>

        {/* <section id="projects" className="panel mt-16 sm:mt-20">
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
        </section> */}

        {/* Section: Problem */}
        <section className="mx-auto max-w-6xl py-24">
          <div>
            <svg aria-hidden="true" viewBox="0 0 120 8" className="h-2 w-32 mb-5" fill="none">
              <line x1="0" y1="4" x2="46" y2="4" stroke="currentColor" className="text-primary" strokeWidth="1" strokeLinecap="round" />
              <circle cx="60" cy="4" r="2.5" fill="currentColor" className="text-primary" />
              <line x1="74" y1="4" x2="120" y2="4" stroke="currentColor" className="text-primary" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Problem
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-snug md:text-4xl">
              When the business grows, but the system doesn't.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Many project-based businesses still run their operations through
              spreadsheets, WhatsApp chats, and manual notes — until data gets lost,
              processes slow down, and profit becomes impossible to track.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="h-full">
              <div className="h-full rounded-2xl border border-border bg-muted/30 p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">Scattered data</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Customer and prospect data spread across files and chats, hard to track.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full rounded-2xl border border-border bg-muted/30 p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">Missed follow-ups</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  No reminders in place, so prospects that need follow-up slip through.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full rounded-2xl border border-border bg-muted/30 p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">Error-prone quotations</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Quotations and cost estimates built manually, inconsistent and easy to miscalculate.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full rounded-2xl border border-border bg-muted/30 p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">Disconnected transactions</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Sales orders, purchase orders, and invoices don't talk to each other.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full rounded-2xl border border-border bg-muted/30 p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">No visibility into progress</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Project progress and installation schedules live in only a few people's heads.
                </p>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full rounded-2xl border border-border bg-muted/30 p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold">Profit discovered too late</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Project profitability is only known after the project ends, not while it's running.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up">
            <p className="mt-10 max-w-2xl leading-relaxed text-muted-foreground">
              As a result, instead of helping the business run more efficiently,
              manual processes turn into a recurring source of extra work and errors.
            </p>
          </div>
        </section>

        {/* Section: Solution */}
        <section className="bg-muted/20">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div>
              <svg aria-hidden="true" viewBox="0 0 120 8" className="h-2 w-32 mb-5" fill="none">
                <line x1="0" y1="4" x2="46" y2="4" stroke="currentColor" className="text-primary" strokeWidth="1" strokeLinecap="round" />
                <circle cx="60" cy="4" r="2.5" fill="currentColor" className="text-primary" />
                <line x1="74" y1="4" x2="120" y2="4" stroke="currentColor" className="text-primary" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Solution
              </span>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                A unified ERP for project-based businesses.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Makir brings the entire business flow into one system — from incoming
                leads to financial reports — built on four core principles.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="h-full">
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-primary">01</span>
                  <div className="mt-3 h-px w-8 bg-primary" />
                  <h3 className="mt-4 text-xl font-semibold">One system, one workflow</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    CRM, quotation, sales orders, purchase orders, and invoicing all
                    connected in a single database — no repeated data entry.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-primary">02</span>
                  <div className="mt-3 h-px w-8 bg-primary" />
                  <h3 className="mt-4 text-xl font-semibold">Real-time profit per project</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Track profit and loss as the project runs, instead of waiting
                    until it's finished.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-primary">03</span>
                  <div className="mt-3 h-px w-8 bg-primary" />
                  <h3 className="mt-4 text-xl font-semibold">Built around real business flow</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Every module follows the actual process — from prospect follow-up
                    to on-site installation scheduling.
                  </p>
                </div>
              </div>
              <div className="h-full">
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-primary">04</span>
                  <div className="mt-3 h-px w-8 bg-primary" />
                  <h3 className="mt-4 text-xl font-semibold">Automated financial reporting</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Data from invoices, purchase orders, and project profit consolidates
                    automatically into ready-to-analyze financial reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="panel py-24 sm:py-32">
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
        </section> */}

        <section className="panel py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base/7 font-semibold text-primary">
                Common problems
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Business is running, but the data is a mess
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Many project-based businesses still rely on spreadsheets, WhatsApp
                chats, and manual notes — until data gets lost, processes slow down,
                and profit becomes impossible to track.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {/* Before */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <TrendingDown className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Without a unified system
                    </h3>
                    <p className="text-sm text-muted-foreground">The way most businesses run today</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-base text-muted-foreground">
                  {[
                    "Customer & prospect data scattered across files and chats",
                    "Prospect follow-ups get missed, no reminders in place",
                    "Quotations built manually, prone to miscalculation",
                    "Sales orders and purchase orders disconnected from each other",
                    "Invoices and payment terms hard to track, billing often late",
                    "Project progress and installation schedules only live in the team's memory",
                    "Project profit only known after the project is finished",
                    "Financial reports rebuilt manually every month",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />

                <div className="relative flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <TrendingUp className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      With Makir
                    </h3>
                    <p className="text-sm text-muted-foreground">One connected system, end to end</p>
                  </div>
                </div>

                <ul className="relative mt-6 space-y-3.5 text-base text-muted-foreground">
                  {[
                    "All customer data organized in a single CRM database",
                    "Prospect follow-ups scheduled, nothing slips through",
                    "Quotations generated fast, consistent, and accurate",
                    "Sales orders and purchase orders connected automatically",
                    "Invoices & payment terms tracked, due dates never missed",
                    "Project progress and installation schedules visible in real time",
                    "Project profit tracked from day one, not after the fact",
                    "Financial reports generated automatically from transaction data",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
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
