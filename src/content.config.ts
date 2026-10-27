import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro:schema";

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    company: z.string().optional(),
    title: z.string(),
    description: z.string(),
    logo: image().optional(),
    imgs: z.object({
      main: image(),
      others: z.array(image()).optional(),
    }),
    links: z.object({
      demo: z.string().url().or(z.literal("")).optional(),
      github: z.string().url().or(z.literal("")).optional(),
    }),
    techstack: z.array(z.string()),
    personal: z.boolean(),
    approach: z.string().optional(),
    pubDate: z.coerce.date(),
    active: z.boolean(),
    deliverables: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        img: image().optional(),
        features: z.array(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
          })
        ).optional(),
        metrics: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
            icon: z.string().optional(),
          })
        ).optional(),
      })
    ).min(1).max(5),
  }),
});

export const collections = { projects };
