# Architecture Schema (Mobile-First)

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui + lucide-react
- Framer Motion
- Nodemailer (or Resend) for `/api/contact`
- Zod for validation; simple LRU rate-limit

## Directory
```
/app
  /(site)/page.tsx           # Home
  /(site)/about/page.tsx
  /(site)/contact/page.tsx
  /api/contact/route.ts      # POST email
/components
  AccordionBlock.tsx
  WorkCard.tsx
  WorkModal.tsx
  SiteHeader.tsx
  SiteFooter.tsx
  AnimatedCTA.tsx
/data
  projects.ts                # from provided URLs
/lib
  validations.ts             # zod schemas
  rate-limit.ts              # simple in-memory limiter
/public/brand
  portfolio_logo.svg
/styles
  globals.css
```

## Data Model (projects.ts)
```ts
export type Project = { title: string; url: string; short: string; long?: string; tags?: string[] };
export const projects: Project[] = [
  { title: "Cleaning Dynamics", url: "https://cleaning-dynamics-web.vercel.app/", short: "Commercial cleaning services site with modern brochure sections and contact funnels." },
  { title: "ABNEG Portal", url: "https://abneg-portal-pi.vercel.app/", short: "Association portal concept with member self-service and role-based content." },
  { title: "InSightify – Hospitality", url: "https://insightify-hospitality.vercel.app/", short: "Data storytelling demo for hotel departments with KPI dashboards." },
  { title: "Agile Insurance", url: "https://agile-insurance-website.vercel.app/", short: "Insurance website prototype focused on quote conversions and trust signals." },
  { title: "InSightify – Fashion (Auth)", url: "https://insightify-fashion.vercel.app/login", short: "Fashion artisan management app login preview for protected features." },
  { title: "Nyansa Tech Hub", url: "https://nyansa-tech-hub-web.vercel.app/", short: "Tech hub brochure with events, programs, and partnership CTAs." },
  { title: "StayKasa", url: "https://staykasa-app.vercel.app/", short: "Creative spaces booking prototype with listings and booking flow." }
];
```

## API Contact Flow
User → Contact form → POST `/api/contact` → Validate (zod) → Rate limit → Send mail → return structured status

## Security
- Validate/sanitize inputs; cap lengths
- Add minimal CORS (same-origin)
- Anti-spam honeypot + time-trap
- Set security headers on response

## Deployment
- Vercel; env vars for SMTP or Resend token; add `NEXT_PUBLIC_*` for public config as needed.
