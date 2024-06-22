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
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        royalblue: {
          "50": "#eef2ff",
          "100": "#e0e7ff",
          "200": "#c7d3fe",
          "300": "#a5b5fc",
          "400": "#818ef8",
          "500": "#6267f1",
          "600": "#4d46e5",
          "700": "#4138ca",
          "800": "#3530a3",
          "900": "#302e81",
          "950": "#1d1b4b",
        },
        pictonblue: {
          "50": "#f0faff",
          "100": "#e0f5fe",
          "200": "#bae8fd",
          "300": "#7dd5fc",
          "400": "#38bcf8",
          "500": "#0ea5e9",
          "600": "#028ac7",
          "700": "#0370a1",
          "800": "#075e85",
          "900": "#0c506e",
          "950": "#083549",
        },
        mountainmeadow: {
          "50": "#ecfdf7",
          "100": "#d1faec",
          "200": "#a7f3da",
          "300": "#6ee7bf",
          "400": "#34d39e",
          "500": "#10b981",
          "600": "#059666",
          "700": "#047852",
          "800": "#065f42",
          "900": "#064e36",
          "950": "#022c1e",
        },
        wildstrawberry: {
          "50": "#fdf2f8",
          "100": "#fce7f3",
          "200": "#fbcfe8",
          "300": "#f9a8d4",
          "400": "#f472b7",
          "500": "#ec489a",
          "600": "#db2778",
          "700": "#be185e",
          "800": "#9d174e",
          "900": "#831844",
          "950": "#500724",
        },

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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
