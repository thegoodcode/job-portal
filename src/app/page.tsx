import { ThemeToggle } from 'components/theme-toggle'
import { JobList } from 'components/job-list'
import { jobs } from 'data/jobs'

export default function Home() {
	return (
		<main className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-6'>
				{/* Header */}
				<header className='flex items-center justify-between'>
					<h1 className='text-2xl font-medium'>Job Portal</h1>
					<ThemeToggle />
				</header>

				<JobList jobs={jobs} />
			</div>
		</main>
	)
}
