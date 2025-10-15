import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import SideMenu from './components/SideMenu'
import MenuSection from './components/MenuSection'
import RatingSection from './components/RatingSection'
import Footer from './components/Footer'
import AudioPlayer from './components/AudioPlayer'
import { menuData } from './data/MenuData'

function App() {
  const [activeSection, setActiveSection] = useState('hamburguesas')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900">
      <AudioPlayer />
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Banner />
      <div className="flex relative">
        <SideMenu 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 w-full">
          {activeSection === 'califícanos' ? (
            <RatingSection />
          ) : (
            menuData
              .filter((section) => section.id === activeSection)
              .map((section) => (
                <MenuSection key={section.id} section={section} />
              ))
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App