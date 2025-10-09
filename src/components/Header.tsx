import { Menu, X } from 'lucide-react'

interface HeaderProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="bg-black shadow-lg relative z-50 border-b-2 border-orange-500 sticky top-0">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex justify-between items-center">
        {/* Botón hamburguesa para móvil */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-orange-500 p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo centrado en todas las vistas */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-center">
          <h1 className="text-3xl md:text-5xl text-orange-500 drop-shadow-lg flex items-baseline gap-2">
            <span className="font-above-beyond text-white text-5xl">Santa</span>
            <span className="font-bbh-sans">Hamburguesa</span>
          </h1>
        </div>

        {/* Espacio vacío para balance en móvil */}
        <div className="w-12 md:hidden"></div>
      </nav>
    </header>
  )
}

export default Header