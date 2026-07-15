# Tommy Shelburne Portfolio

My personal portfolio site, live at [shelburne.dev](https://shelburne.dev).

## Tech Stack

- **React 19** with TypeScript
- **Vite** for builds
- **Tailwind CSS v4** (CSS-first config, no tailwind.config.js)
- **React Router v7**
- **Framer Motion** for animations
- **Formspree** for contact form handling
- Deployed to **Vercel** (push to `main` deploys production)

## Features

- Editorial dark design with custom SVG cover art for each project
- Fully responsive across mobile, tablet, and desktop
- Scroll-triggered entrance animations
- Contact form with server-side handling (no backend required)

## Development

```bash
npm run dev        # Dev server at http://localhost:5173
npm run build      # Type-check + production build
npm run lint       # ESLint
```

Project content lives in `src/data/projects.ts`; bio and experience in `src/pages/About.tsx`.
