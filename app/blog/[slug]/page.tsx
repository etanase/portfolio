import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDX } from 'app/components/mdx'
import { baseUrl } from 'app/data'
import { formatDate, getPosts } from '../utils'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPosts().find((p) => p.slug === slug)
  if (!post) return {}
  const { title, summary, date, image } = post.meta
  const ogImage = image ?? `/og?title=${encodeURIComponent(title)}`
  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime: date,
      url: `${baseUrl}/blog/${slug}`,
      images: [{ url: ogImage }],
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getPosts().find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <article>
      <h1 className="title text-2xl font-semibold tracking-tight">{post.meta.title}</h1>
      <p className="mt-2 text-sm text-neutral-500">{formatDate(post.meta.date)}</p>
      {post.meta.image && (
        <img src={post.meta.image} alt="" className="mt-8 w-full rounded-md" />
      )}
      <div className="prose">
        <MDX source={post.body} />
      </div>
    </article>
  )
}
