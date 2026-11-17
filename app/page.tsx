import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'
import { EntryList } from './components/entry'
import { PostList } from './components/post-list'
import { ProjectList } from './components/project-list'
import { Publications } from './components/publications'
import { Section } from './components/section'
import { Socials } from './components/socials'
import { getPosts } from './blog/utils'
import { education, experience, involvement, projects, research, site } from './data'

export default function Page() {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), 'public', site.photo))
  const posts = getPosts().slice(0, 3)
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <header className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{site.heading}</h1>
          <p className="mt-3">
            Hi, I&apos;m a Romanian-American CS master&apos;s student at Stanford. I like
            low-level development, ML research, and computational neuroscience.
          </p>
          <div className="mt-5">
            <Socials />
          </div>
        </div>
        {hasPhoto && (
          <Image
            src={site.photo}
            alt={site.name}
            width={384}
            height={384}
            priority
            className="size-40 shrink-0 rounded-2xl object-cover sm:size-48"
          />
        )}
      </header>

      <Section title="Education" id="education">
        <EntryList entries={education} />
      </Section>

      <Section title="Work" id="work">
        <EntryList entries={experience} />
      </Section>

      <Section title="Projects" id="projects">
        <ProjectList projects={featured} />
        <Link href="/projects" className="link mt-6 inline-block">
          See all projects
        </Link>
      </Section>

      <Section title="Research" id="research">
        <EntryList entries={research} />
      </Section>

      <Section title="Papers & posters" id="papers">
        <Publications />
      </Section>

      <Section title="Clubs" id="clubs">
        <EntryList entries={involvement} />
      </Section>

      {posts.length > 0 && (
        <Section title="Writing" id="writing">
          <PostList posts={posts} />
          <Link href="/blog" className="link mt-5 inline-block">
            All posts
          </Link>
        </Section>
      )}
    </>
  )
}
