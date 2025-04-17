'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { mockRaces } from '@/lib/mockRace'
import { Button } from '../ui/button'
import MiniHero from '../common/mini-hero'

export default function HeroSection() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const filteredRaces =
    search.length > 0
      ? mockRaces.filter(
          (race) =>
            race.title.toLowerCase().includes(search.toLowerCase()) ||
            race.city.toLowerCase().includes(search.toLowerCase()) ||
            race.circuit.toLowerCase().includes(search.toLowerCase()),
        )
      : []

  return (
    <MiniHero
      title="Upplev Formel 1 live!"
      subtitle="Formel1biljetter.se jämför biljetter, hotell och paket till världens
          största Grand Prix–resor. Full gas – noll stress."
      imageUrl="/hero-bg.jpg"
    >
      {/* Search input */}
      <div className="mt-6 relative max-w-xl mx-auto px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 z-10 w-5 h-5" />
          <Input
            type="text"
            placeholder="Sök efter stad, bana eller land..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-11 pr-4 py-4 rounded-xl bg-white/90 border border-input text-foreground placeholder-muted-foreground shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-[hsl(var(--primary))] transition w-full"
          />
        </div>

        {filteredRaces.length > 0 && (
          <div className="absolute z-30 mt-2 w-full rounded-xl border border-border max-h-64 bg-card shadow-xl overflow-y-auto animate-in fade-in slide-in-from-top-2">
            {filteredRaces.map((race) => (
              <Button
                key={race.city}
                onClick={() => {
                  router.push(`/lopp/${race.city.toLowerCase()}`)
                  setSearch('')
                }}
                className="w-full text-left px-5 py-3 text-foreground hover:bg-muted transition-colors"
              >
                {race.title}
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <Button
          size="lg"
          className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/1.1)] px-6 py-3 text-white font-semibold text-lg rounded-xl shadow"
          onClick={() => router.push('/kalender')}
        >
          Utforska F1-kalendern 2025 →
        </Button>
      </div>
    </MiniHero>
  )
}
