import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CTABlock } from "@/components/site/CTABlock";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Nature Lovers Adventure" },
      { name: "description", content: "Explore the breathtaking moments captured on our East African safaris." },
    ],
    links: [{ rel: "canonical", href: "https://natureloverstravels.com/gallery" }],
  }),
});

function Gallery() {
  const photos = Array.from({ length: 11 }, (_, i) => `/gallery/photo${i + 1}.png`);

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 w-full bg-charcoal text-center px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="label-eyebrow text-gold">Gallery</div>
          <h1 className="mt-5 font-display font-bold text-cream text-[36px] md:text-[64px] leading-[1.05] tracking-tight">
            Moments in the Wild
          </h1>
          <p className="mt-6 text-[17px] text-cream/70 leading-relaxed max-w-2xl mx-auto">
            A glimpse into the extraordinary experiences awaiting you in Kenya and Tanzania. From the sweeping plains of the Mara to the quiet beauty of our lodges.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-cream">
        <div className="max-w-[1400px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-espresso/5 bg-charcoal">
              <img 
                src={src} 
                alt={`Nature Lovers Safari Moment ${i + 1}`} 
                className="w-full h-auto block hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <CTABlock />
    </SiteShell>
  );
}
