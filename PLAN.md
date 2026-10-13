# seanbarker.dev rewrite plan

Decided 2026-10-13 after a planning interview. Phases: plan (this doc), design (Claude Design), build, deploy.

## Positioning

- Sean Barker, Senior Product Engineer. The pitch is "I can do it all": product thinking, mobile, web, backend, and the AI glue in between.
- Audience is mixed, with freelance and contract clients first and recruiters and peers second.
- The single call to action is "reach out". No booking language, no availability badge, no rates.
- Bio facts: Staff Software Engineer at Infinite Red. Lives in the Fort Wayne, Indiana area.

## Content inventory

All five projects are solo builds and none are affiliated with Infinite Red.

| Project | Status | Links |
| --- | --- | --- |
| JAM Center | Launching soon on App Store and Play Store | "Coming soon" sticker until store links exist |
| Abrupt (quit nicotine tracker, health focused) | Launching soon on App Store and Play Store | "Coming soon" sticker until store links exist |
| Polaris dashboard (real-time CAN bus, Nitro Modules, Skia) | Not live, written up | [Medium post](https://shift.infinite.red/beyond-60-fps-building-a-real-time-can-bus-dashboard-with-nitro-modules-and-skia-d0f564f8d239), [YouTube video](https://www.youtube.com/watch?v=lnjeE42ZZV4) |
| Big Fort Fest | Live on App Store and Play Store | Store badges |
| Threadyard (macOS app for monitoring agents) | Source at `~/Developer/semaphore`, still bug squashing, no public download yet | "Coming soon" sticker, DMG via GitHub Releases once ready |

Assets: Sean has or will collect screenshots, recordings, and logos. The case-study template must look good with one hero image and prose so thin projects still hold up.

### Blog

- Launch posts: Polaris (republished in full with a canonical link to Medium, video embedded from YouTube with a privacy-enhanced lite embed) and "getting apps ready for the iPhone Duo" (published here first, cross-posted later).
- Heavy cross-posting is expected. Every post carries an optional canonical URL in frontmatter.
- RSS feed, tags, reading time. No comments.

### Resume

- A `/resume` page rendered from MDX data with a print stylesheet so "Save as PDF" works. No separate PDF to keep in sync.
- Source material is Sean's LinkedIn profile (https://www.linkedin.com/in/sean-barker/). Pull it during the build phase and have Sean review.

### Personality ammo

Use freely in copy, stickers, and illustrations; nothing is required.

- Two kids: born 2021-01-20 and 2023-11-19. Ages are computed at runtime so they never go stale.
- Fort Wayne, Indiana.
- Electronics tinkering: ESP32, LoRa, home servers.
- Home automation, mostly Home Assistant.
- "I can do that" philosophy: constant home projects and building things for people in the community.
- Uses AI to over-engineer small personal problems, for example a personal financial advisor he can text to approve purchases and set the monthly budget.
- Family time above everything.
- Only sports: the Blackhawks.

## Design direction

Playful, hand-drawn, inspired by Joshua Vides: thick black outlines on flat white, no shading, the real world rendered as a sketch.

Rules that hold across every variant:

- Mono base. One accent color for interactive states (links, hover, focus). App screenshots and recordings are the only full-color elements, so the sketch is Sean and the color is what he shipped.
- Light and dark, following system preference. Dark inverts to white lines on black.
- Body text and code blocks are always plain and readable, whatever the surrounding treatment.
- Outlines on UI chrome (cards, buttons, inputs, device frames) are procedural: rough.js or SVG filters wobble crisp shapes so nothing needs hand drawing and new projects never need new art.
- A small set of generated SVG illustrations for the home hero and about page.
- Type: a hand-lettered display face (candidates: Caveat, Architects Daughter, Gaegu) paired with a clean sans for body.
- Motion: draw-on reveals the first time a section enters view, restrained hover wobble, view transitions between pages. `prefers-reduced-motion` disables all of it.
- One small easter egg, chosen during design, in the spirit of the old click-five-times trick.

### Design phase brief

Claude Design explores three variants of the same system. Each variant is delivered as a home page and one case-study page so density gets tested, not just the hero.

1. Full immersion. Every surface, button, card, and frame carries the outline treatment. The whole site is the illustration.
2. Clean chrome. Modern layout and components; only the hero and section illustrations get the Vides treatment.
3. Outlined components. Cards, buttons, and frames are outlined, but layout and type are conventional.

Pick one after seeing all three. No wildcard outside the Vides idea.

### Design phase outcome (2026-10-13)

Explored three variants on the canvas at https://claude.ai/artifact/Cwi7gH32jfYJXWVEk6aw3d and chose a blend: A's hero, B's illustrations, C's components. The canvas now holds the refined direction as four pages: home, case study, blog post, about.

- Accent is highlighter yellow (#fbbf24). It fills buttons and stickers with ink text and acts as a marker highlight behind words. Link text uses amber #b45309 in light mode and the yellow itself in dark mode, for contrast.
- Wordmark is the outlined smiley from variant B next to "Sean Barker". The same smiley is the favicon, exported to `design/` as `favicon.svg` (with a dark-mode media query), `favicon-light.svg`, and PNGs at 32, 180, and 512.
- Wobble filter applies only to stickers, the smiley, and illustrations. Never to body text, inputs, or code.
- Caveat for the hero headline, section labels, stickers, and big numbers. Figtree for everything else. JetBrains Mono for code and meta.
- Every card, button, input, and device frame carries a hand-drawn border using three rotated radius variants. Cards tilt by about half a degree.
- One illustration per top-level page: workbench on home, house on about, a festival scene on the Big Fort Fest case study. Each case study gets its own scene.
- "Solo build" is mentioned once, in the role line of each case study, not as a badge.

## Structure

Top nav: Work, Blog, About, Resume, Contact. Five is the ceiling; adding a page means removing one.

Home page order: hero, selected work, blog teasers, about blurb, contact.

Case-study template:

1. Hero with store badges, download link, or "Coming soon" sticker
2. The problem
3. Role and stack
4. The build, prose with screenshots and video
5. Outcome
6. Links

Contact form:

- Fields: name, email, project type select (new app, existing app help, consulting, other), message, and a second open text area for anything else.
- Delivery: Resend to Sean's Gmail with reply-to set to the sender.
- Spam: Cloudflare Turnstile plus a honeypot field.
- Sean owns the Resend and Cloudflare accounts. Key setup is walked through when the form is wired.

## Stack

- Astro 5 with content collections for projects and posts, MDX for content.
- React islands only where interactivity is real (contact form, any animated hero).
- Tailwind 4.
- View transitions.
- Build-time OG images in the site style for every page.
- RSS feed and sitemap.
- Vercel Analytics.
- Deployed on Vercel at seanbarker.dev, unchanged.

## Delivery

- Rewrite in place in this repo on a `rewrite` branch. The first commit wipes the old Next.js tree so nothing leaks into the new structure. History survives.
- Vercel keeps serving `master` until the branch merges, so there is no downtime.
- The old `/house` gallery and `/api/ha/announce` doorbell route are deleted, not migrated.

## Open items for later phases

- Collect project assets (screenshots, recordings, logos, store links as they go live).
- Pull LinkedIn history for the resume and have Sean review.
- Finish Threadyard bug squashing, cut a GitHub Release, and swap the sticker for a download link.
- Create Resend and Cloudflare Turnstile keys and add them as Vercel environment variables.
