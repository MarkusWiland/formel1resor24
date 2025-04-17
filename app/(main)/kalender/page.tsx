import { Metadata } from 'next'
import KalenderPageClient from './_components/kalender-page-client'
import MiniHero from '@/components/common/mini-hero'
import SEOText from '@/components/common/seo'

export const metadata: Metadata = {
  title: 'F1-kalender 2025 – Alla kommande Formel 1-lopp | Formel1resor24',
  description:
    'Se hela Formel 1-kalendern 2025 med datum, städer och banor. Jämför biljetter och paketresor till varje Grand Prix hos svenska återförsäljare.',
  keywords: [
    'Formel 1 kalender 2025',
    'F1 2025 datum',
    'Formel 1 schema',
    'F1 Grand Prix 2025',
    'F1-lopp',
    'F1 biljetter',
    'Formel1resor24',
  ],
  openGraph: {
    title: 'F1-kalender 2025 – Alla kommande Formel 1-lopp | Formel1resor24',
    description:
      'Upptäck hela Formel 1-kalendern 2025 med alla kommande lopp, städer och banor. Jämför biljetter och resor från svenska arrangörer.',
    url: 'https://formel1resor24.se/kalender',
    siteName: 'Formel1resor24',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F1-kalender 2025 – Alla kommande Formel 1-lopp | Formel1resor24',
    description:
      'Alla F1-lopp 2025 på ett ställe. Se datum, städer och jämför biljetter från flera återförsäljare.',
  },
  alternates: {
    canonical: 'https://formel1resor24.se/kalender',
  },
}

export default function KalenderPage() {
  return (
    <>
      <MiniHero
        title="F1-kalender 2025"
        subtitle="Se alla datum för säsongens Grand Prix – från säsongsstarten i Bahrain till finalen i Abu Dhabi. Planera din resa till världens snabbaste sport."
        imageUrl="/images/f1-kalender.jpg"
      />
      <KalenderPageClient />
      <SEOText
        title="Formel 1-kalender 2025 – Alla Grand Prix på ett ställe"
        paragraphs={[
          'Planera din F1-resa med vår kompletta Grand Prix-kalender för säsongen 2025. Här hittar du alla datum och platser för årets mest efterlängtade lopp.',
          'Klicka på ett lopp för att se tillgängliga paket, biljetter och hotell – perfekt för dig som vill uppleva motorsport live, utan stress.',
        ]}
        highlights={[
          'Säsongsstart: Bahrain Grand Prix – 13 april',
          'Klassikern: Monaco Grand Prix – 25 maj',
          'Sommarens höjdpunkt: Spanien Grand Prix – 1 juni',
          'Final: Abu Dhabi Grand Prix – 7 december',
        ]}
      />
    </>
  )
}
