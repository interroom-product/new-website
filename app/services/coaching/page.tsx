import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageSquare, Users, Target, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-ir-off-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-ir-secondary to-ir-primary flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ir-neutral-800 mb-4">1:1 Coaching Package</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive interview preparation with mock interviews and personalized feedback from ex-FAANG coaches.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl font-bold text-ir-primary">$797</span>
            <span className="text-gray-600">one-time payment</span>
          </div>
          <Link href="/start?service=coaching">
            <Button className="bg-ir-primary hover:bg-ir-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-ir-neutral-800 text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "4 One-on-One Coaching Sessions",
                description:
                  "Four personalized 60-minute sessions with your dedicated ex-FAANG coach tailored to your specific needs.",
              },
              {
                icon: MessageSquare,
                title: "Mock Interviews with Feedback",
                description:
                  "Practice interviews for your target roles with detailed feedback on your performance and areas for improvement.",
              },
              {
                icon: Target,
                title: "Interview Strategy Development",
                description:
                  "Develop a comprehensive interview strategy including storytelling techniques and question frameworks.",
              },
              {
                icon: TrendingUp,
                title: "Salary Negotiation Guidance",
                description: "Learn proven negotiation tactics to maximize your compensation package and benefits.",
              },
              {
                icon: Award,
                title: "Follow-up Support",
                description:
                  "Ongoing support via email and messaging for questions that arise during your interview process.",
              },
              {
                icon: CheckCircle,
                title: "Personalized Action Plan",
                description:
                  "Receive a customized action plan with specific steps to improve your interview performance.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-ir-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-ir-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-ir-neutral-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coaching Topics */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ir-neutral-800 text-center mb-12">What We'll Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Interview Fundamentals",
                topics: [
                  "STAR method for behavioral questions",
                  "Technical interview preparation",
                  "Company research and preparation",
                  "Professional presentation and body language",
                ],
              },
              {
                category: "Advanced Techniques",
                topics: [
                  "Storytelling for maximum impact",
                  "Handling difficult questions",
                  "Turning weaknesses into strengths",
                  "Following up effectively",
                ],
              },
              {
                category: "Negotiation Mastery",
                topics: [
                  "Salary research and benchmarking",
                  "Negotiation timing and tactics",
                  "Benefits and equity discussions",
                  "Multiple offer management",
                ],
              },
              {
                category: "Industry-Specific Prep",
                topics: [
                  "Tech industry interview patterns",
                  "Finance and consulting prep",
                  "Startup vs. corporate differences",
                  "Remote interview best practices",
                ],
              },
            ].map((section, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-ir-neutral-800 mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-ir-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-ir-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Ace Your Next Interview?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Get personalized coaching from ex-FAANG professionals who know what it takes to succeed.
          </p>
          <Link href="/start?service=coaching">
            <Button className="bg-white text-ir-secondary hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Book Your Coaching Sessions
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
