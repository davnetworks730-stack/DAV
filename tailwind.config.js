/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: { sheet: '600px', nav: '900px', plans: '1100px' },
      colors: {
        orange: { DEFAULT: '#E8661A', dark: '#C4520F', light: '#FF8A3D', soft: '#FDE9DB', pale: '#FFE3D0', peach: '#FFB27F', ghost: '#F3D6C2', ink: '#B24A0C' },
        navy: { DEFAULT: '#12295C', deep: '#0E1F47', line: '#28427F', rule: '#22366A', mute: '#9FB0D6', soft: '#B9C4DE', text: '#C8D1E6', pale: '#DCE3F2' },
        ink: '#16213A',
        body: '#4A5372',
        muted: '#6B7390',
        cream: '#FBF9F6',
        sand: '#F3EEE7',
        line: { DEFAULT: '#ECE6DE', strong: '#E3DCD2' },
        wa: { DEFAULT: '#25D366', dark: '#1EBE5A', ink: '#0B2E17', light: '#7CE8A6', dot: '#3DDC84' },
        error: '#C0341D',
      },
      fontFamily: {
        sans: ['var(--font-dm)', 'sans-serif'],
        display: ['var(--font-archivo)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: { site: '1240px' },
    },
  },
  plugins: [],
};
