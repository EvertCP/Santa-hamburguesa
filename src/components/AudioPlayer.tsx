import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // Intentar reproducir automáticamente al cargar
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          // Si el navegador bloquea la reproducción automática, 
          // el usuario deberá hacer clic en play manualmente
          console.log('Autoplay bloqueado por el navegador')
          setIsPlaying(false)
        }
      }
    }

    // Pequeño delay para asegurar que el audio esté cargado
    const timer = setTimeout(playAudio, 100)
    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/halloween.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 right-6 z-[9998] flex items-center gap-3 bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-orange-500/30">
        {/* Botón Play/Pause */}
        <button
          onClick={togglePlay}
          className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        {/* Control de volumen */}
        <div 
          className="relative flex items-center gap-2"
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <button
            onClick={toggleMute}
            className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>

          {/* Slider de volumen */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              showVolumeSlider ? 'w-24 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #ff7b25 0%, #ff7b25 ${(isMuted ? 0 : volume) * 100}%, #4b5563 ${(isMuted ? 0 : volume) * 100}%, #4b5563 100%)`
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ff7b25;
          cursor: pointer;
          box-shadow: 0 0 4px rgba(255, 123, 37, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ff7b25;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 4px rgba(255, 123, 37, 0.5);
        }
      `}</style>
    </>
  )
}

export default AudioPlayer