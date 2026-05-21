# Forge Athletics — Strength & Conditioning Coach Site

## Original Problem Statement
Build a full-stack, production-ready marketing website for a professional Strength
and Conditioning Coach. Goal: attract clients, build authority, drive consultation
conversions. Color palette: dark charcoal #1A1A1A bg, electric red #E63946 accent,
white text. Typography: Anton/Oswald headings + DM Sans body. Sections: Hero, About
with animated counters, Services (4 cards), Testimonials, Philosophy, Pricing (3
tiers, middle Most Popular), Blog preview, Booking/Contact form, Footer with
newsletter signup. Sticky nav with smooth scroll, mobile hamburger menu, SEO meta
tags. Tech: React + Tailwind, Framer Motion. Brief originally said "no backend
needed" — user authorised backend storage for leads & newsletter via defaults.

## Architecture
- Frontend: React 19 + Tailwind 3 + Shadcn UI + Framer Motion + sonner toasts
- Backend: FastAPI + Motor (async MongoDB) — `/api` prefix
- DB: MongoDB collections: `consultations`, `newsletter`, `status_checks`

## User Personas
- High-school / collegiate / pro athlete seeking S&C programming
- Competitive lifter / combat-sport athlete chasing PRs
- Serious recreational lifter wanting structured coaching

## Core Requirements (static)
- Dark, athletic premium aesthetic (Anton headings, electric red accents)
- Mobile responsive with smooth scroll & section fade-ins
- SEO meta tags targeting "strength and conditioning coach", "athletic performance"
- Lead capture form + newsletter signup
- Sticky nav + mobile hamburger

## What's Been Implemented (2026-02)
- ✅ Sticky glassmorphic nav with 6 anchor links + Book Consult CTA + mobile menu
- ✅ Full-bleed Hero with motion-blur background, dual CTA, sprinter stats
- ✅ About section with IntersectionObserver-triggered animated counters (10+, 500+, 37) and CSCS/NSCA badges
- ✅ 4 Service cards (1-on-1, Online, Athletic Performance, Group)
- ✅ Testimonials (3 cards, star ratings, sport+metric badges)
- ✅ Philosophy 3-column "Science / Individualized / Proven"
- ✅ Pricing 3 tiers (Starter $149, Performance $289 Most Popular, Elite $549)
- ✅ Blog preview cards (3) with category tags & read time
- ✅ Consultation form with frontend validation + POST /api/consultation
- ✅ Newsletter signup with POST /api/newsletter (409 on duplicate)
- ✅ Footer with Instagram/YouTube/TikTok/LinkedIn icons
- ✅ SEO meta tags, OG, Twitter cards in public/index.html
- ✅ data-testid on every interactive element
- ✅ Testing subagent: 100% backend (10/10) and 100% frontend pass

## Backlog / Next Action Items
### P1 — Conversion lift
- Add Stripe Checkout to pricing tiers ("Get Started" → real subscription)
- Calendar booking integration (Google Calendar / Cal.com) on consultation submit
- Admin dashboard (`/admin`) to view leads & subscribers

### P2 — Authority / content
- Real blog detail pages (MDX) with related-post recommendations
- Athlete results carousel with before/after photos
- Lead magnet PDF (free 4-week program) gated by newsletter signup

### P3 — Polish
- Lenis smooth scroll for premium momentum feel
- Cookie banner & analytics dashboard view
- Multi-coach support (whitelabel)
