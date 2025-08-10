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

  useEffect(() => {
    const DURATION_MS = 4000 // must match the Tailwind animation duration
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTaglines.length)
    }, DURATION_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-extrabold leading-tight md:leading-none tracking-tight mb-8 flex flex-col justify-center items-center h-40 sm:h-48 md:h-56">
            <span className="px-2">Your partner on the path to</span>

            {/* Slide container: give extra height to avoid descender clipping */}
            <div className="h-[1.2em] overflow-hidden relative w-full flex items-center justify-center text-center">
              <span
                key={currentIndex}
                className="text-violet-600 animate-slide-up block whitespace-nowrap flex items-center justify-center text-center"
              >
                {rotatingTaglines[currentIndex]}
              </span>
            </div>
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
