import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Brain, FileText, Mic, TrendingUp, Clock, Target, DollarSign } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to Get Hired.{" "}
            <span className="bg-gradient-to-r from-ir-primary to-ir-medium bg-clip-text text-transparent">
              In One Place.
            </span>
          </h1>
        </div>
      </section>

      {/* Section 1: Overview of the InterRoom Advantage */}
      <section className="py-16 px-4 bg-gradient-to-b from-ir-pastel/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Added missing section title */}
          <div className="inline-flex items-center bg-ir-primary/10 text-ir-primary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Our Approach</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">We don't just help you look good. We get you hired.</h2>
          <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
            A full-service job search partner — powered by AI, driven by people, and paid only when you succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Success-based pricing</h3>
              <p className="text-gray-600 text-sm">Pay only when you land the job</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3× higher interview rates</h3>
              <p className="text-gray-600 text-sm">Proven results that speak for themselves</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Job search done for you</h3>
              <p className="text-gray-600 text-sm">Focus on interviews, we handle the rest</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Services Grid - Updated */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 font-light">Elegant solutions for every step of your job search</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Combined Job Sourcing & Application Submission */}
            <Card className="p-8 border border-gray-200 hover:border-ir-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-ir-primary to-ir-medium rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Sourcing & Application Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  We find targeted roles (even unlisted ones) and handle custom applications sent on your behalf every
                  week.
                </p>
              </CardContent>
            </Card>

            {/* Resume + LinkedIn Optimization */}
            <Card className="p-8 border border-gray-200 hover:border-ir-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-ir-medium to-ir-neutral rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resume + LinkedIn Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Keyword-optimized. Role-specific. Designed to get callbacks.
                </p>
              </CardContent>
            </Card>

            {/* Interview Coaching */}
            <Card className="p-8 border border-gray-200 hover:border-ir-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-ir-primary to-ir-neutral rounded-xl flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interview Coaching</h3>
                <p className="text-gray-600 leading-relaxed">
                  1-on-1 sessions, weekly check-ins, mock interviews, and strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Results Block */}
      <section className="py-20 px-4 bg-gradient-to-b from-ir-pastel/10 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-ir-primary mb-4">
                <Clock className="w-12 h-12 mx-auto mb-2" />
                &lt;2 months
              </div>
              <p className="text-xl text-gray-700 font-medium">Clients find jobs in under 2 months</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-ir-primary mb-4">
                <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                +44%
              </div>
              <p className="text-xl text-gray-700 font-medium">Average comp increase</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-ir-primary mb-4">
                <Target className="w-12 h-12 mx-auto mb-2" />
                3×
              </div>
              <p className="text-xl text-gray-700 font-medium">Higher screener rate vs. DIY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing & Success-Based Model */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">You only pay when you get hired.</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No upfront costs</h3>
              <p className="text-gray-600 text-sm">Start immediately with zero risk</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flat success fee</h3>
              <p className="text-gray-600 text-sm">Based on your first-year salary</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Aligned with your success</h3>
              <p className="text-gray-600 text-sm">Transparent. Fair. Results-driven.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-ir-primary to-ir-medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let us run your job search. You focus on landing the role.
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Join thousands who've transformed their careers with InterRoom
          </p>

          <Link href="/quiz">
            <Button
              size="lg"
              className="bg-white text-ir-primary hover:bg-gray-100 px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start for Free
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>

          <p className="text-white/80 mt-6 text-sm">No credit card required • Success-based pricing</p>
        </div>
      </section>
    </div>
  )
}
