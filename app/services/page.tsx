import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Brain, FileText, Mic, TrendingUp, Clock, Target, DollarSign } from "lucide-react"
import Link from "next/link"
import ResultsTicker from "@/components/results-ticker"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to Get Hired.{" "}
            <span className="bg-gradient-to-r from-ir-primary to-ir-accent bg-clip-text text-transparent">
              In One Place.
            </span>
          </h1>
        </div>
      </section>

      {/* Section 1: Overview of the InterRoom Advantage */}
      <section className="py-16 px-4 bg-ir-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">We don't just help you look good. We get you hired.</h2>
          <p className="text-lg text-gray-500 mb-12 font-light">
            A full-service job search partner — powered by AI, driven by people, and paid only when you succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-ir-success/20 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-ir-success" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Success-based pricing</h3>
              <p className="text-gray-500 text-sm">Pay only when you land the job</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-ir-info/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-ir-info" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3× higher interview rates</h3>
              <p className="text-gray-500 text-sm">Proven results that speak for themselves</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-ir-primary/20 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-ir-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Job search done for you</h3>
              <p className="text-gray-500 text-sm">Focus on interviews, we handle the rest</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Ticker */}
      <ResultsTicker />

      {/* Section 2: Core Services Grid - Updated */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-lg text-gray-500 font-light">Elegant solutions for every step of your job search</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Combined Job Sourcing & Application Submission */}
            <Card className="p-6 border-0 shadow-soft hover:shadow-glow transition-all duration-300 rounded-xl">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-ir-primary to-ir-accent rounded-full flex items-center justify-center mb-5">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Job Sourcing & Application Management</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  We find targeted roles (even unlisted ones) and handle custom applications sent on your behalf every
                  week.
                </p>
              </CardContent>
            </Card>

            {/* Resume + LinkedIn Optimization */}
            <Card className="p-6 border-0 shadow-soft hover:shadow-glow transition-all duration-300 rounded-xl">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-ir-accent to-ir-info rounded-full flex items-center justify-center mb-5">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Resume + LinkedIn Optimization</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Keyword-optimized. Role-specific. Designed to get callbacks.
                </p>
              </CardContent>
            </Card>

            {/* Interview Coaching */}
            <Card className="p-6 border-0 shadow-soft hover:shadow-glow transition-all duration-300 rounded-xl">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-ir-info to-ir-primary rounded-full flex items-center justify-center mb-5">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Interview Coaching</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  1-on-1 sessions, weekly check-ins, mock interviews, and strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Results Block */}
      <section className="py-20 px-4 bg-ir-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ir-primary mb-3">
                <Clock className="w-10 h-10 mx-auto mb-2" />
                &lt;2 months
              </div>
              <p className="text-lg text-gray-700 font-medium">Clients find jobs in under 2 months</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ir-accent mb-3">
                <TrendingUp className="w-10 h-10 mx-auto mb-2" />
                +44%
              </div>
              <p className="text-lg text-gray-700 font-medium">Average comp increase</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ir-info mb-3">
                <Target className="w-10 h-10 mx-auto mb-2" />
                3×
              </div>
              <p className="text-lg text-gray-700 font-medium">Higher screener rate vs. DIY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing & Success-Based Model */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">You only pay when you get hired.</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-ir-success/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-ir-success" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No upfront costs</h3>
              <p className="text-gray-500 text-sm">Start immediately with zero risk</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-ir-info/20 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-ir-info" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flat success fee</h3>
              <p className="text-gray-500 text-sm">Based on your first-year salary</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-ir-primary/20 rounded-full flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-ir-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Aligned with your success</h3>
              <p className="text-gray-500 text-sm">Transparent. Fair. Results-driven.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-ir-primary to-ir-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let us run your job search. You focus on landing the role.
          </h2>
          <p className="text-lg text-white/90 mb-8 font-light">
            Join thousands who've transformed their careers with InterRoom
          </p>

          <Link href="/quiz">
            <Button
              size="lg"
              className="bg-white text-ir-primary hover:bg-gray-50 px-10 py-5 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-soft"
            >
              Start for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <p className="text-white/80 mt-5 text-sm">No credit card required • Success-based pricing</p>
        </div>
      </section>
    </div>
  )
}
