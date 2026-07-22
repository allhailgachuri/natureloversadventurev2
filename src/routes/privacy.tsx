import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EMAIL } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nature Lovers Adventure" },
      { name: "description", content: "How Nature Lovers Adventure collects, uses and protects your personal data when you enquire about safaris and travel services." },
    ],
    links: [{ rel: "canonical", href: "https://natureloverstravels.com/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="pt-40 pb-24 px-6 md:px-10 bg-cream-light min-h-screen">
        <div className="max-w-3xl mx-auto prose-content text-espresso">
          <div className="label-eyebrow">Legal</div>
          <h1 className="mt-4 font-display font-bold text-espresso text-[40px] md:text-[56px] leading-tight">Privacy Policy</h1>
          <p className="mt-4 text-espresso/60 text-[14px]">Last updated: June 2026</p>

          <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-espresso/85">
            <p>Nature Lovers Adventure ("we", "our", "us") respects your privacy. This policy explains what personal information we collect when you contact us or use our website, how we use it, and your rights under applicable data-protection laws including the Kenya Data Protection Act 2019 and the EU GDPR.</p>

            <h2 className="font-display text-[24px] mt-10">What we collect</h2>
            <p>We collect information you give us directly — name, email, phone number, country of residence, travel preferences, party size and any messages — when you submit an enquiry form, email or WhatsApp us. We also collect basic technical information such as your IP address, browser type and pages visited.</p>

            <h2 className="font-display text-[24px] mt-10">How we use it</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To prepare a personalised safari quote and respond to your enquiry.</li>
              <li>To make bookings with lodges, parks, airlines and transport providers on your behalf.</li>
              <li>To send transactional emails about your trip.</li>
              <li>To improve our website and services.</li>
            </ul>

            <h2 className="font-display text-[24px] mt-10">Sharing</h2>
            <p>We share booking details only with the suppliers required to deliver your trip (lodges, guides, airlines, visa authorities). We do not sell your data.</p>

            <h2 className="font-display text-[24px] mt-10">Your rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by emailing <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">{EMAIL}</a>. EU and UK residents have additional rights under GDPR including data portability and the right to lodge a complaint with a supervisory authority.</p>

            <h2 className="font-display text-[24px] mt-10">Cookies</h2>
            <p>Our site uses essential cookies for navigation and analytics cookies to understand traffic. No advertising cookies are used.</p>

            <h2 className="font-display text-[24px] mt-10">Contact</h2>
            <p>Questions about this policy: <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">{EMAIL}</a></p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
