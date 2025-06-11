"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import CompanyLogos from "@/components/company-logos"
import ResultsTicker from "@/components/results-ticker"

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-ir-off-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-ir-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 rounded-full bg-ir-neutral-grape/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-ir-medium/10 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-ir-off-black mb-6 leading-tight">
            Where Personal Coaching Meets{" "}
            <span className="bg-gradient-to-r from-ir-primary to-ir-neutral-grape bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-ir-charcoal mb-10 max-w-3xl mx-auto font-light">
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
            <button
              onClick={() => {
                const servicesSection = document.getElementById("services-section")
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="border-ir-charcoal text-ir-charcoal hover:bg-ir-periwinkle px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              See Our Services
            </button>
          </div>

          {/* Before & After Metrics */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Average Salary Increase */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-ir-periwinkle p-6">
                <h3 className="text-lg font-semibold text-ir-off-black mb-4">Average Salary Increase</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Before InterRoom</div>
                    <div className="text-2xl font-bold text-red-500">+8%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">With InterRoom</div>
                    <div className="text-2xl font-bold text-green-500">+44%</div>
                  </div>
                </div>
              </div>

              {/* Job Search Duration */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-ir-periwinkle p-6">
                <h3 className="text-lg font-semibold text-ir-off-black mb-4">Job Search Duration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Typical Search</div>
                    <div className="text-2xl font-bold text-red-500">6-12 mo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">With InterRoom</div>
                    <div className="text-2xl font-bold text-green-500">8 weeks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Results Ticker Bar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-ir-periwinkle p-4">
              <ResultsTicker />
            </div>
          </div>

          {/* Company Logos */}
          <CompanyLogos />
        </div>
      </div>
    </section>
  )
}
