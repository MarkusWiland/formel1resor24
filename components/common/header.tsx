// components/common/header.tsx – Modern header för Trädgårdskollen
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Hem' },
    { href: '/produkter', label: 'Produkter' },
    { href: '/kopguider', label: 'Köpguides' },
    { href: '/kategorier', label: 'Kategorier' },
    { href: '/topplistor', label: 'Topplistor' },
    { href: '/inspiration', label: 'Inspiration' },
    { href: '/om-oss', label: 'Om oss' },
  ]

  return (
    <header className="w-full bg-green-800 border-b border-green-700">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logotyp */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white tracking-tight hover:text-green-300 transition-colors"
        >
          Trädgårdskollen
        </Link>

        {/* Desktop-navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white hover:text-green-300 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobilmeny-knapp */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Öppna meny"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobilmeny */}
      {mobileOpen && (
        <div className="md:hidden bg-green-800 border-t border-green-700 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:text-green-300 transition-colors text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
