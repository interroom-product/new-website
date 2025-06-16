import CoachesHero from "@/components/coaches/coaches-hero"
import CoachesGrid from "@/components/coaches/coaches-grid"
import CoachingProcess from "@/components/coaches/coaching-process"
import CoachingBenefits from "@/components/coaches/coaching-benefits"
import CallToAction from "@/components/coaches/call-to-action"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CoachesHero />
      <CoachingProcess />
      <CoachesGrid />
      <CoachingBenefits />
      <CallToAction />
      <Footer />
    </div>
  )
}
