import Image from 'next/image'
import Link from 'next/link'
import type { Project } from 'app/data'

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {projects.map((project) => {
        const thumb = project.cover ?? project.images?.[0]
        return (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group flex items-center gap-4 sm:gap-5">
              <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 sm:w-36 dark:border-neutral-800 dark:bg-neutral-900">
                {thumb && (
                  <Image
                    src={thumb.src}
                    alt=""
                    fill
                    sizes="144px"
                    className="object-cover object-top"
                  />
                )}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-neutral-900 underline-offset-4 group-hover:underline dark:text-neutral-100">
                  {project.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">{project.summary}</p>
                <p className="mt-0.5 text-sm text-neutral-500">{project.year}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
