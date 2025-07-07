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
  speed = "40s",
  direction = "left",
  pauseOnHover = true,
}: ScrollingLogoStripProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden",
        "group",
        pauseOnHover && "[--animation-play:running] hover:[--animation-play:paused]",
      )}
    >
      <div
        className={cn("flex items-center gap-16 animate-scroll", direction === "right" ? "reverse" : "")}
        style={{ "--animation-duration": speed } as React.CSSProperties}
      >
        {/* Render the logos twice for a seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0"
            style={{ width: "85px" }}
            aria-hidden={index >= logos.length}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width || 85}
              height={logo.height || 45}
              className="object-contain w-auto h-full grayscale opacity-70 transition-all duration-300 group-hover:opacity-100 hover:!opacity-100 hover:grayscale-0 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
