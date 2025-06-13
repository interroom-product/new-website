"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star, ArrowRight, Calendar, DollarSign, Clock } from "lucide-react"
import Link from "next/link"

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-ir-neutral-100 p-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-ir-success/20 text-ir-success px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-5 h-5 mr-2" />
            Congratulations! You Qualify
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ir-neutral-800 mb-4">
            You're Eligible for Success-Based Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Based on your responses, you qualify for our premium success-based bundle
          </p>
        </div>

        {/* Eligibility Confirmation */}
        <Card className="bg-gradient-to-r from-ir-success/10 to-ir-primary/10 border-ir-success/50 mb-8 shadow-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-ir-neutral-800 flex items-center">
              <Star className="w-6 h-6 text-ir-success mr-2" />
              Your Success-Based Bundle
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-gray-600 text-lg">
              You've been approved for our comprehensive career acceleration program with success-based pricing.
            </p>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-ir-neutral-800">Complete Service Package</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">100+ job applications per month</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">Custom resume for each application</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">LinkedIn profile optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">Dedicated career coach</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-ir-neutral-800">Premium Support</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">Interview preparation & coaching</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">Offer negotiation support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">Weekly strategy sessions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                    <span className="text-gray-600">Unlimited revisions & support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Structure */}
            <div className="bg-ir-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-ir-neutral-800 mb-4 text-center">
                Success-Based Pricing Structure
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="flex flex-col items-center">
                    <DollarSign className="w-8 h-8 text-ir-primary mb-2" />
                    <div className="text-xl font-bold text-ir-primary mb-1">$997</div>
                    <div className="text-gray-600 text-sm">Upfront deposit to secure your spot and begin services</div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-8 h-8 text-ir-accent mb-2" />
                    <div className="text-xl font-bold text-ir-accent mb-1">6-8 weeks</div>
                    <div className="text-gray-600 text-sm">Expected timeline to land your new role</div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <Star className="w-8 h-8 text-ir-success mb-2" />
                    <div className="text-xl font-bold text-ir-success mb-1">Success fee</div>
                    <div className="text-gray-600 text-sm">Remaining fee paid only when you get hired</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Guarantee */}
            <div className="bg-ir-success/10 border border-ir-success/20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-ir-success mr-2" />
                <h4 className="font-semibold text-ir-neutral-800">Success Guarantee</h4>
              </div>
              <p className="text-gray-600 text-sm">
                We're so confident in our process that we guarantee results. If you don't land a job within our agreed
                timeframe, we'll continue working with you at no additional cost until you do.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/start?service=bundle" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-ir-primary to-ir-accent hover:from-ir-primary/90 hover:to-ir-accent/90 text-white py-4 text-lg font-semibold rounded-full"
                >
                  Enroll Now - $997 Deposit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/book-call" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-ir-primary text-ir-primary hover:bg-ir-primary hover:text-white py-4 text-lg rounded-full"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Call First
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Why You Qualified */}
        <Card className="bg-ir-neutral-100 border-ir-neutral-300 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl text-ir-neutral-800">Why You Qualified</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Based on your quiz responses, you meet our criteria for success-based pricing:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                <span className="text-gray-600 text-sm">Target role aligns with our expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                <span className="text-gray-600 text-sm">Experience level matches our success criteria</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                <span className="text-gray-600 text-sm">Salary expectations are realistic and achievable</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-ir-success" />
                <span className="text-gray-600 text-sm">Location preferences have strong job market</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Elements */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">✅ Success guarantee • ✅ Dedicated coach • ✅ Pay only when hired</p>
          <p className="text-sm text-gray-400">
            Join 1,000+ professionals who've accelerated their careers with InterRoom's success-based program
          </p>
        </div>
      </div>
    </div>
  )
}
