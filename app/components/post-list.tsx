import Link from 'next/link'
import { formatDate, type Post } from 'app/blog/utils'

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {posts.map(({ slug, meta }) => (
        <li key={slug}>
          <Link href={`/blog/${slug}`} className="group flex flex-col sm:flex-row sm:gap-6">
            <span className="w-28 shrink-0 text-sm text-neutral-500 tabular-nums sm:pt-0.5">
              {formatDate(meta.date)}
            </span>
            <span>
              <span className="text-neutral-900 underline-offset-4 group-hover:underline dark:text-neutral-100">
                {meta.title}
                {meta.draft && <span className="text-neutral-500"> (draft)</span>}
              </span>
              {meta.summary && (
                <span className="block text-neutral-600 dark:text-neutral-400">{meta.summary}</span>
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
