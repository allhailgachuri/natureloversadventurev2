import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { role: "ayla" | "user"; text: string };

const GREETING =
  "Hi, I'm Ayla ✦ — your personal safari guide at Nature Lovers Adventure. Ask me anything about our tours, destinations, packages, or how to plan the perfect East African adventure.";

export function Ayla() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "ayla", text: GREETING }]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: 9e9, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ayla",
          text:
            "Thank you for reaching out. For a tailored response, please share your dates, destinations of interest, and group size — or tap Enquire Now and our team will craft a personal itinerary within 24 hours.",
        },
      ]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && showHint && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-[72px] right-0 bg-cream text-espresso font-serif-display italic text-[14px] px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap"
          >
            Ask Ayla ✦
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            style={{ transformOrigin: "bottom right" }}
            className="absolute bottom-0 right-0 w-[92vw] max-w-[380px] h-[520px] bg-charcoal rounded-3xl shadow-2xl border border-gold/30 flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-cream/10 flex items-start justify-between">
              <div>
                <div className="font-serif-display italic text-gold text-[20px]">Ayla ✦</div>
                <div className="text-cream/60 text-[12px]">Your personal safari guide</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-gold text-2xl leading-none hover:opacity-80" aria-label="Close">×</button>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                    m.role === "ayla"
                      ? "bg-cream/10 text-cream"
                      : "bg-gold/20 text-cream ml-auto"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-cream/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about a destination..."
                className="flex-1 bg-cream/5 border border-cream/10 rounded-full px-4 py-2 text-[14px] text-cream placeholder:text-cream/40 outline-none focus:border-gold/60"
              />
              <button
                onClick={send}
                className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.12em] text-gold px-3 hover:opacity-80"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="relative w-14 h-14 rounded-full bg-charcoal border-[1.5px] border-gold flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Open chat"
        >
          <span className="font-serif-display italic text-gold text-[16px]">Ayla</span>
          <motion.span
            className="absolute inset-0 rounded-full border border-gold/60"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          />
        </button>
      )}
    </div>
  );
}
