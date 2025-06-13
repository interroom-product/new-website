"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ExitCTA() {
  return (
    <section className="py-20 px-4 bg-ir-neutral-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-ir-neutral-800 mb-4">Ready to Transform Your Job Search?</h2>
        <p className="text-lg text-gray-600 mb-10 font-light">
          Join thousands who've accelerated their careers with InterRoom
        </p>

        <Link href="/quiz">
          <Button
            size="lg"
            className="bg-ir-primary hover:bg-ir-primary/90 text-white px-10 py-5 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-glow"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>

        <p className="text-gray-500 mt-5 text-sm">No credit card required • 30-day money-back guarantee</p>
      </div>
    </section>
  )
}
