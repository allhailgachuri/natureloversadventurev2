# Nature Lovers Adventure — Premium East African Safari & Travel Platform

**A luxury safari and travel booking platform specializing in curated East African experiences, powered by AI-assisted customer guidance and cinematic storytelling.**

---

## 📋 Project Overview

**Nature Lovers Adventure** is a modern, high-performance web application designed to showcase premium safari packages, travel services, and unforgettable East African adventures. Built with cutting-edge web technologies, it combines luxury branding with intelligent customer engagement through Ayla—an AI safari guide—to deliver a best-in-class booking experience.

### What This Is

- **B2C Safari & Travel Booking Platform** serving international tourists, Kenyan residents, and corporate groups
- **Full-stack web application** with server-side rendering, real-time animations, and mobile-first design
- **Luxury brand experience** featuring cinematic video content, sophisticated typography, and premium UX patterns
- **AI-powered customer assistant** (Ayla) for instant travel advice and package recommendations
- **WhatsApp-integrated booking flow** for seamless inquiry and quote generation

### What This Does

1. **Showcase Premium Packages** — 6+ curated safari and travel packages across Kenya, Tanzania, and combined regions
2. **Enable Discovery** — Interactive filters (destination, duration, activity, theme) to help customers find their ideal journey
3. **Facilitate Bookings** — Direct WhatsApp integration for real-time inquiry submission and quote generation
4. **Provide Guidance** — Ayla AI chatbot answers questions about destinations, best travel times, visa info, packing tips, and more
5. **Build Brand Trust** — Testimonials, team bios, itinerary transparency, and rich storytelling

---

## 🏗️ Architecture & Tech Stack

### Frontend Framework

- **React 19** — Modern UI with concurrent rendering
- **TanStack Start 1.167** — Full-stack React framework with built-in SSR (Fully independent standard configuration, decoupled from Lovable)
- **Vite 7.3.1** — Lightning-fast build and dev server
- **Tailwind CSS 4.2** — Utility-first styling with custom design tokens
- **Framer Motion 12.40** — Smooth animations and micro-interactions

### UI & Component System

- **Shadcn/ui** — 40+ pre-built, unstyled, accessible components
- **Radix UI** — Headless component primitives (Accordion, Dialog, Tabs, etc.)
- **Lucide React** — 575+ consistent SVG icons
- **Embla Carousel 8.6** — Lightweight carousel library for image galleries

### Backend & Data

- **Cloudflare Workers** — Serverless runtime for SSR and API routes
- **TanStack React Query 5.83** — Server state management and data fetching
- **Zod 3.24** — TypeScript-first schema validation
- **React Hook Form 7.71** — Performant form handling with minimal re-renders

### Integrations & Services

- **Cloudinary** — Video hosting, image optimization, CDN delivery
- **WhatsApp Business API** — Direct booking inquiries (254-724-660170)
- **Third-party (Future)** — Supabase (Auth), PostHog (Analytics)

### Design System

- **Font Stack**:
  - Serif Display: Playfair Display & Cormorant Garamond (hero, headings)
  - Serif Body: Georgia (body text, descriptions)
  - Sans UI: Inter (UI elements, buttons, small text)
- **Color Palette**:
  - Gold (#C8922A) — Primary accent, CTAs, luxury highlight
  - Charcoal (#1a1a1a) — Primary dark, card backgrounds
  - Cream (#f5f1e8) — Primary light, body background
  - Espresso (#3d3d3d) — Secondary dark, text
- **Spacing**: 8px base unit (4, 6, 8, 12, 16, 20, 24, 32, 40, 48px)
- **Border Radius**: 12px, 20px, 24px, 32px (luxury, modern feel)

---

## 📁 Project Structure

```
natureloversadventurev2/
├── src/
│   ├── routes/                    # TanStack Router pages
│   │   ├── __root.tsx            # Root layout, error/404 handling
│   │   ├── index.tsx             # Homepage (hero videos, packages preview)
│   │   ├── safari-packages.tsx   # Package showcase with filters
│   │   ├── contact.tsx           # Inquiry form
│   │   ├── our-story.tsx         # Brand story, team bios
│   │   └── services.tsx          # Services: car hire, visas, etc.
│   │
│   ├── components/
│   │   ├── site/                 # Site-specific components
│   │   │   ├── Ayla.tsx          # AI chatbot widget
│   │   │   ├── Navbar.tsx        # Navigation + hero gallery overlay
│   │   │   ├── Footer.tsx        # Global footer
│   │   │   ├── SiteShell.tsx     # Root layout wrapper
│   │   │   ├── HeroGallery.tsx   # 8-video cinematic hero carousel
│   │   │   ├── CTABlock.tsx      # Call-to-action sections
│   │   │   ├── Wordmark.tsx      # Logo
│   │   │   └── Loader.tsx        # Loading indicator
│   │   │
│   │   └── ui/                   # Shadcn/Radix components (40+)
│   │       ├── button.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── tabs.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   │
│   ├── lib/
│   │   ├── site-data.ts          # Content (packages, videos, contact info)
│   │   ├── utils.ts              # Utility functions
│   │   ├── error-page.ts         # Error page generator
│   │   └── error-capture.ts      # Error logging
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx        # Mobile viewport detection
│   │
│   ├── router.tsx                # TanStack Router config
│   ├── routeTree.gen.ts          # Auto-generated route tree
│   ├── server.ts                 # SSR entry point, error wrapper
│   ├── start.ts                  # Client entry point
│   └── styles.css                # Global styles, Tailwind directives
│
├── public/                        # Static assets
├── vite.config.ts                # Vite config with TanStack plugin
├── wrangler.jsonc                # Cloudflare Worker config
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind theming
├── eslint.config.js              # Linting rules
├── components.json               # Shadcn CLI config
├── bunfig.toml                   # Bun package manager config
└── package.json                  # Dependencies, scripts
```

---

## 🎨 Key Features

### 1. **Cinematic Hero Experience**

- 8 full-screen video backgrounds (Diani Beach, Masai Mara, Amboseli, Sky, Serengeti, Big Five, Journeys, Giraffes)
- Auto-looping carousel with manual controls
- Overlaid text animations (fade-in, character reveal)
- Fallback poster images for slow connections
- All videos optimized via Cloudinary (1080p, WebM/MP4)

### 2. **AI-Powered Customer Guide (Ayla ✦)**

- **Fixed widget** (bottom-right corner, z-50)
- **Context-aware responses** based on destination, travel dates, budget, group size
- **Knowledge base** includes:
  - Package details and pricing (KES/USD)
  - Best travel times by season (peak, shoulder, off-peak)
  - Visa requirements (US, EU, AU, etc.)
  - Packing recommendations by destination
  - Itinerary customization suggestions
- **Fallback to human**: "For tailored response, tap Enquire Now"
- **Future**: Integration with LLM API (Claude, GPT-4, Gemini)

### 3. **Smart Package Filtering**

- **4 Filter Dimensions**:
  - Destination: All, Kenya, Tanzania
  - Duration: Any, Under 1 Week, 1 Week, 10 Days, 2 Weeks, 2+ Weeks
  - Activity: All, Game Drives, Jeep Safari, Beach Sightseeing
  - Theme: All, Wildlife, Safari, Beach & Islands
- **Real-time filtering** with useMemo optimization
- **Sticky filter bar** (top-fixed)
- **Mobile responsive** (horizontal scroll on small screens)

### 4. **WhatsApp Integration**

- **Direct booking link** embedded on every package
- **Pre-filled message template**: "I'm interested in [Package]. Could you provide a quote?"
- **Business number**: +254-724-660170 (Steve's WhatsApp)
- **Instant response**: Messages land in WhatsApp Business account
- **No bot delay**: Direct human connection

### 5. **Responsive Mobile Experience**

- **Mobile-first design** (375px minimum)
- **Tablet optimization** (768px breakpoint)
- **Desktop experience** (1024px+)
- **Safe area handling** (iPhone notch, Android gesture bar)
- **Touch-optimized CTAs** (larger hit targets, haptic feedback ready)

### 6. **Accessibility & Performance**

- **WCAG 2.1 AA compliance** (keyboard navigation, screen reader support)
- **Semantic HTML** (proper heading hierarchy, alt text, ARIA labels)
- **Performance targets**:
  - Lighthouse: 90+ (Desktop), 85+ (Mobile)
  - LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Vite build time: < 5s
- **SEO foundations** (ready for improvements)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- Bun or npm (Bun is faster)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd natureloversadventurev2

# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
bun run build
# or
npm run build

# Output: dist/ (optimized JS, CSS, assets)
```

### Deploy to Cloudflare

```bash
# Authenticate with Wrangler
wrangler login

# Deploy
bun run build && wrangler deploy
```

---

## 📊 Content & Data Structure

### Packages (site-data.ts)

```typescript
type Package = {
  id: string;
  title: string;
  duration: string; // "5N · 6D"
  destinations: string[];
  image: string; // Unsplash URL
  themes: string[]; // ["Wildlife", "Safari"]
  activity: string; // "Game Drives"
  country: "Kenya" | "Tanzania" | "Kenya & Tanzania";
};
```

**Current Packages** (6 featured):

1. 6 Days Kenya Safari
2. 8 Days Mobile Camping Safari
3. Bush & Beach 9 Days Safari
4. Maasai Mara 3 Days Safari
5. Magical Kenya 6 Days
6. Amazing Kenya 7 Days

### Hero Videos (site-data.ts)

All hosted on Cloudinary with automatic quality optimization (WebM for Chrome, MP4 fallback):

| Label            | Destination | Video                         |
| ---------------- | ----------- | ----------------------------- |
| Diani Beach      | Beach       | Beach aerial, turquoise water |
| Maasai Mara      | Safari      | Jeep adventure, wildlife      |
| Amboseli         | Safari      | Elephants, panorama           |
| Sky Connections  | Flight      | Aircraft interior             |
| Serengeti        | Safari      | Zebra herds, migration        |
| Big Five         | Safari      | Lions, predators              |
| Curated Journeys | General     | Travel montage                |
| Giraffes         | Safari      | Giraffe herd, acacia          |

### Contact Information

- **Primary WhatsApp**: +254-724-660170 (Steve)
- **Secondary Phone**: +254-722-888681
- **Email**: info@natureloversadventure.co.ke
- **Location**: Nairobi, Kenya

---

## 🔧 Development Workflow

### Available Scripts

```bash
npm run dev          # Start dev server (Vite + Cloudflare local)
npm run build        # Production build
npm run build:dev    # Development build (no optimization)
npm run preview      # Preview production build locally
npm run lint         # ESLint check
npm run format       # Prettier format
```

### Adding New Pages

```typescript
// 1. Create src/routes/new-page.tsx
export const Route = createFileRoute('/new-page')({
  component: NewPageComponent,
  head: () => ({ meta: [{ title: 'New Page — Nature Lovers Adventure' }] }),
});

function NewPageComponent() {
  return <SiteShell>...</SiteShell>;
}

// 2. Router auto-generates src/routeTree.gen.ts
// 3. Navigation is now available
```

### Adding New UI Components

```bash
# Use shadcn-ui CLI
npx shadcn-ui@latest add dialog

# Customize in src/components/ui/dialog.tsx
# Import and use in your pages/components
```

---

## 🌐 Deployment

### Cloudflare Workers (Current)

- **Runtime**: Node.js compatible
- **Region**: Global CDN
- **Env vars**: Set in `wrangler.jsonc` or Cloudflare dashboard
- **Cold starts**: Minimal (< 200ms with warmth)

### Environment Variables

```env
VITE_CLOUDINARY_URL=https://res.cloudinary.com/do5nefu0c
VITE_WHATSAPP_NUMBER=254724660170
VITE_EMAIL=info@natureloversadventure.co.ke
```

---

## 📈 Analytics & Future Integrations

### Planned Integrations

1. **Supabase Auth** — Secure admin dashboard with email + password authentication
2. **Supabase PostgreSQL** — Persistent storage for:
   - Inquiry forms
   - Package catalog (CMS)
   - Team profiles
   - Testimonials & reviews
   - Analytics events
3. **PostHog Analytics** — Track user behavior (page views, package clicks, WhatsApp CTAs)
4. **Stripe/M-Pesa** — Payment processing (future: direct bookings)
5. **SendGrid/Mailgun** — Transactional emails (inquiry confirmations)

---

## 🛠️ Customization

### Update Brand Colors

Edit `tailwind.config.ts`:

```typescript
export default {
  theme: {
    colors: {
      gold: "#C8922A",
      charcoal: "#1a1a1a",
      cream: "#f5f1e8",
      espresso: "#3d3d3d",
    },
  },
};
```

### Update WhatsApp Number

Edit `src/lib/site-data.ts`:

```typescript
export const WHATSAPP_NUMBER = "254XXXXXXXXX";
```

### Add New Packages

Edit `src/lib/site-data.ts`:

```typescript
export const PACKAGES: Package[] = [
  // Add your new package object here
];
```

### Update Hero Videos

Replace URLs in `src/lib/site-data.ts`:

```typescript
export const HERO_VIDEOS: HeroVideo[] = [
  { src: v("your-cloudinary-id.mp4"), poster: poster(...), ... },
];
```

---

## 🐛 Troubleshooting

### Videos not playing?

- Check Cloudinary URL is accessible
- Ensure poster images load as fallback
- Verify browser supports WebM (Chrome) or MP4 (Safari/Firefox)

### Form submissions not working?

- Check WhatsApp number format (include country code, no +)
- Verify JavaScript is enabled
- Test on mobile (WhatsApp link behaves differently on desktop)

### Styling issues?

- Clear Tailwind cache: `rm -rf .next node_modules/.cache`
- Restart dev server
- Check if class name is in `tailwind.config.ts` safelist

---

## 📝 Future Roadmap

### Phase 1 (Q2 2026)

- ✅ Hero video carousel
- ✅ Package filtering system
- ✅ Ayla AI chatbot
- ✅ WhatsApp integration
- 🔄 **SEO infrastructure** (sitemap, robots.txt, JSON-LD, blog)

### Phase 2 (Q3 2026)

- 🔄 **Admin dashboard** (Supabase Auth, package/inquiry/review management)
- 🔄 **Mobile optimizations** (PWA, iOS home screen, Android ripple, haptic feedback)
- Blog section with 10+ articles
- Testimonials gallery with rich filtering

### Phase 3 (Q4 2026)

- Payment processing (Stripe/M-Pesa)
- Advanced analytics (PostHog)
- Email confirmation workflows
- Multi-language support (Swahili, Español, Français)

---

## 🤝 Contributing

### Code Style

- **ESLint** enforces consistent formatting
- **Prettier** auto-formats on save
- **TypeScript strict mode** for type safety

### Branch Naming

```
feature/ayla-knowledge-base
fix/hero-video-autoplay
docs/seo-improvements
```

### Commit Message Format

```
feat: add Ayla knowledge base for visa requirements
fix: correct hero video autoplay on iOS Safari
docs: update README with deployment steps
```

---

## 📄 License

This project is proprietary to Nature Lovers Adventure. All rights reserved.

---

## 📞 Support & Inquiries

- **Website**: natureloversadventure.co.ke
- **Email**: info@natureloversadventure.co.ke
- **WhatsApp**: +254-724-660170 (Steve)
- **Location**: Nairobi, Kenya

---

## 🎯 GitHub Description (1-2 sentences)

**Nature Lovers Adventure** is a luxury East African safari and travel booking platform built with React, TanStack Start, and Cloudflare Workers. It features cinematic video experiences, AI-powered customer guidance (Ayla), real-time package filtering, and seamless WhatsApp booking integration—designed for premium brand storytelling and high-conversion customer engagement.

---

## 🏷️ GitHub Topics

```
safari
travel-booking
kenya-tourism
react
tanstack-start
cloudflare-workers
tailwind-css
luxury-brand
ai-chatbot
east-africa
tourism-platform
vite
tanstack-router
framer-motion
shadcn-ui
```

---

**Last Updated**: May 27, 2026  
**Version**: 2.0 (Cinematic V2)  
**Status**: Production Ready
