"use client"

import { useState, useRef, useEffect } from "react"
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

  // Ensure YouTube API is ready
  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    return () => {
      // Clean up any playing videos when component unmounts
      if (isPlaying !== null) {
        stopVideo(isPlaying)
      }
    }
  }, [])

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 font-light">See how we've helped others land their dream jobs</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-20">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-video">
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
                      <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                        <Play className="w-8 h-8 text-ir-primary ml-1" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {videoTestimonials[currentIndex].title}
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700 font-medium">{videoTestimonials[currentIndex].author}</p>
                  <p className="text-gray-500 text-sm">{videoTestimonials[currentIndex].company}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full" onClick={prevSlide}>
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" onClick={nextSlide}>
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-ir-primary w-6" : "bg-gray-300"
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
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-ir-primary mb-2">+44%</div>
            <p className="text-gray-600">Average Salary Increase</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-ir-primary mb-2">8%</div>
            <p className="text-gray-600">Interview Response Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-ir-primary mb-2">2x</div>
            <p className="text-gray-600">Faster Job Placement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
