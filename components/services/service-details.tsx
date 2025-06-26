"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive services designed to streamline your job search process.
          </p>
        </div>

        {/* Move Dialog to wrap the entire Tabs section */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Tabs defaultValue="job-outsourcing" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="job-outsourcing">Job Outsourcing</TabsTrigger>
              <TabsTrigger value="resume-rewrite">Resume Rewrite and Linkedin Optimization</TabsTrigger>
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
                        <span className="font-medium">Weekly updates</span> on application status and new opportunities
                      </div>
                    </li>
                  </ul>
                  <DialogTrigger asChild>
                    <Button className="bg-violet-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-violet-600">
                      Purchase This Service
                    </Button>
                  </DialogTrigger>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resume-rewrite">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Person writing on paper"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
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
                  <DialogTrigger asChild>
                    <Button className="bg-violet-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-violet-600">
                      Purchase This Service
                    </Button>
                  </DialogTrigger>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="personalized-coaching">
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
                    The right prep changes everything. With a dedicated team in your corner, we tailor coaching to your
                    needs so you can land the best offer possible.
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
                  <DialogTrigger asChild>
                    <Button className="bg-violet-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-violet-600">
                      Purchase This Service
                    </Button>
                  </DialogTrigger>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* DialogContent moved outside of Tabs to ensure it's always rendered */}
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-medium text-slate-800">Ready to Get Started?</DialogTitle>
              <DialogDescription className="text-slate-600 mt-4 leading-relaxed">
                That's great! We're putting the final touches on our automated checkout system.
                <br />
                <br />
                In the meantime, please send a quick email to{" "}
                <span className="font-medium text-violet-600">ash@interroom.me</span> with the name of the service
                you're interested in, and we'll get you set up right away.
                <br />
                <br />
                We can't wait to work with you!
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-6">
              <Button
                onClick={handleCopyEmail}
                className="bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center gap-2"
              >
                {copiedEmail ? (
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
                onClick={() => setIsModalOpen(false)}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
