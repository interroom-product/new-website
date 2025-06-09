"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions = [
    {
      id: 0,
      question: "What's your target role?",
      options: ["Software Engineer", "Product Manager", "Data Scientist", "Designer", "Other"],
    },
    {
      id: 1,
      question: "What's your experience level?",
      options: [
        "Entry Level (0-2 years)",
        "Mid Level (3-5 years)",
        "Senior Level (6-10 years)",
        "Staff/Principal (10+ years)",
      ],
    },
    {
      id: 2,
      question: "What's your target salary range?",
      options: ["$80k - $120k", "$120k - $180k", "$180k - $250k", "$250k+"],
    },
    {
      id: 3,
      question: "Where do you want to work?",
      options: ["San Francisco Bay Area", "New York City", "Seattle", "Remote", "Other"],
    },
    {
      id: 4,
      question: "Do you need visa sponsorship?",
      options: ["No, I'm authorized to work", "Yes, I need H1B sponsorship", "Yes, I need other visa support"],
    },
    {
      id: 5,
      question: "What type of companies interest you?",
      options: ["Big Tech (FAANG)", "High-growth startups", "Established companies", "No preference"],
    },
    {
      id: 6,
      question: "What's your biggest job search challenge?",
      options: [
        "Getting interviews",
        "Passing technical interviews",
        "Negotiating offers",
        "Finding the right opportunities",
      ],
    },
  ]

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      // Quiz completed, redirect to plan page
      setTimeout(() => {
        router.push("/plan")
      }, 500)
    }
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ir-off-black via-ir-charcoal to-ir-off-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-ir-periwinkle font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-purple-300 font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="bg-ir-charcoal/50 border-ir-dark-stone backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left bg-ir-charcoal/50 hover:bg-ir-charcoal/70 border border-ir-dark-stone hover:border-ir-primary rounded-lg transition-all duration-300 text-white hover:text-ir-periwinkle transform hover:scale-102"
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="ghost"
                onClick={goBack}
                disabled={currentQuestion === 0}
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="text-gray-400 text-sm">Press any option to continue</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
