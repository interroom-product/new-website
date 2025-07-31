import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Heart, MessageSquareText, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder-user.jpg",
      bio: "Former tech recruiter with 10+ years of experience helping professionals land their dream jobs.",
    },
    {
      name: "Michael Chen",
      role: "Head of Career Coaching",
      image: "/placeholder-user.jpg",
      bio: "Career strategist who has guided over 500 professionals to successful career transitions.",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Resume Writer",
      image: "/placeholder-user.jpg",
      bio: "Professional writer specializing in ATS-optimized resumes that get results.",
    },
    {
      name: "David Kim",
      role: "Interview Coach",
      image: "/placeholder-user.jpg",
      bio: "Former hiring manager turned coach, helping candidates ace their interviews.",
    },
  ]

  const values = [
    {
      icon: <Users className="h-8 w-8 text-violet-600" />,
      title: "Accountability",
      description: "We do what we say and expect the same.",
    },
    {
      icon: <Heart className="h-8 w-8 text-violet-600" />,
      title: "Empathy",
      description: "We meet you where you are and never judge the lows.",
    },
    {
      icon: <MessageSquareText className="h-8 w-8 text-violet-600" />,
      title: "Straight Shooter",
      description: "No sugarcoating. Just honest, direct feedback that helps you grow.",
    },
  ]

  const differentiators = [
    {
      icon: <Target className="h-8 w-8 text-violet-600" />,
      title: "Clarity over chaos",
      description: "Get a clear plan, not 15 conflicting pieces of advice.",
    },
    {
      icon: <Zap className="h-8 w-8 text-violet-600" />,
      title: "Structure over spam",
      description: "Stop applying everywhere. Start applying smart.",
    },
    {
      icon: <Shield className="h-8 w-8 text-violet-600" />,
      title: "Support over silence",
      description: "Someone in your corner—every step of the way.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-violet-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              You Don't Need More Job Tips.
              <span className="text-violet-600"> You Need a Partner.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, InterRoom has become the trusted partner for professionals seeking to accelerate their
              careers and land their dream jobs. Our mission is to democratize access to high-quality career services
              and make professional success achievable for everyone. We want to be the only tool job seekers need in
              their job search.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  InterRoom was born from a simple observation: talented professionals were struggling to navigate an
                  increasingly complex job market. Despite having the skills and experience, many were missing out on
                  opportunities due to outdated resumes, poor interview preparation, or lack of strategic career
                  guidance.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, Sarah Johnson, experienced this firsthand during her own career transition. After
                  spending months applying to jobs with little success, she realized the gap between having
                  qualifications and effectively communicating them to employers.
                </p>
                <p className="text-gray-600">
                  Today, InterRoom bridges that gap for thousands of professionals, combining industry expertise with
                  personalized coaching to deliver results that matter.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Professional team collaboration"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700">
                You're not unqualified. You're not behind. You're just not supposed to do this alone.
              </p>
              <p className="text-lg text-gray-700">
                You don't need more job tips. You need clarity, momentum, and a team that has your back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The Spark (2023)</h3>
                  <p className="text-gray-600">
                    Started by helping friends. The feedback: "This is better than anything I've paid for."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The First Build and Launching in Canada (2024)
                  </h3>
                  <p className="text-gray-600">
                    Tired of wasting time on LinkedIn, they built a better way: pairing under-the-radar jobs with
                    coaching from people who'd actually done the work. The early results proved the model worked. Word
                    spread. Clients outside the U.S. started landing roles. The model worked across borders and job
                    boards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">120,000+ Jobs Indexed (H1 2025)</h3>
                  <p className="text-gray-600">
                    Built a proprietary feed of 300,000+ roles from real company sites. A faster way to surface
                    opportunities—before they hit job boards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Redefining the Job Search (Today)</h3>
                  <p className="text-gray-600">
                    We're building a smarter, more human way to job search one that puts people first and gets results.
                    From stuck to hired. We've helped hundreds get unstuck, move faster, and finally feel clear about
                    their search.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700">
                Welcome to InterRoom. Let's find your job and your confidence together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-violet-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl text-violet-100 mb-8">
              Join thousands of professionals who have accelerated their careers with InterRoom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-violet-600 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
