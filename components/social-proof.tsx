"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([])

  const videoTestimonials = [
    {
      id: "cuEY5oeFA8A",
      title: "How InterRoom helped me land my dream job",
      author: "Michael Ta",
      company: "Senior Product Manager at Google",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "OrMFGgFWBd8",
      title: "From job search struggle to success",
      author: "Sarah Benson",
      company: "UX Designer at Meta",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "wfHVOOrf6ps",
      title: "InterRoom transformed my career trajectory",
      author: "Mithun Majunatha",
      company: "Software Engineer at Netflix",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
  ]

  const nextSlide = () => {
    if (isPlaying !== null) {
      stopVideo(isPlaying)
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoTestimonials.length)
  }

  const prevSlide = () => {
    if (isPlaying !== null) {
      stopVideo(isPlaying)
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoTestimonials.length) % videoTestimonials.length)
  }

  const playVideo = (index: number) => {
    if (isPlaying !== null && isPlaying !== index) {
      stopVideo(isPlaying)
    }

    setIsPlaying(index)

    // Access the iframe and play the video
    if (videoRefs.current[index]) {
      const iframe = videoRefs.current[index]
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
      }
    }
  }

  const stopVideo = (index: number) => {
    if (videoRefs.current[index]) {
      const iframe = videoRefs.current[index]
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
      }
    }
    setIsPlaying(null)
  }

  return (
    <section className="py-20 px-4 bg-ir-off-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ir-off-black mb-3">Success Stories</h2>
          <p className="text-lg text-ir-charcoal font-light">See how we've helped others land their dream jobs</p>
        </div>

        {/* Minimalist Testimonial Carousel */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-ir-primary w-6" : "bg-ir-periwinkle"
                  }`}
                  onClick={() => {
                    if (isPlaying !== null) {
                      stopVideo(isPlaying)
                    }
                    setCurrentIndex(index)
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-ir-charcoal hover:bg-ir-periwinkle"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-ir-charcoal hover:bg-ir-periwinkle"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl shadow-soft border border-ir-periwinkle">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Video Side */}
              <div className="relative aspect-video md:aspect-square bg-ir-pastel">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {isPlaying === currentIndex ? (
                      <iframe
                        ref={(el) => (videoRefs.current[currentIndex] = el)}
                        src={`https://www.youtube.com/embed/${videoTestimonials[currentIndex].id}?enablejsapi=1&autoplay=1`}
                        title={videoTestimonials[currentIndex].title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer"
                        style={{ backgroundImage: `url(${videoTestimonials[currentIndex].thumbnail})` }}
                        onClick={() => playVideo(currentIndex)}
                      >
                        <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform transform hover:scale-110 shadow-soft">
                          <Play className="w-6 h-6 text-ir-primary ml-1" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Text Side */}
              <div className="bg-ir-off-white p-6 md:p-8 flex flex-col justify-center border-l border-ir-periwinkle">
                <h3 className="text-xl font-bold text-ir-off-black mb-3">{videoTestimonials[currentIndex].title}</h3>
                <p className="text-ir-charcoal mb-4 text-sm leading-relaxed">
                  "InterRoom's approach was refreshingly different. They didn't just help with my resume—they completely
                  transformed my job search strategy and helped me land interviews at companies I never thought
                  possible."
                </p>
                <div>
                  <p className="text-ir-off-black font-medium">{videoTestimonials[currentIndex].author}</p>
                  <p className="text-ir-charcoal text-sm">{videoTestimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
