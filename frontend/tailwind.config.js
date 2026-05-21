/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Anton', 'sans-serif'],
                subheading: ['Oswald', 'sans-serif'],
                body: ['DM Sans', 'sans-serif'],
            },
            colors: {
                background: '#1A1A1A',
                foreground: '#FFFFFF',
                surface: '#242424',
                'surface-hover': '#2D2D2D',
                brand: {
                    DEFAULT: '#E63946',
                    hover: '#F0545F',
                },
                card: {
                    DEFAULT: '#242424',
                    foreground: '#FFFFFF',
                },
                popover: {
                    DEFAULT: '#242424',
                    foreground: '#FFFFFF',
                },
                primary: {
                    DEFAULT: '#E63946',
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#2D2D2D',
                    foreground: '#FFFFFF',
                },
                muted: {
                    DEFAULT: '#242424',
                    foreground: '#A1A1AA',
                },
                accent: {
                    DEFAULT: '#E63946',
                    foreground: '#FFFFFF',
                },
                destructive: {
                    DEFAULT: '#E63946',
                    foreground: '#FFFFFF',
                },
                border: 'rgba(255, 255, 255, 0.1)',
                input: 'rgba(255, 255, 255, 0.15)',
                ring: '#E63946',
            },
            borderRadius: {
                lg: '0rem',
                md: '0rem',
                sm: '0rem',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.8s ease-out forwards',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
