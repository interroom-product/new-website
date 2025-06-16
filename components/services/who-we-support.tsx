import { ArrowRight } from "lucide-react"

export default function WhoWeSupport() {
  return (
    <section className="py-20 px-4 bg-violet-600 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Who We Can Support</h2>
          <p className="text-violet-100 max-w-2xl mx-auto">
            We're not headhunters, and we don't charge by the hour. Unlike traditional career services, we only get paid
            when you land the job and compensation package you want.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <ArrowRight className="h-6 w-6 text-violet-300" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">U.S. and Canadian job seekers</h3>
              <p className="text-violet-100">looking for roles in these markets.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <ArrowRight className="h-6 w-6 text-violet-300" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Citizens and permanent residents</h3>
              <p className="text-violet-100">who don't require visa sponsorship.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <ArrowRight className="h-6 w-6 text-violet-300" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Professionals with at least three years of experience</h3>
              <p className="text-violet-100">—we don't work with entry-level candidates.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <ArrowRight className="h-6 w-6 text-violet-300" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                We specialize in placing candidates in early and high-growth startups
              </h3>
              <p className="text-violet-100">
                across various roles and departments, with a strong focus on tech and finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
