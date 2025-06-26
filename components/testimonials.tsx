"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = 3 // Updated to 4 testimonials - 1

  const testimonials = [
    {
      name: "Gabriela Tylenda",
      role: "Visual Designer",
      company: "Meta",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GabiTylenda-BKNMv4shC3uS7boFm7VOQzfObkI3UR.jpeg",
      logo: "/images/logos/meta-logo.svg",
    },
    {
      name: "Sarah Tashakorina",
      role: "Director of Product",
      company: "Lucid",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sara-u7XhrxPrfUZhsGx1nfz2ZMQhHUV0jQ.jpeg",
      logo: "/images/logos/lucid-logo.svg",
    },
    {
      name: "Jared Malakouti",
      role: "Senior Customer Success Manager",
      company: "Divert",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jared%20photo-modIlHaH6mofZxigY0hV57Hh5MHGJg.jpeg",
      logo: "/images/logos/divert-logo.png",
    },
    {
      name: "Leila Bremner",
      role: "Senior Strategic Operations Manager",
      company: "Uber",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leila-swcpm6AQ5LNHk10lLxqRJNUOucMb31.jpeg",
      logo: "/images/logos/uber-logo.svg",
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
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-12 w-12 rounded-lg bg-white shadow-lg border-2 border-white flex items-center justify-center overflow-hidden">
                        <div
                          className={`flex items-center justify-center ${
                            testimonial.company === "Divert"
                              ? "w-full h-full p-1"
                              : testimonial.company === "Uber"
                                ? "w-full h-full p-1.5"
                                : "w-full h-full p-1.5"
                          }`}
                        >
                          <Image
                            src={testimonial.logo || "/placeholder.svg"}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className={`object-contain ${
                              testimonial.company === "Divert"
                                ? "w-full h-auto scale-110"
                                : testimonial.company === "Uber"
                                  ? "w-full h-full scale-105"
                                  : testimonial.company === "Lucid"
                                    ? "w-full h-auto filter brightness-0"
                                    : "w-full h-auto"
                            }`}
                          />
                        </div>
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
