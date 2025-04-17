'use client'

const products = [
  {
    name: 'Husqvarna Automower 430X',
    rating: 4.8,
    description:
      'En avancerad robotgräsklippare med GPS-navigering och vädertimer.',
    link: '#',
    price: '23 999 kr',
  },
  {
    name: 'Gardena Sileno Life 1000',
    rating: 4.5,
    description:
      'Tystgående och effektiv modell som passar medelstora trädgårdar.',
    link: '#',
    price: '13 495 kr',
  },
  {
    name: 'Worx Landroid M500',
    rating: 4.3,
    description: 'Prisvärd modell med smart app-styrning och kantklippning.',
    link: '#',
    price: '8 990 kr',
  },
]

export default function ProductToplist() {
  return (
    <section
      id="topplista"
      className="w-full py-16 px-6 bg-[hsl(var(--background))]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-10 text-center">
          Topplista: Robotgräsklippare 2025
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                {product.description}
              </p>
              <p className="text-sm text-yellow-500 mb-2">
                ⭐ {product.rating} / 5
              </p>
              <p className="font-semibold text-[hsl(var(--foreground))] mb-4">
                {product.price}
              </p>
              <a
                href={product.link}
                className="inline-block bg-[hsl(var(--primary))] hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition"
              >
                Till butik
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
