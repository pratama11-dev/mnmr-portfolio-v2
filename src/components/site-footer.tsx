"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/context/LocaleContext";

export function SiteFooter() {
  const copy = useCopy();

  return (
    <footer className="mt-auto border-t border-border/80">
      <div className="ribbed mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8">
        <p className="max-w-md text-lg font-semibold tracking-tight">{copy.footer.tagline}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>
            {new Date().getFullYear()} — {copy.footer.rights}
          </p>
          <Button variant="ghost" size="sm" asChild aria-label="Back to top">
            <a href="#top" className="inline-flex items-center">
              <ArrowUp className="mr-2 h-4 w-4" />
              Top
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
