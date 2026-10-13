export const site = {
  name: 'Sean Barker',
  title: 'Sean Barker · Senior Product Engineer',
  description:
    'Senior Product Engineer in Fort Wayne, Indiana. Mobile apps, web, backend, and the AI glue in between. If it needs to exist, I can build it.',
  url: 'https://seanbarker.dev',
  email: 'theseanbarker@gmail.com',
  location: 'Fort Wayne, IN',
  role: 'Senior Product Engineer',
  employer: 'Infinite Red',
  studio: 'Summit Labs',
  social: {
    github: 'https://github.com/seanbarker182',
    linkedin: 'https://www.linkedin.com/in/sean-barker/',
    twitter: 'https://twitter.com/seanbarkerdev',
  },
  kids: [
    { born: '2021-01-20' },
    { born: '2023-11-19' },
  ],
};

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
];

/** Whole years since an ISO date, computed at render time. */
export function yearsSince(iso: string, now = new Date()): number {
  const b = new Date(iso);
  let a = now.getFullYear() - b.getFullYear();
  if (now.getMonth() < b.getMonth() || (now.getMonth() === b.getMonth() && now.getDate() < b.getDate())) a--;
  return a;
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
