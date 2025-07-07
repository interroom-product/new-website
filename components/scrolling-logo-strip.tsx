"use client"

import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Logo {
  src: string
  alt: string
  width?: number
  height?: number
}

interface ScrollingLogoStripProps {
  logos: Logo[]
  speed?: string
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function ScrollingLogoStrip({
  logos,
  speed = "30s",
  direction = "left",
  pauseOnHover = true,
}: ScrollingLogoStripProps) {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div
        className={cn(
          "flex items-center animate-scroll",
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={
          {
            "--animation-duration": speed,
            gap: "4rem",
            width: "200%",
          } as React.CSSProperties
        }
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${logo.alt}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: `${logo.width || 85}px`,
              height: `${logo.height || 45}px`,
              minWidth: `${logo.width || 85}px`,
            }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width || 85}
              height={logo.height || 45}
              className="object-contain w-full h-full grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${logo.alt}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: `${logo.width || 85}px`,
              height: `${logo.height || 45}px`,
              minWidth: `${logo.width || 85}px`,
            }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width || 85}
              height={logo.height || 45}
              className="object-contain w-full h-full grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
