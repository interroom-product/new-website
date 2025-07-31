import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function WhyInterroom() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Why InterRoom</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Job searching is lonely, draining, and confusing. We fix that with clarity and focus.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-slate-700 text-lg">
                Most people try to job search alone. They binge YouTube tips, send out resumes into a void, ask friends
                for feedback, and get stuck in their heads. It's exhausting and it rarely works.
              </p>

              <blockquote className="border-l-4 border-violet-600 pl-6 py-4 bg-slate-50">
                <p className="text-slate-700 italic mb-4">
                  "Anybody can watch videos or practice with a friend. But what I really needed was someone who stuck
                  with me when I got rejected, who reminded me I'm still capable. You were like a partner getting me
                  through the ups and downs."
                </p>
                <cite className="text-slate-600 font-medium">- Zeeshan, InterRoom Client</cite>
              </blockquote>

              <p className="text-slate-700 text-lg font-medium">That's what InterRoom is.</p>

              <p className="text-slate-700">
                We don't give you generic advice. We give you a real partner in your search.
              </p>

              <p className="text-slate-700">We're not here to hype you up or give vague feedback. We're here to:</p>
            </div>

            {/* Right Column */}
            <div>
              <Card className="bg-violet-50 border-violet-200">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Tell you what's actually holding you back</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Push you forward when rejection makes you want to stop</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Help you fix your resume and LinkedIn with copy that works</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Apply with you, not just "advise" you</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">
                        Prep you for interviews like we're on your team—because we are
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Back you in salary negotiations with confidence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Content */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <p className="text-slate-700 text-lg">
              We're not a coaching platform. We're not AI. We're not charging you $10K up front like bootcamps or other
              job services.
            </p>

            <p className="text-slate-700 text-lg font-medium">
              We're real people who do the work with you until you get hired.
            </p>

            <p className="text-slate-700 text-lg">
              You're not unqualified. You're not behind. You're just not supposed to do this alone.
            </p>

            <blockquote className="border-l-4 border-violet-600 pl-6 py-4 bg-slate-50">
              <p className="text-slate-700 italic mb-4">
                "It's grueling, man. So many rejections. Tough interviews. But having someone believe in me every week,
                remind me why I started, that's what kept me going. That was the real value."
              </p>
              <cite className="text-slate-600 font-medium">- Zeeshan</cite>
            </blockquote>

            <p className="text-slate-700 text-lg">
              We're that someone for every client we work with. No scripts. No BS. Just real support, every week, until
              you land the right role.
            </p>
          </div>

          {/* Closing Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">We don't get paid until you get hired.</h3>
            <p className="text-slate-600 text-lg font-medium">We're in this with you.</p>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              While other services charge thousands up front, we remove the financial stress. You only pay after you get
              the job.
            </p>

            <blockquote className="border-l-4 border-violet-600 pl-6 py-4 bg-slate-50 max-w-2xl mx-auto">
              <p className="text-slate-700 italic mb-4">
                "Knowing I didn't have to pay until I landed a role made the whole process easier. And in the end, I
                almost doubled my salary."
              </p>
              <cite className="text-slate-600 font-medium">- Zeeshan</cite>
            </blockquote>

            <div className="pt-8">
              <p className="text-slate-700 text-lg font-medium mb-2">You don't need more job tips.</p>
              <p className="text-slate-700 text-lg mb-4">You need clarity, momentum, and a team that has your back.</p>
              <p className="text-xl font-semibold text-slate-900 mb-2">Welcome to InterRoom.</p>
              <p className="text-slate-600 text-lg">Let's find your job and your confidence together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
