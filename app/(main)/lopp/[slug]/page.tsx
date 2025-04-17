// app/lopp/[slug]/page.tsx
import { notFound } from 'next/navigation'

import ClientRaceDetailPage from './_components/client-race-detail'
import MiniHero from '@/components/common/mini-hero'
import { generateSEOText } from '@/lib/generateseo'
import SEOText from '@/components/common/seo'
import { getRaceBySlug } from '@/lib/data'

type PageParams = { params: Promise<{ slug: string }> }

// 👇 Din page-funktion
export default async function RaceSlugPage({ params }: PageParams) {
  const { slug } = await params
  const golfTrip = await getRaceBySlug(slug)

  if (!golfTrip) return notFound()
  const seo = generateSEOText(golfTrip)
  return (
    <>
      <MiniHero
        title="Formel 1-resor 2025"
        subtitle="Hitta din nästa F1-resa till Monaco, Spanien, Italien och fler ikoniska banor. Jämför biljetter, hotell och paketresor från svenska arrangörer."
        imageUrl="/images/f1bg.jpg"
      />
      <ClientRaceDetailPage race={golfTrip} />

      <SEOText
        title={seo.title}
        paragraphs={seo.paragraphs}
        highlights={seo.highlights}
      />
    </>
  )
}
