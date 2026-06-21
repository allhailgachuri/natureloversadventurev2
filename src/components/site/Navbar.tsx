import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark } from "./Wordmark";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/services", label: "Services" },
  { to: "/safari-packages", label: "Safari Packages" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "backdrop-blur-md bg-charcoal/90 border-b border-cream/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Wordmark tone="light" />

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative w-12 h-12 flex flex-col items-center justify-center gap-[6px] group"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8, width: 28 } : { rotate: 0, y: 0, width: 28 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="block h-[2px] bg-cream group-hover:bg-gold transition-colors"
          />
          <motion.span
            animate={open ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] bg-gold self-end"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8, width: 28 } : { rotate: 0, y: 0, width: 24 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="block h-[2px] bg-cream group-hover:bg-gold transition-colors"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[88px] bg-charcoal/97 backdrop-blur-lg flex flex-col items-center justify-center gap-7 px-8"
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={l.to}
                  className={`font-display text-3xl md:text-5xl hover:text-gold transition-colors ${
                    path === l.to ? "text-gold" : "text-cream"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <Link
                to="/contact"
                className="mt-4 inline-block font-sans-ui text-[13px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-8 py-4 rounded-full"
              >
                Enquire Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
