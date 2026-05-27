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
        scrolled ? "backdrop-blur-md bg-charcoal/90 border-b border-cream/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Wordmark tone="light" />

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative font-sans-ui text-[13px] uppercase tracking-[0.18em] text-cream/85 hover:text-gold transition-colors"
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold" />
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
          >
            Enquire Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden font-sans-ui text-[12px] font-bold uppercase tracking-[0.2em] text-cream"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-[68px] bg-charcoal flex flex-col items-center justify-center gap-8 px-8"
          >
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-display text-cream text-3xl hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 font-sans-ui text-[13px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-8 py-4 rounded-full"
            >
              Enquire Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
