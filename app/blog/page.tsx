import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog",
}

const blogPosts = [
  {
    slug: "why-are-you-leaving-your-current-job",
    title: "Why Are You Leaving Your Current Job? Best Ways to Respond in an Interview",
    description:
      "Learn how to answer this tricky interview question with confidence and turn it into an opportunity to showcase your professionalism.",
    image: "/placeholder.svg?height=200&width=400&text=Interview+Question",
    category: "Interview Tips",
    readTime: "5 min read",
    publishDate: "Dec 15, 2024",
  },
  {
    slug: "how-to-answer-salary-expectations",
    title: "How to Answer 'What Are Your Salary Expectations?' with Confidence",
    description:
      "Master the art of salary negotiation by learning how to research, prepare, and respond to salary expectation questions professionally.",
    image: "/placeholder.svg?height=200&width=400&text=Salary+Negotiation",
    category: "Salary & Benefits",
    readTime: "6 min read",
    publishDate: "Dec 12, 2024",
  },
  {
    slug: "how-to-answer-why-do-you-want-to-work-here",
    title: "How to Answer 'Why Do You Want to Work Here?'",
    description:
      "Discover how to research companies effectively and craft compelling answers that demonstrate genuine interest and cultural fit.",
    image: "/placeholder.svg?height=200&width=400&text=Company+Research",
    category: "Interview Tips",
    readTime: "4 min read",
    publishDate: "Dec 10, 2024",
  },
  {
    slug: "how-to-answer-tell-me-about-yourself",
    title: "How to Answer 'Tell Me About Yourself' in an Interview",
    description:
      "Master the most common interview question with proven frameworks and strategies to make a strong first impression.",
    image: "/placeholder.svg?height=200&width=400&text=Tell+Me+About+Yourself",
    category: "Interview Tips",
    readTime: "5 min read",
    publishDate: "Dec 8, 2024",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The InterRoom Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights and practical advice to help you succeed in your career journey
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publishDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-violet-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{post.description}</CardDescription>
                      <div className="flex items-center text-violet-600 font-medium group-hover:text-violet-700">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
