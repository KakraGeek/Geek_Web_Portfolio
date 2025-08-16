# Web Dev Portfolio – PRD (Mobile-First)

**Owner:** Desmond Asiedu  
**Studio:** The Geek Toolbox  
**Goal:** A high-conversion, **mobile-first** portfolio with a modern, sleek, classy UI, subtle animations, and clear CTAs. Optimized for fast decision-making and contact.

## 1) Target Audience & Outcomes
- **Audience:** Business owners, startup founders, teams seeking rapid, AI-driven delivery.
- **Primary outcomes:** Contact form submissions, WhatsApp taps, Work Samples engagement.
- **North-star metric:** Contact submissions per 100 visitors.

## 2) Pages & Content
### Home
1. **Welcome (Hero)**: One strong line emphasizing AI-driven development and rapid cycles.  
   Tagline: *“Custom Digital Tools & Web Development for professionals, teams, and entrepreneurs.”*
2. **Design Philosophy + How I Work**: Single section using **shadcn/ui Accordion** with two items.  
   - **Design Philosophy**: Empathy • Clarity • Consistency.  
   - **How I Work**: Talk → Prototype → Tweak → Launch; feedback is continuous.
3. **Work Samples**: Responsive 1-col (xs) → 2-col (sm/md) → 3-col (lg) **Card grid**.  
   - Each card: title, short blurb (below), “Hover for Details” hint.  
   - Hover/tap opens **Dialog** with richer details and **Live View** (target=_blank).

**Work Samples (initial set):**
- **Cleaning Dynamics** — Commercial cleaning services site with modern brochure sections and contact funnels.  
  Live: https://cleaning-dynamics-web.vercel.app/
- **ABNEG Portal** — Association portal concept with member self-service and role-based content.  
  Live: https://abneg-portal-pi.vercel.app/
- **InSightify – Hospitality** — Data storytelling demo for hotel departments with KPI dashboards.  
  Live: https://insightify-hospitality.vercel.app/
- **Agile Insurance** — Insurance website prototype focused on quote conversions and trust signals.  
  Live: https://agile-insurance-website.vercel.app/
- **InSightify – Fashion (Auth)** — Fashion artisan management app login preview for protected features.  
  Live: https://insightify-fashion.vercel.app/login
- **Nyansa Tech Hub** — Tech hub brochure with events, programs, and partnership CTAs.  
  Live: https://nyansa-tech-hub-web.vercel.app/
- **StayKasa** — Creative spaces booking prototype with listings and booking flow.  
  Live: https://staykasa-app.vercel.app/

### About Me
- **My Journey** and **My Mission**: exact copy provided in task.
- Emphasize humane solutions and Ghana-focused delivery via **The Geek Toolbox**.

### Contact
- Clear contact block: emails, phone/WhatsApp; CTA line: “Don’t let bottlenecks slow you down...”
- **Contact Form**: name, email, subject, message → emails `desmond.asiedu@gmail.com`.

## 3) UX/UI (Mobile-First)
- **Colors:** Noir BG with Electric Blue & Vivid Lime highlights; Sun Amber & Soft Rose as sparing accents.
- **Type:** Inter/system stack, generous line-height for mobile readability.
- **Motion:** Framer Motion micro-animations; prefers-reduced-motion support.
- **Components:** shadcn/ui (Accordion, Card, Dialog, Button, Input, Textarea), lucide-react icons.
- **A11y:** WCAG AA contrast, keyboard nav, focus-visible rings, aria labels.

## 4) Tech Stack
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS + shadcn/ui + lucide-react**
- **Framer Motion**
- **Email**: Next.js API route + `nodemailer` (or Resend).

## 5) Data & Content
- Static content (MDX/JSON). `data/projects.ts` will include the entries above.
- No database; serverless email only.

## 6) Performance & SEO
- Lighthouse ≥ 95 mobile. Image optimization, font loading, metadata, OG, sitemap, robots.
- Ghana-friendly performance: small bundles, avoid heavy libs.

## 7) Security
- OWASP-aware API: input validation (zod), header hardening, rate limit, anti-spam (honeypot + time-trap).

## 8) Acceptance
- All pages implemented, responsive, pass a11y checks, email works, smoke tests pass, deployed on Vercel.
