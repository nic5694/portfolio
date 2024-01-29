/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  content: ["./app/components/*.{js,ts,jsx,tsx}", "./app/*.{js,ts,jsx,tsx}", "./app/components/nav.tsx"],
  theme: {
    screens: {
      xsm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      sky: colors.sky,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.blue,
      stone: colors.stone,
      red: colors.red,
      green: colors.green,
      companyYellow: '#F1C551',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      bebas: ['Bebas Neue', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};

export default config;
