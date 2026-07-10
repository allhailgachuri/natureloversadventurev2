import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CTABlock } from "@/components/site/CTABlock";
import { PACKAGES, DESTINATIONS, ACTIVITIES } from "@/lib/site-data";

export const Route = createFileRoute("/safari-packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Safari Packages — Kenya & Tanzania Itineraries | Nature Lovers" },
      { name: "description", content: "Browse Kenya and Tanzania safari packages — Masai Mara, Amboseli, Samburu, Ngorongoro. Fully personalised itineraries, price on request." },
      { property: "og:title", content: "Safari Packages — Nature Lovers Adventure" },
      { property: "og:description", content: "Browse Kenya and Tanzania safari packages — Masai Mara, Amboseli, Samburu, Ngorongoro. Fully personalised itineraries, price on request." },
    ],
    links: [{ rel: "canonical", href: "https://natureloversadventure.co.ke/safari-packages" }],
  }),
});

const buildWaMsg = (pkg: { title: string; destinations: string[]; duration: string }) => {
  const text = `Hello Nature Lovers Adventure! I'm interested in the ${pkg.title} (${pkg.duration}) covering ${pkg.destinations.join(", ")}. Could you share pricing and availability?`;
  return `https://api.whatsapp.com/send?phone=254724660170&text=${encodeURIComponent(text)}`;
};

const HERO = "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=2000&q=80";

const COUNTRIES = ["All", "Kenya", "Tanzania"] as const;
const DURATIONS = ["Any", "Under 1 Week", "1 Week", "10 Days", "2 Weeks", "2+ Weeks"] as const;
const ACTS = ["All", "Game Drives", "Jeep Safari", "Beach Sightseeing"] as const;
const THEMES = ["All", "Wildlife", "Safari", "Beach & Islands"] as const;

function PackagesPage() {
  const [country, setCountry] = useState<(typeof COUNTRIES)[number]>("All");
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>("Any");
  const [act, setAct] = useState<(typeof ACTS)[number]>("All");
  const [theme, setTheme] = useState<(typeof THEMES)[number]>("All");

  const filtered = useMemo(() => {
    return PACKAGES.filter((p) => {
      if (country !== "All" && !p.country.includes(country)) return false;
      if (act !== "All" && p.activity !== act) return false;
      if (theme !== "All" && !p.themes.includes(theme)) return false;
      if (duration !== "Any") {
        const nights = parseInt(p.duration, 10);
        if (duration === "Under 1 Week" && nights >= 7) return false;
        if (duration === "1 Week" && (nights < 6 || nights > 7)) return false;
        if (duration === "10 Days" && (nights < 8 || nights > 9)) return false;
        if (duration === "2 Weeks" && (nights < 10 || nights > 13)) return false;
        if (duration === "2+ Weeks" && nights < 14) return false;
      }
      return true;
    });
  }, [country, act, theme, duration]);

  return (
    <SiteShell>
      <section className="relative h-[65vh] min-h-[460px] w-full overflow-hidden bg-charcoal">
        <img src={HERO} alt="Wildebeest migration" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="label-eyebrow">Safari Packages & Destinations</div>
          <h1 className="mt-5 font-display font-bold text-cream text-[40px] md:text-[64px] leading-[1.05] tracking-tight max-w-3xl">
            Your East Africa Awaits
          </h1>
          <p className="mt-6 font-serif-display italic text-cream/80 text-[18px] md:text-[22px]">
            Discover journeys crafted for every kind of explorer
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[68px] z-30 bg-cream-light/95 backdrop-blur-md border-b border-espresso/10 py-4 px-4 md:px-10">
        <div className="max-w-[1300px] mx-auto flex md:flex-wrap gap-6 md:gap-10 overflow-x-auto md:overflow-visible">
          <FilterRow label="Destination" options={COUNTRIES as unknown as string[]} value={country} onChange={(v) => setCountry(v as never)} />
          <FilterRow label="Duration" options={DURATIONS as unknown as string[]} value={duration} onChange={(v) => setDuration(v as never)} />
          <FilterRow label="Activity" options={ACTS as unknown as string[]} value={act} onChange={(v) => setAct(v as never)} />
          <FilterRow label="Theme" options={THEMES as unknown as string[]} value={theme} onChange={(v) => setTheme(v as never)} />
        </div>
      </div>

      <section className="py-20 md:py-24 px-6 md:px-10 bg-cream-light">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.id} id={p.id} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-charcoal">
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/95 transition" />
              <div className="absolute top-5 right-5 bg-gold text-espresso font-sans-ui text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-full">
                {p.duration}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display font-bold text-cream text-[20px] leading-tight">{p.title}</h3>
                <p className="mt-2 text-cream/70 text-[12px]">{p.destinations.join(" · ")}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.themes.map((t) => (
                    <span key={t} className="text-[11px] text-cream/60 bg-cream/15 px-2.5 py-1 rounded-full font-sans-ui">{t}</span>
                  ))}
                </div>
                <div className="mt-4 text-gold text-[13px]">Price on Request</div>
                <div className="mt-4 flex gap-5">
                  <a href={buildWaMsg(p)} target="_blank" rel="noreferrer" className="text-gold font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] hover:text-cream">Enquire on WhatsApp →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* By destination */}
      <section id="by-destination" className="py-24 px-6 md:px-10 bg-cream">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="font-display font-bold text-espresso text-[32px] md:text-[40px]">Browse by Destination</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {DESTINATIONS.map((d) => (
              <div key={d.name} className="bg-cream-light rounded-3xl p-8 border border-espresso/5 hover:border-gold/30 transition-colors">
                <h3 className="font-display font-bold text-espresso text-[28px]">{d.name}</h3>
                <div className="mt-1 text-espresso/60 text-[13px]">{d.country}</div>
                {(() => {
                  const n = PACKAGES.filter((p) => p.destinations.some((x) => x.toLowerCase().includes(d.name.toLowerCase()))).length;
                  return <div className="mt-5 text-espresso/60 text-[13px]">{n} {n === 1 ? "package" : "packages"} available</div>;
                })()}
                <div className="mt-5 text-gold font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em]">View Packages →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By activity */}
      <section className="bg-cream-light">
        {ACTIVITIES.map((a) => (
          <div key={a.id} id={a.id} className="relative h-[70vh] min-h-[480px] overflow-hidden">
            <img src={a.image} alt={a.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
            <div className="relative z-10 h-full max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16">
              <h2 className="font-display font-bold text-cream text-[40px] md:text-[56px] leading-tight">{a.name}</h2>
              <p className="mt-3 font-serif-display italic text-cream/80 text-[18px] max-w-xl">{a.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {PACKAGES.filter((p) => {
                  const an = a.name.toLowerCase();
                  const pa = p.activity.toLowerCase();
                  return an.includes(pa) || pa.includes(an.split(" ")[0]);
                }).map((p) => (
                  <span key={p.id} className="bg-cream/15 text-cream text-[12px] font-sans-ui px-4 py-2 rounded-full">{p.title}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTABlock />
    </SiteShell>
  );
}

function FilterRow({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span className="label-eyebrow text-[10px] shrink-0">{label}</span>
      <div className="flex gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`text-[12px] font-sans-ui px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
              value === o ? "bg-espresso text-cream" : "text-espresso/70 hover:bg-espresso/10"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
