import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
  projects: defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '*.md' }),
    schema: z.object({
      title: z.string(),
      order: z.number().int(),
      offeredServices: z.string().array(),
      year: z.union([z.string(), z.number().int()]),
      location: z.string(),
      thumbnail: z.string(),
      video: z.string(),
    }),
  }),
};
