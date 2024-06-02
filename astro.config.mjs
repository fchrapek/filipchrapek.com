import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  site: "https://filipchrapek.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[rehypePrettyCode, {}]],
  },
});
