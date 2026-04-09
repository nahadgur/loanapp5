import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'LoanApp.co.ke - Compare Loan Apps in Kenya | Find the Cheapest Rates',
  description: "Compare interest rates, limits, and terms across 12+ loan apps in Kenya. Calculate exactly what you'll pay back with M-Shwari, Tala, Branch, Fuliza, Hustler Fund, and more.",
  keywords: 'loan apps Kenya, M-Pesa loans, Tala, Branch, M-Shwari, Fuliza, Hustler Fund, KCB M-Pesa, loan comparison Kenya, cheapest loans Kenya',
  openGraph: {
    title: 'LoanApp.co.ke - Compare Loan Apps in Kenya',
    description: 'Find the cheapest loan in Kenya. Compare interest rates across 12+ apps.',
    type: 'website',
    locale: 'en_KE',
  },
  verification: {
    google: '9pHSXLFoWrSi58W1ZhO-oUDaGORNAp8yDcM_zkS75DE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} scroll-smooth`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-97GK6M5TC2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-97GK6M5TC2');
          `}
        </Script>
      </head>
      <body className="antialiased bg-white text-gray-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
