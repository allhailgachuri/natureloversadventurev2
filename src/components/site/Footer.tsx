import { Link } from "@tanstack/react-router";
import { EMAIL, PHONE_PRIMARY, WHATSAPP_SHORT } from "@/lib/site-data";
import { Wordmark } from "./Wordmark";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/services", label: "Services" },
  { to: "/safari-packages", label: "Safari Packages & Destinations" },
  { to: "/contact", label: "Contact Us" },
];

const SOCIAL = [
  { label: "WhatsApp", href: WHATSAPP_SHORT },
  { label: "Instagram", href: "https://instagram.com/natureloversadventure" },
  { label: "TikTok", href: "https://tiktok.com/@natureloversadventure" },
  { label: "Facebook", href: "https://facebook.com/NatureLoversAdventureKenya" },
  { label: "Twitter", href: "https://twitter.com/NLAKenya" },
];

const DEALS = [
  "6 Days Kenya Safari",
  "8 Days Camping Safari",
  "Bush Beach 9 Days",
  "11 Days Kenya-Tanzania",
  "Masai Mara 3 Days",
  "Magical Kenya 6 Days",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream noise-texture">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Wordmark tone="light" />
            <p className="mt-6 font-serif-display italic text-cream/70 text-[17px] leading-relaxed">
              Crafting Africa's most unforgettable journeys since 2017.
            </p>
            <div className="mt-6 space-y-1 text-[13px] text-cream/60">
              <div>Nairobi, Kenya 00100</div>
              <a href={`mailto:${EMAIL}`} className="block hover:text-gold">{EMAIL}</a>
              <div>{PHONE_PRIMARY}</div>
            </div>
          </div>

          <div>
            <div className="label-eyebrow mb-5">Navigate</div>
            <ul className="space-y-3 text-[14px]">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-cream/70 hover:text-gold transition-colors">{n.label}</Link>
                </li>
              ))}
              <li><Link to="/privacy" className="text-cream/70 hover:text-gold">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-cream/70 hover:text-gold">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <div className="label-eyebrow mb-5">Connect</div>
            <ul className="space-y-3 text-[14px]">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold hover:underline underline-offset-4 transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-eyebrow mb-5">Safari Deals</div>
            <ul className="space-y-3 text-[14px]">
              {DEALS.map((d) => (
                <li key={d}>
                  <Link to="/safari-packages" className="text-cream/70 hover:text-gold transition-colors">{d}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-cream/50">
          <div>©2026. Nature Lovers Adventure · All Rights Reserved</div>
          <div>
            Developed by{" "}
            <a href="https://rushionsportfolio.vercel.app/" target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold hover:underline underline-offset-4">
              Rushion Gachuri
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
