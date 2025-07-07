import type { Metadata } from "next"
import SurveyForm from "@/components/survey/survey-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Survey",
}

export default function SurveyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SurveyForm />
      <Footer />
    </div>
  )
}
