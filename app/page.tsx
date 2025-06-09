import HeroSection from "@/components/hero-section"
import NewServiceOfferings from "@/components/new-service-offerings"
import SocialProof from "@/components/social-proof"
import ExitCTA from "@/components/exit-cta"
import StickyQuizCTA from "@/components/sticky-quiz-cta"
import CostOfJobSeekingCalculator from "@/components/cost-of-job-seeking-calculator"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ir-neutral-100">
      <HeroSection />
      <SocialProof />
      <CostOfJobSeekingCalculator />
      <NewServiceOfferings />
      <ExitCTA />
      <StickyQuizCTA />
    </main>
  )
}
