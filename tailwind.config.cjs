/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	rotate: {
  		'0': '0',
  		'45': '45deg',
  		'90': '90deg',
  		'135': '135deg',
  		'180': '180deg',
  		'270': '270deg',
  		'-180': '-180deg',
  		'-90': '-90deg',
  		'-45': '-45deg'
  	},
  	extend: {
  		fontFamily: {
  			Header: [
  				'Lato',
  				'sans-serif'
  			],
  			Text2: [
  				'Lato',
  				'sans-serif'
  			],
  			About: [
  				'Playfair Display',
  				'serif'
  			],
  			Arimo: [
  				'Arimo',
  				'sans-serif'
  			]
  		},
  		colors: {
  			AAprimary: '#0b192f',
  			AAsecondary: '#64ffda',
  			AAError: '#ff6489',
  			AAtertiary: '#112340',
  			ResumeButtonHover: '#153040',
  			MobileNavBarColor: '#112340',
  			StartupBackground: '#020c1b',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px',
  			'3xl': '1920px',
  			'4xl': '2560px',
  			'5xl': '3840px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
  variants: {
    scrollbar: ["rounded"],
  },
};
