'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-[hsl(var(--primary))] text-white">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Redo att boka din F1-resa?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Jämför biljetter, hotell och paket till världens mest ikoniska Grand
          Prix – från svenska arrangörer du kan lita på.
        </p>
        <Link
          href="/kalender"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[hsl(var(--primary))] font-semibold rounded-md shadow hover:bg-white/90 transition"
        >
          Utforska F1-kalendern <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
