import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ProductHero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-ir-neutral-100 to-ir-neutral-200">
      <div className="container mx-auto relative z-10 text-center max-w-5xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-ir-neutral-800 drop-shadow-md">
          Land Your Dream Job, <br />
          <span className="text-violet-600">Without</span> the Job Search Burnout
        </h1>

        <p className="text-slate-700 text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
          Tired of endless applications, AI-rejected resumes, and ghosting recruiters? We take the guesswork (and grunt
          work) out of job hunting so you can focus on what matters—spending your time how you want and securing the
          best possible offer.
        </p>

        {/* Adding key benefits to fill space and reinforce value */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-ir-neutral-700">
            <CheckCircle className="w-8 h-8 text-ir-primary mb-2" />
            <span className="font-semibold text-lg">100+ Applications</span>
            <p className="text-sm text-gray-600">Applied for you monthly</p>
          </div>
          <div className="flex flex-col items-center text-ir-neutral-700">
            <CheckCircle className="w-8 h-8 text-ir-primary mb-2" />
            <span className="font-semibold text-lg">ATS Optimized</span>
            <p className="text-sm text-gray-600">Resumes & profiles</p>
          </div>
          <div className="flex flex-col items-center text-ir-neutral-700">
            <CheckCircle className="w-8 h-8 text-ir-primary mb-2" />
            <span className="font-semibold text-lg">Expert Coaching</span>
            <p className="text-sm text-gray-600">Personalized interview prep</p>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Get Started Today <ArrowRight className="ml-3 h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
