import SurveyResults from "@/components/survey/survey-results"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SurveyResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SurveyResults />
      <Footer />
    </div>
  )
}
