"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

// Simple modal component to avoid Dialog issues
function PurchaseModal({
  isOpen,
  onClose,
  onCopyEmail,
  emailCopied,
}: {
  isOpen: boolean
  onClose: () => void
  onCopyEmail: () => void
  emailCopied: boolean
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-slate-800 mb-4">Ready to Get Started?</h3>
          <p className="text-slate-600 leading-relaxed">
            That's great! We're putting the final touches on our automated checkout system.
            <br />
            <br />
            In the meantime, please send a quick email to{" "}
            <span className="font-medium text-violet-600">ash@interroom.me</span> with the name of the service you're
            interested in, and we'll get you set up right away.
            <br />
            <br />
            We can't wait to work with you!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={onCopyEmail}
            className="bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center gap-2"
          >
            {emailCopied ? (
              <>
                <Check className="h-4 w-4" />
                Email Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Email Address
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ServiceDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ash@interroom.me")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea")
      textArea.value = "ash@interroom.me"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCopiedEmail(false)
  }

  return (
    <>
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Service Details</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dive deeper into each service to understand how we can help accelerate your career journey.
            </p>
          </div>

          <Tabs defaultValue="job-outsourcing" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="job-outsourcing">Job Applications</TabsTrigger>
              <TabsTrigger value="resume-rewrite">Resume & LinkedIn</TabsTrigger>
              <TabsTrigger value="personalized-coaching">Interview Coaching</TabsTrigger>
            </TabsList>

            <TabsContent value="job-outsourcing">
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
                    Do you really want to spend hours on job applications every week? Let us handle the search while you
                    focus on something more productive—or just more fun. Track progress via your client portal.
                  </p>
                  <ul className="space-y-4 mb-6">
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
                        <span className="font-medium">Weekly updates</span> on application status and new opportunities
                      </div>
                    </li>
                  </ul>
                  <Button
                    onClick={openModal}
                    className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-md"
                  >
                    Get This Service
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resume-rewrite">
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
                  <ul className="space-y-4 mb-6">
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
                    className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-md"
                  >
                    Get This Service
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personalized-coaching">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                  <iframe
                    src="/animations/confidence-meter.html"
                    style={{
                      width: "100%",
                      height: "450px",
                      border: "none",
                      transform: "scale(1.0)",
                      transformOrigin: "top left",
                    }}
                    title="Confidence Meter Animation"
                    scrolling="no"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Train with industry veterans for interview mastery</h3>
                  <p className="text-slate-600 mb-6">
                    The right prep changes everything. With a dedicated team in your corner, we tailor coaching to your
                    needs so you can land the best offer possible.
                  </p>
                  <ul className="space-y-4 mb-6">
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
                        <span className="font-medium">Personalized feedback</span> to improve your interview performance
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-violet-600 text-sm font-medium">3</span>
                      </div>
                      <div>
                        <span className="font-medium">Weekly check-ins</span> to track progress and adjust strategy
                      </div>
                    </li>
                  </ul>
                  <Button
                    onClick={openModal}
                    className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-md"
                  >
                    Get This Service
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Modal */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onCopyEmail={handleCopyEmail}
        emailCopied={copiedEmail}
      />
    </>
  )
}
