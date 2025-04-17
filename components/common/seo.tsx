'use client'

type SEOTextProps = {
  title: string
  paragraphs: string[]
  highlights?: string[]
}

export default function SEOText({
  title,
  paragraphs,
  highlights,
}: SEOTextProps) {
  return (
    <div className="container py-12 prose prose-sm sm:prose lg:prose-lg text-muted-foreground">
      <h2>{title}</h2>
      {paragraphs.map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      {highlights && highlights.length > 0 && (
        <>
          <h3>Populära Grand Prix 2025</h3>
          <ul>
            {highlights.map((item, i) => (
              <li key={i}>🏁 {item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
