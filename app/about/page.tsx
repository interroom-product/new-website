import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Heart, Lightbulb } from "lucide-react"
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
      title: "People-First Approach",
      description:
        "We believe every professional deserves personalized attention and support throughout their career journey.",
    },
    {
      icon: <Target className="h-8 w-8 text-violet-600" />,
      title: "Results-Driven",
      description: "Our strategies are backed by data and proven methodologies that deliver measurable outcomes.",
    },
    {
      icon: <Award className="h-8 w-8 text-violet-600" />,
      title: "Excellence in Service",
      description: "We maintain the highest standards in everything we do, from coaching to resume writing.",
    },
    {
      icon: <Heart className="h-8 w-8 text-violet-600" />,
      title: "Genuine Care",
      description: "Your success is our success. We're genuinely invested in helping you achieve your career goals.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-violet-600" />,
      title: "Innovation",
      description: "We continuously evolve our methods and tools to stay ahead of industry trends and best practices.",
    },
  ]

  const achievements = [
    { number: "2,500+", label: "Professionals Helped" },
    { number: "89%", label: "Success Rate" },
    { number: "150+", label: "Partner Companies" },
    { number: "4.9/5", label: "Client Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-violet-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              About InterRoom
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Careers,
              <span className="text-violet-600"> Transforming Lives</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, InterRoom has become the trusted partner for professionals seeking to accelerate their
              careers and land their dream jobs. Our mission is to democratize access to high-quality career services
              and make professional success achievable for everyone.
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
                  src="/placeholder.jpg"
                  alt="Our story"
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
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-violet-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The experts behind your career success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-violet-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
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
