import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Heart, MessageSquareText, Zap, Shield } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-ir-neutral-800 mb-6">
              You Don't Need More Job Tips.
              <span className="text-violet-600"> You Need a Partner.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We surface 300,000+ roles directly from company websites jobs you won't find on LinkedIn. We pair you with
              a coach who's done your job before—not just someone who talks about it. We work with you every week - real
              feedback, no fluff, no generic advice. And we don't get paid until you get hired.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  InterRoom was born out of frustration. During COVID, our founders were doing everything "right" and
                  still couldn't land interviews. It wasn't until they started recording mock interviews and sending
                  them to friends that things shifted. A few pieces of honest, tactical feedback led to real changes and
                  real results.
                </p>
                <p className="text-gray-600 mb-4">
                  That's when it clicked: Most people aren't struggling because they lack talent. They're struggling
                  because they're alone. No structure, no visibility, no one telling them what actually matters.
                </p>
                <p className="text-gray-600">
                  We kept hearing it over and over: "Looking for a job feels like a full-time job." And most of that
                  time? Wasted. Scrolling LinkedIn, applying to generic posts, hearing nothing back.
                </p>
              </div>
              <Card className="bg-slate-50 border-l-4 border-violet-600 rounded-l-none shadow-sm">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <Image
                    src="/images/testimonials/zeeshan.jpeg"
                    alt="Zeeshan, InterRoom Client"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <p className="text-slate-700 italic mb-4">
                      "Anybody can watch videos or practice with a friend. But what I really needed was someone who stuck
                      with me when I got rejected, who reminded me I'm still capable. You were like a partner getting me
                      through the ups and downs."
                    </p>
                    <cite className="text-slate-600 font-medium not-italic">- Zeeshan, Placed at Meta</cite>
                  </div>
                </CardContent>
              </Card>
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
                This isn't about hacks. It's about clarity, execution, and consistency.
              </p>
              <p className="text-lg text-gray-700">
                If you're ready to stop guessing and start landing, InterRoom is built for you.
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
              <p className="text-lg text-gray-700">If you're tired of guessing, we're ready when you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-violet-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to have a team behind you?</h2>
            <p className="text-xl text-violet-100 mb-8">
              Join thousands of professionals who have accelerated their careers with InterRoom.
            </p>
            <div className="flex justify-center">
              <Link href="/survey">
                <Button size="lg" variant="secondary">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
