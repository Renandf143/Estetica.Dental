import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/about-image.jpg" 
              alt="Equipe de dentistas" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Sobre Nós</h2>
            <p className="text-gray-600 mb-6">
              Com anos de experiência e uma equipe altamente qualificada, estamos comprometidos em oferecer o melhor tratamento odontológico. Utilizamos tecnologia de ponta e técnicas inovadoras para garantir o seu bem-estar e um sorriso radiante.
            </p>
            <p className="text-gray-600 mb-8">
              Nossa missão é proporcionar um atendimento personalizado, focado nas necessidades individuais de cada paciente, sempre buscando os melhores resultados e a satisfação total.
            </p>
            <Button asChild variant="outline">
              <Link href="/sobre">Conheça Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

