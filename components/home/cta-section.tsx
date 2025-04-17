'use client'

import { Leaf, CheckCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="w-full bg-[hsl(var(--primary))] text-white py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Leaf className="w-6 h-6 text-white" />
          <h2 className="text-3xl font-bold">
            Redo att hitta rätt trädgårdsprodukt?
          </h2>
        </div>
        <p className="text-base mb-6 text-white/90">
          <CheckCircle className="inline-block w-4 h-4 mr-1 text-white/80" />
          Vi hjälper dig att spara tid, pengar och göra smartare val för ditt
          utomhusliv.
        </p>
        <a
          href="#topplista"
          className="inline-block bg-white text-[hsl(var(--primary))] font-semibold py-3 px-6 rounded-xl hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] transition text-sm"
        >
          Utforska topplistan
        </a>
      </div>
    </section>
  )
}
