import { Phone, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-secondary text-text-primary py-8 md:py-12 mt-8 md:mt-12 border-t border-accent/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="font-mountains text-xl md:text-2xl text-accent mb-3 md:mb-4">Horario</h3>
            <p className="text-text-secondary mb-2 text-sm md:text-base">Lunes a Sabado: 5:00 PM - 11:00 PM</p>
          </div>
          
          <div>
            <h3 className="font-mountains text-xl md:text-2xl text-accent mb-3 md:mb-4">Contacto</h3>
            <p className="text-text-secondary mb-2 flex items-center gap-2 text-sm md:text-base">
              <Phone className="w-4 h-4" /> 32 2103 2020
            </p>
            <p className="text-text-secondary flex items-center gap-2 text-sm md:text-base">
              <MapPin className="w-4 h-4" /> Valle nacional #185, Valle dorado.
            </p>
          </div>
          
          <div>
            <h3 className="font-mountains text-xl md:text-2xl text-accent mb-3 md:mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-text-primary hover:text-accent transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/santahamburguesa.vd/" className="text-text-primary hover:text-accent transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-primary mt-6 md:mt-8 pt-4 md:pt-6 text-center text-text-secondary text-xs md:text-sm">
          <p>&copy; 2025 Santa Hamburguesa - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer