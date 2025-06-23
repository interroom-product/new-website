import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Coaches() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Meet Our Expert Coaches</h2>
            <p className="text-slate-600 mb-8">
              Our coaches bring years of industry experience and insider knowledge to help you navigate your job search
              with confidence.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-violet-600" />
                </div>
                <div>
                  <span className="font-medium">Industry veterans</span> with experience at top companies
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-violet-600" />
                </div>
                <div>
                  <span className="font-medium">Personalized guidance</span> tailored to your career goals
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-violet-600" />
                </div>
                <div>
                  <span className="font-medium">Proven track record</span> of successful placements
                </div>
              </li>
            </ul>
            <Button className="bg-violet-600 hover:bg-violet-700">
              Browse Coaches <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-violet-100 rounded-xl overflow-hidden relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/janice%20photo-wZMSUo0kc33SV0I6bxikLkbEXwq6Gi.jpeg"
                alt="Janice - Product Management Coach"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-violet-100 rounded-xl overflow-hidden relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DK.jpg-OUA9fMLf1Of9zJE4ZV6eNjZaYwao2l.jpeg"
                alt="DK - Data Science Coach"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-violet-100 rounded-xl overflow-hidden relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashu-MmDn9a6PLuK3zoynr6UXR5sAPwfC7t.jpeg"
                alt="Ashu - Software Engineering Coach"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-violet-100 rounded-xl overflow-hidden relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nate_Porras_edited.jpg-ubUrZPUzVnvlJHHxgBYChPhtsZ0xFn.jpeg"
                alt="Nate - Product Management Coach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
