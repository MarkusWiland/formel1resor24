'use client'

import Link from 'next/link'
import RaceCard from './race-card'

export default function RaceList({ races }: { races: any[] }) {
  return (
    <section className="space-y-6">
      {races.map((race) => (
        <Link key={race.slug} href={`/lopp/${race.slug}`} className="block">
          <RaceCard {...race} />
        </Link>
      ))}
    </section>
  )
}
