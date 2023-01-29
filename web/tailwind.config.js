/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.ts*",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a'
      },
      fontFamily: {
        sans: 'Inter , serif'
      
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0,1fr))'
      }
    },
  },
  plugins: [
     // Passing no configuration will add `radix` to all generated classes. E.g. `radix-state-open`
     require("tailwindcss-radix")(),
     // You can pass a custom prefix like this:
     require("tailwindcss-radix")({
       variantPrefix: "rdx"  
     })
  ],
}
