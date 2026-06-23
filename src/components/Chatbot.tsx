"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getBotReply } from "@/lib/chatEngine";
import { Chat, Close, Send, Compass } from "./Icons";
import { useI18n } from "@/i18n/I18nProvider";
import { useSiteData } from "@/sanity/SiteDataProvider";

type Msg = { from: "bot" | "user"; text: string };

export default function Chatbot() {
  const { m } = useI18n();
  const { currentLocation, profile: p } = useSiteData();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: m.chat.greeting }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Dil değişince açılış mesajını güncelle (henüz sohbet başlamadıysa)
  useEffect(() => {
    setMsgs((cur) => (cur.length === 1 ? [{ from: "bot", text: m.chat.greeting }] : cur));
  }, [m.chat.greeting]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    const reply = getBotReply(clean, currentLocation);
    setMsgs((m) => [...m, { from: "user", text: clean }, { from: "bot", text: reply }]);
    setInput("");
  };

  // **kalın** metni basit şekilde işle
  const renderText = (text: string) =>
    text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className="text-ember">
          {part.slice(2, -2)}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );

  return (
    <>
      {/* Açma butonu */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-ember text-ink shadow-xl shadow-ember/30 transition hover:scale-105"
        aria-label="Sohbet"
      >
        {open ? <Close size={24} /> : <Chat size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-ash shadow-2xl"
          >
            {/* Başlık */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-ink/60 px-4 py-3">
              <div
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-ember bg-cover bg-center text-ember"
                style={{ backgroundImage: p.photo ? `url(${p.photo})` : undefined }}
              >
                {!p.photo && <Compass size={16} />}
              </div>
              <div>
                <div className="text-sm font-semibold">{m.chat.title}</div>
                <div className="flex items-center gap-1.5 text-xs text-moss">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" /> {m.chat.online}
                </div>
              </div>
            </div>

            {/* Mesajlar */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-ember text-ink"
                        : "bg-white/5 text-sand"
                    }`}
                  >
                    {renderText(m.text)}
                  </div>
                </div>
              ))}

              {/* Hızlı sorular (sadece başta) */}
              {msgs.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {m.chat.quick.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs transition hover:border-ember hover:text-ember"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Giriş */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={m.chat.placeholder}
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none focus:border-ember"
              />
              <button
                type="submit"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ember text-ink transition hover:bg-amber"
                aria-label="Gönder"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
