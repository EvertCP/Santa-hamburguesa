import { useState } from 'react'
import { Star, MapPin, Send } from 'lucide-react'

const RatingSection = () => {
  const [rating, setRating] = useState<number>(0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  })
  const [showForm, setShowForm] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleStarClick = (value: number) => {
    setRating(value)
    setSubmitted(true)
    
    if (value >= 4) {
      setShowForm(false)
    } else {
      setShowForm(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // URL del backend desde variable de entorno
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      const API_URL = `${API_BASE_URL}/api/rating/submit-low-rating`

      // Enviar datos al backend
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          rating: rating,
          comments: formData.comments,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el formulario')
      }

      alert('¡Gracias por tus comentarios! Los tomaremos en cuenta para mejorar.')
      
      // Reset form
      setFormData({ name: '', email: '', comments: '' })
      setRating(0)
      setSubmitted(false)
      setShowForm(false)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      alert('Hubo un error al enviar tus comentarios. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoogleMapsRedirect = () => {
    // Reemplaza esta URL con la URL real de tu negocio en Google Maps
    const googleMapsUrl = 'https://www.google.com/search?sca_esv=853236ac3d6bce34&hl=es-419&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0IQEpUDMCE8VN94IehNv4wcmrGG7MiaYRsOKoE2AGHzq-RuKRrHgwtaOnaknq1RsvSLyI0j5Dlm2H-y9e73XXcKiL8c-YS4pkC6fkWnesLIfOPS_A%3D%3D&q=Santa+Hamburguesa+vd+Opiniones&sa=X&ved=2ahUKEwibtMS55KaQAxX7JUQIHSJjON0Q0bkNegQIIBAD&biw=1869&bih=947'
    window.open(googleMapsUrl, '_blank')
  }

  const resetRating = () => {
    setRating(0)
    setSubmitted(false)
    setShowForm(false)
    setFormData({ name: '', email: '', comments: '' })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-dark-secondary rounded-lg shadow-2xl p-8 border border-accent/40">
        <h2 className="font-mountains text-4xl text-accent mb-4 text-center">
          ¡Califícanos!
        </h2>
        <p className="text-text-secondary text-center mb-8">
          Tu opinión es muy importante para nosotros
        </p>

        {/* Sistema de estrellas */}
        {!submitted && (
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-all duration-200 transform hover:scale-110"
              >
                <Star
                  className={`w-12 h-12 md:w-16 md:h-16 ${
                    star <= (hoveredRating || rating)
                      ? 'fill-accent text-accent'
                      : 'text-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        {/* Mensaje para calificaciones altas (4-5 estrellas) */}
        {submitted && rating >= 4 && (
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-10 h-10 ${
                      star <= rating
                        ? 'fill-accent text-accent'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                ¡Muchas gracias por tu excelente calificación!
              </h3>
              <p className="text-text-secondary mb-6">
                Nos encantaría que compartieras tu experiencia en Google Maps
              </p>
              <button
                onClick={handleGoogleMapsRedirect}
                className="bg-accent hover:bg-accent/90 text-dark-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Calificar en Google Maps
              </button>
            </div>
            <button
              onClick={resetRating}
              className="text-text-secondary hover:text-accent underline mt-4"
            >
              Cambiar calificación
            </button>
          </div>
        )}

        {/* Formulario para calificaciones bajas (1-3 estrellas) */}
        {submitted && rating <= 3 && showForm && (
          <div className="animate-fade-in">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 ${
                    star <= rating
                      ? 'fill-accent text-accent'
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">
              Lamentamos que tu experiencia no haya sido la mejor
            </h3>
            <p className="text-text-secondary mb-6 text-center">
              Por favor, cuéntanos qué podemos mejorar
            </p>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2 font-medium">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-primary border border-dark-secondary rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2 font-medium">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-primary border border-dark-secondary rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-text-secondary mb-2 font-medium">
                  Comentarios *
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-primary border border-dark-secondary rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntanos qué podemos mejorar..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-accent hover:bg-accent/90 text-dark-primary font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Comentarios'}
                </button>
                <button
                  type="button"
                  onClick={resetRating}
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-dark-primary hover:bg-dark-primary/70 text-text-primary rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-dark-secondary"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Información adicional */}
      <div className="mt-8 text-center text-text-secondary text-sm">
        <p>Tus comentarios son confidenciales y nos ayudan a mejorar nuestro servicio</p>
      </div>
    </div>
  )
}

export default RatingSection