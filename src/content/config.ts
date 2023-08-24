import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const portfolioSchema = z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    heroImage: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type PortfolioSchema = z.infer<typeof portfolioSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const portfolioCollection = defineCollection({ schema: portfolioSchema });

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};
