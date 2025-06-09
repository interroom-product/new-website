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

    setBimonthlyPaycheck(paycheck)
    setSixMonthLoss(sixMonthsLost)
    setInterRoomPlacementLoss(interRoomLost)
    setNetGain(netGainWithInterRoom)

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
    <section className="py-24 px-4 bg-ir-pastel">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ir-off-black mb-3">Don't Let Your Job Search Cost You</h2>
          <p className="text-lg text-ir-charcoal font-light">
            See how much income you could lose during an extended job search
          </p>
        </div>

        {/* Interactive Calculator */}
        <Card className="shadow-soft border border-ir-periwinkle bg-ir-off-white rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-5">
              {/* Left Column: Input Slider */}
              <div className="lg:col-span-2 p-6 md:p-8 bg-ir-periwinkle/30">
                <h3 className="text-xl font-semibold text-ir-off-black mb-4">Calculate Your Financial Opportunity</h3>
                <p className="text-sm text-ir-charcoal mb-8">
                  The average job search takes 6 months. Use the slider to see how that impacts your income.
                </p>

                <div className="bg-ir-off-white rounded-xl p-6 shadow-soft border border-ir-periwinkle">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label
                        htmlFor="desiredSalary"
                        className="text-sm font-medium text-ir-off-black flex items-center mb-2"
                      >
                        <Briefcase className="w-4 h-4 mr-2 text-ir-primary" />
                        Desired Annual Salary:
                        <span className="font-bold text-ir-primary ml-2">{formatCurrency(desiredSalary)}</span>
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
                        <div className="flex justify-between text-xs text-ir-charcoal mt-2">
                          <span>$40K</span>
                          <span>$300K</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-ir-periwinkle">
                      <p className="text-xs text-ir-charcoal">
                        *Calculations are based on the industry average 6-month job search vs. InterRoom's average
                        6-week placement time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Results */}
              <div className="lg:col-span-3 p-6 md:p-8 bg-ir-off-white">
                {showResults && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Scenario without InterRoom */}
                    <div className="bg-ir-warning/10 rounded-xl p-5 shadow-soft space-y-4 border-2 border-ir-warning/20">
                      <div className="flex items-center mb-1">
                        <div className="w-8 h-8 rounded-full bg-ir-warning/20 flex items-center justify-center mr-3">
                          <Clock className="w-4 h-4 text-ir-warning" />
                        </div>
                        <h4 className="text-base font-semibold text-ir-off-black">Typical 6-Month Search</h4>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-ir-warning font-bold uppercase tracking-wide">
                          POTENTIAL INCOME LOST
                        </p>
                        <div className="text-3xl md:text-4xl font-bold text-ir-warning mb-2">
                          -{formatCurrency(sixMonthLoss)}
                        </div>
                        <p className="text-ir-charcoal text-xs mb-3">
                          Based on 12 missed paychecks of {formatCurrency(bimonthlyPaycheck)}
                        </p>
                        <div className="bg-ir-warning/10 rounded-lg p-3 border border-ir-warning/20">
                          <p className="text-xs text-ir-warning font-medium">
                            💸 {getOpportunityCostExample(sixMonthLoss)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Scenario with InterRoom */}
                    <div className="bg-ir-success/10 rounded-xl p-5 shadow-soft space-y-4 border-2 border-ir-success/20 relative overflow-hidden">
                      {/* Sparkle decoration */}
                      <div className="absolute top-2 right-2">
                        <Sparkles className="w-4 h-4 text-ir-success/30" />
                      </div>

                      <div className="flex items-center mb-1">
                        <div className="w-8 h-8 rounded-full bg-ir-success/20 flex items-center justify-center mr-3">
                          <Sparkles className="w-4 h-4 text-ir-success" />
                        </div>
                        <h4 className="text-base font-semibold text-ir-off-black">With InterRoom (6 Weeks)</h4>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-ir-success font-bold uppercase tracking-wide">
                          POTENTIAL INCOME GAINED
                        </p>
                        <div className="text-3xl md:text-4xl font-bold text-ir-success mb-2">
                          +{formatCurrency(netGain)}
                        </div>
                        <p className="text-ir-charcoal text-xs mb-3">By getting hired 4.5 months faster</p>
                        <div className="bg-ir-success/10 rounded-lg p-3 border border-ir-success/20">
                          <p className="text-xs text-ir-success font-medium">
                            ✨ That's money in your pocket, not lost opportunity
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="md:col-span-2 mt-6">
                      <div className="text-center mb-4">
                        <p className="text-sm text-ir-charcoal">
                          <strong>The choice is clear:</strong> Keep losing money with a long job search, or invest in
                          getting hired faster.
                        </p>
                      </div>
                      <Link href="/quiz" className="block">
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-ir-primary to-ir-medium hover:from-ir-primary/90 hover:to-ir-medium/90 text-white text-lg py-4 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
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
          <p className="text-sm text-ir-charcoal">
            💡 <strong>Pro tip:</strong> The longer you wait to start your job search optimization, the more money
            you're leaving on the table.
          </p>
        </div>
      </div>
    </section>
  )
}
