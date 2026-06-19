import Link from 'next/link';
import { AlertTriangle } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-transparent.png" alt="LoanApp.co.ke logo" width={40} height={40} className="bg-white border border-gray-200 p-1" />
              <span className="font-bold text-2xl tracking-tighter">LOANAPP.CO.KE</span>
            </div>
            <p className="text-gray-400 max-w-sm font-mono text-sm leading-relaxed">
              Kenya&apos;s consumer guard for digital lending. Compare rates, avoid predatory apps, and borrow smarter.
            </p>
          </div>

          {/* Safety Guides */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">Safety Guides</h4>
            <ul className="space-y-2 font-mono text-sm">
              {[
                ['/cbk-licensed',    'CBK Licensed Apps 2026'],
                ['/blacklist',       'Apps to Avoid'],
                ['/crb-check',       'CRB Check & Repair'],
                ['/sacco-vs-digital','Sacco vs Digital Apps'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-emerald-400 hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform">
                    {href === '/blacklist' && <AlertTriangle className="w-3 h-3 text-red-400" />}{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">Resources</h4>
            <ul className="space-y-2 font-mono text-sm">
              {[
                ['/#compare',             'All Loan Apps'],
                ['/#calculator',          'Loan Calculator'],
                ['/total-cost-calculator','True Cost Calculator'],
                ['/loan-finder',          'Loan Finder'],
                ['/guides',               'Loan Guides'],
                ['/blog',                 'Blog'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-emerald-400 hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform">
                    {href === '/blacklist' && <AlertTriangle className="w-3 h-3 text-red-400" />}{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-gray-500">
          <p>© {new Date().getFullYear()} LoanApp.co.ke. All rights reserved.</p>
          <p className="text-center md:text-right max-w-2xl">
            For informational purposes only. We do not issue loans. Always verify exact rates with the official lender before accepting any credit facility.
          </p>
        </div>
      </div>
    </footer>
  );
}
