import { jobs } from 'data/jobs'
import { JobDetails } from 'components/job-details'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
	params: {
		id: string
	}
	searchParams: { [key: string]: string | string[] | undefined }
}

export default function JobPage({ params }: PageProps) {
	const { id } = params
	const job = jobs.find(job => job.id === id)

	if (!job) {
		notFound()
	}

	return (
		<div className='min-h-screen bg-background'>
			<div className='mx-auto max-w-[960px] p-6'>
				<div className='mb-6'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'>
						<ArrowLeft className='w-5 h-5' />
						<span>Back to Jobs</span>
					</Link>
				</div>
				<JobDetails job={job} hideButton={true} />
			</div>
		</div>
	)
}
