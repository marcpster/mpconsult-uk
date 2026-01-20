import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services collection - the 5 core offerings
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    features: z.array(z.string()),
    proof: z.object({
      client: z.string(),
      result: z.string(),
    }).optional(),
  }),
});

// Work/case studies collection
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Blog collection (disabled for launch, but ready)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { services, work, blog };
