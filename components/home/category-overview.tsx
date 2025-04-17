'use client'

const categories = [
  { name: 'Robotgräsklippare', link: '/kategorier/robotgrasklippare' },
  { name: 'Bevattningssystem', link: '/kategorier/bevattning' },
  { name: 'Trädgårdsbelysning', link: '/kategorier/belysning' },
  { name: 'Utemöbler', link: '/kategorier/utemobler' },
  { name: 'Kompost & Jord', link: '/kategorier/kompost-och-jord' },
]

export default function CategoryOverview() {
  return (
    <section className="w-full py-16 px-6 bg-[hsl(var(--hero-background))]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-10">
          Utforska populära kategorier
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={cat.link}
              className="block bg-[hsl(var(--card))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition text-sm font-medium text-center hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
