import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articlesCollection = defineCollection({
   loader: glob({
      base: "./src/content/articles",
      pattern: "**/*.{md,mdx}",
   }),
   schema: ({ image }) =>
      z.object({
         title: z.string(),
         description: z.string(),
         pubDate: z.string(),
         tags: z.array(z.string()),
         image: image(),
      }),
});

export const collections = {
   articles: articlesCollection,
};
