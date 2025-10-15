import { Beef, Ghost, Coffee, Tag, Star } from 'lucide-react'

interface SideMenuProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

const menuItems = [
  { id: 'hamburguesas', label: 'Hamburguesas', icon: Beef },
  { id: 'santo-antojadon', label: 'Santo Antojadon', icon: Ghost },
  { id: 'promociones', label: 'Promociones', icon: Tag },
  { id: 'bebidas', label: 'Bebidas', icon: Coffee },
  { id: 'califícanos', label: 'Califícanos', icon: Star },
]

const SideMenu = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }: SideMenuProps) => {
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Cerrar menú en móvil después de seleccionar
  }

  return (
    <>
      {/* Overlay para móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Menú lateral */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 h-screen
          w-64 bg-black border-r-2 border-orange-500
          transform transition-transform duration-300 ease-in-out z-50
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-4 md:p-6 mt-16 md:mt-0">
          <h2 className="font-creepster text-2xl text-orange-500 mb-6">Menú</h2>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleSectionClick(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-orange-500'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default SideMenu