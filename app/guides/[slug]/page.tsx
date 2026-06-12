import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SpokeHero } from '@/components/SpokeHero'
import { ArrowRight, CheckCircle2, Calculator } from '@/components/Icons'
import { GUIDES, GUIDES_BY_SLUG } from '@/data/guides'
import { spokesForHub } from '@/data/all-blog-posts'
import {
  SITE_URL,
  EDITORIAL,
  organizationSchema,
  websiteSchema,
  editorialEntitySchema,
  breadcrumbSchema,
  faqPageSchema,
  articleSchemaFor,
  jsonLd,
} from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = GUIDES_BY_SLUG[slug]
  if (!guide) return { title: 'Guide Not Found' }
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: 'article',
      url: `${SITE_URL}/guides/${guide.slug}`,
    },
  }
}

export default async function GuideHubPage({ params }: Props) {
  const { slug } = await params
  const guide = GUIDES_BY_SLUG[slug]
  if (!guide) notFound()

  const url = `${SITE_URL}/guides/${guide.slug}`
  const spokes = spokesForHub(guide.slug)
  const adjacent = guide.adjacentHubSlugs.map((s) => GUIDES_BY_SLUG[s]).filter(Boolean)

  const words =
    guide.keyPoints.join(' ').split(/\s+/).length +
    guide.sections.reduce((sum, s) => sum + s.paragraphs.join(' ').split(/\s+/).length, 0)
  const readMins = Math.max(3, Math.round(words / 200))

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(
        organizationSchema(),
        websiteSchema(),
        editorialEntitySchema(),
        breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Guides', url: `${SITE_URL}/guides` },
          { name: guide.shortTitle, url },
        ]),
        articleSchemaFor({
          url,
          headline: guide.title,
          description: guide.metaDescription,
          datePublished: guide.publishedAt,
          dateModified: guide.lastReviewedAt,
        }),
        faqPageSchema(guide.faqs),
      )} />

      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-emerald-600">Guides</Link>
          <span>/</span>
          <span className="text-gray-900">{guide.shortTitle}</span>
        </nav>

        <h1 className="sr-only">{guide.title}</h1>
        <SpokeHero title={guide.title} hubName="Guide hub" hubSlug={guide.slug} readMins={readMins} />

        <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
          <span className="border-2 border-black px-2 py-0.5">{guide.heroBadge}</span>
          <span className="text-gray-500">By {EDITORIAL.byline} · Reviewed {guide.lastReviewedAt}</span>
        </div>

        <p className="mt-5 text-lg text-gray-700 leading-relaxed">{guide.heroDirectAnswer}</p>

        {/* Tool pillars */}
        <div className="mt-7 grid sm:grid-cols-2 gap-3">
          {guide.toolPillars.map((t) => (
            <Link key={t.href} href={t.href} className="group flex items-center gap-3 border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
              <Calculator className="w-5 h-5 shrink-0" />
              <span className="flex-1 font-mono font-bold uppercase text-sm">{t.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Key points */}
        <section className="mt-10 border-2 border-black p-6 md:p-8">
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-emerald-700 mb-5">The short answer</h2>
          <ul className="space-y-4">
            {guide.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {guide.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-5">{section.heading}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {section.paragraphs.map((p, j) => (<p key={j}>{p}</p>))}
              </div>
            </section>
          ))}
        </div>

        {/* Spoke grid */}
        {spokes.length > 0 && (
          <section className="mt-14 border-t-2 border-black pt-10">
            <h2 className="font-serif text-2xl font-bold mb-2">In-depth on {guide.shortTitle.toLowerCase()}</h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-6">Guides in this series</p>
            <div className="grid md:grid-cols-2 gap-4">
              {spokes.map((spoke) => (
                <Link key={spoke.slug} href={`/blog/${spoke.slug}`} className="group border-2 border-black p-5 hover:-translate-y-1 hover:shadow-brutal-sm transition-all">
                  <h3 className="font-serif font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug line-clamp-2">{spoke.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{spoke.excerpt}</p>
                  <div className="flex items-center gap-1 text-black font-mono font-bold text-xs uppercase mt-4">
                    Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mt-14 border-t-2 border-black pt-10">
          <h2 className="font-serif text-2xl font-bold mb-6">{guide.shortTitle} questions answered</h2>
          <div className="space-y-3">
            {guide.faqs.map((faq, i) => (
              <details key={i} className="group border-2 border-black p-5">
                <summary className="font-mono font-bold uppercase text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-gray-700 leading-relaxed mt-3 normal-case font-sans">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Adjacent hubs */}
        {adjacent.length > 0 && (
          <section className="mt-14 border-t-2 border-black pt-10">
            <h2 className="font-serif text-xl font-bold mb-6">Continue across the guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {adjacent.map((h) => (
                <Link key={h.slug} href={`/guides/${h.slug}`} className="group bg-gray-50 border-2 border-black p-5 hover:bg-black hover:text-white transition-colors">
                  <h3 className="font-serif font-bold">{h.title}</h3>
                  <div className="flex items-center gap-1 font-mono font-bold text-xs uppercase mt-3">
                    Open guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Affiliate disclosure */}
        <p className="mt-12 text-xs text-gray-400 font-mono leading-relaxed border-t border-gray-200 pt-6">
          For informational purposes only. We are not a lender and do not issue loans. We may earn affiliate commission from some apps, which never changes what you pay or how options are ranked. Always verify current rates and licensing with the lender and the Central Bank of Kenya before borrowing.
        </p>
      </main>

      <Footer />
    </div>
  )
}
