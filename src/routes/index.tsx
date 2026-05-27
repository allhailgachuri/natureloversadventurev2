import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { HeroGallery } from "@/components/site/HeroGallery";
import { CTABlock } from "@/components/site/CTABlock";
import { Loader } from "@/components/site/Loader";
import { HERO_VIDEOS, PACKAGES, DESTINATIONS, SERVICES, ACTIVITIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nature Lovers Adventure — Cinematic East African Safaris" },
      { name: "description", content: "Curated luxury safaris across Kenya, Tanzania and East Africa. Personalised itineraries, expert local guides, unforgettable journeys since 2017." },
    ],
  }),
});

function Index() {
  return (
    <SiteShell>
      <Loader />
      <HeroGallery />

      {/* Bento video grid */}
      <section className="bg-cream-light py-24 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <div className="label-eyebrow">A Visual Journey</div>
            <h2 className="mt-4 font-display font-bold text-espresso text-[32px] md:text-[48px] leading-tight">
              Eight Worlds, One Adventure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {HERO_VIDEOS.slice(0, 5).map((v, i) => (
              <BentoCell key={v.src} v={v} className={i === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"} />
            ))}
            {HERO_VIDEOS.slice(5).map((v) => (
              <BentoCell key={v.src} v={v} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Safari */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl">
            <div className="label-eyebrow">Handcrafted Journeys</div>
            <h2 className="mt-4 font-display font-bold text-espresso text-[36px] md:text-[48px] leading-tight">
              Plan Your Safari
            </h2>
            <p className="mt-5 text-[18px] text-espresso/70 leading-relaxed">
              Three of our most beloved journeys across East Africa's most iconic destinations.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.slice(0, 3).map((p) => (
              <FeaturedCard key={p.id} pkg={p} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/safari-packages"
              className="inline-block font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] border-2 border-gold text-gold px-8 py-4 rounded-full hover:bg-gold hover:text-espresso transition-colors"
            >
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="label-eyebrow">Explore by Destination</div>
            <h2 className="mt-4 font-display font-bold text-espresso text-[36px] md:text-[48px] leading-tight">
              Choose Your Corner of Africa
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DESTINATIONS.slice(0, 3).map((d) => (
              <Link
                key={d.name}
                to="/safari-packages"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl"
              >
                <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:from-black/95" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display font-bold text-cream text-[28px]">{d.name}</h3>
                  <p className="mt-2 font-serif-display italic text-cream/70 text-[14px]">{d.tagline}</p>
                  <div className="mt-4 text-gold font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em]">Explore →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="label-eyebrow">What We Do</div>
            <h2 className="mt-4 font-display font-bold text-espresso text-[36px] md:text-[48px] leading-tight">
              Complete Travel Solutions
            </h2>
            <p className="mt-5 text-[17px] text-espresso/70 leading-relaxed">
              From planning to execution — every detail of your journey handled with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.id} to="/services" hash={s.id} className="group block bg-cream-light rounded-3xl overflow-hidden border border-espresso/5 hover:border-gold/30 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-espresso text-[22px]">{s.name}</h3>
                  <p className="mt-3 text-[15px] text-espresso/70 leading-relaxed">{s.excerpt}</p>
                  <div className="mt-5 text-gold font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em]">View More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="label-eyebrow">Choose Your Adventure</div>
            <h2 className="mt-4 font-display font-bold text-espresso text-[36px] md:text-[48px] leading-tight">
              Every Kind of Exploration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACTIVITIES.map((a) => (
              <Link
                key={a.id}
                to="/safari-packages"
                hash={a.id}
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl"
              >
                <img src={a.image} alt={a.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:from-black/95" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display font-bold text-cream text-[28px] md:text-[32px]">{a.name}</h3>
                  <p className="mt-2 font-serif-display italic text-cream/80 text-[16px]">{a.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </SiteShell>
  );
}

function BentoCell({ v, className = "" }: { v: typeof HERO_VIDEOS[number]; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-charcoal ${className}`}>
      <video
        src={v.src}
        poster={v.poster}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-4 left-5 font-sans-ui text-cream text-[13px] uppercase tracking-[0.18em]">
        {v.label}
      </div>
    </div>
  );
}

function FeaturedCard({ pkg }: { pkg: typeof PACKAGES[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-charcoal"
    >
      <img src={pkg.image} alt={pkg.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity group-hover:from-black/95" />
      <div className="absolute top-5 right-5 bg-gold text-espresso font-sans-ui text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-full">
        {pkg.duration}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-display font-bold text-cream text-[22px] leading-tight">{pkg.title}</h3>
        <p className="mt-2 text-cream/70 text-[12px]">{pkg.destinations.join(" · ")}</p>
        <div className="mt-3 text-gold font-sans-ui text-[13px]">Price on Request</div>
        <Link to="/safari-packages" hash={pkg.id} className="mt-5 inline-block text-gold font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] hover:text-cream transition-colors">
          View Package →
        </Link>
      </div>
    </motion.div>
  );
}
