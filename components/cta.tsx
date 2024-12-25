import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu sorriso?</h2>
        <p className="mb-8">Agende sua consulta hoje e dê o primeiro passo para um sorriso mais bonito e saudável.</p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/agendar">Agende sua Consulta</Link>
        </Button>
      </div>
    </section>
  )
}

