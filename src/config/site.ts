import { SiteConfig } from '@/types'

import { env } from '@/env.mjs'

export const siteConfig: SiteConfig = {
  name: 'Shadify',
  author: 'bikrantjung',
  description: 'Color variables and tailwind config generator for shadcn',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI', 'shadcn/ui'],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: 'https://rdev.pro',
  },
  links: {
    github: 'https://github.com/redpangilinan/next-entree',
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
