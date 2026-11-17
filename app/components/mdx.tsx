import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'

function A({ href = '', ...props }: React.ComponentProps<'a'>) {
  if (href.startsWith('/') || href.startsWith('#')) {
    return <Link href={href} {...props} />
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
}

// Markdown images: ![alt](/images/blog/x.jpg "optional caption")
// MDX wraps images in <p>, so this uses spans; a <figure> there is invalid HTML.
function Img({ src, alt = '', title }: React.ComponentProps<'img'>) {
  return (
    <span className="image">
      <img src={src as string} alt={alt} loading="lazy" decoding="async" />
      {title && <span className="caption">{title}</span>}
    </span>
  )
}

// For side-by-side images: <Figures caption="...">![a](/a.jpg) ![b](/b.jpg)</Figures>
function Figures({ caption, children }: { caption?: string; children: React.ReactNode }) {
  return (
    <figure>
      <div className="figures">{children}</div>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  )
}

function Code({ children, ...props }: React.ComponentProps<'code'>) {
  if (typeof children !== 'string') return <code {...props}>{children}</code>
  return <code dangerouslySetInnerHTML={{ __html: highlight(children) }} {...props} />
}

const components = { a: A, img: Img, code: Code, Figures }

export function MDX({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />
}
