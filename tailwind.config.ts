import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sıcak toprak + koyu modern karışım — yolculuk/macera hissi
        ink: "#0c0a09",       // ana koyu zemin
        ash: "#1c1917",       // kart zemini
        sand: "#f5f0e6",      // açık metin
        ember: "#f97316",     // turuncu vurgu (enerji / yol)
         amber: "#fbbf24",    // altın vurgu
        moss: "#10b981",      // gittiği yer / yeşil
        sky: "#38bdf8",       // gelecek rota / mavi
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.6)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.4s ease-out infinite",
        floaty: "floaty 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
