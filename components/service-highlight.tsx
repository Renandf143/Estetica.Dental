'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function ServiceHighlight() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/service-highlight.jpg"
              alt="Tratamento odontológico avançado"
              width={600}
              height={400}
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
              Na EstéticaDental, investimos nas mais recentes tecnologias e técnicas odontológicas para oferecer tratamentos de alta precisão e conforto máximo aos nossos pacientes. Desde scanners 3D até equipamentos de laser avançados, garantimos resultados excepcionais em cada procedimento.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              <li>Diagnósticos precisos com imagens 3D</li>
              <li>Tratamentos minimamente invasivos</li>
              <li>Recuperação mais rápida e confortável</li>
              <li>Resultados duradouros e naturais</li>
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

