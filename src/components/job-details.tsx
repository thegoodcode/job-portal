'use client'

import { Job } from 'data/jobs'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface JobDetailsProps {
	job: Job
	hideButton?: boolean
	className?: string
}

export function JobDetails({ job, hideButton, className = '' }: JobDetailsProps) {
	return (
		<Card className={`p-6 ${className}`}>
			<div className='flex flex-col gap-4'>
				<div className='flex items-start gap-4'>
					<div className='relative w-16 h-16 rounded-lg bg-white dark:bg-white p-2 flex items-center justify-center'>
						<Image
							src={job.logo}
							alt={`${job.company} logo`}
							fill
							className='object-contain p-1'
							onError={(e) => {
								// @ts-ignore
								e.target.src = '/window.svg'
							}}
						/>
					</div>
					<div className='flex-1'>
						<h2 className='text-xl font-semibold'>{job.title}</h2>
						<p className='text-muted-foreground'>{job.company}</p>
						<p className='text-sm text-muted-foreground'>{job.location}</p>
						<p className='text-muted-foreground mt-1'>{job.salary}</p>
					</div>
				</div>

				<div className='space-y-4'>
					<div>
						<h3 className='font-semibold mb-2'>Job Description</h3>
						<p className='text-muted-foreground whitespace-pre-wrap'>
							{job.description}
						</p>
					</div>

					<div>
						<h3 className='font-semibold mb-2'>Requirements</h3>
						<ul className='list-disc list-inside text-muted-foreground'>
							<li>Experience: {job.experience}</li>
							<li>Job Type: {job.type}</li>
							<li>Location: {job.location}</li>
						</ul>
					</div>

					{!hideButton && (
						<div className='pt-4'>
							<Link href={`/jobs/${job.id}`}>
								<Button className='w-full'>See More Details</Button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</Card>
	)
}
