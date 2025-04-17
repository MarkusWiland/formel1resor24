// pages/topplistor/page.tsx – Topplistor med AffiliateNotice och AffiliateButton
'use client'

import Image from 'next/image'
import AffiliateNotice from '@/components/common/affiliate-notice'
import AffiliateButton from '@/components/common/affiliate-button'

const toplist = [
  {
    name: 'Husqvarna Automower 430X',
    rating: 4.8,
    description: 'Avancerad GPS-navigerad robotgräsklippare med hög precision.',
    price: '23 999 kr',
    image: '/images/automower.jpg',
    link: '#',
  },
  {
    name: 'Worx Landroid M500',
    rating: 4.4,
    description: 'Prisvärd modell med kantklippning och WiFi-styrning.',
    price: '8 990 kr',
    image: '/images/worx.jpg',
    link: '#',
  },
  {
    name: 'Gardena Sileno Life 1000',
    rating: 4.6,
    description: 'Tystgående robotklippare för mellanstora trädgårdar.',
    price: '13 495 kr',
    image: '/images/gardena.jpg',
    link: '#',
  },
]

export default function TopplistorPage() {
  return (
    <div>
      <AffiliateNotice />
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Topplista: Bästa robotgräsklippare 2025
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toplist.map((product, i) => (
            <div
              key={i}
              className="bg-[hsl(var(--card))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                  {product.description}
                </p>
                <p className="text-sm mb-1">⭐ {product.rating} / 5</p>
                <p className="font-bold mb-3">{product.price}</p>
                <AffiliateButton href={product.link}>
                  Se pris hos återförsäljare →
                </AffiliateButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
