import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg, type OgInput } from '@/lib/og';
import { site } from '@/data/site';

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getCollection('projects');
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const pages: { route: string; og: OgInput }[] = [
    { route: 'home', og: { title: 'I build the whole thing.', subtitle: site.description, kicker: 'senior product engineer' } },
    { route: 'work', og: { title: 'Things I shipped', subtitle: 'Product through store submission.', kicker: 'work' } },
    { route: 'blog', og: { title: 'Notes from the bench', subtitle: 'React Native, performance, shipping apps.', kicker: 'blog' } },
    { route: 'about', og: { title: 'Someone said it couldn\'t be done.', subtitle: 'Dad, tinkerer, Fort Wayne.', kicker: 'about' } },
    { route: 'resume', og: { title: 'Resume', subtitle: `${site.role} · ${site.location}`, kicker: 'resume' } },
    ...projects.map((p) => ({ route: `work/${p.id}`, og: { title: p.data.title, subtitle: p.data.tagline, kicker: p.data.status === 'soon' ? 'coming soon' : 'case study', color: p.data.color } })),
    ...posts.map((p) => ({ route: `blog/${p.id}`, og: { title: p.data.title, subtitle: p.data.description, kicker: 'blog' } })),
  ];
  return pages.map((p) => ({ params: { route: p.route }, props: { og: p.og } }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props.og as OgInput);
  return new Response(new Uint8Array(png), { headers: { 'content-type': 'image/png', 'cache-control': 'public, max-age=31536000, immutable' } });
};
