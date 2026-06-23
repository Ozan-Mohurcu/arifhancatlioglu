"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { projectId, dataset, apiVersion } from "./src/sanity/env";

// Tek-kayıtlık tipler (her biri tek doküman)
const singletons = ["settings", "currentLocation"];

export default defineConfig({
  name: "arif-yollarda",
  title: "Arif Yollarda — Yönetim Paneli",
  projectId,
  dataset,
  basePath: "/studio",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("İçerik")
          .items([
            S.listItem()
              .title("Genel Ayarlar")
              .id("settings")
              .child(S.document().schemaType("settings").documentId("settings")),
            S.listItem()
              .title("Şu Anki Konum")
              .id("currentLocation")
              .child(S.document().schemaType("currentLocation").documentId("currentLocation")),
            S.divider(),
            S.documentTypeListItem("place").title("Yerler (Gittiğim / Gelecek)"),
            S.documentTypeListItem("post").title("Blog / Ülke Notları"),
            S.documentTypeListItem("video").title("Videolar"),
            S.documentTypeListItem("supporter").title("Destekçiler"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // Singleton tiplerini "yeni oluştur" listesinden gizle
  document: {
    newDocumentOptions: (prev) =>
      prev.filter((t) => !singletons.includes(t.templateId)),
  },
});
