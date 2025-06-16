import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Your <span className="text-violet-600">personalized</span> job search
            </h1>
            <p className="text-slate-600 text-lg mb-8 max-w-lg">
              InterRoom is your job search team, handling everything from finding and applying to jobs for you to
              coaching you through interviews and offer negotiations.
            </p>
            <p className="text-slate-600 mb-8">We're with you every step of the way in your job search.</p>
            <div>
              <Link href="/survey">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                  Unlock My Next Career Move <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PzDb7nMZS5M?si=VkCnuEV9a7Qd-p8p"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
