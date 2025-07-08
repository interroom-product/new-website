"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const coaches = [
  {
    id: 1,
    name: "Zach Marks",
    image: "/images/coaches/zach-marks.jpeg",
    title: "Senior Product Manager",
    companies: ["Meta", "Uber", "Postmates"],
    companyLogos: ["/images/logos/meta-logo.svg", "/images/logos/uber-logo.svg", "/images/logos/postmates-logo.svg"],
    specialties: ["Product Strategy", "Growth", "Leadership"],
    bio: "Former Senior PM at Meta with 8+ years building products used by millions. Specialized in growth and monetization strategies.",
  },
  {
    id: 2,
    name: "Stephanie Chen",
    image: "/images/coaches/stephanie.jpeg",
    title: "Engineering Manager",
    companies: ["Google", "Microsoft", "Salesforce"],
    companyLogos: [
      "/images/logos/google-logo.svg",
      "/images/logos/microsoft-logo.svg",
      "/images/logos/salesforce-logo.svg",
    ],
    specialties: ["Technical Leadership", "System Design", "Team Management"],
    bio: "Engineering leader with 10+ years at top tech companies. Expert in scaling teams and building distributed systems.",
  },
  {
    id: 3,
    name: "Iman Rodriguez",
    image: "/images/coaches/iman.jpeg",
    title: "VP of Sales",
    companies: ["Salesforce", "LinkedIn", "Box"],
    companyLogos: [
      "/images/logos/salesforce-logo.svg",
      "/images/logos/linkedin-logo.png",
      "/images/logos/box-logo.svg",
    ],
    specialties: ["Sales Strategy", "Team Building", "Revenue Growth"],
    bio: "Sales executive who built and scaled revenue teams from startup to IPO. Expert in enterprise sales and go-to-market strategy.",
  },
  {
    id: 4,
    name: "Steve Kim",
    image: "/images/coaches/steve.jpeg",
    title: "Design Director",
    companies: ["Apple", "Airbnb", "Figma"],
    companyLogos: ["/images/logos/apple-logo.svg", "/images/logos/airbnb-logo.svg", "/images/logos/figma-logo.svg"],
    specialties: ["Product Design", "Design Systems", "User Research"],
    bio: "Design leader with 12+ years creating award-winning products. Specialized in design systems and user-centered design.",
  },
]

const additionalCoaches = [
  {
    id: 5,
    name: "Ingrid Thompson",
    image: "/images/coaches/ingrid.jpeg",
    title: "Marketing Director",
    companies: ["Netflix", "Spotify"],
    companyLogos: ["/images/logos/netflix-logo.svg", "/images/logos/spotify-logo.svg"],
    specialties: ["Brand Marketing", "Growth Marketing", "Content Strategy"],
    bio: "Marketing executive with expertise in brand building and growth marketing at leading entertainment companies.",
  },
  {
    id: 6,
    name: "Nishant Patel",
    image: "/images/coaches/nishant.jpeg",
    title: "Data Science Manager",
    companies: ["Amazon", "Tesla"],
    companyLogos: ["/images/logos/amazon-logo.svg", "/images/logos/tesla-logo.svg"],
    specialties: ["Machine Learning", "Data Analytics", "AI Strategy"],
    bio: "Data science leader with deep expertise in ML and AI applications across e-commerce and automotive industries.",
  },
]

export default function CoachesGrid() {
  const [showMoreCoaches, setShowMoreCoaches] = useState(false)

  const allCoaches = showMoreCoaches ? [...coaches, ...additionalCoaches] : coaches

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Meet Your Career Coaches</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Work with industry veterans who've been in your shoes and know what it takes to land your dream role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {allCoaches.map((coach, index) => (
            <Card key={coach.id} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Image
                      src={coach.image || "/placeholder.svg"}
                      alt={coach.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{coach.name}</h3>
                    <p className="text-slate-600 text-sm mb-3">{coach.title}</p>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {coach.companies.map((company, companyIndex) => (
                        <div key={companyIndex} className="flex items-center space-x-1">
                          <Image
                            src={coach.companyLogos[companyIndex] || "/placeholder.svg"}
                            alt={company}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          <span className="text-xs text-slate-600">{company}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {coach.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">{coach.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showMoreCoaches && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowMoreCoaches(true)}
              variant="outline"
              size="lg"
              className="bg-transparent border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
            >
              View More Coaches
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
