import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import ServicesSection from '@/components/sections/services'
import PortfolioSection from '@/components/sections/portfolio'
import PricingSection from '@/components/sections/pricing'
import TestimonialsSection from '@/components/sections/testimonials'
import ContactSection from '@/components/sections/contact'
import CtaSection from '@/components/sections/cta'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <ContactSection />
    </>
  )
}