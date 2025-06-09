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
        // InterRoom Brand Colors - 2025 Palette
        "ir-primary": "#9458FA", // Primary Purple
        "ir-medium": "#AD88FD", // Medium Purple
        "ir-periwinkle": "#E5DDFF", // Periwinkle
        "ir-pastel": "#F6F3FF", // Pastel Purple
        "ir-neutral-grape": "#C8B3FF", // Neutral Grape
        "ir-charcoal": "#44403C", // Charcoal
        "ir-off-white": "#FCFBF7", // Off White
        "ir-warm-stone": "#F0ECE8", // Warm Stone
        "ir-dark-stone": "#A8A29E", // Dark Stone (derived)
        "ir-off-black": "#292524", // Off Black

        // Legacy colors for backward compatibility
        "ir-secondary": "#AD88FD", // Maps to Medium Purple
        "ir-accent": "#C8B3FF", // Maps to Neutral Grape
        "ir-neutral-100": "#FCFBF7", // Maps to Off White
        "ir-neutral-200": "#F6F3FF", // Maps to Pastel Purple
        "ir-neutral-300": "#E5DDFF", // Maps to Periwinkle
        "ir-neutral-800": "#292524", // Maps to Off Black
        "ir-warning": "#FF6B5A", // Coral Red (keeping for alerts)
        "ir-success": "#4FD187", // Emerald Green (keeping for success states)
        "ir-light": "#F6F3FF", // Maps to Pastel Purple
        "ir-dark": "#44403C", // Maps to Charcoal
        "ir-info": "#C8B3FF", // Maps to Neutral Grape

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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
        glow: "0 0 15px rgba(148, 88, 250, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
