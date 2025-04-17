// components/sections/HeroSection.tsx – med MiniHero + ShadCN + Microcopy-knappar
'use client'

import MiniHero from '@/components/common/mini-hero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <div className="w-full">
      {/* MiniHero bakgrundsbild-sektion */}
      <MiniHero
        title="Bästa trädgårdsprodukterna 2025"
        subtitle="Jämför testade robotgräsklippare, bevattningssystem och mer."
        imageUrl="/images/hero-garden.jpg"
      >
        <div className="flex justify-center flex-wrap gap-3">
          <Button
            variant="secondary"
            size="lg"
            className="text-base font-semibold"
          >
            ✅ Se testvinnaren (mest prisvärd)
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base font-semibold"
          >
            🔍 Läs hela testet
          </Button>
          <Button
            variant="default"
            size="lg"
            className="text-base font-semibold"
          >
            ➡ Till återförsäljare
          </Button>
        </div>
      </MiniHero>

      {/* Trust badges under MiniHero */}
      <div className="container py-6 flex flex-wrap justify-center gap-3">
        <Badge
          variant="outline"
          className="bg-green-100 text-green-900 border-green-300"
        >
          ✅ Oberoende tester
        </Badge>
        <Badge
          variant="outline"
          className="bg-green-100 text-green-900 border-green-300"
        >
          ✅ Uppdaterat 2025
        </Badge>
        <Badge
          variant="outline"
          className="bg-green-100 text-green-900 border-green-300"
        >
          ✅ Gratis att använda
        </Badge>
      </div>
    </div>
  )
}
