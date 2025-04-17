'use client'
import {
  eachDayOfInterval,
  endOfWeek,
  startOfWeek,
  endOfMonth,
  startOfMonth,
  format,
  getDay,
  addMonths,
  subMonths,
  isSameMonth,
} from 'date-fns'
import { sv } from 'date-fns/locale'
import { useState } from 'react'
import { mockRaces } from '@/lib/mockRace'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MiniRaceCard from './mini-race-card'

export default function KalenderPageClient() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)

  // Nytt: visa hela veckor inkl. dagar från föreg/efter månad
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }) // måndag
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const racesByDate = mockRaces.reduce((acc, race) => {
    const dateKey = format(new Date(race.date), 'yyyy-MM-dd')
    if (!acc[dateKey]) acc[dateKey] = []
    acc[dateKey].push(race)
    return acc
  }, {} as Record<string, typeof mockRaces>)

  return (
    <section className="py-10 container">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={() => setCurrentDate((prev) => subMonths(prev, 1))}
          className="p-2 rounded bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/1.1)] transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        <h1 className="text-3xl font-bold text-[hsl(var(--foreground))]">
          {format(currentDate, 'MMMM yyyy', { locale: sv })}
        </h1>

        <Button
          onClick={() => setCurrentDate((prev) => addMonths(prev, 1))}
          className="p-2 rounded bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/1.1)] transition"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Veckodagar */}
      <div className="grid grid-cols-7 gap-2 text-sm text-center mb-2 text-muted-foreground">
        {['Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör', 'Sön'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Datumrutnät */}
      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd')
          const races = racesByDate[dateKey] || []
          const isCurrentMonth = isSameMonth(day, currentDate)
          console.log('currentDate', currentDate)
          console.log('day', day)
          console.log('races', races)
          console.log('isCurrentMonth', isCurrentMonth)
          return (
            <div
              key={dateKey}
              className={`border border-border rounded-lg p-2 min-h-[120px] bg-card text-sm text-left ${
                !isCurrentMonth ? 'opacity-40' : ''
              }`}
            >
              <div className="font-semibold text-[hsl(var(--foreground))] mb-1">
                {format(day, 'd')}
              </div>

              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                {races.map((race) => (
                  <MiniRaceCard
                    key={race.slug}
                    slug={race.slug}
                    title={race.title}
                    city={race.city}
                    circuit={race.circuit}
                    price={race.priceTicketOnly}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
