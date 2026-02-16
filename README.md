# SolviStack Technologies — Portfolio Website

Premium agency-level portfolio site for SolviStack Technologies. Built with React (Vite), Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (brand palette, utilities)
- **Framer Motion** (entrance animations, hover, scroll reveal)
- Fully responsive, production-ready structure

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Production build: `npm run build`; preview: `npm run preview`.

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Services, Projects, Testimonials, Process, TechStack, Cta
│   └── ui/           # Button, etc.
├── constants/
│   ├── sections.js   # Section IDs, nav links
│   └── contact.js    # WhatsApp URL, email (update for production)
├── App.jsx
├── main.jsx
└── index.css
public/
├── logo.png          # SolviStack logo (already set)
└── favicon.svg
```

## Configuration

- **Contact links:** Edit `src/constants/contact.js` and set your WhatsApp number and email.
- **Logo:** The logo is in `public/logo.png`. Replace it to change the site logo; the navbar shows a “SolviStack” text fallback if the image fails to load.

## Brand Palette (Tailwind)

- `brand-navy` — #123D7A  
- `brand-navy-light` — #1E4F9C  
- `brand-teal` — #17B3B0  
- `brand-dark` — #0B1C2D  
- `brand-dark-lighter` / `brand-dark-section` — section backgrounds  

Gradient: `bg-gradient-brand` (135deg navy → teal). Glow: `shadow-glow-teal`, `shadow-glow-teal-sm`.

## Sections

1. **Hero** — Headline, subheadline, gradient mesh, WhatsApp + Email CTAs  
2. **Services** — AI Automation, Workflow, MERN Web Apps, CMS, API Integrations  
3. **Projects** — AI Resume Builder, SK Juris, Food Delivery, Branding Clone  
4. **Testimonials** — Wavisol Labs, Digiaxiom  
5. **Process** — Requirement → Architecture → Agile Dev → Deployment  
6. **Tech Stack** — React, Node.js, MongoDB, Express, Tailwind, REST APIs  
7. **CTA** — Final headline + WhatsApp + Email  

Smooth scrolling and navbar links target these sections by ID.
