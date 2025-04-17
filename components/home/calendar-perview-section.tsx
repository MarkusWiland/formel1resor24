'use client'

import { mockRaces } from '@/lib/mockRace'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import Link from 'next/link'
import { CalendarDays, ArrowRight } from 'lucide-react'

export default function CalendarPreview() {
  const today = new Date()

  const upcoming = mockRaces
    .filter((race) => new Date(race.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 6)

  const groupedByMonth: Record<string, typeof mockRaces> = {}

  upcoming.forEach((race) => {
    const month = format(new Date(race.date), 'MMMM yyyy', { locale: sv })
    if (!groupedByMonth[month]) groupedByMonth[month] = []
    groupedByMonth[month].push(race)
  })

  return (
    <section className="py-20 bg-[hsl(var(--background))]">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-[hsl(var(--foreground))] text-center">
          Kommande F1-lopp per månad
        </h2>

        <div className="space-y-10">
          {Object.entries(groupedByMonth).map(([month, races]) => (
            <div key={month}>
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]">
                {month}
              </h3>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {races.map((race) => (
                  <li key={race.slug}>
                    <Link
                      href={`/lopp/${race.slug}`}
                      className="group block bg-card border border-border rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <CalendarDays className="w-4 h-4" />
                        {format(new Date(race.date), 'd MMM', { locale: sv })}
                      </div>
                      <h4 className="font-semibold text-[hsl(var(--foreground))]">
                        {race.title}
                      </h4>
                      <p className="text-sm text-[hsl(var(--primary))] mt-1">
                        Från {race.priceTicketOnly.toLocaleString('sv-SE')} kr
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/kalender"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[hsl(var(--primary))] text-white font-medium hover:bg-[hsl(var(--primary)/1.1)] transition"
          >
            Se hela F1-kalendern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
