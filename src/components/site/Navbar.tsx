import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark } from "./Wordmark";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/services", label: "Services" },
  { to: "/safari-packages", label: "Safari Packages" },
  { to: "/gallery", label: "Gallery" },
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

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "backdrop-blur-md bg-charcoal/90 border-b border-cream/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Wordmark tone="light" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map(l => (
            <Link 
              key={l.to} 
              to={l.to} 
              className={`font-sans-ui text-[13px] uppercase tracking-wider font-bold transition-colors ${
                path === l.to ? "text-gold" : "text-cream hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="ml-2 inline-block font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-[6px] group z-50"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[88px] bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-center gap-7 px-8 h-[calc(100vh-88px)] overflow-y-auto pb-12"
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
                  className={`font-display text-3xl md:text-5xl transition-colors ${
                    path === l.to ? "text-gold" : "text-cream hover:text-gold"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + LINKS.length * 0.06, duration: 0.4 }}
            >
              <Link
                to="/contact"
                className={`font-display text-3xl md:text-5xl transition-colors ${
                  path === "/contact" ? "text-gold" : "text-cream hover:text-gold"
                }`}
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                className="inline-block font-sans-ui text-[14px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-10 py-4 rounded-full"
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
