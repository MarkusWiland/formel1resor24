// app/(pages)/kategorier/page.tsx
'use client'

import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import AffiliateNotice from '@/components/common/affiliate-notice'
import { products } from '@/lib/products'

export default function CategoriesPage() {
  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)))

  return (
    <div>
      <AffiliateNotice />
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-6">Utforska kategorier</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uniqueCategories.map((category) => {
            const count = products.filter((p) => p.category === category).length
            const slug = category.toLowerCase().replace(/\s/g, '-')
            return (
              <Link
                key={category}
                href={`/kategorier/${slug}`}
                className="border border-[hsl(var(--border))] rounded-xl p-6 bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold mb-2">{category}</h2>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  {count} produkter
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
