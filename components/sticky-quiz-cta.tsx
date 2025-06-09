"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StickyQuizCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/quiz">
        <Button
          size="lg"
          className="bg-ir-primary hover:bg-ir-primary/90 text-white px-5 py-2.5 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105"
        >
          Get Started
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  )
}
