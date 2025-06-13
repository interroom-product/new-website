import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Search, Target, Clock, BarChart3, Users } from "lucide-react"
import Link from "next/link"

export default function JobApplicationsPage() {
  return (
    <div className="min-h-screen bg-ir-off-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-ir-primary to-ir-accent flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ir-neutral-800 mb-4">Job Application Outsourcing</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We apply to 100+ targeted jobs on your behalf every month with personalized targeting and professional
            presentation.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl font-bold text-ir-primary">$1,497</span>
            <span className="text-gray-600">one-time payment</span>
          </div>
          <Link href="/start?service=job-applications">
            <Button className="bg-ir-primary hover:bg-ir-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-ir-neutral-800 text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "100+ Applications Per Month",
                description:
                  "We submit applications to over 100 carefully selected positions that match your criteria and career goals.",
              },
              {
                icon: Users,
                title: "Personalized Job Targeting",
                description:
                  "Our team researches and identifies roles that align with your skills, experience, and salary expectations.",
              },
              {
                icon: BarChart3,
                title: "Weekly Progress Reports",
                description:
                  "Receive detailed weekly reports showing applications submitted, responses received, and next steps.",
              },
              {
                icon: Search,
                title: "Application Tracking Dashboard",
                description:
                  "Access your personal dashboard to monitor all applications, their status, and company responses.",
              },
              {
                icon: Clock,
                title: "30-Day Service Period",
                description:
                  "Complete service delivery within 30 days, ensuring rapid market penetration for your job search.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description:
                  "Every application is reviewed for accuracy, completeness, and professional presentation before submission.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-ir-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-ir-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-ir-neutral-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ir-neutral-800 text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We discuss your career goals, target companies, salary expectations, and job preferences to create your personalized application strategy.",
              },
              {
                step: "2",
                title: "Job Research & Targeting",
                description:
                  "Our team identifies 100+ relevant positions across multiple job boards, company websites, and our network of recruiting partners.",
              },
              {
                step: "3",
                title: "Application Customization",
                description:
                  "Each application is tailored to the specific role and company, ensuring your resume and cover letter speak directly to their needs.",
              },
              {
                step: "4",
                title: "Submission & Tracking",
                description:
                  "We submit all applications professionally and track responses, follow-ups, and next steps in your personal dashboard.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-ir-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ir-neutral-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-ir-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your Job Search?</h2>
          <p className="text-ir-off-white mb-8 text-lg">
            Let us handle the applications while you focus on preparing for interviews.
          </p>
          <Link href="/start?service=job-applications">
            <Button className="bg-white text-ir-primary hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Start Your Campaign Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
