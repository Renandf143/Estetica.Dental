'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu sorriso?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende uma consulta hoje e dê o primeiro passo em direção ao sorriso dos seus sonhos. Nossa equipe está ansiosa para cuidar de você!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/agendar">Agende sua Consulta</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

