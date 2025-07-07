import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "How to Answer 'What Are Your Salary Expectations?' with Confidence",
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
                Salary & Benefits
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How to Answer 'What Are Your Salary Expectations?' with Confidence
              </h1>
              <div className="flex items-center text-gray-600 space-x-4">
                <span>6 min read</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src="/images/blog/salary-expectations.avif"
                alt="Two men at a desk reviewing a document on a clipboard."
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Few interview questions make candidates more nervous than "What are your salary expectations?" It's a
                crucial moment that can significantly impact your earning potential. The key is preparation, research,
                and strategic communication to ensure you get paid what you're worth.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Why Employers Ask About Salary Expectations
              </h2>
              <p className="mb-6">Understanding the employer's perspective helps you craft a better response:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>
                  <strong>Budget alignment:</strong> Ensuring your expectations fit their budget
                </li>
                <li>
                  <strong>Candidate screening:</strong> Filtering out candidates outside their range
                </li>
                <li>
                  <strong>Negotiation starting point:</strong> Establishing a baseline for discussions
                </li>
                <li>
                  <strong>Market awareness:</strong> Gauging your understanding of industry standards
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Strategies</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Research is Everything</h3>
              <Card className="bg-yellow-50 border-yellow-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-yellow-800 mb-3">Research Sources:</p>
                  <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                    <li>Glassdoor salary data</li>
                    <li>LinkedIn Salary Insights</li>
                    <li>Industry salary surveys</li>
                    <li>Professional associations</li>
                    <li>Networking contacts in similar roles</li>
                    <li>Company's previous job postings</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Try to Delay Early in the Process</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I'm really excited about this opportunity and would love to learn more about the role and
                    responsibilities first. I'm confident that if we're a good mutual fit, we can come to an agreement
                    on compensation that works for both of us."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Provide a Range When Pressed</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "Based on my research and experience level, I'm looking at a range of $75,000 to $85,000. However,
                    I'm open to discussing the complete compensation package, including benefits and growth
                    opportunities."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Focus on Total Compensation</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I'm looking for a total compensation package in the range of $80,000 to $90,000, which includes
                    base salary, benefits, and any performance bonuses. I'd love to understand more about your complete
                    benefits package."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Reference Industry Standards</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "From my research, similar positions in this market typically range from $70,000 to $85,000. Given
                    my experience with [specific skills/achievements], I'd be looking at the higher end of that range."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. When They Want a Specific Number</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "If I had to give a specific number, I'd say $82,000 based on my research and experience. However,
                    I'm flexible and would love to hear what you have budgeted for this position."
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Not to Do</h2>
              <Card className="bg-red-50 border-red-200 mb-8">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-red-800 mb-3">Avoid These Mistakes:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-2">
                    <li>Throwing out random numbers without research</li>
                    <li>Starting with your absolute minimum</li>
                    <li>Saying "I don't know" or "Whatever you think is fair"</li>
                    <li>Being completely inflexible</li>
                    <li>Focusing only on salary and ignoring benefits</li>
                    <li>Apologizing for your salary expectations</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced Tips</h2>
              <ul className="list-disc pl-6 mb-8 space-y-4">
                <li>
                  <strong>Know your walk-away number:</strong> Have a clear minimum you'll accept
                </li>
                <li>
                  <strong>Consider the full package:</strong> Health insurance, retirement, PTO, flexibility
                </li>
                <li>
                  <strong>Factor in location:</strong> Cost of living varies significantly
                </li>
                <li>
                  <strong>Account for your unique value:</strong> Specialized skills command premium pay
                </li>
                <li>
                  <strong>Be prepared to justify:</strong> Have examples of your value proposition ready
                </li>
              </ul>

              <Card className="bg-green-50 border-green-200 mt-12">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-green-800 mb-3">Key Takeaway</h3>
                  <p className="text-green-700">
                    Answering salary expectation questions confidently comes down to preparation and research. Know your
                    worth, understand the market, and communicate your value clearly. Remember, this conversation is the
                    beginning of a negotiation, not the end. Approach it as a collaborative discussion about finding a
                    compensation package that works for everyone.
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
