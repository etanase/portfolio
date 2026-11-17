import type { NextConfig } from 'next'

// The resume is shareable by link but kept out of search results. A robots
// header (rather than a robots.txt Disallow) is what keeps it unindexed:
// crawlers must be able to fetch the file to see the noindex.
const noindex = [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }]

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: '/resume', headers: noindex },
      { source: '/resume.pdf', headers: noindex },
    ]
  },
  async redirects() {
    return [{ source: '/resume', destination: '/resume.pdf', permanent: false }]
  },
}

export default nextConfig
