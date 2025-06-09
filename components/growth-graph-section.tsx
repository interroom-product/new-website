"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

// Updated data with proper scaling
const growthData = [
  { month: "Feb", jobs: 25000 },
  { month: "Mar", jobs: 45000 },
  { month: "Apr", jobs: 75000 },
  { month: "May", jobs: 102210 },
]

export default function GrowthGraphSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLiveTracking, setIsLiveTracking] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("growth-graph")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="growth-graph" className="py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Clean Self-Contained Card */}
        <Card
          className={`shadow-lg border-0 bg-white rounded-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl font-bold text-gray-900 text-center">Our Growing Job Board</CardTitle>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            {/* Prominent KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">102,210</div>
                <div className="text-gray-600 font-medium">Total Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-ir-primary mb-1">+25,737</div>
                <div className="text-gray-600 font-medium">Monthly Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-ir-primary mb-1">309%</div>
                <div className="text-gray-600 font-medium">Total Growth</div>
              </div>
            </div>

            {/* Clean Line Graph */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Growth Since February</h3>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.6} />
                    <XAxis
                      dataKey="month"
                      axisLine={true}
                      tickLine={true}
                      tick={{ fill: "#6b7280", fontSize: 14, fontWeight: 500 }}
                      stroke="#d1d5db"
                      padding={{ left: 30, right: 30 }}
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={true}
                      tick={{ fill: "#6b7280", fontSize: 14, fontWeight: 500 }}
                      stroke="#d1d5db"
                      domain={[0, 120000]} // Increased upper bound to provide padding
                      tickFormatter={(value) => {
                        if (value >= 1000) return `${value / 1000}k`
                        return value
                      }}
                      padding={{ top: 20, bottom: 20 }}
                    />
                    <Tooltip
                      formatter={(value) => [`${Number(value).toLocaleString()} jobs`, "Jobs"]}
                      contentStyle={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="jobs"
                      stroke="#9458FA"
                      strokeWidth={4}
                      dot={{ fill: "#9458FA", strokeWidth: 3, r: 6 }}
                      activeDot={{ r: 8, stroke: "#9458FA", strokeWidth: 3, fill: "#ffffff" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* CTA and Status Indicator */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/quiz">
                <Button
                  size="lg"
                  className="bg-ir-primary hover:bg-ir-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Access the Live Job Board
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <div className="flex items-center text-gray-600 text-sm font-medium">
                <div className={`w-3 h-3 rounded-full mr-3 ${isLiveTracking ? "bg-green-500" : "bg-gray-400"}`}></div>
                <span>Live data tracking</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
