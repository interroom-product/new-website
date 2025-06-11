import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Linkedin, Search, Target, Users } from "lucide-react"
import Link from "next/link"

export default function ResumeLinkedInPage() {
  return (
    <div className="min-h-screen bg-ir-off-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-ir-accent to-ir-secondary flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-ir-neutral-800 mb-4">Resume & LinkedIn Rewrite</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional resume and LinkedIn profile optimized for your target roles and ATS systems.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl font-bold text-ir-primary">$497</span>
            <span className="text-gray-600">one-time payment</span>
          </div>
          <Link href="/start?service=resume-linkedin">
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
                icon: FileText,
                title: "Complete Resume Rewrite",
                description:
                  "Professional rewrite of your entire resume with modern formatting and compelling content that showcases your achievements.",
              },
              {
                icon: Search,
                title: "ATS Optimization",
                description:
                  "Ensure your resume passes Applicant Tracking Systems with proper keyword optimization and formatting.",
              },
              {
                icon: Linkedin,
                title: "LinkedIn Profile Optimization",
                description:
                  "Complete LinkedIn profile makeover including headline, summary, experience sections, and skills optimization.",
              },
              {
                icon: Target,
                title: "Industry-Specific Keywords",
                description:
                  "Strategic placement of relevant keywords and phrases that recruiters and hiring managers are searching for.",
              },
              {
                icon: Users,
                title: "2 Rounds of Revisions",
                description:
                  "Two rounds of revisions included to ensure your resume and LinkedIn profile perfectly represent your value.",
              },
              {
                icon: CheckCircle,
                title: "Professional Review",
                description: "Final review by our expert team to ensure quality, consistency, and maximum impact.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-ir-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-ir-accent" />
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

      {/* Before & After Examples */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-ir-neutral-800 text-center mb-12">Before & After Examples</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-4">❌ Before</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Generic job descriptions without quantified achievements</p>
                  <p>• Outdated formatting that doesn't pass ATS systems</p>
                  <p>• Missing industry keywords and relevant skills</p>
                  <p>• Weak LinkedIn headline and summary</p>
                  <p>• Inconsistent branding across platforms</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">✅ After</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Achievement-focused bullet points with specific metrics</p>
                  <p>• Modern, ATS-friendly formatting and design</p>
                  <p>• Strategic keyword optimization for target roles</p>
                  <p>• Compelling LinkedIn headline and engaging summary</p>
                  <p>• Consistent professional branding across all platforms</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-ir-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Stand Out from the Competition?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Get a professional resume and LinkedIn profile that gets you noticed by top employers.
          </p>
          <Link href="/start?service=resume-linkedin">
            <Button className="bg-white text-ir-accent hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Transform Your Profile Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
