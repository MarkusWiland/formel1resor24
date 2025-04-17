'use client'

import { useState, useMemo } from 'react'
import { mockRaces } from '@/lib/mockRace'
import RaceFilter from '@/components/common/race-filter'
import ResorList from './resor-list'

export default function ResorPageClient() {
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
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Jämför Formel 1-resor 2025 – Biljetter, hotell & paket
      </h1>

      <RaceFilter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />

      <ResorList filteredRaces={filteredRaces} />
    </section>
  )
}
