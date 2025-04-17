'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type MiniHeroProps = {
  title: string
  subtitle?: string
  imageUrl: string
  children?: React.ReactNode
  className?: string
}

export default function MiniHero({
  title,
  subtitle,
  imageUrl,
  children,
  className,
}: MiniHeroProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden py-24 sm:py-32',
        className,
      )}
    >
      {/* Bakgrundsbild */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-center brightness-[0.7]"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-black/40 to-green-100/20 z-0" />

      {/* Innehåll */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mb-6 drop-shadow-md">
            {subtitle}
          </p>
        )}

        {/* Extra innehåll – t.ex. sökfält eller CTA */}
        {children && <div className="w-full max-w-xl">{children}</div>}
      </div>

      {/* SVG clip path */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(var(--background))"
          d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  )
}
