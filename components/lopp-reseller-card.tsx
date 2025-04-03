'use client'

import Image from 'next/image'
import { ArrowRight, Info, Ticket, Hotel, Plane } from 'lucide-react'

// Props utan filter, det kommer från föräldern
export type LoppResellerCardProps = {
  name: string
  logo: string
  price: number
  description?: string
  included: string[]
  type: string
  filter: 'all' | 'ticket' | 'hotel' | 'full'
}

export default function LoppResellerCard({
  name,
  logo,
  price,
  description,
  included,
  type,
  filter,
}: LoppResellerCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-xl px-6 py-4 shadow-sm border border-[hsl(var(--border))]">
      {/* Vänster: Logotyp & innehåll */}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <Image
          src={logo}
          alt={name}
          width={120}
          height={40}
          className="object-contain max-h-10"
        />

        <div className="flex flex-col gap-1 text-sm">
          {included.map((item, i) => (
            <p key={i} className="inline-flex items-center gap-2">
              <Ticket className="w-4 h-4 text-[hsl(var(--primary))]" /> {item}
            </p>
          ))}
          {description && (
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1 inline-flex items-center gap-1">
              <Info className="w-4 h-4" /> {description}
            </p>
          )}
        </div>
      </div>

      {/* Höger: Priser beroende på filter */}
      <div className="flex flex-col sm:items-end items-start mt-4 sm:mt-0 gap-2 w-full sm:w-auto">
        <span className="text-xs text-[hsl(var(--muted-foreground))] mb-1">
          Läs mer / Boka
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          {(filter === 'all' || filter === 'ticket') && (
            <button className="flex items-center justify-between gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-white border border-[hsl(var(--border))] shadow-sm hover:bg-white/80 transition text-[hsl(var(--foreground))] w-full">
              <span className="flex items-center gap-1">
                <Ticket className="w-4 h-4 text-[hsl(var(--primary))]" />{' '}
                Biljett
              </span>
              <span className="flex items-center gap-1 text-[hsl(var(--primary))] font-semibold">
                {price.toLocaleString()} kr <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          )}
          {(filter === 'all' || filter === 'hotel') && (
            <button className="flex items-center justify-between gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-white border border-[hsl(var(--border))] shadow-sm hover:bg-white/80 transition text-[hsl(var(--foreground))] w-full">
              <span className="flex items-center gap-1">
                <Ticket className="w-4 h-4 text-[hsl(var(--primary))]" />
                <Hotel className="w-4 h-4 text-[hsl(var(--primary))]" /> +
                Hotell
              </span>
              <span className="flex items-center gap-1 text-[hsl(var(--primary))] font-semibold">
                {price.toLocaleString()} kr <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          )}
          {(filter === 'all' || filter === 'full') && (
            <button className="flex items-center justify-between gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-white border border-[hsl(var(--border))] shadow-sm hover:bg-white/80 transition text-[hsl(var(--foreground))] w-full">
              <span className="flex items-center gap-1">
                <Ticket className="w-4 h-4 text-[hsl(var(--primary))]" />
                <Hotel className="w-4 h-4 text-[hsl(var(--primary))]" />
                <Plane className="w-4 h-4 text-[hsl(var(--primary))]" /> + Flyg
              </span>
              <span className="flex items-center gap-1 text-[hsl(var(--primary))] font-semibold">
                {price.toLocaleString()} kr <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
