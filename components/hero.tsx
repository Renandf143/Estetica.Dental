import Image from 'next/image'
import { ReactNode } from 'react'

type HeroProps = {
  children: ReactNode
}

export function Hero({ children }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/hero-background.jpg"
        alt="Sorriso perfeito"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Sorria com Confiança</h1>
        <p className="text-xl mb-8">Transformando sorrisos, mudando vidas</p>
        {children}
      </div>
    </section>
  )
}

