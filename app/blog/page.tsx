import Link from 'next/link';
import { getAllBlogPosts } from '@/data/all-blog-posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loan App Guides & Tips | LoanApp.co.ke Blog',
  description: 'Expert guides on Kenyan loan apps: M-Shwari, Tala, Branch, Hustler Fund, Fuliza. Learn about interest rates, CRB, approval tips, and how to get the cheapest loans.',
};

const CATEGORY_CONFIG = [
  {
    key: 'comparisons',
    label: 'Comparisons',
    emoji: '⚖️',
    tag: 'VS',
    tagColor: '#10b981',
    filter: (t: string) => t.toLowerCase().includes('which') || t.toLowerCase().includes(' vs ') || t.toLowerCase().includes(' or '),
    description: 'Side-by-side breakdowns of the top loan apps',
  },
  {
    key: 'costs',
    label: 'Costs & Fees',
    emoji: '💵',
    tag: 'KSH',
    tagColor: '#f59e0b',
    filter: (t: string) => t.toLowerCase().includes('how much') || t.toLowerCase().includes('interest') || t.toLowerCase().includes('fee') || t.toLowerCase().includes('charge') || t.toLowerCase().includes('cost') || t.toLowerCase().includes('cheap'),
    description: 'Real numbers on what you actually pay',
  },
  {
    key: 'howto',
    label: 'How-To Guides',
    emoji: '📋',
    tag: 'GUIDE',
    tagColor: '#6366f1',
    filter: (t: string) => t.toLowerCase().includes('how do') || t.toLowerCase().includes('how to') || t.toLowerCase().includes('how can'),
    description: 'Step-by-step walkthroughs for borrowers',
  },
  {
    key: 'faqs',
    label: 'FAQs & Warnings',
    emoji: '⚠️',
    tag: 'KNOW',
    tagColor: '#ef4444',
    filter: (t: string) => t.toLowerCase().includes('what') || t.toLowerCase().includes('why') || t.toLowerCase().includes('is ') || t.toLowerCase().includes('are ') || t.toLowerCase().includes('can '),
    description: 'What you need to know before borrowing',
  },
]

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const categorised = CATEGORY_CONFIG.map(cat => ({
    ...cat,
    posts: posts.filter(p => cat.filter(p.title)),
  }));

  const featured = posts.slice(0, 3);
  const allCount = posts.length;

  return (
    <div className="min-h-screen" style={{ background: '#0a0e1a', fontFamily: "'DM Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');
        .post-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .post-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .post-card:hover .card-img { transform: scale(1.05); }
        .card-img { transition: transform 0.4s ease; }
        .grid-line {
          background-image: linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .category-pill {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-large { grid-column: span 1 !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', background: 'rgba(10,14,26,0.85)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
              💰
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>LoanApp.co.ke</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', lineHeight: 1, marginTop: '2px' }}>Compare loan apps in Kenya</div>
            </div>
          </Link>
          <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/#calculator" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', textDecoration: 'none' }}>Calculator</Link>
            <Link href="/#compare" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', textDecoration: 'none' }}>Compare</Link>
            <Link href="/blog" style={{ color: '#10b981', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Blog</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="grid-line" style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(16,185,129,0.13), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px 56px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ maxWidth: '560px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '24px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Kenya's Loan Knowledge Base</span>
              </div>
              <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.08, margin: '0 0 16px' }}>
                Borrow Smarter.<br />
                <em style={{ color: '#10b981' }}>Pay Less.</em>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', margin: 0, lineHeight: 1.7 }}>
                Honest, data-driven guides on M-Shwari, Tala, Branch, Hustler Fund, Fuliza — and every app in between.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3.5rem', color: '#10b981', lineHeight: 1 }}>{allCount}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>Guides</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '3.5rem', color: '#10b981', lineHeight: 1 }}>{CATEGORY_CONFIG.length}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '6px' }}>Topics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '52px 24px 0' }}>
        <SectionHeader label="Featured" />
        <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '18px' }}>
          {featured[0] && <FeaturedCard post={featured[0]} large />}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {featured.slice(1).map(post => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categorised.map(cat => cat.posts.length > 0 && (
        <section key={cat.key} style={{ maxWidth: '1280px', margin: '0 auto', padding: '52px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <span style={{ fontSize: '26px' }}>{cat.emoji}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.6rem', color: '#fff', margin: 0 }}>{cat.label}</h2>
                <span className="category-pill" style={{ background: `${cat.tagColor}1a`, color: cat.tagColor, border: `1px solid ${cat.tagColor}33` }}>{cat.tag}</span>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '2px 0 0', lineHeight: 1 }}>{cat.description}</p>
            </div>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.05)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '12px' }}>
            {cat.posts.map(post => (
              <PostCard key={post.slug} post={post} accentColor={cat.tagColor} />
            ))}
          </div>
        </section>
      ))}

      <div style={{ height: '80px' }} />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)', padding: '28px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © {new Date().getFullYear()} LoanApp.co.ke — For informational purposes only.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.18)', margin: 0 }}>
            Always verify rates directly with lenders.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.6rem', color: '#fff', margin: 0, whiteSpace: 'nowrap' }}>{label}</h2>
      <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.07)' }} />
    </div>
  );
}

function FeaturedCard({ post, large }: { post: any; large?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="post-card"
      style={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#111827',
        border: '1px solid rgba(255,255,255,0.07)',
        height: large ? '100%' : undefined,
      }}
    >
      <div style={{ aspectRatio: large ? '16/9' : '16/7', overflow: 'hidden', background: '#1f2937', position: 'relative' }}>
        {post.featuredImage ? (
          <img src={post.featuredImage} alt={post.title} className="card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #064e3b, #065f46)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>💰</div>
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#10b981', color: '#fff', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
          Featured
        </div>
      </div>
      <div style={{ padding: large ? '22px 24px' : '16px 18px' }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: large ? '1.35rem' : '1rem', color: '#fff', margin: '0 0 8px', lineHeight: 1.3 }}>
          {post.title}
        </h3>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '14px', color: '#10b981', fontSize: '13px', fontWeight: 600 }}>
          Read guide
          <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post, accentColor = '#10b981' }: { post: any; accentColor?: string }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="post-card"
      style={{
        display: 'flex',
        gap: '12px',
        textDecoration: 'none',
        borderRadius: '12px',
        padding: '14px',
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ width: '76px', height: '58px', borderRadius: '8px', overflow: 'hidden', background: '#1f2937', flexShrink: 0 }}>
        {post.featuredImage ? (
          <img src={post.featuredImage} alt={post.title} className="card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: `${accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>💰</div>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontSize: '13.5px', fontWeight: 600, color: '#fff', margin: '0 0 5px', lineHeight: 1.35, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any }}>
          {post.title}
        </h4>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.5, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '8px', color: accentColor, fontSize: '12px', fontWeight: 600 }}>
          Read
          <svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
    </Link>
  );
}
