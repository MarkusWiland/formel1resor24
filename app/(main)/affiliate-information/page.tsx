// pages/affiliate-information/page.tsx
'use client'

import AffiliateNotice from '@/components/common/affiliate-notice'

export default function AffiliateInformationPage() {
  return (
    <div>
      <AffiliateNotice />
      <div className="container max-w-3xl py-12">
        <h1 className="text-4xl font-bold mb-6">
          Affiliate-information & annonsmärkning
        </h1>

        <p className="mb-4 text-[hsl(var(--muted-foreground))]">
          Trädgårdskollen.se är en oberoende jämförelsesajt som hjälper dig
          hitta de bästa trädgårdsprodukterna – från robotgräsklippare till
          bevattningssystem. För att finansiera vårt arbete innehåller delar av
          sajten så kallade annonslänkar.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Vad är en annonslänk?
        </h2>
        <p className="mb-4 text-[hsl(var(--muted-foreground))]">
          En annonslänk (även kallad affiliatelänk) är en spårbar länk till en
          återförsäljare. Om du klickar på länken och genomför ett köp kan vi få
          en liten ersättning – utan att det påverkar priset för dig.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Varför använder vi affiliate?
        </h2>
        <p className="mb-4 text-[hsl(var(--muted-foreground))]">
          Vi använder affiliatelänkar istället för annonser eller sponsrade
          inlägg. Det gör det möjligt för oss att vara oberoende, erbjuda ärliga
          tester och hålla sajten fri från störande annonser.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Hur märker vi annonslänkar?
        </h2>
        <ul className="list-disc list-inside text-[hsl(var(--muted-foreground))] space-y-2">
          <li>
            Vi informerar högst upp på sidan om att den innehåller annonslänkar.
          </li>
          <li>Vid varje köpknapp står det att det är en annonslänk.</li>
          <li>Vi länkar endast till återförsäljare vi själva litar på.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Oberoende & transparens
        </h2>
        <p className="mb-4 text-[hsl(var(--muted-foreground))]">
          Alla våra tester och rekommendationer baseras på egna analyser,
          specifikationer, användarrecensioner och prisdata – aldrig betalda
          samarbeten. Vi står på konsumentens sida.
        </p>

        <p className="mt-6 text-sm text-muted-foreground italic">
          Undrar du något? Hör gärna av dig via formuläret i footern.
        </p>
      </div>
    </div>
  )
}
