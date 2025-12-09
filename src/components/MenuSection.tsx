import MenuItem from './MenuItem'
import { Beef, Ghost, Coffee, Tag } from 'lucide-react'

const iconMap: { [key: string]: any } = {
  hamburguesas: Beef,
  'santo-atascon': Ghost,
  bebidas: Coffee,
  promociones: Tag,
}

interface MenuSectionProps {
  section: {
    id: string
    title: string
    items: Array<{
      name: string
      description: string
      price?: string
      discount?: string
      tag?: string
      image?: string
    }>
  }
}

const MenuSection = ({ section }: MenuSectionProps) => {
  const Icon = iconMap[section.id]

  return (
    <section id={section.id} className="mb-8 md:mb-12">
      <div className="mb-6 md:mb-8">
        <h2 className="font-mountains text-3xl md:text-5xl text-christmas-red mb-2 flex items-center gap-2 md:gap-3">
          {Icon && <Icon className="w-8 h-8 md:w-10 md:h-10" />}
          {section.title}
        </h2>
        <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-christmas-red to-christmas-dark-red rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} isPromo={section.id === 'promociones'} />
        ))}
      </div>
    </section>
  )
}

export default MenuSection