'use client'

import { ShieldCheck, PiggyBank, Globe2 } from 'lucide-react'

const benefits = [
  {
    title: 'Trygg bokning',
    description:
      'Vi visar endast återförsäljare med godkända avtal och hög kundnöjdhet. Inga dolda avgifter.',
    icon: <ShieldCheck className="w-6 h-6 text-[hsl(var(--primary))]" />,
  },
  {
    title: 'Jämför paketpriser',
    description:
      'Hitta de bästa priserna på biljetter, hotell och VIP-paket från flera svenska arrangörer.',
    icon: <PiggyBank className="w-6 h-6 text-[hsl(var(--primary))]" />,
  },
  {
    title: 'Ikoniska F1-destinationer',
    description:
      'Från Monte Carlo till Miami – vi samlar Grand Prix-resor från världens mest legendariska banor.',
    icon: <Globe2 className="w-6 h-6 text-[hsl(var(--primary))]" />,
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-[hsl(var(--secondary))]/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] text-center mb-12">
          Därför väljer F1-fans Formel1biljetter.se
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
