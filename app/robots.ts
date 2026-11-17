import { baseUrl } from './data'

// Don't Disallow /resume.pdf here: blocked crawlers can't see its noindex
// header and may still index the bare URL (see next.config.ts).
export default function robots() {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
