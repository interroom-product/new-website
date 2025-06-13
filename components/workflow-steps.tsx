"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Users, Rocket } from "lucide-react"

export default function WorkflowSteps() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Take the Quiz",
      description: "60 seconds to understand your goals, experience, and preferences",
      color: "from-ir-primary to-ir-medium",
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "We pair you with a dedicated coach and create your custom strategy",
      color: "from-ir-medium to-ir-neutral",
    },
    {
      icon: Rocket,
      title: "We Take Over",
      description: "Sit back while we handle applications, follow-ups, and negotiations",
      color: "from-ir-neutral to-ir-periwinkle",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-ir-pastel/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Here's How It Works</h2>
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
                className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Step number and title */}
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-ir-primary mr-2">{index + 1}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
