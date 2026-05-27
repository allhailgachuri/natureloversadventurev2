import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AYLA_KNOWLEDGE } from "@/lib/ayla-knowledge";
import { WHATSAPP_SHORT } from "@/lib/site-data";

type Msg = { role: "ayla" | "user"; text: string };

const GREETING =
  "Hi, I'm Ayla ✦ — your personal safari guide at Nature Lovers Adventure. Ask me anything about our tours, destinations, packages, best travel times, visa requirements, or how to plan the perfect East African adventure!";

// Generate intelligent responses based on user intent
function generateAylaResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  const knowledge = AYLA_KNOWLEDGE;

  // ─────────────────────────────────────────────────────────
  // INTENT: Best time to visit destination
  // ─────────────────────────────────────────────────────────
  if (
    msg.includes("best time") ||
    msg.includes("when to go") ||
    msg.includes("when should") ||
    msg.includes("season")
  ) {
    if (msg.includes("masai mara")) {
      const dest = knowledge.destinations["masai-mara"];
      return `The best time to visit Masai Mara is ${dest.bestMonths.join(", ")}.

🦁 **Peak Season (June-Oct):**
• Wildlife: Excellent (Great Migration June-August!)
• Weather: Dry, cool mornings (15-22°C), warm afternoons
• Crowds: Very high (book 3-4 months ahead)
• Prices: Higher ($1,500-3,000/night)

🟢 **Shoulder Season (Mar-May, Nov):**
• Wildlife: Still excellent + fewer tourists
• Prices: 30% cheaper
• Photography: Lush landscapes, golden light

Our team recommends September for the sweet spot: fewer tourists but still excellent wildlife!`;
    }
    if (msg.includes("amboseli")) {
      const dest = knowledge.destinations["amboseli"];
      return `Amboseli is best visited in ${dest.bestMonths.join(", ")}.

🐘 **Why Amboseli:**
• Elephant paradise (largest concentration in Africa)
• Mt. Kilimanjaro backdrop (stunning photography)
• 400+ bird species (birdwatcher heaven)
• Less crowded than Masai Mara

📅 **January-February:** Perfect weather, excellent wildlife
💰 **Lower prices than Masai Mara**

Interested in our "Magical Kenya 6 Days" package? It includes 2 nights in Amboseli!`;
    }
    if (msg.includes("tanzania") || msg.includes("serengeti")) {
      return `Tanzania's Serengeti has two migration seasons:

🦓 **Dec-Feb:** Calving season (southern plains, newborn wildebeest)
🦓 **June-Oct:** Northern crossing (Mara River, dramatic predator interactions)

The Serengeti is the largest migration on Earth—1.5-2.5 million wildebeest! Currently, our team focuses on Kenya's Masai Mara (northern extension), but we can arrange Tanzania combos on request.

Ask me about our "Bush & Beach" package—it combines Kenya safari with beach relaxation!`;
    }
    // Fallback
    return `Different destinations have different peak seasons! Tell me which destination interests you:\n\n🦁 Masai Mara (safari, Big Five)\n🐘 Amboseli (elephants, Kilimanjaro views)\n🏖️ Diani Beach (relaxation)\n🌳 Lake Naivasha (birds, Hell's Gate)\n\nOr ask about specific months, and I'll help!`;
  }

  // ─────────────────────────────────────────────────────────
  // INTENT: Visa & travel requirements
  // ─────────────────────────────────────────────────────────
  if (
    msg.includes("visa") ||
    msg.includes("passport") ||
    msg.includes("travel requirements") ||
    msg.includes("document")
  ) {
    if (
      msg.includes("usa") ||
      msg.includes("american") ||
      msg.includes(" us ") ||
      msg.includes("united states")
    ) {
      return `Great news! 🎉 US citizens get **90 days visa-free** entry to Kenya.

✓ **Requirements:**
• Passport valid for 6+ months
• Onward ticket
• Travel insurance (recommended)

✗ **No visa application needed**—you land directly!

⚠️ **Note:** If visiting Tanzania, you'll need a separate Tanzania visa ($50). We can guide you through the process!`;
    }
    if (
      msg.includes("china") ||
      msg.includes("india") ||
      msg.includes("need") ||
      msg.includes("require")
    ) {
      return `Citizens of China, India, and most other countries **require a Kenya visa**.

📋 **Options:**

1️⃣ **E-visa ($50)** via JIDA (kenya.go.ke/jida)
   • Online application: 3-5 days processing
   • Recommended (faster, easier)

2️⃣ **Visa on Arrival**
   • Instant at the airport
   • Bring USD cash (slight additional cost)

📌 **Always ensure** your passport has 6+ months validity and 2+ blank pages.

Need help with the process? We guide all our guests through visa requirements. WhatsApp us!`;
    }
    if (
      msg.includes("eu") ||
      msg.includes("europe") ||
      msg.includes("british") ||
      msg.includes("french")
    ) {
      return `✓ **EU/UK citizens: 90 days visa-free!**

All EU countries (Germany, France, Italy, Spain, etc.) + UK get visa-free entry.

📋 **Just bring:**
• Passport (valid 6+ months)
• Travel insurance
• Flight confirmation

🆓 **No visa needed**—land directly and start your adventure!`;
    }
    // Fallback
    return `What's your country of origin? I can give you specific visa requirements!\n\n• **USA, EU, UK, Australia, Canada:** Visa-free (90 days)\n• **China, India:** E-visa needed ($50, 3-5 days online)\n• **Other countries:** Ask me your country!`;
  }

  // ─────────────────────────────────────────────────────────
  // INTENT: Packing advice
  // ─────────────────────────────────────────────────────────
  if (
    msg.includes("pack") ||
    msg.includes("what to bring") ||
    msg.includes("luggage") ||
    msg.includes("clothes")
  ) {
    return `📦 **Packing for Safari – The Essentials:**

👕 **Clothing (NEUTRAL COLORS ONLY!):**
✓ Khaki, brown, olive, gray, tan
✗ Bright colors (scare animals!)
• Long-sleeve shirt + long trousers
• Lightweight fleece (mornings chilly)
• Sturdy hiking boots (BREAK IN BEFORE TRIP!)
• Wide-brim hat + sunglasses

📷 **Gear:**
• Binoculars 10x42 (essential!)
• Camera (phone fine, DSLR better for wildlife)
• Extra batteries & memory cards
• Phone charger (12V car adaptor)

💊 **Health:**
• Sunscreen SPF 50+ (reapply hourly!)
• Insect repellent 50% DEET
• Malaria medication (doctor prescribed)
• Antihistamines (for bites)

📋 **Documents:**
• Passport (6+ months valid)
• Travel insurance
• Flight confirmations

Pro tip: Don't overpack! Lodges provide basics. You'll want luggage space for souvenirs and photos!

How many days is your safari? I can refine recommendations.`;
  }

  // ─────────────────────────────────────────────────────────
  // INTENT: Wildlife & facts
  // ─────────────────────────────────────────────────────────
  if (
    msg.includes("big five") ||
    msg.includes("wildlife") ||
    msg.includes("animals") ||
    msg.includes("leopard") ||
    msg.includes("lion")
  ) {
    if (msg.includes("big five")) {
      return `🦁 **The Big Five – Africa's Most Iconic Animals:**

🦁 **Lion** – Apex predator, roars across savanna
🐘 **Elephant** – Largest land mammal, gentle giants
🐆 **Leopard** – Elusive beauty, night hunter
🦬 **Buffalo** – Dangerous & unpredictable
🦏 **Rhino** – Critically endangered, critically important

🎯 **Your Best Chances:**
• **Masai Mara:** 70-90% chance of seeing all 5 (peak season)
• **Amboseli:** 4 of 5 (rhinos are rare here)

Fun fact: Leopards are ELUSIVE (spotted ~40% of time), but our guides know their habits and favorite spots. We've had guests spot all 5 in a single day during peak season!`;
    }
    if (msg.includes("elephant")) {
      return `🐘 **Elephants – The Gentle Giants**

**In Amboseli:** 1,000+ individuals (highest concentration in Africa!)
**In Masai Mara:** Smaller herds, still common
**Behavior:** Intelligent, social, sometimes unpredictable
**Best time:** Jan-Feb, Aug-Sep (water concentration)

Baby elephant sightings are unforgettable! During calving season (Nov-Dec), expect adorable baby encounters. Our guides keep safe distances and read elephant behavior expertly.`;
    }
    if (msg.includes("cheetah")) {
      return `🐆 **Cheetahs – The Speed Demons**

**Speed:** 120 km/h (fastest land animal)
**Hunting:** Diurnal (daytime hunters)
**Sighting odds:** 60-70% in Masai Mara
**Best time:** Early morning (hunting hours)

Cheetahs are more visible than leopards because they hunt during the day. You'll likely see one on a 3+ day safari!`;
    }
    if (msg.includes("predator") || msg.includes("predators")) {
      return `🦁 **Predators You'll See:**

**Lions** – 250+ in Masai Mara, daily sightings
**Leopards** – Elusive, night hunters, ~40% sighting rate
**Cheetahs** – Daytime hunters, 60-70% sighting rate
**African Wild Dogs** – Rare, endangered, if lucky!
**Hyenas** – Abundant, misunderstood

The "drama" of predator-prey interactions is what makes safaris magical. You might witness a hunt, a kill, or a daring escape. Nature is raw and beautiful!`;
    }
    // Fallback
    return `Which animal fascinates you most?\n\n🦁 Lions, leopards, cheetahs (predators)\n🐘 Elephants, giraffes, zebras (herbivores)\n🦓 Migration (2+ million wildebeest)\n🐦 Birds (400+ species)\n\nTell me your interest, and I'll share insights!`;
  }

  // ─────────────────────────────────────────────────────────
  // INTENT: Package recommendations
  // ─────────────────────────────────────────────────────────
  if (
    msg.includes("recommend") ||
    msg.includes("which package") ||
    msg.includes("help me choose") ||
    msg.includes("suggest")
  ) {
    return `To give you the perfect recommendation, I need to know:

💰 **Budget per person?** (e.g., $2K, $5K, $10K)
📅 **How many days?** (3, 5, 6, 7, 8+ days)
🦁 **What interests you most?**
   • Safari & Big Five
   • Beach & relaxation
   • Photography
   • Budget travel
   • Luxury experience
📌 **When are you planning to travel?**
👥 **Group size?** (couple, family, friends)

Once you share these details, I'll match you with the perfect package and price range!`;
  }

  // ─────────────────────────────────────────────────────────
  // INTENT: Booking & next steps
  // ─────────────────────────────────────────────────────────
  if (
    msg.includes("book") ||
    msg.includes("reserve") ||
    msg.includes("inquire") ||
    msg.includes("quote") ||
    msg.includes("how to book")
  ) {
    return `🎯 **Ready to Book Your Safari?**

**Option 1: Chat with Steve directly** 💬
WhatsApp: wa.me/254724660170
(Fastest response, personal touch)

**Option 2: Enquire Now** 📋
Fill out the form with:
✓ Your name & email
✓ Travel dates
✓ Group size
✓ Budget range
✓ Special requests

Steve will respond within 24 hours with a personalized quote!

**Option 3: Keep chatting with me** 💭
Tell me your details (dates, budget, interests) and I'll provide initial guidance. Then Enquire Now for a formal quote.

Which works best for you?`;
  }

  // ─────────────────────────────────────────────────────────
  // INTENT: Migration/Wildebeest
  // ─────────────────────────────────────────────────────────
  if (msg.includes("migration") || msg.includes("wildebeest") || msg.includes("zebra")) {
    return `🦓 **The Great Migration – Earth's Most Epic Wildlife Event**

**By the numbers:**
• 2-3 million wildebeest
• 1 million zebras
• 500,000 gazelles
• 10,000 crocodiles waiting at river crossings

**Timeline:**
📅 **Dec-Feb:** Southern Serengeti (calving season, baby animals!)
📅 **Mar-May:** Central Serengeti (rainy season)
📅 **Jun-Oct:** Masai Mara, Kenya (dry season, Mara River crossings!)

**Most dramatic:** July-August Mara River crossing
Wildebeest jump 3-meter drops into crocodile-infested waters. Predator interactions are INTENSE. It's nature at its rawest.

This is the #1 reason to safari in June-August. We have the best camps positioned for Mara River viewpoints!`;
  }

  // ─────────────────────────────────────────────────────────
  // FALLBACK: Generic helpful response
  // ─────────────────────────────────────────────────────────
  return `Great question! I'm here to help with:

✓ Package recommendations (based on budget & interests)
✓ Best times to visit each destination
✓ Visa & travel requirements (by country)
✓ Packing tips
✓ Wildlife facts
✓ Photography advice
✓ Itinerary suggestions

**What would you like to know?**

Some popular questions:
• "Best time for Masai Mara?"
• "I'm from the USA, do I need a visa?"
• "What should I pack?"
• "Can I see the Big Five?"
• "Recommend a package for a couple"`;
}

export function Ayla() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "ayla", text: GREETING }]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: 9e9, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    // Generate intelligent response with slight delay for UX
    setTimeout(
      () => {
        const response = generateAylaResponse(text);
        setMessages((m) => [...m, { role: "ayla", text: response }]);
      },
      Math.random() * 300 + 200,
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!open && showHint && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-[72px] right-0 bg-cream text-espresso font-serif-display italic text-[14px] px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap"
          >
            Ask Ayla ✦
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            style={{ transformOrigin: "bottom right" }}
            className="absolute bottom-0 right-0 w-[92vw] max-w-[380px] h-[520px] bg-charcoal rounded-3xl shadow-2xl border border-gold/30 flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-cream/10 flex items-start justify-between">
              <div>
                <div className="font-serif-display italic text-gold text-[20px]">Ayla ✦</div>
                <div className="text-cream/60 text-[12px]">Your personal safari guide</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gold text-2xl leading-none hover:opacity-80"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                    m.role === "ayla" ? "bg-cream/10 text-cream" : "bg-gold/20 text-cream ml-auto"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-cream/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about a destination..."
                className="flex-1 bg-cream/5 border border-cream/10 rounded-full px-4 py-2 text-[14px] text-cream placeholder:text-cream/40 outline-none focus:border-gold/60"
              />
              <button
                onClick={send}
                className="font-sans-ui text-[12px] font-bold uppercase tracking-[0.12em] text-gold px-3 hover:opacity-80"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="relative w-14 h-14 rounded-full bg-charcoal border-[1.5px] border-gold flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Open chat"
        >
          <span className="font-serif-display italic text-gold text-[16px]">Ayla</span>
          <motion.span
            className="absolute inset-0 rounded-full border border-gold/60"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          />
        </button>
      )}
    </div>
  );
}
