import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        // InterRoom Professional Futuristic Brand Colors - 2025 Palette
        "ir-primary": "#2563EB", // Professional Blue
        "ir-secondary": "#4F46E5", // Sophisticated Indigo
        "ir-accent": "#0EA5E9", // Sky Blue
        "ir-success": "#10B981", // Professional Green
        "ir-warning": "#F59E0B", // Amber
        "ir-info": "#6366F1", // Soft Indigo

        // Professional Neutral Palette
        "ir-dark": "#0F172A", // Slate 900
        "ir-charcoal": "#1E293B", // Slate 800
        "ir-slate": "#334155", // Slate 700
        "ir-gray": "#475569", // Slate 600
        "ir-light-gray": "#64748B", // Slate 500
        "ir-off-white": "#F8FAFC", // Slate 50
        "ir-surface": "#1E293B", // Slate 800
        "ir-border": "#334155", // Slate 700

        // Glass/Translucent Effects
        "ir-glass": "rgba(255, 255, 255, 0.1)", // Glass White
        "ir-glass-dark": "rgba(15, 23, 42, 0.8)", // Glass Dark

        // Legacy color mappings for backward compatibility
        "ir-medium": "#4F46E5", // Sophisticated Indigo
        "ir-periwinkle": "#E2E8F0", // Slate 200
        "ir-pastel": "#F1F5F9", // Slate 100
        "ir-neutral-grape": "#6366F1", // Soft Indigo
        "ir-off-black": "#0F172A", // Slate 900
        "ir-warm-stone": "#E2E8F0", // Slate 200
        "ir-dark-stone": "#64748B", // Slate 500
        "ir-neutral-100": "#F8FAFC", // Slate 50
        "ir-neutral-200": "#F1F5F9", // Slate 100
        "ir-neutral-300": "#E2E8F0", // Slate 200
        "ir-neutral-800": "#1E293B", // Slate 800
        "ir-light": "#F1F5F9", // Slate 100

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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)",
            transform: "scale(1.01)",
          },
        },
        "professional-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "professional-pulse": "professional-pulse 2s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(37, 99, 235, 0.3)",
        "glow-indigo": "0 0 20px rgba(79, 70, 229, 0.3)",
        "glow-sky": "0 0 20px rgba(14, 165, 233, 0.3)",
        professional: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "professional-grid":
          "linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "professional-grid": "20px 20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
