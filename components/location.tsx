export default function Location() {
  const phoneNumber = "+51994702350";
  const message = "Hola, me gustaría agendar una cita para mi mascota";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <section id="location" className="py-20 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-muted-foreground">
            Visítanos en nuestra clínica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.305957892546!2d-76.96490124!3d-12.15956104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b95b726eda21%3A0x846d388c76838972!2sVet%20SAN%20JORGE!5e0!3m2!1ses!2spe!4v1760900607248!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dirección
              </h3>
              <p className="text-muted-foreground">
                Jirón José Díaz 931
                <br />
                San Juan de Miraflores
                <br />
                LIMA - PERÚ
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Horario de Atención
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábado: 9:00 AM - 4:00 PM</p>
                <p>Domingo: Cerrado</p>
                <p className="pt-2 text-primary font-semibold">
                  Emergencias: 24/7
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Contacto
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📞 +51 994 702 350</p>
                <p>📧 info@petcarevet.com</p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Agendar Cita
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
