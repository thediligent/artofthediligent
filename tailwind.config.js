import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Accent colors
        accent: {
          low: {
            DEFAULT: '#f8cac3',
            dark: '#40130e',
          },
          DEFAULT: {
            DEFAULT: '#ca0905',
            dark: '#c80201',
          },
          high: {
            DEFAULT: '#5d130d',
            dark: '#f4b8ae',
          },
        },
        // Grayscale
        gray: {
          1: {
            DEFAULT: '#272727',
            dark: '#eeeeee',
          },
          2: {
            DEFAULT: '#383838',
            dark: '#c2c2c2',
          },
          3: {
            DEFAULT: '#585858',
            dark: '#8b8b8b',
          },
          4: {
            DEFAULT: '#8b8b8b',
            dark: '#585858',
          },
          5: {
            DEFAULT: '#c2c2c2',
            dark: '#383838',
          },
          6: {
            DEFAULT: '#eeeeee',
            dark: '#272727',
          },
          7: {
            DEFAULT: '#f6f6f6',
            dark: '#1a1a1a',
          },
        },
        // Base colors
        primary: {
          DEFAULT: '#AE1416',
          dark: '#AE1416',
        },
        secondary: {
          DEFAULT: '#AE1416',
          dark: '#AE1416',
        },
        // Background colors
        bg: {
          DEFAULT: '#fefefe',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['Archivo', 'sans-serif'],
      },
      fontWeight: {
        'archivo-100': 100,
        'archivo-200': 200,
        'archivo-300': 300,
        'archivo-400': 400,
        'archivo-500': 500,
        'archivo-600': 600,
        'archivo-700': 700,
        'archivo-800': 800,
        'archivo-900': 900,
      },
      fontStyle: {
        'archivo-italic': 'italic',
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
