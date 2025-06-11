"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react"

export default function BeforeAfterMetrics() {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0)

  const beforeMetrics = [
    { icon: Clock, label: "Job Search Duration", value: "8+ months", color: "text-red-500" },
    { icon: Target, label: "Interview Response Rate", value: "2-5%", color: "text-red-500" },
    { icon: DollarSign, label: "Salary Negotiation Success", value: "15%", color: "text-red-500" },
    { icon: TrendingUp, label: "Offer Conversion Rate", value: "12%", color: "text-red-500" },
  ]

  const afterMetrics = [
    { icon: Clock, label: "Job Search Duration", value: "8 weeks", color: "text-green-500" },
    { icon: Target, label: "Interview Response Rate", value: "25-40%", color: "text-green-500" },
    { icon: DollarSign, label: "Salary Negotiation Success", value: "85%", color: "text-green-500" },
    { icon: TrendingUp, label: "Offer Conversion Rate", value: "65%", color: "text-green-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % beforeMetrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [beforeMetrics.length])

  const CurrentBeforeIcon = beforeMetrics[currentMetricIndex].icon
  const CurrentAfterIcon = afterMetrics[currentMetricIndex].icon

  return (
    <div className="mb-16">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-ir-off-black mb-2">The InterRoom Difference</h2>
        <p className="text-ir-charcoal">See the dramatic transformation in your job search results</p>
      </div>

      {/* Main Comparison Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 p-8 md:p-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Before InterRoom */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
              <CurrentBeforeIcon className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Before InterRoom</h3>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="text-3xl font-bold text-red-600 mb-2">{beforeMetrics[currentMetricIndex].value}</div>
              <div className="text-sm text-slate-600 font-medium">{beforeMetrics[currentMetricIndex].label}</div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div className="absolute bg-white px-3 py-1 rounded-full border border-slate-200 text-sm font-medium text-slate-600">
              VS
            </div>
          </div>

          {/* After InterRoom */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
              <CurrentAfterIcon className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">With InterRoom</h3>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{afterMetrics[currentMetricIndex].value}</div>
              <div className="text-sm text-slate-600 font-medium">{afterMetrics[currentMetricIndex].label}</div>
            </div>
          </div>
        </div>

        {/* Ticker Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {beforeMetrics.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentMetricIndex ? "bg-ir-primary w-6" : "bg-slate-300 hover:bg-slate-400"
              }`}
              onClick={() => setCurrentMetricIndex(index)}
              aria-label={`View metric ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-ir-primary mb-1">2.5x</div>
            <div className="text-sm text-slate-600">Faster job placement on average</div>
          </div>
        </div>
      </div>
    </div>
  )
}
