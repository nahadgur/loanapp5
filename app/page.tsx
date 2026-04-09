'use client';

import { useState, useMemo } from 'react';
import { loanApps, formatCurrency, LoanApp } from '@/data/loanApps';
import {
  ChevronRight, ChevronDown, Scale, AlertTriangle, ShieldOff, Shield,
  TrendingDown, Calculator, Clock, Zap, Star, ArrowRight, FileText,
  CheckCircle2, XCircle,
} from '@/components/Icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type SortField = 'interestRateMonthly' | 'maxAmount' | 'maxTermDays' | 'playStoreRating';
type SortOrder = 'asc' | 'desc';
type CategoryFilter = 'all' | 'mobile-money' | 'bank' | 'fintech';

const TIPS = [
  {
    icon: Scale,
    title: 'Compare Before You Borrow',
    body: 'Interest rates vary wildly — from 0.67% to 30% monthly. A KES 10,000 loan can cost KES 300 or KES 3,000 in interest depending on the app.',
  },
  {
    icon: Shield,
    title: 'Start with Hustler Fund',
    body: 'At 8% per year (0.67% monthly), Hustler Fund is by far the cheapest option. Start there and build your limit before using other apps.',
  },
  {
    icon: Calculator,
    title: 'Bank Apps Beat Fintech',
    body: 'If you have a bank account, Eazzy Loan (Equity) and Timiza (Absa) offer much lower rates than apps like Tala or Branch. Check your bank first.',
  },
  {
    icon: TrendingDown,
    title: 'Avoid Fuliza for Long Periods',
    body: 'Fuliza charges daily fees that compound fast. A KES 5,000 Fuliza for 30 days costs ~KES 1,500 in fees. Pay it off quickly or avoid it.',
  },
  {
    icon: ShieldOff,
    title: 'Watch the App Permissions',
    body: 'Apps like Tala, Branch, and OKash read your SMS, contacts, and location. They may call your contacts if you default. Be aware of this.',
  },
  {
    icon: AlertTriangle,
    title: 'CRB Affects Everything',
    body: 'Most apps report to Credit Reference Bureaus. One late payment can affect your ability to get bank loans, mortgages, and even jobs. Always pay on time.',
  },
];

const TOOLS = [
  {
    href: '/loan-finder',
    icon: Zap,
    title: 'Loan Finder Wizard',
    body: '3 questions → your top 3 app matches with approval likelihood',
    cta: 'Find my best match',
  },
  {
    href: '/total-cost-calculator',
    icon: Calculator,
    title: 'True Cost Calculator',
    body: 'All apps compared — including hidden fees, insurance & excise duty',
    cta: 'Calculate true cost',
  },
  {
    href: '/crb-quiz',
    icon: AlertTriangle,
    title: 'Am I CRB Blacklisted?',
    body: '5-question quiz to assess your CRB risk + free repair guide',
    cta: 'Check my CRB risk',
  },
];

export default function Home() {
  const [loanAmount, setLoanAmount]       = useState<number>(5000);
  const [loanTerm, setLoanTerm]           = useState<number>(30);
  const [sortField, setSortField]         = useState<SortField>('interestRateMonthly');
  const [sortOrder, setSortOrder]         = useState<SortOrder>('asc');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [expandedApp, setExpandedApp]     = useState<string | null>(null);

  const filteredAndSortedApps = useMemo(() => {
    let apps = [...loanApps];
    if (categoryFilter !== 'all') apps = apps.filter(a => a.category === categoryFilter);
    apps = apps.filter(a => a.minAmount <= loanAmount && a.maxAmount >= loanAmount);
    apps.sort((a, b) => {
      const aVal = a[sortField] as number;
      const bVal = b[sortField] as number;
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });
    return apps;
  }, [categoryFilter, loanAmount, sortField, sortOrder]);

  const calculateRepayment = (app: LoanApp, amount: number, days: number) => {
    const months = days / 30;
    const interest = amount * (app.interestRateMonthly / 100) * months;
    return amount + interest;
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortOrder('asc'); }
  };

  const sortArrow = (field: SortField) =>
    sortField === field ? (sortOrder === 'asc' ? ' ↑' : ' ↓') : '';

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* ── Hero: two-column ── */}
      <section id="calculator" className="border-b-2 border-black px-4 sm:px-8 py-16 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest border-2 border-black px-3 py-1 mb-8 inline-block hover:bg-black hover:text-white transition-colors duration-300 cursor-default">
              Market Analysis
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-none tracking-tight mb-6">
              Compare Loan<br />Apps in Kenya.
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-serif italic leading-snug">
              Find the cheapest mobile loans. Analyze interest rates, limits, and hidden fees across Kenya&apos;s top lending platforms.
            </h2>
            <p className="text-gray-600 max-w-lg leading-relaxed mb-10">
              Interest rates on mobile loans vary wildly—from 0.67% to over 30% per month. Calculate exactly what you owe before you borrow and protect your CRB rating.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#compare" className="relative group px-8 py-4 overflow-hidden border-2 border-black font-mono font-bold uppercase text-sm">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Compare All Apps</span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </a>
              <a href="#tips" className="px-8 py-4 border-2 border-black font-mono font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors duration-300">
                Borrowing Tips
              </a>
            </div>
          </div>

          {/* Right — live calculator widget */}
          <div className="border-2 border-black p-6 sm:p-10 bg-gray-50 relative group hover:shadow-brutal transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-black group-hover:bg-emerald-600 transition-colors duration-300" />
            <h3 className="font-serif text-2xl font-bold mb-8">Real-Time Cost Calculator</h3>
            <div className="mb-8">
              <label className="block font-mono text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Principal Amount (KES)</label>
              <div className="flex items-center border-b-2 border-black focus-within:border-emerald-600 transition-colors">
                <span className="font-mono text-2xl font-bold mr-2 text-gray-400">KES</span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full bg-transparent text-4xl sm:text-5xl font-mono focus:outline-none py-2"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block font-mono text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Loan Term (Days)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full bg-transparent border-b-2 border-black text-4xl sm:text-5xl font-mono focus:outline-none focus:border-emerald-600 transition-colors py-2"
              />
            </div>
            {/* Live preview — cheapest 3 */}
            <div className="border-t-2 border-black pt-6">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Cheapest options for your amount:</p>
              <div className="space-y-2">
                {filteredAndSortedApps.slice(0, 3).map((app, i) => {
                  const repay = calculateRepayment(app, loanAmount, Math.min(loanTerm, app.maxTermDays));
                  return (
                    <div key={app.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-gray-400 w-4">{i + 1}.</span>
                        <span className="font-serif font-bold text-gray-900 text-sm">{app.name}</span>
                        <span className="font-mono text-xs text-gray-400">{app.interestRate}</span>
                      </div>
                      <span className="font-mono font-bold text-gray-900 text-sm">{formatCurrency(repay)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="font-mono text-xs text-gray-400 uppercase mt-4 leading-relaxed">
              * Estimates based on advertised flat rates. APR may vary by credit profile.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-black">
            {[
              { value: '12+',     label: 'Loan Apps Compared' },
              { value: '0.67%',   label: 'Lowest Monthly Rate' },
              { value: 'KES 3M',  label: 'Highest Limit' },
              { value: 'Instant', label: 'Fastest Disbursement' },
            ].map((stat) => (
              <div key={stat.label} className="py-8 text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section id="compare" className="py-16 md:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b-2 border-black pb-6">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">The Kenya Loan Index</h2>
              <p className="text-gray-600">Comprehensive comparison of mobile lending rates — Updated 2026.</p>
            </div>
            <div className="font-mono text-sm font-bold uppercase bg-black text-white px-4 py-2 whitespace-nowrap">
              Base: {formatCurrency(loanAmount)} / {loanTerm} days
            </div>
          </div>

          {/* Amount slider */}
          <div className="mb-8 border-2 border-black p-6 bg-gray-50 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-emerald-600 transition-colors" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Loan Amount — {formatCurrency(loanAmount)}
                </label>
                <input type="range" min="500" max="100000" step="500" value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full cursor-pointer" />
                <div className="flex justify-between font-mono text-xs text-gray-400 mt-1">
                  <span>KES 500</span><span>KES 100,000</span>
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Loan Term — {loanTerm} days
                </label>
                <input type="range" min="7" max="180" step="7" value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full cursor-pointer" />
                <div className="flex justify-between font-mono text-xs text-gray-400 mt-1">
                  <span>7 days</span><span>180 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(['all', 'mobile-money', 'bank', 'fintech'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 transition-colors ${
                  categoryFilter === cat
                    ? 'bg-black text-white border-black'
                    : 'border-black text-gray-900 hover:bg-black hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Apps' : cat === 'mobile-money' ? 'M-Pesa' : cat === 'bank' ? 'Banks' : 'Fintech'}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-black font-mono text-sm min-w-[860px]">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left font-bold uppercase tracking-wider">Institution</th>
                  <th className="p-4 text-left font-bold uppercase tracking-wider cursor-pointer hover:bg-gray-800"
                    onClick={() => handleSort('interestRateMonthly')}>
                    Rate/Mo{sortArrow('interestRateMonthly')}
                  </th>
                  <th className="p-4 text-right font-bold uppercase tracking-wider cursor-pointer hover:bg-gray-800"
                    onClick={() => handleSort('maxAmount')}>
                    Max Limit{sortArrow('maxAmount')}
                  </th>
                  <th className="p-4 text-left font-bold uppercase tracking-wider cursor-pointer hover:bg-gray-800"
                    onClick={() => handleSort('maxTermDays')}>
                    Term{sortArrow('maxTermDays')}
                  </th>
                  <th className="p-4 text-left font-bold uppercase tracking-wider">Speed</th>
                  <th className="p-4 text-right font-bold uppercase tracking-wider bg-emerald-900 cursor-pointer hover:bg-emerald-800"
                    onClick={() => handleSort('playStoreRating')}>
                    Est. Repayment{sortArrow('playStoreRating')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedApps.map((app, index) => {
                  const repayment = calculateRepayment(app, loanAmount, Math.min(loanTerm, app.maxTermDays));
                  const isExpanded = expandedApp === app.id;
                  const isCheapest = index === 0;

                  return (
                    <>
                      <tr
                        key={app.id}
                        onClick={() => setExpandedApp(isExpanded ? null : app.id)}
                        className="border-b-2 border-black hover:bg-emerald-50 transition-colors duration-200 cursor-pointer group"
                      >
                        <td className="p-4 border-r-2 border-black">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                              {app.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-bold font-serif text-base text-gray-900">{app.name}</div>
                              <div className="text-gray-500 text-xs capitalize">{app.category.replace('-', ' ')}</div>
                            </div>
                            {isCheapest && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 border border-emerald-300 uppercase tracking-wider">
                                Cheapest
                              </span>
                            )}
                            {app.id === 'okash' && (
                              <span className="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 border border-red-300 uppercase tracking-wider">
                                Flagged
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 border-r-2 border-black">
                          <span className={`font-bold ${
                            app.interestRateMonthly < 5 ? 'text-emerald-700'
                            : app.interestRateMonthly < 15 ? 'text-amber-600'
                            : 'text-red-600'
                          }`}>
                            {app.interestRate}
                          </span>
                        </td>
                        <td className="p-4 border-r-2 border-black text-right text-gray-700">{formatCurrency(app.maxAmount)}</td>
                        <td className="p-4 border-r-2 border-black text-gray-700">{app.loanTerm}</td>
                        <td className="p-4 border-r-2 border-black">
                          <span className={`flex items-center gap-1.5 ${app.processingTime === 'Instant' ? 'text-emerald-700' : 'text-gray-600'}`}>
                            {app.processingTime === 'Instant' && <Zap className="w-3 h-3" />}
                            {app.processingTime}
                          </span>
                        </td>
                        <td className="p-4 text-right text-emerald-700 font-bold text-base bg-emerald-50/40 group-hover:bg-emerald-100 transition-colors">
                          {formatCurrency(repayment)}
                        </td>
                      </tr>

                      {isExpanded && (
                        <tr key={`${app.id}-exp`} className="bg-gray-50 border-b-2 border-black">
                          <td colSpan={6} className="p-6">
                            <div className="grid md:grid-cols-3 gap-6">
                              <div>
                                <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Requirements</h5>
                                <ul className="space-y-1.5">
                                  {app.requirements.map((req, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                      <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-gray-400" /> {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Pros</h5>
                                <ul className="space-y-1.5">
                                  {app.pros.map((pro, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                      <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-emerald-600" /> {pro}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Cons</h5>
                                <ul className="space-y-1.5">
                                  {app.cons.map((con, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                      <XCircle className="w-3 h-3 mt-0.5 shrink-0 text-red-500" /> {con}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-6 pt-6 border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                              <p className="text-sm text-gray-500 max-w-2xl">{app.description}</p>
                              <a href={app.downloadLink} target="_blank" rel="noopener noreferrer"
                                className="relative group/btn px-5 py-2.5 overflow-hidden border-2 border-black font-mono text-xs font-bold uppercase whitespace-nowrap shrink-0">
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Get {app.name}</span>
                                <span className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0" />
                              </a>
                            </div>
                            {app.crbReporting && (
                              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-amber-600 border border-amber-300 bg-amber-50 px-3 py-2 w-fit">
                                <AlertTriangle className="w-3 h-3" />
                                Reports to CRB — late payment may affect your credit score
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredAndSortedApps.length === 0 && (
            <div className="text-center py-12 border-2 border-black mt-4">
              <p className="font-mono text-sm text-gray-500 uppercase">No apps found for {formatCurrency(loanAmount)}. Try adjusting the amount.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Smart Tools ── */}
      <section className="py-16 px-4 sm:px-8 border-y-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Smart Borrowing Tools</h2>
            <p className="text-gray-600">Find your best loan, see the true cost, and check your CRB risk</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {TOOLS.map((tool) => (
              <a key={tool.href} href={tool.href}
                className="group border-2 border-black bg-white p-8 hover:-translate-y-1 hover:shadow-brutal transition-all duration-300">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{tool.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{tool.body}</p>
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-gray-900">
                  {tool.cta} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tips ── */}
      <section id="tips" className="py-16 md:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12 border-b-2 border-black pb-6">
            <h2 className="text-4xl font-serif font-bold text-gray-900">Expert Borrowing Guidelines</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIPS.map((tip) => (
              <article key={tip.title}
                className="border-2 border-black p-8 bg-white hover:-translate-y-1 hover:shadow-brutal transition-all duration-300 cursor-default">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center mb-6">
                  <tip.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
