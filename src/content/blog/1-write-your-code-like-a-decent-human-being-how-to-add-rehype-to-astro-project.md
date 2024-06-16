---
title: Show your code like a decent human being – how to add Rehype to Astro project
excerpt: ""
publishDate: "June 16 2024"
isFeatured: true
tags:
  - Rehype
  - Astro
  - Presentation
  - Code
seo:
  image:
    src: "/post-14.jpg"
    alt: Wavy lines
---

Have you ever looked at a block of code and wanted to gauge your freaking eyes of

Like, uhhh go away you ugly monster:

No? Yeah, me neither. Because I've been using `rehype-pretty-code`, cause I'm not an idiot.

If you're still presenting your code like an ape with just the basic styling, than I'm sorry – you're an idiot.

BUT, worry no more, cause today I'll show you how with just couple line of code you can stop being one (an idiot, I mean).

## Introducing Rehype

The hype with Rehype (I know, genius) is understandable – with just a few line of code you can present your code like Picasso (before that Abstraction bullshit).

## Let's make your code look pretty!

1. Install the plugin

   `npm install rehype-pretty-code shiki` (the library is powered by `shiki` syntax highlighter)

2. Add the plugin to your `astro.config.mjs` file

```js title="yoo" showLineNumbers {10}
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[rehypePrettyCode, {}]],
  },
});
```
