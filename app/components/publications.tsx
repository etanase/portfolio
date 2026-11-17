import { publications, type Publication } from 'app/data'

const ME = /(E\.(?: F\.)? Tanase)/

function Authors({ authors }: { authors: string }) {
  return authors.split(ME).map((part, i) =>
    ME.test(part) ? (
      <span key={i} className="text-neutral-900 dark:text-neutral-100">
        {part}
      </span>
    ) : (
      part
    )
  )
}

function Item({ pub }: { pub: Publication }) {
  return (
    <li>
      <p className="text-neutral-900 dark:text-neutral-100">{pub.title}</p>
      <p className="text-sm text-neutral-500">
        <Authors authors={pub.authors} />
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {pub.venue}
        {pub.note && <> · {pub.note}</>}
      </p>
    </li>
  )
}

export function Publications() {
  const selected = publications.filter((p) => p.selected)
  const rest = publications.filter((p) => !p.selected)

  return (
    <>
      <ul className="flex flex-col gap-4">
        {selected.map((pub) => (
          <Item key={pub.title} pub={pub} />
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="group mt-5">
          <summary className="link w-fit cursor-pointer list-none text-neutral-600 dark:text-neutral-400 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">{rest.length} more</span>
            <span className="hidden group-open:inline">Show less</span>
          </summary>
          <ul className="mt-4 flex flex-col gap-4">
            {rest.map((pub) => (
              <Item key={pub.title} pub={pub} />
            ))}
          </ul>
        </details>
      )}
    </>
  )
}
