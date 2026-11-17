import Link from 'next/link'
import { getPosts } from 'app/blog/utils'

export function Navbar() {
  const items = [
    { href: '/', name: 'Home' },
    { href: '/projects', name: 'Projects' },
    // The blog link appears once there is at least one published post.
    ...(getPosts().length ? [{ href: '/blog', name: 'Blog' }] : []),
  ]

  return (
    <nav className="mb-14 flex gap-5 text-neutral-600 dark:text-neutral-400">
      {items.map(({ href, name }) => (
        <Link
          key={href}
          href={href}
          className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
