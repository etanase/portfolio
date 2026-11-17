import type { Metadata } from 'next'
import { PostList } from 'app/components/post-list'
import { getPosts } from './utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing by Eduard Tanase.',
}

export default function Page() {
  const posts = getPosts()
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">Blog</h1>
      {posts.length ? (
        <PostList posts={posts} />
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400">Nothing here yet.</p>
      )}
    </section>
  )
}
