import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-violet-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">Find Your Perfect Match</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Take the first step toward accelerating your career with personalized coaching from industry experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/survey">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-lg px-6 sm:px-8 py-4 h-auto">
              Get Your Personalized Recommendation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
