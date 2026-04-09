'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Sparkles, ChevronRight, ArrowLeft, Trophy, AlertTriangle, RotateCcw } from '@/components/Icons'
import { loanApps, formatCurrency } from '@/data/loanApps'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ── Wizard questions ─────────────────────────────────────────────────────
type Step = {
  id: string
  question: string
  subtext?: string
  options: { label: string; value: string; icon: string }[]
}

const STEPS: Step[] = [
  {
    id: 'amount',
    question: 'How much do you need?',
    subtext: 'Select the approximate amount — we will find apps that can cover it.',
    options: [
      { label: 'Under KES 2,000', value: '1000',   icon: '💵' },
      { label: 'KES 2,000–10,000', value: '5000',  icon: '💸' },
      { label: 'KES 10,000–50,000', value: '25000', icon: '💰' },
      { label: 'Over KES 50,000', value: '75000',  icon: '🏦' },
    ],
  },
  {
    id: 'income',
    question: 'Do you have a steady income or savings?',
    subtext: 'This helps us find apps you are most likely to be approved for.',
    options: [
      { label: 'Yes — regular salary or income', value: 'salary', icon: '✅' },
      { label: 'Irregular — business or gig work', value: 'irregular', icon: '🔄' },
      { label: 'No steady income right now', value: 'none', icon: '❌' },
    ],
  },
  {
    id: 'speed',
    question: 'How urgently do you need the money?',
    subtext: 'We will prioritise speed or value based on your urgency.',
    options: [
      { label: 'Right now — within minutes', value: 'urgent',  icon: '⚡' },
      { label: 'Today or tomorrow is fine',  value: 'today',   icon: '🕐' },
      { label: 'Within a week — value matters more', value: 'flexible', icon: '📊' },
    ],
  },
]

// ── Scoring logic ────────────────────────────────────────────────────────
type Answers = Record<string, string>

function scoreApp(appId: string, answers: Answers): number {
  const amount  = Number(answers.amount  || 5000)
  const income  = answers.income  || 'salary'
  const speed   = answers.speed   || 'today'

  let score = 100
  const app = loanApps.find(a => a.id === appId)
  if (!app) return 0

  // Amount fit
  if (app.minAmount > amount || app.maxAmount < amount) return 0

  // Income match
  if (income === 'salary') {
    if (app.category === 'bank') score += 20
    if (app.id === 'equity-eazzy') score += 10
  }
  if (income === 'irregular') {
    if (app.category === 'fintech') score += 10
    if (app.id === 'hustler-fund') score += 15
  }
  if (income === 'none') {
    if (app.id === 'hustler-fund') score += 20
    if (app.id === 'fuliza') score += 10
    if (app.category === 'bank') score -= 20
  }

  // Speed
  if (speed === 'urgent') {
    if (app.processingTime === 'Instant') score += 20
    if (app.processingTime.includes('5-10')) score += 5
  }
  if (speed === 'flexible') {
    // Reward cheaper rates
    score += Math.max(0, 20 - app.interestRateMonthly)
  }

  // Rate bonus — reward cheaper
  score += Math.max(0, 15 - app.interestRateMonthly) * 2

  // CRB caution
  if (!app.crbReporting) score += 10

  return score
}

const BLACKLISTED = ['ipesa', 'kashway']
const MATCH_LABELS = ['Best match', 'Strong match', 'Also consider']

export default function LoanFinderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers]         = useState<Answers>({})
  const [done, setDone]               = useState(false)

  const progress = Math.round(((currentStep) / STEPS.length) * 100)
  const step = STEPS[currentStep]

  const matches = useMemo(() => {
    if (!done) return []
    return loanApps
      .filter(a => !BLACKLISTED.includes(a.id))
      .map(a => ({ ...a, score: scoreApp(a.id, answers) }))
      .filter(a => a.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
  }, [done, answers])

  function selectOption(stepId: string, value: string) {
    const newAnswers = { ...answers, [stepId]: value }
    setAnswers(newAnswers)

    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 250)
    } else {
      setTimeout(() => setDone(true), 300)
    }
  }

  function restart() {
    setCurrentStep(0)
    setAnswers({})
    setDone(false)
  }

  const approvalLabels: Record<string, string> = {
    salary:    'High approval chance',
    irregular: 'Good approval chance',
    none:      'Approval may vary',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to all tools
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Smart Loan Finder</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Find Your Best Loan Match</h1>
          <p className="text-slate-400 text-sm">3 quick questions — we match you with the top 3 apps for your situation</p>
        </div>

        {!done ? (
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
            {/* Progress */}
            <div className="h-1.5 bg-slate-700">
              <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-slate-500">Step {currentStep + 1} of {STEPS.length}</span>
                <div className="flex gap-1.5">
                  {STEPS.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i <= currentStep ? 'bg-purple-500' : 'bg-slate-600'}`} />
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-2">{step.question}</h2>
              {step.subtext && <p className="text-slate-400 text-sm mb-6">{step.subtext}</p>}

              <div className="space-y-3">
                {step.options.map(opt => {
                  const selected = answers[step.id] === opt.value
                  return (
                    <button
                      key={opt.value}
                      onClick={() => selectOption(step.id, opt.value)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${
                        selected
                          ? 'border-purple-500 bg-purple-500/10 text-white'
                          : 'border-slate-600 bg-slate-700/30 text-slate-300 hover:border-purple-500/50 hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <span className="flex-1 text-sm font-medium">{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                    </button>
                  )
                })}
              </div>

              {currentStep > 0 && (
                <button onClick={() => setCurrentStep(currentStep - 1)} className="mt-5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  ← Back
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results */
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Your Top 3 Matches</h2>
              <p className="text-slate-400 text-sm">
                Based on {formatCurrency(Number(answers.amount))} · {answers.income} income · {answers.speed} need
              </p>
            </div>

            {matches.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <p>No perfect matches found. Try adjusting your amount.</p>
              </div>
            ) : (
              matches.map((app, i) => (
                <div key={app.id} className={`border rounded-2xl overflow-hidden ${
                  i === 0 ? 'border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-slate-800/50' : 'border-slate-700 bg-slate-800/40'
                }`}>
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl shrink-0">{i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-white">{app.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
                            i === 0 ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                            i === 1 ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                      'bg-slate-500/20 text-slate-400 border-slate-500/30'
                          }`}>
                            {MATCH_LABELS[i]}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mt-2 mb-3">
                          <div><span className="text-slate-500">Rate:</span> <span className="text-slate-300">{app.interestRate}</span></div>
                          <div><span className="text-slate-500">Speed:</span> <span className="text-slate-300">{app.processingTime}</span></div>
                          <div><span className="text-slate-500">Max:</span> <span className="text-slate-300">{formatCurrency(app.maxAmount)}</span></div>
                          <div><span className="text-slate-500">Approval:</span> <span className="text-emerald-400">{approvalLabels[answers.income] || 'Good'}</span></div>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed mb-3">{app.description}</p>

                        <div className="flex flex-wrap items-center gap-2">
                          <a href={app.downloadLink} target="_blank" rel="noopener noreferrer"
                            className={`px-4 py-2 font-semibold rounded-lg text-xs transition-colors ${
                              i === 0 ? 'bg-purple-500 hover:bg-purple-400 text-white' : 'bg-emerald-500 hover:bg-emerald-400 text-slate-900'
                            }`}>
                            Apply for {app.name} →
                          </a>
                          {app.crbReporting && (
                            <span className="flex items-center gap-1 text-xs text-amber-400">
                              <AlertTriangle className="w-3 h-3" />
                              Reports to CRB
                            </span>
                          )}
                          {!app.crbReporting && (
                            <span className="text-xs text-emerald-400">✓ No CRB reporting</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why matched */}
                  <div className="border-t border-slate-700/50 px-5 py-3 bg-slate-900/20">
                    <p className="text-xs text-slate-500">
                      <span className="text-slate-400 font-medium">Why matched: </span>
                      {app.id === 'hustler-fund' ? 'Cheapest rate in Kenya at 8% p.a. — ideal for your profile.' :
                       app.category === 'bank'    ? 'Bank-backed product — lower rates and higher limits.' :
                       app.processingTime === 'Instant' ? 'Instant disbursement matches your urgency.' :
                       'Strong approval rate for your income type.'}
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* Compare all */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/#compare"
                className="flex-1 text-center py-3 border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-white rounded-xl text-sm transition-colors">
                Compare All Apps
              </Link>
              <Link href="/total-cost-calculator"
                className="flex-1 text-center py-3 border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-white rounded-xl text-sm transition-colors">
                See Total Cost
              </Link>
            </div>

            <button onClick={restart} className="w-full flex items-center justify-center gap-2 py-3 text-slate-500 hover:text-slate-300 text-sm transition-colors">
              <RotateCcw className="w-4 h-4" />
              Start Again
            </button>
          </div>
        )}
      </div>

      {/* Related guides */}
      <section className="mt-14 mb-2">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4 px-4 sm:px-0">Before you apply</h2>
        <div className="grid sm:grid-cols-2 gap-3 px-4 sm:px-0">
          <Link href="/total-cost-calculator" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">🧮</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">Calculate True Cost</p>
              <p className="text-stone-500 text-xs mt-0.5">See total repayment including all fees first</p>
            </div>
          </Link>
          <Link href="/cbk-licensed" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">✅</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">CBK Licensed List</p>
              <p className="text-stone-500 text-xs mt-0.5">Verify your chosen app is regulated</p>
            </div>
          </Link>
          <Link href="/crb-check" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">📊</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">Check Your CRB</p>
              <p className="text-stone-500 text-xs mt-0.5">Know your credit status before applying</p>
            </div>
          </Link>
          <Link href="/blacklist" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">🚫</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">Apps to Avoid</p>
              <p className="text-stone-500 text-xs mt-0.5">Blacklisted and predatory lenders in Kenya</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
