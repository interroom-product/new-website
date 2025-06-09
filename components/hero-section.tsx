import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import CompanyLogos from "@/components/company-logos"

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ir-pastel/30 to-white pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-ir-primary/10 text-ir-primary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Humans + AI</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Dedicated Career Team,{" "}
            <span className="bg-gradient-to-r from-ir-primary to-ir-medium bg-clip-text text-transparent">
              Supercharged by Smart Technology
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            We handle your job search from start to finish. You focus on interviews. Pay only when you get hired.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-ir-primary hover:bg-ir-primary/90 text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 w-full sm:w-auto"
              >
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Company Logos */}
          <CompanyLogos />
        </div>
      </div>
    </section>
  )
}
