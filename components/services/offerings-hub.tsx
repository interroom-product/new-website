"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

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
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 p-6">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="mb-6 w-full h-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScyLa08AAKV2JDQvKutQgFWOP2U6NVkSbDCvJomNxT80RzXPg/viewform?embedded=true"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full"
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Find the Right Support For You</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose from comprehensive packages or individual services designed to accelerate your career trajectory.
            </p>
          </div>

          <Tabs defaultValue="job-outsourcing" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="job-outsourcing">Automated Job Outsourcing</TabsTrigger>
              <TabsTrigger value="resume-rewrite">Resume & LinkedIn Rewrite</TabsTrigger>
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
                <div className="rounded-xl overflow-hidden">
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
