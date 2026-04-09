import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, XCircle, Phone, Users, Database, ShieldOff, CheckCircle2 } from '@/components/Icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Loan App Blacklist Kenya 2026 | Predatory & Unlicensed Apps to Avoid',
  description:
    'The wall of shame: loan apps in Kenya that are unlicensed, predatory, or banned by CBK. Protects Kenyan borrowers from harassment, contact shaming, and illegal debt collection.',
  keywords: 'loan app blacklist Kenya, predatory loan apps Kenya, unlicensed loan apps Kenya, loan apps to avoid Kenya 2026',
  alternates: { canonical: 'https://loanapp.co.ke/blacklist' },
  openGraph: {
    title: 'Loan App Blacklist Kenya 2026 | Apps to Avoid',
    description: 'Protect yourself from predatory loan apps. See which apps are unlicensed, harass borrowers, or have been flagged by CBK.',
  },
};

const LAST_VERIFIED = 'April 2026';

type BlacklistEntry = {
  name: string;
  reason: string[];
  severity: 'high' | 'medium' | 'warning';
  cbkStatus: string;
  complaints: string;
};

const BLACKLIST: BlacklistEntry[] = [
  {
    name: 'OKash',
    reason: ['Contacts shaming — calls relatives without borrower consent', 'Misleading interest rate advertising', 'Aggressive SMS harassment campaigns'],
    severity: 'high',
    cbkStatus: 'Operating — CBK NDTCP licence pending/unclear as of 2026',
    complaints: 'Hundreds of consumer complaints on Google Play and Twitter',
  },
  {
    name: 'iPesa',
    reason: ['Reads full contact list and shares debt status with contacts', 'Interest rates up to 25% per month not clearly disclosed', 'GPS tracking used for debt collection pressure'],
    severity: 'high',
    cbkStatus: 'Not on CBK licensed NDTCP register as of April 2026',
    complaints: 'Flagged by CBK consumer protection desk',
  },
  {
    name: 'LionCash',
    reason: ['Contact shaming — mass messages sent to borrower\'s entire phone book', 'Hidden fees not disclosed at application', 'No complaint resolution channel available'],
    severity: 'high',
    cbkStatus: 'Not CBK licensed',
    complaints: 'Multiple viral complaints on social media 2024–2025',
  },
  {
    name: 'Flash Loan',
    reason: ['Misleading "instant approval" advertising', 'Weekly rollover fees not disclosed upfront', 'Reports borrowers to CRB even during dispute resolution'],
    severity: 'medium',
    cbkStatus: 'Licence status unclear — not on public CBK register',
    complaints: 'Frequent Play Store reviews citing hidden charges',
  },
  {
    name: 'Kashway',
    reason: ['Short-term loans with effective APR exceeding 500%', 'Automatic loan rollovers without borrower consent', 'Contact access used for shaming'],
    severity: 'high',
    cbkStatus: 'Not CBK licensed — Chinese-owned operator',
    complaints: 'Featured in CBK consumer alerts 2023',
  },
  {
    name: 'Opesa',
    reason: ['Contact list reading used for debt collection', 'Interest rate discrepancies between app and actual charges', 'No cooling-off period offered'],
    severity: 'high',
    cbkStatus: 'Not on CBK NDTCP licensed register',
    complaints: 'Flagged by Kenya Bankers Association 2024',
  },
  {
    name: 'PesaX',
    reason: ['Very high effective APR not prominently disclosed', 'Rollover charges that compound rapidly', 'App permissions include SMS and contacts used for shaming'],
    severity: 'medium',
    cbkStatus: 'Licence status not verified on CBK register',
    complaints: 'Consumer complaints about hidden rollover fees',
  },
  {
    name: 'CreditHela',
    reason: ['Loan approval followed by undisclosed insurance charges deducted from principal', 'Difficult or no account deletion process', 'Customer support effectively unreachable'],
    severity: 'warning',
    cbkStatus: 'Not on CBK licensed list',
    complaints: 'Moderate complaints on app stores',
  },
];

const SEVERITY_CONFIG = {
  high:    { label: 'HIGH RISK — Avoid', color: 'bg-red-500/15 border-red-500/30', badge: 'bg-red-500/20 text-red-400 border-red-500/30', icon: XCircle },
  medium:  { label: 'MEDIUM RISK', color: 'bg-amber-500/10 border-amber-500/20', badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30', icon: AlertTriangle },
  warning: { label: 'USE CAUTION', color: 'bg-yellow-500/10 border-yellow-500/20', badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: AlertTriangle },
};

const WARNING_SIGNS = [
  { icon: Phone, label: 'Calls your contacts', desc: 'Reads your phone book and contacts relatives to shame you about debt.' },
  { icon: Users, label: 'Group shaming SMS', desc: 'Sends messages to your employer, friends, or family about your loan.' },
  { icon: Database, label: 'Hidden rollover fees', desc: 'Automatically rolls your loan over with fees you never agreed to.' },
  { icon: ShieldOff, label: 'No CBK licence', desc: 'Not registered with the Central Bank of Kenya — no legal protection for you.' },
  { icon: AlertTriangle, label: 'Undisclosed APR', desc: 'Shows a low "rate" but doesn\'t tell you the effective annual cost.' },
];

export default function BlacklistPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Loan App Blacklist Kenya 2026 — Predatory Apps to Avoid',
    description: 'Loan apps in Kenya flagged for predatory behaviour, contact shaming, or operating without CBK licence.',
    url: 'https://loanapp.co.ke/blacklist',
    dateModified: '2026-04-06',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      {/* Hero */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Consumer Protection Warning — {LAST_VERIFIED}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Wall of Shame: Loan Apps to Avoid in Kenya
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            These apps have been flagged for predatory behaviour, operating without a CBK licence, or using illegal
            debt collection tactics. We publish this list to protect Kenyan borrowers.
          </p>
          <p className="text-xs text-slate-600 mt-3">
            Know an app that should be listed? Use the CBK complaints link below to report it.
          </p>
        </div>
      </section>

      {/* Warning signs to watch for */}
      <section className="px-4 mb-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-white mb-4">5 Warning Signs of a Predatory Loan App</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-5">
            {WARNING_SIGNS.map((sign) => (
              <div key={sign.label} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <sign.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-white text-xs font-bold mb-1">{sign.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{sign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The blacklist */}
      <section className="px-4 pb-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-5">{BLACKLIST.length} Apps Flagged — Avoid These</h2>
          <div className="space-y-4">
            {BLACKLIST.map((entry) => {
              const sc = SEVERITY_CONFIG[entry.severity];
              const Icon = sc.icon;
              return (
                <div key={entry.name} className={`border rounded-2xl p-5 ${sc.color}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{entry.name}</h3>
                        <p className="text-xs text-slate-500">{entry.cbkStatus}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold shrink-0 ${sc.badge}`}>
                      {sc.label}
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    {entry.reason.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        {r}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-900/30 rounded-lg px-3 py-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{entry.complaints}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to do if victimised */}
      <section className="px-4 pb-10">
        <div className="max-w-4xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            What to Do If an App Has Harassed You
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { step: '1', title: 'File a CBK complaint', desc: 'Visit centralbank.go.ke → Consumer Protection → File a Complaint. The CBK Consumer Protection Department investigates all complaints.' },
              { step: '2', title: 'Report to the DCI', desc: 'Contact the Directorate of Criminal Investigations (DCI) if an app threatened you or shared your data illegally. File a report at dci.go.ke.' },
              { step: '3', title: 'Contact the ODPC', desc: 'The Office of the Data Protection Commissioner (ODPC) handles illegal use of your contacts. File at odpc.go.ke.' },
              { step: '4', title: 'Block the app immediately', desc: 'Revoke app permissions in your phone settings (Settings → Apps → Permissions). Uninstall the app and change your M-Pesa PIN.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="w-7 h-7 bg-emerald-500/20 text-emerald-400 rounded-full text-sm flex items-center justify-center shrink-0 font-bold">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm mb-5">
            Want to borrow safely? Only use apps from the CBK licensed list.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cbk-licensed"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg text-sm transition-colors">
              See CBK Licensed Apps
            </Link>
            <Link href="/#compare"
              className="px-5 py-2.5 border border-slate-600 hover:border-emerald-500 text-white rounded-lg text-sm transition-colors">
              Compare Safe Loan Apps
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 pb-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-slate-600 text-center leading-relaxed">
            This blacklist is compiled from public CBK consumer protection alerts, verified social media complaints, and app store reviews.
            It is for informational purposes only. Apps listed here may have updated their practices since publication.
            Last updated {LAST_VERIFIED}. If you believe an entry is incorrect, contact us.
          </p>
        </div>
      </section>

      {/* Related guides */}
      <section className="mt-14 mb-2">
        <h2 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4 px-4 sm:px-0">Related guides</h2>
        <div className="grid sm:grid-cols-2 gap-3 px-4 sm:px-0">
          <Link href="/cbk-licensed" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">✅</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">CBK Licensed Apps</p>
              <p className="text-stone-500 text-xs mt-0.5">The safe, regulated alternatives to use instead</p>
            </div>
          </Link>
          <Link href="/crb-check" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">📊</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">CRB Check Guide</p>
              <p className="text-stone-500 text-xs mt-0.5">If a blacklisted app listed you on CRB — fix it here</p>
            </div>
          </Link>
          <Link href="/total-cost-calculator" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">🧮</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">True Cost Calculator</p>
              <p className="text-stone-500 text-xs mt-0.5">Compare real costs before choosing an app</p>
            </div>
          </Link>
          <Link href="/loan-finder" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-xl p-4 transition-all group">
            <span className="text-xl shrink-0">🔍</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">Find a Safe Loan</p>
              <p className="text-stone-500 text-xs mt-0.5">Match to a regulated lender for your situation</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
