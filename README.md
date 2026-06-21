# Sandeep Art Gallery

A premium, luxury fine-art gallery website for **Sandeep Singh Parmar — Sandeep Art Gallery**, built with React, Tailwind CSS, React Router, and Framer Motion.

## ✨ Features

- **Hero Section** — full-bleed animated intro with stats and a featured artwork card
- **Artwork Gallery** — filterable by category (Portraits, Religious Art, Blood Art, Canvas Paintings, Pencil Sketches), with a lightbox preview and keyboard navigation (← / → / Esc)
- **Custom Sketch / Commission Section** — process inclusions, CTAs to contact/WhatsApp
- **Artistic Process Section** — five-step horizontal timeline
- **Testimonials** — rotating carousel with star ratings
- **About the Artist** — full bio page with milestones timeline
- **Contact Section** — functional contact form UI (client-side validated) + studio details + embedded map
- **Footer** — sitemap, contact info, social links
- **WhatsApp Floating Action Button** — pre-filled message, pulse animation
- **SEO-friendly** — meta tags, Open Graph, Twitter cards, JSON-LD structured data, semantic HTML, descriptive alt text
- Smooth scroll navigation, animated page transitions, mobile-first responsive design

## 🧱 Tech Stack

- React 19 (JavaScript, no TypeScript)
- Vite
- Tailwind CSS 3
- React Router DOM 7
- Framer Motion
- Lucide React (icons)

## 🎨 Design System

| Token | Value |
|---|---|
| `emerald-deep` | `#062B24` — primary background |
| `emerald-rich` | `#0A3B30` — panel background |
| `gold` | `#D4AF37` — primary accent |
| `gold-soft` | `#E8CB6E` — hover accent |
| `cream` | `#F6F1E4` — primary text on dark |
| `ink` | `#03110D` — deepest shadow / footer |

Typography: **Cormorant Garamond** (display/serif) + **Jost** (body/UI), both loaded via Google Fonts in `index.html`.

## 📁 Folder Structure

```
src/
├── assets/              # static assets (currently empty — add your own images here)
├── components/          # all reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ArtworkCard.jsx
│   ├── Lightbox.jsx
│   ├── GalleryFilter.jsx
│   ├── FeaturedGallery.jsx
│   ├── CommissionSection.jsx
│   ├── ProcessSection.jsx
│   ├── Testimonials.jsx
│   ├── AboutPreview.jsx
│   ├── ContactCTA.jsx
│   ├── ContactForm.jsx
│   ├── PageHeader.jsx
│   ├── SectionHeading.jsx
│   ├── Logo.jsx
│   ├── WhatsAppButton.jsx
│   └── ScrollToTop.jsx
├── data/                # sample content (edit these to update site content)
│   ├── artworks.js      # all artwork entries + categories
│   └── content.js       # testimonials, process steps, stats
├── pages/
│   ├── Home.jsx
│   ├── Gallery.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx              # routing + layout shell
├── main.jsx             # React entry point
└── index.css            # Tailwind directives + global styles
```

## 🚀 Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

## 📦 Build for Production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

## ✏️ Customizing Content

- **Hero video**: replace `src/assets/Hero.mp4` with your own video file (same filename, or update the import path in `src/components/Hero.jsx`). Recommended: under 10MB, muted-friendly footage (it autoplays muted/looped), portrait-ish aspect ratio works best since it fills a 4:5 frame. A placeholder clip ships in this repo — swap it before going live.
- **Contact details, tagline, Instagram, address, hours**: edit `src/data/siteConfig.js` — this is the single source of truth. Every component (Navbar, Footer, Hero, Contact page, WhatsApp button, Lightbox enquiry link, Commission section) imports from here, so updating one file updates the whole site.
- **Artworks**: edit `src/data/artworks.js` — see the quick-swap guide in the comment at the top of that file, and `src/assets/images/README.md`, for replacing Unsplash placeholder URLs with your own photographed artwork.
- **Testimonials / process / stats**: edit `src/data/content.js`.
- **Studio map**: update the embedded OpenStreetMap iframe `bbox` parameter in `src/pages/Contact.jsx` to pin the exact studio location.
- **Colors / fonts**: edit `tailwind.config.js` (`theme.extend.colors`, `theme.extend.fontFamily`) and the Google Fonts `@import` at the top of `src/index.css`.

## 🔌 How the Contact Form Works

`src/components/ContactForm.jsx` does **not** send email. On submit, it validates the fields, formats them into a message, and opens WhatsApp (`wa.me`) in a new tab with that message pre-filled, addressed to `siteConfig.whatsappNumber`. The visitor just has to hit send inside WhatsApp.

- No backend, API key, or `.env` file required — it's a client-side `window.open()` call.
- To change which number receives these enquiries, edit `whatsappNumber` in `src/data/siteConfig.js`.
- If you'd prefer real email instead (or in addition), connect `handleSubmit` in `ContactForm.jsx` to a backend endpoint or a service like Formspree / EmailJS — see the note on environment variables below.

## 🔐 Environment Variables

This project does **not** need a `.env` file. There are no API keys, secrets, or server-side credentials anywhere — the contact form opens WhatsApp client-side, and all content lives in plain JS data files that are visible in the browser by design.

You'd only need a `.env` file if you later add something that requires a private key, such as:
- Sending real email via Formspree, EmailJS, Resend, etc. (the API key)
- A Google Maps API key (if you swap the OpenStreetMap embed for Google Maps)
- Analytics (Google Analytics, Plausible, etc.)
- A payment gateway

If you add any of these, create a `.env` file at the project root, prefix variables with `VITE_` (e.g. `VITE_FORMSPREE_ID=...`) so Vite exposes them to the client, and access them in code via `import.meta.env.VITE_FORMSPREE_ID`. Never put a *secret* server-side key in a `VITE_`-prefixed variable — anything prefixed that way is bundled into the public JS and visible to anyone.

## 📝 Notes

- Artwork images currently use Unsplash placeholder photography — swap these for real photographs of Sandeep's artwork before going live.
- Lucide's icon set no longer ships trademarked brand glyphs (Instagram/Facebook/YouTube), so the footer's social icons use neutral stand-ins — swap in your own SVG brand marks if you need pixel-exact logos.
- All animations respect `prefers-reduced-motion`.
