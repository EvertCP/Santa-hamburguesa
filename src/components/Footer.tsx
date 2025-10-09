import { Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12 mt-8 md:mt-12 border-t-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="font-creepster text-xl md:text-2xl text-orange-500 mb-3 md:mb-4">Horario</h3>
            <p className="text-gray-300 mb-2 text-sm md:text-base">Lunes a Jueves: 1 PM - 10 PM</p>
            <p className="text-gray-300 mb-2 text-sm md:text-base">Viernes y Sábado: 1 PM - 12 AM</p>
            <p className="text-gray-300 text-sm md:text-base">Domingo: 2 PM - 9 PM</p>
          </div>
          
          <div>
            <h3 className="font-creepster text-xl md:text-2xl text-orange-500 mb-3 md:mb-4">Contacto</h3>
            <p className="text-gray-300 mb-2 flex items-center gap-2 text-sm md:text-base">
              <Phone className="w-4 h-4" /> 55 1234 5678
            </p>
            <p className="text-gray-300 flex items-center gap-2 text-sm md:text-base">
              <MapPin className="w-4 h-4" /> Calle de los Fantasmas #31, Col. Terror
            </p>
          </div>
          
          <div>
            <h3 className="font-creepster text-xl md:text-2xl text-orange-500 mb-3 md:mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-center text-gray-400 text-xs md:text-sm">
          <p>&copy; 2023 Santa Hamburguesa - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer