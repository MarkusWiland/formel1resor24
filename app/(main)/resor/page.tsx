import { Metadata } from 'next'
import MiniHero from '@/components/common/mini-hero'
import SEOText from '@/components/common/seo'
import ResorPageClient from './_components/resor-page-client'

export const metadata: Metadata = {
  title: 'Alla Formel 1-lopp 2025 – Biljetter & resor | Formel1resor24',
  description:
    'Se alla Formel 1-lopp 2025 och jämför biljetter, paketresor med hotell och flyg från pålitliga svenska återförsäljare. Hitta rätt F1-resa till bästa pris.',
  keywords: [
    'Formel 1 2025',
    'F1 biljetter',
    'F1 resor 2025',
    'F1 paketresor',
    'Grand Prix biljetter',
    'Formel 1 kalender',
    'F1 resmål',
    'Formel1resor24',
  ],
}

export default function ResorPage() {
  return (
    <>
      <MiniHero
        title="Formel 1-resor 2025"
        subtitle="Hitta din nästa F1-resa till Monaco, Spanien, Italien och fler ikoniska banor. Jämför biljetter, hotell och paketresor från svenska arrangörer."
        imageUrl="/images/f1bg.jpg"
      />

      <ResorPageClient />
      <SEOText
        title="Hitta rätt Formel 1-resa för 2025"
        paragraphs={[
          'Vill du uppleva Formel 1 live? Vi samlar alla Grand Prix-resor 2025 från svenska arrangörer – inklusive biljetter, hotell och färdiga paket med flyg.',
          'Filtrera efter månad, världsdel eller typ av paket. Vare sig du vill resa till Miami, Imola eller Abu Dhabi hittar du alternativ här.',
        ]}
        highlights={[
          'VIP-resa till Monaco Grand Prix',
          'Familjepaket till Barcelona',
          'Budgetpaket till Bahrain',
          'All inclusive till Miami Grand Prix',
        ]}
      />
    </>
  )
}
