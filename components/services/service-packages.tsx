import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function ServicePackages() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Choose What Works for You</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select the service package that best fits your needs and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-br-lg rounded-tl-lg">
              ONE-TIME FEE
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Accelerator Bundle</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Resume Rewrite + Autopilot Job Applications with a simple one-time fee model—no commitments, just
                results.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span>Signal-boosting resume & LinkedIn optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span>Automated job application system</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span>Weekly progress reports</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-violet-200 bg-gradient-to-br from-violet-50 to-white shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMMENDED
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Full Support Package</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Job Outsourcing + Resume Rewrite + Elite Coaching. This option is success-based, meaning we only get
                paid when you land the right role at the right salary. Your success is our success.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span>All features from basic package</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span>Dedicated interview coach</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span>Success-based payment model</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Unified CTA Section */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6 text-lg">Ready to find out which package is right for you?</p>
          <Link href="/survey">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 px-8">
              Take Our Quick Assessment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="text-sm text-slate-500 mt-3">
            Complete our 2-minute survey to get a personalized recommendation
          </p>
        </div>
      </div>
    </section>
  )
}
