'use client'

import { useState, useMemo } from 'react'
import { mockRaces } from '@/lib/mockRace'
import { RaceFilter } from '@/components/race-filter'
import Link from 'next/link'
import LoppCard from './_components/lopp-card'
import LoppList from './_components/lopp-list'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Alla Formel 1-lopp 2025 – Biljetter & resor | Formel1resor24',
  description:
    'Jämför biljetter, hotellpaket och flygresor till alla F1-lopp 2025. Vi listar prisvärda alternativ från flera seriösa arrangörer.',
}

export default function LoppPage() {
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
    <section className="py-10">
      <h1 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Välj ett Formel 1-lopp och jämför priser
      </h1>

      <RaceFilter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />

      <LoppList filteredRaces={filteredRaces} />
    </section>
  )
}
