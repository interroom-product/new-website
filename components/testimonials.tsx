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
    image: "/images/testimonials/jared.jpeg",
    logo: "/images/logos/intercom-logo.svg",
    content:
      "I was skeptical at first, especially since I was only looking for specific Climate Tech roles. I took a shot since they don't get paid until you do, and after 6 weeks, I landed the exact role I'd been looking for. My only regret is not starting sooner. Highly recommend!",
  },
  {
    id: 2,
    name: "Gabriela Tylenda",
    role: "Visual Designer",
    company: "Meta",
    image: "/images/testimonials/gabriela.jpeg",
    logo: "/images/logos/meta-logo.svg",
    content:
      "After searching for over a year, InterRoom helped me land a new role in just 3.5 weeks! They showed me how much I was underselling myself, and with their support, I nailed the second interview and got the offer. A huge shoutout to the team!",
  },
  {
    id: 3,
    name: "Sarah Tashakorina",
    role: "Director of Product",
    company: "Lucid",
    image: "/images/testimonials/sara.jpeg",
    logo: "/images/logos/lucid-logo.svg",
    content:
      "InterRoom was instrumental in a tough market. Their expertise in startups and data helped me focus my search and refine my resume. With their real-time coaching, my interview rate tripled, leading to a fully remote Director role in just 3.5 months! Their support was invaluable!",
  },
  {
    id: 4,
    name: "Leila Bremner",
    role: "Senior Strategic Operations Manager",
    company: "Uber",
    image: "/images/testimonials/leila.jpeg",
    logo: "/images/logos/uber-logo.svg",
    content:
      "I landed the job that was top of my list within 6 weeks with InterRoom! After searching for 7 months on my own, they helped me negotiate a $20k increase to my overall comp. I plan to use them for regular career coaching in the future.",
  },
  {
    id: 5,
    name: "Sarah Benson",
    role: "Strategic Account Executive",
    company: "DoorDash",
    image: "/images/testimonials/sarah-benson.png",
    logo: "/images/logos/doordash-logo.svg",
    content:
      "I was super skeptical of services like InterRoom at first but when I worked with them, it completely changed my mind. I was able to make quick progress in my search and they helped me get a $14K increase through negotiation!",
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
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={128}
                          height={128}
                          className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-white shadow-lg border-2 border-white/80 flex items-center justify-center overflow-hidden">
                          <Image
                            src={testimonial.logo || "/placeholder.svg"}
                            alt={`${testimonial.company} logo`}
                            width={56}
                            height={56}
                            className="object-contain w-14 h-14 transition-transform duration-300"
                          />
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
