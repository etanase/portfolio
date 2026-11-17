import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Gallery } from 'app/components/gallery'
import { MDX } from 'app/components/mdx'
import { baseUrl, projects } from 'app/data'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

// Optional long-form write-up: content/projects/<slug>.mdx
function getWriteup(slug: string) {
  const file = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  const image = project.cover ?? project.images?.[0]
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${baseUrl}/projects/${slug}`,
      images: image ? [{ url: image.src }] : undefined,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()
  const writeup = getWriteup(slug)

  return (
    <article>
      <Link
        href="/projects"
        className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        ← Projects
      </Link>

      <h1 className="mt-6 text-2xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-1 text-sm text-neutral-500">
        {project.year} · {project.stack}
      </p>

      <p className="mt-6">{project.description}</p>

      {project.links && (
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
          {project.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="link">
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      )}

      {project.video && (
        <video
          src={project.video.src}
          poster={project.video.poster}
          controls
          muted
          playsInline
          preload="metadata"
          className="mt-8 w-full rounded-md border border-neutral-200 dark:border-neutral-800"
        />
      )}

      {project.images && (
        <div className="mt-8">
          <Gallery images={project.images} />
        </div>
      )}

      {writeup && (
        <div className="prose">
          <MDX source={writeup} />
        </div>
      )}
    </article>
  )
}
