"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Target } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-ir-off-white/90 backdrop-blur-md border-b border-ir-periwinkle">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Target className="w-7 h-7 text-ir-primary" />
            <span className="text-xl font-bold text-ir-off-black">InterRoom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-ir-charcoal hover:text-ir-off-black transition-colors font-medium text-sm"
            >
              Services
            </Link>
            <Link
              href="/coaches"
              className="text-ir-charcoal hover:text-ir-off-black transition-colors font-medium text-sm"
            >
              Coaches
            </Link>
            <Link
              href="/faq"
              className="text-ir-charcoal hover:text-ir-off-black transition-colors font-medium text-sm"
            >
              FAQ
            </Link>

            {/* Separated CTA */}
            <div className="ml-4 pl-4 border-l border-ir-periwinkle">
              <Link href="/quiz">
                <Button className="bg-ir-primary hover:bg-ir-primary/90 text-white px-6 py-2 rounded-full font-medium text-sm shadow-sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-ir-off-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-ir-off-white/95 backdrop-blur-md border-t border-ir-periwinkle">
            <Link
              href="/services"
              className="block text-ir-charcoal hover:text-ir-off-black transition-colors font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/coaches"
              className="block text-ir-charcoal hover:text-ir-off-black transition-colors font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Coaches
            </Link>
            <Link
              href="/faq"
              className="block text-ir-charcoal hover:text-ir-off-black transition-colors font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link href="/quiz" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-ir-primary hover:bg-ir-primary/90 text-white rounded-full font-medium text-sm">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
