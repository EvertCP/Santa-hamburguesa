import { useState, useEffect } from 'react'

const promotions = [
  {
    title: '¡ESPECIAL DE HALLOWEEN!',
    text: 'Prueba nuestra nueva "Zombie Burger" con queso fundido de calabaza',
    highlight: 'Zombie Burger'
  },
  {
    title: '¡OFERTA ESPECIAL!',
    text: 'Martes de Terror: 2x1 en todas las hamburguesas después de las 8 PM',
    highlight: '2x1 en todas las hamburguesas'
  },
  {
    title: '¡PROMOCIÓN!',
    text: 'Lleva un Combo Familiar y llévate una malteada de calabaza GRATIS',
    highlight: 'malteada de calabaza GRATIS'
  }
]

const Banner = () => {
  const [currentPromo, setCurrentPromo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const promo = promotions[currentPromo]

  return (
    <div className="relative text-white text-center py-8 md:py-16 lg:py-20 animate-pulse-slow overflow-hidden md:min-h-[300px] lg:min-h-[450px] lg:w-[1200px] lg:mx-auto">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/banner-halloween-rojo.png)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4">
        <h1 className="font-creepster text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3">{promo.title}</h1>
        <p className="text-base md:text-xl lg:text-2xl">
          {promo.text.split(promo.highlight)[0]}
          <span className="text-yellow-300 font-bold">{promo.highlight}</span>
          {promo.text.split(promo.highlight)[1]}
        </p>
        <p className="text-sm md:text-base lg:text-lg mt-2 md:mt-3">Válido hasta el 31 de Octubre</p>
      </div>
    </div>
  )
}

export default Banner