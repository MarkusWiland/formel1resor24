import { Metadata } from 'next'
import MiniHero from '@/components/common/mini-hero'
import DestinationList from './_components/destination-list'
import SEOText from '@/components/common/seo'

export const metadata: Metadata = {
  title: 'Populära F1-destinationer 2025 | Formel1biljetter.se',
  description:
    'Upptäck populära destinationer för Formel 1-resor som Monaco, Spanien, Italien och fler. Jämför biljetter, hotell och paket från svenska arrangörer.',
  keywords: [
    'Formel 1 destinationer',
    'F1-resor 2025',
    'Grand Prix 2025',
    'F1 Monaco',
    'F1 Spanien',
    'F1 Italien',
    'Formel 1 biljetter',
    'F1 paketresor',
    'Formel1biljetter.se',
  ],
}

export default function DestinationerF1Page() {
  return (
    <>
      <MiniHero
        title="Populära F1-destinationer"
        subtitle="Utforska våra mest eftertraktade destinationer för Formel 1-resor 2025. Från Monte Carlo till Miami – hitta ditt nästa Grand Prix-äventyr."
        imageUrl="/images/f1-destinations.jpg"
      />

      <section className="container py-12">
        <DestinationList />
      </section>

      <SEOText
        title="Formel 1-resor till världens mest ikoniska destinationer"
        paragraphs={[
          'Oavsett om du vill uppleva lyxen i Monte Carlo, stämningen i Barcelona eller farten i Jeddah – finns det en Formel 1-destination för dig.',
          'Vi samlar alla populära F1-resmål 2025 med paket från svenska arrangörer. Du kan enkelt jämföra priser, lägenhetshotell, flyg och biljetter – allt på ett ställe.',
        ]}
        highlights={[
          'Monaco Grand Prix',
          'Spanien Grand Prix – Barcelona',
          'Italien Grand Prix – Imola',
          'Saudiarabien Grand Prix – Jeddah',
        ]}
      />
    </>
  )
}
