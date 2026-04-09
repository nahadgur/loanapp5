import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, XCircle, AlertTriangle, ExternalLink, Calendar } from '@/components/Icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CBK Licensed Loan Apps Kenya 2026 | Official Regulated List',
  description:
    'The complete list of loan apps licensed and regulated by the Central Bank of Kenya (CBK) in 2026. Know which apps are legal and which to avoid.',
  keywords: 'CBK licensed loan apps Kenya, regulated loan apps Kenya 2026, Central Bank Kenya approved loans',
  alternates: { canonical: 'https://loanapp.co.ke/cbk-licensed' },
  openGraph: {
    title: 'CBK Licensed Loan Apps Kenya 2026 | Official Regulated List',
    description: 'Know which loan apps are officially licensed by the Central Bank of Kenya. Avoid unlicensed predatory lenders.',
  },
};

const LAST_VERIFIED = 'April 2026';

type LicensedApp = {
  name: string;
  type: string;
  licenseType: string;
  licenseNo?: string;
  cbkCategory: string;
  status: 'licensed' | 'bank-backed' | 'government';
  ussd?: string;
  note?: string;
};

const LICENSED_APPS: LicensedApp[] = [
  {
    name: 'Hustler Fund',
    type: 'Government Digital Credit',
    licenseType: 'Government-Backed (Hustler Fund Act)',
    cbkCategory: 'Government Initiative',
    status: 'government',
    ussd: '*254#',
    note: 'Operated by Safaricom under presidential mandate. Cheapest rates at 8% p.a.',
  },
  {
    name: 'M-Shwari',
    type: 'Mobile Money Loan',
    licenseType: 'CBK Licensed Bank (NCBA)',
    licenseNo: 'NCBA Bank',
    cbkCategory: 'Commercial Bank Product',
    status: 'bank-backed',
    ussd: '*334#',
    note: 'Joint product of Safaricom and NCBA Bank. Fully regulated under Banking Act.',
  },
  {
    name: 'KCB M-Pesa',
    type: 'Mobile Money Loan',
    licenseType: 'CBK Licensed Bank (KCB)',
    licenseNo: 'KCB Group',
    cbkCategory: 'Commercial Bank Product',
    status: 'bank-backed',
    ussd: '*334#',
    note: 'KCB Bank Kenya is a fully licensed commercial bank under CBK.',
  },
  {
    name: 'Fuliza',
    type: 'Overdraft Facility',
    licenseType: 'CBK Licensed Bank (NCBA)',
    cbkCategory: 'Overdraft — Commercial Bank Product',
    status: 'bank-backed',
    ussd: '*334#',
    note: 'Safaricom + NCBA product. Regulated. Watch daily fees — expensive for long-term use.',
  },
  {
    name: 'Eazzy Loan (Equity Bank)',
    type: 'Bank Mobile Loan',
    licenseType: 'CBK Licensed Bank (Equity Group)',
    cbkCategory: 'Commercial Bank Product',
    status: 'bank-backed',
    ussd: '*247#',
    note: 'Equity Bank is a tier-one CBK licensed bank. Very competitive rates at 14% p.a.',
  },
  {
    name: 'Timiza (Absa Bank)',
    type: 'Bank Mobile Loan',
    licenseType: 'CBK Licensed Bank (Absa)',
    cbkCategory: 'Commercial Bank Product',
    status: 'bank-backed',
    ussd: '*848#',
    note: 'Absa Kenya (formerly Barclays) is a fully licensed CBK commercial bank.',
  },
  {
    name: 'Tala Kenya',
    type: 'Digital Credit Provider',
    licenseType: 'CBK Regulated — Non-Deposit Taking Credit Provider',
    licenseNo: 'CBK/NDTCP/2023',
    cbkCategory: 'Non-Deposit Taking Credit Provider (NDTCP)',
    status: 'licensed',
    note: 'Tala was among the first fintechs licensed under CBK\'s 2023 NDTCP framework.',
  },
  {
    name: 'Branch Kenya',
    type: 'Digital Credit Provider',
    licenseType: 'CBK Regulated — Non-Deposit Taking Credit Provider',
    cbkCategory: 'Non-Deposit Taking Credit Provider (NDTCP)',
    status: 'licensed',
    note: 'Branch International holds a CBK NDTCP licence. Regulated since 2023.',
  },
  {
    name: 'Zenka Finance',
    type: 'Digital Credit Provider',
    licenseType: 'CBK Regulated — Non-Deposit Taking Credit Provider',
    cbkCategory: 'Non-Deposit Taking Credit Provider (NDTCP)',
    status: 'licensed',
    note: 'Zenka holds a CBK licence. First loan is often free — useful for building credit.',
  },
  {
    name: 'Faulu Microfinance',
    type: 'Microfinance Bank',
    licenseType: 'CBK Licensed Microfinance Bank',
    cbkCategory: 'Microfinance Bank',
    status: 'licensed',
    note: 'Faulu is a fully licensed microfinance bank under CBK with deposit-taking powers.',
  },
  {
    name: 'KWFT (Kenya Women Finance Trust)',
    type: 'Microfinance Bank',
    licenseType: 'CBK Licensed Microfinance Bank',
    cbkCategory: 'Microfinance Bank',
    status: 'licensed',
    note: 'Licensed microfinance bank focused on women entrepreneurs.',
  },
];

const WHAT_NDTCP_MEANS = [
  'Must disclose the Total Cost of Credit (TCC) before disbursement',
  'Cannot charge more than the CBK-set maximum interest rate',
  'Must report to Credit Reference Bureaus (CRBs) fairly and accurately',
  'Cannot use abusive debt collection practices',
  'Must give borrowers a 7-day cooling-off period',
  'Subject to CBK supervisory inspections and consumer complaints process',
];

const STATUS_CONFIG = {
  'licensed':     { label: 'CBK Licensed NDTCP', color: 'bg-emerald-100 text-emerald-600 border-emerald-300' },
  'bank-backed':  { label: 'Licensed Bank Product', color: 'bg-blue-500/20 text-gray-600 border-blue-500/30' },
  'government':   { label: 'Government Initiative', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
};

export default function CBKLicensedPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'CBK Licensed Loan Apps Kenya 2026',
    description: 'Complete list of loan apps licensed by the Central Bank of Kenya.',
    url: 'https://loanapp.co.ke/cbk-licensed',
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
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-sm font-medium">Last verified: {LAST_VERIFIED}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            CBK Licensed Loan Apps — Kenya 2026
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The Central Bank of Kenya regulates loan apps under the 2023 Non-Deposit Taking Credit Provider (NDTCP) framework.
            Only borrow from apps on this list — unlicensed lenders have no legal accountability to you.
          </p>
        </div>
      </section>

      {/* What CBK licensing means */}
      <section className="px-4 mb-10">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-black p-6">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            What CBK Regulation Requires Loan Apps to Do
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {WHAT_NDTCP_MEANS.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed apps list */}
      <section className="px-4 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-serif font-bold text-gray-900">{LICENSED_APPS.length} Verified Licensed Apps</h2>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              Updated {LAST_VERIFIED}
            </div>
          </div>

          <div className="space-y-3">
            {LICENSED_APPS.map((app) => {
              const sc = STATUS_CONFIG[app.status];
              return (
                <div key={app.name} className="bg-gray-50 border border-black p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{app.name}</h3>
                        <span className={`text-xs px-2.5 py-0.5  border font-medium ${sc.color}`}>
                          {sc.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">{app.licenseType} · {app.cbkCategory}</p>
                      {app.note && <p className="text-sm text-gray-500">{app.note}</p>}
                    </div>
                    <div className="text-right shrink-0">
                      {app.ussd && (
                        <span className="text-xs font-mono bg-gray-200 text-emerald-600 px-2.5 py-1">
                          {app.ussd}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warning section */}
      <section className="px-4 pb-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-500/20 p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <h2 className="text-lg font-bold text-gray-900">Apps Not on This List</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Loan apps not registered with the CBK operate without legal oversight. If they mistreat you — abusive calls,
              sharing contacts, wrong CRB listings — you have no formal regulator to complain to. CBK consumer protection
              rules simply do not apply to them.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/blacklist"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 text-sm font-medium transition-colors">
                <XCircle className="w-4 h-4" />
                See the Blacklist
              </Link>
              <a href="https://www.centralbank.go.ke" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-black text-gray-600 hover:border-black hover:text-emerald-600 text-sm transition-colors">
                <ExternalLink className="w-4 h-4" />
                CBK Official Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to verify */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-black p-6">
          <h2 className="text-lg font-serif font-bold text-gray-900 mb-4">How to Verify an App Yourself</h2>
          <ol className="space-y-3">
            {[
              'Visit the CBK website at centralbank.go.ke and navigate to "Licensing"  › "Credit Providers"',
              'Check the CBK Consumer Protection page for the latest list of licensed NDTCPs',
              'Search the app name on the CBK public register — licensed apps are listed by company name, not always app name',
              'For bank-backed products (M-Shwari, KCB M-Pesa), check the partner bank\'s CBK licence status',
              'If in doubt, call CBK on 020 286 0000 or email ccpd@centralbank.go.ke',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-6 h-6 bg-emerald-100 text-emerald-600  text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related guides */}
      <section className="mt-14 mb-2">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4 px-4 sm:px-0">Related guides</h2>
        <div className="grid sm:grid-cols-2 gap-3 px-4 sm:px-0">
          <Link href="/blacklist" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">x</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Loan App Blacklist</p>
              <p className="text-stone-500 text-xs mt-0.5">Apps to avoid — and why they are dangerous</p>
            </div>
          </Link>
          <Link href="/crb-check" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">CRB Check Guide</p>
              <p className="text-stone-500 text-xs mt-0.5">Check your credit status before borrowing</p>
            </div>
          </Link>
          <Link href="/total-cost-calculator" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">True Cost Calculator</p>
              <p className="text-stone-500 text-xs mt-0.5">See the real cost of any loan including fees</p>
            </div>
          </Link>
          <Link href="/loan-finder" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Loan Finder</p>
              <p className="text-stone-500 text-xs mt-0.5">Match to the right licensed app for your needs</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
