import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/context/LocaleContext";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TransitionProvider } from "@/context/TransitionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAKIR — ERP that adapts to your business",
  description:
    "MAKIR by M.I.N.O builds modular ERP systems designed from your actual business process — CRM, purchasing, warehouse, delivery, and finance in one connected workflow. No lock-in, no big-bang migration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="top"
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <LocaleProvider>
            <SiteHeader />
            <main>
              <TransitionProvider>{children}</TransitionProvider>
            </main>
            <SiteFooter />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
