'use client';

import { useState, useMemo } from 'react';
import { loanApps, formatCurrency, LoanApp } from '@/data/loanApps';
import Image from "next/image";
type SortField = 'interestRateMonthly' | 'maxAmount' | 'maxTermDays' | 'playStoreRating';
type SortOrder = 'asc' | 'desc';
type CategoryFilter = 'all' | 'mobile-money' | 'bank' | 'fintech';

export default function Home() {
  const [loanAmount, setLoanAmount] = useState<number>(5000);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [sortField, setSortField] = useState<SortField>('interestRateMonthly');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [expandedApp, setExpandedApp] = useState<string | null>(null);

  const filteredAndSortedApps = useMemo(() => {
    let apps = [...loanApps];
    
    // Filter by category
    if (categoryFilter !== 'all') {
      apps = apps.filter(app => app.category === categoryFilter);
    }
    
    // Filter by loan amount (apps that can handle the requested amount)
    apps = apps.filter(app => app.minAmount <= loanAmount && app.maxAmount >= loanAmount);
    
    // Sort
    apps.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      return sortOrder === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
    });
    
    return apps;
  }, [categoryFilter, loanAmount, sortField, sortOrder]);

  const calculateRepayment = (app: LoanApp, amount: number, days: number) => {
    const months = days / 30;
    const interest = amount * (app.interestRateMonthly / 100) * months;
    return amount + interest;
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
             <Image
  src="/logo-256.png"
  alt="LoanApp logo"
  width={40}
  height={40}
  priority
/>
              <div>
                <h1 className="text-xl font-bold text-white">LoanApp.co.ke</h1>
                <p className="text-xs text-slate-400">Compare loan apps in Kenya</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-emerald-400 transition-colors">Calculator</a>
              <a href="#compare" className="text-slate-300 hover:text-emerald-400 transition-colors">Compare</a>
              <a href="#tips" className="text-slate-300 hover:text-emerald-400 transition-colors">Tips</a>
              <a href="/loan-finder" className="text-slate-300 hover:text-emerald-400 transition-colors">Loan Finder</a>
              <a href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">Blog</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">cheapest loan</span> in Kenya
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Compare interest rates, limits, and terms across 12+ loan apps. Calculate exactly what you'll pay back before you borrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#calculator" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-colors">
                Calculate Loan Cost
              </a>
              <a href="#compare" className="px-6 py-3 border border-slate-600 hover:border-emerald-500 text-white rounded-lg transition-colors">
                Compare All Apps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-slate-700/50 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">12+</div>
              <div className="text-sm text-slate-400">Loan Apps Compared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">0.67%</div>
              <div className="text-sm text-slate-400">Lowest Monthly Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">KES 3M</div>
              <div className="text-sm text-slate-400">Highest Limit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">Instant</div>
              <div className="text-sm text-slate-400">Fastest Disbursement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Loan Calculator</h3>
            <p className="text-slate-400">See exactly how much you'll pay back with each app</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8">
            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 font-medium">Loan Amount</label>
                  <span className="text-emerald-400 font-bold">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>KES 500</span>
                  <span>KES 100,000</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 font-medium">Loan Term</label>
                  <span className="text-emerald-400 font-bold">{loanTerm} days</span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="180"
                  step="7"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>7 days</span>
                  <span>180 days</span>
                </div>
              </div>
            </div>

            {/* Results Preview */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">What you'll pay back:</h4>
              <div className="space-y-3">
                {filteredAndSortedApps.slice(0, 3).map((app) => {
                  const repayment = calculateRepayment(app, loanAmount, Math.min(loanTerm, app.maxTermDays));
                  const interest = repayment - loanAmount;
                  return (
                    <div key={app.id} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{app.logo}</span>
                        <div>
                          <div className="font-medium text-white">{app.name}</div>
                          <div className="text-xs text-slate-400">{app.interestRate}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">{formatCurrency(repayment)}</div>
                        <div className="text-xs text-red-400">+{formatCurrency(interest)} interest</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a href="#compare" className="block text-center text-emerald-400 hover:text-emerald-300 text-sm mt-4">
                See all {filteredAndSortedApps.length} options →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-16 md:py-24 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Compare All Loan Apps</h3>
            <p className="text-slate-400">Click any row to see full details</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-1">
              {(['all', 'mobile-money', 'bank', 'fintech'] as CategoryFilter[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    categoryFilter === cat
                      ? 'bg-emerald-500 text-slate-900'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat === 'mobile-money' ? 'M-Pesa' : cat === 'bank' ? 'Banks' : 'Fintech'}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">App</th>
                  <th 
                    className="text-left py-4 px-4 text-slate-400 font-medium cursor-pointer hover:text-emerald-400"
                    onClick={() => handleSort('interestRateMonthly')}
                  >
                    Interest Rate {sortField === 'interestRateMonthly' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="text-left py-4 px-4 text-slate-400 font-medium cursor-pointer hover:text-emerald-400"
                    onClick={() => handleSort('maxAmount')}
                  >
                    Max Limit {sortField === 'maxAmount' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th 
                    className="text-left py-4 px-4 text-slate-400 font-medium cursor-pointer hover:text-emerald-400"
                    onClick={() => handleSort('maxTermDays')}
                  >
                    Term {sortField === 'maxTermDays' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">Speed</th>
                  <th 
                    className="text-left py-4 px-4 text-slate-400 font-medium cursor-pointer hover:text-emerald-400"
                    onClick={() => handleSort('playStoreRating')}
                  >
                    Rating {sortField === 'playStoreRating' && (sortOrder === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-right py-4 px-4 text-slate-400 font-medium">
                    You'll Pay ({formatCurrency(loanAmount)})
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedApps.map((app) => {
                  const repayment = calculateRepayment(app, loanAmount, Math.min(loanTerm, app.maxTermDays));
                  const isExpanded = expandedApp === app.id;
                  
                  return (
                    <>
                      <tr 
                        key={app.id}
                        onClick={() => setExpandedApp(isExpanded ? null : app.id)}
                        className="border-b border-slate-700/50 hover:bg-slate-700/20 cursor-pointer transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{app.logo}</span>
                            <div>
                              <div className="font-medium text-white">{app.name}</div>
                              <div className="text-xs text-slate-500 capitalize">{app.category.replace('-', ' ')}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`font-medium ${app.interestRateMonthly < 5 ? 'text-emerald-400' : app.interestRateMonthly < 15 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {app.interestRate}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-300">{formatCurrency(app.maxAmount)}</td>
                        <td className="py-4 px-4 text-slate-300">{app.loanTerm}</td>
                        <td className="py-4 px-4">
                          <span className={`text-sm ${app.processingTime === 'Instant' ? 'text-emerald-400' : 'text-slate-400'}`}>
                            {app.processingTime}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-slate-300">{app.playStoreRating}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="font-bold text-white">{formatCurrency(repayment)}</span>
                        </td>
                      </tr>
                      
                      {/* Expanded Details */}
                      {isExpanded && (
                        <tr key={`${app.id}-expanded`} className="bg-slate-800/50">
                          <td colSpan={7} className="py-6 px-4">
                            <div className="grid md:grid-cols-3 gap-6">
                              <div>
                                <h5 className="text-emerald-400 font-semibold mb-2">Requirements</h5>
                                <ul className="space-y-1">
                                  {app.requirements.map((req, i) => (
                                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                      <span className="text-slate-500">•</span> {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-emerald-400 font-semibold mb-2">Pros</h5>
                                <ul className="space-y-1">
                                  {app.pros.map((pro, i) => (
                                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                      <span className="text-emerald-500">✓</span> {pro}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-red-400 font-semibold mb-2">Cons</h5>
                                <ul className="space-y-1">
                                  {app.cons.map((con, i) => (
                                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                      <span className="text-red-500">✗</span> {con}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700 flex items-center justify-between">
                              <p className="text-sm text-slate-400 max-w-2xl">{app.description}</p>
                              <a
                                href={app.downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-medium rounded-lg text-sm transition-colors whitespace-nowrap ml-4"
                              >
                                Get {app.name} →
                              </a>
                            </div>
                            {app.crbReporting && (
                              <div className="mt-4 flex items-center gap-2 text-xs text-amber-400">
                                <span>⚠️</span>
                                <span>Reports to CRB - late payment may affect your credit score</span>
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
            <div className="text-center py-12 text-slate-400">
              No apps found for {formatCurrency(loanAmount)}. Try adjusting the amount.
            </div>
          )}
        </div>
      </section>

      {/* Interactive Tools Banner */}
      <section className="py-12 px-4 bg-slate-800/20 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Smart Borrowing Tools</h3>
            <p className="text-slate-400 text-sm">Find your best loan, see the true cost, and check your CRB risk</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <a href="/loan-finder"
              className="group bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/20 hover:border-purple-500/50 rounded-2xl p-6 transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Loan Finder Wizard</h4>
              <p className="text-slate-400 text-sm mb-3">3 questions → your top 3 app matches with approval likelihood</p>
              <span className="text-purple-400 text-sm font-medium">Find my best match →</span>
            </a>
            <a href="/total-cost-calculator"
              className="group bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 border border-emerald-500/20 hover:border-emerald-500/50 rounded-2xl p-6 transition-all">
              <div className="text-3xl mb-3">🧮</div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Total Cost Calculator</h4>
              <p className="text-slate-400 text-sm mb-3">All apps compared — including hidden fees, insurance & excise duty</p>
              <span className="text-emerald-400 text-sm font-medium">Calculate true cost →</span>
            </a>
            <a href="/crb-quiz"
              className="group bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/20 hover:border-blue-500/50 rounded-2xl p-6 transition-all">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Am I CRB Blacklisted?</h4>
              <p className="text-slate-400 text-sm mb-3">5-question quiz to assess your CRB risk + free repair guide</p>
              <span className="text-blue-400 text-sm font-medium">Check my CRB risk →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Borrowing Tips</h3>
            <p className="text-slate-400">Make smarter decisions with mobile loans</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-white mb-2">Compare Before You Borrow</h4>
              <p className="text-slate-400 text-sm">
                Interest rates vary wildly - from 0.67% to 30% monthly. A KES 10,000 loan can cost you KES 300 or KES 3,000 in interest depending on where you borrow.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Start with Hustler Fund</h4>
              <p className="text-slate-400 text-sm">
                At 8% per year (0.67% monthly), Hustler Fund is by far the cheapest option. Start there and build your limit before using other apps.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-4">🏦</div>
              <h4 className="text-lg font-semibold text-white mb-2">Bank Apps Beat Fintech</h4>
              <p className="text-slate-400 text-sm">
                If you have a bank account, Eazzy Loan (Equity) and Timiza (Absa) offer much lower rates than apps like Tala or Branch. Check your bank first.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-4">⚠️</div>
              <h4 className="text-lg font-semibold text-white mb-2">Avoid Fuliza for Long Periods</h4>
              <p className="text-slate-400 text-sm">
                Fuliza charges daily fees that compound fast. A KES 5,000 Fuliza for 30 days costs ~KES 1,500 in fees. Pay it off quickly or avoid it.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="text-lg font-semibold text-white mb-2">Watch the App Permissions</h4>
              <p className="text-slate-400 text-sm">
                Apps like Tala, Branch, and OKash read your SMS, contacts, and location. They may call your contacts if you default. Be aware of this.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="text-lg font-semibold text-white mb-2">CRB Affects Everything</h4>
              <p className="text-slate-400 text-sm">
                Most apps report to Credit Reference Bureaus. One late payment can affect your ability to get bank loans, mortgages, and even jobs. Always pay on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
  src="/logo-256.png"
  alt="LoanApp logo"
  width={32}
  height={32}
  className="rounded-lg"
  priority
/>

                <span className="text-lg font-bold text-white">LoanApp.co.ke</span>
              </div>
              <p className="text-sm text-slate-400">
                Kenya's most comprehensive loan app comparison tool. Make informed borrowing decisions.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">By Type</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">M-Pesa Loans</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Bank Loans</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Fintech Apps</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Popular Apps</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Hustler Fund</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">M-Shwari</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Tala</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Branch</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-white mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Loan Calculator</a></li>
                <li><a href="#tips" className="hover:text-emerald-400 transition-colors">Borrowing Tips</a></li>
                <li><a href="#compare" className="hover:text-emerald-400 transition-colors">Compare All</a></li>
                <li><a href="/blog" className="hover:text-emerald-400 transition-colors">Guides & Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} LoanApp.co.ke. For informational purposes only. Always verify rates with official sources.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
