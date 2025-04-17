'use client'

import { useState, useMemo } from 'react'
import { mockRaces } from '@/lib/mockRace'
import { RaceFilter } from './race-filter'
import RaceList from './racelist'

export default function RacePageClient() {
  const [selectedMonth, setSelectedMonth] = useState('Alla')
  const [selectedContinent, setSelectedContinent] = useState('Alla')

  const filteredRaces = useMemo(() => {
    return mockRaces.filter((race) => {
      const matchesMonth =
        selectedMonth === 'Alla' || race.month === selectedMonth
      const matchesContinent =
        selectedContinent === 'Alla' || race.continent === selectedContinent
      return matchesMonth && matchesContinent
    })
  }, [selectedMonth, selectedContinent])

  return (
    <section className="py-10 container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Utforska Formel 1-resor världen över
      </h1>

      <RaceFilter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />

      <RaceList races={filteredRaces} />
    </section>
  )
}
