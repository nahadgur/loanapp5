/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-sans)',  'ui-sans-serif',  'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'ui-serif',       'Georgia',   'serif'],
        mono:  ['var(--font-mono)',  'ui-monospace',   'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        brutal: '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
