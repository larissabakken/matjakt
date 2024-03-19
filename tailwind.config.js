/** @type {(tailwindConfig: object) => object} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    './node_modules/flowbite-react/lib/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    colors: {
      primary: '#a2d8f3',
      secondary: '#f0bc68',
      primaryLight: '#c3d8d1',
      bg: '#aab7bd',
      contrast: '#feb5a4',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
