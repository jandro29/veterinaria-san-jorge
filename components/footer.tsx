import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <img src="/logo-solo-negro.png" alt="" />
              </div>
              <span className="font-bold text-lg">San Jorge</span>
            </div>
            <p className="text-background/70">Tu clínica veterinaria de confianza</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#inicio" className="hover:text-background transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-background transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-background transition">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-background transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Consulta General
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Vacunación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Cirugía
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Emergencias
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; 2025 Alejandro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
