"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Clock, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CostOfJobSeekingCalculator() {
  const [desiredSalary, setDesiredSalary] = useState<number>(80000)
  const [showResults, setShowResults] = useState<boolean>(true) // Show by default for engagement
  const [oneYearLoss, setOneYearLoss] = useState<number>(0)
  const [oneYearNetGain, setOneYearNetGain] = useState<number>(0)

  // Calculation results
  const [bimonthlyPaycheck, setBimonthlyPaycheck] = useState<number>(0)
  const [sixMonthLoss, setSixMonthLoss] = useState<number>(0)
  const [interRoomPlacementLoss, setInterRoomPlacementLoss] = useState<number>(0)
  const [netGain, setNetGain] = useState<number>(0)

  const calculateFinancialImpact = () => {
    const salary = desiredSalary

    if (salary <= 0) {
      setShowResults(false)
      return
    }

    // Calculate bimonthly paycheck (salary / 24)
    const paycheck = salary / 24

    // Calculate total income lost over 6 months (12 paychecks)
    const sixMonthsLost = paycheck * 12

    // Calculate income lost with InterRoom's average 6-week placement (1.5 months = 3 paychecks)
    const interRoomLost = paycheck * 3
    const netGainWithInterRoom = sixMonthsLost - interRoomLost

    // Calculate total income lost over 12 months (24 paychecks)
    const twelveMonthsLost = paycheck * 24
    const netGainWithInterRoomOneYear = twelveMonthsLost - interRoomLost

    setBimonthlyPaycheck(paycheck)
    setSixMonthLoss(sixMonthsLost)
    setInterRoomPlacementLoss(interRoomLost)
    setNetGain(netGainWithInterRoom)
    setOneYearLoss(twelveMonthsLost)
    setOneYearNetGain(netGainWithInterRoomOneYear)

    setShowResults(true)
  }

  // Recalculate when salary changes
  useEffect(() => {
    calculateFinancialImpact()
  }, [desiredSalary])

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  const getOpportunityCostExample = (amount: number) => {
    if (amount >= 80000) return "That's a Tesla Model 3"
    if (amount >= 60000) return "That's a down payment on a house"
    if (amount >= 40000) return "That's 2 years of rent in most cities"
    if (amount >= 20000) return "That's a luxury vacation around the world"
    return "That's a significant financial opportunity"
  }

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Don't Let Your Job Search Cost You</h2>
          <p className="text-lg text-slate-600 font-light">
            See how much income you could lose during an extended job search
          </p>
        </div>

        {/* Interactive Calculator */}
        <Card className="shadow-lg border border-slate-200 bg-white rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-5">
              {/* Left Column: Input Slider */}
              <div className="lg:col-span-2 p-6 md:p-8 bg-slate-50">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Calculate Your Financial Opportunity</h3>
                <p className="text-sm text-slate-600 mb-8">
                  The average job search takes 6 months. Use the slider to see how that impacts your income.
                </p>

                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label
                        htmlFor="desiredSalary"
                        className="text-sm font-medium text-slate-800 flex items-center mb-2"
                      >
                        <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                        Desired Annual Salary:
                        <span className="font-bold text-blue-600 ml-2">{formatCurrency(desiredSalary)}</span>
                      </Label>
                      <div className="px-2">
                        <Slider
                          defaultValue={[80000]}
                          value={[desiredSalary]}
                          max={300000}
                          min={40000}
                          step={5000}
                          onValueChange={(value) => setDesiredSalary(value[0])}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                          <span>$40K</span>
                          <span>$300K</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-500">
                        *Calculations are based on the industry average 6-month job search vs. InterRoom's average
                        6-week placement time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Results */}
              <div className="lg:col-span-3 p-6 md:p-8 bg-white">
                {showResults && (
                  <div className="space-y-6">
                    {/* Comparison cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Scenario without InterRoom */}
                      <div className="bg-red-50 rounded-xl p-5 shadow-md space-y-4 border-2 border-red-100">
                        <div className="flex items-center mb-1">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                            <Clock className="w-4 h-4 text-red-600" />
                          </div>
                          <h4 className="text-base font-semibold text-slate-800">Typical 6-Month Search</h4>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-red-600 font-bold uppercase tracking-wide">
                            POTENTIAL INCOME LOST
                          </p>
                          <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                            -{formatCurrency(sixMonthLoss)}
                          </div>
                          <p className="text-slate-600 text-xs mb-3">
                            Based on 12 missed paychecks of {formatCurrency(bimonthlyPaycheck)}
                          </p>
                          <div className="bg-red-100 rounded-lg p-3 border border-red-200">
                            <p className="text-xs text-red-700 font-medium">
                              💸 {getOpportunityCostExample(sixMonthLoss)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Scenario with InterRoom */}
                      <div className="bg-green-50 rounded-xl p-5 shadow-md space-y-4 border-2 border-green-100 relative overflow-hidden">
                        {/* Sparkle decoration */}
                        <div className="absolute top-2 right-2">
                          <Sparkles className="w-4 h-4 text-green-400" />
                        </div>

                        <div className="flex items-center mb-1">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <Sparkles className="w-4 h-4 text-green-600" />
                          </div>
                          <h4 className="text-base font-semibold text-slate-800">With InterRoom (6 Weeks)</h4>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-green-600 font-bold uppercase tracking-wide">
                            POTENTIAL INCOME GAINED
                          </p>
                          <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                            +{formatCurrency(netGain)}
                          </div>
                          <p className="text-slate-600 text-xs mb-3">By getting hired 4.5 months faster</p>
                          <div className="bg-green-100 rounded-lg p-3 border border-green-200">
                            <p className="text-xs text-green-700 font-medium">
                              ✨ That's money in your pocket, not lost opportunity
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="md:col-span-2 mt-6">
                      <div className="text-center mb-4">
                        <p className="text-sm text-slate-600">
                          <strong>The choice is clear:</strong> Keep losing money with a long job search, or invest in
                          getting hired faster.
                        </p>
                      </div>
                      <Link href="/quiz" className="block">
                        <Button
                          size="lg"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          Stop Losing Money - Get Started Free
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Context */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-600">
            💡 <strong>Pro tip:</strong> The longer you wait to start your job search optimization, the more money
            you're leaving on the table.
          </p>
        </div>
      </div>
    </section>
  )
}
