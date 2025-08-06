"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

const rotatingTaglines = [
  "landing a job you actually want",
  "interview and career clarity",
  "expert coaching and real feedback",
  "a personal team in your corner",
  "automating job search applications",
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTaglines.length)
        setIsFading(false)
      }, 500) // fade-out duration
    }, 3000) // 3-second interval

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 h-48 md:h-56 lg:h-64">
            <span className="whitespace-nowrap">Your partner on the path to</span>
            <br />
            <span
              className={`text-violet-600 transition-opacity duration-500 ease-in-out ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {rotatingTaglines[currentIndex]}
            </span>
          </h1>
          <p className="text-slate-600 text-xl mb-6 max-w-3xl mx-auto">
            InterRoom is your job search team, handling everything from finding and applying to jobs for you to coaching
            you through interviews and offer negotiations.
          </p>
          <p className="text-slate-600 mb-12 text-lg">We're with you every step of the way in your job search.</p>
          <div className="mb-12">
            <Link href="/survey">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-4 h-auto">
                Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
