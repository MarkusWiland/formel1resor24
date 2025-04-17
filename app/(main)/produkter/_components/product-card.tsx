// components/product/product-card.tsx (uppdaterad compact version)
'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import AffiliateButton from '@/components/common/affiliate-button'
import { Product } from '@/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-xl overflow-hidden hover:shadow-md transition text-sm">
      <div className="relative w-full h-36">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
        />
        <div className="absolute top-2 right-2 bg-white/80 text-xs text-black px-2 py-0.5 rounded-md">
          {product.source}
        </div>
        {product.badge && (
          <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-md">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="text-base font-semibold mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-[hsl(var(--muted-foreground))] mb-1">
          {product.category}
        </p>

        <div className="flex flex-wrap gap-1 mb-2">
          {product.features.map((feature, j) => (
            <Badge
              key={j}
              variant="outline"
              className="text-[10px] px-2 py-0.5"
            >
              {feature}
            </Badge>
          ))}
        </div>

        <p className="font-bold text-sm mb-2">
          {product.price.toLocaleString()} kr
        </p>

        <AffiliateButton href={product.link} className="w-full text-xs py-1.5">
          Se pris →
        </AffiliateButton>
      </div>
    </div>
  )
}
