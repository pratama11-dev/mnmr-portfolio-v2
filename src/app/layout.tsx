import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Nabil Muyassar Rahman — Portfolio",
  description:
    "Full-stack software developer building TypeScript-first logistics, freight forwarding, PPIC, inventory, and sales platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const s='theme';const d=document.documentElement;const m=window.matchMedia('(prefers-color-scheme: dark)').matches;const v=localStorage.getItem(s);const dark = v ? v==='dark' : m;d.classList.toggle('dark', dark);} catch (_) {}})();`,
          }}
        />
        {/* Devicon for skill icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        id="top"
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">
                MNMR
              </Link>
              <div className="flex items-center gap-3">
                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
                  <Link href="/#about" className="hover:text-foreground">
                    About
                  </Link>
                  <Link href="/#experience" className="hover:text-foreground">
                    Experience
                  </Link>
                  <Link href="/projects" className="hover:text-foreground">
                    Projects
                  </Link>
                  <Link href="/#skills" className="hover:text-foreground">
                    Skills
                  </Link>
                  <Link href="/#certifications" className="hover:text-foreground">
                    Certifications
                  </Link>
                  <Link href="/#contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </nav>
                <a
                  href="https://drive.google.com/file/d/11LhF-dvd_QRYAKMq8pYxolfORS5cydGk/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Resume
                </a>
                <ModeToggle />
                {/* Mobile nav */}
                <details className="sm:hidden relative">
                  <summary className="list-none inline-flex items-center rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer select-none">
                    Menu
                  </summary>
                  <div className="absolute right-0 mt-2 w-44 rounded-md border border-border bg-background p-2 shadow-sm">
                    <Link
                      href="/#about"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      About
                    </Link>
                    <Link
                      href="/#experience"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Experience
                    </Link>
                    <Link
                      href="/projects"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/#skills"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Skills
                    </Link>
                    <Link
                      href="/#certifications"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Certifications
                    </Link>
                    <Link
                      href="/#contact"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Contact
                    </Link>
                    <a
                      href="https://drive.google.com/file/d/11LhF-dvd_QRYAKMq8pYxolfORS5cydGk/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block rounded px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Resume
                    </a>
                  </div>
                </details>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-auto border-t border-border/80">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 text-sm text-muted-foreground flex items-center justify-between">
              <p>
                {new Date().getFullYear()} Muhammad Nabil Muyassar Rahman. All
                rights reserved.
              </p>
              <Link href="#top" className="hover:no-underline">
                <Button
                  variant="ghost"
                  size="sm"
                  className="inline-flex items-center cursor-pointer"
                  aria-label="Back to top"
                >
                  <ArrowUp className="mr-2 h-4 w-4" />
                  Back to top
                </Button>
              </Link>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
