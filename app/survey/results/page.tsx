import type { Metadata } from "next"
import SurveyResults from "@/components/survey/survey-results"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Survey Results",
}

export default function SurveyResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SurveyResults />
      <Footer />
    </div>
  )
}
