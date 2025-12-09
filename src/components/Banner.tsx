import { useState, useEffect } from 'react'

const promotions = [
  {
    title: 'FELICES FIESTAS',
    text: 'Prueba nuestras "Galletas de temporada" y nuestro polvoron sevillano de vainilla.',
    highlight: 'Galletas de temporada',
    validUntil: 'Válido hasta el 31 de Diciembre'
  },
  {
    title: '¡OFERTA ESPECIAL!',
    text: 'Santa Deli a solo $65!',
    highlight: 'Santa Deli',
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
    <div className="relative text-white text-center py-8 md:py-16 lg:py-20 overflow-hidden md:min-h-[300px] lg:min-h-[450px] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/banner-navidad.png)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4">
        <h1 className="font-mountains text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3 text-christmas-gold drop-shadow-lg">{promo.title}</h1>
        <p className="text-base md:text-xl lg:text-2xl font-bold">
          {promo.text.split(promo.highlight)[0]}
          <span className="text-christmas-gold font-bold text-shadow">{promo.highlight}</span>
          {promo.text.split(promo.highlight)[1]}
        </p>
        <p className="text-sm md:text-base lg:text-lg mt-2 md:mt-3 text-christmas-gold">{promo.validUntil}</p>
      </div>
    </div>
  )
}

export default Banner