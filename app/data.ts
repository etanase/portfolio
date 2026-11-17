// All site content lives here. Pages read from these lists, so editing
// content should rarely require touching JSX.

import type { IconName } from './components/icons'

export const baseUrl = 'https://www.eduardtanase.com'

export const site = {
  name: 'Eduard Tanase',
  // Romanian spelling, used once in the page heading.
  heading: 'Eduard Tănase',
  description:
    'CS M.S. student at Stanford. I build software and do machine learning research on brain signals.',
  // Rendered only if the file exists in public/.
  photo: '/images/me.jpg',
}

export type Social = { label: IconName; href: string }

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/etanase' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduard-tanase/' },
  { label: 'X', href: 'https://x.com/realmeme8383' },
  { label: 'Instagram', href: 'https://instagram.com/squiduard8383' },
  { label: 'Email', href: 'mailto:eduard.tanase1@gmail.com' },
  // Still kept out of search results by the noindex header in next.config.ts.
  { label: 'Resume', href: '/resume.pdf' },
]

export type Img = { src: string; alt: string; width: number; height: number }

export type Entry = {
  org: string
  role: string
  dates: string
  logo?: string
  href?: string
  summary?: string
  points?: string[]
  image?: Img & { caption?: string }
}

export const experience: Entry[] = [
  {
    org: 'Optiver',
    role: 'Software Engineer Intern',
    dates: 'Summer 2027',
    logo: '/images/logos/optiver.png',
  },
  {
    org: 'Roblox',
    role: 'Software Engineer Intern',
    dates: 'Summer 2026',
    logo: '/images/logos/roblox.png',
  },
  {
    org: 'Leidos',
    role: 'Embedded Design Intern',
    dates: 'Summer 2025',
    logo: '/images/logos/leidos.png',
  },
  {
    org: 'ECELabs',
    role: 'Software Engineer',
    dates: '2024 – 2026',
    logo: '/images/logos/ecelabs.png',
  },
]

export const education: Entry[] = [
  {
    org: 'Stanford University',
    role: 'M.S. Computer Science, AI',
    dates: '2026 – 2028',
    logo: '/images/logos/stanford.svg',
  },
  {
    org: 'Purdue University',
    role: 'B.S. Computer Engineering',
    dates: '2022 – 2026',
    logo: '/images/logos/purdue.svg',
  },
]

export const research: Entry[] = [
  {
    org: 'Nano Neurotechnology Lab, Purdue',
    role: 'Undergraduate Researcher',
    dates: '2024 – 2026',
    logo: '/images/logos/purdue.svg',
    summary: 'Decoding mouse movement from motor cortex recordings with deep learning.',
    image: {
      src: '/images/research/lfp-decoding.jpg',
      alt: 'Line plot of actual versus CNN-predicted lever position over time, closely overlapping',
      width: 1000,
      height: 500,
      caption: 'Predicted (orange) vs. actual lever position, decoded from raw brain signals.',
    },
  },
  {
    org: 'System on Chip Extension Technologies, Purdue',
    role: 'Undergraduate Researcher',
    dates: '2024',
    logo: '/images/logos/purdue.svg',
    summary: 'A C standard library for a student-designed RISC-V chip.',
  },
  {
    org: 'Systems & Software Security Lab, Purdue',
    role: 'Undergraduate Researcher',
    dates: '2023',
    logo: '/images/logos/purdue.svg',
    summary: 'Automated security scanning of open-source packages.',
  },
]

export const involvement: Entry[] = [
  {
    org: 'Purdue IEEE',
    role: 'Vice President',
    dates: '2024',
    logo: '/images/logos/purdue-ieee.png',
    summary:
      "Helped run Purdue's largest technical student organization: 7 technical committees and 800+ members.",
  },
  {
    org: 'Purdue IEEE SMC',
    role: 'Machine Learning Lead',
    dates: '2024',
    logo: '/images/logos/purdue-ieee.png',
    summary: 'Formerly the Neurotech club. Led ML for an EEG-controlled prosthetic hand.',
  },
]

export type Publication = {
  authors: string
  title: string
  venue: string
  note?: string
  // Shown without expanding the list.
  selected?: boolean
}

// Your name in `authors` is highlighted automatically.
export const publications: Publication[] = [
  {
    authors: 'H. F. Khan, O. T. Kolhe, M. Habibi Matin, E. Tanase, K. Jayant',
    title: 'Neural Delay Lines Synchronize Inter-Areal Motor Sequences',
    venue: 'In submission at Neuron, 2026',
    selected: true,
  },
  {
    authors: 'E. F. Tanase, H. F. Khan, O. T. Kolhe, K. Jayant',
    title: 'Decoding Continuous Motor Output from Cortical Traveling Waves',
    venue: 'Purdue BME Research Symposium, 2026',
    note: '3rd place, undergraduate posters',
    selected: true,
  },
  {
    authors: 'H. F. Khan*, O. T. Kolhe*, M. Habibimatin, E. F. Tanase, K. Jayant',
    title: 'Neural Subspace Communication Across Motor Cortices is Organized via Traveling Waves',
    venue: 'Cosyne, Montreal, 2025',
    note: 'Top 10% of submissions',
    selected: true,
  },
  {
    authors: 'H. F. Khan*, O. T. Kolhe*, M. Habibimatin, E. F. Tanase, K. Jayant',
    title:
      'Traveling Waves Support Dynamic Rerouting of Communication Subspaces Across the Motor Cortical Hierarchy',
    venue: 'SfN Barrels Satellite Meeting, Chicago, 2024',
    note: 'Top 5% of submissions',
    selected: true,
  },
  {
    authors: 'O. T. Kolhe*, H. F. Khan*, M. Habibimatin, E. F. Tanase, K. Jayant',
    title: 'Traveling Waves Enable Reliable Volitional Motor Movement',
    venue: 'Society for Neuroscience, Chicago, 2024',
  },
  {
    authors: 'E. Tanase, A. Sexton, C. Zhang, A. Aylward',
    title: 'Implementing a C Standard Library on Student-Designed Microcontroller',
    venue: 'Purdue Fall Undergraduate Research Expo, 2024',
  },
  {
    authors: 'E. F. Tanase, H. F. Khan, O. T. Kolhe, K. Jayant',
    title: 'Decoding Volitional Movement Through Cortical Traveling Waves',
    venue: 'Purdue BME Research Symposium, 2024',
  },
  {
    authors: 'V. Pham Ngoc Thanh, E. Tanase, V. Charapalli, C. Behrend, V. Turaga',
    title: 'An Efficient Approach to Securing Open-Source Software Ecosystem',
    venue: 'Purdue Fall Undergraduate Research Expo, 2023',
  },
]

export type Project = {
  // URL: /projects/<slug>. A longer write-up can go in content/projects/<slug>.mdx.
  slug: string
  title: string
  year: string
  stack: string
  // One line for lists; `description` is shown on the project's own page.
  summary: string
  description: string
  links?: { label: string; href: string }[]
  // Thumbnail for lists; defaults to the first image.
  cover?: Img
  images?: Img[]
  // An .mp4/.webm in public/videos/, shown above the images.
  video?: { src: string; poster?: string }
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'ecelabs',
    title: 'ECELabs',
    year: '2024 – 2026',
    stack: 'Vue, FastAPI, PostgreSQL, Kubernetes',
    summary: 'Design circuits and flash real FPGAs from the browser.',
    description:
      'A digital design lab in the browser: draw circuits or write SystemVerilog, compile, and flash one of 30+ real FPGA boards remotely. Used by 270+ Purdue students each semester.',
    links: [
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=3n0xlGp5wHM' },
      { label: 'Site (Purdue login)', href: 'https://alpha.ecelabs.io' },
    ],
    images: [
      {
        src: '/images/projects/ecelabs.jpg',
        alt: 'ECELabs circuit editor showing a four-bit shift register built from D flip-flops',
        width: 1280,
        height: 786,
      },
    ],
    featured: true,
  },
  {
    slug: 'deaf-i',
    title: 'Deaf-i',
    year: '2024 – now',
    stack: 'Next.js, Prismic, Stripe',
    summary: 'Website for a cochlear implant nonprofit.',
    description:
      "I'm the CTO of Deaf-i, a nonprofit supporting cochlear implant recipients and their families. I built its website, with a blog, donations, and a newsletter.",
    links: [{ label: 'Site', href: 'https://www.deaf-i.org' }],
    images: [
      {
        src: '/images/projects/deafi.jpg',
        alt: 'Deaf-i homepage with a family photo and the headline "Founded for and by families with hearing-loss and Deaf members"',
        width: 1600,
        height: 1000,
      },
    ],
    featured: true,
  },
  {
    slug: 'sophros',
    title: 'Sophros',
    year: '2026',
    stack: 'React Native, Expo, FastAPI',
    summary: 'A mobile app that plans meals around your week.',
    description:
      'My senior design project: a mobile app that plans your meals around your week, workouts, and sleep.',
    links: [{ label: 'GitHub', href: 'https://github.com/emersonmaddock/sophros' }],
    cover: {
      src: '/images/projects/sophros-cover.jpg',
      alt: 'Three Sophros app screens: week planning, meal swap, and progress',
      width: 1600,
      height: 1000,
    },
    images: [
      {
        src: '/images/projects/sophros-plan.jpg',
        alt: 'Week planning screen with scheduled meals and calorie counts',
        width: 463,
        height: 1000,
      },
      {
        src: '/images/projects/sophros-swap.jpg',
        alt: 'Swap sheet suggesting alternative meals with calories and protein',
        width: 470,
        height: 1000,
      },
      {
        src: '/images/projects/sophros-streak.jpg',
        alt: 'Progress screen showing a seven-day streak and achievements',
        width: 699,
        height: 1000,
      },
    ],
    featured: true,
  },
  {
    slug: 'pointorchard',
    title: 'PointOrchard',
    year: '2025',
    stack: 'Next.js, Postgres',
    summary: 'Compare credit card sign-up bonuses.',
    description:
      'Search and compare credit card sign-up bonuses. 2,000+ people found it in its first 20 days.',
    links: [{ label: 'Site', href: 'https://www.pointorchard.com' }],
    images: [
      {
        src: '/images/projects/pointorchard.jpg',
        alt: 'PointOrchard bonus search page with filters and credit card results',
        width: 1600,
        height: 1000,
      },
    ],
    featured: true,
  },
  {
    slug: 'romania-unita',
    title: 'România Unită',
    year: '2024 – 2025',
    stack: 'Next.js, Leaflet',
    summary: 'Find your polling station abroad.',
    description:
      'Built during the Romanian presidential elections to help Romanians abroad find their nearest polling station and compare candidates.',
    links: [{ label: 'Site', href: 'https://ro-election.vercel.app/' }],
    images: [
      {
        src: '/images/projects/romania.jpg',
        alt: 'World map with markers for Romanian polling stations abroad',
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    slug: 'skateboard-lights',
    title: 'Skateboard Lights',
    year: '2024',
    stack: 'KiCad, ESP32',
    summary: 'Custom RGB lighting board for my e-skateboard.',
    description:
      'A custom circuit board that adds addressable RGB lighting to my electric skateboard, powered from its battery.',
    links: [{ label: 'GitHub', href: 'https://github.com/etanase/board-lights' }],
    images: [
      {
        src: '/images/projects/board-pcb.jpg',
        alt: 'PCB layout with an ESP32 module, power regulation, and screw terminals',
        width: 877,
        height: 1000,
      },
      {
        src: '/images/projects/board-schematic.jpg',
        alt: 'Circuit schematic for the lighting board',
        width: 1600,
        height: 1088,
      },
    ],
  },
]
