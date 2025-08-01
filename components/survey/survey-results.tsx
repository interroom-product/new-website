"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

interface Recommendation {
  type: string
  title: string
}

// Simple modal component to avoid Dialog issues
function PurchaseModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 p-2">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Google Form Embed */}
        <div className="w-full h-[80vh] overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScyLa08AAKV2JDQvKutQgFWOP2U6NVkSbDCvJomNxT80RzXPg/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default function SurveyResults() {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
          title: "Full-Service Package",
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
      case "accelerator":
        return {
          title: "Accelerator Bundle",
          description:
            "The perfect combination of resume optimization and job search support with automated applications.",
          features: [
            "Professional resume rewrite",
            "LinkedIn profile optimization",
            "Automated job application system",
            "Weekly progress reports",
            "InterRoom Chat Support",
          ],
          price: "One-time payment",
          cta: "Get Accelerator Bundle",
          highlight: false,
        }
      case "coaching":
        return {
          title: "Interview Coaching Sessions",
          description: "Perfect for professionals who want personalized career guidance and interview preparation.",
          features: [
            "1-on-1 interview coaching sessions",
            "Interview preparation and practice",
            "Career strategy development",
            "Resume and LinkedIn review",
            "Salary negotiation guidance",
          ],
          price: "Per session pricing",
          cta: "Book Interview Coaching",
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
    <>
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

                    {/* Removed "Or, apply directly" link */}
                  </div>
                ) : (
                  /* Layout B: A La Carte Services */
                  <a
                    href="https://forms.gle/LN5ufYhqQVRpA2RC9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                      {details.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>

              <div className="text-center pt-4 border-t">
                <h3 className="text-lg font-medium text-slate-900 mb-3">Had something else in mind?</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                  Your recommendation is based on helping thousands of clients like you, but we're happy to discuss
                  other ways we can support your search. Tell us what you need, and we'll find the perfect fit.
                </p>

                {/* Primary CTA - Create Custom Plan */}
                <div className="mb-4">
                  <Button onClick={openModal} size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8">
                    Select Another Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Secondary CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/survey">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-slate-600 border-slate-300 hover:bg-slate-50 bg-transparent"
                    >
                      Retake Survey
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="text-slate-600 hover:bg-slate-50">
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
                    comprehensive service. Our full-service approach has helped professionals like you achieve an
                    average 44% compensation increase.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
