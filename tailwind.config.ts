import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        's': '380px',
        'sm': '580px',
        'md': '768px',
        'lg': '976px',
        'xl': '1240px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
      
      colors: {
        'black': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#000000',
          'primeira':'#111827',
          'segunda':'#4CD7D0',
          'terceira':'#E76C22',
          'quarta':'#eb5e28',
          'quinta':'#9E582F'
      },
      },
    },
  },
  plugins: [],
};
export default config;
