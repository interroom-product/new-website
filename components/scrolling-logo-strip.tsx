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
  speed = 25,
  direction = "left",
  pauseOnHover = true,
}: ScrollingLogoStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollContent = scrollContainer.querySelector(".scroll-content") as HTMLElement
    if (!scrollContent) return

    let animationId: number
    let currentPosition = 0
    const containerWidth = scrollContent.scrollWidth / 2

    const animate = () => {
      if (direction === "left") {
        currentPosition -= speed / 60
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

  // Function to get special sizing for logos that need visual weight adjustment
  const getLogoHeight = (logoAlt: string) => {
    // Wide logos that need slightly more height for visual balance
    const wideLogos = ["Meta", "Amazon", "Stripe", "Workiva", "Zipline"]
    // Standard height logos (including Google, Intercom, and Notion)
    const standardLogos = ["Google", "Intercom", "Notion"]

    if (wideLogos.includes(logoAlt)) {
      return 42
    } else {
      return 35
    }
  }

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-hidden bg-white py-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="scroll-content flex items-center" style={{ gap: "4rem" }}>
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-70 group cursor-pointer"
            style={{ width: "120px", minWidth: "120px" }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={getLogoHeight(logo.alt)}
              className="object-contain w-auto grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-70 group cursor-pointer"
            style={{ width: "120px", minWidth: "120px" }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={getLogoHeight(logo.alt)}
              className="object-contain w-auto grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
