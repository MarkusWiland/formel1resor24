import type { Metadata } from 'next'
import { Source_Sans_3 as FontSans } from 'next/font/google'
import './globals.css'

import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import ReactQueryProvider from '@/providers/react-query-provider'

const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Trädgårdskollen – Jämför robotgräsklippare & trädgårdsprodukter',
  description:
    'Trädgårdskollen hjälper dig hitta de bästa robotgräsklipparna, bevattningssystemen och andra smarta trädgårdsprodukter. Opartiska tester, guider och topplistor för ett enklare utomhusliv.',
  metadataBase: new URL('https://tradgardskollen.se'),
  openGraph: {
    title: 'Trädgårdskollen',
    description:
      'Oberoende guider, tester och topplistor – allt för din trädgård.',
    type: 'website',
    url: 'https://tradgardskollen.se',
    siteName: 'Trädgårdskollen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trädgårdskollen – Jämför trädgårdsprodukter',
    description:
      'Få koll på bästa robotgräsklipparna, bevattning och utomhusprodukter.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={fontSans.variable}>
      <body className="font-sans antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <ReactQueryProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
