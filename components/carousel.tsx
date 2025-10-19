"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  {
    id: 1,
    type: "image",
    src: "/happy-dog-at-veterinary-clinic.jpg",
    alt: "Perro feliz en la clínica",
  },
  {
    id: 2,
    type: "image",
    src: "/cat-being-examined-by-veterinarian.jpg",
    alt: "Gato siendo examinado",
  },
  {
    id: 3,
    type: "image",
    src: "/veterinary-surgery-room-professional.jpg",
    alt: "Sala de cirugía veterinaria",
  },
  {
    id: 4,
    type: "image",
    src: "/pet-vaccination-appointment.jpg",
    alt: "Vacunación de mascota",
  },
  {
    id: 5,
    type: "image",
    src: "/veterinary-ultrasound-examination.jpg",
    alt: "Ecografía veterinaria",
  },
]

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length)
    setAutoPlay(false)
  }

  return (
    <section id="galeria" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Galería de Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg">Conoce nuestras instalaciones y el cuidado que brindamos</p>
        </div>

        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={item.src || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoPlay(false)
                }}
                className={`w-2 h-2 rounded-full transition ${index === current ? "bg-primary w-8" : "bg-white/50"}`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-muted-foreground">
          {current + 1} / {items.length}
        </div>
      </div>
    </section>
  )
}
