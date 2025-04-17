'use client'

import { CheckCircle } from 'lucide-react'

const tips = [
  'Hur stor är din gräsmatta? Välj kapacitet därefter.',
  'Behöver du app-styrning eller GPS-navigering?',
  'Fundera på ljudnivå, batteritid och laddtid.',
  'Titta efter funktioner som kantklippning och regnsensorer.',
]

export default function BuyingGuideSection() {
  return (
    <section className="w-full bg-[hsl(var(--background))] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">
          Så väljer du rätt robotgräsklippare
        </h2>
        <p className="text-base text-[hsl(var(--muted-foreground))] mb-6">
          Det finns många modeller på marknaden – här är några saker att tänka
          på:
        </p>
        <ul className="text-left space-y-4 max-w-xl mx-auto">
          {tips.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[hsl(var(--foreground))] text-sm"
            >
              <CheckCircle className="w-5 h-5 text-[hsl(var(--primary))] mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
