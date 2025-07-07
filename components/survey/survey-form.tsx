"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface SurveyData {
  jobTitle: string
  department: string
  experience: string
  compensation: string
  visaSponsorship: string
  location: string
  supportType: string[]
}

export default function SurveyForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [surveyData, setSurveyData] = useState<SurveyData>({
    jobTitle: "",
    department: "",
    experience: "",
    compensation: "",
    visaSponsorship: "",
    location: "",
    supportType: [],
  })

  const totalSteps = 7

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Process survey and redirect to results
      const recommendation = processRecommendation(surveyData)
      localStorage.setItem("surveyData", JSON.stringify(surveyData))
      localStorage.setItem("recommendation", JSON.stringify(recommendation))
      router.push("/survey/results")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const processRecommendation = (data: SurveyData) => {
    // Check Bundle disqualifiers
    let isDisqualified =
      data.visaSponsorship === "yes" ||
      ["Operations", "HR / People / Recruiting", "IT", "Business Operations / Ops"].includes(data.department) ||
      data.jobTitle.toLowerCase().includes("vp") ||
      data.jobTitle.toLowerCase().includes("head") ||
      data.jobTitle.toLowerCase().includes("chief") ||
      data.jobTitle.toLowerCase().includes("founder") ||
      data.jobTitle.toLowerCase().includes("project manager") ||
      data.jobTitle.toLowerCase().includes("program manager") ||
      ["<$100K"].includes(data.compensation) ||
      ["0–2 years", "16–20 years", "21+ years"].includes(data.experience)

    // Location based disqualifier
    const highSupplyDepartments = [
      "Product",
      "Engineering / Tech",
      "Sales / Business Development",
      "Marketing",
      "Data / Analytics",
      "Design / UX",
    ]
    if (data.location === "Remote" && !highSupplyDepartments.includes(data.department)) {
      isDisqualified = true
    }

    if (isDisqualified) {
      // Route based on support type
      if (data.supportType.includes("Resume help") && data.supportType.length === 1) {
        return { type: "resume", title: "Resume Rewrite Service" }
      } else if (data.supportType.includes("Help applying to jobs") && data.supportType.length === 1) {
        return { type: "outsourcing", title: "Job Outsourcing Service" }
      } else if (data.supportType.includes("Coaching Sessions") && data.supportType.length === 1) {
        return { type: "coaching", title: "Coaching Sessions" }
      } else {
        return { type: "combo", title: "Combo Package (Resume + Job Outsourcing)" }
      }
    }

    return { type: "bundle", title: "Full-Service Bundle Package" }
  }

  const updateSurveyData = (field: keyof SurveyData, value: string | string[]) => {
    setSurveyData((prev) => ({ ...prev, [field]: value }))
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return surveyData.jobTitle.trim() !== ""
      case 2:
        return surveyData.department !== ""
      case 3:
        return surveyData.experience !== ""
      case 4:
        return surveyData.compensation !== ""
      case 5:
        return surveyData.visaSponsorship !== ""
      case 6:
        return surveyData.location !== ""
      case 7:
        return surveyData.supportType.length > 0
      default:
        return false
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white min-h-screen">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-medium">Unlock Your Next Career Move</h1>
            <span className="text-slate-500">
              {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-violet-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentStep === 1 && "What is your current or most recent job title?"}
              {currentStep === 2 && "Which department best describes your role?"}
              {currentStep === 3 && "How many years of total work experience do you have?"}
              {currentStep === 4 && "What is your target total compensation?"}
              {currentStep === 5 && "Do you require visa sponsorship to work in the U.S.?"}
              {currentStep === 6 && "Where are you currently based or looking for roles?"}
              {currentStep === 7 && "What kind of support are you looking for?"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Help us understand your current role and seniority level."}
              {currentStep === 2 && "This helps us tailor our recommendations to your field."}
              {currentStep === 3 && "Your experience level helps us match you with the right service."}
              {currentStep === 4 && "Include base salary, bonus, and equity in your target range."}
              {currentStep === 5 && "This affects which opportunities we can help you pursue."}
              {currentStep === 6 && "Location impacts the types of roles and companies available."}
              {currentStep === 7 && "Select all that apply - we'll customize our recommendation."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="e.g., Senior Software Engineer, Product Manager"
                  value={surveyData.jobTitle}
                  onChange={(e) => updateSurveyData("jobTitle", e.target.value)}
                  className="mt-2"
                />
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <Label>Department</Label>
                <Select value={surveyData.department} onValueChange={(value) => updateSurveyData("department", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose your department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Product">Product</SelectItem>
                    <SelectItem value="Engineering / Tech">Engineering / Tech</SelectItem>
                    <SelectItem value="Sales / Business Development">Sales / Business Development</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Customer Success">Customer Success</SelectItem>
                    <SelectItem value="Design / UX">Design / UX</SelectItem>
                    <SelectItem value="Data / Analytics">Data / Analytics</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                    <SelectItem value="HR / People / Recruiting">HR / People / Recruiting</SelectItem>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="Business Operations / Ops">Business Operations / Ops</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <Label>Years of Experience</Label>
                <RadioGroup
                  value={surveyData.experience}
                  onValueChange={(value) => updateSurveyData("experience", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0–2 years" id="exp1" />
                    <Label htmlFor="exp1">0–2 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3–5 years" id="exp2" />
                    <Label htmlFor="exp2">3–5 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="6–10 years" id="exp3" />
                    <Label htmlFor="exp3">6–10 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="11–15 years" id="exp4" />
                    <Label htmlFor="exp4">11–15 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="16–20 years" id="exp5" />
                    <Label htmlFor="exp5">16–20 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="21+ years" id="exp6" />
                    <Label htmlFor="exp6">21+ years</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <Label>Target Total Compensation</Label>
                <RadioGroup
                  value={surveyData.compensation}
                  onValueChange={(value) => updateSurveyData("compensation", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="<$100K" id="comp1" />
                    <Label htmlFor="comp1">Less than $100K</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="$100K–$125K" id="comp2" />
                    <Label htmlFor="comp2">$100K–$125K</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="$126K–$149K" id="comp3" />
                    <Label htmlFor="comp3">$126K–$149K</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="$150K–$200K" id="comp4" />
                    <Label htmlFor="comp4">$150K–$200K</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="$201K+" id="comp5" />
                    <Label htmlFor="comp5">$201K+</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <Label>Visa Sponsorship</Label>
                <RadioGroup
                  value={surveyData.visaSponsorship}
                  onValueChange={(value) => updateSurveyData("visaSponsorship", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="visa1" />
                    <Label htmlFor="visa1">Yes, I require visa sponsorship</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="visa2" />
                    <Label htmlFor="visa2">No, I don't require visa sponsorship</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {currentStep === 6 && (
              <div>
                <Label>Location</Label>
                <Select value={surveyData.location} onValueChange={(value) => updateSurveyData("location", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose your location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SF Bay Area">SF Bay Area</SelectItem>
                    <SelectItem value="New York City">New York City</SelectItem>
                    <SelectItem value="LA">Los Angeles</SelectItem>
                    <SelectItem value="Austin">Austin</SelectItem>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="Seattle">Seattle</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 7 && (
              <div>
                <Label>Type of Support (Select all that apply)</Label>
                <div className="mt-2 space-y-3">
                  {[
                    "End-to-end job search help",
                    "Resume help",
                    "Help applying to jobs",
                    "Coaching Sessions",
                    "I'm not sure yet",
                  ].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={surveyData.supportType.includes(option)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateSurveyData("supportType", [...surveyData.supportType, option])
                          } else {
                            updateSurveyData(
                              "supportType",
                              surveyData.supportType.filter((item) => item !== option),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-violet-600 hover:bg-violet-700 flex items-center"
              >
                {currentStep === totalSteps ? "Get My Recommendation" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
