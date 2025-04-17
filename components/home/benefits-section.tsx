'use client'

import { ShieldCheck, BookOpenCheck, HandCoins } from 'lucide-react'

export default function BenefitsSection() {
  return (
    <section className="w-full bg-[hsl(var(--hero-background))] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-10">
          Varför använda Trädgårdskollen?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-[hsl(var(--foreground))]">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 mb-3 text-[hsl(var(--primary))]" />
            <h3 className="text-lg font-semibold mb-2">Oberoende tester</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Vi jämför produkter utan att påverkas av tillverkare eller
              sponsorer.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <BookOpenCheck className="w-8 h-8 mb-3 text-[hsl(var(--primary))]" />
            <h3 className="text-lg font-semibold mb-2">Smarta köpguider</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Få hjälp att hitta rätt – oavsett om du är nybörjare eller
              entusiast.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <HandCoins className="w-8 h-8 mb-3 text-[hsl(var(--primary))]" />
            <h3 className="text-lg font-semibold mb-2">
              Transparent affiliate
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Vi får en liten provision – utan att det kostar dig mer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
