import { useState } from 'react'

interface MenuItemProps {
  item: {
    name: string
    description: string
    price?: string
    discount?: string
    tag?: string
    image?: string
  }
  isPromo?: boolean
}

const MenuItem = ({ item, isPromo }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 border-2 ${
        isPromo ? 'border-purple-500' : 'border-orange-500'
      } ${isHovered ? 'transform -translate-y-1 md:-translate-y-2 shadow-2xl shadow-orange-500/50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen del platillo */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img
          src={item.image || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      {/* Contenido */}
      <div className="p-4 md:p-5">
        <h3 className="font-creepster text-xl md:text-2xl text-orange-500 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-300 mb-3 md:mb-4 text-sm leading-relaxed">{item.description}</p>

        <div className="flex items-center justify-between flex-wrap gap-2">
          {item.price && (
            <span className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-base md:text-lg">
              {item.price}
            </span>
          )}
          <div className="flex gap-2">
            {item.discount && (
              <span className="bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                {item.discount}
              </span>
            )}
            {item.tag && (
              <span className="bg-purple-500 text-white px-2 md:px-3 py-1 rounded-full text-xs">
                {item.tag}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItem