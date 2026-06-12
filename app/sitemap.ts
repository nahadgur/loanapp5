import { MetadataRoute } from 'next'
import { livePosts } from '@/data/all-blog-posts'
import { GUIDES } from '@/data/guides'
import { SITE_URL } from '@/lib/schema'

// Generated sitemap. Draft spokes are excluded until the publisher flips them
// live. Tool and decision routes are listed explicitly to preserve coverage.

const STATIC_ROUTES = [
  '/',
  '/loan-finder',
  '/total-cost-calculator',
  '/crb-check',
  '/crb-quiz',
  '/cbk-licensed',
  '/blacklist',
  '/sacco-vs-digital',
  '/blog',
  '/guides',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const fixed = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1.0 : 0.8,
  }))

  const guideRoutes = GUIDES.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.lastReviewedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = livePosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.lastReviewedAt ? new Date(p.lastReviewedAt) : new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...fixed, ...guideRoutes, ...blogRoutes]
}
