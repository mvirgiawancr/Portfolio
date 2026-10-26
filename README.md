# Portfolio

Personal portfolio of Moch Virgiawan Caesar Ridollohi, a full-stack developer in Bandung.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, tokens defined in `src/app/globals.css`
- Fonts: Instrument Serif (display) and Archivo (text), loaded through `next/font`

## Layout

- `src/app/page.tsx` home: hero, selected work, background, contact
- `src/app/projects/` work index and the per-project pages
- `src/data/projects.ts` all project content
- `src/data/site.ts` name, links, stack and background entries

## The hero still

`public/hero/dawn.jpg` is rendered from `art/dawn.html`, a layered SVG scene whose ridgelines come from seeded midpoint displacement, so every render is identical. To change it, edit the HTML, serve the repo locally, and screenshot it at 2560x1440:

```
python -m http.server 4321
# then open http://127.0.0.1:4321/art/dawn.html at 2560x1440 and save a JPEG to public/hero/dawn.jpg
```

## Run

```
npm install
npm run dev
npm run build
```
