"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";
import { profile } from "@/data/site";
import { Send } from "./Icons";

const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const configured = Boolean(SERVICE && TEMPLATE && PUBLIC_KEY);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = {
      from_name: String(data.get("name") || ""),
      reply_to: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
    };

    // EmailJS yapılandırılmadıysa mailto'ya düş
    if (!configured) {
      const body = encodeURIComponent(`${params.message}\n\n— ${params.from_name} (${params.reply_to})`);
      window.location.href = `mailto:${profile.email}?subject=Site iletişim&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE,
          template_id: TEMPLATE,
          user_id: PUBLIC_KEY,
          template_params: params,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="iletisim" className="relative mx-auto max-w-3xl px-5 py-24">
      <Reveal>
        <div className="text-center">
          <span className="eyebrow justify-center">İletişim</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Bir mesaj bırak</h2>
          <p className="mx-auto mt-3 max-w-md text-sand/70">
            Soru, iş birliği ya da sadece selam — hepsi doğrudan Arifhan&apos;a ulaşır.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Adın"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-ember"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="E-posta"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-ember"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Mesajın..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-ember"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-ink transition hover:bg-amber disabled:opacity-60"
          >
            {status === "sending" ? "Gönderiliyor..." : (<><Send size={18} /> Gönder</>)}
          </button>

          {status === "ok" && (
            <p className="text-center text-sm text-moss">Teşekkürler, mesajın ulaştı.</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              Bir şeyler ters gitti. Doğrudan {profile.email} adresine yazabilirsin.
            </p>
          )}
          {!configured && (
            <p className="text-center text-xs text-sand/40">
              (EmailJS henüz bağlanmadı — buton şimdilik e-posta uygulamanı açar.)
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}
