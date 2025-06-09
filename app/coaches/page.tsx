import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CoachesPage() {
  const coaches = [
    {
      name: "Alex Kim",
      title: "Former Google Product Manager",
      experience: "8 years at Google",
      specialties: ["Product Management", "Strategy", "Leadership"],
      stats: "200+ successful placements",
      bio: "Led product teams at Google Search and YouTube. Specialized in helping PMs break into FAANG companies.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 127,
    },
    {
      name: "Maria Santos",
      title: "Ex-Meta Recruiter",
      experience: "5 years at Meta",
      specialties: ["Technical Recruiting", "Interview Prep", "Salary Negotiation"],
      stats: "500+ successful hires",
      bio: "Former senior recruiter at Meta focusing on engineering roles. Expert in technical interview preparation and offer negotiation.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 89,
    },
    {
      name: "David Chen",
      title: "Former Netflix Staff Engineer",
      experience: "10 years at Netflix",
      specialties: ["Software Engineering", "System Design", "Technical Leadership"],
      stats: "150+ engineers coached",
      bio: "Staff engineer who built Netflix's recommendation systems. Helps engineers level up to senior and staff roles.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 156,
    },
    {
      name: "Sarah Williams",
      title: "Ex-Apple Design Lead",
      experience: "12 years at Apple",
      specialties: ["Product Design", "UX Research", "Design Leadership"],
      stats: "100+ designers placed",
      bio: "Led design for Apple's flagship products. Specializes in helping designers break into top tech companies.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 73,
    },
    {
      name: "James Rodriguez",
      title: "Former Amazon Data Scientist",
      experience: "7 years at Amazon",
      specialties: ["Data Science", "Machine Learning", "Analytics"],
      stats: "200+ data professionals coached",
      bio: "Principal data scientist at Amazon Web Services. Expert in ML interviews and data science career transitions.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 94,
    },
    {
      name: "Lisa Park",
      title: "Ex-Microsoft Engineering Manager",
      experience: "9 years at Microsoft",
      specialties: ["Engineering Management", "Team Leadership", "Career Growth"],
      stats: "80+ managers developed",
      bio: "Engineering manager who scaled teams at Microsoft Azure. Helps engineers transition to management roles.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 112,
    },
  ]

  const specialties = ["All", "Product Management", "Software Engineering", "Data Science", "Design", "Management"]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Every Top Performer Has a Coach</h1>
          <p className="text-lg text-gray-500 mb-8 font-light">
            Here's yours — industry professionals who've been in your shoes
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={specialty === "All" ? "default" : "outline"}
                className={
                  specialty === "All"
                    ? "bg-ir-primary hover:bg-ir-primary/90 text-white rounded-full"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full"
                }
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-102 rounded-xl"
              >
                <CardContent className="p-5">
                  {/* Coach Image */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={coach.image || "/placeholder.svg"}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Coach Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{coach.name}</h3>
                    <p className="text-ir-primary font-semibold mb-2 text-sm">{coach.title}</p>
                    <p className="text-gray-500 text-xs mb-3">{coach.experience}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-900 font-semibold ml-1 text-sm">{coach.rating}</span>
                      <span className="text-gray-500 text-xs ml-1">({coach.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {coach.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="px-2 py-1 bg-ir-light text-ir-primary text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                      {coach.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                          +{coach.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <p className="text-center text-ir-primary text-xs font-semibold mb-4">{coach.stats}</p>

                  {/* Bio */}
                  <p className="text-gray-500 text-xs text-center mb-5 leading-relaxed">{coach.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Single CTA at bottom of page */}
          <div className="mt-16 text-center">
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-ir-primary hover:bg-ir-primary/90 text-white px-8 py-5 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-glow"
              >
                Get Matched With Your Coach
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-gray-400 text-sm mt-4">No credit card required • Success-based pricing</p>
          </div>
        </div>
      </section>

      {/* Coach Philosophy Section */}
      <section className="py-20 px-4 bg-ir-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Makes Our Coaches Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-ir-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-ir-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Been There, Done That</h3>
              <p className="text-gray-500 text-sm">
                All our coaches have walked the path you're on. They've been through the interviews, negotiations, and
                career transitions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-ir-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-ir-accent" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Inside Knowledge</h3>
              <p className="text-gray-500 text-sm">
                They know what hiring managers actually look for, having been on both sides of the interview table.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-ir-info/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-ir-info" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-500 text-sm">
                Track record of helping professionals land roles at top companies with significant salary increases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
