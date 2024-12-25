import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero>
        <Button asChild size="lg">
          <Link href="/agendar">Agende sua Consulta</Link>
        </Button>
      </Hero>
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </main>
  )
}

