"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { en } from "@/content/en";
import { id } from "@/content/id";
import type { Copy, Locale } from "@/content/types";

const DICTIONARIES: Record<Locale, Copy> = { en, id };
const STORAGE_KEY = "makir-locale";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Copy;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") setLocaleState(stored);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, copy: DICTIONARIES[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}

/** Shorthand for the active copy dictionary. */
export function useCopy(): Copy {
  return useLocale().copy;
}
