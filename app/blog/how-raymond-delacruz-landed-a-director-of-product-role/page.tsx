import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "How Raymond Delacruz Landed a Director of Product Role — Without Getting Stuck in the Job Board Loop",
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
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Raymond Delacruz Landed a Director of Product Role — Without Getting Stuck in the Job Board Loop
              </h1>
              <div className="flex items-center text-gray-600 space-x-4">
                <span>3 min read</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-14%20at%2018.23.59-SNhMBSxiIWin9KD4AFTvJfdesyxd0x.jpeg"
                alt="Raymond Delacruz - Professional headshot of a smiling man in a light blue shirt"
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Raymond Delacruz wasn't burned out or lost in his job search. He was just intentional and clear on the
                kind of role he wanted, focused on the work that mattered, and unwilling to waste time chasing job
                postings on LinkedIn.
              </p>

              <blockquote className="border-l-4 border-violet-600 pl-6 my-8 text-lg italic text-gray-700">
                "I didn't want to spend hours tweaking resumes or applying into the void. I wanted to use that time to
                prep for interviews, network, and yeah dance some bachata."
              </blockquote>

              <p className="mb-6">So he outsourced his search to InterRoom.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">A Targeted, High-Volume Approach</h2>

              <p className="mb-6">
                We started by helping Raymond define his priorities: what kind of team he wanted to lead, which
                industries sparked his interest, and what kinds of companies aligned with his values. Then, we got to
                work — applying on his behalf using a strategic, high-volume approach focused on roles beyond the job
                boards.
              </p>

              <p className="mb-6">
                Many of the opportunities we targeted weren't publicly listed. That meant we could surface companies and
                openings he likely wouldn't have come across on his own and make sure he showed up in the right inboxes
                with the right positioning.
              </p>

              <blockquote className="border-l-4 border-violet-600 pl-6 my-8 text-lg italic text-gray-700">
                "It felt like having a team working behind the scenes while I stayed focused on the big stuff."
              </blockquote>

              <blockquote className="border-l-4 border-violet-600 pl-6 my-8 text-lg italic text-gray-700">
                "Interview invites just started showing up in my inbox."
              </blockquote>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Result: A Great Fit Without the Grind</h2>

              <p className="mb-6">
                Raymond ended up landing a Director of Product Management role that checked all the boxes. He found a
                team he was excited to join, a mission he believed in, and a leadership seat where he could drive
                impact. And he did it without wasting time on repetitive applications or dead-end postings.
              </p>

              <blockquote className="border-l-4 border-violet-600 pl-6 my-8 text-lg italic text-gray-700">
                "InterRoom made the whole thing smooth. It saved me so much time, and let me stay focused on the parts
                of the process that really matter."
              </blockquote>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Get Smarter Job Search Support</h2>

              <p className="mb-8">
                If you know what you want but don't want to spend hours applying — we can help. InterRoom combines a
                strategic lens with hands-on job search support that gets results. We work behind the scenes so you can
                focus on the parts of the process that matter most: networking, interviewing, and showing up with
                confidence.
              </p>

              <Card className="bg-violet-50 border-violet-200 mt-12">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-violet-800 mb-4 text-xl">Ready to Transform Your Job Search?</h3>
                  <p className="text-violet-700 mb-6">
                    Let us handle the applications while you focus on what matters most.
                  </p>
                  <Link href="/survey">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3">
                      Get Smarter Job Search Support
                    </Button>
                  </Link>
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
