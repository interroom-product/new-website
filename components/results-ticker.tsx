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
      icon: <Building className="w-5 h-5 text-ir-accent" />,
      label: "Partner Companies",
      value: "350+",
      trend: "Across all industries",
    },
    {
      icon: <Users className="w-5 h-5 text-ir-info" />,
      label: "Clients Placed This Month",
      value: "47",
      trend: "Average time: 6 weeks",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-ir-success" />,
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
    <section className="py-8 px-4 bg-ir-light">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-ir-light rounded-full flex items-center justify-center mr-3 shadow-sm">
                <div className="w-4 h-4 bg-ir-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-ir-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-xs font-medium text-gray-500">LIVE RESULTS</div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {metrics.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? "bg-ir-primary w-3" : "bg-gray-200"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View metric ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 h-16 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-ir-light rounded-full flex items-center justify-center mr-3 shadow-sm">
                      {metrics[currentIndex].icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{metrics[currentIndex].label}</p>
                      <div className="flex items-baseline">
                        <h3 className="text-2xl font-bold text-gray-900 mr-2">{metrics[currentIndex].value}</h3>
                        <span className="text-xs text-ir-primary">{metrics[currentIndex].trend}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="bg-ir-light px-3 py-1 rounded-full shadow-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-ir-success rounded-full mr-1.5"></div>
                        <span className="text-xs font-medium text-gray-500">Updated in real-time</span>
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
