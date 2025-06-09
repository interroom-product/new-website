import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import CompanyLogos from "@/components/company-logos"

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-ir-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 rounded-full bg-ir-accent/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-ir-info/5 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Personal Coaching Meets{" "}
            <span className="bg-gradient-to-r from-ir-primary to-ir-accent bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            We handle your job search from start to finish. You focus on interviews. Pay only when you get hired.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-ir-primary hover:bg-ir-primary/90 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-glow w-full sm:w-auto"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                See Our Services
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
