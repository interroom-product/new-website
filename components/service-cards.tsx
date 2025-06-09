"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [showPricing, setShowPricing] = useState<number | null>(null)

  const services = [
    {
      icon: Search,
      title: "Job Application Outsourcing",
      description: "We apply to jobs on your behalf every week, personalized to your goals.",
      price: "Pay only when you get hired",
      features: ["100+ applications/month", "Personalized targeting", "Weekly reports"],
      color: "from-ir-primary to-ir-neutral-grape",
    },
    {
      icon: FileText,
      title: "Resume Rewrite & LinkedIn Optimization",
      description: "Professional resume and LinkedIn profile tailored to your target roles, ATS-optimized.",
      price: "Pay only when you get hired",
      features: ["ATS-optimized", "Industry keywords", "LinkedIn optimization"],
      color: "from-ir-neutral-grape to-ir-medium",
    },
    {
      icon: MessageSquare,
      title: "1:1 Coaching",
      description: "Interview prep, personal branding, and career clarity from expert coaches.",
      price: "Pay only when you get hired",
      features: ["Mock interviews", "Personal branding", "Career strategy"],
      color: "from-ir-medium to-ir-primary",
    },
  ]

  return (
    <section className="py-24 px-4 bg-ir-pastel">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ir-off-black mb-3">Our Suite of Services</h2>
          <p className="text-lg text-ir-charcoal font-light">Everything you need to land your dream job</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredCard === index
            const isPricingVisible = showPricing === index

            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 transform ${
                  isHovered ? "scale-102 shadow-glow" : "scale-100 shadow-soft"
                } bg-ir-off-white border border-ir-periwinkle rounded-xl cursor-pointer group`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setShowPricing(isPricingVisible ? null : index)}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center transition-all duration-500 mb-5 ${
                      isHovered ? "scale-110" : ""
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-ir-off-black mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-ir-charcoal mb-5 text-sm leading-relaxed">{service.description}</p>

                  {/* Pricing toggle */}
                  {isPricingVisible ? (
                    <div className="space-y-2 mb-5">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-ir-charcoal">
                          <div className="w-1.5 h-1.5 bg-ir-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-5">
                      <p className="text-ir-primary font-medium text-sm">{service.price}</p>
                    </div>
                  )}

                  {/* CTA */}
                  <Link href="/quiz">
                    <Button className="w-full bg-ir-periwinkle hover:bg-ir-primary hover:text-white text-ir-off-black rounded-full transition-all duration-300 text-sm border border-ir-periwinkle">
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
