"use client"

import { useEffect, useState } from "react"
import { X, CheckCircle, ArrowRight } from "lucide-react"

export default function PainSolutionFlow() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("pain-solution")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pain-solution" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pain Side */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <X className="w-8 h-8 mr-3" />
                The Broken Way
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Endless applications with no responses</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Generic resumes that don't stand out</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Wasting time on unqualified opportunities</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>No feedback or guidance when rejected</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Months of frustration and self-doubt</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center md:justify-start">
            <ArrowRight className="w-12 h-12 text-ir-primary animate-pulse" />
          </div>

          {/* Solution Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="bg-ir-primary/20 border border-ir-primary/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-ir-primary mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                The InterRoom Way
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ir-primary mr-3 mt-1 flex-shrink-0" />
                  <span>We apply to 100+ relevant jobs for you</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ir-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Custom resume for each application</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ir-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Only high-quality, pre-screened opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ir-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Interview coaching and offer negotiation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-ir-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Land your dream job in weeks, not months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-ir-medium font-semibold">
            "Endless applications. No responses. Let us drive — you just interview."
          </p>
        </div>
      </div>
    </section>
  )
}
