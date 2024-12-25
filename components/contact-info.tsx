import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Informações de Contato</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-3 text-blue-500" />
          <span>(11) 1234-5678</span>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-3 text-blue-500" />
          <a href="mailto:contato@esteticadental.com" className="hover:underline">contato@esteticadental.com</a>
        </li>
        <li className="flex items-center">
          <MapPin className="w-5 h-5 mr-3 text-blue-500" />
          <span>Rua Exemplo, 123 - São Paulo, SP</span>
        </li>
        <li className="flex items-center">
          <Clock className="w-5 h-5 mr-3 text-blue-500" />
          <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
        </li>
      </ul>
    </div>
  )
}

