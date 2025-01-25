'use client'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { SlidersHorizontal } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Separator } from './ui/separator'

export type FilterOptions = {
  jobTypes: string[]
  experienceLevels: string[]
  salaryRange: string
  locations: string[]
}

interface FilterDialogProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
}

export function FilterDialog({ filters, onFiltersChange }: FilterDialogProps) {
  const handleJobTypeChange = (type: string) => {
    const newTypes = filters.jobTypes.includes(type)
      ? filters.jobTypes.filter(t => t !== type)
      : [...filters.jobTypes, type]
    onFiltersChange({ ...filters, jobTypes: newTypes })
  }

  const handleExperienceChange = (level: string) => {
    const newLevels = filters.experienceLevels.includes(level)
      ? filters.experienceLevels.filter(l => l !== level)
      : [...filters.experienceLevels, level]
    onFiltersChange({ ...filters, experienceLevels: newLevels })
  }

  const handleLocationChange = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter(l => l !== location)
      : [...filters.locations, location]
    onFiltersChange({ ...filters, locations: newLocations })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Jobs</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <h4 className="font-medium">Job Type</h4>
            <div className="grid grid-cols-2 gap-4">
              {['Full-time', 'Part-time', 'Contract', 'Internship'].map(type => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={filters.jobTypes.includes(type)}
                    onCheckedChange={() => handleJobTypeChange(type)}
                  />
                  <Label htmlFor={`type-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <h4 className="font-medium">Experience Level</h4>
            <div className="grid grid-cols-2 gap-4">
              {['Entry Level', 'Mid Level', 'Senior', 'Lead'].map(level => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox
                    id={`exp-${level}`}
                    checked={filters.experienceLevels.includes(level)}
                    onCheckedChange={() => handleExperienceChange(level)}
                  />
                  <Label htmlFor={`exp-${level}`}>{level}</Label>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <h4 className="font-medium">Salary Range</h4>
            <RadioGroup
              value={filters.salaryRange}
              onValueChange={(value) => onFiltersChange({ ...filters, salaryRange: value })}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  '0-50k',
                  '50k-100k',
                  '100k-150k',
                  '150k+',
                ].map(range => (
                  <div key={range} className="flex items-center space-x-2">
                    <RadioGroupItem value={range} id={`salary-${range}`} />
                    <Label htmlFor={`salary-${range}`}>{range}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <Separator />
          <div className="space-y-4">
            <h4 className="font-medium">Location</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Remote',
                'San Francisco, CA',
                'New York, NY',
                'Seattle, WA',
                'Austin, TX',
                'Boston, MA'
              ].map(location => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={`location-${location}`}
                    checked={filters.locations.includes(location)}
                    onCheckedChange={() => handleLocationChange(location)}
                  />
                  <Label htmlFor={`location-${location}`}>{location}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
