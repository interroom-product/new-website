import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, CheckCircle, Award, Target, TrendingUp, Users, Linkedin } from "lucide-react"
import Link from "next/link"

export default function CoachesPage() {
  const coaches = [
    {
      id: 1,
      name: "Alex Kim",
      role: "Product Management",
      image: "/placeholder.svg?height=400&width=300",
      companies: ["Google", "Meta", "Stripe"],
      bio: "Alex has over 10+ years of experience in Product Management and has spent the last 5 years at Google leading cross-functional teams on Search and YouTube products.",
      specialties: ["Product Management", "Cross-functional Leadership", "Tech Strategy"],
      placements: "200+ successful placements",
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Data Science / Analytics",
      image: "/placeholder.svg?height=400&width=300",
      companies: ["Meta", "Netflix", "Airbnb"],
      bio: "Over 8+ years of experience in data science and machine learning at Meta, Netflix, and Airbnb. Specialized in recommendation systems and growth analytics.",
      specialties: ["Data Science", "Machine Learning", "Analytics"],
      placements: "150+ data professionals coached",
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      name: "David Chen",
      role: "Software Engineering",
      image: "/placeholder.svg?height=400&width=300",
      companies: ["Netflix", "Uber", "Coinbase"],
      bio: "David is a Staff Engineer at Netflix with 10+ years building scalable systems. Previously led engineering teams at Uber and Coinbase.",
      specialties: ["Software Engineering", "System Design", "Technical Leadership"],
      placements: "300+ engineers placed",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Product Design",
      image: "/placeholder.svg?height=400&width=300",
      companies: ["Apple", "Figma", "Notion"],
      bio: "Sarah is a Senior Design Lead at Apple with 12+ years of experience. She's designed products used by millions at Apple, Figma, and Notion.",
      specialties: ["Product Design", "UX Research", "Design Systems"],
      placements: "100+ designers placed",
      rating: 4.7,
      reviews: 73,
    },
    {
      id: 5,
      name: "James Rodriguez",
      role: "Business Strategy",
      image: "/placeholder.svg?height=400&width=300",
      companies: ["McKinsey", "Stripe", "OpenAI"],
      bio: "James has 8+ years in strategy consulting at McKinsey and business operations at Stripe and OpenAI. Expert in go-to-market and scaling operations.",
      specialties: ["Business Strategy", "Operations", "Consulting"],
      placements: "80+ strategy roles filled",
      rating: 4.8,
      reviews: 94,
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Engineering Management",
      image: "/placeholder.svg?height=400&width=300",
      companies: ["Microsoft", "Amazon", "Slack"],
      bio: "Lisa is an Engineering Director at Microsoft with 9+ years managing engineering teams. Previously scaled teams at Amazon and Slack.",
      specialties: ["Engineering Management", "Team Leadership", "Technical Strategy"],
      placements: "120+ managers developed",
      rating: 4.9,
      reviews: 112,
    },
  ]

  const coachingProcess = [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "We start with a comprehensive assessment of your skills, experience, and career goals to create a personalized coaching plan.",
      features: ["Skills and experience evaluation", "Career goals discussion", "Personalized strategy creation"],
    },
    {
      step: 2,
      title: "Ongoing Support",
      description:
        "Your dedicated coach provides continuous support throughout your job search with regular check-ins and guidance.",
      features: ["Weekly strategy sessions", "Mock interviews and feedback", "Application review and optimization"],
    },
    {
      step: 3,
      title: "Offer Negotiation",
      description:
        "When you receive offers, your coach helps you evaluate and negotiate to ensure you get the best possible compensation.",
      features: ["Offer evaluation guidance", "Negotiation strategy development", "Compensation package optimization"],
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Our coaches have worked at top companies and bring insider knowledge to your job search.",
      features: [
        "Experience at FAANG and top tech companies",
        "Specialized knowledge in various domains",
        "Up-to-date with industry trends and requirements",
      ],
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "We tailor our coaching to your specific needs, goals, and career aspirations.",
      features: [
        "Customized coaching plans for each client",
        "Focus on your specific career goals",
        "Adaptable strategies based on your progress",
      ],
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our coaching has helped hundreds of professionals land their dream jobs with higher compensation.",
      features: [
        "44% average compensation increase",
        "90% job placement rate within 2 months",
        "High client satisfaction and referral rate",
      ],
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "We're with you every step of the way, from application to offer negotiation.",
      features: [
        "Regular check-ins and progress tracking",
        "On-demand support for urgent questions",
        "Post-placement guidance for career success",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-ir-off-white pt-20">
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 bg-gradient-to-b from-ir-pastel to-ir-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-ir-off-black">
                Every Top Performer Has a <span className="text-ir-primary">Great Coach</span> By Their Side
              </h1>
              <p className="text-ir-charcoal text-lg mb-8 max-w-lg">
                There are plenty of services that offer you classes, mentorship, and training but they all come with the
                same problem - they aren't individualized to your needs and planned to your outcome.
              </p>
              <p className="text-ir-charcoal mb-8">
                Our coaches bring industry expertise and personalized guidance to help you land your dream job.
              </p>
              <Link href="/quiz">
                <Button size="lg" className="bg-ir-primary hover:bg-ir-primary/90 text-white px-8 py-4 rounded-full">
                  Meet Your Coach <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-glow">
              <div className="aspect-[4/3] bg-ir-periwinkle rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-ir-primary/20 to-transparent"></div>
                <img
                  src="/images/coaching-consultation.jpg"
                  alt="Coach and client interaction"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Process */}
      <section className="py-20 px-4 bg-ir-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ir-off-black">How Our Coaching Works</h2>
            <p className="text-ir-charcoal max-w-2xl mx-auto">
              Our coaches provide personalized guidance throughout your job search journey, from application to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coachingProcess.map((process) => (
              <div
                key={process.step}
                className="bg-ir-off-white p-8 rounded-xl shadow-soft border border-ir-periwinkle relative"
              >
                <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-ir-primary flex items-center justify-center text-white font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-ir-off-black">{process.title}</h3>
                <p className="text-ir-charcoal mb-6">{process.description}</p>
                <ul className="space-y-3">
                  {process.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-ir-primary mr-2 shrink-0 mt-0.5" />
                      <span className="text-ir-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-ir-pastel">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ir-off-black">Why Choose Our Coaches</h2>
            <p className="text-ir-charcoal max-w-2xl mx-auto">
              Our coaches provide personalized guidance that delivers real results for your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-ir-periwinkle shadow-soft bg-ir-off-white">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-lg bg-ir-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-ir-primary" />
                    </div>
                    <CardTitle className="text-xl text-ir-off-black">{benefit.title}</CardTitle>
                    <CardDescription className="text-ir-charcoal">{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-ir-charcoal">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-ir-primary mr-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-20 px-4 bg-ir-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ir-off-black">Meet Our Expert Coaches</h2>
            <p className="text-ir-charcoal max-w-2xl mx-auto">
              Our coaches bring years of industry experience from top companies to help you navigate your career
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div
                key={coach.id}
                className="bg-ir-off-white rounded-xl shadow-soft border border-ir-periwinkle overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ir-off-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{coach.name}</h3>
                    <p className="text-white/80">{coach.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-ir-off-black font-semibold ml-1 text-sm">{coach.rating}</span>
                      <span className="text-ir-charcoal text-xs ml-1">({coach.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 mb-4">
                    {coach.companies.map((company, index) => (
                      <div
                        key={index}
                        className="px-2 py-1 bg-ir-periwinkle rounded-full text-xs text-ir-primary font-medium"
                      >
                        {company}
                      </div>
                    ))}
                  </div>

                  <p className="text-ir-charcoal text-sm mb-4 line-clamp-3">{coach.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {coach.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-ir-primary/10 text-ir-primary border-ir-primary/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-ir-primary text-xs font-semibold mb-4">{coach.placements}</p>

                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-ir-primary border-ir-primary/20 hover:bg-ir-primary hover:text-white"
                    >
                      View Profile
                    </Button>
                    <Button variant="ghost" size="icon" className="text-ir-charcoal hover:text-ir-primary">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-ir-primary to-ir-medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Meet Your Coach?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Take the first step toward accelerating your career with personalized coaching from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-white text-ir-primary hover:bg-white/90 px-8 py-4 rounded-full font-semibold"
              >
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ir-primary px-8 py-4 rounded-full font-semibold"
            >
              Browse All Coaches
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
