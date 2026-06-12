import Link from 'next/link'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight } from '@/components/Icons'
import { GUIDES } from '@/data/guides'
import { spokesForHub } from '@/data/all-blog-posts'
import {
  SITE_URL,
  organizationSchema,
  websiteSchema,
  editorialEntitySchema,
  breadcrumbSchema,
  jsonLd,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Loan Guides Kenya: Costs, CRB, Licensing and More | LoanApp.co.ke',
  description:
    'The ten loan-borrowing hubs for Kenya: best and cheapest apps, costs and fees, CRB, defaulting and your rights, CBK licensing, SACCO vs digital, reviews, M-Pesa loans, eligibility and loan types.',
  alternates: { canonical: '/guides' },
}

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(
        organizationSchema(),
        websiteSchema(),
        editorialEntitySchema(),
        breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Guides', url: `${SITE_URL}/guides` },
        ]),
      )} />

      <Header />

      <section className="border-b-2 border-black py-16 md:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest border-2 border-black px-3 py-1 mb-6 inline-block">
            Kenya&apos;s Loan Knowledge Base
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-none mb-4 tracking-tight">
            Loan guides for Kenya
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Ten hubs covering how borrowing actually works in Kenya, each tied to a tool and sourced
            to the authority that sets the rules. Rates change, so we date everything and steer you
            to the lender and the regulator.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDES.map((g) => {
            const count = spokesForHub(g.slug).length
            return (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group border-2 border-black p-6 bg-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all flex flex-col"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-3">{g.heroBadge}</span>
                <h2 className="font-serif text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2 leading-snug">{g.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{g.metaDescription}</p>
                <div className="flex items-center justify-between mt-5 font-mono text-xs uppercase">
                  <span className="text-gray-400">{count > 0 ? `${count} guide${count > 1 ? 's' : ''}` : 'Guides coming'}</span>
                  <span className="flex items-center gap-1 font-bold text-black">Open <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}
