"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, CreditCard, Shield, Clock, Brain, FileText, Mic, Star } from "lucide-react"

export default function StartPage() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)

  const services = {
    "job-applications": {
      icon: Brain,
      title: "Job Application Outsourcing",
      price: "$1,497",
      description: "We apply to 100+ targeted jobs on your behalf every month with personalized targeting.",
      features: [
        "100+ applications per month",
        "Personalized job targeting",
        "Weekly progress reports",
        "Application tracking dashboard",
        "30-day service period",
      ],
    },
    "resume-linkedin": {
      icon: FileText,
      title: "Resume & LinkedIn Rewrite",
      price: "$497",
      description: "Professional resume and LinkedIn profile optimized for your target roles and ATS systems.",
      features: [
        "Complete resume rewrite",
        "ATS optimization",
        "LinkedIn profile optimization",
        "Industry-specific keywords",
        "2 rounds of revisions",
      ],
    },
    coaching: {
      icon: Mic,
      title: "1:1 Coaching Package",
      price: "$797",
      description: "Comprehensive interview preparation with mock interviews and personalized feedback.",
      features: [
        "4 one-on-one coaching sessions",
        "Mock interviews with feedback",
        "Interview strategy development",
        "Salary negotiation guidance",
        "Follow-up support",
      ],
    },
    bundle: {
      icon: Star,
      title: "All-in-One Bundle",
      price: "Success-Based",
      description: "Complete career acceleration with all services included, plus dedicated coaching.",
      features: [
        "All services above included",
        "Dedicated career coach",
        "Unlimited revisions & support",
        "Success guarantee",
        "Pay only when you get hired",
      ],
    },
  }

  useEffect(() => {
    if (serviceParam && services[serviceParam as keyof typeof services]) {
      setSelectedService(serviceParam)
    }
  }, [serviceParam])

  const currentService = selectedService ? services[selectedService as keyof typeof services] : null

  if (!currentService) {
    return (
      <div className="min-h-screen bg-ir-neutral-100 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ir-neutral-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600">Please select a service from our homepage or services page.</p>
        </div>
      </div>
    )
  }

  const Icon = currentService.icon

  return (
    <div className="min-h-screen bg-ir-neutral-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-ir-neutral-800 mb-4">Complete Your Order</h1>
          <p className="text-xl text-gray-600">One final step to get started with your career acceleration</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service Summary */}
          <div>
            <Card className="bg-ir-neutral-100 border-ir-neutral-300 shadow-soft mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-ir-neutral-800 flex items-center">
                  <Icon className="w-6 h-6 text-ir-primary mr-2" />
                  {currentService.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600">{currentService.description}</p>

                <div className="space-y-2">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-ir-neutral-300 pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-600">Total Investment:</span>
                    <span className="text-2xl font-bold text-ir-neutral-800">{currentService.price}</span>
                  </div>
                  {selectedService !== "bundle" && <p className="text-sm text-gray-500 mt-1">One-time payment</p>}
                  {selectedService === "bundle" && (
                    <p className="text-sm text-gray-500 mt-1">Small deposit now, remainder when you get hired</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-ir-success mb-2" />
                <span className="text-sm text-gray-600">30-Day Guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="w-8 h-8 text-ir-primary mb-2" />
                <span className="text-sm text-gray-600">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-ir-accent mb-2" />
                <span className="text-sm text-gray-600">Start Immediately</span>
              </div>
            </div>
          </div>

          {/* Account Creation & Payment Form */}
          <div>
            <Card className="bg-ir-neutral-100 border-ir-neutral-300 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-ir-neutral-800">Create Your Account & Complete Payment</CardTitle>
                <p className="text-gray-600 text-sm">We'll create your client portal account to track your progress</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form className="space-y-4">
                  {/* Account Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-ir-neutral-800 border-b border-ir-neutral-300 pb-2">
                      Account Information
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-600">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-600">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-600">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                        placeholder="john@example.com"
                      />
                      <p className="text-xs text-gray-500 mt-1">This will be your login email for the client portal</p>
                    </div>

                    <div>
                      <Label htmlFor="password" className="text-gray-600">
                        Create Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                        placeholder="Create a secure password"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-600">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-ir-neutral-800 border-b border-ir-neutral-300 pb-2">
                      Payment Information
                    </h3>

                    <div>
                      <Label htmlFor="cardNumber" className="text-gray-600">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-gray-600">
                          Expiry Date
                        </Label>
                        <Input
                          id="expiry"
                          className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-gray-600">
                          CVC
                        </Label>
                        <Input
                          id="cvc"
                          className="bg-ir-neutral-100 border-ir-neutral-300 text-ir-neutral-800 focus:border-ir-primary"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-ir-primary hover:bg-ir-primary/90 text-white py-4 text-lg font-semibold rounded-full">
                    {selectedService === "bundle"
                      ? "Start Success-Based Program"
                      : `Complete Order - ${currentService.price}`}
                  </Button>
                </form>

                <div className="text-center text-sm text-gray-500">
                  <p>🔒 Your information is secure and encrypted</p>
                  <p className="mt-2">By completing this order, you agree to our Terms of Service and Privacy Policy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
