import { blogPosts, type BlogPost } from './blogPosts'
import { blogPosts3A } from './blogPosts-3a'
import { blogPosts3B } from './blogPosts-3b'
import { blogPosts3C } from './blogPosts-3c'

export type { BlogPost }

// ── Hub mapping (see data/guides.ts) ──────────────────────────────────────
// Every existing post is a de-facto live spoke (the legacy `status` field is not
// a gate), so all map to a hub with draft:false. The writer can set hub/draft
// inline on new posts; an inline value wins over this map.
const HUB_MAP: Record<string, string> = {
  // H1 best/cheapest
  'which-loan-app-has-the-lowest-interest-rate-in-kenya': 'best-cheapest-loan-apps',
  'which-is-better-tala-or-branch-for-first-time-borrowers': 'best-cheapest-loan-apps',
  'which-loan-app-gives-the-highest-amount-in-kenya': 'best-cheapest-loan-apps',
  'which-loan-app-in-kenya-is-actually-the-cheapest': 'best-cheapest-loan-apps',
  'which-kenyan-loan-apps-process-weekend-disbursements-fastest': 'best-cheapest-loan-apps',
  'loan-apps-with-longest-repayment-periods-kenya': 'best-cheapest-loan-apps',
  'top-loan-apps-ussd-no-smartphone-kenya': 'best-cheapest-loan-apps',
  // H2 costs/fees
  'how-much-does-tala-charge-in-interest': 'loan-costs-fees',
  'how-much-will-i-pay-back-on-a-10000-loan-in-kenya': 'loan-costs-fees',
  'how-much-does-branch-charge-in-interest': 'loan-costs-fees',
  'how-much-does-okash-charge-for-a-loan': 'loan-costs-fees',
  'what-are-the-hidden-fees-in-loan-apps-kenya': 'loan-costs-fees',
  'hidden-mobile-loan-fees-in-kenya-and-what-processing-facilitation-and-insurance-charges-really-mean': 'loan-costs-fees',
  'how-to-repay-a-branch-loan-through-m-pesa-without-mistakes': 'loan-costs-fees',
  'loan-app-paybill-numbers-in-kenya-and-how-to-find-the-right-repayment-option': 'loan-costs-fees',
  // H3 CRB
  'which-loan-apps-dont-report-to-crb-in-kenya': 'crb-credit-checks',
  'how-do-i-clear-my-name-from-crb-in-kenya': 'crb-credit-checks',
  'how-do-i-check-if-i-am-blacklisted-by-crb-kenya': 'crb-credit-checks',
  'do-small-mobile-loan-defaults-still-affect-your-crb-record-in-kenya': 'crb-credit-checks',
  'how-to-clear-your-crb-name-in-kenya-and-get-a-clearance-certificate': 'crb-credit-checks',
  'false-crb-listing-dispute-metropol-transunion-kenya': 'crb-credit-checks',
  // H4 blacklist/defaulting/rights
  'what-happens-if-you-dont-pay-tala-in-kenya': 'loan-app-blacklist',
  'what-happens-if-you-default-on-m-shwari': 'loan-app-blacklist',
  'what-loan-apps-call-your-contacts-in-kenya': 'loan-app-blacklist',
  'what-to-do-when-a-loan-app-threatens-to-call-your-contacts-in-kenya': 'loan-app-blacklist',
  'how-kenyan-loan-apps-use-your-data-and-what-rights-you-have-under-privacy-law': 'loan-app-blacklist',
  'how-to-tell-when-you-are-app-hopping-just-to-repay-old-debt': 'loan-app-blacklist',
  'how-to-ask-for-a-repayment-plan-when-you-cannot-pay-your-mobile-loan-on-time': 'loan-app-blacklist',
  'can-a-bank-consolidation-loan-help-you-clear-app-debt-in-kenya': 'loan-app-blacklist',
  'what-really-happens-when-you-default-on-a-digital-loan-in-kenya': 'loan-app-blacklist',
  'how-to-delete-a-loan-app-account-and-ask-for-your-data-to-be-removed-in-kenya': 'loan-app-blacklist',
  'how-to-opt-out-loan-app-marketing-sms-kenya': 'loan-app-blacklist',
  'what-to-do-if-you-cant-pay-loan-app-today-kenya': 'loan-app-blacklist',
  'how-to-stop-loan-app-calling-contacts-kenya': 'loan-app-blacklist',
  // H5 CBK licensed
  'how-to-check-whether-your-favorite-loan-app-is-licensed-by-the-central-bank-of-kenya': 'cbk-licensed-lenders',
  'how-central-bank-rules-affect-mobile-loan-pricing-in-kenya': 'cbk-licensed-lenders',
  'new-cbk-licensed-loan-apps-in-kenya-and-what-borrowers-should-check-before-applying': 'cbk-licensed-lenders',
  // H7 app reviews/comparisons
  'equity-eazzy-loan-vs-timiza-and-which-bank-app-is-better-for-smes': 'loan-app-reviews',
  'tala-vs-branch-comparison-kenya': 'loan-app-reviews',
  // H8 M-Pesa / mobile loans
  'which-is-cheaper-hustler-fund-or-m-shwari': 'mpesa-mobile-loans',
  'which-is-better-kcb-m-pesa-or-m-shwari': 'mpesa-mobile-loans',
  'how-much-can-i-borrow-from-hustler-fund': 'mpesa-mobile-loans',
  'how-much-does-fuliza-charge-per-day': 'mpesa-mobile-loans',
  'how-much-interest-does-m-shwari-charge-per-month': 'mpesa-mobile-loans',
  'how-much-can-i-borrow-from-m-shwari-for-the-first-time': 'mpesa-mobile-loans',
  'how-do-i-increase-my-m-shwari-loan-limit': 'mpesa-mobile-loans',
  'how-do-i-increase-my-hustler-fund-limit': 'mpesa-mobile-loans',
  'how-do-i-pay-back-fuliza-early': 'mpesa-mobile-loans',
  'what-is-the-maximum-hustler-fund-limit': 'mpesa-mobile-loans',
  'm-shwari-vs-kcb-m-pesa-and-which-one-gives-better-rates-limits-and-repayment-terms': 'mpesa-mobile-loans',
  'why-fuliza-can-become-one-of-the-most-expensive-ways-to-borrow-in-kenya': 'mpesa-mobile-loans',
  'how-to-move-from-the-hustler-fund-personal-product-to-the-business-product': 'mpesa-mobile-loans',
  'how-to-apply-hustler-fund-group-loan-kenya': 'mpesa-mobile-loans',
  'mshwari-vs-kcb-mpesa-vs-zenka-comparison-kenya': 'mpesa-mobile-loans',
  // H9 eligibility/limits
  'which-loan-app-is-easiest-to-get-approved-in-kenya': 'loan-eligibility-limits',
  'how-do-i-get-approved-for-tala': 'loan-eligibility-limits',
  'how-do-i-appeal-a-rejected-loan-app-in-kenya': 'loan-eligibility-limits',
  'how-to-increase-your-tala-limit-faster-with-better-borrowing-habits': 'loan-eligibility-limits',
  'why-your-zenka-loan-application-was-rejected-and-what-your-m-pesa-history-may-be-saying': 'loan-eligibility-limits',
  'does-updating-your-profile-information-improve-loan-app-approval-chances': 'loan-eligibility-limits',
  'how-to-increase-tala-branch-loan-limit-kenya': 'loan-eligibility-limits',
  // H10 loan types/use-cases
  'which-loan-app-is-best-for-students-in-kenya': 'loan-types-use-cases',
  'what-is-the-best-loan-app-for-emergency-money-in-kenya': 'loan-types-use-cases',
  'what-is-the-best-loan-app-for-paying-school-fees-in-kenya': 'loan-types-use-cases',
  'best-emergency-loan-options-in-kenya-for-medical-bills-and-urgent-expenses': 'loan-types-use-cases',
  'school-fees-loans-in-kenya-and-whether-bank-loans-beat-digital-lenders': 'loan-types-use-cases',
  'best-loan-options-for-small-traders-and-informal-businesses-in-kenya': 'loan-types-use-cases',
  'best-salary-advance-options-in-kenya-for-salaried-workers': 'loan-types-use-cases',
}

const rawPosts: BlogPost[] = [
  ...blogPosts3C,
  ...blogPosts3B,
  ...blogPosts3A,
  ...blogPosts,
]

// Normalise the hub + draft fields so every consumer can rely on them. An inline
// value set on the post wins over the central map / default.
export const allBlogPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  hub: p.hub ?? HUB_MAP[p.slug] ?? '',
  draft: p.draft ?? false,
}))

// Live (non-draft) posts: the set used by /blog, hub spoke-grids and the sitemap.
export const livePosts: BlogPost[] = allBlogPosts.filter((p) => !p.draft)

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts
}

export function getLiveBlogPosts(): BlogPost[] {
  return livePosts
}

export function spokesForHub(hubSlug: string): BlogPost[] {
  return livePosts.filter((p) => p.hub === hubSlug)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map(post => post.slug)
}

// Slugs that are pre-rendered: live posts only (drafts 404 via the route).
export function getLiveBlogSlugs(): string[] {
  return livePosts.map(post => post.slug)
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
  const scored = livePosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let relevance = 0
      const postTitleLower = post.title.toLowerCase()
      for (const keyword of keywords) {
        if (currentTitleLower.includes(keyword) && postTitleLower.includes(keyword)) relevance += 2
      }
      // Same hub is a strong relatedness signal; fall back to category.
      if (currentPost.hub && post.hub === currentPost.hub) relevance += 2
      if (post.category === currentPost.category) relevance += 1
      return { post, relevance }
    })
    .filter(item => item.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
  return scored.map(item => item.post)
}
