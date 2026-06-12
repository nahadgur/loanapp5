/** @type {import('next').NextConfig} */
const nextConfig = {
  // 308 permanent redirects for slugs cleaned of gratuitous recency-years
  // (2026-06-12). Old indexed URLs keep their equity.
  async redirects() {
    const moved = [
      ['tala-vs-branch-2026-comparison-kenya', 'tala-vs-branch-comparison-kenya'],
      ['what-is-the-maximum-hustler-fund-limit-2026', 'what-is-the-maximum-hustler-fund-limit'],
      ['which-loan-app-in-kenya-is-actually-the-cheapest-in-2026', 'which-loan-app-in-kenya-is-actually-the-cheapest'],
    ]
    return moved.map(([from, to]) => ({
      source: `/blog/${from}`,
      destination: `/blog/${to}`,
      permanent: true,
    }))
  },
}

module.exports = nextConfig
