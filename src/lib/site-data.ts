export const WHATSAPP_NUMBER = "254724660170";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Hello%20Nature%20Lovers%20Adventure!%20I%27m%20interested%20in%20planning%20a%20safari.%20Could%20you%20help%20me%20with%20more%20information%3F`;
export const WHATSAPP_SHORT = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "info@natureloversadventure.co.ke";
export const PHONE_PRIMARY = "+254 724 660170";
export const PHONE_SECONDARY = "+254 722 888681";

const CLD = "https://res.cloudinary.com/do5nefu0c/video/upload";
const v = (path: string) => `${CLD}/q_auto,f_auto,vc_auto,so_0/${path}`;
const poster = (path: string) =>
  `${CLD}/q_auto,f_jpg,so_0/${path.replace(/\.mp4$/, ".jpg")}`;

export type HeroVideo = {
  src: string;
  poster: string;
  line1: string;
  line2: string;
  label: string;
};

export const HERO_VIDEOS: HeroVideo[] = [
  { src: v("v1779666397/beach_aerial_huaqnh.mp4"), poster: poster("v1779666397/beach_aerial_huaqnh.mp4"), line1: "Escape To Paradise", line2: "Where Ocean Meets Luxury", label: "Diani Beach" },
  { src: v("v1779666384/Maasai_Mara_jeep_akmmrs.mp4"), poster: poster("v1779666384/Maasai_Mara_jeep_akmmrs.mp4"), line1: "Experience The Wild", line2: "Adventure Across The Mara", label: "Maasai Mara" },
  { src: v("v1779666343/elephants_tpculs.mp4"), poster: poster("v1779666343/elephants_tpculs.mp4"), line1: "Witness Nature's Giants", line2: "Moments You Never Forget", label: "Amboseli" },
  { src: v("v1779666325/flight_ghtgcw.mp4"), poster: poster("v1779666325/flight_ghtgcw.mp4"), line1: "Your Journey Begins Here", line2: "Fly Beyond The Ordinary", label: "Sky Connections" },
  { src: v("v1779661749/zebras_jwturq.mp4"), poster: poster("v1779661749/zebras_jwturq.mp4"), line1: "Discover Untamed Beauty", line2: "The Spirit Of Africa", label: "Serengeti" },
  { src: v("v1779661624/lions_bteikn.mp4"), poster: poster("v1779661624/lions_bteikn.mp4"), line1: "Into The Heart Of The Wild", line2: "Luxury Meets Adventure", label: "Big Five" },
  { src: v("v1779661605/travel_cinematic_bs3mto.mp4"), poster: poster("v1779661605/travel_cinematic_bs3mto.mp4"), line1: "Travel Beyond Expectations", line2: "Curated African Experiences", label: "Curated Journeys" },
  { src: v("v1779661444/227950_medium_cumuvl.mp4"), poster: poster("v1779661444/227950_medium_cumuvl.mp4"), line1: "See Africa Differently", line2: "Elegant Journeys Through Nature", label: "Giraffes" },
];

// Cinematic Unsplash imagery of real East African locations (1600w, art-direction friendly).
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Package = {
  id: string;
  title: string;
  duration: string;
  destinations: string[];
  image: string;
  themes: string[];
  activity: string;
  country: "Kenya" | "Tanzania" | "Kenya & Tanzania";
};

export const PACKAGES: Package[] = [
  {
    id: "package-1",
    title: "6 Days Kenya Safari",
    duration: "5N · 6D",
    destinations: ["Nairobi", "Nakuru", "Masai Mara", "Aberdare NP", "Lake Nakuru NP"],
    image: u("photo-1547471080-7cc2caa01a7e"),
    themes: ["Wildlife", "Safari"],
    activity: "Game Drives",
    country: "Kenya",
  },
  {
    id: "package-2",
    title: "8 Days Mobile Camping Safari",
    duration: "7N · 8D",
    destinations: ["Nairobi", "Masai Mara", "Samburu", "Lake Naivasha"],
    image: u("photo-1504280390367-361c6d9f38f4"),
    themes: ["Safari", "Wildlife"],
    activity: "Game Drives",
    country: "Kenya",
  },
  {
    id: "package-3",
    title: "Bush & Beach 9 Days Safari",
    duration: "8N · 9D",
    destinations: ["Mombasa", "Nairobi", "Masai Mara", "Amboseli NP", "Lake Naivasha"],
    image: u("photo-1516026672322-bc52d61a55d5"),
    themes: ["Beach & Islands", "Wildlife"],
    activity: "Beach Sightseeing",
    country: "Kenya",
  },
  {
    id: "package-4",
    title: "Maasai Mara 3 Days Safari",
    duration: "2N · 3D",
    destinations: ["Masai Mara"],
    image: u("photo-1534177616072-ef7dc120449d"),
    themes: ["Wildlife", "Safari"],
    activity: "Game Drives",
    country: "Kenya",
  },
  {
    id: "package-5",
    title: "Magical Kenya 6 Days",
    duration: "5N · 6D",
    destinations: ["Nairobi", "Masai Mara", "Amboseli", "Naivasha"],
    image: u("photo-1547970810-dc1eac37d174"),
    themes: ["Wildlife", "Safari"],
    activity: "Game Drives",
    country: "Kenya",
  },
  {
    id: "package-6",
    title: "Amazing Kenya 7 Days",
    duration: "6N · 7D",
    destinations: ["Nairobi", "Nakuru", "Masai Mara", "Naivasha", "Nakuru NP"],
    image: u("photo-1535941339077-2dd1c7963098"),
    themes: ["Wildlife"],
    activity: "Game Drives",
    country: "Kenya",
  },
  {
    id: "package-7",
    title: "Mind Range 11 Days Kenya–Tanzania",
    duration: "10N · 11D",
    destinations: ["Nairobi", "Nakuru", "Masai Mara", "Ngorongoro", "Amboseli"],
    image: u("photo-1523805009345-7448845a9e53"),
    themes: ["Wildlife", "Safari"],
    activity: "Jeep Safari",
    country: "Kenya & Tanzania",
  },
];

export type Service = {
  id: string;
  name: string;
  elegant: string;
  label: string;
  excerpt: string;
  body: string;
  highlights: string[];
  cta: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "tour-operations",
    name: "Tour Operations",
    elegant: "Safari Orchestration",
    label: "TOUR OPERATIONS",
    excerpt:
      "Holding the hand of professionals like Nature Lovers to design a wonderful trip is a smart decision. We customise every package with premium deals for all age groups.",
    body:
      "There is an art to designing the perfect African safari — and we have spent years perfecting it. We do not offer off-the-shelf packages; every itinerary begins with a conversation about you. Whether you seek the Big Five, the Great Migration, or a cultural immersion, our specialists build the experience around your exact vision. From Nairobi to Ngorongoro, from Samburu to Zanzibar, we cater to families, couples, solo adventurers, and corporate groups.",
    highlights: ["Fully Customised Itineraries", "All Age Groups", "Local & International Packages"],
    cta: "Plan Your Safari",
    image: u("photo-1516026672322-bc52d61a55d5"),
  },
  {
    id: "car-rental",
    name: "Car & Coach Rental",
    elegant: "Terrain Mobility",
    label: "CAR & COACH RENTAL",
    excerpt:
      "Every traveller visiting Kenya chooses our exquisitely maintained car and coach rental service. We tailor every journey to fit your travel preferences.",
    body:
      "Every great East African adventure begins with reliable transportation. Our fleet of 4x4 safari cruisers and spacious coaches is maintained to the highest standards, equipped for every terrain from Samburu's dust roads to the open Mara plains. Our professional drivers know the roads and the parks intimately — whether you need a JKIA transfer, a full-circuit safari vehicle, or a corporate group coach.",
    highlights: ["Professional Drivers", "4x4 Safari Fleet", "Group Coaches Available"],
    cta: "Book Transport",
    image: u("photo-1500530855697-b586d89ba3ee"),
  },
  {
    id: "flight-booking",
    name: "Flight Booking",
    elegant: "Sky Connections",
    label: "FLIGHT BOOKING",
    excerpt:
      "Planning a vacation brings a whole new level of excitement — and we take the complexity out of every reservation. International arrivals and domestic bush flights, handled.",
    body:
      "Your East African adventure begins the moment you decide to go. We take the complexity out of flight reservations — finding the best rates and routes that align with your safari itinerary. From international arrivals at JKIA to domestic bush flights on Safarilink or AirKenya, every booking is made with the full itinerary in mind.",
    highlights: ["International & Domestic Flights", "No Hidden Charges", "Integrated Itinerary Planning"],
    cta: "Book Flights",
    image: u("photo-1569629743817-70d8db6c323b"),
  },
  {
    id: "visa",
    name: "Passport & Visa Services",
    elegant: "Document Expediting",
    label: "PASSPORT & VISA SERVICES",
    excerpt:
      "Nature Lovers Adventure offers professional passport and visa assistance for every kind of traveller. Our qualified advisors guide you through every requirement.",
    body:
      "The paperwork between you and Africa should never be a barrier. We guide you through every form, requirement, and deadline with precision — from tourist visas for Kenya and Tanzania to work permits and student documentation. Our advisors prepare, guide, and follow up on your behalf.",
    highlights: ["Tourist & Business Visas", "Passport Applications", "Work & Student Permits"],
    cta: "Get Assistance",
    image: u("photo-1554224155-6726b3ff858f"),
  },
  {
    id: "events",
    name: "Event Management",
    elegant: "Occasion Curation",
    label: "EVENT MANAGEMENT",
    excerpt:
      "Africa is the most extraordinary backdrop for any occasion. From intimate bush weddings to corporate retreats, we plan events unlike anything your guests have ever experienced.",
    body:
      "Whether you are planning an intimate bush wedding, a corporate retreat, a product launch in the wilderness, or a private celebration — we bring precision, creativity, and passion. We handle venue selection, guest logistics, catering, decor, entertainment, and on-the-day management.",
    highlights: ["Corporate Events", "Private Celebrations", "Bush Weddings", "Product Launches"],
    cta: "Plan Your Event",
    image: u("photo-1519741497674-611481863552"),
  },
  {
    id: "hotels",
    name: "Hotel & Lodge Booking",
    elegant: "Sanctuary Selection",
    label: "HOTEL & LODGE BOOKING",
    excerpt:
      "From five-star luxury lodges above the Mara to intimate tented camps deep in the wilderness, we hand-select every property based on quality, character, and value.",
    body:
      "Every property we recommend has been personally vetted — we do not place clients somewhere we would not stay ourselves. We work across the full spectrum: economy guesthouses, standard hotels, luxury tented camps, private lodges, and beach resorts.",
    highlights: ["Economy & Standard Stays", "Luxury Lodges", "Tented Camps & Beach Resorts"],
    cta: "Find Accommodation",
    image: u("photo-1566073771259-6a8506099945"),
  },
];

export const DESTINATIONS = [
  { name: "Masai Mara", country: "Kenya", tagline: "Where the wild still rules.", image: u("photo-1547471080-7cc2caa01a7e") },
  { name: "Nairobi", country: "Kenya", tagline: "The city that meets the wild.", image: u("photo-1611348586804-61bf6c080437") },
  { name: "Nakuru", country: "Kenya", tagline: "A million wings at dawn.", image: u("photo-1535941339077-2dd1c7963098") },
  { name: "Ngorongoro", country: "Tanzania", tagline: "A crater of impossible green.", image: u("photo-1523805009345-7448845a9e53") },
  { name: "Mombasa", country: "Kenya", tagline: "Where the Indian Ocean sings.", image: u("photo-1516026672322-bc52d61a55d5") },
  { name: "Samburu", country: "Kenya", tagline: "Northern frontier, ancient land.", image: u("photo-1504280390367-361c6d9f38f4") },
];

export const ACTIVITIES = [
  { id: "game-drives", name: "Game Drives", tagline: "Witness the Big Five in their natural kingdom", image: u("photo-1534177616072-ef7dc120449d") },
  { id: "jeep-safari", name: "Jeep Safari Tours", tagline: "Off-road adventure through untamed landscapes", image: u("photo-1547970810-dc1eac37d174") },
  { id: "beach", name: "Beach Sightseeing", tagline: "Where the Indian Ocean meets paradise", image: u("photo-1559825481-12a05cc00344") },
];

export const TEAM = [
  { initials: "SM", name: "Steve Mwangi", title: "Founder & Chief Executive Officer", message: "I grew up watching these landscapes. Every journey we design carries that love — that is the standard we hold ourselves to.", role: "The visionary behind every itinerary. Steve's encyclopedic knowledge of East Africa's wilderness turns destinations into deeply personal experiences." },
  { initials: "SM", name: "Sarah Mwangi", title: "Director of Client Experience", message: "From the moment you reach out, you should feel completely looked after. The effort happens behind the scenes — that is my job.", role: "The heart of every client relationship. Sarah ensures every traveller feels personally cared for from first enquiry to final farewell." },
  { initials: "IM", name: "Ian Mwangi", title: "Safari Operations Lead", message: "The right vehicle, the right permit, the right guide at the right time — invisible when they work. I make sure they always work.", role: "The logistics architect. Ian coordinates vehicles, park permits, guide briefings, and on-ground execution with precision." },
  { initials: "MM", name: "Mary Mwangi", title: "Brand & Partnerships Coordinator", message: "Africa has the most extraordinary story to tell. Every lodge, every partner, every image that represents us has to be worthy of the continent we love.", role: "The storyteller. Mary manages lodge relationships, partner networks, and the visual identity that makes Nature Lovers Adventure instantly recognisable." },
  { initials: "FRG", name: "Francis Rushion Gachuri Chegge", title: "Technology Director", message: "Every line of code on this site was written with one goal — to make you feel Africa before you book a flight.", role: "The digital architect behind every pixel of this website. Rushion built the booking systems, analytics infrastructure, and the AI tools that power the brand online.", link: "https://rushionsportfolio.vercel.app/" },
];

export const TESTIMONIALS = [
  { name: "Jennifer A.", country: "United Kingdom", text: "Nature Lovers Adventure turned our Kenya dream into the most extraordinary two weeks of our lives. Steve personally called the evening before departure to ensure everything was perfect. All Big Five on the first game drive." },
  { name: "Marcus & Priya W.", country: "Canada", text: "Our honeymoon was absolutely flawless. The private bush dinner, sunset game drive, and rose petals at every lodge showed a team that genuinely cared about our experience, not just our booking." },
  { name: "David O.", country: "Germany", text: "I have done safaris across four African countries. Nature Lovers Adventure operates in a category of its own. The guides' knowledge of the Maasai Mara ecosystem was extraordinary — I left having learned as much as I experienced." },
  { name: "The Osei Family", country: "United States", text: "Travelling with three children and two grandparents seemed impossible until Nature Lovers Adventure took over. They thought of everything — every moment was perfectly paced for our family." },
  { name: "Sophie L.", country: "France", text: "As a solo female traveller, trust and safety were my first priorities. From the moment I landed at JKIA to the moment I departed, I never had a single moment of uncertainty. That is extraordinary." },
  { name: "Robert & Claire M.", country: "Australia", text: "The mobile camping safari beneath African skies was the most profoundly beautiful experience of our thirty years of travel together. We have already begun planning our return." },
];

export const ACCREDITATIONS = [
  { org: "Kenya Tourism Board", credential: "Registered Tour Operator #KTB/2017/4829", desc: "Certified compliant tour operator, Kenya national tourism authority.", year: "Since 2017" },
  { org: "Tanzania Association of Tour Operators (TATO)", credential: "Active Member", desc: "Full membership in Tanzania's primary tour operator body.", year: "Since 2019" },
  { org: "Kenya Association of Tour Operators (KATO)", credential: "Certified Member", desc: "Active member of Kenya's leading tour and travel industry association.", year: "Since 2018" },
  { org: "Sustainable Travel International", credential: "Eco-Tourism Partner", desc: "Committed to responsible travel practices and conservation.", year: "Since 2020" },
];
