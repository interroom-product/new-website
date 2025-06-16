"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DollarSign, Clock, Zap, TrendingDown } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function Calculator() {
  const [desiredSalary, setDesiredSalary] = useState(100000) // Default to $100,000
  const [searchDuration, setSearchDuration] = useState(6) // Default to 6 months

  const [monthlySalary, setMonthlySalary] = useState(0)
  const [lostIncomeUser, setLostIncomeUser] = useState(0)
  const [lostIncomeInterRoom, setLostIncomeInterRoom] = useState(0)
  const [extraIncomeEarned, setExtraIncomeEarned] = useState(0)
  const [timeWasted, setTimeWasted] = useState(0)
  const [stressLevel, setStressLevel] = useState({
    text: "Focused & Optimistic",
    color: "text-green-600",
    icon: Zap,
  })

  useEffect(() => {
    const calculatedMonthlySalary = desiredSalary / 12
    const calculatedLostIncomeUser = calculatedMonthlySalary * searchDuration
    const calculatedLostIncomeInterRoom = calculatedMonthlySalary * 1.5 // Fixed 1.5 months for InterRoom
    const calculatedExtraIncomeEarned = calculatedLostIncomeUser - calculatedLostIncomeInterRoom
    const calculatedTimeWasted = searchDuration * 44 // 44 hours per month

    setMonthlySalary(calculatedMonthlySalary)
    setLostIncomeUser(calculatedLostIncomeUser)
    setLostIncomeInterRoom(calculatedLostIncomeInterRoom)
    setExtraIncomeEarned(calculatedExtraIncomeEarned)
    setTimeWasted(calculatedTimeWasted)
    setStressLevel(calculateStressLevel(searchDuration))
  }, [desiredSalary, searchDuration])

  const calculateStressLevel = (duration: number) => {
    if (duration >= 13) return { text: "Extremely Discouraged", color: "text-red-600", icon: TrendingDown }
    if (duration >= 10) return { text: "Feeling Burnt Out", color: "text-orange-600", icon: Zap }
    if (duration >= 7) return { text: "High & Fatigued", color: "text-yellow-600", icon: Zap }
    if (duration >= 4) return { text: "Getting Concerned", color: "text-amber-600", icon: Zap }
    return { text: "Focused & Optimistic", color: "text-green-600", icon: Zap }
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)

  const chartData = [
    { name: "Your Search", "Lost Income": lostIncomeUser },
    { name: "With InterRoom", "Lost Income": lostIncomeInterRoom },
  ]

  const StressIcon = stressLevel.icon

  // Define gradient colors based on stress level
  const stressGradientColors = {
    "text-green-600": { start: "#4ade80", end: "#22c55e" }, // green-400 to green-600
    "text-amber-600": { start: "#fbbf24", end: "#f59e0b" }, // amber-400 to amber-600
    "text-yellow-600": { start: "#facc15", end: "#eab308" }, // yellow-400 to yellow-600
    "text-orange-600": { start: "#fb923c", end: "#f97316" }, // orange-400 to orange-600
    "text-red-600": { start: "#f87171", end: "#ef4444" }, // red-400 to red-600
  }
  const currentUserGradient = stressGradientColors[stressLevel.color as keyof typeof stressGradientColors] || {
    start: "#a78bfa",
    end: "#8b5cf6",
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl md:text-4xl font-medium">The True Cost of Your Job Search</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 md:p-10">
            {/* Left Column: Inputs */}
            <div className="space-y-8">
              <div>
                <Label htmlFor="salary-slider" className="text-lg font-medium mb-4 block">
                  Desired Annual Salary: {formatCurrency(desiredSalary)}
                </Label>
                <Slider
                  id="salary-slider"
                  min={40000}
                  max={300000}
                  step={10000}
                  value={[desiredSalary]}
                  onValueChange={(val) => setDesiredSalary(val[0])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>$40K</span>
                  <span>$300K</span>
                </div>
              </div>

              <div>
                <Label htmlFor="duration-slider" className="text-lg font-medium mb-4 block">
                  Job Search Duration: {searchDuration} months
                </Label>
                <Slider
                  id="duration-slider"
                  min={1}
                  max={18}
                  step={1}
                  value={[searchDuration]}
                  onValueChange={(val) => setSearchDuration(val[0])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>1 month</span>
                  <span>18 months</span>
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="bg-violet-50 p-6 rounded-xl space-y-8">
              <h3 className="text-2xl font-medium text-center mb-6">Your Potential Savings</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-medium text-slate-700">Extra Income Earned</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(extraIncomeEarned)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-amber-600" />
                    </div>
                    <span className="text-lg font-medium text-slate-700">Time Spent Applying</span>
                  </div>
                  <span className="text-2xl font-bold text-amber-600">{Math.round(timeWasted)} hours</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <StressIcon className={`h-5 w-5 ${stressLevel.color}`} />
                    </div>
                    <span className="text-lg font-medium text-slate-700">Stress Level</span>
                  </div>
                  <span className={`text-2xl font-bold ${stressLevel.color}`}>{stressLevel.text}</span>
                </div>
              </div>

              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
                    <defs>
                      <linearGradient id="gradientUser" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={currentUserGradient.start} />
                        <stop offset="100%" stopColor={currentUserGradient.end} />
                      </linearGradient>
                      <linearGradient id="gradientInterRoom" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a78bfa" /> {/* violet-400 */}
                        <stop offset="100%" stopColor="#7c3aed" /> {/* violet-600 */}
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      cursor={{ fill: "rgba(0,0,0,0.05)" }}
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid #e2e8f0",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                      labelStyle={{ color: "#475569", fontWeight: "bold" }}
                    />
                    <Bar
                      dataKey="Lost Income"
                      fill={(data) => (data.name === "Your Search" ? "url(#gradientUser)" : "url(#gradientInterRoom)")}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <Button size="lg" className="w-full bg-violet-600 hover:bg-violet-700">
                Start My Search - See If I Qualify
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
