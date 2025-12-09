import { Menu, X } from 'lucide-react'

interface HeaderProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="bg-christmas-red shadow-lg relative z-50 border-b-4 border-christmas-gold sticky top-0">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex justify-between items-center">
        {/* Botón hamburguesa para móvil */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-christmas-gold p-2 hover:bg-christmas-dark-red rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo centrado en todas las vistas */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-center">
          <h1 className="text-3xl md:text-5xl text-christmas-gold drop-shadow-lg flex items-baseline gap-2">
            <span className="corinthia-bold text-christmas-cream text-6xl">Santa</span>
            <span className="font-mountains">Hamburguesa</span>
          </h1>
        </div>

        {/* Espacio vacío para balance en móvil */}
        <div className="w-12 md:hidden"></div>
      </nav>
    </header>
  )
}

export default Header