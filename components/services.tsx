import { Heart, Stethoscope, Pill, Scissors, Zap, Home } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Consulta General",
    description: "Revisión completa de la salud de tu mascota con diagnóstico profesional",
  },
  {
    icon: Pill,
    title: "Vacunación",
    description: "Programas de vacunación completos para proteger a tu mascota",
  },
  {
    icon: Scissors,
    title: "Cirugía",
    description: "Procedimientos quirúrgicos con equipamiento de última generación",
  },
  {
    icon: Heart,
    title: "Odontología",
    description: "Limpieza y tratamiento dental especializado",
  },
  {
    icon: Zap,
    title: "Laboratorio",
    description: "Análisis clínicos y pruebas diagnósticas avanzadas",
  },
  {
    icon: Home,
    title: "Atención a Domicilio",
    description: "Servicios veterinarios en la comodidad de tu hogar",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios veterinarios de calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:border-primary/20 border border-transparent transition"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
