'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ChevronRight, CheckCircle2, AlertTriangle, XCircle, ArrowLeft } from '@/components/Icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Question = {
  id: number
  text: string
  subtext?: string
  options: { label: string; value: string; risk: number }[]
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Have you ever missed a loan repayment by more than 30 days?',
    subtext: 'This includes M-Shwari, Tala, Branch, KCB M-Pesa, Fuliza, or any bank loan.',
    options: [
      { label: 'Never — I always pay on time', value: 'never', risk: 0 },
      { label: 'Maybe once, but I eventually paid', value: 'once', risk: 2 },
      { label: 'Yes, more than once', value: 'multiple', risk: 4 },
    ],
  },
  {
    id: 2,
    text: 'Do you currently have any outstanding loan you have not fully repaid?',
    subtext: 'Include loans from apps, banks, Saccos, or government funds.',
    options: [
      { label: 'No, all loans are cleared', value: 'clear', risk: 0 },
      { label: 'I have an active loan I am repaying on time', value: 'active', risk: 0 },
      { label: 'I have an overdue loan I have not repaid', value: 'overdue', risk: 5 },
    ],
  },
  {
    id: 3,
    text: 'Have you received any threatening messages from a loan app about CRB listing?',
    subtext: 'Some apps send CRB warnings even for small late payments.',
    options: [
      { label: 'No, never received such a message', value: 'no', risk: 0 },
      { label: 'Yes, but I paid within a few days', value: 'paid', risk: 1 },
      { label: 'Yes, and I did not pay in time', value: 'unpaid', risk: 4 },
    ],
  },
  {
    id: 4,
    text: 'Have you been rejected for a loan recently without a clear reason?',
    subtext: 'Unexplained rejections often indicate a CRB listing.',
    options: [
      { label: 'No recent rejections', value: 'no', risk: 0 },
      { label: 'Rejected once — possibly for other reasons', value: 'once', risk: 1 },
      { label: 'Rejected multiple times across different apps', value: 'multiple', risk: 3 },
    ],
  },
  {
    id: 5,
    text: 'Do you have any disputes with a loan app over an amount you believe you do not owe?',
    subtext: 'Wrong listings by apps are more common than you might think.',
    options: [
      { label: 'No disputes — everything is accurate', value: 'no', risk: 0 },
      { label: 'I have a dispute but it was resolved', value: 'resolved', risk: 1 },
      { label: 'Yes, I have an unresolved dispute with a lender', value: 'unresolved', risk: 3 },
    ],
  },
]

type Result = {
  level: 'clean' | 'monitor' | 'likely' | 'critical'
  headline: string
  message: string
  action: string
  color: string
  icon: typeof CheckCircle2
}

function getResult(score: number): Result {
  if (score === 0) return {
    level: 'clean',
    headline: 'Your CRB record looks clean',
    message: 'Based on your answers, you are unlikely to have a negative CRB listing. Keep maintaining good repayment habits — a clean CRB opens doors to better loan rates and bank products.',
    action: 'Confirm with a free check on *433#',
    color: 'emerald',
    icon: CheckCircle2,
  }
  if (score <= 3) return {
    level: 'monitor',
    headline: 'Low risk — but worth checking',
    message: 'Your history suggests a mostly clean record, but there may be minor issues. A quick *433# check will confirm. Some loan apps list for even KES 1,000 defaults without proper notice.',
    action: 'Do a free check now — dial *433#',
    color: 'blue',
    icon: CheckCircle2,
  }
  if (score <= 7) return {
    level: 'likely',
    headline: 'You may have a CRB listing',
    message: 'Your answers suggest a moderate-to-high chance of a negative CRB listing. This could be blocking loan approvals you are not aware of. Check immediately — if listed, the repair process starts with settling the original debt.',
    action: 'Check now and start your repair plan',
    color: 'amber',
    icon: AlertTriangle,
  }
  return {
    level: 'critical',
    headline: 'High chance you are CRB listed',
    message: 'Based on your answers, you very likely have one or more negative CRB listings. This affects your ability to get loans, mortgages, and some jobs. The good news: it is fixable. Start the process today.',
    action: 'Get your full CRB report and repair guide',
    color: 'red',
    icon: XCircle,
  }
}

export default function CRBQuizPage() {
  const [answers, setAnswers]         = useState<Record<number, { value: string; risk: number }>>({})
  const [currentQ, setCurrentQ]       = useState(0)
  const [showResult, setShowResult]   = useState(false)


  const totalScore = Object.values(answers).reduce((sum, a) => sum + a.risk, 0)
  const result = getResult(totalScore)
  const progress = Math.round((currentQ / QUESTIONS.length) * 100)

  const question = QUESTIONS[currentQ]

  function selectAnswer(qId: number, value: string, risk: number) {
    const newAnswers = { ...answers, [qId]: { value, risk } }
    setAnswers(newAnswers)

    if (currentQ < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300)
    } else {
      setTimeout(() => setShowResult(true), 400)
    }
  }

  function restart() {
    setAnswers({})
    setCurrentQ(0)
    setShowResult(false)
  }

  const colorMap = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-600' },
    blue:    { bg: 'bg-gray-100',    border: 'border-black',    text: 'text-gray-600',    btn: 'bg-blue-500 hover:bg-blue-400' },
    amber:   { bg: 'bg-amber-50',   border: 'border-amber-500/20',   text: 'text-amber-400',   btn: 'bg-amber-500 hover:bg-amber-400' },
    red:     { bg: 'bg-red-50',     border: 'border-red-500/20',     text: 'text-red-400',     btn: 'bg-red-500 hover:bg-red-400' },
  } as const
  const c = colorMap[result.color as keyof typeof colorMap]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <div className="max-w-2xl mx-auto px-4 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-black  mb-5">
            <Search className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 text-sm font-medium">Am I CRB Blacklisted?</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">Quick CRB Risk Assessment</h1>
          <p className="text-gray-500 text-sm">5 questions · 2 minutes · Get your personalised result instantly</p>
        </div>

        {!showResult ? (
          <div className="bg-gray-50 border border-black overflow-hidden">
            {/* Progress bar */}
            <div className="h-1.5 bg-gray-200">
              <div
                className="h-full bg-emerald-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-gray-400">Question {currentQ + 1} of {QUESTIONS.length}</span>
                <span className="text-xs text-emerald-600">{progress}% complete</span>
              </div>

              <h2 className="text-lg font-serif font-bold text-gray-900 mb-2">{question.text}</h2>
              {question.subtext && (
                <p className="text-gray-500 text-sm mb-6">{question.subtext}</p>
              )}

              <div className="space-y-3">
                {question.options.map(opt => {
                  const selected = answers[question.id]?.value === opt.value
                  return (
                    <button
                      key={opt.value}
                      onClick={() => selectAnswer(question.id, opt.value, opt.risk)}
                      className={`w-full text-left p-4 border transition-all flex items-center gap-3 ${
                        selected
                          ? 'border-emerald-500 bg-emerald-50 text-gray-900'
                          : 'border-black bg-gray-200/30 text-gray-600 hover:border-black hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-5 h-5  border-2 flex items-center justify-center shrink-0 transition-all ${
                        selected ? 'border-emerald-500 bg-emerald-600' : 'border-gray-200'
                      }`}>
                        {selected && <div className="w-2 h-2 bg-white " />}
                      </div>
                      <span className="text-sm">{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 ml-auto shrink-0" />
                    </button>
                  )
                })}
              </div>

              {/* Back button */}
              {currentQ > 0 && (
                <button onClick={() => setCurrentQ(currentQ - 1)}
                  className="mt-5 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  ← Previous question
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Result */
          <div className="space-y-5">
            {/* Result card */}
            <div className={`border p-7 ${c.bg} ${c.border}`}>
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 flex items-center justify-center shrink-0 ${c.bg}`}>
                  <result.icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${c.text} mb-1`}>{result.headline}</h2>
                  <p className="text-xs text-gray-400">Risk score: {totalScore}/17</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{result.message}</p>

              {/* Next step */}
              <div className="bg-white/40 p-4">
                <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">Recommended Next Step</p>
                <p className="text-gray-900 text-sm font-medium">{result.action}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <a href="tel:*433%23"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 ${c.btn} text-gray-500 font-semibold text-sm transition-colors`}>
                    Dial *433# (Free check)
                  </a>
                  <Link href="/crb-check"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-black hover:border-gray-200 text-gray-600 text-sm transition-colors">
                    Full CRB Guide
                  </Link>
                </div>
              </div>
            </div>



            {/* Answer summary */}
            <div className="bg-gray-50 border border-black p-5">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Your Answers</h3>
              <div className="space-y-3">
                {QUESTIONS.map(q => {
                  const ans = answers[q.id]
                  const opt = q.options.find(o => o.value === ans?.value)
                  return (
                    <div key={q.id} className="flex items-start gap-3">
                      <span className={`text-xs font-bold w-4 shrink-0 mt-0.5 ${ans?.risk === 0 ? 'text-emerald-600' : ans?.risk <= 2 ? 'text-amber-400' : 'text-red-400'}`}>
                        Q{q.id}
                      </span>
                      <div>
                        <p className="text-gray-500 text-xs">{q.text}</p>
                        <p className={`text-sm font-medium mt-0.5 ${ans?.risk === 0 ? 'text-emerald-600' : ans?.risk <= 2 ? 'text-amber-400' : 'text-red-400'}`}>
                          {opt?.label}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <button onClick={restart} className="w-full py-3 border border-black hover:border-gray-200 text-gray-500 hover:text-black text-sm transition-colors">
              Retake the Quiz
            </button>
          </div>
        )}
      </div>

      {/* Related guides */}
      <section className="mt-14 mb-2">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4 px-4 sm:px-0">Next steps</h2>
        <div className="grid sm:grid-cols-2 gap-3 px-4 sm:px-0">
          <Link href="/crb-check" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">📊</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Full CRB Check Guide</p>
              <p className="text-stone-500 text-xs mt-0.5">How to get your full credit report and dispute errors</p>
            </div>
          </Link>
          <Link href="/blacklist" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">🚫</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Loan App Blacklist</p>
              <p className="text-stone-500 text-xs mt-0.5">Apps known for illegal CRB listings</p>
            </div>
          </Link>
          <Link href="/cbk-licensed" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">✅</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Licensed Apps Only</p>
              <p className="text-stone-500 text-xs mt-0.5">Borrow from regulated lenders to protect your CRB</p>
            </div>
          </Link>
          <Link href="/loan-finder" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 p-4 transition-all group">
            <span className="text-xl shrink-0">🔍</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-400 transition-colors">Find a Loan</p>
              <p className="text-stone-500 text-xs mt-0.5">Options available even with CRB issues</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
