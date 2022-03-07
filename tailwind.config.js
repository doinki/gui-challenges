module.exports = {
  content: ['src/**/*.@(j|t)s?(x)'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fade-in 300ms ease, fade-out 300ms ease 3.8s forwards',
        'slide-in':
          'fade-in 300ms ease, slide-in 300ms ease, fade-out 300ms ease 3.5s forwards',
      },
      keyframes: {
        'fade-in': { from: { opacity: 0 } },
        'fade-out': { to: { opacity: 0 } },
        'slide-in': { from: { transform: 'translateY(5vh)' } },
      },
    },
  },
};
