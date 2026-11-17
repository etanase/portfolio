import type { Metadata } from 'next'
import { ProjectList } from 'app/components/project-list'
import { projects } from 'app/data'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things Eduard Tanase has built.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-10 text-2xl font-semibold tracking-tight">Projects</h1>
      <ProjectList projects={projects} />
    </section>
  )
}
