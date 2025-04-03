'use client'

import { mockRaces } from '@/lib/mockRace'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'

// Enkel mapping stad ➝ emoji-flagga
const flagMap: Record<string, string> = {
  Bahrain: '🇧🇭',
  Jeddah: '🇸🇦',
  Miami: '🇺🇸',
  Imola: '🇮🇹',
  'Monte Carlo': '🇲🇨',
  Barcelona: '🇪🇸',
}

export default function UpcomingRaces() {
  const today = new Date()

  const upcoming = mockRaces
    .filter((race) => new Date(race.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-12 container">
      <h2 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Kommande lopp
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {upcoming.map((race) => {
          const date = new Date(race.date)
          const flag = flagMap[race.city] || '🏁'
          const day = format(date, 'dd MMMM yyyy', { locale: sv })

          return (
            <Link
              key={race.slug}
              href={`/lopp/${race.slug}`}
              className="group bg-card border border-[hsl(var(--border))] rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <span>{day}</span>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-1">
                {flag} {race.title}
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                {race.circuit}
              </p>
              <p className="text-sm mt-3 font-medium text-[hsl(var(--primary))]">
                Pris från {race.priceTicketOnly.toLocaleString()} kr
              </p>
              <div className="mt-2 inline-flex items-center text-sm font-medium text-[hsl(var(--primary))] group-hover:underline">
                Läs mer <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
