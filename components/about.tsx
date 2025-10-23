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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre Veterinaria San Jorge
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Centro Veterinario San Jorge nació con la ilusión de crear un
              espacio donde los animales reciban una atención médica responsable
              y, al mismo tiempo, un trato lleno de amor. Con esfuerzo y
              dedicación, hemos crecido paso a paso, ganando la confianza de
              nuestros clientes gracias a la atención cercana, los buenos
              resultados y el respeto por cada vida animal que cuidamos. Hoy
              seguimos trabajando con el mismo espíritu: mejorar cada día y
              seguir siendo ese lugar donde las familias encuentran el cuidado
              que sus mascotas merecen.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Años de experiencia
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">
                  Mascotas atendidas
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergencias</div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfacción
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
          <div className="bg-primary/10 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Nuestra Misión
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Brindar servicios veterinarios integrales y de alta calidad,
              enfocados en la prevención, diagnóstico y tratamiento de
              enfermedades, garantizando el bienestar físico y emocional de cada
              mascota, con un trato humano, ético y profesional.
            </p>
          </div>

          <div className="bg-primary/10 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Nuestra Visión
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ser reconocidos como una de las veterinarias líderes y más
              confiables de la ciudad, ampliando nuestros servicios y abriendo
              nuevas sedes, siempre con el mismo compromiso con la salud y
              felicidad animal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
