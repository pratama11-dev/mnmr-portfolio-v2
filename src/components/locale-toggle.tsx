"use client";

import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/content/types";

const LOCALES: Locale[] = ["en", "id"];

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-md border border-border p-0.5 text-xs font-semibold"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-[5px] px-2 py-1 uppercase tracking-wide transition-colors ${
            locale === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
