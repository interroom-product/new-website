"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Jared Malakouti",
    role: "Senior Product Manager",
    company: "Intercom",
    image: "/placeholder.svg?height=128&width=128&text=Jared",
    logo: "/images/logos/intercom-logo.svg",
    content:
      "The team at Interroom helped me land my dream job at Intercom. Their personalized approach and industry expertise made all the difference in my job search.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Meta",
    image: "/placeholder.svg?height=128&width=128&text=Sarah",
    logo: "/images/logos/meta-logo.svg",
    content:
      "I was struggling to get interviews at top tech companies. Interroom's resume optimization and interview coaching helped me secure multiple offers, including one at Meta.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Data Scientist",
    company: "Lucid",
    image: "/placeholder.svg?height=128&width=128&text=Michael",
    logo: "/images/logos/lucid-logo.svg",
    content:
      "The job application automation service saved me countless hours. I was able to apply to 100+ positions while focusing on interview preparation. Highly recommend!",
  },
  {
    id: 4,
    name: "Leila Patel",
    role: "Product Marketing Manager",
    company: "Uber",
    image: "/placeholder.svg?height=128&width=128&text=Leila",
    logo: "/images/logos/uber-logo.svg",
    content:
      "Interroom's coaching helped me transition from a startup to Uber. Their insights into big tech culture and interview processes were invaluable.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-violet-50/30 via-white to-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-800">
            What our winning clients have to say about us
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light">
            Hear from professionals who've successfully landed their dream jobs with our help.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 p-8 md:p-12 mx-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="relative flex-shrink-0">
                        <div className="relative">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={128}
                            height={128}
                            className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-white shadow-lg border-2 border-white/80 flex items-center justify-center">
                            <div
                              className={cn(
                                "w-full h-full flex items-center justify-center",
                                testimonial.company === "Intercom" && "w-full h-full",
                                testimonial.company === "Uber" && "w-full h-full",
                              )}
                            >
                              <Image
                                src={testimonial.logo || "/placeholder.svg"}
                                alt={`${testimonial.company} logo`}
                                width={40}
                                height={40}
                                className={cn(
                                  "object-contain",
                                  testimonial.company === "Meta" && "w-full h-full p-2",
                                  testimonial.company === "Lucid" && "w-full h-full p-2",
                                  testimonial.company === "Intercom" && "w-full h-full",
                                  testimonial.company === "Uber" && "w-full h-full",
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <blockquote className="text-lg md:text-xl text-slate-700 font-light leading-relaxed mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <div className="font-medium text-slate-800 text-lg">{testimonial.name}</div>
                          <div className="text-slate-600 font-light">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-sm border border-white/50 rounded-full p-3 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-sm border border-white/50 rounded-full p-3 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-slate-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-violet-600 scale-125" : "bg-slate-300 hover:bg-slate-400 hover:scale-110"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
