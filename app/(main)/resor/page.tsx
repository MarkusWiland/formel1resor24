import { Metadata } from 'next'

import MiniHero from '@/components/common/mini-hero'
import RacePageClient from './_components/race-page-client'

export const metadata: Metadata = {
  title:
    'Formel 1-resor 2025 – Jämför biljetter, hotell & paket | Formel1biljetter.se',
  description:
    'Upptäck Formel 1-resor 2025 till Monaco, Spanien, Italien och fler Grand Prix. Jämför priser på biljetter, hotell och kompletta paket från svenska arrangörer.',
  keywords: [
    'Formel 1 resor 2025',
    'F1 paketresor',
    'Grand Prix 2025',
    'F1 biljetter',
    'Formel 1 hotell',
    'Formel1 Monaco',
    'F1 Spanien',
    'F1 Italien',
    'Formel1 paket',
    'Formel1biljetter.se',
  ],
}

export default function Formel1ResorPage() {
  return (
    <>
      <MiniHero
        title="Formel 1-resor 2025"
        subtitle="Hitta din nästa F1-resa till Monaco, Spanien, Italien och fler ikoniska banor. Jämför biljetter, hotell och paketresor från svenska arrangörer."
        imageUrl="/images/f1bg.jpg"
      >
        {/* Här kan du lägga till sök eller CTA om du vill */}
      </MiniHero>

      <RacePageClient />
    </>
  )
}
