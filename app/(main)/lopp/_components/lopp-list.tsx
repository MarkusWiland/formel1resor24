import { mockRaces } from '@/lib/mockRace'
import RaceCard from './lopp-card'
import Link from 'next/link'
import LoppCard from './lopp-card'

export default function LoppList({ filteredRaces }: { filteredRaces: any }) {
  return (
    <section className="space-y-6">
      {filteredRaces.map((race) => (
        <Link key={race.city} href={`/lopp/${race.slug}`} className="block">
          <LoppCard {...race} />
        </Link>
      ))}
    </section>
  )
}
