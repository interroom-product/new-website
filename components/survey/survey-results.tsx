"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

interface Recommendation {
  type: string
  title: string
}

export default function SurveyResults() {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedRecommendation = localStorage.getItem("recommendation")
    if (storedRecommendation) {
      setRecommendation(JSON.parse(storedRecommendation))
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white min-h-screen">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Analyzing your responses...</p>
        </div>
      </section>
    )
  }

  if (!recommendation) {
    return (
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white min-h-screen">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-slate-600">No recommendation found. Please retake the survey.</p>
          <Link href="/survey">
            <Button className="mt-4 bg-violet-600 hover:bg-violet-700">Retake Survey</Button>
          </Link>
        </div>
      </section>
    )
  }

  const getRecommendationDetails = (type: string) => {
    switch (type) {
      case "bundle":
        return {
          title: "Full-Service Bundle Package",
          description: "You're a strong fit for our comprehensive, full-service package!",
          features: [
            "End-to-end job search management",
            "Professional resume and LinkedIn optimization",
            "Dedicated interview coaching",
            "Application submission to 100+ roles",
            "Salary negotiation support",
            "Success-based pricing model",
          ],
          price: "Success-based pricing",
          cta: "Schedule Call with Expert",
          highlight: true,
        }
      case "resume":
        return {
          title: "Resume Rewrite Service",
          description: "Perfect for professionals who need a standout resume and LinkedIn profile.",
          features: [
            "ATS-optimized resume rewrite",
            "LinkedIn profile enhancement",
            "Industry-specific keyword optimization",
            "Achievement-focused content",
            "2 rounds of revisions included",
          ],
          price: "One-time payment",
          cta: "Get Started with Resume Service",
          highlight: false,
        }
      case "outsourcing":
        return {
          title: "Job Outsourcing Service",
          description: "Let us handle the job search and applications while you focus on what matters.",
          features: [
            "Targeted job search strategy",
            "Application to 50+ relevant roles",
            "Weekly progress reports",
            "Application tracking and follow-up",
            "Interview scheduling coordination",
          ],
          price: "Pay-as-you-go model",
          cta: "Start Job Outsourcing",
          highlight: false,
        }
      case "combo":
        return {
          title: "Combo Package",
          description: "The perfect combination of resume optimization and job search support.",
          features: [
            "Professional resume rewrite",
            "LinkedIn profile optimization",
            "Targeted job applications",
            "Application tracking",
            "Interview preparation resources",
          ],
          price: "Bundle pricing available",
          cta: "Get Combo Package",
          highlight: false,
        }
      case "coaching":
        return {
          title: "Coaching Sessions",
          description: "Perfect for professionals who want personalized career guidance and interview preparation.",
          features: [
            "1-on-1 career coaching sessions",
            "Interview preparation and practice",
            "Career strategy development",
            "Resume and LinkedIn review",
            "Salary negotiation guidance",
          ],
          price: "Per session pricing",
          cta: "Book Coaching Session",
          highlight: false,
        }
      default:
        return null
    }
  }

  const details = getRecommendationDetails(recommendation.type)

  if (!details) return null

  const isBundle = recommendation.type === "bundle"

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-4">
            <Star className="h-8 w-8 text-violet-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Your Perfect Match!</h1>
          <p className="text-slate-600 text-lg">Based on your responses, we recommend:</p>
        </div>

        <Card className={`shadow-xl border-0 ${details.highlight ? "ring-2 ring-violet-600" : ""}`}>
          {details.highlight && (
            <div className="bg-violet-600 text-white text-center py-2 rounded-t-lg">
              <Badge variant="secondary" className="bg-white text-violet-600">
                RECOMMENDED
              </Badge>
            </div>
          )}
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">{details.title}</CardTitle>
            <CardDescription className="text-lg">{details.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium mb-4">What's included:</h3>
              <div className="grid gap-3">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-violet-600 mr-3 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-slate-600">Pricing</p>
                  <p className="text-lg font-medium">{details.price}</p>
                </div>
                {isBundle && (
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Success Rate</p>
                    <p className="text-lg font-medium text-violet-600">90% within 2 months</p>
                  </div>
                )}
              </div>

              {/* Layout A: Bundle Package */}
              {isBundle ? (
                <div className="space-y-4">
                  {/* Primary CTA - Calendly Link */}
                  <a
                    href="https://calendly.com/ash-rjc/intro-call-with-interroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                      {details.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>

                  {/* Secondary CTA - Apply Directly Link */}
                  <div className="text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-violet-600 hover:text-violet-700 underline text-sm font-medium transition-colors duration-200 cursor-pointer">
                          Or, apply directly
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] h-[85vh] p-0 overflow-hidden">
                        <DialogHeader className="p-6 pb-4 border-b bg-white">
                          <DialogTitle className="text-xl font-semibold text-gray-900">
                            Apply for Our Services
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 p-6 pt-4 overflow-hidden bg-white">
                          <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200">
                            <iframe
                              src="https://docs.google.com/forms/d/e/1FAIpQLScyLa08AAKV2JDQvKutQgFWOP2U6NVkSbDCvJomNxT80RzXPg/viewform?embedded=true"
                              width="100%"
                              height="100%"
                              frameBorder="0"
                              marginHeight={0}
                              marginWidth={0}
                              className="w-full h-full"
                              title="Application Form"
                              loading="lazy"
                            >
                              Loading application form...
                            </iframe>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ) : (
                /* Layout B: A La Carte Services */
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                      {details.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] h-[85vh] p-0 overflow-hidden">
                    <DialogHeader className="p-6 pb-4 border-b bg-white">
                      <DialogTitle className="text-xl font-semibold text-gray-900">Apply for Our Services</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 p-6 pt-4 overflow-hidden bg-white">
                      <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200">
                        <iframe
                          src="https://docs.google.com/forms/d/e/1FAIpQLScyLa08AAKV2JDQvKutQgFWOP2U6NVkSbDCvJomNxT80RzXPg/viewform?embedded=true"
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          marginHeight={0}
                          marginWidth={0}
                          className="w-full h-full"
                          title="Application Form"
                          loading="lazy"
                        >
                          Loading application form...
                        </iframe>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-slate-600 mb-2">Not quite right?</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link href="/survey">
                  <Button variant="outline" size="sm">
                    Retake Survey
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {isBundle && (
          <div className="mt-8 text-center">
            <Card className="bg-violet-50 border-violet-200">
              <CardContent className="pt-6">
                <h3 className="font-medium mb-2">Why you're perfect for our Bundle:</h3>
                <p className="text-slate-600 text-sm">
                  Based on your experience level, compensation target, and career goals, you qualify for our most
                  comprehensive service. Our full-service approach has helped professionals like you achieve an average
                  44% compensation increase.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
