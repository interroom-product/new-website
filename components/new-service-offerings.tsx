"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, MessageSquare, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

const serviceDetailPages = {
  "job-applications": "/services/job-applications",
  "resume-linkedin": "/services/resume-linkedin",
  coaching: "/services/coaching",
}

export default function NewServiceOfferings() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const standaloneServices = [
    {
      icon: Search,
      title: "Job Application Outsourcing",
      description: "We apply to 100+ targeted jobs on your behalf every month with personalized targeting.",
      price: "$1,497",
      period: "one-time",
      features: [
        "100+ applications per month",
        "Personalized job targeting",
        "Weekly progress reports",
        "Application tracking dashboard",
        "30-day service period",
      ],
      color: "from-ir-primary to-ir-accent",
      serviceId: "job-applications",
    },
    {
      icon: FileText,
      title: "Resume & LinkedIn Rewrite",
      description: "Professional resume and LinkedIn profile optimized for your target roles and ATS systems.",
      price: "$497",
      period: "one-time",
      features: [
        "Complete resume rewrite",
        "ATS optimization",
        "LinkedIn profile optimization",
        "Industry-specific keywords",
        "2 rounds of revisions",
      ],
      color: "from-ir-accent to-ir-secondary",
      serviceId: "resume-linkedin",
    },
    {
      icon: MessageSquare,
      title: "1:1 Coaching Package",
      description: "Comprehensive interview preparation with mock interviews and personalized feedback.",
      price: "$797",
      period: "one-time",
      features: [
        "4 one-on-one coaching sessions",
        "Mock interviews with feedback",
        "Interview strategy development",
        "Salary negotiation guidance",
        "Follow-up support",
      ],
      color: "from-ir-secondary to-ir-primary",
      serviceId: "coaching",
    },
  ]

  return (
    <section id="services-section" className="py-24 px-4 bg-ir-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ir-neutral-800 mb-3">Choose Your Service</h2>
          <p className="text-lg text-gray-600 font-light">
            Select individual services or get the complete success-based bundle
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {/* Standalone Services */}
          {standaloneServices.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredCard === index

            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 transform ${
                  isHovered ? "scale-102 shadow-glow" : "scale-100 shadow-soft"
                } bg-ir-neutral-100 border-0 rounded-xl cursor-pointer group`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
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

                  {/* Title and Price */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-ir-neutral-800 mb-2">{service.title}</h3>
                    <div className="flex items-baseline mb-3">
                      <span className="text-2xl font-bold text-ir-neutral-800">{service.price}</span>
                      <span className="text-gray-600 ml-2 text-sm">{service.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-ir-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Link href={serviceDetailPages[service.serviceId as keyof typeof serviceDetailPages]}>
                      <Button
                        variant="outline"
                        className="w-full border-ir-primary text-ir-primary hover:bg-ir-primary hover:text-white rounded-full transition-all duration-300 text-sm"
                      >
                        Learn More
                      </Button>
                    </Link>
                    <Link href={`/start?service=${service.serviceId}`}>
                      <Button className="w-full bg-ir-primary hover:bg-ir-primary/90 text-white rounded-full transition-all duration-300 text-sm">
                        Purchase Service
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}

          {/* All-in-One Bundle - Highlighted */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-ir-primary/10 to-ir-accent/10 border-2 border-ir-primary shadow-glow rounded-xl lg:row-span-1">
            {/* Most Popular Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-ir-success text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </div>
            </div>

            <CardContent className="p-6 h-full flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-ir-primary to-ir-accent flex items-center justify-center mb-5">
                <Star className="w-6 h-6 text-white" />
              </div>

              {/* Title and Pricing */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-ir-neutral-800 mb-2">All-in-One Bundle</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-ir-primary">Success-Based Pricing</span>
                  <p className="text-sm text-gray-600 mt-1">Pay only when you get hired</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow">
                Complete career acceleration with all services included, plus dedicated coaching and full application
                management.
              </p>

              {/* Key Features */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-ir-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>All services above included</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-ir-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated career coach</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-ir-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unlimited revisions & support</span>
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-ir-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Success guarantee</span>
                </div>
              </div>

              {/* CTA */}
              <Link href="/quiz" className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-ir-primary to-ir-accent hover:from-ir-primary/90 hover:to-ir-accent/90 text-white rounded-full transition-all duration-300 text-sm font-semibold">
                  See If You Qualify
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
