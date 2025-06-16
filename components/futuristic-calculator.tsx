"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DollarSign, Zap, Briefcase, TrendingDown, ArrowRight, Calculator } from "lucide-react"
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis, Tooltip } from "recharts"

export default function FuturisticCalculator() {
  const [desiredSalary, setDesiredSalary] = useState(120000)
  const [payFrequency] = useState("bimonthly") // Fixed to bimonthly
  const [searchDuration, setSearchDuration] = useState(6) // months, max 12

  const [paycheckValue, setPaycheckValue] = useState(0)
  const [lostIncome, setLostIncome] = useState(0)
  const [stressLevel, setStressLevel] = useState({
    text: "Focused & Optimistic",
    color: "text-cyan-400",
    icon: Zap,
  })

  // Only bimonthly is relevant for calculation, but keep structure for divisor
  const payFrequencies = [{ value: "bimonthly", label: "Bimonthly (24/year)", divisor: 24 }]

  useEffect(() => {
    const selectedFreq = payFrequencies.find((f) => f.value === payFrequency)
    const calculatedPaycheckValue = desiredSalary / (selectedFreq?.divisor || 24)

    // Calculate lost income (opportunity cost)
    const paychecksLost = searchDuration * 2 // Always bimonthly
    const calculatedLostIncome = calculatedPaycheckValue * paychecksLost

    setPaycheckValue(calculatedPaycheckValue)
    setLostIncome(calculatedLostIncome)

    // Update stress level based on duration (now max 12 months)
    if (searchDuration >= 10)
      setStressLevel({ text: "Extremely Discouraged", color: "text-red-400", icon: TrendingDown })
    else if (searchDuration >= 7) setStressLevel({ text: "Feeling Burnt Out", color: "text-orange-400", icon: Zap })
    else if (searchDuration >= 4) setStressLevel({ text: "High & Fatigued", color: "text-yellow-400", icon: Zap })
    else if (searchDuration >= 2) setStressLevel({ text: "Getting Concerned", color: "text-amber-400", icon: Zap })
    else setStressLevel({ text: "Focused & Optimistic", color: "text-cyan-400", icon: Zap })
  }, [desiredSalary, payFrequency, searchDuration])

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)

  const maxPaychecksForChart = 12 * 2 // Max 12 months * 2 bimonthly paychecks
  const paychecksLostForChart = searchDuration * 2
  const chartValue = (paychecksLostForChart / maxPaychecksForChart) * 100

  const chartData = [
    {
      name: "Lost Income",
      value: chartValue,
      fill: stressLevel.color.replace("text-", "").replace("-400", "-500").replace("-500", "-600"),
    },
  ]

  const StressIcon = stressLevel.icon

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-violet-900 text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Job Search Financial Impact Calculator
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visualize the true opportunity cost of a prolonged job search and its impact on your financial well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-violet-500/30 backdrop-blur-sm h-full">
              <CardContent className="p-6 space-y-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                  <Calculator className="mr-3 h-6 w-6" />
                  Input Parameters
                </h3>

                {/* Salary Input */}
                <div>
                  <Label className="text-lg font-medium mb-3 block text-gray-200">Expected Annual Salary</Label>
                  <div className="text-3xl font-bold text-violet-400 mb-3">{formatCurrency(desiredSalary)}</div>
                  <Slider
                    min={40000}
                    max={400000}
                    step={10000}
                    value={[desiredSalary]}
                    onValueChange={(val) => setDesiredSalary(val[0])}
                    className="[&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-violet-500 [&>span:first-child]:to-cyan-500 [&>span>span]:bg-white [&>span>span]:border-2 [&>span>span]:border-violet-400"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>$40K</span>
                    <span>$400K</span>
                  </div>
                </div>

                {/* Pay Frequency */}
                <div>
                  <Label className="text-lg font-medium mb-3 block text-gray-200">Pay Frequency</Label>
                  <div className="text-xl font-bold text-gray-300">Bimonthly</div> {/* Fixed to Bimonthly */}
                </div>

                {/* Search Duration */}
                <div>
                  <Label className="text-lg font-medium mb-3 block text-gray-200">
                    Job Search Duration: <span className="text-cyan-400">{searchDuration} months</span>
                  </Label>
                  <Slider
                    min={1}
                    max={12} // Changed max to 12 months
                    step={1}
                    value={[searchDuration]}
                    onValueChange={(val) => setSearchDuration(val[0])}
                    className="[&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-cyan-500 [&>span:first-child]:to-pink-500 [&>span>span]:bg-white [&>span>span]:border-2 [&>span>span]:border-cyan-400"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>1 month</span>
                    <span>12 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-violet-500/30 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-cyan-400">Financial Impact & Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="h-64 w-full flex items-center justify-center">
                  <div className="w-64 h-64 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart
                        innerRadius="80%"
                        outerRadius="100%"
                        data={chartData}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        <RadialBar
                          background
                          dataKey="value"
                          cornerRadius={10}
                          angleAxisId={0}
                          fill={stressLevel.color.replace("text-", "").replace("-400", "-500").replace("-500", "-600")}
                        />
                        <Tooltip
                          formatter={(value: number) => `${value.toFixed(1)}%`}
                          contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.9)",
                            border: "1px solid rgba(139, 92, 246, 0.3)",
                            borderRadius: "0.5rem",
                            color: "white",
                          }}
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <p className="text-sm text-gray-400">Lost Income</p>
                      <p className="text-3xl font-bold text-violet-400 tracking-tighter">
                        {formatCurrency(lostIncome)}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">({chartValue.toFixed(1)}% of max)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-violet-500/20">
                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
                    <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Your Bimonthly Paycheck</p>
                      <p className="text-xl font-bold text-green-400">{formatCurrency(paycheckValue)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg border border-red-500/20">
                    <div className="h-10 w-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Total Opportunity Cost (Lost Income)</p>
                      <p className="text-xl font-bold text-red-400">{formatCurrency(lostIncome)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-violet-500/10 to-violet-600/10 rounded-lg border border-violet-500/20">
                    <div className="h-10 w-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                      <StressIcon className={`h-5 w-5 ${stressLevel.color}`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Stress Level</p>
                      <p className={`text-lg font-bold ${stressLevel.color}`}>{stressLevel.text}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-violet-500/20">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-lg font-bold"
                  >
                    Optimize My Job Search <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
