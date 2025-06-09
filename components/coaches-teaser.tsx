"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CoachesTeaser() {
  const coaches = [
    {
      name: "Alex Kim",
      specialty: "Former Google PM",
      experience: "8 years at Google, 200+ hires",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Maria Santos",
      specialty: "Ex-Meta Recruiter",
      experience: "5 years at Meta, 500+ placements",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David Chen",
      specialty: "Former Netflix Engineer",
      experience: "Staff Engineer, 10+ years",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Williams",
      specialty: "Ex-Apple Designer",
      experience: "Senior Design Lead, 12+ years",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Your Success Team</h2>
          <p className="text-xl text-gray-300 mb-8">Ex-FAANG professionals who've been in your shoes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coaches.map((coach, index) => (
            <Card
              key={index}
              className="bg-ir-charcoal/50 border-ir-dark-stone hover:bg-ir-charcoal/70 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{coach.name}</h3>

                <p className="text-ir-primary font-semibold mb-2">{coach.specialty}</p>

                <p className="text-gray-400 text-sm">{coach.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/coaches">
            <Button
              size="lg"
              variant="outline"
              className="border-ir-primary text-ir-primary hover:bg-ir-primary hover:text-white transition-all duration-300"
            >
              Meet Our Coaches
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
