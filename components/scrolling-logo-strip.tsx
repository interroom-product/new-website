"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Logo {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

interface ScrollingLogoStripProps {
  logos: Logo[]
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function ScrollingLogoStrip({
  logos,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
}: ScrollingLogoStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Duplicate logos to create seamless loop
    const scrollContent = scrollContainer.querySelector(".scroll-content") as HTMLElement
    if (!scrollContent) return

    let animationId: number
    let currentPosition = 0
    const containerWidth = scrollContent.scrollWidth / 2 // Half because we duplicate content

    const animate = () => {
      if (direction === "left") {
        currentPosition -= speed / 60 // 60fps
        if (currentPosition <= -containerWidth) {
          currentPosition = 0
        }
      } else {
        currentPosition += speed / 60
        if (currentPosition >= containerWidth) {
          currentPosition = 0
        }
      }

      scrollContent.style.transform = `translateX(${currentPosition}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [speed, direction])

  // Handle pause on hover
  const handleMouseEnter = () => {
    if (pauseOnHover && scrollRef.current) {
      const scrollContent = scrollRef.current.querySelector(".scroll-content") as HTMLElement
      if (scrollContent) {
        scrollContent.style.animationPlayState = "paused"
      }
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover && scrollRef.current) {
      const scrollContent = scrollRef.current.querySelector(".scroll-content") as HTMLElement
      if (scrollContent) {
        scrollContent.style.animationPlayState = "running"
      }
    }
  }

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-hidden bg-white py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="scroll-content flex items-center space-x-12 md:space-x-16 lg:space-x-20">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-60 group cursor-pointer"
            style={{
              width: "140px",
              height: "60px",
              minWidth: "140px",
            }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={140}
              height={60}
              className={`object-contain w-full h-full group-hover:opacity-100 transition-opacity duration-300 ${logo.className || ""}`}
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-60 group cursor-pointer"
            style={{
              width: "140px",
              height: "60px",
              minWidth: "140px",
            }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={140}
              height={60}
              className={`object-contain w-full h-full group-hover:opacity-100 transition-opacity duration-300 ${logo.className || ""}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
