"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const rotatingTaglines = [
  "landing a job you actually want",
  "interview and career clarity",
  "expert coaching and real feedback",
  "a personal team in your corner",
  "automating job search applications",
  "offer negotiations",
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
    }, 4000) // 4-second interval

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-none tracking-tight mb-8 flex flex-col justify-center items-center h-32 sm:h-40 md:h-48">
            <span className="px-2">Your partner on the path to</span>
            <span
              className={`text-violet-600 transition-opacity duration-500 ease-in-out block w-full max-w-[32ch] sm:max-w-[40ch] md:max-w-none whitespace-normal md:whitespace-nowrap text-balance flex items-center justify-center text-center ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {rotatingTaglines[currentIndex]}
            </span>
          </h1>
          <div className="mt-12">
            <Link href="/survey">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
              >
                Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
