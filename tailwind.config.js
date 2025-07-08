/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // dark blue background
          light: '#1e293b',   // lighter blue for cards, etc
          dark: '#0a1120',    // even darker variant
        },
        accent: {
          DEFAULT: '#e53e3e', // main red
          light: '#f87171',   // light red
          dark: '#b91c1c',    // dark red
        },
        secondary: {
          DEFAULT: '#2563eb', // blue for text
          light: '#3b82f6',
          dark: '#1e40af',
        },
        surface: {
          DEFAULT: '#fff',
          dark: '#18181b',
        },
        muted: {
          DEFAULT: '#64748b', // gray
          dark: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
}

