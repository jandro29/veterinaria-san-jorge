export function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/professional-veterinary-team.jpg"
              alt="Equipo veterinario profesional"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre Veterinaria San Jorge</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Con más de 15 años de experiencia, San Jorge se ha consolidado como la clínica veterinaria de confianza en
              la región. Nuestro equipo de profesionales altamente capacitados está comprometido con brindar el mejor
              cuidado a tus mascotas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Contamos con instalaciones modernas, equipamiento de última tecnología y un equipo dedicado a la salud y
              bienestar de tus animales. Cada mascota es tratada como parte de nuestra familia.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Mascotas atendidas</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergencias</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
