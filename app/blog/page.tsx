import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Why Are You Leaving Your Current Job? Best Ways to Respond in an Interview",
    slug: "/blog/why-are-you-leaving-your-current-job",
    excerpt:
      "Learn how to answer this crucial interview question with confidence, focusing on positive framing and future opportunities.",
  },
  {
    title: 'How to Answer "What Are Your Salary Expectations?" with Confidence',
    slug: "/blog/how-to-answer-salary-expectations",
    excerpt:
      "Master the art of salary negotiation with research-backed strategies and practical examples for confident responses.",
  },
  {
    title: 'How to Answer "Why Do You Want to Work Here?"',
    slug: "/blog/how-to-answer-why-do-you-want-to-work-here",
    excerpt:
      "Demonstrate genuine interest and thorough research with a compelling answer that connects your goals to the company's mission.",
  },
  {
    title: 'How to Answer "Tell Me About Yourself" in an Interview',
    slug: "/blog/how-to-answer-tell-me-about-yourself",
    excerpt:
      "Make a strong first impression with a structured, compelling elevator pitch that highlights your relevant experience and skills.",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The InterRoom Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights and practical advice to help you succeed in your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.slug} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                    Read more
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
