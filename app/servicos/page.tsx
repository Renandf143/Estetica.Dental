import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicesHero } from '@/components/services-hero'
import { ServicesList } from '@/components/services-list'
import { ServiceFeature } from '@/components/service-feature'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesHero />
        <ServicesList />
        <ServiceFeature />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

