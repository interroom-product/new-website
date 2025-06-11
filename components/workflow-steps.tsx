"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Trophy } from "lucide-react"

export default function WorkflowSteps() {
  const steps = [
    {
      icon: Target,
      title: "Strategy & Preparation",
      description: "First, we build your personalized career blueprint to ensure you stand out to top employers.",
      color: "from-ir-primary to-ir-medium",
      services: [
        {
          name: "Job Sourcing",
          detail:
            "We identify hundreds of relevant roles, including unlisted opportunities, to build your perfect target list.",
        },
        {
          name: "Resume & LinkedIn Overhaul",
          detail:
            "We craft an optimized resume and LinkedIn profile designed to capture the attention of hiring managers.",
        },
      ],
    },
    {
      icon: Zap,
      title: "We Take Over",
      description: "Next, our team handles the most time-consuming part of the job search for you.",
      color: "from-ir-medium to-ir-neutral",
      services: [
        {
          name: "Application Submission",
          detail:
            "We submit polished applications to all selected jobs on your behalf so you can focus on preparing for interviews.",
        },
      ],
    },
    {
      icon: Trophy,
      title: "You Land the Offer",
      description:
        "Finally, your dedicated coach provides expert guidance to help you convert interviews into compelling offers.",
      color: "from-ir-neutral to-ir-periwinkle",
      services: [
        {
          name: "Interview Prep",
          detail:
            "We run you through mock interviews and provide targeted coaching to help you ace every conversation.",
        },
        {
          name: "Offer Negotiation",
          detail:
            "Our experts help you navigate negotiations to secure the best possible compensation package for every offer you receive.",
        },
      ],
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-ir-pastel/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We Simplify Your Journey</h2>
          <p className="text-xl text-gray-600 font-light">
            A simple, transparent process designed to get you results, fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Card
                key={index}
                className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Icon and Step Number */}
                  <div className="text-center mb-6">
                    <div className="relative mb-4">
                      <div
                        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Step number and title */}
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-ir-primary mr-2">{index + 1}.</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                  </div>

                  {/* Services List */}
                  <div className="flex-grow">
                    <div className="space-y-4">
                      {step.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-left">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{service.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
