/**
 * Resume data, sourced from LinkedIn on 2026-10-13. Anything in [brackets]
 * is still missing from the profile and needs Sean's input.
 */
import type { LogoKey } from '@/components/logos/CompanyLogo.astro';

export const resume = {
  /** Career start, used for the "N years" copy on the about page. */
  careerStart: '2020-02-01',
  summary:
    'Product-minded software engineer specializing in React Native, Expo, and high-performance mobile applications. I help clients build and scale world-class mobile experiences at Infinite Red, and run Summit Labs to launch independent software and hardware products. I enjoy the tough architectural problems, but the focus is always on shipping a product that actually solves the user\'s problem.',
  experience: <Array<{ title: string; company: string; logo: LogoKey; location: string; start: string; end: string; bullets: string[] }>>[
    {
      title: 'Staff Software Engineer',
      company: 'Infinite Red',
      logo: 'infinite-red',
      location: 'Remote · Fort Wayne, IN',
      start: 'Aug 2025',
      end: 'Present',
      bullets: [
        'Help clients build and scale production React Native and Expo apps at one of the best-known React Native consultancies.',
        'Contributor to many open source products such as Ignite & Reactotron',
      ],
    },
    {
      title: 'Founder',
      company: 'Summit Labs',
      logo: 'summit-labs',
      location: 'Fort Wayne, IN',
      start: 'Feb 2026',
      end: 'Present',
      bullets: [
        'Independent studio for software and hardware products: JAM Center, Abrupt, Big Fort Fest, Summit Axis, and Threadyard.',
        'Own the whole thing on each: product, design, mobile and web builds, backend, store submission, and support.',
      ],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Reusser',
      logo: 'reusser',
      location: 'Fort Wayne, IN',
      start: 'Feb 2021',
      end: 'Jul 2025',
      bullets: [
        'Built and shipped client web and mobile products with React, React Native, Laravel, Next.js, NestJS, Node, and GraphQL.',
        'Helped lead the agency\'s early LLM work: chat assistants, AI-backed features, and the research that made them production-ready.',
        'Mentored teammates on React and React Native.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Apple',
      logo: 'apple',
      location: 'AppleCare Digital',
      start: 'Feb 2020',
      end: 'Jan 2021',
      bullets: [
        'Front-end development for AppleCare Digital: the online style guide and internal tools used across multiple teams.',
        'Researched frameworks for internal APIs and built a productivity tool that saved the team time and money.',
      ],
    },
  ],
  skills: [
    { group: 'Mobile', items: ['React Native', 'Expo', 'Nitro Modules', 'Skia', 'Reanimated', 'Swift', 'Kotlin'] },
    { group: 'Web', items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Astro', 'Tailwind'] },
    { group: 'Backend', items: ['Node', 'NestJS', 'GraphQL', 'Postgres', 'Serverless'] },
    { group: 'AI and hardware', items: ['LLM agents', 'OpenAI and Claude APIs', 'ESP32', 'LoRa', 'Home Assistant'] },
  ],
  /** Kept short on purpose: the self-taught story carries the site, the degree just clears HR filters. */
  education: [{ school: 'Ivy Tech Community College', degree: 'A.A.S., Software Development', year: '2021' }],
  certifications: [
    { name: 'CompTIA Project+', issuer: 'CompTIA', year: '2020' },
    { name: 'CompTIA A+', issuer: 'CompTIA', year: '2020' },
    { name: 'Microsoft Technology Associate: Software Development Fundamentals', issuer: 'Microsoft', year: '2020' },
    { name: 'HTML5 Application Development Fundamentals', issuer: 'Microsoft', year: '2019' },
  ],
  recommendations: [
    {
      from: 'Chuck Waters',
      role: 'Mentor and team lead, Reusser',
      quote:
        'Sean\'s dedication to mastering React and React Native is nothing short of remarkable. He\'s also researched and learned quite a few other technologies such as AI LLMs, AI chat bots, and complex graphing libraries.',
    },
    {
      from: 'Jeffen Mok',
      role: 'Senior Designer, Apple',
      quote:
        'He researched additional frameworks to work with our internal APIs and built out a productivity tool that saved us time and money. He is able to transfer my vision into execution, which I consider to be invaluable.',
    },
  ],
};
