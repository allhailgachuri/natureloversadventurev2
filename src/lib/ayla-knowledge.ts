/**
 * AYLA KNOWLEDGE BASE
 * Comprehensive safari, travel, and company information
 * Used to provide intelligent, context-aware responses via the Ayla chatbot
 */

export const AYLA_KNOWLEDGE = {
  // ─────────────────────────────────────────────────────────
  // PACKAGES
  // ─────────────────────────────────────────────────────────
  packages: {
    "package-1": {
      name: "6 Days Kenya Safari",
      destinations: ["Nairobi", "Aberdare National Park", "Lake Nakuru", "Masai Mara"],
      duration: "5 nights, 6 days",
      priceUSD: "Price on Request",
      priceKES: "Price on Request",
      bestFor: "First-time safari visitors, wildlife enthusiasts, photographers",
      highlights: [
        "Nairobi: Welcome & Giraffe Centre cultural tour",
        "Aberdare National Park: Treetop hotel night experience, leopard & buffalo sightings",
        "Lake Nakuru: Flamingo lakes, rhino conservation area",
        "Masai Mara: 3 days intensive game drives, Big Five guaranteed",
      ],
      itinerary: [
        { day: 1, activity: "Arrival in Nairobi, orientation & giraffe centre", meal: "B,D" },
        {
          day: 2,
          activity: "Aberdare NP (tree hotel night), early morning game drive",
          meal: "B,L,D",
        },
        { day: 3, activity: "Lake Nakuru game drive, return to Nairobi", meal: "B,L,D" },
        { day: 4, activity: "Transfer to Masai Mara, afternoon game drive", meal: "B,L,D" },
        { day: 5, activity: "Full day Masai Mara game drive (early & late)", meal: "B,L,D" },
        { day: 6, activity: "Final morning game drive, return to Nairobi", meal: "B" },
      ],
      included: [
        "Airport transfers (Nairobi)",
        "All game drives in 4x4 safari vehicle",
        "Professional driver/guide with 10+ years experience",
        "All accommodations (lodge/camp standard)",
        "Meals as indicated (B=breakfast, L=lunch, D=dinner)",
        "Park entrance fees",
        "Bottled water during drives",
      ],
      excluded: [
        "International flights",
        "Visa fees & travel insurance",
        "Personal expenses (drinks, activities, souvenirs)",
        "Tips (recommended 10-15%)",
      ],
      seasonalConsiderations: {
        peak: "June-October: Dry season, best wildlife viewing, Big Five sightings 70-90%, higher prices",
        shoulder:
          "March-May, November: Fewer tourists, lush landscape, excellent game viewing, 30-40% cheaper",
        offPeak:
          "January-February, December: Budget season, occasional rain, fewer animals visible, 50% cheaper",
      },
    },
    "package-2": {
      name: "8 Days Mobile Camping Safari",
      destinations: ["Nairobi", "Masai Mara", "Samburu", "Lake Naivasha"],
      duration: "7 nights, 8 days",
      priceUSD: "Price on Request",
      priceKES: "Price on Request",
      bestFor: "Adventure seekers, photographers, budget travelers, active travelers",
      highlights: [
        "Masai Mara: 3 days game drives with 2.5 million wildebeest",
        "Samburu National Reserve: Camel & elephant encounters, remote experience",
        "Lake Naivasha: Flamingos, hippos, bird watching",
        "Mobile camps: Tented accommodations, intimate nature experience",
      ],
    },
    "package-3": {
      name: "Bush & Beach 9 Days Safari",
      destinations: ["Mombasa", "Nairobi", "Masai Mara", "Amboseli", "Diani Beach"],
      duration: "8 nights, 9 days",
      priceUSD: "Price on Request",
      priceKES: "Price on Request",
      bestFor: "Families, couples, those wanting both wildlife & beach, relaxation seekers",
      highlights: [
        "4 nights bush safari (Masai Mara & Amboseli)",
        "4 nights beach resort (Diani, turquoise water, white sand)",
        "All game drives included",
        "Beach activities: snorkeling, watersports",
      ],
    },
    "package-4": {
      name: "Maasai Mara 3 Days Safari",
      destinations: ["Masai Mara"],
      duration: "2 nights, 3 days",
      priceUSD: "Price on Request",
      priceKES: "Price on Request",
      bestFor: "Quick getaway, business travelers, budget conscious, short leave",
      highlights: [
        "Concentrated game drive experience",
        "Big Five sightings likely (70%+)",
        "Minimum time, maximum wildlife",
      ],
    },
    "package-5": {
      name: "Magical Kenya 6 Days",
      destinations: ["Nairobi", "Masai Mara", "Amboseli", "Lake Naivasha"],
      duration: "5 nights, 6 days",
      priceUSD: "Price on Request",
      priceKES: "Price on Request",
      bestFor: "Balanced experience, elephant lovers, photography, Mt. Kilimanjaro views",
      highlights: [
        "Amboseli: Massive elephant herds, Mt. Kilimanjaro backdrop",
        "Masai Mara: Big Five game drives",
        "Lake Naivasha: Flamingos, lake activities",
      ],
    },
    "package-6": {
      name: "Amazing Kenya 7 Days",
      destinations: ["Nairobi", "Masai Mara", "Lake Nakuru", "Aberdare", "Lake Naivasha"],
      duration: "6 nights, 7 days",
      priceUSD: "Price on Request",
      priceKES: "Price on Request",
      bestFor: "Complete Kenya experience, first-time visitors, diverse wildlife",
      highlights: [
        "Full Kenyan circuit (5 major destinations)",
        "All major wildlife types (safari, forest, lake)",
        "Perfect for extended trip",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────
  // DESTINATIONS
  // ─────────────────────────────────────────────────────────
  destinations: {
    "masai-mara": {
      name: "Masai Mara National Reserve",
      country: "Kenya",
      area: "1,510 km²",
      bestMonths: ["June", "July", "August", "September", "October"],
      wildlife: [
        "Lions (250+ individuals)",
        "Leopards (elusive, beautiful)",
        "Cheetahs (day hunters)",
        "African Wild Dogs (endangered, rare sightings)",
        "Hyenas (abundant)",
        "Zebras (millions during migration)",
        "Wildebeest (1.5-2.5 million, mostly June-August)",
        "Giraffes (common)",
        "Elephants (family groups)",
        "Buffalo (dangerous, unpredictable)",
        "Hippopotamuses (river & water)",
        "Rhinoceros (rare, in conservancies)",
      ],
      highlights:
        "Great Migration (June-September), dramatic escarpments, remote conservancies, premium camps",
      climateByMonth: {
        January: {
          temp: "18-28°C",
          rainfall: "Low",
          crowds: "Medium",
          wildlife: "Moderate",
          cost: "Budget",
        },
        February: {
          temp: "19-29°C",
          rainfall: "Low",
          crowds: "Medium",
          wildlife: "Moderate",
          cost: "Budget",
        },
        March: {
          temp: "19-27°C",
          rainfall: "Medium",
          crowds: "Low",
          wildlife: "Good",
          cost: "Budget-Mid",
        },
        April: {
          temp: "18-25°C",
          rainfall: "High",
          crowds: "Very Low",
          wildlife: "Good",
          cost: "Mid",
        },
        May: { temp: "17-26°C", rainfall: "High", crowds: "Low", wildlife: "Good", cost: "Mid" },
        June: {
          temp: "15-22°C",
          rainfall: "Low",
          crowds: "Very High",
          wildlife: "Excellent",
          cost: "High",
        },
        July: {
          temp: "14-20°C",
          rainfall: "Low",
          crowds: "Very High",
          wildlife: "Excellent",
          cost: "Very High",
        },
        August: {
          temp: "15-21°C",
          rainfall: "Low",
          crowds: "High",
          wildlife: "Excellent",
          cost: "High",
        },
        September: {
          temp: "16-23°C",
          rainfall: "Low",
          crowds: "Medium",
          wildlife: "Excellent",
          cost: "High",
        },
        October: {
          temp: "18-26°C",
          rainfall: "Low",
          crowds: "Medium",
          wildlife: "Very Good",
          cost: "Mid-High",
        },
        November: {
          temp: "20-28°C",
          rainfall: "Low",
          crowds: "Low",
          wildlife: "Good",
          cost: "Mid",
        },
        December: {
          temp: "21-29°C",
          rainfall: "Low",
          crowds: "Medium",
          wildlife: "Moderate",
          cost: "Mid-High",
        },
      },
      drivingTime: {
        "from-nairobi": "5 hours (most common)",
        "from-nairobi-by-plane": "1.5 hours (airstrip in reserve)",
      },
      accessibility: "5-hour drive or 1.5-hour flight from Nairobi",
      bestFor: [
        "First-time safari visitors",
        "Great Migration viewing (June-August)",
        "Photography (unlimited subjects)",
        "Budget safaris (mid-range camps available)",
        "Luxury experiences (world-class camps)",
      ],
      packingAdvice: [
        "Binoculars (10x42 recommended, essential)",
        "Camera with telephoto lens (200mm+ for wildlife)",
        "Neutral colors ONLY (khaki, brown, olive, gray)",
        "Avoid bright colors (scare animals)",
        "Sun protection (SPF 50+, hat, sunglasses)",
        "Layers (6am-8pm temperature swings 15°C)",
        "Sturdy hiking boots (broken-in before trip!)",
        "Mosquito repellent (DEET 50%)",
      ],
      visas: "US, EU, AU: 90 days visa-free. Others: E-visa ($50) via JIDA or on arrival",
      currency: "KES (Kenyan Shilling), USD widely accepted",
      language: "English, Swahili (your guides speak English)",
      highlights_detail:
        "The Masai Mara is the northern extension of Tanzania's Serengeti. During the dry season (June-October), 2-3 million wildebeest and zebras migrate northward seeking water, creating dramatic predator-prey interactions. This is the most famous wildlife event on Earth.",
    },
    amboseli: {
      name: "Amboseli National Park",
      country: "Kenya",
      area: "392 km²",
      bestMonths: ["January", "February", "August", "September", "October"],
      wildlife: [
        "Elephants (largest concentration in Africa, 1,000+ individuals)",
        "Buffalo (common, dangerous)",
        "Zebras (herds)",
        "Wildebeest (dry season concentration)",
        "Lions (frequent encounters)",
        "Cheetahs (day hunting)",
        "Giraffes (common, beautiful)",
      ],
      highlights:
        "Mt. Kilimanjaro backdrop, massive elephant herds, Amboseli swamps, 400+ bird species, less crowded than Mara",
      climateByMonth: {
        January: { temp: "17-28°C", rainfall: "Low", wildlife: "Excellent", cost: "Mid" },
        February: { temp: "18-29°C", rainfall: "Low", wildlife: "Excellent", cost: "Mid" },
        August: { temp: "15-23°C", rainfall: "Low", wildlife: "Excellent", cost: "High" },
        September: { temp: "16-25°C", rainfall: "Low", wildlife: "Very Good", cost: "Mid-High" },
        October: { temp: "17-27°C", rainfall: "Low", wildlife: "Very Good", cost: "Mid" },
      },
      drivingTime: {
        "from-nairobi": "4.5 hours",
      },
      bestFor: [
        "Elephant encounters (best in Africa)",
        "Mt. Kilimanjaro photography",
        "Birdwatching (400+ species recorded)",
        "Smaller group experience (less crowded than Mara)",
        "Slightly lower prices than Mara",
      ],
      packingAdvice: [
        "Telephoto lens (Kilimanjaro is 50km away, need 200mm+)",
        "Elephant-specific binoculars",
        "Extra water (dusty park, dry climate)",
        "Sun protection (intense sun, little shade)",
      ],
    },
    serengeti: {
      name: "Serengeti National Park",
      country: "Tanzania",
      area: "14,750 km² (largest ecosystem)",
      bestMonths: ["December", "January", "February", "June", "July", "August"],
      wildlife: [
        "Wildebeest (1.5-2.5 million)",
        "Zebras (millions)",
        "Lions (1,000+ individuals)",
        "Leopards (elusive)",
        "Cheetahs (common day hunters)",
        "Elephants (smaller numbers than Amboseli)",
        "Buffalo (thousands)",
      ],
      highlights:
        "Largest migration on Earth, vast plains, dramatic wildlife encounters, best for photography",
      climate:
        "Two migration seasons: Dec-Feb (southern plains, calving season), June-Oct (central/northern areas)",
      bestFor: [
        "Migration viewing (wildebeest, zebra, predator interactions)",
        "Photography (unlimited subjects, vast landscapes)",
        "Large group safaris",
        "Serious wildlife enthusiasts",
      ],
    },
    nakuru: {
      name: "Lake Nakuru National Park",
      country: "Kenya",
      area: "188 km²",
      wildlife: [
        "Flamingos (millions, pink water)",
        "White Rhinoceros (conservation success)",
        "Buffalo (herds)",
        "Zebras",
        "Giraffes (high concentration)",
        "Leopards (less common)",
      ],
      highlights:
        "Pink flamingo-covered lake, rhino conservation, compact park (easy full tour in 1 day)",
      bestFor: [
        "Quick safari (4-6 hours drive from Nairobi)",
        "Flamingo photography",
        "Rhino sightings",
        "Combination with Masai Mara",
      ],
    },
    naivasha: {
      name: "Lake Naivasha",
      country: "Kenya",
      area: "104 km² (largest freshwater lake)",
      wildlife: [
        "Hippos (hundreds)",
        "Flamingos (pink water)",
        "Birds (360+ species recorded)",
        "Fish eagles",
        "Giraffes (Hell's Gate National Park nearby)",
      ],
      highlights:
        "Birdwatching paradise, hippo boat rides, Hell's Gate gorge hiking, Hell's Gate National Park",
      activities: [
        "Boat rides on lake (hippo viewing, bird watching)",
        "Hell's Gate National Park (hiking, rock climbing, geothermal springs)",
        "Giraffe Centre (feed giraffes by hand)",
        "Guided walks",
      ],
      bestFor: [
        "Birdwatchers",
        "Relaxation (lake retreat)",
        "Hiking (Hell's Gate)",
        "Day trip from Nairobi",
      ],
    },
    aberdare: {
      name: "Aberdare National Park",
      country: "Kenya",
      area: "766 km²",
      wildlife: [
        "Buffalo (common)",
        "Leopards (elusive, night viewing)",
        "Bongo antelope (endemic, rare)",
        "Antelopes (multiple species)",
        "Birds (230+ species)",
      ],
      highlights:
        "Treetop hotel night experience (unique safari), forest setting, waterfall, night game viewing from lodge",
      specialFeature:
        "Treetop hotel: Wildlife comes to watering hole below your room at night (magical experience)",
      bestFor: [
        "Unique forest safari experience",
        "Night wildlife viewing",
        "Leopard encounters",
        "Contrast to typical savanna safari",
      ],
    },
  },

  // ─────────────────────────────────────────────────────────
  // VISA & TRAVEL REQUIREMENTS
  // ─────────────────────────────────────────────────────────
  visas: {
    USA: {
      required: false,
      duration: "90 days visa-free",
      process: "Passport valid 6+ months on arrival",
      cost: "$0",
      notes: "Land directly, no pre-arrival visa requirements. eCitizen registration recommended",
    },
    EU: {
      required: false,
      duration: "90 days visa-free",
      process: "Passport valid 6+ months",
      cost: "$0",
      notes: "All EU countries, including UK, visa-free",
    },
    Australia: {
      required: false,
      duration: "90 days visa-free",
      cost: "$0",
      notes: "Australian citizens can land without visa",
    },
    Canada: {
      required: false,
      duration: "90 days visa-free",
      cost: "$0",
    },
    China: {
      required: true,
      process: "E-visa via JIDA (kenya.go.ke/jida) or on arrival",
      cost: "$50 USD",
      processing: "3-5 days online (recommended), instant on arrival (+$10)",
      validity: "Single entry, 3 months from approval",
    },
    India: {
      required: true,
      process: "E-visa or on arrival",
      cost: "$50 USD",
      processing: "2-3 days online, instant on arrival",
      validity: "Single entry, 3 months from approval",
    },
    Japan: {
      required: false,
      duration: "90 days visa-free",
      cost: "$0",
    },
    "South Africa": {
      required: false,
      duration: "90 days visa-free",
      cost: "$0",
    },
    Tanzania: {
      required: true,
      process: "Available at border or pre-arrange",
      cost: "$50 USD",
      notes: "Tanzania separate visa needed even if you're a Kenyan resident",
    },
  },

  // ─────────────────────────────────────────────────────────
  // PACKING GUIDE
  // ─────────────────────────────────────────────────────────
  packingGuide: {
    essentials: [
      "Passport (valid 6+ months, 2+ blank pages)",
      "Travel insurance (covers safaris, medical evacuation)",
      "Malaria medication (prescribed by doctor)",
      "Flight/hotel confirmations",
      "Credit card + cash (KES or USD, 2-3 denominations)",
    ],
    clothing: {
      colorScheme:
        "✓ GOOD: Khaki, brown, olive, gray, tan | ✗ AVOID: Bright colors (scare wildlife)",
      dayWear: [
        "Long-sleeve shirt (sun protection + insect barriers)",
        "Long trousers or thick pants (ankle protection)",
        "Lightweight fleece (mornings are cold, 6am-8am)",
        "Wide-brim hat (50+ UPF, protects face)",
        "Sunglasses (UV protection)",
        "Sturdy hiking boots (MUST BE BROKEN IN BEFORE TRIP!)",
      ],
      eveningWear: "Smart casual at lodge (no flip-flops at dinner)",
      rainySeasonExtra: [
        "Waterproof jacket or poncho",
        "Hiking boots with good grip (muddy roads)",
        "Extra socks (feet will get wet/muddy)",
      ],
    },
    gear: [
      "Binoculars 10x42 (wildlife viewing is 80% binoculars, 20% naked eye)",
      "Camera (phone is fine, but DSLR/mirrorless with 200mm+ lens recommended for wildlife)",
      "Extra batteries (wildlife photography drains quickly)",
      "Memory cards (multiple, safaris generate 500-1000 photos/day)",
      "Tripod (optional but helps for video & long exposures)",
      "Phone charger + car charging adapter (12V)",
      "Portable battery pack (for phone charging in vehicle)",
    ],
    toiletries: [
      "Sunscreen 50+ (reapply every hour, even under shirt)",
      "Lip balm with SPF (dry climate burns lips)",
      "Insect repellent 50% DEET (mosquitoes = malaria risk)",
      "Antihistamine (Benadryl, for insect bites)",
      "Blister treatment (Compeed, broken-in boots are key)",
      "Basic first aid (band-aids, pain relief, antidiarrheal)",
      "Prescription medications (in ORIGINAL containers, doctor's letter helpful)",
    ],
    documents: [
      "Passport (primary ID)",
      "Travel insurance card (keep accessible)",
      "Flight itinerary (printout + digital)",
      "Hotel confirmations",
      "Vaccination records (Yellow Fever recommended)",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // SEASONALITY & BEST TIMES
  // ─────────────────────────────────────────────────────────
  seasons: {
    "dry-peak": {
      months: ["June", "July", "August", "September"],
      weather: "Dry, cool mornings (15-20°C), warm afternoons (25-30°C)",
      wildlife: "Excellent (animals concentrate at water sources)",
      crowds: "Very high (peak tourist season)",
      highlights: "Great Migration (June-Aug), Big Five sightings 70-90%",
      prices: "High ($1,500-3,000/night mid-range, $5,000+/night luxury)",
      booking: "Book 3-4 months in advance",
      migrationStage:
        "June-Aug: Migration crosses Masai Mara from south (dramatic predator interactions)",
    },
    shoulder: {
      months: ["March", "April", "May", "October", "November"],
      weather: "Warm, occasional rain (brief afternoon showers)",
      wildlife: "Good (still excellent game viewing, animals more dispersed)",
      crowds: "Low-moderate",
      highlights: "Photography golden hour, lush landscapes, fewer tourists",
      prices: "30-40% cheaper than peak ($800-1,500/night)",
      booking: "Book 1-2 months ahead",
      notes: "November best shoulder month (dry, good wildlife)",
    },
    "off-peak": {
      months: ["January", "February", "December"],
      weather: "Hot, dry to occasionally rainy",
      wildlife: "Fair (animals more dispersed)",
      crowds: "Low",
      highlights: "Budget-conscious travel, intimate experience",
      prices: "50% cheaper than peak ($400-800/night)",
      booking: "Can often book 2-3 weeks ahead",
      notes: "December has holiday crowds (book early)",
    },
  },

  // ─────────────────────────────────────────────────────────
  // FREQUENTLY ASKED QUESTIONS
  // ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "What is the Great Migration?",
      answer:
        "The Great Migration is the annual movement of 2+ million wildebeest, zebras, and gazelles between the Serengeti (Tanzania) and Masai Mara (Kenya). It follows rainfall patterns: June-August in Mara (dry season), December-May in Serengeti. Predator-prey interactions create dramatic wildlife events—the most famous is the Mara River crossing (July-Aug) where crocodiles wait for crossing herds.",
    },
    {
      question: "Is malaria a risk? Do I need medication?",
      answer:
        "Yes, malaria is present in Kenya & Tanzania, especially at low altitudes. Consult your doctor 4-6 weeks before travel. Recommended medications: atovaquone-proguanil (Malarone, safest), doxycycline, or mefloquine. Also use insect repellent (DEET 50%), wear long sleeves at dusk/dawn, sleep under mosquito nets. Risk is real but preventable with proper precautions.",
    },
    {
      question: "Can I see the Big Five on one safari?",
      answer:
        "Masai Mara has the highest concentration: lion, leopard, elephant, buffalo, rhino (all 5 commonly spotted in peak season). Amboseli has 4 of 5 (rhino very rare). Guarantee: impossible—wildlife is unpredictable. But odds are 70-90% in peak season (June-Sept) with good guides. Our guides have 10+ years experience and know animal patterns.",
    },
    {
      question: "What should I bring to stay safe during game drives?",
      answer:
        "Stay in vehicle except at designated stops. Never approach animals. Follow guide instructions (they read animal behavior). Bring binoculars (don't need to get closer). Wear neutral clothing (avoid bright colors). Sun protection. Hydration. Never feed animals. Our guides prioritize safety—incidents are extremely rare with proper protocols.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "Peak season (June-Sept): 3-4 months ahead (expensive lodges fill up). Shoulder (Mar-May, Nov): 1-2 months ahead. Off-peak (Jan-Feb, Dec): 2-3 weeks possible. Booking early = better rates + guaranteed space. Contact us now and we'll hold your preferred dates.",
    },
    {
      question: "Is it safe to travel to Kenya?",
      answer:
        "Kenya is generally safe for tourists. Main cities (Nairobi, Mombasa) require normal urban precautions. National parks & safari areas are very safe—thousands of tourists visit annually with no incidents. Stay alert, avoid isolated areas at night, use registered taxis/guides. Our team manages all logistics safely.",
    },
    {
      question: "What's the difference between a lodge and a camp?",
      answer:
        "Lodge: Permanent structure, more comfort/amenities, community dining. Camp: Tented or semi-permanent, closer to nature, more intimate. Both provide excellent experiences—choice depends on comfort preference & budget. We offer both options.",
    },
    {
      question: "Can I bring a drone to Kenya?",
      answer:
        "Drones are heavily restricted in Kenya. Permits required from Kenya Civil Aviation Authority, and flights over national parks are prohibited for wildlife protection. We recommend checking current regulations or contacting us for guidance.",
    },
    {
      question: "What languages are spoken on safari?",
      answer:
        "English is the official language and spoken by all our guides. Swahili is the national language (Jambo=hello, Asante=thank you). French, German, Spanish also available upon request. You can comfortably do safari with English.",
    },
    {
      question: "What's the best camera for safari photography?",
      answer:
        "Any camera works, but for wildlife: telephoto lens (200mm+) is essential. Phone cameras are fine for landscapes. DSLR/mirrorless (Canon, Nikon, Sony) with 70-200mm or 100-400mm lens recommended. Our guides are photographers and can help with composition.",
    },
    {
      question: "How many game drives per day?",
      answer:
        "Typical: Early morning (6-10am) and late afternoon (3-7pm). Morning drive usually best for wildlife (animals active in cooler hours). Midday is rest time at lodge. This schedule maximizes sightings while protecting wildlife rest periods.",
    },
    {
      question: "Do I need a vaccination for yellow fever?",
      answer:
        "Yellow fever vaccine is not legally required for entry to Kenya, but recommended by health authorities. Consult your doctor 4-6 weeks before travel. Other recommended vaccines: tetanus, hepatitis A, typhoid. Travel insurance covers medical emergencies.",
    },
  ],

  // ─────────────────────────────────────────────────────────
  // COMPANY INFO
  // ─────────────────────────────────────────────────────────
  company: {
    name: "Nature Lovers Adventure",
    founded: 2020,
    headquarters: "Nairobi, Kenya",
    phone: "+254 724 660170",
    email: "info@natureloversadventure.co.ke",
    specializations: [
      "Luxury safari packages",
      "Budget-friendly tours",
      "Photography safaris",
      "Family packages",
      "Corporate incentive trips",
      "Custom itineraries",
      "Visa & travel services",
    ],
    certifications: [
      "Kenya Tourism Board registered",
      "Licensed tour operator",
      "Travel insurance partners verified",
    ],
    team: [
      {
        name: "Steve",
        role: "Founder & Safari Expert",
        expertise: "20+ years bush experience, expert in Big Five",
        bio: "Steve founded Nature Lovers Adventure with a passion for authentic safari experiences. He leads all premium tours personally and knows the Masai Mara like the back of his hand.",
      },
      {
        name: "Sarah",
        role: "Tour Operations Manager",
        expertise: "Logistics, itinerary design, customer care",
        bio: "Sarah ensures every safari runs flawlessly. She customizes each itinerary to match your interests, budget, and travel style.",
      },
      {
        name: "Ian",
        role: "Photography Guide & Expert",
        expertise: "Wildlife photography, composition, camera settings",
        bio: "Ian is an award-winning wildlife photographer who guides photo safaris. He'll help you capture stunning shots of the Big Five.",
      },
      {
        name: "Mary",
        role: "Customer Experience Lead",
        expertise: "Personalized bookings, customer service, visa guidance",
        bio: "Mary handles all your inquiries with warmth and expertise. She's your point person from booking through departure.",
      },
      {
        name: "Rushion",
        role: "Ground Logistics & Driver",
        expertise: "Vehicles, camps, local contacts, real-time problem solving",
        bio: "Rushion manages all ground operations—vehicles, camps, and local partnerships—ensuring your safari is seamless.",
      },
    ],
    values: [
      "Authentic experiences",
      "Sustainability (wildlife protection)",
      "Customer first",
      "Expert guides",
      "Competitive pricing",
      "Transparency (no hidden fees)",
    ],
  },

  // ─────────────────────────────────────────────────────────
  // TIPS & RECOMMENDATIONS
  // ─────────────────────────────────────────────────────────
  tips: {
    bestFor: {
      "first-time safari":
        "6 Days Kenya Safari or 3 Days Masai Mara. Masai Mara has highest Big Five concentration.",
      couples: "Bush & Beach package (safari + romance on beach)",
      families: "Bush & Beach or 6 Days Kenya (variety keeps kids engaged)",
      photographers: "7-8 day packages, ask for photography guide (Ian available)",
      budget: "Shoulder season (Mar-May, Nov) for 30-40% savings",
      luxury: "Conservancy camps in Masai Mara (exclusive, fewer crowds)",
      "short trip": "3 Days Masai Mara (concentrated wildlife experience)",
      "long trip": "9+ days combining safari + beach",
    },
    photography: [
      "Bring binoculars (spotting = 80% of photography)",
      "Early morning light is best (6-10am)",
      "Use 200mm+ telephoto lens (wildlife needs distance)",
      "Shutter speed 1/1000s minimum (animals move fast)",
      "ISO 400-1600 typical (bright African sun)",
      "Fast autofocus camera critical (Canon R7, Nikon Z9, Sony A6700)",
    ],
    comfort: [
      "Broken-in boots are essential (walking on rough roads)",
      "Bring motion sickness medication (bumpy roads)",
      "Hydrate constantly (African sun intense)",
      "Sunscreen reapply every hour",
      "Layers for temperature swings",
    ],
  },
};

// Helper function to search knowledge base by keyword
export function searchAylaKnowledge(query: string): string | null {
  const q = query.toLowerCase();

  // Search destinations
  for (const [key, dest] of Object.entries(AYLA_KNOWLEDGE.destinations)) {
    if (dest.name.toLowerCase().includes(q)) {
      return JSON.stringify(dest);
    }
  }

  // Search packages
  for (const [key, pkg] of Object.entries(AYLA_KNOWLEDGE.packages)) {
    if (pkg.name.toLowerCase().includes(q)) {
      return JSON.stringify(pkg);
    }
  }

  // Search visas
  for (const [country, visa] of Object.entries(AYLA_KNOWLEDGE.visas)) {
    if (country.toLowerCase().includes(q)) {
      return JSON.stringify(visa);
    }
  }

  return null;
}
