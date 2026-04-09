import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, Clock, Scale, TrendingDown, Trophy, Users } from '@/components/Icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sacco Loans vs Digital Loan Apps Kenya 2026 | Which is Cheaper?',
  description:
    'Head-to-head comparison of Sacco loans vs digital loan apps (Tala, Branch, M-Shwari) in Kenya 2026. Interest rates, limits, speed, requirements — and a clear verdict on who wins.',
  keywords: 'Sacco loans vs digital apps Kenya, Sacco loan interest rate Kenya, Sacco vs Tala, Sacco vs M-Shwari, cheapest loan Kenya',
  alternates: { canonical: 'https://loanapp.co.ke/sacco-vs-digital' },
  openGraph: {
    title: 'Sacco Loans vs Digital Apps Kenya 2026 | Full Comparison',
    description: 'Is a Sacco loan cheaper than Tala or M-Shwari? Full interest rate and cost comparison for Kenyan borrowers.',
  },
};

type ComparisonRow = {
  criteria: string;
  sacco: string;
  digital: string;
  winner: 'sacco' | 'digital' | 'tie';
  note?: string;
};

const COMPARISON: ComparisonRow[] = [
  {
    criteria: 'Interest Rate',
    sacco: '1–1.5% per month (12–18% p.a.)',
    digital: '6–15% per month (72–180% p.a.)',
    winner: 'sacco',
    note: 'Saccos are dramatically cheaper — typically 5–10x lower effective cost',
  },
  {
    criteria: 'Loan Limit',
    sacco: '3× your savings (up to KES 5M for large Saccos)',
    digital: 'KES 500 – 300,000 depending on app',
    winner: 'sacco',
    note: 'Saccos offer far higher limits for established members',
  },
  {
    criteria: 'Speed of Disbursement',
    sacco: '3–14 days (application & approval process)',
    digital: 'Instant to 10 minutes',
    winner: 'digital',
    note: 'Digital apps win decisively on speed',
  },
  {
    criteria: 'Repayment Term',
    sacco: '12–48 months for development loans',
    digital: '7–90 days typically',
    winner: 'sacco',
    note: 'Saccos offer much longer terms — better for large amounts',
  },
  {
    criteria: 'Collateral / Security',
    sacco: 'Savings as collateral (3× rule). Guarantors sometimes required',
    digital: 'None — data-based credit scoring only',
    winner: 'digital',
    note: 'Digital apps require nothing upfront',
  },
  {
    criteria: 'CRB Impact',
    sacco: 'Reports to CRB — default is serious',
    digital: 'Most report to CRB — default affects all future borrowing',
    winner: 'tie',
    note: 'Both report to CRB. Neither is safe to default on.',
  },
  {
    criteria: 'Membership Required',
    sacco: 'Yes — months to years of saving first',
    digital: 'No — download and apply same day',
    winner: 'digital',
    note: 'Digital apps have zero barrier to entry',
  },
  {
    criteria: 'Emergency Use',
    sacco: 'Emergency loans available but still take 1–5 days',
    digital: 'Best option for genuine financial emergencies',
    winner: 'digital',
    note: 'Hustler Fund or M-Shwari for true emergencies',
  },
  {
    criteria: 'Total Cost on KES 50,000 / 12 months',
    sacco: '~KES 54,500 (at 1% monthly)',
    digital: '~KES 107,000+ (at 10% monthly)',
    winner: 'sacco',
    note: 'Sacco is ~2× cheaper for medium-term borrowing',
  },
];

const SACCO_PROS = [
  'Dramatically lower interest rates (1–1.5% vs 6–15% monthly)',
  'Much higher loan limits — up to 3× your savings',
  'Long repayment terms reduce monthly burden',
  'Member dividends — your savings earn interest too',
  'Cannot call your contacts or use abusive collection',
  'Profits shared back to members annually',
];

const DIGITAL_PROS = [
  'Instant disbursement — money in minutes',
  'No membership, savings, or waiting period',
  'Available 24/7 including weekends',
  'No guarantors or paperwork required',
  'Builds a digital credit history quickly',
  'Useful for micro-amounts under KES 5,000',
];

const POPULAR_SACCOS = [
  { name: 'Mwalimu National SACCO', focus: 'Teachers', rate: '1% per month', ussd: '*387#' },
  { name: 'Stima SACCO', focus: 'Kenya Power employees + public', rate: '1% per month', ussd: '*488#' },
  { name: 'Kenya Police SACCO', focus: 'Police officers', rate: '1.2% per month', ussd: 'App only' },
  { name: 'Unaitas SACCO', focus: 'Open membership', rate: '1.5% per month', ussd: '*400#' },
  { name: 'Safaricom SACCO', focus: 'Safaricom staff + public', rate: '1% per month', ussd: 'App only' },
  { name: 'Harambee SACCO', focus: 'Civil servants + public', rate: '1% per month', ussd: '*767#' },
];

export default function SaccoVsDigitalPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sacco Loans vs Digital Loan Apps Kenya 2026',
    description: 'Full comparison of Sacco loan rates, limits, and terms against digital loan apps like Tala, Branch, and M-Shwari.',
    url: 'https://loanapp.co.ke/sacco-vs-digital',
    dateModified: '2026-04-06',
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      {/* Hero */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border-2 border-emerald-600  mb-6">
            <Scale className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-medium">Updated April 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Sacco Loans vs Digital Apps: Which Is Cheaper in Kenya?
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            If you qualify for a Sacco loan, you are almost certainly paying too much by using Tala, Branch,
            or M-Shwari. Here is the full side-by-side breakdown.
          </p>
        </div>
      </section>

      {/* Summary verdict */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border-2 border-emerald-600 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-emerald-600" />
                <h2 className="font-bold text-gray-900">Winner: Sacco (for planned loans)</h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                For any loan above KES 10,000 that you can plan 3+ days ahead, a Sacco loan is 5–10× cheaper
                than a digital app. The rate difference is not marginal — it is transformational.
              </p>
            </div>
            <div className="bg-gray-100 border border-black p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <h2 className="font-bold text-gray-900">Winner: Digital (for emergencies)</h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                For genuine financial emergencies — hospital bill tonight, school fees due tomorrow —
                a digital app like Hustler Fund or M-Shwari is your only realistic option. Use it,
                but pay off fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-5">Full Comparison Table</h2>
          <div className="overflow-x-auto border border-black">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-black">
                  <th className="text-left py-3.5 px-4 text-gray-500 font-medium text-sm">Criteria</th>
                  <th className="text-left py-3.5 px-4 text-emerald-600 font-semibold text-sm">Sacco Loan</th>
                  <th className="text-left py-3.5 px-4 text-gray-600 font-semibold text-sm">Digital App</th>
                  <th className="text-center py-3.5 px-4 text-gray-500 font-medium text-sm">Winner</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b-2 border-black hover:bg-gray-100 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900 text-sm">{row.criteria}</div>
                      {row.note && <div className="text-xs text-gray-400 mt-0.5">{row.note}</div>}
                    </td>
                    <td className="py-4 px-4 text-gray-600 text-sm">{row.sacco}</td>
                    <td className="py-4 px-4 text-gray-600 text-sm">{row.digital}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`text-xs font-semibold px-2.5 py-1  ${
                        row.winner === 'sacco'   ? 'bg-emerald-100 text-emerald-600' :
                        row.winner === 'digital' ? 'bg-blue-500/20 text-gray-600' :
                                                   'bg-gray-50 text-gray-500'
                      }`}>
                        {row.winner === 'sacco' ? 'Sacco v' : row.winner === 'digital' ? 'Digital v' : 'Tie'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real example */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-black p-6">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-5 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-emerald-600" />
            Real Example: KES 100,000 Loan over 12 Months
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: 'Sacco Loan',
                rate: '1% per month',
                monthly: '~KES 8,885',
                total: '~KES 106,620',
                interest: 'KES 6,620',
                color: 'emerald',
              },
              {
                name: 'M-Shwari / KCB M-Pesa',
                rate: '7.5–8.64% per month',
                monthly: '~KES 20,000+',
                total: '~KES 191,700',
                interest: 'KES 91,700',
                color: 'amber',
              },
              {
                name: 'Tala / Branch',
                rate: '10–15% per month',
                monthly: 'Not viable (30-day max term)',
                total: 'Not comparable',
                interest: 'Much higher if rolled',
                color: 'red',
              },
            ].map(item => (
              <div key={item.name} className={`rounded-xl p-4 border ${
                item.color === 'emerald' ? 'bg-emerald-50 border-emerald-300' :
                item.color === 'amber'   ? 'bg-amber-50 border-amber-500/20' :
                                          'bg-red-50 border-red-500/20'
              }`}>
                <h3 className="font-bold text-gray-900 text-sm mb-3">{item.name}</h3>
                <div className="space-y-2 text-xs">
                  <div><span className="text-gray-400">Rate:</span> <span className="text-gray-600">{item.rate}</span></div>
                  <div><span className="text-gray-400">Monthly:</span> <span className="text-gray-600">{item.monthly}</span></div>
                  <div><span className="text-gray-400">Total repaid:</span> <span className={`font-bold ${
                    item.color === 'emerald' ? 'text-emerald-600' : item.color === 'amber' ? 'text-amber-400' : 'text-red-400'
                  }`}>{item.total}</span></div>
                  <div><span className="text-gray-400">Interest paid:</span> <span className="text-gray-600">{item.interest}</span></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            A Sacco member saves over <strong className="text-emerald-600">KES 85,000</strong> in interest versus a comparable M-Shwari loan. This is not a rounding error — it is a fundamentally different product.
          </p>
        </div>
      </section>

      {/* Pros/cons */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Why Saccos Win
            </h2>
            <div className="space-y-2.5">
              {SACCO_PROS.map((pro, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {pro}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              When Digital Apps Win
            </h2>
            <div className="space-y-2.5">
              {DIGITAL_PROS.map((pro, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {pro}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Saccos */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-5">Popular Kenyan Saccos Open to the Public</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {POPULAR_SACCOS.map(sacco => (
              <div key={sacco.name} className="bg-gray-50 border border-black p-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{sacco.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{sacco.focus}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-emerald-600 text-xs font-semibold">{sacco.rate}</div>
                  {sacco.ussd !== 'App only' && (
                    <code className="text-xs font-mono text-gray-500">{sacco.ussd}</code>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            To join a Sacco, visit the Sacco&apos;s offices or website with your national ID and first month&apos;s savings contribution.
            Most Saccos require 3–6 months of savings before your first loan.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-black p-6 flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div>
            <h2 className="text-lg font-serif font-bold text-gray-900 mb-1">Need a loan right now?</h2>
            <p className="text-gray-500 text-sm">Compare the cheapest regulated digital apps while you work toward Sacco membership.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/#compare"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-emerald-600 text-gray-900 font-mono font-bold uppercase text-sm transition-colors">
              Compare Apps <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="mt-14 mb-2">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4 px-4 sm:px-0">Related guides</h2>
        <div className="grid sm:grid-cols-2 gap-3 px-4 sm:px-0">
          <Link href="/cbk-licensed" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">CBK Licensed Apps</p>
              <p className="text-stone-500 text-xs mt-0.5">All regulated digital loan options compared</p>
            </div>
          </Link>
          <Link href="/total-cost-calculator" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">True Cost Calculator</p>
              <p className="text-stone-500 text-xs mt-0.5">Compare SACCO vs app costs side by side</p>
            </div>
          </Link>
          <Link href="/loan-finder" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Loan Finder</p>
              <p className="text-stone-500 text-xs mt-0.5">Find the right option for your situation</p>
            </div>
          </Link>
          <Link href="/crb-check" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">CRB Check Guide</p>
              <p className="text-stone-500 text-xs mt-0.5">Check your credit before applying to a SACCO</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
