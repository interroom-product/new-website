"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ir-off-black via-ir-charcoal to-ir-off-black p-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-ir-primary/20 text-ir-primary px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-5 h-5 mr-2" />
            Quiz Complete!
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Perfect Match</h1>
          <p className="text-xl text-gray-300">Based on your responses, here's your recommended plan</p>
        </div>

        {/* Recommended Plan */}
        <Card className="bg-gradient-to-r from-ir-primary/20 to-ir-medium/20 border-ir-primary/50 mb-8 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <div className="bg-ir-medium text-white px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
          </div>

          <CardHeader>
            <CardTitle className="text-3xl text-white flex items-center">
              <Star className="w-8 h-8 text-ir-medium mr-3" />
              Full Service Bundle
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-gray-300 text-lg">
              Complete career acceleration with dedicated coaching and full application management
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">100+ job applications per month</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">Custom resume for each application</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">Dedicated career coach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">Interview preparation & coaching</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">Offer negotiation support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">Weekly progress reports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">LinkedIn optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-ir-primary">Unlimited support & revisions</span>
                </div>
              </div>
            </div>

            {/* Timeline & Pricing */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">6-8 weeks</div>
                  <div className="text-gray-300">Expected timeline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">$2,997</div>
                  <div className="text-gray-300">One-time investment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">Success fee</div>
                  <div className="text-gray-300">Only when you get hired</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/start" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-ir-primary to-ir-medium hover:from-ir-primary/90 hover:to-ir-medium/90 text-white py-4 text-lg font-semibold"
                >
                  Start Now - $2,997
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/book-call" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-ir-primary text-ir-primary hover:bg-ir-primary hover:text-white py-4 text-lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Intro Call
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Option */}
        <Card className="bg-ir-charcoal/50 border-ir-dark-stone">
          <CardHeader>
            <CardTitle className="text-xl text-white">Resume + Job Matching (A La Carte)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">Professional resume rewrite and targeted job matching service</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">$997</span>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Elements */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">✅ 30-day money-back guarantee • ✅ No hidden fees • ✅ Cancel anytime</p>
          <p className="text-sm text-gray-500">
            Join 1,000+ professionals who've accelerated their careers with InterRoom
          </p>
        </div>
      </div>
    </div>
  )
}
