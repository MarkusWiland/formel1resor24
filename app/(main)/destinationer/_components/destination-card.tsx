'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'

export default function DestinationCard({ race }: { race: any }) {
  return (
    <Link
      href={`/resor/${race.slug}`}
      className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-card"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={race.image}
          alt={race.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 text-[hsl(var(--foreground))]">
          {race.city}
        </h3>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {race.circuit}
        </div>
        <p className="text-sm mt-2 text-[hsl(var(--primary))]">
          Från {race.price.toLocaleString('sv-SE')} kr
        </p>
      </div>
    </Link>
  )
}
