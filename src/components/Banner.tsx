import { useState, useEffect } from 'react'

const promotions = [
  {
    title: '¡OFERTA ESPECIAL!',
    text: 'Santa Deli a solo $65!',
    highlight: 'Santa Deli',
    validUntil: '',
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
    <div className="relative text-text-primary text-center py-8 md:py-16 lg:py-20 overflow-hidden md:min-h-[300px] lg:min-h-[300px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-dark-primary banner-pattern" />
      
      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4">
        <h1 className="font-mountains text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3 text-accent drop-shadow-lg">{promo.title}</h1>
        <p className="text-base md:text-xl lg:text-2xl font-bold text-text-primary">
          {promo.text.split(promo.highlight)[0]}
          <span className="text-accent font-bold text-shadow">{promo.highlight}</span>
          {promo.text.split(promo.highlight)[1]}
        </p>
        <p className="text-sm md:text-base lg:text-lg mt-2 md:mt-3 text-text-secondary">{promo.validUntil}</p>
      </div>
    </div>
  )
}

export default Banner