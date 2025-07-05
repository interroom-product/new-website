"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft } from "lucide-react"

interface SurveyData {
  experience: string
  currentSalary: string
  targetSalary: string
  jobSearchStatus: string
  challenges: string[]
  timeline: string
  priority: string
}

const questions = [
  {
    id: "experience",
    title: "What's your current experience level?",
    type: "radio",
    options: [
      { value: "entry", label: "Entry Level (0-2 years)" },
      { value: "mid", label: "Mid Level (3-7 years)" },
      { value: "senior", label: "Senior Level (8+ years)" },
      { value: "executive", label: "Executive/Leadership" },
    ],
  },
  {
    id: "currentSalary",
    title: "What's your current salary range?",
    type: "select",
    options: [
      { value: "under-50k", label: "Under $50,000" },
      { value: "50k-75k", label: "$50,000 - $75,000" },
      { value: "75k-100k", label: "$75,000 - $100,000" },
      { value: "100k-150k", label: "$100,000 - $150,000" },
      { value: "150k-200k", label: "$150,000 - $200,000" },
      { value: "200k-plus", label: "$200,000+" },
    ],
  },
  {
    id: "targetSalary",
    title: "What's your target salary range?",
    type: "select",
    options: [
      { value: "50k-75k", label: "$50,000 - $75,000" },
      { value: "75k-100k", label: "$75,000 - $100,000" },
      { value: "100k-150k", label: "$100,000 - $150,000" },
      { value: "150k-200k", label: "$150,000 - $200,000" },
      { value: "200k-250k", label: "$200,000 - $250,000" },
      { value: "250k-plus", label: "$250,000+" },
    ],
  },
  {
    id: "jobSearchStatus",
    title: "What's your current job search status?",
    type: "radio",
    options: [
      { value: "actively-looking", label: "Actively looking and applying" },
      { value: "passively-looking", label: "Open to opportunities but not actively searching" },
      { value: "planning", label: "Planning to start job search soon" },
      { value: "employed-exploring", label: "Currently employed but exploring options" },
    ],
  },
  {
    id: "challenges",
    title: "What are your biggest job search challenges? (Select all that apply)",
    type: "checkbox",
    options: [
      { value: "resume", label: "Writing an effective resume" },
      { value: "applications", label: "Finding and applying to relevant jobs" },
      { value: "interviews", label: "Interview preparation and performance" },
      { value: "networking", label: "Professional networking" },
      { value: "salary-negotiation", label: "Salary negotiation" },
      { value: "time", label: "Not enough time to job search effectively" },
    ],
  },
  {
    id: "timeline",
    title: "What's your ideal timeline for landing a new role?",
    type: "radio",
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-month", label: "Within 1 month" },
      { value: "3-months", label: "Within 3 months" },
      { value: "6-months", label: "Within 6 months" },
      { value: "flexible", label: "I'm flexible with timing" },
    ],
  },
  {
    id: "priority",
    title: "What's most important to you in your next role?",
    type: "radio",
    options: [
      { value: "salary", label: "Higher salary/compensation" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "culture", label: "Better company culture/work-life balance" },
      { value: "skills", label: "Learning new skills/technologies" },
      { value: "stability", label: "Job security and stability" },
    ],
  },
]

export default function SurveyForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [surveyData, setSurveyData] = useState<SurveyData>({
    experience: "",
    currentSalary: "",
    targetSalary: "",
    jobSearchStatus: "",
    challenges: [],
    timeline: "",
    priority: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate recommendation based on survey data
    const recommendation = generateRecommendation(surveyData)

    // Store recommendation in localStorage
    localStorage.setItem("recommendation", JSON.stringify(recommendation))

    // Redirect to results page
    router.push("/survey/results")
  }

  const generateRecommendation = (data: SurveyData) => {
    const { experience, currentSalary, targetSalary, challenges, timeline, priority } = data

    // Complex logic to determine the best service
    const hasResumeChallenge = challenges.includes("resume")
    const hasApplicationChallenge = challenges.includes("applications")
    const hasInterviewChallenge = challenges.includes("interviews")
    const hasTimeChallenge = challenges.includes("time")

    // High-value candidates (senior level with high salary targets)
    if (
      (experience === "senior" || experience === "executive") &&
      (targetSalary === "200k-250k" || targetSalary === "250k-plus") &&
      (timeline === "asap" || timeline === "1-month" || timeline === "3-months")
    ) {
      return { type: "bundle", title: "Full-Service Bundle Package" }
    }

    // Candidates who need comprehensive support but not necessarily high-touch
    if (
      (hasResumeChallenge && hasApplicationChallenge) ||
      (hasTimeChallenge && (hasResumeChallenge || hasApplicationChallenge))
    ) {
      return { type: "accelerator", title: "Accelerator Bundle" }
    }

    // Interview-focused candidates
    if (hasInterviewChallenge && !hasResumeChallenge && !hasApplicationChallenge) {
      return { type: "coaching", title: "Interview Coaching" }
    }

    // Resume-focused candidates
    if (hasResumeChallenge && !hasApplicationChallenge && !hasInterviewChallenge) {
      return { type: "resume", title: "Resume Rewrite Service" }
    }

    // Application-focused candidates
    if (hasApplicationChallenge && !hasResumeChallenge && !hasInterviewChallenge) {
      return { type: "outsourcing", title: "Job Outsourcing Service" }
    }

    // Default to accelerator bundle for mixed needs
    return { type: "accelerator", title: "Accelerator Bundle" }
  }

  const updateSurveyData = (field: string, value: string | string[]) => {
    setSurveyData((prev) => ({ ...prev, [field]: value }))
  }

  const isCurrentQuestionAnswered = () => {
    const currentField = questions[currentQuestion].id as keyof SurveyData
    const currentValue = surveyData[currentField]

    if (Array.isArray(currentValue)) {
      return currentValue.length > 0
    }
    return currentValue !== ""
  }

  const currentQ = questions[currentQuestion]

  if (isSubmitting) {
    return (
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white min-h-screen">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Analyzing your responses...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white min-h-screen">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Find Your Perfect Service Match</h1>
          <p className="text-slate-600">
            Answer a few quick questions to get a personalized recommendation for your career goals.
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="w-32 bg-slate-200 rounded-full h-2">
                <div
                  className="bg-violet-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <CardTitle className="text-xl">{currentQ.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentQ.type === "radio" && (
              <RadioGroup
                value={surveyData[currentQ.id as keyof SurveyData] as string}
                onValueChange={(value) => updateSurveyData(currentQ.id, value)}
              >
                {currentQ.options?.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQ.type === "select" && (
              <Select
                value={surveyData[currentQ.id as keyof SurveyData] as string}
                onValueChange={(value) => updateSurveyData(currentQ.id, value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {currentQ.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {currentQ.type === "checkbox" && (
              <div className="space-y-3">
                {currentQ.options?.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.value}
                      checked={(surveyData[currentQ.id as keyof SurveyData] as string[]).includes(option.value)}
                      onCheckedChange={(checked) => {
                        const currentValues = surveyData[currentQ.id as keyof SurveyData] as string[]
                        if (checked) {
                          updateSurveyData(currentQ.id, [...currentValues, option.value])
                        } else {
                          updateSurveyData(
                            currentQ.id,
                            currentValues.filter((v) => v !== option.value),
                          )
                        }
                      }}
                    />
                    <Label htmlFor={option.value} className="cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!isCurrentQuestionAnswered()}
                className="bg-violet-600 hover:bg-violet-700 flex items-center"
              >
                {currentQuestion === questions.length - 1 ? "Get My Recommendation" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
