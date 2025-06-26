import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link" // Import Link

export default function CoachesHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Every Top Performer Has a <span className="text-violet-600">Great Coach</span> By Their Side
            </h1>
            <p className="text-slate-600 text-lg mb-8 max-w-lg">
              There are plenty of services that offer you classes, mentorship, and training but they all come with the
              same problem - they aren't individualized to your needs and planned to your outcome.
            </p>
            <p className="text-slate-600 mb-8">
              Our coaches bring industry expertise and personalized guidance to help you land your dream job.
            </p>
            <Link href="/survey" passHref>
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Find Your Perfect Match <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] bg-violet-100 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-aKWj9yjRLrsNR1as8wqIWpBpmTeIRM.png"
                alt="Professional woman working at a desk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
