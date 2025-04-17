'use client'

import { Button } from '@/components/ui/button'

const continents = ['Alla', 'Europa', 'Asien', 'Nordamerika']

type Props = {
  selected: string
  setSelected: (continent: string) => void
}

export default function DestinationFilter({ selected, setSelected }: Props) {
  return (
    <div className="flex gap-2 flex-wrap mb-8">
      {continents.map((c) => (
        <Button
          key={c}
          onClick={() => setSelected(c)}
          className={`px-4 py-1 rounded-full text-sm font-medium border shadow-sm transition ${
            selected === c
              ? 'bg-primary text-white'
              : 'bg-secondary text-[hsl(var(--foreground))] border-border'
          }`}
        >
          {c}
        </Button>
      ))}
    </div>
  )
}
