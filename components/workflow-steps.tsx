"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Trophy } from "lucide-react"

export default function WorkflowSteps() {
  const steps = [
    {
      icon: Target,
      title: "Strategy & Preparation",
      description: "We build your foundation for success with targeted job sourcing and optimized materials.",
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      glowColor: "shadow-blue-500/30",
    },
    {
      icon: Zap,
      title: "We Take Over",
      description: "Our team submits applications on your behalf while you focus on interview preparation.",
      gradient: "from-indigo-600 via-indigo-500 to-purple-600",
      glowColor: "shadow-indigo-500/30",
    },
    {
      icon: Trophy,
      title: "You Land the Offer",
      description: "Expert coaching guides you through interviews and negotiations to secure your ideal role.",
      gradient: "from-sky-600 via-sky-500 to-blue-600",
      glowColor: "shadow-sky-500/30",
    },
  ]

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-100/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.03),transparent_50%)]"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-professional-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-6 tracking-tight">
            We Simplify Your Journey
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            A simple, transparent process designed to get you results, fast.
          </p>

          {/* Professional accent line */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-professional-pulse"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border border-slate-200/60 bg-white/80 backdrop-blur-xl hover:bg-white/90 hover:border-slate-300/80 transition-all duration-500 hover:scale-[1.02] hover:${step.glowColor} hover:shadow-xl`}
              >
                {/* Subtle border glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
                ></div>

                <CardContent className="relative z-10 p-10 text-center">
                  {/* Professional icon container */}
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-105 shadow-lg ${step.glowColor}`}
                    >
                      <Icon className="w-10 h-10 text-white drop-shadow-sm" />
                    </div>

                    {/* Subtle accent dots */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-500"></div>
                  </div>

                  {/* Step number and title */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <span
                        className={`text-3xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mr-3`}
                      >
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{step.title}</h3>
                    </div>

                    {/* Professional divider */}
                    <div
                      className={`w-16 h-0.5 bg-gradient-to-r ${step.gradient} mx-auto opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Professional connection lines between cards (desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
          <div className="flex justify-between items-center px-32">
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 animate-professional-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-sky-400 opacity-20 animate-professional-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
