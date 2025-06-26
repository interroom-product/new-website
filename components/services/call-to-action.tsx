import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-violet-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Accelerate Your Career?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Join professionals who've transformed their job search with our proven system and expert guidance.
        </p>
        <Link href="/survey">
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700 px-8">
            See If You Qualify <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
