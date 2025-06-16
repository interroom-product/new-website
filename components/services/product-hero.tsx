import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProductHero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70"></div>
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="Person working on laptop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Land the Right Job, <br />
            <span className="text-violet-600">Without</span> the Job <br />
            Search Burnout
          </h1>

          <p className="text-slate-700 text-lg mb-8 max-w-lg">
            Tired of endless applications, AI-rejected resumes, and ghosting recruiters? We take the guesswork (and
            grunt work) out of job hunting so you can focus on what matters—spending your time how you want and securing
            the best possible offer.
          </p>

          <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
