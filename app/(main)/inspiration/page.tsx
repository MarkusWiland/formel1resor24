const articles = [
  {
    title: '5 sätt att få trädgården att kännas sommarfräsch',
    summary:
      'Tips på enkla förändringar som lyfter helhetskänslan – snabbt och billigt.',
    link: '/inspiration/sommarfrisk-tradgard',
  },
  {
    title: 'Så inreder du uteplatsen för kvällshäng',
    summary: 'Skapa en trivsam oas med ljus, textil och rätt möbler.',
    link: '/inspiration/uteplats-kvallshang',
  },
  {
    title: 'Våra favoritväxter för en lättskött trädgård',
    summary: 'Perfekt för dig som vill ha vackert utan att vattna varje dag.',
    link: '/inspiration/lattskott-tradgard',
  },
]

export default function InspirationPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Inspiration & tips</h1>
      <p className="text-[hsl(var(--muted-foreground))] mb-8">
        Få idéer till din trädgård, läs artiklar och lär dig nytt varje vecka.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, i) => (
          <a
            href={article.link}
            key={i}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 rounded-xl hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              {article.summary}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
