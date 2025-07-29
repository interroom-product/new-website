import type React from "react"
import type { Metadata } from "next"
import { CheckCircle, Users, Heart, MessageSquare, Target, Zap, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { lazy } from "react"

// Lazy load heavy components if they exist
const LazyComponent = lazy(() => import("@/components/heavy-component"))

export const metadata: Metadata = {
  title: "About InterRoom - Your Job Search Partner",
  description:
    "Learn about InterRoom's mission to transform job searching from a lonely grind into a supported journey with real results. Get personalized job search support, resume optimization, and interview preparation.",
  keywords: ["job search", "career coaching", "resume optimization", "interview preparation", "job placement"],
  openGraph: {
    title: "About InterRoom - Your Job Search Partner",
    description: "Transform your job search with personalized support and proven strategies.",
    type: "website",
    url: "https://interroom.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "InterRoom - Your Job Search Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About InterRoom - Your Job Search Partner",
    description: "Transform your job search with personalized support and proven strategies.",
    images: ["/twitter-about.jpg"],
  },
}

// Extract data to constants for better maintainability
const TIMELINE_EVENTS = [
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
] as const

const VALUES = [
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
] as const

const DIFFERENTIATORS = [
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
] as const

const FEATURES = [
  "Tell you what's actually holding you back",
  "Push you forward when rejection makes you want to stop",
  "Help you fix your resume and LinkedIn with copy that works",
  "Apply with you, not just 'advise' you",
  "Prep you for interviews like we're on your team—because we are",
  "Back you in salary negotiations with confidence",
] as const

// Reusable components for better maintainability
interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center h-full transition-shadow hover:shadow-md">
      <CardContent className="p-8">
        <Icon className="h-12 w-12 text-violet-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}

interface TimelineEventProps {
  event: (typeof TIMELINE_EVENTS)[number]
  index: number
}

function TimelineEvent({ event, index }: TimelineEventProps) {
  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0">
        <div
          className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-semibold"
          aria-label={`Step ${index + 1}`}
        >
          {index + 1}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center space-x-4 mb-2">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <time className="text-sm text-slate-500 bg-slate-200 px-2 py-1 rounded" dateTime={event.year}>
            {event.year}
          </time>
        </div>
        <p className="text-slate-600">{event.description}</p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4" aria-labelledby="hero-heading">
          <div className="container mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
              You Don't Need More Job Tips. You Need a Partner.
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Most people try to job search alone. They binge YouTube tips, send resumes into the void, ask friends for
              feedback, and get stuck in their heads. It's exhausting and it rarely works.
            </p>
            <div className="bg-slate-100 rounded-lg p-6 max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-slate-700 mb-4">
                "Anybody can watch videos or practice with a friend. But what I really needed was someone who stuck with
                me when I got rejected, who reminded me I'm still capable. You were like a partner getting me through
                the ups and downs."
              </blockquote>
              <cite className="text-sm font-medium text-slate-600">— Zeeshan, InterRoom Client</cite>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 bg-slate-50" aria-labelledby="story-heading">
          <div className="container mx-auto max-w-4xl">
            <h2 id="story-heading" className="text-3xl font-semibold mb-8">
              InterRoom was born out of frustration.
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <p>
                During COVID, our founders were doing everything "right" and still couldn't land interviews. It wasn't
                until they started recording mock interviews and sending them to friends that things shifted. A few
                pieces of honest, tactical feedback led to real changes and real results.
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
        <section className="py-16 px-4" aria-labelledby="services-heading">
          <div className="container mx-auto max-w-4xl">
            <h2 id="services-heading" className="text-3xl font-semibold mb-6">
              We're Not Here to Hype You Up
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl">
              We don't give you generic advice. We give you a real partner in your search. We're not a coaching
              platform. We're not AI. We're not charging you $10K up front like bootcamps or other job services.
            </p>

            <div className="bg-slate-100 rounded-lg p-6 mb-8">
              <blockquote className="text-lg italic text-slate-700 mb-4">
                "It's grueling, man. So many rejections. Tough interviews. But having someone believe in me every week,
                remind me why I started, that's what kept me going. That was the real value."
              </blockquote>
              <cite className="text-sm font-medium text-slate-600">— Zeeshan, InterRoom Client</cite>
            </div>

            <p className="text-lg font-medium text-slate-800 mb-8">
              We're real people who do the work with you until you get hired.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-violet-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 px-4 bg-slate-50" aria-labelledby="differentiators-heading">
          <div className="container mx-auto max-w-6xl">
            <h2 id="differentiators-heading" className="text-3xl font-semibold mb-12 text-center">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {DIFFERENTIATORS.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4" aria-labelledby="values-heading">
          <div className="container mx-auto max-w-6xl">
            <h2 id="values-heading" className="text-3xl font-semibold mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {VALUES.map((value, index) => (
                <FeatureCard key={index} {...value} />
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-slate-700 mb-4">
                You're not unqualified. You're not behind. You're just not supposed to do this alone.
              </p>
              <p className="text-lg text-slate-700 font-medium">
                You don't need more job tips. You need clarity, momentum, and a team that has your back.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 px-4 bg-slate-50" aria-labelledby="journey-heading">
          <div className="container mx-auto max-w-4xl">
            <h2 id="journey-heading" className="text-3xl font-semibold mb-12 text-center">
              Our Journey
            </h2>
            <div className="space-y-8" role="list">
              {TIMELINE_EVENTS.map((event, index) => (
                <div key={index} role="listitem">
                  <TimelineEvent event={event} index={index} />
                </div>
              ))}
            </div>
            <div className="text-center mt-12 pt-8 border-t border-slate-200">
              <p className="text-lg text-slate-700 mb-2">Welcome to InterRoom.</p>
              <p className="text-lg text-slate-700 font-medium">Let's find your job and your confidence together.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
