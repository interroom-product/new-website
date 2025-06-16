"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Zap, Briefcase, TrendingDown, ArrowRight, Plus, Trash2, Calculator } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

interface Expense {
  id: string
  type: string
  cost: number
  frequency: string
}

export default function FuturisticCalculator() {
  const [desiredSalary, setDesiredSalary] = useState(120000)
  const [payFrequency, setPayFrequency] = useState("bimonthly")
  const [searchDuration, setSearchDuration] = useState(6) // months
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", type: "Resume Services", cost: 500, frequency: "one-time" },
    { id: "2", type: "Job Boards", cost: 50, frequency: "monthly" },
  ])

  const [paycheckValue, setPaycheckValue] = useState(0)
  const [totalJobSearchCost, setTotalJobSearchCost] = useState(0)
  const [lostIncome, setLostIncome] = useState(0)
  const [financialImpactPercentage, setFinancialImpactPercentage] = useState(0)
  const [stressLevel, setStressLevel] = useState({
    text: "Focused & Optimistic",
    color: "text-cyan-400",
    icon: Zap,
  })

  const expenseTypes = [
    "Resume Services",
    "Job Boards",
    "Interview Coaching",
    "Networking Events",
    "Travel",
    "Professional Clothing",
    "Certification Courses",
    "Other",
  ]

  const frequencies = [
    { value: "one-time", label: "One-time" },
    { value: "monthly", label: "Monthly" },
    { value: "bimonthly", label: "Bimonthly" },
  ]

  const payFrequencies = [
    { value: "bimonthly", label: "Bimonthly (24/year)", divisor: 24 },
    { value: "monthly", label: "Monthly (12/year)", divisor: 12 },
    { value: "weekly", label: "Weekly (52/year)", divisor: 52 },
  ]

  useEffect(() => {
    const selectedFreq = payFrequencies.find((f) => f.value === payFrequency)
    const calculatedPaycheckValue = desiredSalary / (selectedFreq?.divisor || 24)

    // Calculate total job search costs
    let totalCost = 0
    expenses.forEach((expense) => {
      if (expense.frequency === "one-time") {
        totalCost += expense.cost
      } else if (expense.frequency === "monthly") {
        totalCost += expense.cost * searchDuration
      } else if (expense.frequency === "bimonthly") {
        totalCost += expense.cost * searchDuration * 2
      }
    })

    // Calculate lost income (opportunity cost)
    const paychecksLost =
      payFrequency === "bimonthly"
        ? searchDuration * 2
        : payFrequency === "monthly"
          ? searchDuration
          : searchDuration * 4.33 // approximate weeks per month
    const calculatedLostIncome = calculatedPaycheckValue * paychecksLost

    const impactPercentage = calculatedPaycheckValue > 0 ? (totalCost / calculatedPaycheckValue) * 100 : 0

    setPaycheckValue(calculatedPaycheckValue)
    setTotalJobSearchCost(totalCost)
    setLostIncome(calculatedLostIncome)
    setFinancialImpactPercentage(impactPercentage)

    // Update stress level based on duration
    if (searchDuration >= 12)
      setStressLevel({ text: "Extremely Discouraged", color: "text-red-400", icon: TrendingDown })
    else if (searchDuration >= 9) setStressLevel({ text: "Feeling Burnt Out", color: "text-orange-400", icon: Zap })
    else if (searchDuration >= 6) setStressLevel({ text: "High & Fatigued", color: "text-yellow-400", icon: Zap })
    else if (searchDuration >= 3) setStressLevel({ text: "Getting Concerned", color: "text-amber-400", icon: Zap })
    else setStressLevel({ text: "Focused & Optimistic", color: "text-cyan-400", icon: Zap })
  }, [desiredSalary, payFrequency, searchDuration, expenses])

  const addExpense = () => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      type: "Other",
      cost: 0,
      frequency: "one-time",
    }
    setExpenses([...expenses, newExpense])
  }

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const updateExpense = (id: string, field: keyof Expense, value: string | number) => {
    setExpenses(expenses.map((expense) => (expense.id === id ? { ...expense, [field]: value } : expense)))
  }

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)

  const pieData = [
    { name: "Job Search Costs", value: totalJobSearchCost, fill: "#ef4444" },
    { name: "Available Income", value: Math.max(0, paycheckValue - totalJobSearchCost), fill: "#22c55e" },
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
            Visualize the true cost of your job search and understand its impact on your financial well-being
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-violet-500/30 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                  <Calculator className="mr-3 h-6 w-6" />
                  Input Parameters
                </h3>

                {/* Salary Input */}
                <div>
                  <Label className="text-lg font-medium mb-3 block text-gray-200">Expected Annual Salary</Label>
                  <div className="text-2xl font-bold text-violet-400 mb-3">{formatCurrency(desiredSalary)}</div>
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
                  <Select value={payFrequency} onValueChange={setPayFrequency}>
                    <SelectTrigger className="bg-gray-700 border-violet-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-violet-500/30">
                      {payFrequencies.map((freq) => (
                        <SelectItem key={freq.value} value={freq.value} className="text-white hover:bg-violet-600">
                          {freq.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Duration */}
                <div>
                  <Label className="text-lg font-medium mb-3 block text-gray-200">
                    Job Search Duration: <span className="text-cyan-400">{searchDuration} months</span>
                  </Label>
                  <Slider
                    min={1}
                    max={18}
                    step={1}
                    value={[searchDuration]}
                    onValueChange={(val) => setSearchDuration(val[0])}
                    className="[&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-cyan-500 [&>span:first-child]:to-pink-500 [&>span>span]:bg-white [&>span>span]:border-2 [&>span>span]:border-cyan-400"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>1 month</span>
                    <span>18 months</span>
                  </div>
                </div>

                {/* Expenses Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <Label className="text-lg font-medium text-gray-200">Job Search Expenses</Label>
                    <Button onClick={addExpense} size="sm" className="bg-violet-600 hover:bg-violet-700">
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>

                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {expenses.map((expense) => (
                      <div key={expense.id} className="bg-gray-700/50 p-4 rounded-lg border border-violet-500/20">
                        <div className="grid grid-cols-1 gap-3">
                          <Select
                            value={expense.type}
                            onValueChange={(value) => updateExpense(expense.id, "type", value)}
                          >
                            <SelectTrigger className="bg-gray-600 border-violet-500/30 text-white text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-violet-500/30">
                              {expenseTypes.map((type) => (
                                <SelectItem key={type} value={type} className="text-white hover:bg-violet-600">
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <div className="flex gap-2">
                            <Input
                              type="number"
                              placeholder="Cost"
                              value={expense.cost || ""}
                              onChange={(e) =>
                                updateExpense(expense.id, "cost", Number.parseFloat(e.target.value) || 0)
                              }
                              className="bg-gray-600 border-violet-500/30 text-white text-sm"
                            />
                            <Select
                              value={expense.frequency}
                              onValueChange={(value) => updateExpense(expense.id, "frequency", value)}
                            >
                              <SelectTrigger className="bg-gray-600 border-violet-500/30 text-white text-sm w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-violet-500/30">
                                {frequencies.map((freq) => (
                                  <SelectItem
                                    key={freq.value}
                                    value={freq.value}
                                    className="text-white hover:bg-violet-600"
                                  >
                                    {freq.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Button
                              onClick={() => removeExpense(expense.id)}
                              size="sm"
                              variant="destructive"
                              className="px-2"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visualization Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-violet-500/30 backdrop-blur-sm h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Financial Impact</h3>

                <div className="w-64 h-64 relative mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                        contentStyle={{
                          backgroundColor: "rgba(31, 41, 55, 0.9)",
                          border: "1px solid rgba(139, 92, 246, 0.3)",
                          borderRadius: "0.5rem",
                          color: "white",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-400">Impact</p>
                    <p className="text-2xl font-bold text-violet-400">{financialImpactPercentage.toFixed(1)}%</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 mb-2">Total Job Search Cost</p>
                  <p className="text-3xl font-bold text-red-400 mb-4">{formatCurrency(totalJobSearchCost)}</p>
                  <p className="text-sm text-gray-400">of your {payFrequency} paycheck</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-violet-500/30 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Financial Breakdown</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
                    <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">
                        Your {payFrequency.charAt(0).toUpperCase() + payFrequency.slice(1)} Paycheck
                      </p>
                      <p className="text-2xl font-bold text-green-400">{formatCurrency(paycheckValue)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg border border-red-500/20">
                    <div className="h-12 w-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Opportunity Cost (Lost Income)</p>
                      <p className="text-2xl font-bold text-red-400">{formatCurrency(lostIncome)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-violet-500/10 to-violet-600/10 rounded-lg border border-violet-500/20">
                    <div className="h-12 w-12 rounded-lg bg-violet-500/20 flex items-center justify-center">
                      <StressIcon className={`h-6 w-6 ${stressLevel.color}`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Stress Level</p>
                      <p className={`text-xl font-bold ${stressLevel.color}`}>{stressLevel.text}</p>
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
