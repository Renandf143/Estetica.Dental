import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SmileIcon as Tooth, Smile, Camera } from 'lucide-react'

const services = [
  {
    icon: Tooth,
    title: "Implantes Dentários",
    description: "Restaure sua dentição com implantes de alta qualidade."
  },
  {
    icon: Smile,
    title: "Clareamento Dental",
    description: "Obtenha um sorriso mais branco e brilhante."
  },
  {
    icon: Camera,
    title: "Lentes de Contato Dental",
    description: "Transforme seu sorriso com lentes de contato dentais."
  }
]

export function Services() {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

