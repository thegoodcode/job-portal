'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'components/theme-provider'
import { Button } from 'components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<Button
			variant='ghost'
			size='icon'
			className='relative h-9 w-9 rounded-full'
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<AnimatePresence mode='wait' initial={false}>
				<motion.div
					key={theme === 'light' ? 'light' : 'dark'}
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 20, opacity: 0 }}
					transition={{ duration: 0.2 }}>
					{theme === 'light' ? (
						<Sun className='h-5 w-5 rotate-0 scale-100 transition-all' />
					) : (
						<Moon className='h-5 w-5 rotate-0 scale-100 transition-all' />
					)}
				</motion.div>
			</AnimatePresence>
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
