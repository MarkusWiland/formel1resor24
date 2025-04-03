import ClientRaceDetailPage from '@/components/client-race-detail'
import { mockRaces } from '@/lib/mockRace'
import { notFound } from 'next/navigation'

export default async function RaceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const par = (await params).slug
  const race = mockRaces.find((r) => r.slug === par)

  if (!race) return notFound()

  return <ClientRaceDetailPage race={race} />
}
