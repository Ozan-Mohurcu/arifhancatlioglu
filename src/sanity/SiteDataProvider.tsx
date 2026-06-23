"use client";

import { createContext, useContext, ReactNode } from "react";
import type { SiteData } from "./siteData";

const Ctx = createContext<SiteData | null>(null);

export function SiteDataProvider({ data, children }: { data: SiteData; children: ReactNode }) {
  return <Ctx.Provider value={data}>{children}</Ctx.Provider>;
}

export function useSiteData(): SiteData {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSiteData must be used within SiteDataProvider");
  return ctx;
}
