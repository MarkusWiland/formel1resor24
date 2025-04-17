import type { Metadata } from 'next'
import { Source_Sans_3 as FontSans } from 'next/font/google'

import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import ReactQueryProvider from '@/providers/react-query-provider'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import DynamicBreadcrumb from '@/components/common/breadcrumb'
const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <main>
        <div className="relative container mx-auto">
          <DynamicBreadcrumb />
        </div>
        {children}
      </main>
    </div>
  )
}
