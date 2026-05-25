import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  FileText,
  Users,
  MessageSquare,
  Award,
  HandshakeIcon,
  BookOpen,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Free Job Search Webinar Series",
  description:
    "Join Interroom's free webinar series covering career pivots, resume optimization, networking, interview prep, and offer negotiation. Plus get free access to our Job Search Accelerator guide.",
}

const TYPEFORM_URL = "https://form.typeform.com/to/XjrQuz2E"

const webinarTopics = [
  {
    icon: Target,
    title: "Career Pivots & Target Role",
    description: "Discover how to successfully transition careers and identify your ideal role",
  },
  {
    icon: FileText,
    title: "Resume & LinkedIn Optimization",
    description: "Craft compelling resumes and LinkedIn profiles that get noticed by recruiters",
  },
  {
    icon: Users,
    title: "Networking Strategies",
    description: "Build meaningful professional connections that lead to opportunities",
  },
  {
    icon: MessageSquare,
    title: "Getting Interviews",
    description: "Learn proven strategies to land more interviews at your target companies",
  },
  {
    icon: Award,
    title: "Interview Preparation",
    description: "Master the skills and confidence needed to ace any interview format",
  },
  {
    icon: HandshakeIcon,
    title: "Offer Negotiation",
    description: "Negotiate better compensation packages and secure the offer you deserve",
  },
]

export default function WebinarRegistrationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto">
          <Link href="/" className="inline-block">
            <Image
              src="/interroom-logo.png"
              alt="InterRoom Logo"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-violet-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-violet-700 bg-violet-100 rounded-full">
              Free Webinar Series
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
              Accelerate Your Job Search
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join our comprehensive webinar series designed to help jobseekers navigate every stage of the job search
              process — from finding your direction to negotiating your offer.
            </p>
            <Link href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-base sm:text-lg px-8 py-4 h-auto"
              >
                Register Now — It&apos;s Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our webinar series covers the complete job search journey with actionable strategies you can implement
              immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {webinarTopics.map((topic) => (
              <div
                key={topic.title}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4">
                  <topic.icon className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
                <p className="text-muted-foreground text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 md:py-24 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-violet-600 flex items-center justify-center shrink-0">
              <BookOpen className="h-12 w-12 md:h-16 md:w-16 text-white" />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-violet-700 bg-violet-200 rounded-full uppercase tracking-wide">
                Bonus Included
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Free Job Search Accelerator Guide
              </h2>
              <p className="text-muted-foreground mb-6">
                When you register, you&apos;ll also receive complimentary access to a section of Interroom&apos;s
                complete Job Search Accelerator guide — packed with templates, scripts, and strategies to fast-track
                your job search.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-violet-600 shrink-0" />
                  <span>Actionable templates and frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-violet-600 shrink-0" />
                  <span>Proven strategies from career experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-violet-600 shrink-0" />
                  <span>Immediate access upon registration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of jobseekers who have accelerated their career journey with Interroom. Register now —
              it&apos;s completely free.
            </p>
            <Link href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-base sm:text-lg px-8 py-4 h-auto"
              >
                Register for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Interroom. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
