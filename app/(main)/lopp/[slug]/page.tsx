// app/lopp/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { mockRaces } from '@/lib/mockRace'
import ClientRaceDetailPage from '@/components/client-race-detail'

type PageParams = { params: { slug: string } }

// 👇 SEO: Dynamisk metadata för varje slug
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
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

// 👇 Din page-funktion
export default async function RaceSlugPage({ params }: PageParams) {
  const race = mockRaces.find((r) => r.slug === params.slug)

  if (!race) return notFound()

  return <ClientRaceDetailPage race={race} />
}
