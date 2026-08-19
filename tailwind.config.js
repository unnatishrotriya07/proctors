/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
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
      colors: {
        border: "hsl(var(--border-hsl, 214.3 31.8% 91.4%))",
        input: "hsl(var(--input-hsl, 214.3 31.8% 91.4%))",
        ring: "hsl(var(--ring-hsl, 204 94% 55%))",
        background: "hsl(var(--background-hsl, 0 0% 100%))",
        foreground: "hsl(var(--foreground-hsl, 222.2 84% 4.9%))",
        primary: {
          DEFAULT: "hsl(var(--primary-hsl, 204 94% 55%))",
          foreground: "hsl(var(--primary-foreground-hsl, 210 40% 98%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-hsl, 210 40% 96.1%))",
          foreground: "hsl(var(--secondary-foreground-hsl, 222.2 47.4% 11.2%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-hsl, 0 84.2% 60.2%))",
          foreground: "hsl(var(--destructive-foreground-hsl, 210 40% 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted-hsl, 210 40% 96.1%))",
          foreground: "hsl(var(--muted-foreground-hsl, 215.4 16.3% 46.9%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent-hsl, 204 94% 55%))",
          foreground: "hsl(var(--accent-foreground-hsl, 222.2 47.4% 11.2%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover-hsl, 0 0% 100%))",
          foreground: "hsl(var(--popover-foreground-hsl, 222.2 84% 4.9%))",
        },
        card: {
          DEFAULT: "hsl(var(--card-hsl, 0 0% 100%))",
          foreground: "hsl(var(--card-foreground-hsl, 222.2 84% 4.9%))",
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.75rem)",
        md: "calc(var(--radius, 0.75rem) - 2px)",
        sm: "calc(var(--radius, 0.75rem) - 4px)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
}
