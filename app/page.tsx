import HeroSection from "@/components/hero-section"
import WorkflowSteps from "@/components/workflow-steps"
import NewServiceOfferings from "@/components/new-service-offerings"
import CostOfJobSeekingCalculator from "@/components/cost-of-job-seeking-calculator"
import SocialProof from "@/components/social-proof"
import CoachesTeaser from "@/components/coaches-teaser"
import ExitCTA from "@/components/exit-cta"
import StickyQuizCTA from "@/components/sticky-quiz-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ir-off-white">
      <HeroSection />
      <WorkflowSteps />
      <NewServiceOfferings />
      <CostOfJobSeekingCalculator />
      <SocialProof />
      <CoachesTeaser />
      <ExitCTA />
      <StickyQuizCTA />
    </main>
  )
}
