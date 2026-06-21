import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_VIDEOS } from "@/lib/site-data";

export function HeroGallery() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);
  const refs = useRef<Array<HTMLVideoElement | null>>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Set initial preload strategy + attempt autoplay
  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      el.preload = i === 0 ? "auto" : "none";
    });
    const v0 = refs.current[0];
    if (v0) {
      v0.play().catch(() => setNeedsTap(true));
    }
  }, []);

  // Auto-advance every 8s
  const scheduleNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => go(active + 1), 8000);
  };

  useEffect(() => {
    scheduleNext();
    // Preload neighbours
    const next = (active + 1) % HERO_VIDEOS.length;
    const nextNext = (active + 2) % HERO_VIDEOS.length;
    [next, nextNext].forEach((i) => {
      const el = refs.current[i];
      if (el && el.preload !== "auto") el.preload = "auto";
    });
    refs.current[active]?.play().catch(() => {});
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const go = (i: number) => {
    if (transitioning) return;
    const target = ((i % HERO_VIDEOS.length) + HERO_VIDEOS.length) % HERO_VIDEOS.length;
    if (target === active) return;
    setTransitioning(true);
    setActive(target);
    setTimeout(() => setTransitioning(false), 900);
  };

  const slide = HERO_VIDEOS[active];

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-charcoal">
      {HERO_VIDEOS.map((v, i) => (
        <video
          key={v.src}
          ref={(el) => { refs.current[i] = el; }}
          src={v.src}
          poster={v.poster}
          muted
          loop
          playsInline
          autoPlay
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[800ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 2 : 1 }}
        />
      ))}

      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Overlay content */}
      <div className="relative z-[4] h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-28 md:pb-32">
        <AnimatePresence mode="wait">
          <motion.div key={active}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="label-eyebrow text-gold"
            >
              Nature Lovers Adventure
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 font-display font-bold text-cream text-[40px] md:text-[72px] leading-[1.05] tracking-tight max-w-3xl"
            >
              {slide.line1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-4 font-serif-display italic text-cream/85 text-[18px] md:text-[28px]"
            >
              {slide.line2}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-7 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Plan Your Safari
          </Link>
          <Link
            to="/safari-packages"
            className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] border border-cream/50 text-cream px-7 py-4 rounded-full hover:bg-cream hover:text-espresso transition-colors"
          >
            View Packages
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-cream/70 text-[12px] font-sans-ui">
          <span><span className="text-gold">★★★★★</span> Google 4.9 · 103 Reviews</span>
          <span><span className="text-gold">★★★★★</span> TripAdvisor 5.0 · 24 Reviews</span>
          <span><span className="text-gold">★★★★★</span> SafariBookings 4.8 · 28 Reviews</span>
        </div>
      </div>

      {needsTap && (
        <button
          onClick={() => {
            refs.current[0]?.play();
            setNeedsTap(false);
          }}
          className="absolute inset-0 z-[10] bg-black/60 flex items-center justify-center font-sans-ui font-bold uppercase tracking-[0.3em] text-gold text-sm"
        >
          Tap To Begin
        </button>
      )}
    </section>
  );
}
