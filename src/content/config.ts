import { z, defineCollection } from "astro:content";

const BlogPosts = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string().trim(),
    author: z.string().trim(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishDate: z.string().transform((str) =>
      new Date(str).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    ),
  }),
});

const Projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().trim(),
    company: z.string().trim(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    publishDate: z.string().transform((str) =>
      new Date(str).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    ),
  }),
});

export const collections = {
  blog: BlogPosts,
  project: Projects,
};
