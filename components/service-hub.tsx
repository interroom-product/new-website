"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Zap, Target, CheckCircle, XCircle } from "lucide-react" // Import CheckCircle and XCircle
import Link from "next/link"
import Image from "next/image"

export default function ServiceHub() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-violet-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from individual services or comprehensive packages designed to accelerate your career trajectory.
          </p>
        </div>

        <Tabs defaultValue="individual" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-white border border-slate-200">
            <TabsTrigger
              value="individual"
              className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
            >
              Individual Services
            </TabsTrigger>
            <TabsTrigger value="bundles" className="data-[state=active]:bg-violet-600 data-[state=active]:text-white">
              Bundled Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Signal-Boosting Resume & Profile */}
              <Card className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-violet-200 group flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors duration-300">
                    <FileText className="h-6 w-6 text-violet-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">Resume Revamp & LinkedIn Overhaul</CardTitle>
                  <CardDescription className="text-slate-600">
                    AI can optimize, but humans get you hired. We mix smart tech with real expertise to sharpen your
                    resume and LinkedIn, beat the bots, and grab recruiters' attention.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Autopilot Job Application System */}
              <Card
                className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-violet-200 group relative overflow-hidden flex flex-col"
                onMouseEnter={() => setHoveredCard("autopilot")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-violet-600/10 to-violet-800/10 transition-opacity duration-300 ${hoveredCard === "autopilot" ? "opacity-100" : "opacity-0"}`}
                />
                <CardHeader className="pb-4 relative z-10 flex-grow">
                  <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors duration-300">
                    <Zap className="h-6 w-6 text-violet-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">Autopilot Job Application System</CardTitle>
                  <CardDescription className="text-slate-600">
                    Our system finds and applies for jobs for you in one place, freeing you to focus on the win: the
                    interview.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 mt-auto">
                  {hoveredCard === "autopilot" && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-violet-200 animate-in fade-in-0 duration-300">
                      <Image
                        src="/images/job-applications-portal.png"
                        alt="Client Portal Preview"
                        width={300}
                        height={200}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-2 bg-white/90 backdrop-blur-sm">
                        <p className="text-xs text-slate-600">Preview: Your personalized client portal</p>
                      </div>
                    </div>
                  )}
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Elite 1:1 Interview Simulation */}
              <Card className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-violet-200 group flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors duration-300">
                    <Target className="h-6 w-6 text-violet-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">Personalized Coaching</CardTitle>
                  <CardDescription className="text-slate-600">
                    The right prep changes everything. With a dedicated team in your corner, we tailor coaching to your
                    needs so you can get real feedback and land the best offer possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bundles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Accelerator Bundle */}
              <Card className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-violet-200 flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <CardTitle className="text-2xl">Accelerator Bundle</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">
                    Resume Rewrite + Autopilot Job Applications
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      One-Time Fee
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
                      <span className="text-sm text-slate-500 line-through">Personalized Coaching</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Full Support Package */}
              <Card className="border border-violet-200 bg-gradient-to-br from-violet-50 to-white shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col">
                <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  RECOMMENDED
                </div>
                <CardHeader className="pb-4 flex-grow">
                  <CardTitle className="text-2xl">Full Support Package</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">
                    Resume + Applications + Elite Coaching
                  </CardDescription>
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
                      <span className="text-sm">Personalized Coaching</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
