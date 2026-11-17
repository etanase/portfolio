import Image from 'next/image'
import type { Entry } from 'app/data'

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {entries.map((entry) => (
        <EntryItem key={`${entry.org}-${entry.role}`} entry={entry} />
      ))}
    </ul>
  )
}

function EntryItem({ entry }: { entry: Entry }) {
  const org = entry.href ? (
    <a href={entry.href} target="_blank" rel="noopener noreferrer" className="link">
      {entry.org}
    </a>
  ) : (
    entry.org
  )

  // Single-line entries center the logo on the row; entries with text below
  // pin it to the top of the block.
  const hasBody = Boolean(entry.summary || entry.points || entry.image)

  return (
    <li className={`flex gap-4 ${hasBody ? '' : 'items-center'}`}>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center ${hasBody ? 'mt-0.5' : ''}`}>
        {entry.logo && (
          // Logos are tiny and some are SVG, so skip the image optimizer.
          <img src={entry.logo} alt="" width={32} height={32} className="size-8 max-w-none object-contain" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <p className="text-neutral-900 dark:text-neutral-100">
            <span className="font-medium">{org}</span>
            <span className="text-neutral-500"> · {entry.role}</span>
          </p>
          {entry.dates && (
            <p className="shrink-0 text-sm text-neutral-500 tabular-nums">{entry.dates}</p>
          )}
        </div>
        {entry.summary && (
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">{entry.summary}</p>
        )}
        {entry.points && (
          <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 text-neutral-600 marker:text-neutral-400 dark:text-neutral-400 dark:marker:text-neutral-600">
            {entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {entry.image && (
          <figure className="mt-4">
            <Image
              src={entry.image.src}
              alt={entry.image.alt}
              width={entry.image.width}
              height={entry.image.height}
              sizes="(min-width: 768px) 620px, 100vw"
              className="w-full rounded-md border border-neutral-200 bg-white dark:border-neutral-800"
            />
            {entry.image.caption && (
              <figcaption className="mt-2 text-sm text-neutral-500">{entry.image.caption}</figcaption>
            )}
          </figure>
        )}
      </div>
    </li>
  )
}
