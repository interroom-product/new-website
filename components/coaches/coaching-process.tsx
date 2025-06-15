import { CheckCircle } from "lucide-react"

export default function CoachingProcess() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">How Our Coaching Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our coaches provide personalized guidance throughout your job search journey, from application to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
            <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-medium">
              1
            </div>
            <h3 className="text-xl font-medium mb-4">Initial Assessment</h3>
            <p className="text-slate-600 mb-6">
              We start with a comprehensive assessment of your skills, experience, and career goals to create a
              personalized coaching plan.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Skills and experience evaluation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Career goals discussion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Personalized strategy creation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
            <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-medium">
              2
            </div>
            <h3 className="text-xl font-medium mb-4">Ongoing Support</h3>
            <p className="text-slate-600 mb-6">
              Your dedicated coach provides continuous support throughout your job search with regular check-ins and
              guidance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Weekly strategy sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Mock interviews and feedback</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Application review and optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
            <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-medium">
              3
            </div>
            <h3 className="text-xl font-medium mb-4">Offer Negotiation</h3>
            <p className="text-slate-600 mb-6">
              When you receive offers, your coach helps you evaluate and negotiate to ensure you get the best possible
              compensation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Offer evaluation guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Negotiation strategy development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-violet-600 mr-2 shrink-0 mt-0.5" />
                <span>Compensation package optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
