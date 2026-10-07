# Md. Kamrul Hassan Khan — Portfolio

A modern, professional, single-page portfolio for an Associate Software Engineer.
Built with Angular (latest), standalone components, signals, SCSS, and zero
backend dependencies — all content is driven by a single TypeScript data file.

## Stack

- **Angular 21** (standalone components, modern `@if` / `@for` control flow)
- **TypeScript** in strict mode
- **SCSS** with a token-based design system and CSS custom properties for theming
- **Reactive Forms** for the contact section (frontend-only for now — see *Known limitations*)
- **Scroll-based scroll-spy** for active navigation links, and **IntersectionObserver** for reveal animations
- **No backend** — fully static, deployable to any static host (Netlify, Vercel, GitHub Pages, etc.)

## Project structure

```
src/
├── app/
│   ├── app.ts / app.html / app.scss      ← root shell (navbar + outlet + footer)
│   ├── app.routes.ts                      ← single-page routing
│   ├── app.config.ts                      ← providers (router, scroll restoration)
│   ├── pages/home.page.ts                 ← composes every section in order
│   ├── core/
│   │   ├── constants/portfolio-data.ts    ← ALL content lives here
│   │   ├── models/portfolio.models.ts     ← strict TypeScript contracts
│   │   ├── services/
│   │   │   ├── theme.service.ts           ← signals-based light/dark toggle
│   │   │   └── scroll-spy.service.ts      ← active-section highlight
│   │   └── directives/
│   │       └── reveal-on-scroll.directive.ts
│   ├── shared/components/
│   │   ├── icon/                          ← inline-SVG icon set (`<app-icon name="cloud" />`)
│   │   ├── section-title/
│   │   ├── social-links/                  ← inline-SVG icons (no icon lib needed)
│   │   ├── tech-badge/
│   │   ├── project-card/
│   │   └── timeline-item/
│   ├── layout/
│   │   ├── navbar/                        ← sticky, name wordmark, underline active link, mobile drawer, theme toggle
│   │   └── footer/
│   └── sections/
│       ├── hero/
│       ├── about/
│       ├── skills/
│       ├── experience/
│       ├── education/
│       ├── projects/                      ← with category filter
│       ├── achievements/                      ← professional cards + "Beyond code" list
│       ├── resume-cta/
│       └── contact/                       ← Reactive Forms + success toast
├── assets/
│   ├── scss/
│   │   ├── _variables.scss                ← design tokens
│   │   ├── _mixins.scss
│   │   ├── _animations.scss
│   │   └── _responsive.scss
│   ├── images/
│   │   ├── profile/                       ← profile-avatar.jpg (hero), Profile.jpeg (original)
│   │   ├── projects/                      ← drop project images here
│   │   └── placeholders/                  ← built-in SVG fallbacks
│   └── files/                             ← drop your CV PDF here
├── styles.scss                            ← theme tokens (light + dark) and base
└── index.html
```

## Quick start

```bash
# install dependencies
npm install

# run dev server (auto-reload, http://localhost:4200)
npm start

# production build (output in dist/)
npm run build
```

## Updating content

Everything visible on the site is driven by **one file**:

> `src/app/core/constants/portfolio-data.ts`

Edit that file to update:

- Profile (name, role, summary, contact info, resume path)
- Stats (Years Experience / Projects / Features)
- Quick info cards (About section)
- Social links (GitHub / LinkedIn / Email)
- Skills (grouped by category — keep each to the 4–5 strongest)
- Experience (company, role, duration, description, tech)
- Education (institution, degree, duration, grade)
- Projects (title, description, image path, tech stack, demo / repo / docs links, category)
- Achievements / Highlights (`group: 'professional' | 'beyond'` decides where each one appears)
- Icons are referenced by name (`IconName` in `shared/components/icon/icon.ts`); add new paths there

The strict TypeScript models in `src/app/core/models/portfolio.models.ts` will
catch typos and missing fields at compile time.

## Where to place uploaded files

| What                   | Drop into                                    | Filename                                |
|------------------------|----------------------------------------------|-----------------------------------------|
| Profile photo          | `src/assets/images/profile/`                 | `profile-avatar.jpg` (square, head-and-shoulders crop) |
| Project images         | `src/assets/images/projects/`                | see `src/assets/README.md` for the list |
| CV / Resume PDF        | `src/assets/files/`                          | `Md_Kamrul_Hassan_Khan_CV.pdf`          |

If the profile photo is missing, the UI falls back to a flat SVG monogram in
`assets/images/placeholders/`. If a project image is missing, the project card
simply renders without an image area — no "coming soon" placeholder.

## Design system

The look is deliberately restrained and professional:

- **One accent colour** — blue (`#3b82f6` dark / `#2563eb` light) on neutral
  navy (dark) or white (light). No gradients, glows or emoji icons.
- **Flat surfaces** — thin borders, no hover lift; blue is used only for the key
  detail (links, primary buttons, active nav, one highlight per card).
- **Inter** for text and **JetBrains Mono** for dates/code, loaded via `<link>` in `index.html`.
- Tokens live in `src/styles.scss` (CSS custom properties) and
  `src/assets/scss/_variables.scss` (Sass variables). To re-brand, change
  `--accent-primary` / `--accent-secondary` in both themes.

## Theming

Both **dark** and **light** themes are first-class:

- Toggle in the navbar (sun / moon button).
- Initial theme respects `prefers-color-scheme` on first visit.
- Choice is persisted to `localStorage` under `portfolio:theme`.
- All theme tokens are CSS custom properties in `src/styles.scss`, so swaps
  happen instantly without re-rendering Angular components.

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, `<footer>`)
- Skip-to-content link
- Focus-visible rings on every interactive control
- `aria-label` / `aria-labelledby` / `aria-live` where appropriate
- Respects `prefers-reduced-motion`

## Deploying

The production build (`npm run build`) outputs static files to `dist/Portfolio-new/browser/`.
Deploy that folder to any static host:

- **Netlify / Vercel**: connect the repo and use `npm run build` + `dist/Portfolio-new/browser` as the publish dir.
- **GitHub Pages**: deploy the contents of `dist/Portfolio-new/browser`.
- **Any static server**: `npx http-server dist/Portfolio-new/browser`.

## Known limitations / to do

- **Contact form is frontend-only.** It validates and shows a success message but does
  not send anything. Connect Formspree / EmailJS, or replace it with a `mailto:` link.
- Add the CV PDF (`src/assets/files/Md_Kamrul_Hassan_Khan_CV.pdf`) so *Download CV* works.
- Add project screenshots and real repository links in `portfolio-data.ts`.
- Add `og:image`, a favicon and a canonical URL in `index.html` for link previews.

## Useful Angular commands

```bash
ng generate component sections/new-section --skip-tests
ng build --configuration development   # unminified build for debugging
ng serve --open                         # opens the browser automatically
```
