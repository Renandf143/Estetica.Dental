import { AppointmentForm } from '@/components/appointment-form'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function AgendarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Agende sua Consulta</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Estamos ansiosos para cuidar do seu sorriso. Escolha a data e horário mais convenientes para você, e nossa equipe entrará em contato para confirmar seu agendamento.
          </p>
          <AppointmentForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

