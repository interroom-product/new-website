"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = 4 // Number of testimonials - 1

  const testimonials = [
    {
      name: "Gabriela Tylenda",
      role: "Visual Designer",
      company: "Meta",
      image: "/placeholder.svg?height=100&width=100",
      logo: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Sarah Tashakorina",
      role: "Director of Product",
      company: "Masterclass",
      image: "/placeholder.svg?height=100&width=100",
      logo: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Jared Malakouti",
      role: "Senior Customer Success Manager",
      company: "Divert",
      image: "/placeholder.svg?height=100&width=100",
      logo: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Leila Bremner",
      role: "Senior Strategic Operations Manager",
      company: "Uber",
      image: "/placeholder.svg?height=100&width=100",
      logo: "/placeholder.svg?height=30&width=30",
    },
    {
      name: "Mark Johnson",
      role: "Senior Software Engineer",
      company: "Stripe",
      image: "/placeholder.svg?height=100&width=100",
      logo: "/placeholder.svg?height=30&width=30",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">What Our Winning Clients Have to Say About Us</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="h-24 w-24 rounded-full overflow-hidden bg-violet-100">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white p-1 shadow-md">
                        <Image
                          src={testimonial.logo || "/placeholder.svg"}
                          alt={testimonial.company}
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium">{testimonial.name}</h3>
                    <p className="text-slate-600 mb-6">{testimonial.role}</p>
                    <p className="text-slate-700 italic">
                      "InterRoom transformed my job search. Their personalized approach helped me land my dream role at{" "}
                      {testimonial.company} with a significant pay increase, all within 6 weeks."
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md border-slate-200 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md border-slate-200 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-violet-600" : "w-2 bg-slate-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
