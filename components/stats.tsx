'use client'

import { motion } from "framer-motion"

const stats = [
  { value: "5000+", label: "Pacientes Atendidos" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "98%", label: "Satisfação dos Clientes" },
  { value: "25+", label: "Profissionais Especializados" }
]

export function Stats() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

