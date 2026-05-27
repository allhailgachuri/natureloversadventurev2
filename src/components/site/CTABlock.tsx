import { Link } from "@tanstack/react-router";
import { EMAIL, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_URL } from "@/lib/site-data";

export function CTABlock() {
  return (
    <section className="relative bg-charcoal text-cream overflow-hidden noise-texture">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,146,42,0.12),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 py-28 md:py-36 text-center">
        <div className="label-eyebrow">Nature Lovers Adventure</div>
        <h2 className="mt-6 font-display font-bold text-cream text-[40px] md:text-[64px] leading-[1.05] tracking-tight">
          Ready to Answer the Call of Africa?
        </h2>
        <p className="mt-8 max-w-xl mx-auto font-sans-ui text-[17px] md:text-[18px] text-cream/70 leading-relaxed">
          The savannah is vast, the skies are open, and your adventure is waiting.
          Let Nature Lovers Adventure craft a journey that stays with you forever —
          authentic, comfortable, and breathtakingly East African.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-colors"
          >
            Request Your Tailor-Made Safari
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.16em] border border-cream/40 text-cream px-8 py-4 rounded-full hover:bg-cream hover:text-espresso transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
        <div className="mt-12 text-[13px] text-cream/50 space-y-1">
          <div><a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a></div>
          <div>
            {PHONE_PRIMARY} (WhatsApp & Enquiries) · {PHONE_SECONDARY} (Call Enquiries)
          </div>
        </div>
      </div>
    </section>
  );
}
