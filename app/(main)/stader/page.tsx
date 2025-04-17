import { Metadata } from 'next'
import StaderPageClient from './_components/stader-page-client'

export const metadata: Metadata = {
  title: 'Formel 1-städer 2025 – Resor & biljetter per stad | Formel1resor24',
  description:
    'Utforska alla städer där Formel 1 körs 2025. Se vilka återförsäljare som erbjuder resor, paket och biljetter till varje F1-destination.',
  keywords: [
    'Formel 1 städer',
    'F1 resor 2025',
    'F1 biljetter per stad',
    'Grand Prix städer',
    'F1 paketresor',
    'F1 resmål',
    'F1 city guide',
    'Formel1resor24',
  ],
}

export default function StaderPage() {
  return <StaderPageClient />
}
