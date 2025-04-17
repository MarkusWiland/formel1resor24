'use client'

import { useState } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { sv } from 'date-fns/locale'
import { Button } from '@/components/ui/button'
import OfferCard from './offer-card'
import Link from 'next/link'

type Race = {
  slug: string
  title: string
  city: string
  circuit: string
  date: string
  price: number
  image: string
  description?: string
  continent: string
  offers: {
    id: string
    provider: string
    price: number
    url: string
    description?: string
  }[]
}

export default function RaceDetailPageClient({ race }: { race: Race }) {
  const [filter, setFilter] = useState<'all' | 'ticket' | 'hotel' | 'full'>(
    'all',
  )

  const date = format(new Date(race.date), 'd MMMM yyyy', { locale: sv })

  const filteredOffers = race.offers.filter((offer) => {
    if (filter === 'all') return true

    const desc = (offer.description || '').toLowerCase()
    if (filter === 'ticket') {
      return (
        desc.includes('endast') ||
        desc.includes('biljett') ||
        (!desc.includes('hotell') && !desc.includes('flyg'))
      )
    }
    if (filter === 'hotel') {
      return desc.includes('hotell') && !desc.includes('flyg')
    }
    if (filter === 'full') {
      return (
        desc.includes('flyg') ||
        (desc.includes('hotell') && desc.includes('flyg'))
      )
    }
    return true
  })

  return (
    <section className="py-16 container">
      <h1 className="text-3xl font-bold text-primary mb-6">{race.title}</h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Bild */}
        <div className="md:w-1/2 aspect-video bg-muted rounded-xl overflow-hidden shadow">
          <img
            src={'/images/bahrain.jpg'}
            alt={race.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {race.circuit}, {race.city}
          </div>
          <p className="text-xl font-bold text-[hsl(var(--primary))]">
            från {race.price.toLocaleString('sv-SE')} kr
          </p>
          <p className="text-sm text-[hsl(var(--foreground))] leading-relaxed">
            {race.description ||
              'Upplev Formel 1 på plats med biljett, hotell och paketlösningar från pålitliga arrangörer.'}
          </p>
        </div>
      </div>

      {/* Filterknappar */}
      <div className="flex gap-2 flex-wrap mb-6">
        {[
          { label: 'Visa alla', value: 'all' },
          { label: 'Endast biljett', value: 'ticket' },
          { label: 'Paket med hotell', value: 'hotel' },
          { label: 'Paket med hotell & flyg', value: 'full' },
        ].map((btn) => (
          <Button
            key={btn.value}
            onClick={() => setFilter(btn.value as any)}
            className={`px-4 py-1 rounded-full text-sm font-medium shadow-sm border transition ${
              filter === btn.value
                ? 'bg-primary text-white'
                : 'bg-secondary text-[hsl(var(--foreground))] border-[hsl(var(--border))]'
            }`}
          >
            {btn.label}
          </Button>
        ))}
      </div>

      {/* Arrangör-alternativ */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-[hsl(var(--foreground))]">
          Tillgängliga paket från olika arrangörer
        </h2>
        <div className="flex flex-col gap-4">
          {filteredOffers.length > 0 ? (
            filteredOffers
              .sort((a, b) => a.price - b.price)
              .map((offer) => (
                <Link href={`${offer.url}`} key={offer.id}>
                  <OfferCard
                    key={offer.id}
                    {...(offer as any)}
                    filter={filter}
                  />
                </Link>
              ))
          ) : (
            <p className="text-muted-foreground text-sm">
              Inga erbjudanden matchar det valda filtret.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
