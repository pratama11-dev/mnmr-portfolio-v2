"use client";

import Link from "next/link";
import { useCopy } from "@/context/LocaleContext";
import { LocaleToggle } from "@/components/locale-toggle";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  const copy = useCopy();

  const links = [
    { href: "#problem", label: copy.nav.problem },
    { href: "#approach", label: copy.nav.approach },
    { href: "#builder", label: copy.nav.builder },
    { href: "#method", label: copy.nav.method },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="leading-none">
          <span className="block text-base font-black tracking-[0.22em]">MAKIR</span>
          <span className="block text-[8px] font-semibold uppercase tracking-[0.34em] text-muted-foreground">
            by M.I.N.O
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <LocaleToggle />
          <ModeToggle />
          <details className="relative lg:hidden">
            <summary className="inline-flex cursor-pointer select-none list-none items-center rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-md border border-border bg-background p-2 shadow-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
