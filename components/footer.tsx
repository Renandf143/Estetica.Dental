import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EstéticaDental</h3>
            <p>Transformando sorrisos, mudando vidas.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/contato">Contato</Link></li>
              <li><Link href="/agendar">Agendar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p>Rua Exemplo, 123 - Cidade, Estado</p>
            <p>contato@esteticadental.com</p>
            <p>(11) 1234-5678</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook"><Facebook /></Link>
              <Link href="#" aria-label="Instagram"><Instagram /></Link>
              <Link href="#" aria-label="Twitter"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 EstéticaDental. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

