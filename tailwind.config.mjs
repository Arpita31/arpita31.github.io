/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        "bg-primary": "#0a0a0a",
        "bg-secondary": "#111111",
        "bg-tertiary": "#1a1a1a",
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0a0",
        "text-accent": "#00d4ff",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        "mesh-float": "meshFloat 20s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        meshFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
      },
      boxShadow: {
        primary: "0 20px 40px rgba(0, 212, 255, 0.1)",
        hover: "0 30px 60px rgba(0, 212, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
