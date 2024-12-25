'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SmileIcon as Tooth, Smile, Camera, Zap, Droplet, Stethoscope } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Tooth,
    title: "Consulta Geral",
    description: "Avaliação completa da saúde bucal e planejamento de tratamentos.",
    link: "/servicos/consulta-geral"
  },
  {
    icon: Droplet,
    title: "Limpeza Dental",
    description: "Remoção de tártaro e placa bacteriana para uma boca mais saudável.",
    link: "/servicos/limpeza-dental"
  },
  {
    icon: Smile,
    title: "Clareamento",
    description: "Tratamento para deixar seus dentes mais brancos e brilhantes.",
    link: "/servicos/clareamento"
  },
  {
    icon: Zap,
    title: "Tratamento de Canal",
    description: "Procedimento para salvar dentes severamente danificados ou infectados.",
    link: "/servicos/tratamento-de-canal"
  },
  {
    icon: Tooth,
    title: "Implante Dentário",
    description: "Substituição permanente de dentes perdidos com implantes de alta qualidade.",
    link: "/servicos/implante-dentario"
  },
  {
    icon: Camera,
    title: "Lentes de Contato Dental",
    description: "Transforme seu sorriso com lentes ultrafinas e naturais.",
    link: "/servicos/lentes-de-contato-dental"
  }
]

export function ServicesList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.link} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

