import Link from 'next/link';
import { getLiveBlogPosts } from '@/data/all-blog-posts';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Loan App Guides & Tips | LoanApp.co.ke Blog',
  description: 'Expert guides on Kenyan loan apps: M-Shwari, Tala, Branch, Hustler Fund, Fuliza. Learn about interest rates, CRB, approval tips, and how to get the cheapest loans.',
};

const CATEGORY_CONFIG = [
  {
    key: 'comparisons',
    label: 'Comparisons',
    tag: 'VS',
    filter: (t: string) => t.toLowerCase().includes('which') || t.toLowerCase().includes(' vs ') || t.toLowerCase().includes(' or '),
    description: 'Side-by-side breakdowns of the top loan apps',
  },
  {
    key: 'costs',
    label: 'Costs & Fees',
    tag: 'KSH',
    filter: (t: string) => t.toLowerCase().includes('how much') || t.toLowerCase().includes('interest') || t.toLowerCase().includes('fee') || t.toLowerCase().includes('charge') || t.toLowerCase().includes('cost') || t.toLowerCase().includes('cheap'),
    description: 'Real numbers on what you actually pay',
  },
  {
    key: 'howto',
    label: 'How-To Guides',
    tag: 'GUIDE',
    filter: (t: string) => t.toLowerCase().includes('how do') || t.toLowerCase().includes('how to') || t.toLowerCase().includes('how can'),
    description: 'Step-by-step walkthroughs for borrowers',
  },
  {
    key: 'faqs',
    label: 'FAQs & Warnings',
    tag: 'KNOW',
    filter: (t: string) => t.toLowerCase().includes('what') || t.toLowerCase().includes('why') || t.toLowerCase().includes('is ') || t.toLowerCase().includes('are ') || t.toLowerCase().includes('can '),
    description: 'What you need to know before borrowing',
  },
];

export default function BlogPage() {
  const posts = getLiveBlogPosts();

  const categorised = CATEGORY_CONFIG.map(cat => ({
    ...cat,
    posts: posts.filter(p => cat.filter(p.title)),
  }));

  const featured = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* ── Hero ── */}
      <section className="border-b-2 border-black py-16 md:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest border-2 border-black px-3 py-1 mb-6 inline-block hover:bg-black hover:text-white transition-colors duration-300 cursor-default">
                Kenya&apos;s Loan Knowledge Base
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-none mb-4 tracking-tight">
                Borrow Smarter.<br />
                <em className="text-emerald-600">Pay Less.</em>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Honest, data-driven guides on M-Shwari, Tala, Branch, Hustler Fund, Fuliza — and every app in between.
              </p>
            </div>
            <div className="flex gap-12 shrink-0">
              <div className="text-center">
                <div className="text-6xl font-serif font-bold text-gray-900">{posts.length}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-1">Guides</div>
              </div>
              <div className="w-px bg-black" />
              <div className="text-center">
                <div className="text-6xl font-serif font-bold text-gray-900">{CATEGORY_CONFIG.length}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-gray-500 mt-1">Topics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="font-serif text-3xl font-bold whitespace-nowrap">Featured</h2>
          <div className="h-0.5 flex-1 bg-black" />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          {featured[0] && (
            <Link
              href={`/blog/${featured[0].slug}`}
              className="group border-2 border-black p-8 bg-white hover:-translate-y-1 hover:shadow-brutal transition-all duration-300 flex flex-col justify-between lg:row-span-2"
            >
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest border border-black px-2 py-0.5 mb-6 inline-block">Featured</span>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                  {featured[0].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{featured[0].excerpt}</p>
              </div>
              <div className="flex items-center gap-2 text-black font-mono font-bold text-sm mt-6">
                Read guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )}
          <div className="flex flex-col gap-4">
            {featured.slice(1).map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border-2 border-black p-6 bg-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-black font-mono font-bold text-xs uppercase">
                  Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category sections ── */}
      {categorised.map(cat => cat.posts.length > 0 && (
        <section key={cat.key} className="max-w-7xl mx-auto px-4 sm:px-8 pb-14">
          <div className="flex items-center gap-6 mb-8 border-t-2 border-black pt-10">
            <h2 className="font-serif text-2xl font-bold whitespace-nowrap">{cat.label}</h2>
            <span className="font-mono text-xs font-bold uppercase tracking-widest border-2 border-black px-2 py-0.5">
              {cat.tag}
            </span>
            <div className="h-0.5 flex-1 bg-black/10" />
            <span className="text-gray-400 font-mono text-xs hidden md:block">{cat.description}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border-2 border-black p-5 bg-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif font-bold text-gray-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-1 text-black font-mono font-bold text-xs uppercase mt-4">
                  Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
