// ============================================================================
// VELOURA EVENTS — site content
// CONTENT IS LOCKED: copy in this file is sourced verbatim from the Wedding
// Services Guide. Do not rewrite, paraphrase, summarize, or correct spelling.
// Only layout, presentation and interaction may change.
// ============================================================================

export const brand = {
  name: "VELOURA EVENTS",
  tagline: "Luxury weddings. Thoughtfully planned.",
  positioning: "PLANNING • DESIGN • COORDINATION • PRODUCTION",
  period: "2026 / 2027",
};

export const contact = {
  phone: "0716 261 195",
  email: "velouraeventsanddecor@gmail.com",
  social: "Veloura Events",
  whatsappUrl: "https://wa.me/254716261195",
  whatsappPrefill:
    "Hello Veloura Events, I would like to enquire about your wedding planning services.",
};

export const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent(
  contact.whatsappPrefill,
)}`;

export const navLinks = [
  { label: "WELCOME", href: "#welcome" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "COLLECTIONS", href: "#collections" },
  { label: "SERVICES", href: "#services" },
  { label: "JOURNEY", href: "#journey" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: brand.positioning,
  title: brand.name,
  tagline: brand.tagline,
  period: brand.period,
  cta: "BOOK A CONSULTATION",
};

export const welcome = {
  heading: "WELCOME TO VELOURA",
  paragraphs: [
    "At Veloura Events, we believe a beautiful wedding is more than a collection of details. It is an experience—thoughtfully planned, beautifully designed and confidently executed.",
    "We work with couples who value elegance, intention and ease, creating celebrations that feel personal rather than predictable.",
    "From the first conversation to the final guest departure, we bring structure, creativity and calm to every stage of the planning journey.",
    "Whether you are planning an intimate celebration, a sophisticated local wedding, a cultural ceremony or a destination experience, our role is to make the process feel effortless while ensuring every important detail is handled with care.",
    "Your vision remains at the heart of everything we do. We curate the right team, manage the moving parts and create a celebration that reflects your story, your style and the people you love.",
  ],
};

export const experience = {
  heading: "THE VELOURA EXPERIENCE",
  intro:
    "Planning a wedding should feel exciting—not overwhelming. Veloura is designed for couples who want professional guidance without losing the personal meaning behind their celebration.",
  items: [
    "Personalised planning built around your vision, priorities and budget.",
    "Professional vendor sourcing, communication and management.",
    "Detailed planning timelines, schedules and production coordination.",
    "Wedding design guidance and styling direction for a cohesive aesthetic.",
    "Budget oversight and practical recommendations throughout the planning process.",
    "Wedding-day production and coordination so you can focus on your celebration.",
    "Guest-experience planning, from invitations and RSVPs to itineraries and arrival details.",
    "A calm, discreet and highly organised planning experience from start to finish.",
  ],
  statement:
    "We don't simply coordinate a wedding. We create the framework that allows you to enjoy it.",
};

export type Collection = {
  number: string;
  name: string;
  subtitle: string;
  description: string[];
  services: string[];
  investmentLabel: string;
  investmentValue: string;
  minimumInvestment: string | null;
  flatRateNote: string;
  thirdPartyNote: string;
};

export const collections: Collection[] = [
  {
    number: "01",
    name: "THE SAFARI COLLECTION",
    subtitle: "FOR DESTINATION WEDDINGS",
    description: [
      "Our destination wedding service provides full planning, design and coordination for celebrations that bring couples and their guests together away from home.",
      "From venue sourcing and vendor management to guest logistics, travel coordination and multi-day event production, Veloura creates a seamless experience from arrival to departure.",
      "We work closely with the couple and their selected vendors to ensure that every element is considered—from the overall creative direction to the practical details that make a destination celebration comfortable and memorable.",
    ],
    services: [
      "Destination venue and vendor coordination",
      "Full wedding planning and production",
      "Multi-day celebration planning",
      "Guest travel and accommodation coordination",
      "Wedding weekend itinerary development",
      "Guest experience and communication management",
      "Wedding design and styling coordination",
      "Wedding-day execution and on-site management",
    ],
    investmentLabel: "Investment",
    investmentValue: "12%",
    minimumInvestment: "Minimum investment: KES 380,000",
    flatRateNote:
      "A flat rate can be discussed once the event budget is drafted, following consultation.",
    thirdPartyNote:
      "Third-party vendor, travel, accommodation, ushering and security costs are quoted separately.",
  },
  {
    number: "02",
    name: "THE VELORA COLLECTION",
    subtitle: "FOR FULL-SERVICE LOCAL WEDDINGS",
    description: [
      "Our full-service wedding planning, design and coordination experience is created for couples who want a trusted professional to guide the celebration from the earliest ideas through the final moments of the wedding day.",
      "We take care of the planning structure, vendor journey, creative direction and execution so that you can enjoy the experience without carrying every logistical responsibility yourself.",
    ],
    services: [
      "Full-service wedding planning",
      "Wedding design and décor coordination",
      "Venue and vendor sourcing",
      "Budget planning and vendor management",
      "Planning timelines and milestone management",
      "Contract and quotation coordination",
      "Guest experience planning",
      "Wedding-day production and execution",
      "On-site vendor and logistics management",
    ],
    investmentLabel: "Investment",
    investmentValue: "10%",
    minimumInvestment: "Minimum investment: KES 350,000",
    flatRateNote:
      "A flat rate can be discussed once the event budget is drafted, following consultation.",
    thirdPartyNote:
      "Third-party vendor, travel, accommodation, ushering and security costs are quoted separately.",
  },
  {
    number: "03",
    name: "THE HERITAGE COLLECTION",
    subtitle: "FOR CULTURAL & TRADITIONAL CELEBRATIONS",
    description: [
      "Our cultural and traditional event planning service is designed for families who value heritage, meaning and elegance in every detail.",
      "Whether you are planning a ruracio, dowry ceremony, traditional wedding, cultural reception or a celebration that blends several family traditions, Veloura brings structure and thoughtful coordination to the occasion.",
      "We respect the significance of these gatherings while helping families create a presentation that feels polished, contemporary and true to their traditions.",
    ],
    services: [
      "Traditional and cultural event planning",
      "Family and stakeholder coordination",
      "Vendor sourcing and management",
      "Décor and styling coordination",
      "Ceremony and reception timelines",
      "Guest communication and logistics",
      "Cultural programme coordination",
      "Event-day management and execution",
    ],
    investmentLabel: "Investment",
    investmentValue: "10%",
    minimumInvestment: "Minimum investment: KES 280,000",
    flatRateNote:
      "A flat rate can be discussed once the event budget is drafted, following consultation.",
    thirdPartyNote:
      "Third-party vendor, travel, accommodation, ushering and security costs are quoted separately.",
  },
  {
    number: "04",
    name: "THE SIGNATURE COLLECTION",
    subtitle: "FOR GUIDED PLANNING & WEDDING DAY COORDINATION",
    description: [
      "For couples who have thoughtfully planned their wedding but want an experienced professional to step in, refine the details and take over the final coordination.",
      "Veloura provides guidance throughout the final planning period and takes responsibility for bringing the plans together on the wedding day. We liaise with vendors, manage the timeline, coordinate logistics and oversee execution so you can be present with your family and guests.",
    ],
    services: [
      "Planning review and professional guidance",
      "Final vendor confirmations and coordination",
      "Detailed wedding-day timeline",
      "Vendor contact and logistics management",
      "Ceremony and reception coordination",
      "Wedding-day production and execution",
      "On-site management of the event team",
      "Final handover and wedding-day oversight",
    ],
    investmentLabel: "Investment",
    investmentValue: "7.5%",
    minimumInvestment: "Minimum investment: KES 220,000",
    flatRateNote:
      "A flat rate can be discussed once the event budget is drafted, following consultation.",
    thirdPartyNote:
      "Third-party vendor, travel, accommodation, ushering and security costs are quoted separately.",
  },
  {
    number: "05",
    name: "THE EDIT COLLECTION",
    subtitle: "FOR WEDDING COMMUNICATION & GUEST EXPERIENCE",
    description: [
      "A curated service for couples who want every guest-facing detail to feel seamless, intentional and beautifully presented.",
      "We coordinate the communication journey around your celebration, helping guests know where to be, when to arrive and what to expect while ensuring the visual experience remains cohesive with your wedding identity.",
    ],
    services: [
      "Wedding website design and content coordination",
      "Save-the-dates and invitation coordination",
      "Bespoke monogram and wedding visual identity",
      "Digital and print stationery coordination",
      "RSVP collection and guest-list management",
      "Dietary and special-request tracking",
      "Guest reminders and itinerary updates",
      "Guest information and arrival communications",
      "Seating-plan and access coordination",
    ],
    investmentLabel: "Investment",
    investmentValue: "",
    minimumInvestment: null,
    flatRateNote: "Bespoke quotations are provided after consultation.",
    thirdPartyNote: "",
  },
];

export const additionalServices = {
  heading: "ADDITIONAL WEDDING SERVICES",
  intro:
    "Your planning experience can be extended through our trusted vendor and creative network. Services are tailored to your celebration and quoted separately.",
  services: [
    "Wedding décor and floral design",
    "Sound, lighting and technical production",
    "DJ and live entertainment",
    "MC services",
    "Wedding cake and dessert experiences",
    "Photography and videography",
    "Bridal party and guest transportation",
    "Stationery and signage",
    "Catering and bar service coordination",
    "Ushers and guest-management teams",
    "Entertainment and special performances",
    "Accommodation and destination logistics",
  ],
  closing: [
    "Veloura does not require you to source every supplier alone. Where appropriate, we can recommend, source, compare and coordinate professional vendors to create one cohesive wedding experience.",
    "Vendor services are separate from the Veloura planning fee unless specifically included in your customised proposal.",
  ],
};

export type JourneyStep = {
  number: string;
  title: string;
  description: string;
};

export const journey = {
  heading: "THE PLANNING JOURNEY",
  steps: [
    {
      number: "01",
      title: "INQUIRE",
      description:
        "Tell us about your wedding, your date, your location and what you envision.",
    },
    {
      number: "02",
      title: "CONSULT",
      description:
        "We explore your priorities, guest experience, aesthetic, budget and planning needs.",
    },
    {
      number: "03",
      title: "CURATE",
      description:
        "We build your planning roadmap and help assemble the right vendor and creative team.",
    },
    {
      number: "04",
      title: "DESIGN",
      description:
        "We develop the visual direction and ensure the details work together cohesively.",
    },
    {
      number: "05",
      title: "COORDINATE",
      description:
        "We manage the moving parts, timelines, vendors and logistics leading into your celebration.",
    },
    {
      number: "06",
      title: "CELEBRATE",
      description:
        "You arrive at your wedding ready to be present, while Veloura manages the execution.",
    },
  ] satisfies JourneyStep[],
};

export type FaqItem = { question: string; answer: string };

export const faq = {
  heading: "FREQUENTLY ASKED QUESTIONS",
  items: [
    {
      question: "Do you provide décor, sound, DJ, cake and other vendors?",
      answer:
        "Yes. Through our trusted vendor network, we can source and coordinate additional wedding services. These services are quoted separately unless included in your customised proposal.",
    },
    {
      question: "Can we use vendors we have already booked?",
      answer:
        "Absolutely. We can work with your existing vendors while managing communication, timelines and overall coordination.",
    },
    {
      question: "How far in advance should we book?",
      answer:
        "We recommend securing your planner as early as possible, especially for popular dates and destination celebrations.\n\nAvailability is confirmed after an initial consultation.",
    },
    {
      question: "Do you work with a specific wedding budget?",
      answer:
        "Yes. We help you structure your priorities and make informed vendor and design decisions within your intended investment.",
    },
    {
      question: "Can you plan weddings for couples living outside Kenya?",
      answer:
        "Yes. Our planning process can be structured to support busy and diaspora couples, with communication, vendor coordination and progress updates handled remotely where appropriate.",
    },
    {
      question:
        "Are travel, accommodation, security and ushering included in the planning fee?",
      answer:
        "No. These are event-specific expenses and are quoted separately where required.",
    },
    {
      question: "How is your planning fee calculated?",
      answer:
        "Our collections use a percentage of the total vendor budget with a minimum investment. A flat fee may be discussed after consultation and once the event scope and budget are established.",
    },
  ] satisfies FaqItem[],
};

export const finalCta = {
  heading: "LET'S CREATE SOMETHING BEAUTIFUL",
  paragraphs: [
    "Your wedding deserves to feel as beautiful as the reason you are celebrating.",
    "If you are looking for a planning partner who can bring structure to your ideas, elegance to your details and calm to the process, we would love to hear from you.",
  ],
  cta: "BOOK A CONSULTATION",
};

export const footer = {
  name: brand.name,
  tagline: "Luxury Weddings. Thoughtfully Planned.",
};

export const credit = {
  year: "2026",
  developer: "Taziki Solutions",
  developerUrl: "https://tazikisolutions.com/",
};
