import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

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
    "Full-Stack Developer specialized in React/Next.js, TypeScript, NestJS, and modern UI.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-5xl px-6 sm:px-8 h-14 flex items-center justify-between">
              <a href="/" className="font-semibold tracking-tight">
                Muhammad Nabil Muyassar Rahman
              </a>
              <div className="flex items-center gap-3">
                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
                  <a href="#about" className="hover:text-foreground">
                    About
                  </a>
                  <a href="/projects" className="hover:text-foreground">
                    Projects
                  </a>
                  <a href="#skills" className="hover:text-foreground">
                    Skills
                  </a>
                  <a href="#certifications" className="hover:text-foreground">
                    Certifications
                  </a>
                  <a href="#contact" className="hover:text-foreground">
                    Contact
                  </a>
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
                    <a
                      href="#about"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      About
                    </a>
                    <a
                      href="/projects"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Projects
                    </a>
                    <a
                      href="#skills"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Skills
                    </a>
                    <a
                      href="#certifications"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Certifications
                    </a>
                    <a
                      href="#contact"
                      className="block rounded px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Contact
                    </a>
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
          <div className="mx-auto max-w-5xl px-6 sm:px-8 py-12">{children}</div>
          <footer className="mt-20 border-t border-border/80">
            <div className="mx-auto max-w-5xl px-6 sm:px-8 py-8 text-sm text-muted-foreground flex items-center justify-between">
              <p>
                {" "}
                {new Date().getFullYear()} Muhammad Nabil Muyassar Rahman. All
                rights reserved.
              </p>
              <a href="#" className="hover:text-foreground">
                Back to top ↑
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
