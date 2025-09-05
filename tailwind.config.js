module.exports = {
  content: ["./index.html", "./assets/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#F3F4F6", // purple-50
          100: "#E5E7EB", // purple-100
          200: "#D1D5DB", // purple-200
          300: "#9CA3AF", // purple-300
          400: "#6B7280", // purple-400
          500: "#6B46C1", // purple-500
          600: "#6B46C1", // purple-600
          700: "#6B46C1", // purple-700
          800: "#553C9A", // purple-800
          900: "#44337A", // purple-900
          DEFAULT: "#6B46C1", // purple-700
        },
        // Secondary Colors
        secondary: {
          50: "#F5F3FF", // violet-50
          100: "#EDE9FE", // violet-100
          200: "#DDD6FE", // violet-200
          300: "#C4B5FD", // violet-300
          400: "#A78BFA", // violet-400
          500: "#8B5CF6", // violet-500
          600: "#7C3AED", // violet-600
          700: "#6D28D9", // violet-700
          800: "#5B21B6", // violet-800
          900: "#4C1D95", // violet-900
          DEFAULT: "#8B5CF6", // violet-500
        },
        // Accent Colors
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
          DEFAULT: "#F59E0B", // amber-500
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800
          secondary: "#6B7280", // gray-500
        },
        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          DEFAULT: "#10B981", // emerald-500
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          DEFAULT: "#F59E0B", // amber-500
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          DEFAULT: "#EF4444", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'testimonial': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderColor: {
        DEFAULT: '#E5E7EB', // gray-200
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6B46C1, #F59E0B)',
        'gradient-secondary': 'linear-gradient(to right, #8B5CF6, #6B46C1)',
      },
    },
  },
  plugins: [],
}
