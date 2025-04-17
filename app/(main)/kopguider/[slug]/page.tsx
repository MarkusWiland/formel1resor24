// pages/kopguider/[slug]/page.tsx – Guide med AffiliateNotice & AffiliateButton
'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import AffiliateNotice from '@/components/common/affiliate-notice'
import AffiliateButton from '@/components/common/affiliate-button'

export default function BuyingGuidePage() {
  return (
    <div>
      <AffiliateNotice />
      <div className="container py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          Köpguide: Välj rätt robotgräsklippare
        </h1>
        <div className="flex gap-4 flex-wrap items-center text-sm text-[hsl(var(--muted-foreground))] mb-6">
          <Badge variant="secondary">📖 3 min läsning</Badge>
          <Badge variant="outline">För små & stora trädgårdar</Badge>
          <Badge variant="outline">Smart app? GPS? Tyst drift?</Badge>
        </div>

        {/* Innehållsförteckning */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Innehåll</h2>
          <ul className="list-disc list-inside text-sm text-[hsl(var(--muted-foreground))]">
            <li>
              <a href="#storlek">1. Hur stor är din gräsmatta?</a>
            </li>
            <li>
              <a href="#funktioner">2. Viktiga funktioner att ha koll på</a>
            </li>
            <li>
              <a href="#rekommenderade">3. Våra rekommenderade modeller</a>
            </li>
          </ul>
        </div>

        {/* Guideinnehåll */}
        <h2 id="storlek" className="text-2xl font-semibold mb-2">
          1. Hur stor är din gräsmatta?
        </h2>
        <p className="mb-6 text-[hsl(var(--muted-foreground))]">
          Det är avgörande att matcha klipparens kapacitet med gräsmattans
          storlek. För små ytor fungerar enklare modeller perfekt, men större
          trädgårdar kräver längre batteritid och bredare klippbredd.
        </p>

        <h2 id="funktioner" className="text-2xl font-semibold mb-2">
          2. Viktiga funktioner att ha koll på
        </h2>
        <p className="mb-6 text-[hsl(var(--muted-foreground))]">
          Fundera på om du vill ha app-styrning, GPS-navigering, regnsensorer,
          kantklippning eller flera zoninställningar. De flesta moderna modeller
          erbjuder en kombination.
        </p>

        {/* Mini-CTA */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-center">
          <h3 className="text-lg font-semibold mb-2">
            ✅ Se våra rekommenderade modeller
          </h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
            Vi har testat och jämfört de populäraste klipparna på marknaden.
          </p>
          <AffiliateButton href="#topplista">Till topplistan →</AffiliateButton>
        </div>

        <h2 id="rekommenderade" className="text-2xl font-semibold mb-4">
          3. Jämförelse: Populära modeller
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Modell</TableCell>
              <TableCell>Pris</TableCell>
              <TableCell>Smart app</TableCell>
              <TableCell>Regnsensor</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Automower 430X</TableCell>
              <TableCell>23 999 kr</TableCell>
              <TableCell>✅</TableCell>
              <TableCell>✅</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Worx Landroid M500</TableCell>
              <TableCell>8 990 kr</TableCell>
              <TableCell>✅</TableCell>
              <TableCell>❌</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
