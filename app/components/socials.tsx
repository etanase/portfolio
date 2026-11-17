import { socials } from 'app/data'
import { Icon } from './icons'

export function Socials({ size = 'size-5' }: { size?: string }) {
  return (
    <ul className="flex flex-wrap items-center gap-4">
      {socials.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={label === 'Resume' ? 'nofollow noopener' : 'noopener noreferrer'}
            aria-label={label}
            title={label}
            className="block text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <Icon name={label} className={size} />
          </a>
        </li>
      ))}
    </ul>
  )
}
