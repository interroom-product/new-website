"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"

export default function CostOfJobSeekingCalculator() {
  const [desiredSalary, setDesiredSalary] = useState<number>(80000)
  const [showResults, setShowResults] = useState<boolean>(true) // Show by default for engagement

  // Calculation results
  const [bimonthlyPaycheck, setBimonthlyPaycheck] = useState<number>(0)
  const [interRoomLoss, setInterRoomLoss] = useState<number>(0)
  const [sixMonthLoss, setSixMonthLoss] = useState<number>(0)
  const [twelveMonthLoss, setTwelveMonthLoss] = useState<number>(0)
  const [sixMonthSavings, setSixMonthSavings] = useState<number>(0)
  const [twelveMonthSavings, setTwelveMonthSavings] = useState<number>(0)
  const [chartData, setChartData] = useState<any[]>([])

  const calculateFinancialImpact = () => {
    const salary = desiredSalary

    if (salary <= 0) {
      setShowResults(false)
      return
    }

    // Calculate bimonthly paycheck (salary / 24)
    const paycheck = salary / 24

    // Calculate income lost with InterRoom's 8-week placement (2 months = 4 paychecks)
    const irLoss = paycheck * 4

    // Calculate total income lost over 6 months (12 paychecks)
    const sixMonthsLoss = paycheck * 12

    // Calculate total income lost over 12 months (24 paychecks)
    const twelveMonthsLoss = paycheck * 24

    // Calculate savings with InterRoom compared to 6 and 12 months
    const sixMonthSavings = sixMonthsLoss - irLoss
    const twelveMonthSavings = twelveMonthsLoss - irLoss

    setBimonthlyPaycheck(paycheck)
    setInterRoomLoss(irLoss)
    setSixMonthLoss(sixMonthsLoss)
    setTwelveMonthLoss(twelveMonthsLoss)
    setSixMonthSavings(sixMonthSavings)
    setTwelveMonthSavings(twelveMonthSavings)

    const chartData = [
      {
        name: "InterRoom\n(8 weeks)",
        value: -irLoss,
        color: "#3B82F6", // Blue for InterRoom
        displayValue: formatCurrency(irLoss),
      },
      {
        name: "6-Month\nSearch",
        value: -sixMonthsLoss,
        color: "#F59E0B", // Amber for 6 months
        displayValue: formatCurrency(sixMonthsLoss),
      },
      {
        name: "12-Month\nSearch",
        value: -twelveMonthsLoss,
        color: "#EF4444", // Red for 12 months
        displayValue: formatCurrency(twelveMonthsLoss),
      },
    ]

    setChartData(chartData)
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
    if (amount >= 80000) return "a Tesla Model 3"
    if (amount >= 60000) return "a down payment on a house"
    if (amount >= 40000) return "2 years of rent in most cities"
    if (amount >= 20000) return "a luxury vacation around the world"
    return "a significant financial opportunity"
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
          <p className="font-semibold text-slate-800">{label.replace("\n", " ")}</p>
          <p className="text-lg font-bold text-red-600">-{formatCurrency(Math.abs(payload[0].value))}</p>
          <p className="text-sm text-slate-600">Income Lost</p>
        </div>
      )
    }
    return null
  }

  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, value, index } = props
    const radius = 10

    return (
      <g>
        <text
          x={x + width / 2}
          y={y - 20}
          fill="#374151"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs font-medium"
        >
          {chartData[index].displayValue}
        </text>
      </g>
    )
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
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Calculate Your Financial Impact</h3>
                <p className="text-sm text-slate-600 mb-8">
                  Compare InterRoom's 8-week placement with typical 6 & 12-month job searches.
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
                        *Based on industry average search times vs. InterRoom's 8-week placement
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Results */}
              <div className="lg:col-span-3 p-6 md:p-8 bg-white">
                {showResults && (
                  <div className="space-y-8">
                    {/* Simple Bar Chart */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                      <h4 className="text-xl font-bold text-slate-800 mb-2 text-center">Potential Income Lost</h4>
                      <p className="text-sm text-slate-600 mb-6 text-center">
                        Based on {formatCurrency(desiredSalary)} annual salary
                      </p>

                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} margin={{ top: 30, right: 30, left: 20, bottom: 20 }} barSize={80}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis
                              dataKey="name"
                              tick={{ fill: "#64748B", fontSize: 12 }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis
                              tickFormatter={(value) => formatCurrency(Math.abs(value))}
                              tick={{ fill: "#64748B", fontSize: 12 }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                              <LabelList dataKey="displayValue" position="top" content={renderCustomizedLabel} />
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Key Stats Section - Simplified */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center mb-4">
                          <Clock className="w-6 h-6 text-blue-600 mr-3" />
                          <h5 className="text-lg font-semibold text-slate-800">With InterRoom</h5>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Time to placement:</span>
                            <span className="font-semibold text-slate-800">8 weeks</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Income lost:</span>
                            <span className="font-semibold text-red-600">-{formatCurrency(interRoomLoss)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <div className="flex items-center mb-4">
                          <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                          <h5 className="text-lg font-semibold text-slate-800">Your Savings</h5>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">vs. 6-month search:</span>
                            <span className="font-semibold text-green-600">+{formatCurrency(sixMonthSavings)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">vs. 12-month search:</span>
                            <span className="font-semibold text-green-600">+{formatCurrency(twelveMonthSavings)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Emotional Hook - Simplified */}
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                      <p className="text-center text-slate-700 italic">
                        "The cost of waiting isn't just lost salary — it's lost opportunities, savings, investments, and
                        peace of mind."
                      </p>
                    </div>

                    {/* CTA */}
                    <Link href="/quiz" className="block">
                      <Button
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Stop Losing Money - Get Started Free
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
