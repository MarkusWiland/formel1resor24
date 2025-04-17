// components/common/Footer.tsx – med annonstext i footern
'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-16 border-t border-green-700">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Om oss */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Om Trädgårdskollen</h4>
          <p className="text-sm leading-relaxed text-white/90">
            Trädgårdskollen hjälper dig att hitta de bästa produkterna för ditt
            utomhusliv – från robotgräsklippare till bevattningssystem. Vi
            jämför, testar och tipsar – så att du kan göra smartare val för din
            trädgård.
          </p>
        </div>

        {/* Snabblänkar */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Snabblänkar</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/', label: 'Hem' },
              { href: '/produkter', label: 'Produkter' },
              { href: '/kopguider', label: 'Köpguides' },
              { href: '/kategorier', label: 'Kategorier' },
              { href: '/affiliate-information', label: 'Affiliate-info' },
              { href: '/om-oss', label: 'Om oss' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-green-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontaktformulär */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Kontakta oss</h4>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Din e-post"
              className="bg-white/10 text-white placeholder:text-white/60 focus:ring-green-300"
            />
            <Textarea
              rows={4}
              placeholder="Meddelande"
              className="bg-white/10 text-white placeholder:text-white/60 focus:ring-green-300"
            />
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Skicka
            </Button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-green-700 text-center text-xs py-4 text-white/60">
        © {new Date().getFullYear()} Trädgårdskollen.se – Alla rättigheter
        förbehållna.
        <br />
        <span className="block mt-1">
          Trädgårdskollen är en annonsfinansierad jämförelsesajt. Läs mer om vår{' '}
          <Link
            href="/affiliate-information"
            className="underline hover:text-white"
          >
            annonsmärkning och affiliatepolicy
          </Link>
          .
        </span>
      </div>
    </footer>
  )
}
