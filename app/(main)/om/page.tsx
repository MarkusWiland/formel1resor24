import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Om oss | Formel1biljetter.se',
  description:
    'Formel1biljetter.se hjälper dig hitta de bästa F1-resorna. Vi jämför biljetter, paket och återförsäljare för Grand Prix världen över.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20 bg-[hsl(var(--primary))]/5">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Om Formel1biljetter.se
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi hjälper F1-fans att enkelt hitta och jämföra biljetter, hotell
            och paketresor till världens mest ikoniska Grand Prix-lopp.
          </p>
        </div>
      </section>

      <section className="py-16 container grid gap-16 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Vårt uppdrag</h2>
          <p className="text-muted-foreground leading-relaxed">
            Formel1biljetter.se skapades med en enkel idé: att göra det lättare
            för svenska F1-fans att boka sin drömresa. Vi samlar erbjudanden
            från pålitliga arrangörer och jämför priser så du kan fokusera på
            det viktiga – att uppleva farten, ljudet och dramatiken på plats.
          </p>
        </div>
        <Image
          src="/images/about-f1.jpg"
          alt="Formel 1 fans"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full"
        />
      </section>

      <section className="py-16 container grid gap-16 lg:grid-cols-2 items-center">
        <Image
          src="/images/about-crowd.jpg"
          alt="F1 publik"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Vem vi hjälper</h2>
          <p className="text-muted-foreground leading-relaxed">
            Oavsett om du planerar en weekend i Barcelona, vill uppleva lyxen i
            Monte Carlo eller farten i Miami – vi hjälper dig hitta rätt resa
            till rätt pris. Vi riktar oss till både nybörjare och rutinerade
            paddock-veteraner.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[hsl(var(--primary))] text-white text-center">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Dags att boka ditt nästa Grand Prix?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Utforska vår F1-kalender eller se våra mest populära destinationer
            just nu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kalender">
              <Button size="lg" className="bg-white text-[hsl(var(--primary))]">
                Se kalendern
              </Button>
            </Link>
            <Link href="/destinationer">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white"
              >
                Populära destinationer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
