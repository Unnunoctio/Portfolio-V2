/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				geist: ['Geist']
			},
			colors: {
				bg: {
					primary: '#1c1c1c',
					secondary: '#141212',
					tertiary: '#272727',
					hover: '#3e3e3eaa',
					developing: "#4e119d",
					'developing-light': "#8b5cf6",
					skeleton: "#272727"
				},
				text: {
					primary: '#f0f0f0',
					secondary: '#a5a5a5',
					tertiary: '#805ad5',
					hover: '#efefef',
					'github-detail': '#525252'
				},
				border: {
					primary: '#353535'
				},
				outline: {
					card: "#c0c0c088"
				},
				calendar: {
          0: '#2D2D2Dab',
          1: '#433853',
          2: '#58447C',
          3: '#6C4Fa8',
          4: '#8B5CF6',
          border: 'rgba(255, 255, 255, 0.05)'
        }
			},
			boxShadow: {
				primary: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
				card: '0px 16px 60px 4px rgba(128, 90, 213, 0.3)'
			},
			keyframes: {
				'card-shadow-pulse': {
          '0%, 100%': { boxShadow: '0px 16px 60px 4px rgba(128, 90, 213, 0.3)', transform: 'scale(1)' }, 
          '50%': { boxShadow: '0px 16px 60px 20px rgba(128, 90, 213, 0.7)', transform: 'scale(1.03)' }, 
        },
        'card-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
			},
			animation: {
				'card-shadow-pulse': 'card-shadow-pulse 300ms ease-in-out',
        'card-pulse': 'card-pulse 300ms ease-in-out',
			}
		},
	},
	plugins: [],
}
