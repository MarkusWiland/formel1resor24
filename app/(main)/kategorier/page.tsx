// pages/kategorier/page.tsx – Översikt över kategorier med ShadCN
'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const categories = [
  {
    slug: 'robotgrasklippare',
    title: 'Robotgräsklippare',
    description: 'Automatisera gräsklippningen med smart teknik.',
    image: '/images/automower.jpg',
  },
  {
    slug: 'bevattning',
    title: 'Bevattningssystem',
    description: 'Smarta lösningar för att hålla gräset grönt.',
    image: '/images/gardena.jpg',
  },
  {
    slug: 'belysning',
    title: 'Trädgårdsbelysning',
    description: 'Mysig och funktionell utomhusbelysning.',
    image: '/images/hue-lightstrip.jpg',
  },
]

export default function CategoryOverviewPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Utforska våra kategorier</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-10 max-w-2xl">
        Här hittar du våra mest populära produktområden – från smart
        gräsklippning till bevattning och belysning för din trädgård.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={`/kategorier/${cat.slug}`}
            className="hover:no-underline"
          >
            <Card className="overflow-hidden h-full hover:shadow-md transition">
              <div className="relative w-full h-48">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-1">
                  {cat.title}
                </CardTitle>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  {cat.description}
                </p>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
