"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

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
            frameBorder="0"
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

export default function OfferingsHub() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Choose Your Path to Success</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whether you're looking for personalized coaching or comprehensive done-for-you services, we have the
              perfect solution for your career goals.
            </p>
          </div>

          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="individual">Individual Services</TabsTrigger>
              <TabsTrigger value="packages">Service Packages</TabsTrigger>
            </TabsList>

            <TabsContent value="individual">
              <div className="space-y-16">
                {/* Job Outsourcing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/images/job-applications-portal.png"
                      alt="Job applications dashboard showing submitted applications"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-4">Automated applications and tracking, done for you</h3>
                    <p className="text-slate-600 mb-6">
                      Do you really want to spend hours on job applications every week? Let us handle the search while
                      you focus on something more productive—or just more fun. Track progress via your client portal.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Personalized job search based on your criteria</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Professional application submission to 50+ companies</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Real-time tracking dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Weekly progress reports</span>
                      </li>
                    </ul>
                    <Button
                      onClick={openModal}
                      className="bg-violet-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-violet-600"
                    >
                      Purchase This Service
                    </Button>
                  </div>
                </div>

                {/* Resume Rewrite */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-medium mb-4">Make your profile impossible to ignore</h3>
                    <p className="text-slate-600 mb-6">
                      AI can optimize, but humans get you hired. We mix smart tech with real expertise to sharpen your
                      resume, beat the bots, and grab recruiters' attention.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>ATS-optimized resume that passes screening systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Professional LinkedIn profile optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Industry-specific keyword optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Cover letter template creation</span>
                      </li>
                    </ul>
                    <Button
                      onClick={openModal}
                      className="bg-violet-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-violet-600"
                    >
                      Purchase This Service
                    </Button>
                  </div>
                  <div className="order-1 md:order-2 rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Person writing on paper"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Interview Coaching */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Video call coaching session"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-4">Train with industry veterans for interview mastery</h3>
                    <p className="text-slate-600 mb-6">
                      The right prep changes everything. With a dedicated team in your corner, we tailor coaching to
                      your needs so you can land the best offer possible.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>1-on-1 coaching with industry experts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Mock interviews with real-time feedback</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Company-specific interview preparation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Salary negotiation strategies</span>
                      </li>
                    </ul>
                    <Button
                      onClick={openModal}
                      className="bg-violet-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-violet-600"
                    >
                      Purchase This Service
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="packages">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Starter Package */}
                <Card className="relative">
                  <CardHeader>
                    <CardTitle className="text-xl">Starter Package</CardTitle>
                    <CardDescription>Perfect for getting started with your job search</CardDescription>
                    <div className="text-3xl font-bold">$299</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Resume optimization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>LinkedIn profile update</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>1 mock interview session</span>
                      </li>
                    </ul>
                    <Button onClick={openModal} className="w-full bg-violet-500 text-white hover:bg-violet-600">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                {/* Professional Package */}
                <Card className="relative border-violet-200 shadow-lg">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">Professional Package</CardTitle>
                    <CardDescription>Comprehensive support for serious job seekers</CardDescription>
                    <div className="text-3xl font-bold">$799</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Everything in Starter</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>25 job applications</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>3 interview coaching sessions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Weekly progress reports</span>
                      </li>
                    </ul>
                    <Button onClick={openModal} className="w-full bg-violet-600 text-white hover:bg-violet-700">
                      Choose Professional
                    </Button>
                  </CardContent>
                </Card>

                {/* Executive Package */}
                <Card className="relative">
                  <CardHeader>
                    <CardTitle className="text-xl">Executive Package</CardTitle>
                    <CardDescription>Premium service for executive-level positions</CardDescription>
                    <div className="text-3xl font-bold">$1,499</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Everything in Professional</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>50 job applications</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Unlimited coaching sessions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Salary negotiation support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Executive search consultation</span>
                      </li>
                    </ul>
                    <Button onClick={openModal} className="w-full bg-violet-500 text-white hover:bg-violet-600">
                      Go Executive
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <p className="text-slate-600 mb-6">
              Not sure which option is right for you? Let's talk about your specific needs.
            </p>
            <Link href="/survey">
              <Button variant="outline" size="lg">
                Take Our Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
