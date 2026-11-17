import fs from 'node:fs'
import path from 'node:path'

export type PostMeta = {
  title: string
  date: string // YYYY-MM-DD
  summary?: string
  image?: string
  draft?: boolean
}

export type Post = { slug: string; meta: PostMeta; body: string }

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

// Frontmatter is flat `key: value` pairs, so a tiny parser beats a YAML dep.
function parse(raw: string): { meta: PostMeta; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) throw new Error('Post is missing frontmatter')
  const meta: Record<string, string | boolean> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    let value = line.slice(i + 1).trim().replace(/^(['"])(.*)\1$/, '$2')
    meta[key] = value === 'true' ? true : value === 'false' ? false : value
  }
  return { meta: meta as unknown as PostMeta, body: raw.slice(match[0].length) }
}

export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const showDrafts = process.env.NODE_ENV === 'development'
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const { meta, body } = parse(fs.readFileSync(path.join(POSTS_DIR, file), 'utf8'))
      return { slug: file.replace(/\.mdx$/, ''), meta, body }
    })
    .filter((post) => showDrafts || !post.meta.draft)
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date))
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
