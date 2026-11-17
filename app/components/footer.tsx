import { site } from 'app/data'
import { Socials } from './socials'

export default function Footer() {
  return (
    <footer className="mt-20 mb-16 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800">
      <Socials size="size-4" />
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
