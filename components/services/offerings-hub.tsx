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
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Find the Right Support For You</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose from comprehensive packages or individual services designed to accelerate your career trajectory.
            </p>
          </div>

          <Tabs defaultValue="packages" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-white border border-slate-200">
              <TabsTrigger
                value="packages"
                className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
              >
                Bundled Packages
              </TabsTrigger>
              <TabsTrigger
                value="individual"
                className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
              >
                Individual Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="packages">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Accelerator Bundle */}
                <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-br-lg rounded-tl-lg">
                    Pay as you go
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">Accelerator Bundle</CardTitle>
                    <CardDescription className="text-slate-600 mt-2">
                      Job Outsourcing + Resume Write & Linkedin Optimization
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
                        <span>Access to InterRoom Client Portal 1.0</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Full Support Package */}
                <Card className="border border-violet-200 bg-gradient-to-br from-violet-50 to-white shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    RECOMMENDED
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">Full Support Package</CardTitle>
                    <CardDescription className="text-slate-600 mt-2">
                      Job Outsourcing + Resume Rewrite & Linkedin Optimization + Career Coaching. This option is
                      success-based, meaning we only get paid when you land the right role at the right salary. Your
                      success is our success.
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

              {/* Unified CTA Section for Packages */}
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
            </TabsContent>

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
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Targeted job search</span> based on your preferences and skills
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Application submission</span> to both listed and unlisted roles
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Weekly updates</span> on application status and new
                          opportunities
                        </div>
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
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                    <iframe
                      src="/animations/linkedin-inbox.html"
                      style={{
                        width: "100%",
                        height: "510px",
                        border: "none",
                        transform: "scale(1.0)",
                        transformOrigin: "top left",
                      }}
                      title="LinkedIn Inbox Animation"
                      scrolling="no"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-4">Make your profile impossible to ignore</h3>
                    <p className="text-slate-600 mb-6">
                      AI can optimize, but humans get you hired. We mix smart tech with real expertise to sharpen your
                      resume, beat the bots, and grab recruiters' attention.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">1</span>
                        </div>
                        <div>
                          <span className="font-medium">ATS optimization</span> to ensure your resume passes automated
                          filters
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Achievement-focused content</span> that highlights your impact
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">3</span>
                        </div>
                        <div>
                          <span className="font-medium">LinkedIn profile enhancement</span> to attract recruiters
                        </div>
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
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Mock interviews</span> with industry-specific questions
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Weekly check-ins</span> to track progress and adjust strategy
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-violet-600 text-sm font-medium">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Salary negotiation support</span> to maximize your compensation
                        </div>
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
          </Tabs>
        </div>
      </section>

      {/* Modal */}
      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
