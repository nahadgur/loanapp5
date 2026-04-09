'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
          <Image
            src="/logo-256.png"
            alt="LoanApp logo"
            width={64}
            height={64}
            priority
          />
          <div className="text-left">
            <h1 className="text-2xl font-bold text-white">LoanApp.co.ke</h1>
            <p className="text-sm text-slate-400">Compare loan apps in Kenya</p>
          </div>
        </Link>

        {/* 404 Content */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 md:p-12">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
            404
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-slate-400 mb-8">
            Sorry, we couldn't find the page you're looking for. The loan you're searching for might have been moved or doesn't exist.
          </p>

          <p className="text-emerald-400 font-semibold mb-8">
            Redirecting you to homepage in a few seconds...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            
            <Link 
              href="/#calculator" 
              className="px-6 py-3 border border-slate-600 hover:border-emerald-500 text-white rounded-lg transition-colors"
            >
              Loan Calculator
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-sm text-slate-400">
          <p className="mb-3">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#compare" className="hover:text-emerald-400 transition-colors">
              Compare Loans
            </Link>
            <Link href="/#tips" className="hover:text-emerald-400 transition-colors">
              Borrowing Tips
            </Link>
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
