'use client'

import { useState, useMemo } from 'react'
import { mockRaces } from '@/lib/mockRace'
import DestinationCard from './destination-card'
import DestinationFilter from './destination-filter'

export default function DestinationList() {
  const [selectedContinent, setSelectedContinent] = useState('Alla')

  const filteredRaces = useMemo(() => {
    if (selectedContinent === 'Alla') return mockRaces

    return mockRaces.filter((race) => race.continent === selectedContinent)
  }, [selectedContinent])

  const uniqueCities = Array.from(
    new Map(filteredRaces.map((r) => [r.city, r])).values(),
  )

  return (
    <>
      <DestinationFilter
        selected={selectedContinent}
        setSelected={setSelectedContinent}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uniqueCities
          .sort((a, b) => a.price - b.price)
          .map((race) => (
            <DestinationCard key={race.city} race={race} />
          ))}
      </div>
    </>
  )
}
