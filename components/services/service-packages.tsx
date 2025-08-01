"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ServicePackages() {
  const [isAcceleratorModalOpen, setIsAcceleratorModalOpen] = useState(false)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Choose What Works for You</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select the service package that best fits your needs and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Accelerator Bundle */}
          <Card className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-violet-200 flex flex-col">
            <CardHeader className="pb-4 flex-grow">
              <CardTitle className="text-2xl">Accelerator Bundle</CardTitle>
              <div className="mt-4">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Pay as you go
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-sm">Job Outsourcing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-sm">Resume Rewrite and LinkedIn Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-sm">InterRoom Chat Support</span>
                </li>
                <li className="flex items-center">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 shrink-0" />
                  <span className="text-sm text-slate-500 line-through">Interview Coaching</span>
                </li>
              </ul>
              <Dialog open={isAcceleratorModalOpen} onOpenChange={setIsAcceleratorModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full bg-transparent">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScyLa08AAKV2JDQvKutQgFWOP2U6NVkSbDCvJomNxT80RzXPg/viewform?embedded=true"
                    width="640"
                    height="1748"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="w-full"
                  >
                    Loading…
                  </iframe>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Full Support Package */}
          <Card className="border border-violet-200 bg-gradient-to-br from-violet-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col">
            <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMMENDED
            </div>
            <CardHeader className="pb-4 flex-grow">
              <CardTitle className="text-2xl">Full Support Package</CardTitle>
              <div className="mt-4">
                <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                  Success-Based Model
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-sm">Job Outsourcing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-sm">Resume Rewrite and LinkedIn Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-sm">InterRoom Chat Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span className="text-sm">Interview Coaching</span>
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
