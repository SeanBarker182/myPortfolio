# seanbarker.dev

Personal site for Sean Barker, Senior Product Engineer. Astro 7, React islands, Tailwind 4, MDX content collections, deployed on Vercel.

The design direction and decisions live in [PLAN.md](./PLAN.md).

## Develop

```bash
npm install
cp .env.example .env   # optional: contact form keys
npm run dev            # http://localhost:4321
npm run build          # production build into dist/
npm run check          # type check
```

## Content

- `src/content/projects/*.mdx` — one case study per project. Frontmatter drives the card, hero, facts strip, store links, and OG image. `screens` are labels rendered as colored placeholders until real screenshots are added through the `Shot` component's `src` prop.
- `src/content/posts/*.mdx` — blog posts. Set `canonical` and `canonicalLabel` when a post was first published elsewhere. `draft: true` hides a post from production builds and the feed.
- `src/data/site.ts` — name, role, socials, kids' birthdates (ages are computed at render time and corrected in the browser).
- `src/data/resume.ts` — the resume page's data.

## Design system

Ink on paper, inspired by Joshua Vides. See `src/styles/global.css` for the tokens and component classes:

- `hd`, `hd2`, `hd3` — hand-drawn borders, rotate them across siblings.
- `sticker`, `sticker-accent`, `sticker-sm` — Caveat pills.
- `btn`, `btn-primary`, `field`, `card`, `phone`, `mac`, `shot`, `prose`.
- `wob` — the SVG wobble filter. Only for stickers, the smiley, and illustrations.
- `hl` — highlighter stroke behind text.

Illustrations are inline SVG components in `src/components/illustrations/`.

## Contact form

`src/components/ContactForm.tsx` posts to `src/pages/api/contact.ts`, an on-demand Vercel function. It checks a honeypot field, verifies Cloudflare Turnstile, and sends through Resend. Without keys configured it logs submissions in dev and refuses them in production. Environment variables are listed in `.env.example`.

## OG images

`src/pages/og/[...route].png.ts` renders a 1200×630 card per page at build time with satori. Fonts for it are static TTFs in `src/assets/fonts/` (satori cannot read variable fonts).

## Favicon

`public/favicon.svg` inverts for dark browser chrome. The PNG sizes and the source SVGs are in `design/`.
