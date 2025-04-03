'use client'

import { mockRaces } from '@/lib/mockRace'
import LoppCard from '../lopp/_components/lopp-card'

export default function KalenderPage() {
  const upcoming = mockRaces
    .filter((race) => new Date(race.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <section className="py-10 container">
      <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
        Formel 1 – Kommande lopp
      </h1>

      <div className="space-y-4">
        {upcoming.map((race) => (
          <LoppCard key={race.slug} {...race} />
        ))}
      </div>
    </section>
  )
}
