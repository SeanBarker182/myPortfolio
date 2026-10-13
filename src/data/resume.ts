/**
 * Resume data. Placeholders in [brackets] get filled from LinkedIn during the content pass.
 */
export const resume = {
  summary:
    'Senior Product Engineer who builds the whole thing: product, mobile, web, backend, and the AI glue in between. Staff Software Engineer at Infinite Red.',
  experience: [
    {
      title: 'Staff Software Engineer',
      company: 'Infinite Red',
      location: 'Remote',
      start: '[Year]',
      end: 'Present',
      bullets: ['[What you lead and build there.]', '[A second line on scope or impact.]'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Reusser',
      location: 'Roanoke, IN',
      start: '[Year]',
      end: '[Year]',
      bullets: ['[What you built there.]'],
    },
    {
      title: '[Earlier title]',
      company: '[Earlier company]',
      location: '[City]',
      start: '[Year]',
      end: '[Year]',
      bullets: ['[Pulled from LinkedIn during the build phase.]'],
    },
  ],
  skills: [
    { group: 'Mobile', items: ['React Native', 'Expo', 'Nitro Modules', 'Skia', 'Reanimated', 'Swift', 'Kotlin'] },
    { group: 'Web', items: ['React', 'TypeScript', 'Next.js', 'Astro', 'Tailwind'] },
    { group: 'Backend', items: ['Node', 'Postgres', 'Serverless', 'REST and GraphQL'] },
    { group: 'AI and hardware', items: ['LLM agents', 'ESP32', 'LoRa', 'Home Assistant'] },
  ],
  education: [{ school: '[School]', degree: '[Degree]', year: '[Year]' }],
};
