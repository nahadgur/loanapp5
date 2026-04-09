'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from '@/components/Icons';

const hubLinks = [
  { href: '/cbk-licensed', label: 'CBK Licensed Apps' },
  { href: '/blacklist',    label: 'Blacklist ⚠️' },
  { href: '/crb-check',   label: 'CRB Guide' },
  { href: '/sacco-vs-digital', label: 'Sacco vs Digital' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hubOpen, setHubOpen] = useState(false);

  return (
    <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo-256.png" alt="LoanApp.co.ke" width={36} height={36} priority />
            <div>
              <div className="text-lg font-bold text-white leading-none">LoanApp.co.ke</div>
              <div className="text-xs text-slate-400">Compare loan apps in Kenya</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/#calculator" className="px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-slate-800">
              Calculator
            </Link>
            <Link href="/#compare" className="px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-slate-800">
              Compare
            </Link>

            {/* Hubs dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-slate-800">
                Guides <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute top-full left-0 w-52 bg-slate-900 border border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-1 group-hover:translate-y-0 p-1.5 z-50">
                {hubLinks.map(l => (
                  <Link key={l.href} href={l.href}
                    className="block px-3 py-2.5 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className="px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-slate-800">
              Blog
            </Link>
            <Link href="/#compare"
              className="ml-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg text-sm transition-colors">
              Get a Loan
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-slate-400" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700/50 px-4 py-4 space-y-1">
          <Link href="/#calculator" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm text-slate-300 hover:text-emerald-400 rounded-lg">Calculator</Link>
          <Link href="/#compare" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm text-slate-300 hover:text-emerald-400 rounded-lg">Compare Apps</Link>
          <div className="px-3 pt-2 pb-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Guides</p>
            {hubLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-slate-300 hover:text-emerald-400">
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm text-slate-300 hover:text-emerald-400 rounded-lg">Blog</Link>
          <div className="pt-3">
            <Link href="/#compare" onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg text-sm transition-colors">
              Get a Loan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
