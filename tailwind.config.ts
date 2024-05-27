import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/screens/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx,scss}',
	],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			gray: {
				100: '#F6F6F6',
				200: '#E4E4E4',
				300: '#C0C0C0',
				400: '#808080',
				500: '#4A4A4A',
			},
		},
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
			},
			spacing: {
				600: '600px',
				550: '550px',
				500: '500px',
				440: '440px',
				340: '340px',
				300: '300px',
				270: '270px',
				200: '200px',
				150: '150px',
				100: '100px',
				60: '60px',
				56: '56px',
				52: '52px',
				48: '48px',
				44: '44px',
				40: '40px',
				36: '36px',
				32: '32px',
				28: '28px',
				24: '24px',
				20: '20px',
				16: '16px',
				12: '12px',
				8: '8px',
				4: '4px',
			},
			borderRadius: {
				circle: '50%',
				10: '10px',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }) => {
			addUtilities({
				'.H1': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '48px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},
				'.H1-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '28px',
					lineHeight: '120%',
					textTransform: 'uppercase',
				},

				'.H2': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '24px',
					lineHeight: '120%',
				},
				'.H2-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '18px',
					lineHeight: '120%',
				},
				'.T1': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '40px',
					lineHeight: '100%',
				},
				'.T1-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: '24px',
					lineHeight: '100%',
				},
				'.T2': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '16px',
					lineHeight: '140%',
				},
				'.T2-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.regular'),
					fontSize: '14px',
					lineHeight: '140%',
				},
				'.T3': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '16px',
					lineHeight: '140%',
					letterSpacing: '0.07em',
					// textTransform: 'lowercase',
				},
				'.T3-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.semibold'),
					fontSize: '14px',
					lineHeight: '140%',
					letterSpacing: '0.07em',
					// textTransform: 'lowercase',
				},
				'.T4': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.medium'),
					fontSize: '14px',
					lineHeight: '100%',
					textTransform: 'uppercase',
				},
				'.T4-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.medium'),
					fontSize: '12px',
					lineHeight: '140%',
					textTransform: 'uppercase',
				},
				'.T5': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.light'),
					fontSize: '14px',
					lineHeight: '100%',
				},
				'.T5-mobile': {
					fontFamily: theme('fontFamily.inter'),
					fontWeight: theme('fontWeight.light'),
					fontSize: '12px',
					lineHeight: '100%',
				},
			})
		}),
	],
}
export default config
