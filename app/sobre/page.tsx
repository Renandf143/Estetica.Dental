import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamMember } from '@/components/team-member'
import { Stats } from '@/components/stats'
import Image from 'next/image'

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Sobre a EstéticaDental</h1>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/placeholder.svg?height=400&width=600&text=Clinica+EstéticaDental"
                  alt="Clínica EstéticaDental" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  A EstéticaDental é uma clínica odontológica de ponta, dedicada a oferecer os melhores tratamentos e cuidados dentários. Nossa equipe de profissionais altamente qualificados está comprometida em proporcionar sorrisos saudáveis e radiantes para todos os nossos pacientes.
                </p>
                <p className="text-lg mb-6">
                  Com anos de experiência e utilizando as mais recentes tecnologias em odontologia, garantimos resultados excepcionais em um ambiente acolhedor e confortável.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Stats />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="Dra. Cibele Lobo"
                role="Ortodontista"
                image="/placeholder.svg?height=300&width=300&text=CL"
              />
              <TeamMember 
                name="Dr. Carlos Santos"
                role="Implantodontista"
                image="/placeholder.svg?height=300&width=300&text=CS"
              />
              <TeamMember 
                name="Dra. Mariana Costa"
                role="Clínica Geral"
                image="/placeholder.svg?height=300&width=300&text=MC"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

