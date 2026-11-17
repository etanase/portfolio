import Image from 'next/image'
import type { Img } from 'app/data'

const frame = 'rounded-md border border-neutral-200 dark:border-neutral-800'

// Landscape images span the column. Runs of consecutive portrait images
// (phone screenshots) share a row at equal height, so they aren't blown up.
export function Gallery({ images }: { images: Img[] }) {
  const rows: Img[][] = []
  for (const img of images) {
    const portrait = img.height > img.width
    const last = rows.at(-1)
    if (portrait && last && last[0].height > last[0].width) last.push(img)
    else rows.push([img])
  }

  return (
    <div className="flex flex-col gap-4">
      {rows.map((row) =>
        row.length === 1 && row[0].width >= row[0].height ? (
          <a key={row[0].src} href={row[0].src} target="_blank" rel="noopener noreferrer">
            <Image
              src={row[0].src}
              alt={row[0].alt}
              width={row[0].width}
              height={row[0].height}
              sizes="(min-width: 768px) 672px, 100vw"
              className={`w-full ${frame}`}
            />
          </a>
        ) : (
          <div key={row[0].src} className="flex items-start gap-2">
            {row.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                // Width proportional to aspect ratio gives every image the same height.
                style={{ flex: `${img.width / img.height} 1 0` }}
                className="max-w-sm min-w-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 768px) 300px, 33vw"
                  className={`w-full ${frame}`}
                />
              </a>
            ))}
          </div>
        )
      )}
    </div>
  )
}
