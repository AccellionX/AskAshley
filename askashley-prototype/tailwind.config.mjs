/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          deep: '#061527',
          muted: '#1A3352',
        },
        ivory: {
          DEFAULT: '#F7F3EB',
          soft: '#FBF8F3',
          warm: '#EFE8DC',
        },
        gold: {
          DEFAULT: '#7A6335',
          muted: '#6B5629',
          soft: '#D4C19A',
          line: '#A6864A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        h2: ['2.5rem', { lineHeight: '1.18', letterSpacing: '-0.015em' }],
        h3: ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        lead: ['1.25rem', { lineHeight: '1.55' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        content: '1100px',
        prose: '65ch',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(11, 31, 58, 0.08)',
      },
      letterSpacing: {
        brand: '0.02em',
        label: '0.16em',
      },
      transitionDuration: {
        rise: '400ms',
      },
    },
  },
  plugins: [],
};
