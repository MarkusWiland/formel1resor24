// pages/kopguider/page.tsx – Översikt över alla köpguides
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

const guides = [
  {
    title: 'Robotgräsklippare',
    slug: 'robotgrasklippare',
    readingTime: '3 min',
    tags: ['För små tomter', 'Appstyrning'],
    excerpt:
      'Så väljer du rätt klippare för din tomt – funktioner, tips och rekommendationer.',
  },
  {
    title: 'Bevattningssystem',
    slug: 'bevattning',
    readingTime: '2 min',
    tags: ['Automatiskt', 'Vattensnål'],
    excerpt:
      'En guide till hur du får en grönare trädgård med smart bevattning.',
  },
]

export default function KopguiderPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Köpguides</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl">
        Få hjälp att välja rätt med våra oberoende guider – skrivna för både
        nybörjare och entusiast.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/kopguider/${guide.slug}`}
            className="border border-[hsl(var(--border))] bg-[hsl(var(--card))] rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-1 text-[hsl(var(--foreground))]">
              {guide.title}
            </h2>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
              📖 {guide.readingTime} läsning
            </p>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
              {guide.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {guide.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
