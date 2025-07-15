import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - InterRoom",
  description: "Career advice, interview tips, and job search strategies from InterRoom's career experts.",
}

const blogPosts = [
  {
    title: "How Raymond Delacruz Landed a Director of Product Role — Without Getting Stuck in the Job Board Loop",
    excerpt:
      "Raymond wasn't burned out or lost in his job search. He was just intentional and clear on the kind of role he wanted, focused on the work that mattered, and unwilling to waste time chasing job postings on LinkedIn.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-14%20at%2018.23.59-SNhMBSxiIWin9KD4AFTvJfdesyxd0x.jpeg",
    category: "Success Stories",
    readTime: "3 min read",
    href: "/blog/how-raymond-delacruz-landed-a-director-of-product-role",
  },
  {
    title: "How to Answer 'Tell Me About Yourself' in Job Interviews",
    excerpt:
      "Master the most common interview question with our proven framework. Learn how to craft a compelling personal narrative that showcases your value.",
    image: "/images/blog/tell-me-about-yourself.avif",
    category: "Interview Tips",
    readTime: "5 min read",
    href: "/blog/how-to-answer-tell-me-about-yourself",
  },
  {
    title: "How to Answer Salary Expectations Questions",
    excerpt:
      "Navigate salary discussions with confidence. Learn proven strategies to negotiate fair compensation without pricing yourself out.",
    image: "/images/blog/salary-expectations.avif",
    category: "Interview Tips",
    readTime: "4 min read",
    href: "/blog/how-to-answer-salary-expectations",
  },
  {
    title: "How to Answer 'Why Do You Want to Work Here?'",
    excerpt:
      "Stand out from other candidates by showing genuine interest in the company. Learn how to research and craft compelling answers.",
    image: "/images/blog/why-work-here.avif",
    category: "Interview Tips",
    readTime: "4 min read",
    href: "/blog/how-to-answer-why-do-you-want-to-work-here",
  },
  {
    title: "Why Are You Leaving Your Current Job?",
    excerpt:
      "Handle this tricky question professionally and positively. Learn what to say (and what not to say) when explaining your job transition.",
    image: "/images/blog/why-are-you-leaving-your-current-job.avif",
    category: "Interview Tips",
    readTime: "4 min read",
    href: "/blog/why-are-you-leaving-your-current-job",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Career Insights & Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, proven strategies, and real success stories to help you land your dream job faster.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={post.href}
                      className="text-violet-600 hover:text-violet-700 font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
