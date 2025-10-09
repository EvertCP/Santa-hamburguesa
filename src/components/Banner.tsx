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
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-4 md:py-6 animate-pulse-slow">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-creepster text-xl md:text-3xl mb-1 md:mb-2">{promo.title}</h1>
        <p className="text-sm md:text-lg">
          {promo.text.split(promo.highlight)[0]}
          <span className="text-yellow-300 font-bold">{promo.highlight}</span>
          {promo.text.split(promo.highlight)[1]}
        </p>
        <p className="text-xs md:text-sm mt-1 md:mt-2">Válido hasta el 31 de Octubre</p>
      </div>
    </div>
  )
}

export default Banner