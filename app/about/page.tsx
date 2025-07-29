import type { Metadata } from "next"
import { CheckCircle, Users, Heart, MessageSquare, Target, Zap, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About InterRoom - Your Job Search Partner",
  description:
    "Learn about InterRoom's mission to transform job searching from a lonely grind into a supported journey with real results.",
}

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2023",
      title: "The Spark",
      description: 'Started by helping friends. The feedback: "This is better than anything I\'ve paid for."',
    },
    {
      year: "2024",
      title: "The First Build and Launching in Canada",
      description:
        "Tired of wasting time on LinkedIn, they built a better way: pairing under-the-radar jobs with coaching from people who'd actually done the work. The early results proved the model worked. Word spread. Clients outside the U.S. started landing roles. The model worked across borders and job boards.",
    },
    {
      year: "H1 2025",
      title: "120,000+ Jobs Indexed",
      description:
        "Built a proprietary feed of 300,000+ roles from real company sites. A faster way to surface opportunities—before they hit job boards.",
    },
    {
      year: "Today",
      title: "Redefining the Job Search",
      description:
        "We're building a smarter, more human way to job search one that puts people first and gets results. From stuck to hired. We've helped hundreds get unstuck, move faster, and finally feel clear about their search.",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "Accountability",
      description: "We do what we say and expect the same.",
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We meet you where you are and never judge the lows.",
    },
    {
      icon: MessageSquare,
      title: "Straight Shooter",
      description: "No sugarcoating. Just honest, direct feedback that helps you grow.",
    },
  ]

  const differentiators = [
    {
      icon: Target,
      title: "Clarity over chaos",
      description: "Get a clear plan, not 15 conflicting pieces of advice.",
    },
    {
      icon: Zap,
      title: "Structure over spam",
      description: "Stop applying everywhere. Start applying smart.",
    },
    {
      icon: Shield,
      title: "Support over silence",
      description: "Someone in your corner—every step of the way.",
    },
  ]

  const whatWeDoFeatures = [
    {
      text: "Personalized job search strategy based on your specific goals and market conditions",
    },
    {
      text: "Resume and LinkedIn optimization with copy that actually gets responses",
    },
    {
      text: "Direct application support—we apply with you, not just advise you",
    },
    {
      text: "Interview preparation with real-world practice and feedback",
    },
    {
      text: "Salary negotiation support to maximize your offer",
    },
    {
      text: "Ongoing accountability and emotional support throughout your search",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">You Don't Need More Job Tips. You Need a Partner.</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Job searching is a lonely, confusing, and draining mental grind. You're not unqualified or behind—you're
            just not supposed to do this alone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold mb-8">InterRoom was born out of frustration.</h2>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              During COVID, our founders were doing everything "right" and still couldn't land interviews. It wasn't
              until they started recording mock interviews and sending them to friends that things shifted. A few pieces
              of honest, tactical feedback led to real changes and real results.
            </p>
            <p className="font-medium">That's when it clicked:</p>
            <p>
              Most people aren't struggling because they lack talent. They're struggling because they're alone. No
              structure, no visibility, no one telling them what actually matters.
            </p>
            <p>We kept hearing it over and over: "Looking for a job feels like a full-time job."</p>
            <p>And most of that time? Wasted. Scrolling LinkedIn, applying to generic posts, hearing nothing back.</p>
            <p className="font-medium">
              Here's the truth: over 50% of jobs aren't even listed on traditional boards. That's where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            InterRoom provides personalized job search support that goes far beyond traditional career coaching. We
            become your dedicated job search team, working alongside you every step of the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDoFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                <span className="text-slate-700 text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {differentiators.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <item.icon className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-slate-700 mb-4">
              This isn't about hacks. It's about clarity, execution, and consistency.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              If you're ready to stop guessing and start landing, InterRoom is built for you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-sm text-slate-500 bg-slate-200 px-2 py-1 rounded">{event.year}</span>
                  </div>
                  <p className="text-slate-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-lg text-slate-700 mb-2">If you're tired of guessing;</p>
            <p className="text-lg text-slate-700 font-medium">We're ready when you are.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
