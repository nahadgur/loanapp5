import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, FileText, AlertTriangle, CheckCircle2, ExternalLink, Phone, Clock } from '@/components/Icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CRB Check Kenya 2026 | How to Check & Clear Your CRB Status',
  description:
    'Complete guide to checking your CRB status in Kenya, getting a clearance certificate from Metropol or TransUnion, and repairing a bad CRB listing. Free and paid methods covered.',
  keywords: 'CRB check Kenya, CRB clearance certificate Kenya, how to clear CRB Kenya, Metropol CRB, TransUnion Kenya, CRB blacklist Kenya',
  alternates: { canonical: 'https://loanapp.co.ke/crb-check' },
  openGraph: {
    title: 'CRB Check & Clearance Guide Kenya 2026',
    description: 'Step-by-step: check your CRB status, get a clearance certificate, and fix a bad listing. Both Metropol and TransUnion covered.',
  },
};

export default function CRBCheckPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Check Your CRB Status and Get a Clearance Certificate in Kenya',
    description: 'Step-by-step guide to checking CRB status via Metropol or TransUnion and obtaining a clearance certificate.',
    url: 'https://loanapp.co.ke/crb-check',
    step: [
      { '@type': 'HowToStep', position: 1, text: 'Dial *433# on Safaricom to check Metropol CRB status (free, basic check)' },
      { '@type': 'HowToStep', position: 2, text: 'Visit creditinfo.co.ke or metropol.co.ke for a full credit report' },
      { '@type': 'HowToStep', position: 3, text: 'If listed, contact the reporting institution to settle the debt or dispute' },
      { '@type': 'HowToStep', position: 4, text: 'Request a CRB clearance certificate after 60 days of settlement' },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      {/* Hero */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-black  mb-6">
            <Search className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 text-sm font-medium">CRB Hub — Updated April 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            How to Check Your CRB Status & Get a Clearance Certificate
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A bad CRB listing can block you from loans, jobs, and even rental agreements. This guide covers
            every method to check, dispute, and clear your CRB record in Kenya.
          </p>
        </div>
      </section>

      {/* What is CRB */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-black p-6">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-3">What is CRB and Why Does it Matter?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Kenya has three licensed Credit Reference Bureaus (CRBs): <strong className="text-gray-900">Metropol</strong>,
            <strong className="text-gray-900"> TransUnion (CreditInfo)</strong>, and
            <strong className="text-gray-900"> Creditinfo Kenya</strong>. Lenders share your repayment history with them.
            A bad listing — called a "negative listing" — means you missed a payment above KES 1,000 on a regulated loan.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: '🏦', title: 'Blocks bank loans', desc: 'No bank will lend to a CRB-listed person' },
              { icon: '📱', title: 'Blocks loan apps', desc: 'Tala, Branch, M-Shwari all check CRB' },
              { icon: '💼', title: 'Affects employment', desc: 'Some employers check CRB for finance roles' },
            ].map(item => (
              <div key={item.title} className="bg-gray-200/30 p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-gray-900 text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to check */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-5">Step 1: Check Your CRB Status</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Metropol */}
            <div className="bg-gray-50 border border-black p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Metropol CRB</h3>
                  <p className="text-xs text-gray-400">Fastest — via USSD</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-200/30 p-3">
                  <p className="text-xs text-gray-400 mb-1">Free basic check</p>
                  <code className="text-emerald-600 font-mono font-bold">Dial *433#</code>
                  <p className="text-xs text-gray-500 mt-1">Works on any Safaricom line. Gives basic pass/fail status.</p>
                </div>
                <div className="bg-gray-200/30 p-3">
                  <p className="text-xs text-gray-400 mb-1">Full credit report — KES 50</p>
                  <p className="text-xs text-gray-500">Visit <strong className="text-gray-900">metropol.co.ke</strong> or dial *433# and select "Credit Report." Shows all listings with full details.</p>
                </div>
                <div className="bg-gray-200/30 p-3">
                  <p className="text-xs text-gray-400 mb-1">Clearance certificate — KES 2,200</p>
                  <p className="text-xs text-gray-500">Available at metropol.co.ke after all listings are cleared. Needed for jobs and bank applications.</p>
                </div>
              </div>
            </div>

            {/* TransUnion */}
            <div className="bg-gray-50 border border-black p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">TransUnion CreditInfo</h3>
                  <p className="text-xs text-gray-400">Most detailed report</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-200/30 p-3">
                  <p className="text-xs text-gray-400 mb-1">Free annual report</p>
                  <p className="text-xs text-gray-500">You are entitled to <strong className="text-gray-900">one free credit report per year</strong> from each CRB under the Banking Act. Apply at <strong className="text-gray-900">creditinfo.co.ke</strong></p>
                </div>
                <div className="bg-gray-200/30 p-3">
                  <p className="text-xs text-gray-400 mb-1">Additional reports — KES 50–200</p>
                  <p className="text-xs text-gray-500">Visit creditinfo.co.ke, create an account, and request your report online. Results in 24 hours.</p>
                </div>
                <div className="bg-gray-200/30 p-3">
                  <p className="text-xs text-gray-400 mb-1">Clearance certificate — KES 2,200</p>
                  <p className="text-xs text-gray-500">Same price as Metropol. Some employers and banks accept either bureau's certificate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What if listed */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-5">Step 2: If You Are Listed — How to Clear It</h2>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Find out who listed you',
                desc: 'Your full credit report shows the institution name, amount, and date of listing. Download the full report from Metropol or TransUnion to identify all negative entries.',
                timeframe: '1 day',
                color: 'blue',
              },
              {
                step: '2',
                title: 'Pay the outstanding debt',
                desc: 'Contact the lender directly to arrange full payment. Get a written settlement confirmation letter — you will need this later. If the listing is wrong, proceed to the dispute step instead.',
                timeframe: '1–7 days',
                color: 'emerald',
              },
              {
                step: '3',
                title: 'Request the lender to update CRB',
                desc: 'After settlement, the lender must instruct the CRB to update your listing from "non-performing" to "settled." This is the lender\'s legal obligation. Follow up after 14 days if not done.',
                timeframe: '14–30 days',
                color: 'emerald',
              },
              {
                step: '4',
                title: 'Wait for the 60-day clearing period',
                desc: 'CBK rules require settled listings to be removed from your active credit file within 60 days of settlement. After this, you can apply for a clearance certificate.',
                timeframe: '60 days',
                color: 'amber',
              },
              {
                step: '5',
                title: 'Apply for your clearance certificate',
                desc: 'Once your record is clear, apply for a CRB clearance certificate from Metropol (metropol.co.ke) or TransUnion (creditinfo.co.ke). Cost: KES 2,200. Valid for 6 months.',
                timeframe: 'After 60 days',
                color: 'emerald',
              },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 border border-black p-5 flex items-start gap-4">
                <span className={`w-8 h-8  text-sm flex items-center justify-center shrink-0 font-bold ${
                  item.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  item.color === 'blue' ? 'bg-blue-500/20 text-gray-600' :
                  'bg-amber-500/20 text-amber-400'
                }`}>
                  {item.step}
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <span className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                      <Clock className="w-3 h-3" />
                      {item.timeframe}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute wrong listing */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-500/20 p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <h2 className="text-lg font-bold text-gray-900">Disputing a Wrong CRB Listing</h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            If a loan app has listed you incorrectly — for example, listing a loan you never took, or listing you
            after you paid on time — this is a legal violation. You have strong rights under the Credit Reference
            Bureau Regulations 2020.
          </p>
          <div className="space-y-3">
            {[
              { step: '1', text: 'Write to the lender directly disputing the listing — send via email with read receipt or registered post' },
              { step: '2', text: 'If the lender does not respond within 30 days, file a formal dispute with the CRB directly at metropol.co.ke/disputes or creditinfo.co.ke' },
              { step: '3', text: 'If unresolved, file a complaint with the CBK at centralbank.go.ke — CBK can compel lenders to correct false listings' },
              { step: '4', text: 'For serious cases involving data misuse, file with the ODPC (Office of the Data Protection Commissioner) at odpc.go.ke' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-6 h-6 bg-amber-500/20 text-amber-400  text-xs flex items-center justify-center shrink-0 font-bold">
                  {item.step}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps that don't report to CRB */}
      <section className="px-4 mb-8">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-black p-6">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Loan Apps That Do NOT Report to CRB
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            If you are currently listed and need a loan while repairing your CRB, these regulated apps
            do not report to CRB (or report minimally):
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: 'Hustler Fund', note: 'Government-backed, does not report to CRB for standard loans', rate: '8% p.a.' },
              { name: 'Fuliza', note: 'Overdraft — does not do standard CRB check', rate: '1%/day' },
            ].map(app => (
              <div key={app.name} className="bg-emerald-50 border-2 border-emerald-600 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{app.name}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{app.note}</p>
                  </div>
                  <span className="text-emerald-600 text-xs font-semibold">{app.rate}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Note: All regulated lenders are required to report to CRB under CBK rules. The apps above have policies
            that currently limit standard CRB reporting but this can change. Verify current policy before borrowing.
          </p>
        </div>
      </section>

      {/* Official links */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-4">Official CRB Resources</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { name: 'Metropol CRB', url: 'https://metropol.co.ke', desc: 'USSD *433# or online report & clearance', ussd: '*433#' },
              { name: 'CreditInfo Kenya (TransUnion)', url: 'https://creditinfo.co.ke', desc: 'Free annual report + paid options' },
              { name: 'CBK Complaints', url: 'https://www.centralbank.go.ke', desc: 'Consumer Protection Department for disputes' },
            ].map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex flex-col gap-2 bg-gray-50 border border-black hover:border-black p-4 transition-colors group">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">{link.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                </div>
                <p className="text-gray-400 text-xs">{link.desc}</p>
                {link.ussd && <code className="text-emerald-600 font-mono text-xs">{link.ussd}</code>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="mt-14 mb-2">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4 px-4 sm:px-0">Related guides</h2>
        <div className="grid sm:grid-cols-2 gap-3 px-4 sm:px-0">
          <Link href="/blacklist" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">🚫</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Loan App Blacklist</p>
              <p className="text-stone-500 text-xs mt-0.5">Which apps illegally list borrowers on CRB</p>
            </div>
          </Link>
          <Link href="/crb-quiz" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">❓</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">CRB Status Quiz</p>
              <p className="text-stone-500 text-xs mt-0.5">Find out if you are likely listed — 2 minutes</p>
            </div>
          </Link>
          <Link href="/cbk-licensed" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">✅</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">CBK Licensed Apps</p>
              <p className="text-stone-500 text-xs mt-0.5">Borrow safely from regulated lenders</p>
            </div>
          </Link>
          <Link href="/loan-finder" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">🔍</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Loan Finder</p>
              <p className="text-stone-500 text-xs mt-0.5">Match to loans available even with CRB issues</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
