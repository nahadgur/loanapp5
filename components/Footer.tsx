import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-256.png" alt="LoanApp.co.ke" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-white">LoanApp.co.ke</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kenya&apos;s consumer guard for digital lending. Compare rates, avoid predatory apps, and borrow smarter.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Safety Guides</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/cbk-licensed" className="hover:text-emerald-400 transition-colors">CBK Licensed Apps 2026</Link></li>
              <li><Link href="/blacklist" className="hover:text-emerald-400 transition-colors">Apps to Avoid ⚠️</Link></li>
              <li><Link href="/crb-check" className="hover:text-emerald-400 transition-colors">CRB Check & Repair</Link></li>
              <li><Link href="/sacco-vs-digital" className="hover:text-emerald-400 transition-colors">Sacco vs Digital Apps</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Compare Apps</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/#compare" className="hover:text-emerald-400 transition-colors">All Loan Apps</Link></li>
              <li><Link href="/#calculator" className="hover:text-emerald-400 transition-colors">Loan Calculator</Link></li>
              <li><Link href="/#tips" className="hover:text-emerald-400 transition-colors">Borrowing Tips</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Guides & Blog</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Popular Loans</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/#compare" className="hover:text-emerald-400 transition-colors">Hustler Fund</Link></li>
              <li><Link href="/#compare" className="hover:text-emerald-400 transition-colors">M-Shwari</Link></li>
              <li><Link href="/#compare" className="hover:text-emerald-400 transition-colors">Tala</Link></li>
              <li><Link href="/#compare" className="hover:text-emerald-400 transition-colors">Branch</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} LoanApp.co.ke · For informational purposes only. Always verify rates with official sources. Not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
