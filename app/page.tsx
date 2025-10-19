import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Carousel } from "@/components/carousel"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import Location from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Carousel />
      <Services />
      <About />
      <Location />
      {/* <Contact /> */}
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
