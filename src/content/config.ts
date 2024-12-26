import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),
      description: z.string(),
      cover: image().optional(),
      coverAlt: z.string(),
      github: z.string().url().optional(),
      prodView: z.string().url().nullable(),
      tools: z.array(z.string()).optional(),
    }),
});

export const collections = { projects };
