import { baseUrl, projects } from './data'
import { getPosts } from './blog/utils'

export default function sitemap() {
  const today = new Date().toISOString().split('T')[0]
  const posts = getPosts()

  const routes = ['', '/projects', ...(posts.length ? ['/blog'] : [])].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
  }))

  const blogs = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.meta.date,
  }))

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: today,
  }))

  return [...routes, ...projectPages, ...blogs]
}
