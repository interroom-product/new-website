"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "$497",
      period: "one-time",
      description: "Perfect for getting started",
      features: ["Job Application Outsourcing"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$997",
      period: "one-time",
      description: "Most popular choice",
      features: ["Job Application Outsourcing", "Resume Rewrite"],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$1,497",
      period: "one-time",
      description: "Complete career transformation",
      features: ["Job Application Outsourcing", "Resume Rewrite", "1:1 Coaching (1 session/month)"],
      popular: false,
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-ir-pastel/20 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 font-light">Choose the plan that fits your career goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "scale-105 shadow-2xl border-ir-primary bg-white"
                  : "shadow-lg border-gray-200 bg-white hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-ir-primary to-ir-medium text-white text-center py-2 text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}>
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-ir-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/quiz">
                  <Button
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular
                        ? "bg-ir-primary hover:bg-ir-primary/90 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            ✅ 30-day money-back guarantee • ✅ No hidden fees • ✅ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
