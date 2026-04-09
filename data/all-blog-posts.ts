import { blogPosts, type BlogPost } from './blogPosts'
import { blogPosts3A } from './blogPosts-3a'
import { blogPosts3B } from './blogPosts-3b'
import { blogPosts3C } from './blogPosts-3c'

export type { BlogPost }

export const allBlogPosts: BlogPost[] = [
  ...blogPosts3C,
  ...blogPosts3B,
  ...blogPosts3A,
  ...blogPosts,
]

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map(post => post.slug)
}

export function getRelatedBlogPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug)
  if (!currentPost) return []
  const currentTitleLower = currentPost.title.toLowerCase()
  const keywords = [
    'hustler fund','m-shwari','tala','branch','fuliza','kcb',
    'crb','interest','loan','limit','student','approval',
    'repayment','sms','opt-out','group','increase','ussd',
    'zenka','smartphone','comparison','cheaper','contact',
    'dispute','false','illegal','rights','pay','default',
  ]
  const scored = allBlogPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let relevance = 0
      const postTitleLower = post.title.toLowerCase()
      for (const keyword of keywords) {
        if (currentTitleLower.includes(keyword) && postTitleLower.includes(keyword)) relevance += 2
      }
      if (post.category === currentPost.category) relevance += 1
      return { post, relevance }
    })
    .filter(item => item.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
  return scored.map(item => item.post)
}
