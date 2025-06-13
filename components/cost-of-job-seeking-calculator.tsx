"use client"

import { useState, useEffect, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ArrowRight, Briefcase, Home, ShoppingCart, Shield, Clock, DollarSign, TrendingUp, Percent } from "lucide-react"
import Link from "next/link"

// Enhanced constants with more precise data
const AVERAGE_JOB_SEARCH_DURATION_MONTHS = 5.5
const DEFAULT_HEALTH_INSURANCE_PREMIUM = 791
const INTEROOM_JOB_SEARCH_REDUCTION_FACTOR = 0.4
const INTEROOM_SALARY_INCREASE_PERCENTAGE = 0.11
const INTEROOM_FEE_PERCENTAGE = 0.055

interface CalculationResults {
  totalFinancialImpactWithoutInteroom: number
  totalExpensesWithoutInteroom: number
  lostIncomeWithoutInteroom: number
  totalFinancialImpactWithInteroom: number
  totalExpensesWithInteroom: number
  lostIncomeWithInteroom: number
  salaryIncreaseAmount: number
  interoomFeeAmount: number
  netBenefitWithInteroom: number
  newJobSearchDurationMonths: number
  negotiatedSalaryWithInteroom: number
}

export default function CostOfJobSeekingCalculator() {
  const [desiredSalary, setDesiredSalary] = useState<string>("80000")
  const [monthlyRent, setMonthlyRent] = useState<string>("2500")
  const [otherExpenses, setOtherExpenses] = useState<string>("1000")
  const [healthInsurance, setHealthInsurance] = useState<string>(DEFAULT_HEALTH_INSURANCE_PREMIUM.toString())
  const [showResults, setShowResults] = useState<boolean>(false)
  const [animateChart, setAnimateChart] = useState<boolean>(false)

  const [results, setResults] = useState<CalculationResults | null>(null)

  const calculateFinancialImpact = () => {
    const salary = Number.parseFloat(desiredSalary) || 0
    const rent = Number.parseFloat(monthlyRent) || 0
    const other = Number.parseFloat(otherExpenses) || 0
    const insurance = Number.parseFloat(healthInsurance) || 0

    if (salary <= 0) {
      setShowResults(false)
      setResults(null)
      return
    }

    // --- Without Interoom ---
    const totalMonthlyExpensesUser = rent + other + insurance
    const monthlySalaryUser = salary / 12

    const totalExpenses_WithoutInteroom = totalMonthlyExpensesUser * AVERAGE_JOB_SEARCH_DURATION_MONTHS
    const lostIncome_WithoutInteroom = monthlySalaryUser * AVERAGE_JOB_SEARCH_DURATION_MONTHS
    const totalFinancialImpact_WithoutInteroom = totalExpenses_WithoutInteroom + lostIncome_WithoutInteroom

    // --- With Interoom ---
    const newJobSearchDurationMonths_WithInteroom =
      AVERAGE_JOB_SEARCH_DURATION_MONTHS * (1 - INTEROOM_JOB_SEARCH_REDUCTION_FACTOR)
    const totalExpenses_WithInteroom = totalMonthlyExpensesUser * newJobSearchDurationMonths_WithInteroom
    const lostIncome_WithInteroom = monthlySalaryUser * newJobSearchDurationMonths_WithInteroom

    const negotiatedSalary_WithInteroom = salary * (1 + INTEROOM_SALARY_INCREASE_PERCENTAGE)
    const salaryIncreaseAmount_WithInteroom = negotiatedSalary_WithInteroom - salary
    const interoomFeeAmount_WithInteroom = negotiatedSalary_WithInteroom * INTEROOM_FEE_PERCENTAGE

    const totalFinancialImpact_WithInteroom =
      totalExpenses_WithInteroom + lostIncome_WithInteroom + interoomFeeAmount_WithInteroom

    const netBenefit_WithInteroom =
      totalFinancialImpact_WithoutInteroom - totalFinancialImpact_WithInteroom + salaryIncreaseAmount_WithInteroom

    setResults({
      totalFinancialImpactWithoutInteroom: totalFinancialImpact_WithoutInteroom,
      totalExpensesWithoutInteroom: totalExpenses_WithoutInteroom,
      lostIncomeWithoutInteroom: lostIncome_WithoutInteroom,
      totalFinancialImpactWithInteroom: totalFinancialImpact_WithInteroom,
      totalExpensesWithInteroom: totalExpenses_WithInteroom,
      lostIncomeWithInteroom: lostIncome_WithInteroom,
      salaryIncreaseAmount: salaryIncreaseAmount_WithInteroom,
      interoomFeeAmount: interoomFeeAmount_WithInteroom,
      netBenefitWithInteroom: netBenefit_WithInteroom,
      newJobSearchDurationMonths: newJobSearchDurationMonths_WithInteroom,
      negotiatedSalaryWithInteroom: negotiatedSalary_WithInteroom,
    })
    setShowResults(true)

    // Trigger chart animation
    setTimeout(() => setAnimateChart(true), 100)
  }

  // Recalculate when inputs change
  useEffect(() => {
    setAnimateChart(false)
    if (Number.parseFloat(desiredSalary) > 0) {
      calculateFinancialImpact()
    } else {
      setShowResults(false)
      setResults(null)
    }
  }, [desiredSalary, monthlyRent, otherExpenses, healthInsurance])

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  const chartData = useMemo(() => {
    if (!results) return []
    return [
      {
        name: "Financial Impact",
        "Without Interoom": -results.totalFinancialImpactWithoutInteroom,
        "With Interoom": -results.totalFinancialImpactWithInteroom,
      },
    ]
  }, [results])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-ir-pastel/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The True Cost of Your Job Search</h2>
          <p className="text-xl text-gray-600 font-light">
            See how Interoom can impact your bottom line. Enter your details below.
          </p>
        </div>

        {/* Unified Glass Container */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Left Column: Streamlined Inputs */}
              <div className="p-8 md:p-12 bg-gray-50/70 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Your Financial Details</h3>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                  <div className="space-y-8">
                    <div>
                      <Label
                        htmlFor="desiredSalary"
                        className="text-sm font-medium text-gray-700 flex items-center mb-3"
                      >
                        <Briefcase className="w-4 h-4 mr-2 text-ir-primary" />
                        Desired Annual Salary
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

                    <div>
                      <Label htmlFor="monthlyRent" className="text-sm font-medium text-gray-700 flex items-center mb-3">
                        <Home className="w-4 h-4 mr-2 text-ir-primary" />
                        Monthly Rent/Mortgage
                      </Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={monthlyRent}
                        onChange={(e) => setMonthlyRent(e.target.value)}
                        placeholder="e.g., 2500"
                        className="rounded-xl border-gray-200 focus:border-ir-primary focus:ring-ir-primary/20 text-lg py-3"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="otherExpenses"
                        className="text-sm font-medium text-gray-700 flex items-center mb-3"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2 text-ir-primary" />
                        Other Monthly Living Expenses
                      </Label>
                      <Input
                        id="otherExpenses"
                        type="number"
                        value={otherExpenses}
                        onChange={(e) => setOtherExpenses(e.target.value)}
                        placeholder="e.g., 1000"
                        className="rounded-xl border-gray-200 focus:border-ir-primary focus:ring-ir-primary/20 text-lg py-3"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="healthInsurance"
                        className="text-sm font-medium text-gray-700 flex items-center mb-3"
                      >
                        <Shield className="w-4 h-4 mr-2 text-ir-primary" />
                        Monthly Health Insurance Premium
                      </Label>
                      <Input
                        id="healthInsurance"
                        type="number"
                        value={healthInsurance}
                        onChange={(e) => setHealthInsurance(e.target.value)}
                        placeholder={`e.g., $${DEFAULT_HEALTH_INSURANCE_PREMIUM} (Avg. COBRA cost)`}
                        className="rounded-xl border-gray-200 focus:border-ir-primary focus:ring-ir-primary/20 text-lg py-3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Storytelling-Driven Results */}
              <div className="p-8 md:p-12 bg-white">
                {showResults && results ? (
                  <div className="space-y-10">
                    {/* Hero Metrics */}
                    <div className="grid grid-cols-2 gap-6">
                      {/* Hero Card 1 */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-sm border border-green-200">
                        <h4 className="text-sm font-medium text-green-700 mb-2">Your Net Gain</h4>
                        <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                          +{formatCurrency(results.netBenefitWithInteroom)}
                        </div>
                        <p className="text-sm text-green-600">With Interoom</p>
                      </div>

                      {/* Hero Card 2 */}
                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-sm border border-red-200">
                        <h4 className="text-sm font-medium text-red-700 mb-2">Potential Loss</h4>
                        <div className="text-3xl md:text-4xl font-bold text-red-600 mb-1">
                          -{formatCurrency(results.totalFinancialImpactWithoutInteroom)}
                        </div>
                        <p className="text-sm text-red-600">Without Interoom</p>
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="bg-gray-50/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Detailed Breakdown</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-ir-primary/10 flex items-center justify-center mr-3">
                              <Clock className="w-4 h-4 text-ir-primary" />
                            </div>
                            <span className="text-gray-700">Job Search Duration</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium text-ir-primary">
                              {results.newJobSearchDurationMonths.toFixed(1)} months
                            </span>
                            <span className="text-gray-500 text-sm block">
                              vs {AVERAGE_JOB_SEARCH_DURATION_MONTHS} months
                            </span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-ir-primary/10 flex items-center justify-center mr-3">
                              <DollarSign className="w-4 h-4 text-ir-primary" />
                            </div>
                            <span className="text-gray-700">Total Expenses</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium text-ir-primary">
                              -{formatCurrency(results.totalExpensesWithInteroom)}
                            </span>
                            <span className="text-gray-500 text-sm block">
                              vs -{formatCurrency(results.totalExpensesWithoutInteroom)}
                            </span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-ir-primary/10 flex items-center justify-center mr-3">
                              <TrendingUp className="w-4 h-4 text-ir-primary" />
                            </div>
                            <span className="text-gray-700">Salary Boost (Year 1)</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium text-green-600">
                              +{formatCurrency(results.salaryIncreaseAmount)}
                            </span>
                            <span className="text-gray-500 text-sm block">11% gain</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-ir-primary/10 flex items-center justify-center mr-3">
                              <Percent className="w-4 h-4 text-ir-primary" />
                            </div>
                            <span className="text-gray-700">Interoom Fee</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium text-gray-700">
                              -{formatCurrency(results.interoomFeeAmount)}
                            </span>
                            <span className="text-gray-500 text-sm block">5.5% of new salary</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-gray-50/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        Net Financial Impact Comparison
                      </h4>
                      <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={false} />
                            <YAxis
                              tickFormatter={(value) => formatCurrency(value)}
                              domain={["dataMin", 0]}
                              tickLine={false}
                              axisLine={false}
                            />
                            <Bar
                              name="Without Interoom"
                              dataKey="Without Interoom"
                              fill="#ef4444"
                              radius={[8, 8, 0, 0]}
                              animationDuration={animateChart ? 1000 : 0}
                            />
                            <Bar
                              name="With Interoom"
                              dataKey="With Interoom"
                              fill="#22c55e"
                              radius={[8, 8, 0, 0]}
                              animationDuration={animateChart ? 1200 : 0}
                              animationDelay={animateChart ? 200 : 0}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/quiz" className="block">
                      <Button
                        size="lg"
                        className="w-full bg-ir-primary hover:bg-ir-primary/90 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Secure Your Savings
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full bg-gray-50/70 backdrop-blur-sm rounded-2xl p-12 text-center min-h-[600px]">
                    <div className="w-16 h-16 bg-ir-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Briefcase className="w-8 h-8 text-ir-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">See Your Personalized Results</h3>
                    <p className="text-gray-600">
                      Enter your desired salary to see your cost breakdown and potential savings.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Trust-Building Footnote */}
            <div className="px-8 md:px-12 py-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 leading-relaxed">
                *Calculations are estimates. Assumes a 5.5-month average job search (U.S. BLS) and a $
                {DEFAULT_HEALTH_INSURANCE_PREMIUM} average monthly health insurance cost (KFF). Salary boost and time
                saved are based on Interoom client averages.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
