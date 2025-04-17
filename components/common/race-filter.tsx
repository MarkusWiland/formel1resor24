'use client'

import { Button } from '@/components/ui/button'

type RaceFilterProps = {
  selectedMonth: string
  setSelectedMonth: (value: string) => void
  selectedContinent: string
  setSelectedContinent: (value: string) => void
}

const months = [
  'Alla',
  'Mars',
  'April',
  'Maj',
  'Juni',
  'Juli',
  'Augusti',
  'September',
  'Oktober',
  'November',
  'December',
]

const continents = [
  'Alla',
  'Europa',
  'Asien',
  'Nordamerika',
  'Sydamerika',
  'Oceanien',
  'Afrika',
]

export default function RaceFilter({
  selectedMonth,
  setSelectedMonth,
  selectedContinent,
  setSelectedContinent,
}: RaceFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
      {/* Månad */}
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label className="text-sm text-muted-foreground font-medium">
          Månad
        </label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border border-border bg-card text-foreground rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Kontinent */}
      <div className="flex flex-col gap-1 w-full sm:w-auto">
        <label className="text-sm text-muted-foreground font-medium">
          Kontinent
        </label>
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="border border-border bg-card text-foreground rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
