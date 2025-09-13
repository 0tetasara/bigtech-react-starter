import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        // Crypto Theme Colors
        'crypto-dark': 'hsl(var(--crypto-dark))',
        'crypto-darker': 'hsl(var(--crypto-darker))',
        'crypto-card': 'hsl(var(--crypto-card))',
        'crypto-card-hover': 'hsl(var(--crypto-card-hover))',
        
        // Text Colors
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'text-muted': 'hsl(var(--text-muted))',
        
        // Accent Colors
        'accent-cyan': 'hsl(var(--accent-cyan))',
        'accent-orange': 'hsl(var(--accent-orange))',
        'accent-green': 'hsl(var(--accent-green))',
        'accent-red': 'hsl(var(--accent-red))',
        'accent-purple': 'hsl(var(--accent-purple))',
        
        // Border Colors
        'border-default': 'hsl(var(--border-default))',
        'border-accent': 'hsl(var(--border-accent))',
        
        // Legacy colors for compatibility
        border: "hsl(var(--border-default))",
        input: "hsl(var(--border-default))",
        ring: "hsl(var(--accent-cyan))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--crypto-card))",
          foreground: "hsl(var(--text-primary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--accent-red))",
          foreground: "hsl(var(--text-primary))",
        },
        muted: {
          DEFAULT: "hsl(var(--crypto-card))",
          foreground: "hsl(var(--text-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent-cyan))",
          foreground: "hsl(var(--crypto-dark))",
        },
        popover: {
          DEFAULT: "hsl(var(--crypto-card))",
          foreground: "hsl(var(--text-primary))",
        },
        card: {
          DEFAULT: "hsl(var(--crypto-card))",
          foreground: "hsl(var(--text-primary))",
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        particleFloat: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(-100px) translateX(100px)',
            opacity: '0'
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'particle-float': 'particleFloat 15s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
