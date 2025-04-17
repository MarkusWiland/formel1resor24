'use client'

import BenefitsSection from '@/components/home/benefits-section'
import CalendarPreview from '@/components/home/calendar-perview-section'
import CTASection from '@/components/home/cta-section'
import HeroSection from '@/components/home/hero-section'
import NewsletterSection from '@/components/home/newsletter-section'
import PopularCities from '@/components/home/popular-cities'
import UpcomingRaces from '@/components/home/upcoming-races'

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
