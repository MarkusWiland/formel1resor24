// pages/om-oss/page.tsx – Om Trädgårdskollen
import AffiliateNotice from '@/components/common/affiliate-notice'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div>
      <AffiliateNotice />
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Välkommen till Trädgårdskollen
            </h1>
            <p className="text-[hsl(var(--muted-foreground))] text-lg mb-6">
              Trädgårdskollen är din oberoende vägvisare i trädgårdsdjungeln. Vi
              hjälper dig att hitta de bästa produkterna för ett smart, hållbart
              och vackert uteliv – utan krångel.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] text-base mb-6">
              Vi jämför och recenserar robotgräsklippare, bevattningssystem,
              utemöbler och mer. Allt du ser på sajten är baserat på noggranna
              analyser och tester. Våra rekommendationer är alltid fria från
              påverkan – även om vi ibland tjänar en liten provision via s.k.
              affiliatelänkar.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] text-base">
              Vårt mål? Att du ska spara tid, pengar och göra smartare val –
              oavsett om du är nybörjare eller trädgårdsproffs.
            </p>
          </div>

          {/* Bild */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/om-oss-garden.jpg"
              alt="Grönskande trädgård"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Slogan / mission */}
        <div className="mt-16 bg-[hsl(var(--hero-background))] rounded-2xl px-8 py-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Vi tror på trädgårdslycka – för alla.
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Trädgårdskollen är mer än bara tester och topplistor. Vi är en
            växande plattform för dig som vill göra det enklare att njuta av
            livet utomhus – smartare, snyggare och mer hållbart.
          </p>
        </div>
      </div>
    </div>
  )
}
