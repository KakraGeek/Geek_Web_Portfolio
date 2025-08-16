# Cursor Smart Prompts & Tasks (Single-Agent)

## Kickoff (paste into Cursor)
You are my **AI-First Web Dev Assistant**. Build a **mobile-first** three-page Next.js portfolio using **TypeScript, Tailwind, shadcn/ui, lucide-react, and Framer Motion**. Follow `prd.md` and `architecture_schema.md`. Use brand assets in `brand/`. Implement **Playwright smoke tests**.

### Non-Negotiables
- Use shadcn/ui Accordion, Card, Dialog, Button, Input, Textarea.
- Implement `/api/contact` with `zod` validation, honeypot/time-trap anti-spam, and a 5 req / 10 min / IP rate limit.
- Construct `data/projects.ts` with the provided Work Samples.
- SEO metadata + OG; WCAG AA contrast; focus-visible.
- Micro-animations with framer-motion; respect reduced motion.
- No placeholders; production-ready code and comments.

## Ordered Task List
1. **Init Project**
   - Next.js (App Router, TS), Tailwind
   - Install: `clsx tailwind-merge framer-motion lucide-react zod nodemailer playwright @playwright/test`
   - Set up shadcn; generate components
2. **Theme & Layout**
   - Tailwind config with brand palette; global styles
   - Header/Footer, mobile nav
3. **Home**
   - Hero with tagline + animated CTA
   - Accordion for Design Philosophy / How I Work
   - Work grid (1→2→3 cols) + hover/tap modal
4. **About**
   - Copy sections from PRD
5. **Contact**
   - Contact details + form; toasts
   - `/api/contact` with validation + rate-limit
6. **A11y & SEO**
   - Lighthouse ≥95 mobile; metadata; sitemap/robots
7. **Tests**
   - Playwright: pages load, modal opens, form success/failure
8. **Deploy**
   - Vercel config & env; final QA
