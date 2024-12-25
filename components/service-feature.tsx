'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export function ServiceFeature() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=800&text=Tecnologia+Avançada"
              alt="Tecnologia odontológica avançada"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Tecnologia de Ponta em Odontologia</h2>
            <p className="text-gray-600 mb-6">
              Na EstéticaDental, investimos nas mais recentes tecnologias e técnicas odontológicas para oferecer tratamentos de alta precisão e conforto máximo aos nossos pacientes.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Diagnósticos precisos com imagens 3D",
                "Tratamentos minimamente invasivos",
                "Recuperação mais rápida e confortável",
                "Resultados duradouros e naturais"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="text-green-500 mr-2" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/contato">Agende uma Consulta</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

