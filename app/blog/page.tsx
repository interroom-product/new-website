import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog",
}

const blogPosts = [
  {
    slug: "how-raymond-delacruz-landed-a-director-of-product-role",
    title: "How Raymond Delacruz Landed a Director of Product Role — Without Getting Stuck in the Job Board Loop",
    description:
      "Discover how Raymond landed his dream Director of Product role by outsourcing his job search and focusing on what really matters.",
    image: "/images/blog/raymond-delacruz-success-story.png",
    category: "Success Stories",
    readTime: "3 min read",
  },
  {
    slug: "why-are-you-leaving-your-current-job",
    title: "Why Are You Leaving Your Current Job? Best Ways to Respond in an Interview",
    description:
      "Learn how to answer this tricky interview question with confidence and turn it into an opportunity to showcase your professionalism.",
    image: "/images/blog/why-are-you-leaving-your-current-job.avif",
    category: "Interview Tips",
    readTime: "5 min read",
  },
  {
    slug: "how-to-answer-salary-expectations",
    title: "How to Answer 'What Are Your Salary Expectations?' with Confidence",
    description:
      "Master the art of salary negotiation by learning how to research, prepare, and respond to salary expectation questions professionally.",
    image: "/images/blog/salary-expectations.avif",
    category: "Salary & Benefits",
    readTime: "6 min read",
  },
  {
    slug: "how-to-answer-why-do-you-want-to-work-here",
    title: "How to Answer 'Why Do You Want to Work Here?'",
    description:
      "Discover how to research companies effectively and craft compelling answers that demonstrate genuine interest and cultural fit.",
    image: "/images/blog/why-work-here.avif",
    category: "Interview Tips",
    readTime: "4 min read",
  },
  {
    slug: "how-to-answer-tell-me-about-yourself",
    title: "How to Answer 'Tell Me About Yourself' in an Interview",
    description:
      "Master the most common interview question with proven frameworks and strategies to make a strong first impression.",
    image: "/images/blog/tell-me-about-yourself.avif",
    category: "Interview Tips",
    readTime: "5 min read",
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
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
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
