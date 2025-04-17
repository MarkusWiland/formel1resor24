'use client'

import BenefitsSection from '@/components/home/benefits-section'
import CalendarPreview from '@/components/home/buying-guide-section'
import PopularCities from '@/components/home/category-overview'

import CTASection from '@/components/home/cta-section'
import HeroSection from '@/components/home/hero-section'
import NewsletterSection from '@/components/home/newsletter-section'
import UpcomingRaces from '@/components/home/product-toplist'

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="flex flex-col">
        <HeroSection />
        <PopularCities />
        <UpcomingRaces />
        <BenefitsSection />
        <CalendarPreview />
        <CTASection />
        <NewsletterSection />
      </div>
    </div>
  )
}
