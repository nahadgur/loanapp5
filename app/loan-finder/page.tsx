'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Sparkles, ChevronRight, ArrowLeft, Trophy, AlertTriangle, RotateCcw, CheckCircle2, XCircle, Banknote, TrendingDown, Wallet, Landmark, Zap, Clock, BarChart2, ArrowRight } from '@/components/Icons'
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
      { label: 'Under KES 2,000', value: '1000',   icon: 'Banknote' },
      { label: 'KES 2,000–10,000', value: '5000',  icon: 'TrendingDown' },
      { label: 'KES 10,000–50,000', value: '25000', icon: 'Wallet' },
      { label: 'Over KES 50,000', value: '75000',  icon: 'Landmark' },
    ],
  },
  {
    id: 'income',
    question: 'Do you have a steady income or savings?',
    subtext: 'This helps us find apps you are most likely to be approved for.',
    options: [
      { label: 'Yes — regular salary or income', value: 'salary', icon: 'CheckCircle2' },
      { label: 'Irregular — business or gig work', value: 'irregular', icon: 'RotateCcw' },
      { label: 'No steady income right now', value: 'none', icon: 'XCircle' },
    ],
  },
  {
    id: 'speed',
    question: 'How urgently do you need the money?',
    subtext: 'We will prioritise speed or value based on your urgency.',
    options: [
      { label: 'Right now — within minutes', value: 'urgent',  icon: 'Zap' },
      { label: 'Today or tomorrow is fine',  value: 'today',   icon: 'Clock' },
      { label: 'Within a week — value matters more', value: 'flexible', icon: 'BarChart2' },
    ],
  },
]


const ICON_MAP: Record<string, React.ComponentType<{className?: string}>> = {
  Banknote, TrendingDown, Wallet, Landmark, CheckCircle2, RotateCcw, XCircle, Zap, Clock, BarChart2,
}

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
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to all tools
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-purple-500/20  mb-5">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Smart Loan Finder</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">Find Your Best Loan Match</h1>
          <p className="text-gray-500 text-sm">3 quick questions — we match you with the top 3 apps for your situation</p>
        </div>

        {!done ? (
          <div className="bg-gray-50 border border-black overflow-hidden">
            {/* Progress */}
            <div className="h-1.5 bg-gray-200">
              <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-gray-400">Step {currentStep + 1} of {STEPS.length}</span>
                <div className="flex gap-1.5">
                  {STEPS.map((_, i) => (
                    <div key={i} className={`w-2 h-2  transition-colors ${i <= currentStep ? 'bg-purple-500' : 'bg-gray-50'}`} />
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">{step.question}</h2>
              {step.subtext && <p className="text-gray-500 text-sm mb-6">{step.subtext}</p>}

              <div className="space-y-3">
                {step.options.map(opt => {
                  const selected = answers[step.id] === opt.value
                  return (
                    <button
                      key={opt.value}
                      onClick={() => selectOption(step.id, opt.value)}
                      className={`w-full text-left p-4 border transition-all flex items-center gap-4 ${
                        selected
                          ? 'border-purple-500 bg-gray-100 text-gray-900'
                          : 'border-black bg-gray-200/30 text-gray-600 hover:border-purple-500/50 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <span className="flex-1 text-sm font-medium">{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                    </button>
                  )
                })}
              </div>

              {currentStep > 0 && (
                <button onClick={() => setCurrentStep(currentStep - 1)} className="mt-5 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  ← Back
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results */
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-1">Your Top 3 Matches</h2>
              <p className="text-gray-500 text-sm">
                Based on {formatCurrency(Number(answers.amount))} · {answers.income} income · {answers.speed} need
              </p>
            </div>

            {matches.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p>No perfect matches found. Try adjusting your amount.</p>
              </div>
            ) : (
              matches.map((app, i) => (
                <div key={app.id} className={`border overflow-hidden ${
                  i === 0 ? 'border-emerald-600 bg-emerald-50' : 'border-black bg-gray-50'
                }`}>
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl shrink-0">{i === 0 ? '' : i === 1 ? '' : ''}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">{app.name}</h3>
                          <span className={`text-xs px-2 py-0.5  font-medium border ${
                            i === 0 ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                            i === 1 ? 'bg-blue-500/20 text-gray-600 border-blue-500/30' :
                                      'bg-gray-50 text-gray-500 border-gray-200'
                          }`}>
                            {MATCH_LABELS[i]}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mt-2 mb-3">
                          <div><span className="text-gray-400">Rate:</span> <span className="text-gray-600">{app.interestRate}</span></div>
                          <div><span className="text-gray-400">Speed:</span> <span className="text-gray-600">{app.processingTime}</span></div>
                          <div><span className="text-gray-400">Max:</span> <span className="text-gray-600">{formatCurrency(app.maxAmount)}</span></div>
                          <div><span className="text-gray-400">Approval:</span> <span className="text-emerald-600">{approvalLabels[answers.income] || 'Good'}</span></div>
                        </div>

                        <p className="text-gray-500 text-xs leading-relaxed mb-3">{app.description}</p>

                        <div className="flex flex-wrap items-center gap-2">
                          <a href={app.downloadLink} target="_blank" rel="noopener noreferrer"
                            className={`px-4 py-2 font-semibold text-xs transition-colors ${
                              i === 0 ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                            }`}>
                            Apply for {app.name}
                          </a>
                          {app.crbReporting && (
                            <span className="flex items-center gap-1 text-xs text-amber-600">
                              <AlertTriangle className="w-3 h-3" />
                              Reports to CRB
                            </span>
                          )}
                          {!app.crbReporting && (
                            <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-mono font-bold"><CheckCircle2 className="w-3 h-3" /> No CRB reporting</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why matched */}
                  <div className="border-t-2 border-black px-5 py-3 bg-white/20">
                    <p className="text-xs text-gray-400">
                      <span className="text-gray-500 font-medium">Why matched: </span>
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
                className="flex-1 text-center py-3 border border-black hover:border-black text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Compare All Apps
              </Link>
              <Link href="/total-cost-calculator"
                className="flex-1 text-center py-3 border border-black hover:border-black text-gray-600 hover:text-gray-900 text-sm transition-colors">
                See Total Cost
              </Link>
            </div>

            <button onClick={restart} className="w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-gray-600 text-sm transition-colors">
              <RotateCcw className="w-4 h-4" />
              Start Again
            </button>
          </div>
        )}
      </div>

      {/* Related guides */}
      <section className="mt-14 mb-2">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4 sm:px-0">Before you apply</h2>
        <div className="grid sm:grid-cols-2 gap-3 px-4 sm:px-0">
          <Link href="/total-cost-calculator" className="flex items-start gap-3 bg-gray-50 border border-gray-200 hover:border-black p-4 transition-all group">
            <span className="text-xl shrink-0"></span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">Calculate True Cost</p>
              <p className="text-gray-500 text-xs mt-0.5">See total repayment including all fees first</p>
            </div>
          </Link>
          <Link href="/cbk-licensed" className="flex items-start gap-3 bg-gray-50 border border-gray-200 hover:border-black p-4 transition-all group">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">CBK Licensed List</p>
              <p className="text-gray-500 text-xs mt-0.5">Verify your chosen app is regulated</p>
            </div>
          </Link>
          <Link href="/crb-check" className="flex items-start gap-3 bg-gray-50 border border-gray-200 hover:border-black p-4 transition-all group">
            <BarChart2 className="w-5 h-5 text-gray-500 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">Check Your CRB</p>
              <p className="text-gray-500 text-xs mt-0.5">Know your credit status before applying</p>
            </div>
          </Link>
          <Link href="/blacklist" className="flex items-start gap-3 bg-gray-50 border border-gray-200 hover:border-black p-4 transition-all group">
            <span className="text-xl shrink-0">x</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">Apps to Avoid</p>
              <p className="text-gray-500 text-xs mt-0.5">Blacklisted and predatory lenders in Kenya</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
