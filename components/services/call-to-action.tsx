import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-violet-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Accelerate Your Career?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Join professionals who've transformed their job search with our proven system and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
            Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" className="bg-slate-700 hover:bg-slate-800 text-white">
            View Our Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
