"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, MessageSquare, Badge } from "lucide-react"
import Link from "next/link"

export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [showPricing, setShowPricing] = useState<number | null>(null)

  const services = [
    {
      icon: Search,
      title: "Job Application Outsourcing",
      description: "We apply to jobs on your behalf every week, personalized to your goals.",
      price: "Success-based pricing",
      features: ["100+ applications/month", "Personalized targeting", "Weekly reports"],
      color: "from-ir-primary to-ir-medium",
    },
    {
      icon: FileText,
      title: "Resume Rewrite",
      description: "Professional resume tailored to your target roles, ATS-optimized.",
      price: "Success-based pricing",
      features: ["ATS-optimized", "Industry keywords", "LinkedIn optimization"],
      color: "from-ir-medium to-ir-neutral",
    },
    {
      icon: MessageSquare,
      title: "1:1 Coaching",
      description: "Interview prep, personal branding, and career clarity from expert coaches.",
      price: "Success-based pricing",
      features: ["Mock interviews", "Personal branding", "Career strategy"],
      color: "from-ir-neutral to-ir-periwinkle",
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Suite of Services</h2>
          <p className="text-xl text-gray-600 font-light">Everything you need to land your dream job</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredCard === index
            const isPricingVisible = showPricing === index

            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 transform ${
                  isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-lg"
                } bg-white border border-gray-200 hover:border-ir-primary/30 cursor-pointer group`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setShowPricing(isPricingVisible ? null : index)}
              >
                <CardContent className="p-8">
                  {/* Success-based pricing badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "scale-110" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      <Badge className="w-3 h-3 mr-1" />
                      Success-Based
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Pricing toggle */}
                  {isPricingVisible ? (
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-ir-primary rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="text-ir-primary font-semibold">{service.price}</p>
                    </div>
                  )}

                  {/* CTA */}
                  <Link href="/quiz">
                    <Button className="w-full bg-gray-100 hover:bg-ir-primary hover:text-white text-gray-900 rounded-xl transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
