import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Calendar, ArrowRight } from "lucide-react" // Added ArrowRight for consistency
import Link from "next/link" // Added Link for CTA

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
      {" "}
      {/* Changed background to white */}
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Every Top Performer Has a Coach</h1>{" "}
          {/* Changed text color */}
          <p className="text-xl text-gray-600 mb-8">Here's yours — ex-FAANG professionals who've been in your shoes</p>{" "}
          {/* Changed text color */}
        </div>
      </section>
      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={specialty === "All" ? "default" : "outline"}
                className={
                  specialty === "All"
                    ? "bg-ir-primary hover:bg-ir-primary/90 text-white" // Updated button styles
                    : "border-gray-300 text-gray-700 hover:bg-gray-100" // Updated button styles
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" // Updated card styles
              >
                <CardContent className="p-6">
                  {/* Coach Image */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={coach.image || "/placeholder.svg"}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Coach Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{coach.name}</h3> {/* Changed text color */}
                    <p className="text-ir-primary font-semibold mb-2">{coach.title}</p>
                    <p className="text-gray-600 text-sm mb-3">{coach.experience}</p> {/* Changed text color */}
                  </div>
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-900 font-semibold ml-1">{coach.rating}</span>{" "}
                      {/* Changed text color */}
                      <span className="text-gray-600 text-sm ml-1">({coach.reviews} reviews)</span>{" "}
                      {/* Changed text color */}
                    </div>
                  </div>
                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {coach.specialties.slice(0, 2).map((specialty, idx) => (
                        <span key={idx} className="px-2 py-1 bg-ir-pastel/50 text-ir-primary text-xs rounded-full">
                          {" "}
                          {/* Updated specialty tag styles */}
                          {specialty}
                        </span>
                      ))}
                      {coach.specialties.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {" "}
                          {/* Updated specialty tag styles */}+{coach.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Stats */}
                  <p className="text-center text-ir-primary text-sm font-semibold mb-4">{coach.stats}</p>{" "}
                  {/* Changed text color */}
                  {/* Bio */}
                  <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">{coach.bio}</p>{" "}
                  {/* Changed text color */}
                  {/* Removed "Book Session" CTA */}
                  <Link href="/quiz">
                    {" "}
                    {/* Added a link to quiz for general CTA */}
                    <Button className="w-full bg-ir-primary hover:bg-ir-primary/90 text-white">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Coach Philosophy Section */}
      <section className="py-20 px-4 bg-ir-pastel/30">
        {" "}
        {/* Changed background */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Makes Our Coaches Different</h2>{" "}
          {/* Changed text color */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-ir-primary/20 to-ir-medium/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                {/* Updated gradient */}
                <Star className="w-8 h-8 text-ir-primary" /> {/* Updated icon color */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Been There, Done That</h3> {/* Changed text color */}
              <p className="text-gray-600">
                {" "}
                {/* Changed text color */}
                All our coaches have walked the path you're on. They've been through the interviews, negotiations, and
                career transitions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-ir-medium/20 to-ir-neutral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                {/* Updated gradient */}
                <MapPin className="w-8 h-8 text-ir-medium" /> {/* Updated icon color */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inside Knowledge</h3> {/* Changed text color */}
              <p className="text-gray-600">
                {" "}
                {/* Changed text color */}
                They know what hiring managers actually look for, having been on both sides of the interview table.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-ir-neutral/20 to-ir-periwinkle/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                {/* Updated gradient */}
                <Calendar className="w-8 h-8 text-ir-neutral" /> {/* Updated icon color */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3> {/* Changed text color */}
              <p className="text-gray-600">
                {" "}
                {/* Changed text color */}
                Track record of helping professionals land roles at top companies with significant salary increases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
