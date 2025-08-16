export type Project = { 
  title: string; 
  url: string; 
  short: string; 
  long?: string; 
  tags?: string[] 
};

export const projects: Project[] = [
  { 
    title: "Cleaning Dynamics", 
    url: "https://cleaning-dynamics-web.vercel.app/", 
    short: "Commercial cleaning services site with modern brochure sections and contact funnels.",
    long: "A comprehensive commercial cleaning services website featuring modern brochure sections, service showcases, and optimized contact funnels for lead generation.",
    tags: ["Commercial", "Services", "Contact Funnels"]
  },
  { 
    title: "ABNEG Portal", 
    url: "https://abneg-portal-pi.vercel.app/", 
    short: "Association portal concept with member self-service and role-based content.",
    long: "An association portal concept designed with member self-service capabilities and role-based content management for different user types.",
    tags: ["Portal", "Membership", "Role-based"]
  },
  { 
    title: "InSightify – Hospitality", 
    url: "https://insightify-hospitality.vercel.app/", 
    short: "Data storytelling demo for hotel departments with KPI dashboards.",
    long: "A data storytelling demonstration platform for hotel departments featuring interactive KPI dashboards and performance analytics.",
    tags: ["Hospitality", "Analytics", "Dashboards"]
  },
  { 
    title: "Agile Insurance", 
    url: "https://agile-insurance-website.vercel.app/", 
    short: "Insurance website prototype focused on quote conversions and trust signals.",
    long: "An insurance website prototype strategically designed to maximize quote conversions through trust signals and user experience optimization.",
    tags: ["Insurance", "Conversions", "Trust Signals"]
  },
  { 
    title: "InSightify – Fashion (Auth)", 
    url: "https://insightify-fashion.vercel.app/login", 
    short: "Fashion artisan management app login preview for protected features.",
    long: "A fashion artisan management application featuring secure authentication and protected features for business management.",
    tags: ["Fashion", "Authentication", "Management"]
  },
  { 
    title: "Nyansa Tech Hub", 
    url: "https://nyansa-tech-hub-web.vercel.app/", 
    short: "Tech hub brochure with events, programs, and partnership CTAs.",
    long: "A comprehensive tech hub brochure website showcasing events, educational programs, and strategic partnership opportunities.",
    tags: ["Tech Hub", "Events", "Partnerships"]
  },
  { 
    title: "StayKasa", 
    url: "https://staykasa-app.vercel.app/", 
    short: "Creative spaces booking prototype with listings and booking flow.",
    long: "A creative spaces booking platform prototype featuring property listings and a streamlined booking flow for users.",
    tags: ["Booking", "Creative Spaces", "Listings"]
  }
];
