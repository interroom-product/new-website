"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal background with gradient shapes */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs - no floating icons */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-ir-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-ir-medium/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-radial from-ir-neutral/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Simplified headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Your Job Search,{" "}
            <span className="bg-gradient-to-r from-ir-primary to-ir-medium bg-clip-text text-transparent">
              Automated
            </span>
          </h1>

          {/* Short subhead only */}
          <p className="text-2xl md:text-3xl text-gray-600 mb-16 font-light leading-relaxed">
            We handle the applications, you handle the interviews.
          </p>

          {/* Prominent CTA */}
          <div className="mb-20">
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-ir-primary hover:bg-ir-primary/90 text-white px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Started Free
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-gray-500 text-sm mt-4">No credit card required</p>
          </div>
        </div>

        {/* Trust bar moved lower and hidden on mobile */}
        <div className="hidden md:block">
          <p className="text-gray-400 text-sm mb-6">Trusted by job seekers at</p>
          <div className="flex justify-center items-center gap-12 opacity-50">
            {["Google", "Meta", "Apple", "Netflix", "Microsoft"].map((company, index) => (
              <div
                key={company}
                className="text-lg font-medium text-gray-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
