# Ishan Arora — Developer Portfolio

A frontend-focused fullstack developer's personal portfolio: a fast, animated, fully
responsive single-page app built with **React + Vite**, with motion powered by **GSAP**
and **Framer Motion**, content driven by a **Sanity** CMS, and a working contact form
via **EmailJS**.

🔗 **Live:** https://www.ishandev.com &nbsp;·&nbsp; ✉️ aroraishan309@gmail.com &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/ishan-arora-2000/)

> _Replace the live URL above with your deployed link, and add a screenshot/GIF below._
>
> `![Portfolio preview](./public/preview.png)`

---

## ✨ Features

- **Animated, interactive UI** — page transitions (Framer Motion), scroll-driven and
  timeline animations (GSAP), smooth scrolling (Locomotive Scroll), and a custom cursor follower.
- **CMS-driven projects** — project content is fetched from a Sanity backend, so the
  work section updates without code changes.
- **Searchable / filterable work** — projects can be searched and filtered by tag, with
  paginated results.
- **Dedicated mobile experience** — purpose-built mobile pages rather than a single
  squeezed layout.
- **Working contact form** — sends email directly from the client via EmailJS.
- **State management** — global app state handled with Redux Toolkit.

## 🛠 Tech Stack

| Area | Tech |
|------|------|
| Framework | React 18, Vite |
| Routing | React Router |
| State | Redux Toolkit, React-Redux |
| Animation | GSAP, Framer Motion, Locomotive Scroll, Splide |
| UI | MUI, React Icons, Font Awesome |
| Content | Sanity CMS |
| Forms | EmailJS |
| Deployment | Vercel |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env
#   then fill in your EmailJS + Sanity values in .env

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build && npm run preview
```

### Environment variables

This project reads configuration from a `.env` file (see `.env.example`). All variables
are prefixed with `VITE_` so Vite exposes them to the client:

| Variable | Purpose |
|----------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service id (contact form) |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template id |
| `VITE_EMAILJS_TEMPLATE_ID_2` | Second EmailJS template id |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_SANITY_PROJECT_ID` | Sanity project id (project content + images) |

`.env` is gitignored — never commit real credentials.

## 📦 Deployment

Deployed on **Vercel**. `vercel.json` rewrites all routes to `/` so client-side routing
works on refresh. Set the same `VITE_*` environment variables in your Vercel project
settings.

## 📄 License

[MIT](./LICENSE) © Ishan Arora
