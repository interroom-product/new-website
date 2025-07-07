import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "How to Answer 'Why Do You Want to Work Here?'",
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <Badge variant="secondary" className="mb-4">
                Interview Tips
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How to Answer 'Why Do You Want to Work Here?'
              </h1>
              <div className="flex items-center text-gray-600 space-x-4">
                <span>December 10, 2024</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/placeholder.svg?height=400&width=800&text=Company+Research"
                alt="Company Research"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                "Why do you want to work here?" is a critical interview question that separates prepared candidates from
                those who are just going through the motions. This question assesses your genuine interest, research
                skills, and cultural alignment with the company.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Interviewers Ask This Question</h2>
              <p className="mb-6">Interviewers want to understand:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Whether you've done your homework about the company</li>
                <li>If you have genuine enthusiasm for the role and organization</li>
                <li>How well your values align with the company culture</li>
                <li>Whether you're likely to stay long-term or just looking for any job</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Research Strategy</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Essential Research Areas</h3>
              <Card className="bg-yellow-50 border-yellow-200 mb-6">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-yellow-800 mb-3">What to Research:</h4>
                  <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                    <li>
                      <strong>Company website:</strong> Mission, values, recent news, leadership
                    </li>
                    <li>
                      <strong>Social media:</strong> LinkedIn, Twitter, Instagram for culture insights
                    </li>
                    <li>
                      <strong>Recent news:</strong> Press releases, industry coverage, achievements
                    </li>
                    <li>
                      <strong>Job description:</strong> Specific requirements and responsibilities
                    </li>
                    <li>
                      <strong>Interviewer backgrounds:</strong> LinkedIn profiles of your interviewers
                    </li>
                    <li>
                      <strong>Employee reviews:</strong> Glassdoor, Indeed for insider perspectives
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Effective Response Strategies</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Connect Your Skills to the Role</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I'm excited about this opportunity because it perfectly aligns with my background in digital
                    marketing and my passion for sustainable technology. Your company's commitment to environmental
                    innovation, combined with your recent expansion into renewable energy solutions, creates exactly the
                    kind of impactful work environment where I can contribute my expertise in green marketing
                    campaigns."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Reference Specific Company Aspects</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I've been following your company's growth over the past two years, particularly your innovative
                    approach to customer service automation. Your recent TechCrunch feature about reducing customer wait
                    times by 60% really impressed me. I'd love to contribute to that kind of customer-focused innovation
                    with my background in UX design and process optimization."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Align Values and Culture</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "What really draws me to your company is the emphasis on continuous learning and professional
                    development. I noticed that you offer educational stipends and encourage employees to attend
                    industry conferences. This commitment to growth aligns perfectly with my own values—I'm someone
                    who's always looking to expand my skills and stay current with industry trends."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Explain How You'll Contribute</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I'm particularly excited about your expansion into the European market. With my experience managing
                    international campaigns and my fluency in German and French, I could help bridge cultural gaps and
                    ensure your messaging resonates with European audiences. I see this as an opportunity to contribute
                    to your global growth while developing my own international business skills."
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The CARE Method</h2>
              <p className="mb-6">Structure your response using this framework:</p>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>
                  <strong>C - Connect:</strong> Acknowledge what attracted you to the company
                </li>
                <li>
                  <strong>A - Align:</strong> Connect your skills and experience to their needs
                </li>
                <li>
                  <strong>R - Reference:</strong> Mention specific company details you've researched
                </li>
                <li>
                  <strong>E - Explain:</strong> Describe how you'll contribute to their success
                </li>
              </ol>

              <Card className="bg-blue-50 border-blue-200 mb-8">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">CARE Method Example:</p>
                  <p className="text-blue-700">
                    "I'm drawn to your company because of your reputation for innovation in fintech (Connect). My five
                    years of experience in financial software development, particularly with blockchain technology,
                    aligns perfectly with your recent blockchain initiatives (Align). I was impressed by your
                    partnership with XYZ Bank and the 40% efficiency improvement you achieved (Reference). I'd love to
                    bring my expertise in smart contracts to help expand these partnerships and drive even greater
                    results (Explain)."
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What to Avoid</h2>
              <Card className="bg-red-50 border-red-200 mb-8">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-red-800 mb-3">Don't Say:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-2">
                    <li>"I need a job" or "You're hiring"</li>
                    <li>Generic responses that could apply to any company</li>
                    <li>Focusing only on what the company can do for you</li>
                    <li>Admitting you know nothing about the company</li>
                    <li>Mentioning only salary or benefits</li>
                    <li>Criticizing your current or former employers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200 mt-12">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-green-800 mb-3">Key Takeaway</h3>
                  <p className="text-green-700">
                    A great answer to "Why do you want to work here?" demonstrates that you've done your research,
                    understand the company's needs, and can articulate how you'll add value. It's your chance to show
                    genuine enthusiasm while proving you're not just looking for any job—you want THIS job at THIS
                    company for specific, well-researched reasons.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
