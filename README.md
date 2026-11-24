# suadalam.github.io

My personal website, live at **https://suadalam.github.io**. Built with [Astro](https://astro.build).

One narrow monospace column (JetBrains Mono) over a flock of birds ([Vanta BIRDS](https://www.vantajs.com/?effect=birds) on three.js r134). Organizations and projects show up as small inline badges with their own icon, tinted in their colour. Dark by default, with a light mode toggle in the footer that remembers your choice.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
```

## Deploy

Push to `main`. The GitHub Action in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages in about a minute. You can watch it, or rerun it, from the repo's **Actions** tab.

## Edit the content

Everything the page says comes from `src/data/profile.ts`.

- **A bullet** is a list of parts: plain strings, badges and highlight chips, e.g. `['Co-founded ', b.lunate, ', a Roblox studio']`.
- **A badge** is defined once in `b` with a label, link, optional icon (`/badges/x.png`, 16px is plenty) and tint colour. Use `darkTint` for colours too dark to read on the black background, and `iconBg` for white-on-transparent icons.
- **A highlight** is `{ hl: 'S27 internships', href: 'mailto:...' }`.
- **The language bar** numbers are static. The comment above `languages` has the `gh` command to recount them.

| File | What it does |
| --- | --- |
| `src/data/profile.ts` | All the text, links, badges and the language bar |
| `src/pages/index.astro` | The page layout and the light/dark toggle |
| `src/components/Line.astro` | Renders one bullet (text, badges, highlights) |
| `src/components/Birds.astro` | The birds background (how many, how faint, their colours) |
| `src/styles/global.css` | Colours for both themes, font, badges |

The birds load after the page text, follow the theme toggle, and are skipped for people who turn on reduced motion (they get the plain background colour).
