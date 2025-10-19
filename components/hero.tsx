export function Hero() {
  const phoneNumber = "34912345678"; // Reemplaza con tu número
  const message = "Hola, me gustaría agendar una cita para mi mascota";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="inicio"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/imagen-banner-3.png)",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-balance">
            Cuidado Veterinario de Excelencia
          </h1>
          <p className="text-lg md:text-xl text-white/95 text-balance max-w-2xl mx-auto">
            Tu mascota merece lo mejor. Ofrecemos servicios veterinarios
            completos con profesionales dedicados a la salud y bienestar de tus
            animales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <button className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition shadow-lg">
                Agendar Cita
              </button>
            </a>
            <a href="#nosotros">
              <button className="cursor-pointer border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition">
                Conocer Más
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
