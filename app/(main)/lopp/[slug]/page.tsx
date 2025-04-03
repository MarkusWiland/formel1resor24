import ClientRaceDetailPage from '@/components/client-race-detail'
import { mockRaces } from '@/lib/mockRace'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const race = mockRaces.find((r) => r.slug === params.slug)

  if (!race) {
    return {
      title: 'F1-biljetter & resor | Formel1resor24',
      description:
        'Jämför Formel 1-resor och biljetter från svenska återförsäljare.',
    }
  }

  return {
    title: `${race.title} – Biljetter & paketresor | Formel1resor24`,
    description: `Jämför biljetter, hotellpaket och flyg till ${race.city} (${race.circuit}). Se aktuella priser och arrangörer inför ${race.title}.`,
  }
}
// Page-komponenten
export default async function RaceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const race = mockRaces.find((r) => r.slug === slug)

  if (!race) return notFound()

  return <ClientRaceDetailPage race={race} />
}
