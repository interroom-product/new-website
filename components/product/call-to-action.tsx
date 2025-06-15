import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-violet-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Transform Your Job Search?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Join thousands of professionals who've accelerated their careers with InterRoom's personalized approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-300">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
