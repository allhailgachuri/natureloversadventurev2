import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { CTABlock } from "@/components/site/CTABlock";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Tour Operations, Car Hire, Visa & Flights in Nairobi" },
      { name: "description", content: "Professional tour operations, car & coach hire, flight booking, visa services, hotel booking and event management in Nairobi, Kenya." },
      { property: "og:title", content: "Services — Nature Lovers Adventure" },
      { property: "og:description", content: "Professional tour operations, car & coach hire, flight booking, visa services, hotel booking and event management in Nairobi, Kenya." },
    ],
    links: [{ rel: "canonical", href: "https://natureloversadventurev2.lovable.app/services" }],
  }),
});

const HERO = "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2000&q=80";

function ServicesPage() {
  return (
    <SiteShell>
      <section className="relative h-[65vh] min-h-[460px] w-full overflow-hidden bg-charcoal">
        <img src={HERO} alt="East Africa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <div className="label-eyebrow">Our Services</div>
          <h1 className="mt-5 font-display font-bold text-cream text-[40px] md:text-[64px] leading-[1.05] tracking-tight">
            Every Journey, Expertly Handled
          </h1>
          <p className="mt-6 font-sans-ui text-cream/75 text-[18px] md:text-[20px] max-w-xl">
            From the moment you dream of Africa to the moment you return changed — we take care of everything.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-serif-display italic text-espresso/85 text-[20px] md:text-[22px] leading-relaxed">
            At Nature Lovers Adventure, we are more than a tour operator. We are architects of experience, curators of wonder, and partners in every step of your journey.
          </p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`py-20 md:py-28 px-6 md:px-10 ${i % 2 === 0 ? "bg-cream" : "bg-cream-light"}`}>
          <div className={`max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="label-eyebrow">{s.label}</div>
              <h2 className="mt-4 font-display font-bold text-espresso text-[32px] md:text-[44px] leading-tight">{s.elegant}</h2>
              <p className="mt-6 text-[17px] text-espresso/80 leading-relaxed">{s.body}</p>
              <div className="mt-8 space-y-3">
                {s.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-4">
                    <span className="block w-10 h-px bg-gold" />
                    <span className="font-sans-ui text-[14px] text-espresso uppercase tracking-[0.14em]">{h}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-10 inline-block font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-7 py-4 rounded-full hover:bg-gold/90 transition-colors"
              >
                {s.cta} →
              </Link>
            </div>
          </div>
        </section>
      ))}

      <StatsBar />

      <CTABlock />
    </SiteShell>
  );
}

function StatsBar() {
  const stats = [
    { from: 450, to: 500, suffix: "+", label: "Safari Experiences" },
    { from: 7, to: 9, suffix: "", label: "Years of Excellence" },
    { from: 8, to: 12, suffix: "", label: "Destinations Covered" },
    { from: 90, to: 100, suffix: "%", label: "Personalised Journeys" },
  ];
  return (
    <section className="bg-charcoal text-cream py-24 px-6 md:px-10 noise-texture">
      <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function Stat({ from, to, suffix, label }: { from: number; to: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [n, setN] = useState(from);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.8 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center md:text-left">
      <div className="font-display font-bold text-gold text-[56px] md:text-[72px] leading-none">
        {n}{suffix}
      </div>
      <div className="mt-3 label-eyebrow text-cream/60">{label}</div>
    </motion.div>
  );
}
