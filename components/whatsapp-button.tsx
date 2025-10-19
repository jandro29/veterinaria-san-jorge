import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "+51994702350"
  const message = "Hola, me gustaría agendar una cita para mi mascota"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
