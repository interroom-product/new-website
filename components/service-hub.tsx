"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, ArrowRight, FileText, MessageSquare, Target } from "lucide-react"
import Link from "next/link"

export default function ServiceHub() {
  const [activeTab, setActiveTab] = useState("individual")

  const individualServices = [
    {
      icon: <Target className="h-8 w-8 text-violet-600" />,
      title: "Job Outsourcing",
      description: "We find and apply to jobs for you, targeting roles that match your skills and career goals.",
      features: ["Personalized job matching", "Application tracking", "Weekly progress reports"],
    },
    {
      icon: <FileText className="h-8 w-8 text-violet-600" />,
      title: "Resume & LinkedIn Optimization",
      description: "Professional resume writing and LinkedIn profile optimization to get you noticed by recruiters.",
      features: ["ATS-optimized resume", "LinkedIn profile rewrite", "Cover letter templates"],
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-violet-600" />,
      title: "Career Coaching",
      description: "Strategic career guidance to help you navigate your professional journey with confidence.",
      features: ["Career strategy sessions", "Goal setting & planning", "Industry insights"],
    },
  ]

  const handleAcceleratorClick = () => {
    // Replace with your actual Google Form URL
    window.open("https://forms.google.com/your-form-url", "_blank", "width=600,height=700")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from individual services or comprehensive packages designed to accelerate your job search.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="individual">Individual Services</TabsTrigger>
            <TabsTrigger value="packages">Bundled Packages</TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {individualServices.map((service, index) => (
                <Card
                  key={index}
                  className="border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-violet-200 flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <CardTitle className="ml-3 text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-slate-600">{service.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col mt-auto">
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages">
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
                  <p className="text-slate-600 mt-4">
                    Perfect for professionals who want to accelerate their job search with essential services.
                  </p>
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
                  <Button
                    onClick={handleAcceleratorClick}
                    variant="outline"
                    className="w-full bg-transparent hover:bg-violet-50"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                  <p className="text-slate-600 mt-4">
                    Comprehensive support including interview coaching for maximum success.
                  </p>
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
              <p className="text-slate-600 mb-6 text-lg">Not sure which package is right for you?</p>
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
        </Tabs>
      </div>
    </section>
  )
}
