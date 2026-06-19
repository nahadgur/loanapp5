'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, AlertTriangle } from '@/components/Icons';

const hubLinks: { href: string; label: string; warn?: boolean }[] = [
  { href: '/cbk-licensed',   label: 'CBK Licensed Apps' },
  { href: '/blacklist',      label: 'Blacklist', warn: true },
  { href: '/crb-check',      label: 'CRB Guide' },
  { href: '/sacco-vs-digital', label: 'Sacco vs Digital' },
];

const navLinks = [
  { href: '/#calculator', label: 'Calculator' },
  { href: '/#compare',    label: 'Compare' },
  { href: '/guides',      label: 'Guides' },
  { href: '/blog',        label: 'Blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hubOpen, setHubOpen]       = useState(false);

  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / wordmark */}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/logo-transparent.png" alt="LoanApp.co.ke logo" width={36} height={36} className="bg-white border-2 border-black p-1.5" style={{width:44,height:44}} />
            <span className="font-bold text-xl tracking-tighter">LOANAPP<span className="text-gray-400">.CO.KE</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-sm font-bold uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2 overflow-hidden border-2 border-transparent hover:border-black transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{link.label}</span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </Link>
            ))}

            {/* Guides dropdown */}
            <div className="relative group">
              <button className="relative flex items-center gap-1 px-4 py-2 overflow-hidden border-2 border-transparent hover:border-black transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                  Guides <ChevronDown className="w-3.5 h-3.5" />
                </span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </button>
              <div className="absolute top-full left-0 w-52 bg-white border-2 border-black shadow-brutal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-1 group-hover:translate-y-0 z-50">
                {hubLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-3 text-sm font-mono font-bold uppercase border-b border-gray-200 last:border-0 hover:bg-black hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">{l.warn && <AlertTriangle className="w-3.5 h-3.5 text-red-500" />}{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/#compare"
              className="ml-2 px-5 py-2 bg-black text-white font-mono font-bold uppercase text-sm hover:bg-emerald-600 transition-colors"
            >
              Get a Loan
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t-2 border-black bg-white px-4 py-4 flex flex-col gap-1 font-mono text-sm font-bold uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="p-3 border-2 border-transparent hover:border-black hover:bg-black hover:text-white transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 px-3">Guides</p>
            {hubLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block p-3 border-2 border-transparent hover:border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <span className="flex items-center gap-2">{l.warn && <AlertTriangle className="w-3.5 h-3.5 text-red-500" />}{l.label}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/#compare"
            onClick={() => setMobileOpen(false)}
            className="mt-2 p-3 bg-black text-white text-center hover:bg-emerald-600 transition-colors"
          >
            Get a Loan
          </Link>
        </div>
      )}
    </header>
  );
}
