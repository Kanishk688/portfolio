import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "projects" = tumhaare saare illustration projects ka group.
// loader = src/content/projects/ ke andar har .md file = ek project.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),

  // schema = har project me ye fields HONE chahiye (rules).
  schema: z.object({
    title: z.string(),                          // project ka naam
    summary: z.string(),                        // 1-2 line description
    cover: z.string(),                          // main image ka path, e.g. /work/xyz.jpg
    gallery: z.array(z.string()).default([]),   // baaki images ki list
    tags: z.array(z.string()).default([]),      // Textbook, Grade 4, Science...
    date: z.date(),                             // kab banaya
    featured: z.boolean().default(false),       // home page pe dikhana hai?
  }),
});

export const collections = { projects };
