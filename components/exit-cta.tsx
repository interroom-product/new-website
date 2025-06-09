"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExitCTA() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Job Search?</h2>
        <p className="text-xl text-gray-600 mb-12 font-light">
          Join thousands who've accelerated their careers with InterRoom
        </p>

        <Link href="/quiz">
          <Button
            size="lg"
            className="bg-ir-primary hover:bg-ir-primary/90 text-white px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get Started Free
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </Link>

        <p className="text-gray-500 mt-6 text-sm">No credit card required • 30-day money-back guarantee</p>
      </div>
    </section>
  )
}
