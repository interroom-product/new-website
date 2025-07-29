"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, X } from "lucide-react"
import Link from "next/link"

export default function ServicePackages() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Choose Your Package</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select the support level that matches your needs and budget. Both packages include our core job search
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Accelerator Bundle */}
          <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-br-lg rounded-tl-lg">
              Pay as you go
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Accelerator Bundle</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Job Outsourcing + Resume Write & Linkedin Optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ul className="space-y-3 mb-6 flex-grow">
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
                  <span>Access to InterRoom Client Portal 1.0</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="line-through text-slate-400">Dedicated interview coach</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="line-through text-slate-400">Success-based payment model</span>
                </li>
              </ul>
              <Link href="/survey">
                <Button variant="outline" className="w-full bg-transparent">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Full Support Package */}
          <Card className="border border-violet-200 bg-gradient-to-br from-violet-50 to-white shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMMENDED
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Full Support Package</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Job Outsourcing + Resume Rewrite & Linkedin Optimization + Career Coaching. This option is
                success-based, meaning we only get paid when you land the right role at the right salary. Your success
                is our success.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ul className="space-y-3 mb-6 flex-grow">
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
              <Link href="/survey">
                <Button className="w-full bg-violet-600 hover:bg-violet-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Job Search?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Take our quick assessment to see which package is right for you and get started on your journey to landing
            your dream job.
          </p>
          <Link href="/survey">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              Take Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
