import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Why Are You Leaving Your Current Job? Best Ways to Respond",
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
                Why Are You Leaving Your Current Job? Best Ways to Respond in an Interview
              </h1>
              <div className="flex items-center text-gray-600 space-x-4">
                <span>December 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/placeholder.svg?height=400&width=800&text=Interview+Question"
                alt="Interview Question"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                "Why are you leaving your current job?" is one of the most common interview questions, yet it can feel
                like walking through a minefield. This question requires a positive, professional response that
                demonstrates your motivation without raising red flags about your character or work ethic.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Interviewers Ask This Question</h2>
              <p className="mb-6">
                Interviewers aren't trying to trip you up—they're gathering important information to:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Understand your motivations and career goals</li>
                <li>Assess whether you might have similar issues at their company</li>
                <li>Identify potential red flags about your attitude or work ethic</li>
                <li>Gauge your professionalism in discussing workplace challenges</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Effective Strategies for Different Situations
              </h2>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Focus on Positive Opportunities</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I've really enjoyed my time at [Current Company] and learned a tremendous amount. However, I'm
                    looking for new challenges that will allow me to grow in [specific area]. This role at your company
                    offers exactly the kind of opportunities I'm seeking to advance my career in [relevant field]."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                2. Highlight Growth and Career Development
              </h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I've reached a point in my career where I'm ready to take on more responsibility and leadership
                    opportunities. While I've grown significantly in my current role, I'm looking for a position that
                    will challenge me to develop new skills and contribute at a higher level."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                3. Address Lack of Opportunity Professionally
              </h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I've accomplished my goals in my current position and am ready for the next step in my career.
                    Unfortunately, there aren't immediate advancement opportunities available at my current company, so
                    I'm exploring roles where I can continue to grow and make a greater impact."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Handle Company Changes Factually</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "My company recently underwent a restructuring that changed the focus of my department. While I
                    understand business needs evolve, I'm looking for a role where I can utilize my skills in [specific
                    area] more fully, which aligns perfectly with this opportunity."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Address Layoffs Straightforwardly</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "Unfortunately, my position was eliminated due to budget cuts affecting several departments.
                    However, this has given me the opportunity to explore new challenges and find a role where I can
                    make an even greater contribution, like this position."
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What to Avoid</h2>
              <Card className="bg-red-50 border-red-200 mb-8">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-red-800 mb-3">Never Do These:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-2">
                    <li>Badmouth your current employer, boss, or colleagues</li>
                    <li>Complain about salary, benefits, or working conditions</li>
                    <li>Express negativity or bitterness</li>
                    <li>Give vague answers like "It's time for a change"</li>
                    <li>Lie or exaggerate the truth</li>
                    <li>Share personal conflicts or drama</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Craft Your Response</h2>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>
                  <strong>Reflect on your true motivations:</strong> What genuinely drives your job search?
                </li>
                <li>
                  <strong>Reframe negatives into positives:</strong> Focus on what you want, not what you're escaping
                </li>
                <li>
                  <strong>Practice your response:</strong> Rehearse until it sounds natural and confident
                </li>
                <li>
                  <strong>Connect to the new opportunity:</strong> Explain how this role aligns with your goals
                </li>
              </ol>

              <Card className="bg-green-50 border-green-200 mt-12">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-green-800 mb-3">Key Takeaway</h3>
                  <p className="text-green-700">
                    The key to answering "Why are you leaving your current job?" is to turn a potentially tricky
                    question into an opportunity to highlight your ambition, professionalism, and genuine interest in
                    the new role. Focus on the future, stay positive, and always connect your answer back to why you're
                    excited about the opportunity at hand.
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
