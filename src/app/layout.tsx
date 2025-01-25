import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Job Portal',
	description: 'Find your next career opportunity',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider defaultTheme='system'>
					<div className='animate-in fade-in duration-500 slide-in-from-bottom-4'>
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
