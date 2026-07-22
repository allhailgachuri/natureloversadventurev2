import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EMAIL } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Nature Lovers Adventure" },
      { name: "description", content: "Booking terms, payment, cancellation policy and liability for safaris and travel services with Nature Lovers Adventure." },
    ],
    links: [{ rel: "canonical", href: "https://natureloverstravels.com/terms" }],
  }),
});

function TermsPage() {
  return (
    <SiteShell>
      <article className="pt-40 pb-24 px-6 md:px-10 bg-cream-light min-h-screen">
        <div className="max-w-3xl mx-auto text-espresso">
          <div className="label-eyebrow">Legal</div>
          <h1 className="mt-4 font-display font-bold text-espresso text-[40px] md:text-[56px] leading-tight">Terms & Conditions</h1>
          <p className="mt-4 text-espresso/60 text-[14px]">Last updated: June 2026</p>

          <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-espresso/85">
            <h2 className="font-display text-[24px]">1. Booking & confirmation</h2>
            <p>A booking is confirmed once we receive a signed confirmation and the agreed deposit. Quotes are valid for 14 days unless otherwise stated.</p>

            <h2 className="font-display text-[24px] mt-10">2. Payments</h2>
            <p>A 30% deposit is required to secure your booking. The balance is due 45 days before departure. Bookings made within 45 days of departure require full payment.</p>

            <h2 className="font-display text-[24px] mt-10">3. Cancellation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>More than 60 days before departure: deposit refundable less admin fees.</li>
              <li>30–60 days: 50% of total cost.</li>
              <li>Less than 30 days: 100% of total cost.</li>
            </ul>
            <p>We strongly recommend comprehensive travel insurance covering cancellation, medical evacuation and lost baggage.</p>

            <h2 className="font-display text-[24px] mt-10">4. Changes by us</h2>
            <p>Itineraries may be adjusted due to weather, wildlife conditions, road access, park closures or other circumstances beyond our control. We will always propose equivalent alternatives.</p>

            <h2 className="font-display text-[24px] mt-10">5. Travellers' responsibility</h2>
            <p>You are responsible for ensuring valid passports, visas, vaccinations and travel insurance. We provide guidance on requirements but final compliance rests with you.</p>

            <h2 className="font-display text-[24px] mt-10">6. Liability</h2>
            <p>Nature Lovers Adventure acts as an agent for third-party suppliers (lodges, airlines, transport). We are not liable for injury, loss, damage or delay caused by these suppliers beyond our duty of care to select reputable providers.</p>

            <h2 className="font-display text-[24px] mt-10">7. Governing law</h2>
            <p>These terms are governed by the laws of Kenya. Disputes will be resolved in the courts of Nairobi.</p>

            <h2 className="font-display text-[24px] mt-10">8. Contact</h2>
            <p>Questions: <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">{EMAIL}</a></p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
