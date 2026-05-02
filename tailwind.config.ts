import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#102A43',
        primaryLight: '#243B53',
        leather: '#7F5539',
        brass: '#B08968',
        paper: '#FAF8F4',
        linen: '#F3EFE8',
        textPrimary: '#111111',
        borderSubtle: '#D6D0C7',
      },
      fontFamily: {
        heading: ['Shippori Mincho', 'serif'],
        body: ['Noto Sans JP', 'sans-serif'],
        latin: ['Avenir Next', 'Avenir', 'sans-serif'],
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '999px',
      },
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '600ms',
        hero: '1000ms',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.06)',
        md: '0 4px 12px rgba(0,0,0,0.08)',
        lg: '0 10px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
