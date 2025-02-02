import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xxs': '400px',
        'xs': '470px', // Adding a custom breakpoint for 500px
      },
      fontFamily: {
        clash: ["var(--font-clash)"],
        satoshi: ["var(--font-satoshi)"],
      },
      borderColor: {
        grGray: "#D9D9D9",
        grGray2: "#F1F1F1",
      },
      boxShadow: {
        grSoft: `box-shadow: 0px 6px 12px 0px #8490A91A`,
        'custom': '0 -18px 18px 3px rgba(0, 0, 0, 0.12)',
        'hoverCustom': '0 24px 72px 6px rgba(0, 0, 0, 0.8)',
      },
      colors: {
        description: "#494949",
        label: "#AFAFAF",
        label2: "#636363",
        label3: "#696969",
        accentGreen: "#2CCDA6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: (theme) => ({
        "blue-gradient":
          "background: linear-gradient(0deg, #000000, #000000),linear-gradient(93.25deg, #164CD9 -12.45%, #32AADD 205.53%)",
        'custom-gradient': 'background: linear-gradient(90deg, #164cd9 95%, #32aadd 0%)'
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
