import { Search, FileText, DollarSign } from "lucide-react"

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">We Simplify Your Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our comprehensive approach covers every aspect of your job search, from application to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Job Sourcing & Applications</h3>
            <p className="text-slate-600 text-sm">
              Humans & AI work together to curate you a perfect target list of hundreds of relevant roles and handle all
              applications for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Resume Revamp & LinkedIn Overhaul</h3>
            <p className="text-slate-600 text-sm">
              We'll guide you in getting your resume and LinkedIn presence in tip top shape.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="h-12 w-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Salary Negotiation</h3>
            <p className="text-slate-600 text-sm">
              Our experts will ensure you're getting the top range of total compensation package for all your offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
