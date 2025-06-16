import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Target, TrendingUp, Users } from "lucide-react"

export default function CoachingBenefits() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Why Choose Our Coaches</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our coaches provide personalized guidance that delivers real results for your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-violet-600" />
              </div>
              <CardTitle className="text-xl">Industry Expertise</CardTitle>
              <CardDescription className="text-slate-600">
                Our coaches have worked at top companies and bring insider knowledge to your job search.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Experience at FAANG and top tech companies</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Specialized knowledge in various domains</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Up-to-date with industry trends and requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-violet-600" />
              </div>
              <CardTitle className="text-xl">Personalized Approach</CardTitle>
              <CardDescription className="text-slate-600">
                We tailor our coaching to your specific needs, goals, and career aspirations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Customized coaching plans for each client</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Focus on your specific career goals</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Adaptable strategies based on your progress</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-violet-600" />
              </div>
              <CardTitle className="text-xl">Proven Results</CardTitle>
              <CardDescription className="text-slate-600">
                Our coaching has helped hundreds of professionals land their dream jobs with higher compensation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>44% average compensation increase</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>90% job placement rate within 2 months</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>High client satisfaction and referral rate</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-violet-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-violet-600" />
              </div>
              <CardTitle className="text-xl">Ongoing Support</CardTitle>
              <CardDescription className="text-slate-600">
                We're with you every step of the way, from application to offer negotiation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Regular check-ins and progress tracking</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>On-demand support for urgent questions</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-600 mr-2"></div>
                  <span>Post-placement guidance for career success</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
