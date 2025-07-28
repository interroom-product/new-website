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

      {/* Why InterRoom Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-lg text-slate-700">
                Most people try to job search alone. They binge YouTube tips, send out resume into a void, ask friends
                for feedback, and get stuck in their heads. It's exhausting and it rarely works.
              </p>

              <blockquote className="border-l-4 border-violet-600 pl-6 py-4 bg-white rounded-r-lg">
                <p className="text-slate-700 italic mb-4">
                  "Anybody can watch videos or practice with a friend. But what I really needed was someone who stuck
                  with me when I got rejected, who reminded me I'm still capable. You were like a partner getting me
                  through the ups and downs."
                </p>
                <cite className="text-sm text-slate-600 font-medium">- Zeeshan, InterRoom Client</cite>
              </blockquote>

              <p className="text-lg text-slate-700 font-medium">
                That's what InterRoom is. We don't give you generic advice. We give you a real partner in your search.
              </p>

              <blockquote className="border-l-4 border-violet-600 pl-6 py-4 bg-white rounded-r-lg">
                <p className="text-slate-700 italic mb-4">
                  "It's grueling, man. So many rejections. Tough interviews. But having someone believe in me every
                  week, remind me why I started, that's what kept me going. That was the real value."
                </p>
                <cite className="text-sm text-slate-600 font-medium">- Zeeshan, InterRoom Client</cite>
              </blockquote>
            </div>

            {/* Right Column */}
            <div>
              <Card className="bg-violet-50 border-violet-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">
                    We're not here to hype you up or give vague feedback. We're here to:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Tell you what's actually holding you back</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Push you forward when rejection makes you want to stop</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Help you fix your resume and LinkedIn with copy that works</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Apply with you, not just "advise" you</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">
                        Prep you for interviews like we're on your team—because we are
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">Back you in salary negotiations with confidence</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Closing Message */}
          <div className="text-center mt-16 space-y-6">
            <p className="text-lg text-slate-700">
              We're not a coaching platform. We're not AI. We're not charging you $10K up front like bootcamps or other
              job services.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              We're real people who do the work with you until you get hired.
            </p>
            <p className="text-lg text-slate-700">
              You're not unqualified. You're not behind. You're just not supposed to do this alone.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Model */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-6">We don't get paid until you get hired.</h2>
          <p className="text-lg text-slate-700 mb-8">
            While other services charge thousands up front, we remove the financial stress. You only pay after you get
            the job. We're in this with you.
          </p>

          <blockquote className="border-l-4 border-violet-600 pl-6 py-4 bg-slate-50 rounded-r-lg max-w-2xl mx-auto">
            <p className="text-slate-700 italic mb-4">
              "Knowing I didn't have to pay until I landed a role made the whole process easier. And in the end, I
              almost doubled my salary."
            </p>
            <cite className="text-sm text-slate-600 font-medium">- Zeeshan, InterRoom Client</cite>
          </blockquote>

          <div className="mt-12 space-y-4">
            <p className="text-lg text-slate-700">
              You don't need more job tips. You need clarity, momentum, and a team that has your back.
            </p>
            <p className="text-xl font-semibold text-slate-900">
              Welcome to InterRoom. Let's find your job and your confidence together.
            </p>
          </div>
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
          <h2 className="text-3xl font-semibold mb-8">What We Do</h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
              <span className="text-slate-700 text-lg">
                We surface 300,000+ roles directly from company websites jobs you won't find on LinkedIn.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
              <span className="text-slate-700 text-lg">
                We pair you with a coach who's done your job before—not just someone who talks about it.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
              <span className="text-slate-700 text-lg">
                We work with you every week - real feedback, no fluff, no generic advice.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" />
              <span className="text-slate-700 text-lg">And we don't get paid until you get hired.</span>
            </div>
          </div>

          <p className="text-lg text-slate-700 mb-6">
            It's like having a personal trainer for your career. Someone in your corner who knows what it takes and
            doesn't let you quit when things get hard.
          </p>

          <p className="text-lg text-slate-700 font-medium">
            We cut through the noise, focus on what works, and help you land the right role faster.
          </p>
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
