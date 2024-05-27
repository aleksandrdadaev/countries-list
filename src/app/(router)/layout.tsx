import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MainProvider from '../providers/MainProvider'
import '../styles/global.scss'

const inter = Inter({
	weight: ['300', '400', '500', '600', '700'],
	style: 'normal',
	variable: '--font-inter',
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Countries List',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			style={{
				fontFamily: inter.style.fontFamily,
			}}
		>
			<MainProvider>{children}</MainProvider>
		</html>
	)
}
