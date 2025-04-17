'use client'

import { ArrowRight } from 'lucide-react'

type OfferCardProps = {
  provider: string
  price: number
  url: string
  description?: string
}

export default function OfferCard({
  provider,
  price,
  url,
  description,
}: OfferCardProps) {
  return (
    <div className="relative card-3d flex rounded-xl overflow-hidden bg-gradient-to-r from-[hsl(var(--hero-background))] to-[hsl(var(--card))] text-white shadow-md hover:shadow-xl transition-all group">
      {/* Dekorvänster */}
      <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />
      <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--border))] z-10" />

      {/* Info */}
      <div className="flex-1 px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex flex-col justify-center w-full">
          <h3 className="text-lg font-semibold mb-1 group-hover:underline">
            {provider}
          </h3>
          {description && (
            <p className="text-sm text-white/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Prickdekor */}
        <div className="relative w-8 flex flex-col items-center justify-center shrink-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/30 my-0.5"
            />
          ))}
          <div className="absolute top-[-36px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] w-6 h-6 rounded-full z-10" />
          <div className="absolute bottom-[-36px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] w-6 h-6 rounded-full z-10" />
        </div>

        {/* Pris + pil */}
        <div className="pl-4 pr-6 py-4 flex flex-col justify-center items-start shrink-0 min-w-[180px]">
          <p className="text-sm text-white/70">Pris från</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-[hsl(var(--primary))]">
              {price.toLocaleString('sv-SE')} kr
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <ArrowRight className="w-4 h-4 text-[hsl(var(--primary))]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
