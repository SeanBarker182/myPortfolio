import satori from 'satori';
import type React from 'react';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

type Fonts = { caveat: ArrayBuffer; caveatBold: ArrayBuffer; figtree: ArrayBuffer; figtreeBold: ArrayBuffer };
let fonts: Fonts | undefined;

// OG routes are prerendered at build time, where cwd is the project root.
// Static (non-variable) instances: satori's font parser can't read variable fonts.
const fontDir = resolve(process.cwd(), 'src/assets/fonts');

async function loadFonts(): Promise<Fonts> {
  if (fonts) return fonts;
  const [caveat, caveatBold, figtree, figtreeBold] = await Promise.all(
    ['Caveat-Regular.ttf', 'Caveat-Bold.ttf', 'Figtree-Regular.ttf', 'Figtree-Bold.ttf'].map((f) => readFile(resolve(fontDir, f))),
  );
  fonts = { caveat: toArrayBuffer(caveat), caveatBold: toArrayBuffer(caveatBold), figtree: toArrayBuffer(figtree), figtreeBold: toArrayBuffer(figtreeBold) };
  return fonts;
}

function toArrayBuffer(b: Buffer): ArrayBuffer {
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;
}

const smiley = (size: number) => ({
  type: 'svg',
  props: {
    width: size,
    height: size,
    viewBox: '0 0 34 34',
    fill: 'none',
    stroke: '#111',
    strokeWidth: 3,
    strokeLinecap: 'round',
    children: [
      { type: 'rect', props: { x: 3, y: 3, width: 28, height: 28, rx: 9, fill: '#fff' } },
      { type: 'path', props: { d: 'M11 21c2 3 10 3 12 0M11 13h.5M22.5 13h.5' } },
    ],
  },
});

export interface OgInput {
  title: string;
  subtitle?: string;
  kicker?: string;
  /** A color swatch, used for project pages so the card carries the app's color. */
  color?: string;
}

/** Renders a 1200×630 PNG in the site's ink-on-paper style. */
export async function renderOg({ title, subtitle, kicker, color }: OgInput): Promise<Buffer> {
  const f = await loadFonts();
  const titleSize = title.length > 48 ? 64 : title.length > 28 ? 80 : 104;
  const tree = {
      type: 'div',
      props: {
        style: {
          position: 'relative',
          boxSizing: 'border-box',
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          padding: 64,
          background: '#fff',
          color: '#111',
          fontFamily: 'Figtree',
          border: '12px solid #111',
          borderRadius: 36,
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 18, fontSize: 32, fontWeight: 700 },
              children: [smiley(56), { type: 'span', props: { children: 'Sean Barker' } }, kicker ? { type: 'span', props: { style: { marginLeft: 12, padding: '4px 18px', border: '4px solid #111', borderRadius: 999, fontFamily: 'Caveat', fontSize: 30, fontWeight: 400, background: '#fbbf24' }, children: kicker } } : null],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: 18, marginTop: 'auto', maxWidth: color ? 820 : 1040 },
              children: [
                { type: 'div', props: { style: { fontFamily: 'Caveat', fontSize: titleSize, lineHeight: 0.95, fontWeight: 700, maxWidth: 1040 }, children: title } },
                subtitle ? { type: 'div', props: { style: { fontSize: 30, lineHeight: 1.35, opacity: 0.85, maxWidth: 980 }, children: subtitle } } : null,
              ],
            },
          },
          color
            ? { type: 'div', props: { style: { position: 'absolute', right: 64, top: 64, width: 150, height: 300, border: '8px solid #111', borderRadius: 36, background: color } } }
            : { type: 'div', props: { style: { position: 'absolute', right: 64, top: 82, height: 18, width: 220, background: '#fbbf24', borderRadius: 4 } } },
        ],
      },
    };
  // Satori takes a React-element-shaped object tree; it is not typed as one.
  const svg = await satori(tree as unknown as React.ReactNode, {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Caveat', data: f.caveat, weight: 400, style: 'normal' },
        { name: 'Caveat', data: f.caveatBold, weight: 700, style: 'normal' },
        { name: 'Figtree', data: f.figtree, weight: 400, style: 'normal' },
        { name: 'Figtree', data: f.figtreeBold, weight: 700, style: 'normal' },
      ],
    });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return Buffer.from(png);
}
