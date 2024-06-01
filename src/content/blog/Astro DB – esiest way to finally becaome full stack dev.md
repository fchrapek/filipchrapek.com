---
title: Astro DB – esiest way to finally become full stack dev?
excerpt: ""
publishDate: "March 17 2024"
isFeatured: true
tags:
  - Astro
  - Astro DB
seo:
  image:
    src: "/post-14.jpg"
    alt: Wavy lines
---

<!-- ![Wavy lines](/post-14.jpg) -->

I've been a fan of Astro for a while now – very approachable with great documentation, perfectly optimized out of the box and the creators seem like a chill, wholesome dudes.

Unfortunately, being caught up with working on different stuff, I haven't really had a chance to dig a bit deeper into Astro.

Hopefully it'll change, because there is a excellent reason to hang out again.

## Astro DB

[Couple days ago Astro launched their own database platform](https://astro.build/blog/astro-db/) which of course came with database management integrated into Astro.

Coming form heavily influenced WordPress environment, usually doing the monolith approach, there is not a really a clear front-end/back-end division so you basically do what has to be done (duh).

Most of the time there is not that many reasons to tweak the default database setup. So I usually think of myself as a more front-end focused. Which also means that dealing with databases it's not something that I would do as a hobby.

But seeing that Astro uses SQL (which is also integral part of WordPress) I've decided to give it a go.

And boy, oh boy, it really is ridiculously easy-to-use.

### Fast, lightweight, and ridiculously easy-to-use

To get the database to run you basically need to:

1. run this astro command (I've switched to `pnpm` recently)

```
pnpm astro add db
```

2. Adjust `db/config.ts` and `db/config.ts` (the db directory should be added when running the command, but somehow it wasn't the case for me – I've just added that manually)

I'm not gonna go through the whole [docs](https://docs.astro.build/en/guides/astro-db/) here, so look it up yourself. But one thing I want to focus on in particular is seeding the database with posts already written in `markdown`, which is what is probably mostly used when dealing with content in Astro.

### Seeding the database
