'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>EstéticaDental</Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className={isScrolled ? 'text-blue-600' : 'text-white'} />
          </Button>
        </div>
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            {['Início', 'Sobre', 'Serviços', 'Contato', 'Agendar'].map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'Início' ? '/' : `/${item.toLowerCase()}`} 
                  className={`block py-2 md:py-0 ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant={isScrolled ? "default" : "outline"} className="hidden md:block" asChild>
          <Link href="/agendar">Agendar Consulta</Link>
        </Button>
      </div>
    </header>
  )
}

