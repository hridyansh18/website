/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: "#062B24",
          rich: "#0A3B30",
          panel: "#0D4537",
          line: "#1C5A47",
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#E8CB6E",
          dim: "#9C7F2A",
          bright: "#F2D376",
        },
        cream: {
          DEFAULT: "#F6F1E4",
          dim: "#E4DCC6",
          faint: "#C9C0A6",
        },
        ink: "#03110D",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.14), transparent 60%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212,175,55,0.35)",
        "gold-lg": "0 20px 60px -20px rgba(212,175,55,0.25)",
        frame: "0 25px 80px -25px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 38s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
