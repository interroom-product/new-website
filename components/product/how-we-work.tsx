import { Check } from "lucide-react"

export default function HowWeWork() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">How We Work</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We're not headhunters, and we don't charge by the hour. Unlike traditional career services, we only get paid
            when you land the job and compensation package you want.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">No hourly fees</h3>
            <p className="text-slate-600">
              We don't bill by the hour, so you can get all the support you need without watching the clock.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">No upfront costs for coaching</h3>
            <p className="text-slate-600">Our full support package has no upfront fees—we only succeed when you do.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">We win when you win</h3>
            <p className="text-slate-600">
              Our incentives are perfectly aligned with yours—to get you the best possible role and compensation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
