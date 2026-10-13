import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    /** The one full-color element on the page. */
    color: z.string(),
    status: z.enum(['live', 'soon', 'writeup']),
    platform: z.string(),
    order: z.number(),
    year: z.number().optional(),
    stack: z.array(z.string()),
    role: z.string(),
    timeline: z.string().optional(),
    links: z
      .object({
        appStore: z.string().optional(),
        playStore: z.string().optional(),
        download: z.string().optional(),
        writeup: z.string().optional(),
        site: z.string().optional(),
        source: z.string().optional(),
      })
      .default({}),
    /** Screenshot labels, rendered as colored placeholders until real images land. */
    screens: z.array(z.string()).default([]),
    video: z.string().optional(),
    next: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Where the post was first published, when cross-posted. */
    canonical: z.string().optional(),
    canonicalLabel: z.string().optional(),
    youtube: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
