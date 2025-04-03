import ClientRaceDetailPage from '@/components/client-race-detail'
import { mockRaces } from '@/lib/mockRace'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// Page-komponenten
export default function RaceSlugPage({ params }: { params: { slug: string } }) {
  const race = mockRaces.find((r) => r.slug === params.slug)

  if (!race) return notFound()

  return <ClientRaceDetailPage race={race} />
}
