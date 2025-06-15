import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
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
            <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden p-8">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-center mb-6">Our Candidates Land Jobs At</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 mb-4 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path
                          d="M36 18C36 8.059 27.941 0 18 0C8.059 0 0 8.059 0 18C0 26.99 6.584 34.453 15.188 35.812V23.203H10.617V18H15.188V14.039C15.188 9.527 17.88 7.031 22.001 7.031C23.969 7.031 26.031 7.383 26.031 7.383V11.813H23.766C21.546 11.813 20.812 13.193 20.812 14.625V18H25.781L24.953 23.203H20.812V35.812C29.416 34.453 36 26.99 36 18Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M24.953 23.203L25.781 18H20.812V14.625C20.812 13.193 21.546 11.813 23.766 11.813H26.031V7.383C26.031 7.383 23.969 7.031 22.001 7.031C17.88 7.031 15.188 9.527 15.188 14.039V18H10.617V23.203H15.188V35.812C16.104 35.938 17.044 36 18 36C18.956 36 19.896 35.938 20.812 35.812V23.203H24.953Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">Facebook</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 mb-4 flex items-center justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google__G__logo.svg-cywWUSQPJ4cLCwiYCIocGfUaj5bF3r.png"
                        alt="Google logo"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-slate-700 font-medium">Google</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 mb-4 flex items-center justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-D2liUnpQ2yC9D9TJpkHM5UKAk3m7yv.png"
                        alt="DoorDash logo"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-slate-700 font-medium">DoorDash</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 mb-4 flex items-center justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oJkVL2SmNVTRYsrK8QJZbwgrzIRssn.png"
                        alt="Netflix logo"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-slate-700 font-medium">Netflix</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-violet-600 font-medium">44% Average Compensation Increase</p>
                  <p className="text-slate-600 text-sm">for candidates placed at top companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
