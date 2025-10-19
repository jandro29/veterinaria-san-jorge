"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            
              <img src="/logo-solo.png" alt="" />
            
          </div>
          <span className="text-xl font-bold text-primary">San Jorge</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition">
            Inicio
          </a>
          <a href="#galeria" className="text-foreground hover:text-primary transition">
            Galería
          </a>
          <a href="#servicios" className="text-foreground hover:text-primary transition">
            Servicios
          </a>
          <a href="#nosotros" className="text-foreground hover:text-primary transition">
            Nosotros
          </a>
          {/* <a href="#contacto" className="text-foreground hover:text-primary transition">
            Contacto
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <a href="#inicio" className="block text-foreground hover:text-primary transition">
              Inicio
            </a>
            <a href="#galeria" className="block text-foreground hover:text-primary transition">
              Galería
            </a>
            <a href="#servicios" className="block text-foreground hover:text-primary transition">
              Servicios
            </a>
            <a href="#nosotros" className="block text-foreground hover:text-primary transition">
              Nosotros
            </a>
            <a href="#contacto" className="block text-foreground hover:text-primary transition">
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
