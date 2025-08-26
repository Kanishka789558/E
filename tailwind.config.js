
// export default {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#DB4444', // red button like the design
//           dark: '#BA3737',
//         },
//         dark: '#000000',
//         light: '#FAFAFA',
//         muted: '#7D8184',
//       },
//       boxShadow: {
//         soft: '0 4px 24px rgba(0,0,0,0.06)',
//       },
//       borderRadius: {
//         xl2: '1.25rem',
//       },
//     },
//   },
//   plugins: [],
// };


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#4F46E5",
//         "primary-dark": "#4338CA",
//       },
//       boxShadow: {
//         soft: "0 2px 8px rgba(0,0,0,0.05)",
//       }
//     },
//   },
//   plugins: [],
// };
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}", // Scan all src files for Tailwind classes
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#4F46E5", // Example primary color
//         "primary-dark": "#3730A3",
//       },
//       boxShadow: {
//         soft: "0 4px 6px rgba(0,0,0,0.05)",
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DB4444",
        "primary-dark": "#BA3737",
        light: "#FAFAFA",
        muted: "#7D8184"
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};



