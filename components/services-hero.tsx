'use client'

import { motion } from 'framer-motion'

export function ServicesHero() {
  return (
    <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Nossos Serviços</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos de alta qualidade para garantir o seu sorriso perfeito e uma saúde bucal impecável.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

