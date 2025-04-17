// components/common/AffiliateButton.tsx – CTA med annonstext
'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function AffiliateButton({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('text-center space-y-2', className)}>
      <Button
        asChild
        className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-xl text-sm font-semibold"
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
      <p className="text-xs text-muted-foreground">
        * Detta är en annonslänk – vi kan få ersättning om du klickar och
        genomför ett köp.
      </p>
    </div>
  )
}
