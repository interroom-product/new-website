import FuturisticCalculator from "@/components/futuristic-calculator"
import Hero from "@/components/hero"
import LogoStrip from "@/components/logo-strip"
import ServicesSection from "@/components/services" // Renamed from Services to avoid conflict
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Comparison from "@/components/comparison"
import Coaches from "@/components/coaches"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoStrip />
      <FuturisticCalculator />
      <ServicesSection />
      <Testimonials />
      <FAQ />
      <Comparison />
      <Coaches />
      <Footer />
    </div>
  )
}
