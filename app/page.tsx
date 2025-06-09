import HeroSection from "@/components/hero-section"
import ServiceCards from "@/components/service-cards"
import SocialProof from "@/components/social-proof"
import ExitCTA from "@/components/exit-cta"
import StickyQuizCTA from "@/components/sticky-quiz-cta"
import CostOfJobSeekingCalculator from "@/components/cost-of-job-seeking-calculator"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SocialProof />
      <CostOfJobSeekingCalculator />
      <ServiceCards />
      <ExitCTA />
      <StickyQuizCTA />
    </main>
  )
}
