import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import LogoStrip from "@/components/logo-strip"
import ServiceHub from "@/components/service-hub"
import Comparison from "@/components/comparison"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Coaches from "@/components/coaches"
import Footer from "@/components/footer"
import FuturisticCalculator from "@/components/futuristic-calculator"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoStrip />
      <FuturisticCalculator />
      <ServiceHub />
      <Comparison />
      <Coaches />
      <Testimonials />
      <Faq />
      <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-violet-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to transform your job search?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who've accelerated their careers with InterRoom's personalized approach.
          </p>
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
