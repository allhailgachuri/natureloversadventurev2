import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { CTABlock } from "@/components/site/CTABlock";
import { TEAM, TESTIMONIALS, ACCREDITATIONS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/our-story")({
  component: OurStory,
  head: () => ({ meta: [{ title: "Our Story — Nature Lovers Adventure" }] }),
});

const HERO = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=80";
const NAIROBI = "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=1400&q=80";
const STEVE = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80";

function OurStory() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-charcoal">
        <img src={HERO} alt="Maasai Mara at golden hour" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="label-eyebrow">Our Story</div>
          <h1 className="mt-5 font-display font-bold text-cream text-[36px] md:text-[64px] leading-[1.05] tracking-tight max-w-3xl">
            Born From a Love of Africa
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-7 h-px bg-gold"
          />
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream-light">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={NAIROBI} alt="Nairobi to wilderness" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="label-eyebrow">About Nature Lovers</div>
            <h2 className="mt-4 font-display font-bold text-espresso text-[32px] md:text-[44px] leading-tight">
              Where city gives way to wilderness.
            </h2>
            <p className="mt-6 text-[17px] text-espresso/80 leading-relaxed">
              Nature Lovers Adventure was born from a single belief — that Africa's landscapes, wildlife, and cultures deserve to be experienced, not just visited. We are a Nairobi-based tour operator weaving years of regional expertise and an unwavering passion for authentic travel into journeys that change the people who take them. Whether you dream of the Great Migration, a Rift Valley dawn, or a campfire under African stars — we design every itinerary around you. Your pace. Your interests. Your definition of extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Steve Mwangi */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <div className="label-eyebrow">The Founder</div>
            <h2 className="mt-4 font-display font-bold text-espresso text-[36px] md:text-[48px] leading-tight">Steve Mwangi</h2>
            <div className="mt-2 text-espresso/60 text-[16px]">Founder & Chief Executive Officer</div>
            <div className="mt-6 h-px w-20 bg-gold" />
            <p className="mt-8 text-[17px] text-espresso/80 leading-relaxed">
              Steve Mwangi founded Nature Lovers Adventure from a lifelong love of East Africa's wilderness. Born and raised in Nairobi, he grew up exploring the parks that became the foundation of his life's work. With deep expertise in Kenyan and Tanzanian safari operations, Steve personally oversees every itinerary — ensuring every journey carries the knowledge and care that only a true local can provide.
            </p>

            <div className="mt-12">
              <div className="label-eyebrow">What We Offer</div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {SERVICES.map((s) => (
                  <div key={s.id} className="flex items-baseline justify-between border-b border-espresso/10 pb-3">
                    <span className="font-serif-display italic text-gold text-[18px]">{s.elegant}</span>
                    <span className="font-sans-ui text-[13px] text-espresso/60">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={STEVE} alt="Founder overlooking the Mara" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why travel with us */}
      <section className="bg-charcoal text-cream py-24 md:py-32 px-6 md:px-10 noise-texture">
        <div className="max-w-[1300px] mx-auto">
          <div className="label-eyebrow">Why Travel With Us</div>
          <h2 className="mt-4 font-display font-bold text-cream text-[32px] md:text-[48px] max-w-2xl leading-tight">
            Four reasons travellers return to us.
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { n: "01", h: "Deeply Personal", b: "Every itinerary is built from scratch around the traveller. Your preferences, your pace, your definition of adventure — that is where every journey begins." },
              { n: "02", h: "Local at Heart", b: "Our guides know these parks as living, breathing places they have known their whole lives. That local depth is something no international operator can replicate." },
              { n: "03", h: "End-to-End Care", b: "From first enquiry to your return home, we handle every detail — flights, accommodation, transfers, park permits. You carry nothing but anticipation." },
              { n: "04", h: "Trusted for Years", b: "Nearly a decade of East African adventures. Our reputation is built on the stories our travellers share long after they return — those stories are our greatest credential." },
            ].map((p) => (
              <div key={p.n}>
                <div className="font-display font-bold text-gold text-[64px] leading-none">{p.n}</div>
                <h3 className="mt-4 font-display text-cream text-[24px]">{p.h}</h3>
                <p className="mt-3 text-cream/70 text-[16px] leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream-light">
        <div className="max-w-[1300px] mx-auto">
          <div className="label-eyebrow">The People Behind Your Journey</div>
          <h2 className="mt-4 font-display font-bold text-espresso text-[36px] md:text-[48px]">Our Team</h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="bg-cream rounded-3xl p-10 border border-espresso/5">
                <div className="font-display font-bold text-gold text-[64px] leading-none">{m.initials}</div>
                <h3 className="mt-6 font-display font-bold text-espresso text-[22px]">
                  {m.link ? (
                    <a href={m.link} target="_blank" rel="noreferrer" className="hover:text-gold hover:underline underline-offset-4">{m.name}</a>
                  ) : m.name}
                </h3>
                <div className="mt-1 label-eyebrow text-[11px]">{m.title}</div>
                <div className="mt-5 h-px w-14 bg-gold" />
                <p className="mt-5 font-serif-display italic text-espresso/85 text-[18px] leading-relaxed">"{m.message}"</p>
                <p className="mt-5 text-[14px] text-espresso/60 leading-relaxed">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="font-display font-bold text-espresso text-[36px] md:text-[48px] max-w-2xl">
            Trusted, Verified, Recognised.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCREDITATIONS.map((a) => (
              <div key={a.org} className="bg-cream-light border-l-4 border-gold rounded-2xl p-7">
                <h3 className="font-display font-bold text-espresso text-[18px] leading-snug">{a.org}</h3>
                <div className="mt-2 text-gold font-sans-ui text-[13px]">{a.credential}</div>
                <p className="mt-4 text-[14px] text-espresso/60 leading-relaxed">{a.desc}</p>
                <div className="mt-4 text-[12px] text-espresso/50">{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-cream-light">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="font-display font-bold text-espresso text-[36px] md:text-[48px]">Stories From the Trail</h2>
          <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="break-inside-avoid bg-cream rounded-3xl p-8 border border-espresso/5">
                <div className="font-display text-gold text-[72px] leading-none -mb-4">"</div>
                <p className="font-serif-display italic text-espresso/85 text-[18px] leading-relaxed">{t.text}</p>
                <div className="mt-6 font-sans-ui font-bold text-espresso text-[14px]">{t.name}</div>
                <div className="text-espresso/60 text-[12px]">{t.country}</div>
                <div className="mt-2 text-gold text-[12px]">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </SiteShell>
  );
}
