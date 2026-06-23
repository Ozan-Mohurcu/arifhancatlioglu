"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Locale, defaultLocale, isRtl, matchLocale, toContentLocale, ContentLocale } from "./config";
import { messages, Messages } from "./messages";

type I18nContext = {
  locale: Locale;
  contentLocale: ContentLocale;
  setLocale: (l: Locale) => void;
  m: Messages;
  dir: "ltr" | "rtl";
};

const Ctx = createContext<I18nContext | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // İlk yüklemede: hafıza > tarayıcı dili > varsayılan
  useEffect(() => {
    let initial: Locale = defaultLocale;
    try {
      const saved = window.localStorage.getItem("locale") as Locale | null;
      if (saved) initial = matchLocale(saved);
      else if (navigator.language) initial = matchLocale(navigator.language);
    } catch {
      /* yoksay */
    }
    setLocaleState(initial);
  }, []);

  // <html> lang/dir güncelle
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem("locale", l);
    } catch {
      /* yoksay */
    }
  };

  const value: I18nContext = {
    locale,
    contentLocale: toContentLocale(locale),
    setLocale,
    m: messages[locale],
    dir: isRtl(locale) ? "rtl" : "ltr",
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
