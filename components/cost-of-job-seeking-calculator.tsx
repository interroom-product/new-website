"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, DollarSign, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CostOfJobSeekingCalculator() {
  const [desiredSalary, setDesiredSalary] = useState<string>("80000")
  const [showResults, setShowResults] = useState<boolean>(false)
  const [animateProgress, setAnimateProgress] = useState<boolean>(false)

  // Calculation results
  const [bimonthlyPaycheck, setBimonthlyPaycheck] = useState<number>(0)
  const [sixMonthLoss, setSixMonthLoss] = useState<number>(0)
  const [twelveMonthLoss, setTwelveMonthLoss] = useState<number>(0)

  const calculateFinancialImpact = () => {
    const salary = Number.parseFloat(desiredSalary) || 0

    if (salary <= 0) {
      setShowResults(false)
      return
    }

    // Calculate bimonthly paycheck (salary / 24)
    const paycheck = salary / 24

    // Calculate total income lost over 6 months (12 paychecks)
    const sixMonths = paycheck * 12

    // Calculate total income lost over 12 months (24 paychecks)
    const twelveMonths = paycheck * 24

    setBimonthlyPaycheck(paycheck)
    setSixMonthLoss(sixMonths)
    setTwelveMonthLoss(twelveMonths)

    setShowResults(true)

    // Trigger progress animation
    setTimeout(() => setAnimateProgress(true), 100)
  }

  // Recalculate when inputs change
  useEffect(() => {
    setAnimateProgress(false)
    if (Number.parseFloat(desiredSalary) > 0) {
      calculateFinancialImpact()
    } else {
      setShowResults(false)
    }
  }, [desiredSalary])

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-ir-pastel/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The True Cost of Your Job Search</h2>
          <p className="text-xl text-gray-600 font-light">
            See how much income you could lose during an extended job search
          </p>
        </div>

        {/* Simplified Glass Container */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Left Column: Streamlined Input */}
              <div className="p-8 md:p-12 bg-gray-50/70 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Calculate Your Potential Loss</h3>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                  <div className="space-y-8">
                    <div>
                      <Label
                        htmlFor="desiredSalary"
                        className="text-sm font-medium text-gray-700 flex items-center mb-3"
                      >
                        <Briefcase className="w-4 h-4 mr-2 text-ir-primary" />
                        Your Desired Annual Salary
                      </Label>
                      <Input
                        id="desiredSalary"
                        type="number"
                        value={desiredSalary}
                        onChange={(e) => setDesiredSalary(e.target.value)}
                        placeholder="e.g., 80000"
                        className="rounded-xl border-gray-200 focus:border-ir-primary focus:ring-ir-primary/20 text-lg py-3"
                      />
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-gray-500 mb-4">
                        The average job search takes 6-12 months. Every day without income adds up quickly.
                      </p>

                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>6 months: Average job search duration</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-700 rounded-full mr-2"></div>
                        <span>12 months: Extended job search scenario</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Simplified Results */}
              <div className="p-8 md:p-12 bg-white">
                {showResults ? (
                  <div className="space-y-10">
                    {/* Bimonthly Paycheck */}
                    <div className="bg-gray-50/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-ir-primary/10 flex items-center justify-center mr-3">
                          <DollarSign className="w-5 h-5 text-ir-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Your Bimonthly Paycheck</h4>
                      </div>

                      <div className="text-3xl md:text-4xl font-bold text-ir-primary mb-2">
                        {formatCurrency(bimonthlyPaycheck)}
                      </div>
                      <p className="text-gray-600 text-sm">This is what you'd earn every two weeks</p>
                    </div>

                    {/* Potential Loss Visualization */}
                    <div className="space-y-6">
                      {/* 6 Month Loss */}
                      <div className="bg-gray-50/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                              <Clock className="w-4 h-4 text-red-500" />
                            </div>
                            <span className="text-gray-700 font-medium">6 Month Job Search</span>
                          </div>
                          <span className="font-bold text-red-500 text-xl">-{formatCurrency(sixMonthLoss)}</span>
                        </div>

                        <div className="h-2 relative bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: animateProgress ? "50%" : "0%" }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <p className="text-gray-500 text-xs mt-2">12 missed paychecks</p>
                      </div>

                      {/* 12 Month Loss */}
                      <div className="bg-gray-50/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3">
                              <Clock className="w-4 h-4 text-red-700" />
                            </div>
                            <span className="text-gray-700 font-medium">12 Month Job Search</span>
                          </div>
                          <span className="font-bold text-red-700 text-xl">-{formatCurrency(twelveMonthLoss)}</span>
                        </div>

                        <div className="h-2 relative bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-red-700 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: animateProgress ? "100%" : "0%" }}
                            transition={{ duration: 1.2 }}
                          />
                        </div>
                        <p className="text-gray-500 text-xs mt-2">24 missed paychecks</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/quiz" className="block">
                      <Button
                        size="lg"
                        className="w-full bg-ir-primary hover:bg-ir-primary/90 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Cut Your Job Search Time in Half
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full bg-gray-50/70 backdrop-blur-sm rounded-2xl p-12 text-center min-h-[600px]">
                    <div className="w-16 h-16 bg-ir-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Briefcase className="w-8 h-8 text-ir-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">See Your Potential Income Loss</h3>
                    <p className="text-gray-600">
                      Enter your desired salary to calculate how much income you could lose during a job search.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Trust-Building Footnote */}
            <div className="px-8 md:px-12 py-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 leading-relaxed">
                *Calculations are estimates based on a bimonthly pay schedule. The average job search takes 5-6 months
                according to the U.S. Bureau of Labor Statistics, but can extend to 12+ months depending on industry and
                seniority level.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
