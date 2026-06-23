"use client";

import { useEffect } from "react";
import Reveal from "./Reveal";
import { socials } from "@/data/site";
import { youtubeVideos, tiktokVideos, instagramPosts } from "@/data/content";
import { YouTube, Instagram, TikTok, ArrowUpRight } from "./Icons";

// TikTok linkinden video ID'sini çıkar
function tiktokId(url: string): string {
  const m = url.match(/video\/(\d+)/);
  return m ? m[1] : "";
}

// Harici embed script'i bir kez yükle / yeniden işle
function loadEmbedScript(id: string, src: string, reprocess?: () => void) {
  if (document.getElementById(id)) {
    reprocess?.();
    return;
  }
  const s = document.createElement("script");
  s.id = id;
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
}

const socialCards = [
  {
    key: "youtube",
    label: "YouTube",
    handle: "@ArifhanCatlioglu",
    href: socials.youtube,
    Icon: YouTube,
    color: "hover:border-red-500/50 hover:bg-red-500/[0.06]",
    iconColor: "text-red-500",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@arifhan.catli",
    href: socials.instagram,
    Icon: Instagram,
    color: "hover:border-pink-500/50 hover:bg-pink-500/[0.06]",
    iconColor: "text-pink-500",
  },
  {
    key: "tiktok",
    label: "TikTok",
    handle: "@arifyollardaa",
    href: socials.tiktok,
    Icon: TikTok,
    color: "hover:border-sky/50 hover:bg-sky/[0.06]",
    iconColor: "text-sky",
  },
];

export default function Content() {
  // Instagram + TikTok embed script'lerini yükle
  useEffect(() => {
    if (instagramPosts.length > 0) {
      loadEmbedScript("ig-embed-script", "https://www.instagram.com/embed.js", () => {
        // @ts-expect-error instagram global
        window.instgrm?.Embeds?.process();
      });
    }
    if (tiktokVideos.length > 0) {
      loadEmbedScript("tt-embed-script", "https://www.tiktok.com/embed.js");
    }
  }, []);

  return (
    <section id="icerikler" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <span className="eyebrow">İçerikler</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Yoldan kareler</h2>
        <p className="mt-3 max-w-lg text-sand/70">
          En yeni videolar ve gönderiler. Takip et, yolculuğu kaçırma.
        </p>
      </Reveal>

      {/* Sosyal kartları */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {socialCards.map((c, i) => {
          const Icon = c.Icon;
          return (
            <Reveal key={c.key} delay={i * 0.08}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition ${c.color}`}
              >
                <span className={`grid h-12 w-12 place-items-center rounded-xl bg-white/[0.06] ${c.iconColor}`}>
                  <Icon size={22} />
                </span>
                <span>
                  <span className="block font-display font-semibold">{c.label}</span>
                  <span className="block text-sm text-sand/60">{c.handle}</span>
                </span>
                <ArrowUpRight size={18} className="ml-auto text-sand/30 transition group-hover:text-sand/70" />
              </a>
            </Reveal>
          );
        })}
      </div>

      {/* YouTube videoları */}
      {youtubeVideos.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {youtubeVideos.map((id) => (
            <Reveal key={id}>
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {/* TikTok videoları */}
      {tiktokVideos.length > 0 && (
        <div className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiktokVideos.map((url) => (
            <blockquote
              key={url}
              className="tiktok-embed"
              cite={url}
              data-video-id={tiktokId(url)}
              style={{ maxWidth: 325, minWidth: 280 }}
            >
              <section />
            </blockquote>
          ))}
        </div>
      )}

      {/* Instagram gönderileri */}
      {instagramPosts.length > 0 && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((url) => (
            <blockquote
              key={url}
              className="instagram-media mx-auto"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
            />
          ))}
        </div>
      )}

      {/* İçerik henüz eklenmemişse ipucu */}
      {youtubeVideos.length === 0 &&
        tiktokVideos.length === 0 &&
        instagramPosts.length === 0 && (
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-dashed border-white/15 p-8 text-center text-sand/50">
              Öne çıkan videolar buraya gelecek. Panelden YouTube veya TikTok bağlantısı eklenince
              otomatik görünür.
            </div>
          </Reveal>
        )}
    </section>
  );
}
