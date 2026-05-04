# yasin wafazada — portfolio

> personal portfolio site for a full-stack engineer based in melbourne, australia.
> built with astro, hand-written css, and a terminal-inspired aesthetic.

**live:** [yasinwafazada.vercel.app](https://yasinwafazada.vercel.app/) · **stack:** astro 4 · typescript · vanilla css

---

## about

A static, zero-JavaScript-by-default portfolio designed around a coding/CLI
motif — JetBrains Mono for accents, an OLED dark palette, and a `// 01 about`
section-numbering pattern lifted from source-file conventions.

The site favours fast load, accessible defaults, and a build-first tone over
animation-heavy marketing-page tropes.

## sections

- **hero** — name, role, current build (ASC client project).
- **about** — background, stack, "at a glance" portrait card.
- **projects** — featured work, pulled from [`src/data/projects.ts`](src/data/projects.ts).
- **skills** — categorised tech stack (frontend / backend / data & infra).
- **contact** — direct mailto + socials.

## tech

| Layer        | Choice                                            |
| ------------ | ------------------------------------------------- |
| Framework    | [Astro 4](https://astro.build) (static SSG)       |
| Language     | TypeScript                                        |
| Styling      | Hand-written CSS, custom design tokens            |
| Fonts        | Inter (body) · JetBrains Mono (accents)           |
| Hosting      | Static — deployable to Vercel, Netlify, Cloudflare Pages |

No CSS framework, no component library, no client-side router. The only
JavaScript shipped is the mobile nav toggle (~40 lines).

## accessibility

- WCAG AA contrast across the dark palette
- Visible `:focus-visible` rings on all interactive elements
- 44×44px minimum touch targets
- `prefers-reduced-motion` respected (pulse + transforms suspend)
- Semantic landmarks, ARIA labels on icon-only controls
- Mobile nav with proper `aria-expanded` / `aria-controls`

## getting started

```sh
git clone https://github.com/yaisnw/Portfolio.git
cd Portfolio
npm install
npm run dev          # http://localhost:4321
```

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start dev server                      |
| `npm run build`   | Build static site to `./dist/`        |
| `npm run preview` | Serve the production build locally    |

Requires Node `>=18.17.1`.

## structure

```
src/
├── components/       # Astro components (Hero, About, Projects, Skills, Contact, Nav, Footer)
├── data/
│   └── projects.ts   # Project list — edit here to add/remove
├── layouts/          # Base HTML shell
├── pages/
│   └── index.astro   # The single-page entry
└── styles/
    └── global.css    # Design tokens, base styles, grid background
```

To add a project, append to [`src/data/projects.ts`](src/data/projects.ts).
Set `featured: true` to give it the green accent treatment.

## design tokens

Defined in [`src/styles/global.css`](src/styles/global.css):

```css
--bg:        #0a0e14   /* near-black canvas       */
--bg-alt:    #0f141c   /* card surface            */
--accent:    #7ee787   /* primary CTA / highlights */
--accent-alt:#58a6ff   /* link colour             */
--fg:        #e6edf3   /* primary text            */
--fg-muted:  #8b98a9   /* secondary text          */
```

## license

MIT — feel free to fork, but please swap out the personal content (name,
projects, copy) for your own.

---

built by [@yaisnw](https://github.com/yaisnw) · ✉️ wafazadayasin@gmail.com
