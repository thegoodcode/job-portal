'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Image from 'next/image'
import { Search, X } from 'lucide-react'
import { Job } from 'data/jobs'
import { FilterDialog, FilterOptions } from './filter-dialog'
import { JobDetails } from './job-details'

interface JobListProps {
	jobs: Job[]
}

export function JobList({ jobs }: JobListProps) {
	const [activeTab, setActiveTab] = useState<
		'active' | 'saved' | 'applied' | 'closed' | 'discarded'
	>('active')
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedJob, setSelectedJob] = useState<Job | null>(null)
	const [filters, setFilters] = useState<FilterOptions>({
		jobTypes: [],
		experienceLevels: [],
		salaryRange: '',
		locations: []
	})

	const filteredJobs = jobs.filter(job => {
		const matchesTab =
			activeTab === 'active'
				? !job.status || job.status === 'active'
				: job.status === activeTab

		const matchesSearch =
			searchQuery.toLowerCase() === '' ||
			job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
			job.description.toLowerCase().includes(searchQuery.toLowerCase())

		const matchesJobType =
			filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type)

		const matchesExperience =
			filters.experienceLevels.length === 0 ||
			filters.experienceLevels.includes(job.experience)

		const matchesLocation =
			filters.locations.length === 0 ||
			filters.locations.some(location => {
				if (location.toLowerCase() === 'remote') {
					return job.remote
				}
				return job.location.includes(location)
			})

		return (
			matchesTab &&
			matchesSearch &&
			matchesJobType &&
			matchesExperience &&
			matchesLocation
		)
	})

	return (
		<div className='mx-auto p-4 max-w-[1200px]'>
			{/* Header Section - Always Full Width */}
			<div className='w-full space-y-6 mb-8'>
				<h1 className='text-3xl font-bold text-center'>Job Portal</h1>
				{/* Tabs */}
				<div className='w-full border-b'>
					<div className='flex gap-2 overflow-x-auto pb-2 w-full justify-center'>
						<Button
							variant={activeTab === 'active' ? 'default' : 'outline'}
							onClick={() => setActiveTab('active')}>
							Active
						</Button>
						<Button
							variant={activeTab === 'saved' ? 'default' : 'outline'}
							onClick={() => setActiveTab('saved')}>
							Saved
						</Button>
						<Button
							variant={activeTab === 'applied' ? 'default' : 'outline'}
							onClick={() => setActiveTab('applied')}>
							Applied
						</Button>
						<Button
							variant={activeTab === 'closed' ? 'default' : 'outline'}
							onClick={() => setActiveTab('closed')}>
							Closed
						</Button>
						<Button
							variant={activeTab === 'discarded' ? 'default' : 'outline'}
							onClick={() => setActiveTab('discarded')}>
							Discarded
						</Button>
					</div>
				</div>
				{/* Search and Filter Section */}
				<div className='flex gap-2 w-full'>
					<div className='relative flex-1'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground' />
						<input
							type='text'
							placeholder='Search jobs...'
							className='w-full pl-10 pr-4 py-2 rounded-md border bg-background'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
						/>
					</div>
					<FilterDialog filters={filters} onFiltersChange={setFilters} />
				</div>
			</div>

			{/* Content Section - Split when job selected */}
			<div className='flex flex-col lg:flex-row gap-6'>
				<div
					className={`w-full ${
						selectedJob ? 'lg:w-1/3' : 'lg:w-1/3'
					} transition-all duration-200`}>
					{/* Job Cards */}
					<div className='space-y-4'>
						{filteredJobs.map(job => (
							<Card
								key={job.id}
								className='p-6 hover:shadow-md transition-shadow cursor-pointer'
								onClick={() => {
									if (window.innerWidth < 960) {
										window.location.href = `/jobs/${job.id}`;
									} else {
										setSelectedJob(job);
									}
								}}>
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
											<h3 className='font-semibold text-lg'>{job.title}</h3>
											<p className='text-muted-foreground'>{job.company}</p>
											<p className='text-sm text-muted-foreground'>{job.location}</p>
											<p className='text-muted-foreground mt-1'>{job.salary}</p>
										</div>
									</div>
									<div className='flex flex-wrap gap-2 mt-2 text-sm'>
										<span className='px-3 py-1 rounded-full bg-primary/10 text-primary font-medium'>
											{job.type}
										</span>
										<span className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium dark:bg-blue-900/30 dark:text-blue-400'>
											{job.experience}
										</span>
										{job.remote && (
											<span className='px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium dark:bg-green-900/30 dark:text-green-400'>
												Remote
											</span>
										)}
									</div>
								</div>
							</Card>
						))}

						{filteredJobs.length === 0 && (
							<div className='text-center text-muted-foreground py-8'>
								No jobs found. Try adjusting your search or filters.
							</div>
						)}
					</div>
				</div>

				{/* Job Details Section */}
				{selectedJob && (
					<div className='w-full lg:w-2/3 lg:sticky lg:top-4 lg:self-start animate-in slide-in-from-right-8 duration-500'>
						<div className='relative'>
							<button
								onClick={() => setSelectedJob(null)}
								className='absolute -right-2 -top-2 p-1 rounded-full bg-background border shadow-sm hover:bg-secondary transition-colors z-10'>
								<X className='w-4 h-4' />
							</button>
							<JobDetails job={selectedJob} />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
