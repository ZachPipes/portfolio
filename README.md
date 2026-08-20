# Portfolio

### TODO
- Finish the home page
- Flesh out the résumé page more
- Add a "more to come" blog ending

## Blog Posts

Posts live in `data/posts/` as Markdown files with frontmatter. Drop a new `.md` file into that folder, and it shows up on `/blog` automatically — no code changes needed.

Example post:

````md
---
title: "Hello, World"
date: "2026-01-01T09:00"
excerpt: "The first post on this blog, and a quick look at how new posts get added."
---

This is an example post. Every post starts with a **frontmatter** block (the part between the `---` lines) that sets the title, date, and excerpt. Everything after that is the body, written in regular Markdown:

- Bullet points
- **Bold** and _italic_ text
- [Links](https://nextjs.org)
- `inline code`

```js
// and fenced code blocks
console.log("plug and play");
```

![Example Image](/images/hello-world/example.png)
````

A few notes:
- The filename (minus `.md`) becomes the post's slug/URL — `data/posts/my-post.md` → `/blog/my-post`.
- `date` accepts either `"YYYY-MM-DD"` or `"YYYY-MM-DDTHH:mm"` (add the time if you need to disambiguate same-day posts) — keep it quoted so it stays a plain string.
- Images referenced in a post need to live in `public/` (e.g. `public/images/...`) and be linked with a root-relative path like `/images/...` — not a path relative to `data/posts/`.
