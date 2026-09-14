/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: ["class"],
  plugins: [],
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
      borderRadius: {
        lg: "var(--radius-lg, 16px)",
        md: "var(--radius-md, 10px)",
        sm: "var(--radius-sm, 6px)",
        xl: "var(--radius-xl, 24px)",
      },
      boxShadow: {
        accent: "var(--shadow-accent)",
        lg: "var(--shadow-lg)",
        md: "var(--shadow-md)",
        sm: "var(--shadow-sm)",
      },
      colors: {
        accent: {
          DEFAULT: "#1b9ffe",
          dark: "#0284c7",
          soft: "rgba(27, 159, 254, 0.12)",
        },
        background: "hsl(var(--background-hsl, 0 0% 100%))",
        border: "hsl(var(--border-hsl, 214.3 31.8% 91.4%))",
        card: {
          DEFAULT: "hsl(var(--card-hsl, 0 0% 100%))",
          foreground: "hsl(var(--card-foreground-hsl, 222.2 84% 4.9%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-hsl, 0 84.2% 60.2%))",
          foreground: "hsl(var(--destructive-foreground-hsl, 210 40% 98%))",
        },
        foreground: "hsl(var(--foreground-hsl, 222.2 84% 4.9%))",
        input: "hsl(var(--input-hsl, 214.3 31.8% 91.4%))",
        muted: {
          DEFAULT: "hsl(var(--muted-hsl, 210 40% 96.1%))",
          foreground: "hsl(var(--muted-foreground-hsl, 215.4 16.3% 46.9%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover-hsl, 0 0% 100%))",
          foreground: "hsl(var(--popover-foreground-hsl, 222.2 84% 4.9%))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary-hsl, 204 94% 55%))",
          foreground: "hsl(var(--primary-foreground-hsl, 210 40% 98%))",
        },
        ring: "hsl(var(--ring-hsl, 204 94% 55%))",
        secondary: {
          DEFAULT: "hsl(var(--secondary-hsl, 210 40% 96.1%))",
          foreground: "hsl(var(--secondary-foreground-hsl, 222.2 47.4% 11.2%))",
        },
      },
      fontFamily: {
        accent: [
          "var(--font-accent)",
          "var(--font-work-sans)",
          "Work Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        heading: [
          "var(--font-heading)",
          "var(--font-instrument-sans)",
          "Instrument Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        sans: [
          "var(--font-sans)",
          "var(--font-inter)",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
    },
  },
};
