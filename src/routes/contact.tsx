import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { CTABlock } from "@/components/site/CTABlock";
import { EMAIL, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_SHORT, WHATSAPP_URL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Plan Your East African Safari | Nature Lovers" },
      { name: "description", content: "Speak directly with Steve Mwangi and the Nairobi team. WhatsApp, email or send a detailed enquiry — we reply within 24 hours, usually faster." },
      { property: "og:title", content: "Contact Us — Nature Lovers Adventure" },
      { property: "og:description", content: "Speak directly with Steve Mwangi and the Nairobi team. WhatsApp, email or send a detailed enquiry — we reply within 24 hours, usually faster." },
    ],
    links: [{ rel: "canonical", href: "https://natureloversadventurev2.lovable.app/contact" }],
  }),
});

const CONTACT_HERO = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=80";

const STEP_TOPICS = [
  "About you",
  "Where to explore",
  "Type of experience",
  "Your budget",
  "When to travel",
  "Flights",
  "Trip length",
  "Travellers & details",
  "Confirmation",
];

const STEPS = [
  { q: "Who are you travelling as?", options: ["Solo Adventurer", "Couple / Honeymoon", "Family with Children", "Group of Friends", "Corporate Group"], multi: false },
  { q: "Where would you like to explore?", options: ["Kenya", "Tanzania & Zanzibar", "Uganda", "Rwanda", "Seychelles", "Surprise Me — I'm Open to Ideas"], multi: true },
  { q: "What kind of experience are you after?", options: ["Wildlife Safari & Game Drives", "Beach & Ocean Escape", "Fly-In Luxury Safari", "Camping Under the Stars", "Special Occasion or Event", "Cultural & Heritage Journey"], multi: true },
  { q: "What's your approximate budget per person?", options: ["Under $1,500", "$1,500 – $3,000", "$3,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Not Sure — Help Me Decide"], multi: false },
  { q: "When are you planning to travel?", options: ["2025", "2026", "2027", "I Have Specific Dates"], multi: false },
  { q: "Have you booked your flights yet?", options: ["Yes, my flights are confirmed", "No, I'll need flight assistance too", "I'm travelling from within Kenya"], multi: false },
  { q: "How long is your trip?", options: ["Under 1 Week", "1 Week", "10 Days", "2 Weeks", "More than 2 Weeks"], multi: false },
];

function ContactPage() {
  return (
    <SiteShell>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-charcoal text-cream noise-texture">
        <img src={CONTACT_HERO} alt="Golden hour over the Mara" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/85" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="label-eyebrow">Contact Us</div>
          <h1 className="mt-5 font-display font-bold text-cream text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
            Let's Start Planning Your Safari
          </h1>
          <p className="mt-6 text-cream/80 text-[17px] md:text-[18px]">
            We respond within 24 hours. Usually much faster.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 bg-cream-light">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="label-eyebrow">Visit Us</div>
            <h3 className="mt-4 font-display text-espresso text-[22px]">Nature Lovers Adventure</h3>
            <p className="mt-2 text-espresso/70 text-[15px] leading-relaxed">Kenya Cinema Plaza area<br />Nairobi, Kenya 00100</p>
            <p className="mt-4 text-espresso/60 text-[14px]">Contact: Steve Mwangi</p>
          </div>
          <div>
            <div className="label-eyebrow">Call or WhatsApp</div>
            <p className="mt-4 text-espresso text-[16px]"><a href={WHATSAPP_SHORT} className="hover:text-gold">{PHONE_PRIMARY}</a> (WhatsApp & Enquiries)</p>
            <p className="mt-1 text-espresso text-[16px]">{PHONE_SECONDARY} (Call Enquiries)</p>
            <p className="mt-4 text-espresso/60 text-[14px]">Monday–Saturday: 8:00 AM – 7:00 PM EAT<br />Sunday: 10:00 AM – 4:00 PM EAT</p>
          </div>
          <div>
            <div className="label-eyebrow">Email</div>
            <p className="mt-4 text-espresso text-[16px]"><a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a></p>
            <p className="mt-4 text-espresso/60 text-[14px]">Average response: under 4 hours</p>
          </div>
        </div>
      </section>

      <EnquiryForm />

      {/* Social */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-espresso text-[28px] md:text-[36px]">Find Us Online</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { label: "WhatsApp", href: WHATSAPP_SHORT },
              { label: "Instagram", href: "https://instagram.com/natureloversadventure" },
              { label: "TikTok", href: "https://tiktok.com/@natureloversadventure" },
              { label: "Facebook", href: "https://facebook.com/NatureLoversAdventureKenya" },
              { label: "Twitter / X", href: "https://twitter.com/NLAKenya" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="font-sans-ui font-bold text-[16px] text-espresso hover:text-gold hover:underline underline-offset-8">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 md:px-10 pb-20 bg-cream">
        <div className="max-w-[1300px] mx-auto rounded-3xl overflow-hidden">
          <iframe
            title="Nairobi, Kenya"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.7000%2C-1.3500%2C36.9500%2C-1.2000&layer=mapnik&marker=-1.2864%2C36.8172"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>

      <CTABlock />
    </SiteShell>
  );
}

function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", note: "" });
  const [done, setDone] = useState(false);

  const totalSteps = STEPS.length + 2; // + step 9 (details) + step 10 (confirmation)
  const progress = useMemo(() => Math.min(100, (step / (totalSteps - 1)) * 100), [step, totalSteps]);

  const pick = (i: number, opt: string) => {
    setAnswers((a) => {
      const cur = a[i];
      const step = STEPS[i];
      if (step.multi) {
        const arr = Array.isArray(cur) ? [...cur] : [];
        const idx = arr.indexOf(opt);
        if (idx >= 0) arr.splice(idx, 1);
        else arr.push(opt);
        return { ...a, [i]: arr };
      }
      return { ...a, [i]: opt };
    });
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    setDone(true);
    setStep(totalSteps - 1);
  };

  const isCurrentStepAnswered = () => {
    if (step < STEPS.length) {
      const v = answers[step];
      return STEPS[step].multi ? Array.isArray(v) && v.length > 0 : !!v;
    }
    if (step === STEPS.length) {
      return form.name && form.email && form.phone;
    }
    return true;
  };

  return (
    <section className="py-24 px-6 bg-cream-light">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center">
          <h2 className="font-display font-bold text-espresso text-[32px] md:text-[40px]">This takes less than 2 minutes...</h2>
          <p className="mt-4 text-espresso/70 text-[17px]">Tell us about your dream safari and we'll craft a personalised quote just for you.</p>
        </div>

        <div className="mt-12 bg-cream rounded-3xl p-8 md:p-12 border border-espresso/5">
          <div className="h-px bg-espresso/10 mb-2">
            <motion.div animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} className="h-full bg-gold" />
          </div>
          <div className="text-[12px] text-espresso/50 mb-8">
            {done ? "Complete" : `Step ${step + 1} of ${totalSteps}`}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {step < STEPS.length && (
                <StepView
                  step={STEPS[step]}
                  selected={answers[step]}
                  onPick={(o) => pick(step, o)}
                />
              )}

              {step === STEPS.length && (
                <div>
                  <h3 className="font-display text-espresso text-[24px] md:text-[28px]">Who's joining you?</h3>
                  <div className="mt-8 space-y-6">
                    <Counter label="Adults" value={adults} setValue={setAdults} min={1} />
                    <Counter label="Children (under 12)" value={children} setValue={setChildren} min={0} />
                  </div>

                  <h3 className="mt-12 font-display text-espresso text-[24px] md:text-[28px]">Almost there — your details:</h3>
                  <div className="mt-6 space-y-4">
                    <Input placeholder="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Input placeholder="Email Address *" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
                    <Input placeholder="Phone / WhatsApp Number *" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Input placeholder="Country" value={form.country} onChange={(v) => setForm({ ...form, country: v })} />
                    <textarea
                      placeholder="Anything specific you'd like us to know? (optional)"
                      rows={4}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      className="w-full bg-cream-light border border-espresso/15 rounded-2xl px-5 py-3 font-sans-ui text-[15px] text-espresso placeholder:text-espresso/40 outline-none focus:border-gold"
                    />
                  </div>
                </div>
              )}

              {step === totalSteps - 1 && done && <Confirmation name={form.name.split(" ")[0] || "Traveller"} />}
            </motion.div>
          </AnimatePresence>

          {!done && (
            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={prev}
                disabled={step === 0}
                className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] text-espresso/50 hover:text-espresso disabled:opacity-30"
              >
                ← Back
              </button>
              {step < STEPS.length ? (
                <button
                  onClick={next}
                  disabled={!isCurrentStepAnswered()}
                  className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-7 py-3.5 rounded-full hover:bg-gold/90 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!isCurrentStepAnswered()}
                  className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-7 py-3.5 rounded-full hover:bg-gold/90 disabled:opacity-40"
                >
                  Send Enquiry →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StepView({ step, selected, onPick }: { step: typeof STEPS[number]; selected?: string | string[]; onPick: (o: string) => void }) {
  const isSelected = (o: string) => (Array.isArray(selected) ? selected.includes(o) : selected === o);
  return (
    <div>
      <h3 className="font-display text-espresso text-[24px] md:text-[28px]">{step.q}</h3>
      {step.multi && <p className="mt-2 text-espresso/50 text-[13px]">Select all that apply</p>}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {step.options.map((o) => (
          <button
            key={o}
            onClick={() => onPick(o)}
            className={`text-left px-5 py-4 rounded-2xl border-2 font-sans-ui text-[15px] transition-all ${
              isSelected(o)
                ? "border-gold bg-cream-light text-espresso"
                : "border-espresso/15 bg-cream text-espresso/80 hover:border-espresso/30"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Counter({ label, value, setValue, min }: { label: string; value: number; setValue: (n: number) => void; min: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-sans-ui text-espresso text-[15px]">{label}</span>
      <div className="flex items-center gap-4">
        <button onClick={() => setValue(Math.max(min, value - 1))} className="w-10 h-10 rounded-full bg-cream-light border border-espresso/15 font-bold text-espresso hover:border-gold">−</button>
        <span className="w-8 text-center font-display text-espresso text-[18px]">{value}</span>
        <button onClick={() => setValue(value + 1)} className="w-10 h-10 rounded-full bg-cream-light border border-espresso/15 font-bold text-espresso hover:border-gold">+</button>
      </div>
    </div>
  );
}

function Input({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-cream-light border border-espresso/15 rounded-full px-5 py-3 font-sans-ui text-[15px] text-espresso placeholder:text-espresso/40 outline-none focus:border-gold"
    />
  );
}

function Confirmation({ name }: { name: string }) {
  return (
    <div className="text-center py-6">
      <motion.svg
        viewBox="0 0 80 80"
        className="w-20 h-20 mx-auto"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="40" cy="40" r="36" fill="none" stroke="rgb(200 146 42)" strokeWidth="2"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d="M24 42 L36 54 L58 28" fill="none" stroke="rgb(200 146 42)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
      </motion.svg>
      <h3 className="mt-6 font-display font-bold text-espresso text-[32px] md:text-[40px]">Thank you, {name}!</h3>
      <p className="mt-4 text-espresso/70 text-[17px] max-w-md mx-auto leading-relaxed">
        Your safari enquiry has been received. Our team will reach out within 24 hours — usually much sooner. In the meantime, feel free to reach us directly.
      </p>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-block font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90">
        Chat on WhatsApp →
      </a>
    </div>
  );
}
