import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C00645",
          50: "#FFF3F6",
          100: "#FDE7EC",
          200: "#FBCFD9",
          300: "#F7A9BC",
          400: "#EE7B98",
          500: "#D05D65",
          600: "#C00645",
          700: "#9A0437",
          800: "#6F0329",
          900: "#4A021B",
        },

        rose: {
          light: "#FFF8FA",
          soft: "#FCECEF",
          accent: "#E1848C",
          blush: "#EAA8AC",
        },

        neutral: {
          bg: "#FFF8FA",
          text: "#654852",
          heading: "#31121D",
        },
      },

      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
      },

      boxShadow: {
        premium: "0 20px 60px rgba(192,6,69,.15)",
        glass: "0 10px 40px rgba(192,6,69,.08)",
        glow: "0 0 50px rgba(225,132,140,.25)",
      },

      borderRadius: {
        xl2: "20px",
        xl3: "28px",
        xl4: "36px",
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg,#C00645 0%,#D05D65 55%,#E1848C 100%)",

        "soft-gradient":
          "linear-gradient(180deg,#FFF8FA 0%,#FDF3F6 100%)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        pulseGlow: {
          "0%,100%": {
            opacity: ".55",
          },

          "50%": {
            opacity: "1",
          },
        },
      },

      animation: {
        float: "float 7s ease-in-out infinite",
        fadeUp: "fadeUp .8s ease both",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;