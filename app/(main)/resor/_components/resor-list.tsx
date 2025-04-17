import Link from 'next/link'
import ResorCard from './resor-card'

export default function ResorList({ filteredRaces }: { filteredRaces: any }) {
  return (
    <section className="space-y-6">
      {filteredRaces.map((race: any) => (
        <Link key={race.city} href={`/resor/${race.slug}`} className="block">
          <ResorCard {...race} />
        </Link>
      ))}
    </section>
  )
}
