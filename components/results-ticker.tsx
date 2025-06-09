"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Building, Users, TrendingUp } from "lucide-react"

export default function ResultsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const metrics = [
    {
      icon: <Briefcase className="w-5 h-5 text-ir-primary" />,
      label: "High-Growth Roles Available",
      value: "125",
      trend: "+12 this week",
    },
    {
      icon: <Building className="w-5 h-5 text-ir-primary" />,
      label: "Partner Companies",
      value: "350+",
      trend: "Across all industries",
    },
    {
      icon: <Users className="w-5 h-5 text-ir-primary" />,
      label: "Clients Placed This Month",
      value: "47",
      trend: "Average time: 6 weeks",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-ir-primary" />,
      label: "Average Salary Increase",
      value: "44%",
      trend: "From previous position",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % metrics.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [metrics.length])

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-ir-pastel/30 to-ir-periwinkle/20 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                <div className="w-6 h-6 bg-ir-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-ir-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-700">LIVE RESULTS</div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              {metrics.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-ir-primary w-4" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View metric ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 h-20 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                      {metrics[currentIndex].icon}
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{metrics[currentIndex].label}</p>
                      <div className="flex items-baseline">
                        <h3 className="text-3xl font-bold text-gray-900 mr-3">{metrics[currentIndex].value}</h3>
                        <span className="text-sm text-ir-primary">{metrics[currentIndex].trend}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm font-medium text-gray-700">Updated in real-time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
