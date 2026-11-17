# Portfolio

Source for [eduardtanase.com](https://www.eduardtanase.com). Next.js 16, Tailwind v4, MDX.

## Editing

- **Content** (experience, research, publications, projects, socials): `app/data.ts`
- **Photo**: `public/images/me.jpg`. Strip EXIF before adding phone photos (they carry GPS).
- **Project images**: `public/images/projects/`, then list them under the project in `app/data.ts`
- **Blog posts**: `content/blog/<slug>.mdx`. See `example.mdx` for frontmatter, images,
  and side-by-side `<Figures>`. Posts with `draft: true` only show in `pnpm dev`.
  The Blog nav link appears once one post is published.

## Resume

`/resume.pdf` is linked from the homepage (nofollow) and sent with an
`X-Robots-Tag: noindex` header (`next.config.ts`). Replace `public/resume.pdf` to update it.

## Email alias

The site currently links a personal address. DNS is on Cloudflare, so Cloudflare Email
Routing can forward e.g. `hi@eduardtanase.com` to it for free; then swap the link in
`app/data.ts`.

## Projects

Each project in `app/data.ts` gets a page at `/projects/<slug>`. It can have `images`,
a `cover` thumbnail, a `video` (file in `public/videos/`), and a longer write-up in
`content/projects/<slug>.mdx`.
